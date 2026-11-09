import { useTranslation } from "../../i18n/index.js";
import "./CodeBlock.css";

function isCommentLine(line) {
  const trimmed = line.trim();

  return (
    trimmed.startsWith("//") ||
    trimmed.startsWith("<!--") ||
    trimmed.startsWith("{/*") ||
    trimmed.startsWith("/*") ||
    trimmed.startsWith("*/") ||
    trimmed.startsWith("*")
  );
}

function isStyleCommentLine(line) {
  const trimmed = line.trim();
  const lowerLine = trimmed.toLowerCase();

  return (
    trimmed.startsWith("// Styling:") ||
    trimmed.startsWith("/*") ||
    trimmed.startsWith("*/") ||
    trimmed.startsWith("*") ||
    (isCommentLine(line) &&
      (lowerLine.includes("classname") ||
        lowerLine.includes("klassnamn") ||
        lowerLine.includes("klass") ||
        lowerLine.includes("css") ||
        lowerLine.includes("styla") ||
        lowerLine.includes("utseende")))
  );
}

function isStyleRelatedLine(line) {
  const trimmed = line.trim();
  const lowerLine = trimmed.toLowerCase();

  return (
    trimmed.includes("className=") ||
    trimmed.includes("class=") ||
    trimmed.includes("style=") ||
    trimmed.includes("style={{") ||
    trimmed.includes(":class=") ||
    trimmed.includes("[class") ||
    trimmed.includes("ngClass") ||
    lowerLine.includes(".classname") ||
    lowerLine.includes("classname =") ||
    lowerLine.includes("classlist.") ||
    lowerLine.includes('setattribute("class"') ||
    lowerLine.includes("setattribute('class'") ||
    lowerLine.includes("class:")
  );
}

function getFileHeader(line) {
  const trimmed = line.trim();
  const slashHeader = trimmed.match(
    /^\/\/\s+(.+\.(?:js|jsx|ts|tsx|html|css|vue))$/,
  );
  const htmlHeader = trimmed.match(
    /^<!--\s+(.+\.(?:js|jsx|ts|tsx|html|css|vue))\s+-->$/,
  );

  return slashHeader?.[1] || htmlHeader?.[1] || null;
}

function removeFeaturePrefix(line) {
  const prefixes =
    "(?:Columns-data|Sortering|Aktiva|Tom tabell|Öppna/stäng|Välj item|Klick utanför|Keyboard|Children|Variant|Lista|Callback|Sök|Kategori|Pris|Lager|Favoriter|Antal|Reset|Tom lista|Append data|Load more|Observer|Has more|Loading|Error|Retry|Email|Password|Success|Rensa)";

  return line
    .replace(new RegExp(`^(\\s*//\\s*)${prefixes}:\\s*`, "i"), "$1")
    .replace(new RegExp(`^(\\s*/\\*\\s*)${prefixes}:\\s*`, "i"), "$1")
    .replace(new RegExp(`^(\\s*\\{\\/\\*\\s*)${prefixes}:\\s*`, "i"), "$1")
    .replace(new RegExp(`^(\\s*<!--\\s*)${prefixes}:\\s*`, "i"), "$1");
}

function renderCode(code, showComments) {
  const lines = code
    .split("\n")
    .filter((line, index, allLines) => {
      if (showComments) return true;
      if (isCommentLine(line)) return false;

      const previousLine = allLines[index - 1] || "";
      const nextLine = allLines[index + 1] || "";
      const isLooseBlankLine =
        line.trim() === "" &&
        (isCommentLine(previousLine) || isCommentLine(nextLine));

      return !isLooseBlankLine;
    });

  return lines.map((line, index) => {
    const isComment = isCommentLine(line);
    const isStyleComment = isStyleCommentLine(line);
    const isStyleRelated = isStyleRelatedLine(line);
    const visibleLine = isComment ? removeFeaturePrefix(line).trimStart() : line;

    return (
      <span
        key={`${line}-${index}`}
        className={
          isStyleComment
            ? "code-comment-line code-style-comment-line"
            : isComment
              ? "code-comment-line"
              : isStyleRelated
                ? "code-style-related-line"
                : undefined
        }
      >
        {visibleLine}
        {index < lines.length - 1 ? "\n" : ""}
      </span>
    );
  });
}

function getOrCreateFile(files, header) {
  const existingFile = files.find((file) => file.header === header);

  if (existingFile) return existingFile;

  const file = {
    id: header || "main",
    header,
    parts: [],
  };

  files.push(file);
  return file;
}

function splitSectionsIntoFiles(sections, defaultFileName) {
  const files = [];
  let currentFile = getOrCreateFile(files, defaultFileName || null);

  sections.forEach((section) => {
    let buffer = [];

    function flushBuffer() {
      const code = buffer.join("\n");

      if (code.trim()) {
        currentFile.parts.push({
          id: `${section.id}-${currentFile.parts.length}`,
          section,
          code,
        });
      }

      buffer = [];
    }

    section.code.split("\n").forEach((line) => {
      const fileHeader = getFileHeader(line);

      if (fileHeader) {
        const bufferOnlyHasComments = buffer.every(
          (bufferLine) =>
            bufferLine.trim() === "" || isCommentLine(bufferLine),
        );
        const shouldMovePreambleToFirstFile =
          bufferOnlyHasComments &&
          (currentFile.header === null || currentFile.parts.length > 0);

        if (!shouldMovePreambleToFirstFile) {
          flushBuffer();
        }

        currentFile = getOrCreateFile(files, fileHeader);
        return;
      }

      buffer.push(line);
    });

    flushBuffer();
  });

  return files
    .filter((file) => file.parts.length > 0)
    .sort((a, b) => getFileSortIndex(a.header) - getFileSortIndex(b.header));
}

function getFileSortIndex(fileName = "") {
  if (/\.(js|jsx|ts|tsx|vue)$/.test(fileName)) return 1;
  if (/\.html$/.test(fileName)) return 2;
  if (/\.css$/.test(fileName)) return 3;
  return 4;
}

function getSectionHandlers({
  onSectionCommentToggle,
  section,
  sectionShowsComments,
  toggleHint,
}) {
  return {
    onClick: () =>
      onSectionCommentToggle?.(section.id, sectionShowsComments),
    onKeyDown: (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onSectionCommentToggle?.(section.id, sectionShowsComments);
      }
    },
    role: "button",
    tabIndex: 0,
    title: toggleHint,
  };
}

function CodePart({
  part,
  sectionCommentVisibility,
  showComments,
  onSectionCommentToggle,
  toggleHint,
}) {
  const { section, code, id } = part;
  const sectionShowsComments =
    sectionCommentVisibility[section.id] ?? showComments;

  return (
    <code
      key={id}
      className={[
        section.feature ? `code-section ${section.feature}` : "",
        "code-section-toggle",
        sectionShowsComments ? "" : "comments-hidden",
      ]
        .filter(Boolean)
        .join(" ")}
      {...getSectionHandlers({
        section,
        sectionShowsComments,
        onSectionCommentToggle,
        toggleHint,
      })}
    >
      {renderCode(code, sectionShowsComments)}
    </code>
  );
}

function FileHeader({ name }) {
  if (!name) return null;

  return (
    <code className="code-file-header">
      {name}
      {"\n"}
    </code>
  );
}

export default function CodeBlock({
  sections,
  defaultFileName,
  showComments = true,
  sectionCommentVisibility = {},
  onSectionCommentToggle,
}) {
  const { t } = useTranslation();
  const toggleHint = t("toggleSectionCommentsHint", "Click to show or hide comments in this block");
  const files = splitSectionsIntoFiles(sections, defaultFileName);

  if (files.length <= 1) {
    const onlyFile = files[0];

    return (
      <pre className="code-block">
        <FileHeader name={onlyFile?.header || defaultFileName} />
        {onlyFile?.parts.map((part) => (
          <CodePart
            key={part.id}
            part={part}
            sectionCommentVisibility={sectionCommentVisibility}
            showComments={showComments}
            onSectionCommentToggle={onSectionCommentToggle}
            toggleHint={toggleHint}
          />
        ))}
      </pre>
    );
  }

  return (
    <div className="code-block-stack">
      {files.map((file) => (
        <pre className="code-block" key={file.id}>
          <FileHeader name={file.header || defaultFileName} />

          {file.parts.map((part) => (
            <CodePart
              key={part.id}
              part={part}
              sectionCommentVisibility={sectionCommentVisibility}
              showComments={showComments}
              onSectionCommentToggle={onSectionCommentToggle}
              toggleHint={toggleHint}
            />
          ))}
        </pre>
      ))}
    </div>
  );
}
