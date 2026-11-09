import { useMemo, useState } from "react";
import CodeBlock from "../CodeBlock/CodeBlock";
import { useTranslation } from "../../i18n/index.js";
import {
  challengeTitleKeys,
  difficultyKeys,
} from "../../i18n/translations/challengeTitles.js";
import { challengeInterviewTranslations } from "../../data/challenges/i18n/challengeTranslations.js";
import { hardcodedChallengeCommentsMap } from "../../data/challenges/i18n/codeCommentsMap.js";
import { comprehensiveFollowUpDictionary } from "../../data/challenges/i18n/followUpDictionary.js";
import "./ExampleCard.css";

const defaultFollowUpQuestionsSv = [
  {
    question: "Hur skulle du förklara lösningen kort?",
    answer:
      "Jag skulle beskriva vilken data komponenten använder, vilket state som behövs och hur renderingen uppdateras när användaren gör något.",
  },
  {
    question: "Vad skulle du förbättra om du hade mer tid?",
    answer:
      "Jag skulle lägga till tester, kontrollera edge cases och se om någon logik borde brytas ut för att göra lösningen lättare att läsa.",
  },
];

const defaultFollowUpQuestionsEn = [
  {
    question: "How would you summarize the solution concisely?",
    answer:
      "I would describe which data the component consumes, what state is needed, and how the rendering updates when user actions occur.",
  },
  {
    question: "What would you improve if you had additional time?",
    answer:
      "I would add automated tests, verify edge cases, and evaluate whether any logic should be extracted into custom helpers for readability.",
  },
];

const followUpDictionary = comprehensiveFollowUpDictionary;

const questionWordsToSkip = [
  "hur",
  "vad",
  "varför",
  "vilka",
  "vilket",
  "vilken",
  "skulle",
  "kan",
  "du",
  "det",
  "den",
  "här",
  "när",
  "med",
  "för",
  "och",
  "eller",
  "att",
  "som",
  "din",
  "dina",
  "ett",
  "en",
  "är",
];

const shortQuestionPatterns = [
  /utanf[oö]r\s+(.+)$/i,
  /fr[aå]n\s+(.+)$/i,
  /med\s+(.+)$/i,
  /kring\s+(.+)$/i,
  /f[oö]r\s+(.+)$/i,
  /i\s+(.+)$/i,
];

function getQuestionShortLabel(question, lang = "en") {
  const cleanQuestion = question.replace(/[?.,:]/g, "");
  const patternMatch = shortQuestionPatterns
    .map((pattern) => cleanQuestion.match(pattern)?.[1])
    .find(Boolean);
  const source = patternMatch || cleanQuestion;
  const words = source
    .split(/\s+/)
    .filter((word) => word.length > 2)
    .filter((word) => !questionWordsToSkip.includes(word.toLowerCase()));

  return words.slice(0, 2).join(" ") || (lang === "sv" ? "Fråga" : "Question");
}

const defaultStylingFeatureSv = {
  id: "styling",
  label: "Styling",
  colorClass: "feature-styling",
  interviewer: "Lägg till enkel styling för komponenten.",
  goal: "Lägg till klassnamn och en egen CSS-fil.",
  getWhatToSay() {
    return "Okej, jag lägger till ett tydligt klassnamn och flyttar utseendet till en CSS-fil.";
  },
};

const defaultStylingFeatureEn = {
  id: "styling",
  label: "Styling",
  colorClass: "feature-styling",
  interviewer: "Add clean styling for the component.",
  goal: "Add class names and a dedicated CSS stylesheet.",
  getWhatToSay() {
    return "Okay, I'll add descriptive class names and separate visual presentation into a CSS file.";
  },
};

const defaultHtmlFeatureSv = {
  id: "html",
  label: "HTML",
  colorClass: "feature-shared",
  interviewer: "Lägg till HTML-strukturen som JavaScript-koden arbetar mot.",
  goal: "Visa index.html i en egen kodruta.",
  getWhatToSay() {
    return "Okej, jag visar HTML:en separat så det blir tydligt vilka element JavaScript-koden hämtar och uppdaterar.";
  },
};

const defaultHtmlFeatureEn = {
  id: "html",
  label: "HTML",
  colorClass: "feature-shared",
  interviewer: "Add the HTML markup that the JavaScript code interacts with.",
  goal: "Display index.html in a dedicated code panel.",
  getWhatToSay() {
    return "Okay, I'll display the HTML markup separately to clarify which DOM elements the JavaScript queries and manipulates.";
  },
};

const defaultSelectedFeatures = ["html", "styling"];

function isDefaultFeatureSelection(selectedFeatures) {
  return (
    selectedFeatures.length === defaultSelectedFeatures.length &&
    defaultSelectedFeatures.every((featureId) =>
      selectedFeatures.includes(featureId),
    )
  );
}

function getComponentName(example) {
  return (example.id || example.title || "component")
    .split(/[-\s]+/)
    .filter(Boolean)
    .map((word) => `${word[0].toUpperCase()}${word.slice(1)}`)
    .join("");
}

const defaultFileNames = {
  "component-basics": "cardFunction.jsx",
  "product-list": "ProductList.jsx",
  accordion: "Accordion.jsx",
  modal: "ModalExample.jsx",
  tabs: "Tabs.jsx",
  "form-validation": "ContactForm.jsx",
};

const styleAddonOptions = [
  {
    id: "grid",
    label: "Grid",
    getCode(cssFileName, cssClassName) {
      return `// ${cssFileName}
/* Här använder jag grid när innehållet ska kunna lägga sig i kolumner. */
.${cssClassName} {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  gap: 1rem;
}
`;
    },
  },
  {
    id: "flex",
    label: "Flex",
    getCode(cssFileName, cssClassName) {
      return `// ${cssFileName}
/* Här använder jag flex när innehållet ska ligga på en rad och kunna radbrytas. */
.${cssClassName} {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}
`;
    },
  },
  {
    id: "spacing",
    label: "Spacing",
    getCode(cssFileName, cssClassName) {
      return `// ${cssFileName}
/* Här lägger jag till spacing så innehållet inte känns ihoptryckt. */
.${cssClassName} {
  padding: 1rem;
  margin-bottom: 1rem;
}
`;
    },
  },
  {
    id: "responsive",
    label: "Responsive",
    getCode(cssFileName, cssClassName) {
      return `// ${cssFileName}
/* Här gör jag layouten enklare på smalare skärmar. */
@media (max-width: 640px) {
  .${cssClassName} {
    grid-template-columns: 1fr;
    padding: 0.75rem;
  }
}
`;
    },
  },
];

function getDefaultFileName(example) {
  if (defaultFileNames[example.id]) {
    return defaultFileNames[example.id];
  }

  if (
    example.id?.startsWith("vanilla") ||
    example.id?.startsWith("javascript") ||
    ["utility-functions", "backend-endpoint", "crud-api-list"].includes(
      example.id,
    )
  ) {
    return `${getComponentName(example)}.js`;
  }

  if (example.id?.startsWith("vue")) {
    return `${getComponentName(example)}.vue`;
  }

  if (example.id?.startsWith("angular")) {
    return `${getComponentName(example)}.ts`;
  }

  return `${getComponentName(example)}.jsx`;
}

function getFileStem(fileName) {
  return fileName.replace(/\.[^.]+$/, "");
}

function getCssFileName(example, sections) {
  const cssHeader = sections
    .flatMap((section) => section.code.split("\n"))
    .map((line) => line.trim().match(/^\/\/\s+(.+\.css)$/)?.[1])
    .find(Boolean);

  return cssHeader || `${getFileStem(getDefaultFileName(example))}.css`;
}

function getCssClassName(example) {
  return (example.id || example.title || "component")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function supportsHtmlExample(example) {
  return (
    example.id?.startsWith("vanilla") ||
    example.id?.startsWith("javascript") ||
    example.id === "utility-functions"
  );
}

function cssPropertyToJsName(property) {
  return property.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function getCssRulesFromSections(sections, defaultFileName) {
  const rules = {};

  sections.forEach((section) => {
    const fileName = getSectionFileName(section, defaultFileName);

    if (!fileName.endsWith(".css")) return;

    const rulePattern = /\.([a-zA-Z0-9_-]+)\s*\{([^{}]+)\}/g;
    let match = rulePattern.exec(section.code);

    while (match) {
      const [, className, body] = match;
      const declarations = body
        .split(";")
        .map((declaration) => declaration.trim())
        .filter(Boolean)
        .map((declaration) => {
          const [property, ...valueParts] = declaration.split(":");

          return {
            property: property.trim(),
            value: valueParts.join(":").trim(),
          };
        })
        .filter((declaration) => declaration.property && declaration.value);

      if (declarations.length > 0) {
        rules[className] = [...(rules[className] || []), ...declarations];
      }

      match = rulePattern.exec(section.code);
    }
  });

  return rules;
}

function formatJsxInlineStyle(declarations) {
  const properties = declarations
    .map(
      ({ property, value }) =>
        `${cssPropertyToJsName(property)}: "${value.replace(/"/g, '\\"')}"`,
    )
    .join(", ");

  return `style={{ ${properties} }}`;
}

function formatHtmlInlineStyle(declarations) {
  const properties = declarations
    .map(({ property, value }) => `${property}: ${value}`)
    .join("; ");

  return `style="${properties}"`;
}

function getPreviousCodeLine(lines, currentIndex) {
  for (let index = currentIndex - 1; index >= 0; index -= 1) {
    const line = lines[index].trim();

    if (line) return line;
  }

  return "";
}

function getInlineStyleComment(fileName, previousLine) {
  if (/\.(jsx|tsx)$/.test(fileName)) {
    const isExpressionStart =
      previousLine.endsWith("(") ||
      previousLine.endsWith("=> (") ||
      previousLine.includes("return (");

    return isExpressionStart
      ? "// Styling: Här lägger jag utseendet direkt på elementet."
      : "{/* Styling: Här lägger jag utseendet direkt på elementet. */}";
  }

  return "<!-- Styling: Här lägger jag utseendet direkt på elementet. -->";
}

function isCodeCommentLine(line) {
  const trimmed = line.trim();

  return (
    trimmed.startsWith("//") ||
    trimmed.startsWith("<!--") ||
    trimmed.startsWith("{/*") ||
    trimmed.startsWith("/*")
  );
}

function removeCssImportFromCode(code, cssFileName) {
  const lines = code.split("\n");
  const cleanedLines = [];

  lines.forEach((line) => {
    if (!line.includes(`"./${cssFileName}"`)) {
      cleanedLines.push(line);
      return;
    }

    const previousLine = cleanedLines.at(-1) || "";

    if (previousLine.toLowerCase().includes("css-filen")) {
      cleanedLines.pop();
    }
  });

  return cleanedLines.join("\n");
}

function addInlineStylesToCode(code, fileName, cssRules) {
  const isJsx = /\.(jsx|tsx)$/.test(fileName);
  const lines = code.split("\n");
  const outputLines = [];

  lines.forEach((line, index) => {
    const classMatch = line.match(/\b(className|class)="([^"]+)"/);

    if (!classMatch || line.includes("style=")) {
      outputLines.push(line);
      return;
    }

    const [, attributeName, classValue] = classMatch;
    const classes = classValue.split(/\s+/).filter(Boolean);
    const declarations = classes.flatMap((className) => cssRules[className] || []);

    if (declarations.length === 0) {
      outputLines.push(line);
      return;
    }

    const previousOutputLine = outputLines.at(-1) || "";
    const previousComment = previousOutputLine.toLowerCase();

    if (
      isCodeCommentLine(previousOutputLine) &&
      (previousComment.includes("klassnamn") ||
        previousComment.includes("css-filen") ||
        previousComment.includes("css-fil"))
    ) {
      outputLines.pop();
    }

    const styleAttribute = isJsx
      ? formatJsxInlineStyle(declarations)
      : formatHtmlInlineStyle(declarations);
    const updatedLine = line.replace(
      `${attributeName}="${classValue}"`,
      styleAttribute,
    );

    outputLines.push(
      getInlineStyleComment(fileName, getPreviousCodeLine(lines, index)),
      updatedLine,
    );
  });

  return outputLines.join("\n");
}

function applyInlineStylingToSections({
  sections,
  defaultFileName,
  cssFileName,
  shouldApply,
}) {
  if (!shouldApply) return sections;

  const cssRules = getCssRulesFromSections(sections, defaultFileName);

  return sections
    .filter((section) => {
      const fileName = getSectionFileName(section, defaultFileName);

      return !fileName.endsWith(".css");
    })
    .map((section) => {
      const fileName = getSectionFileName(section, defaultFileName);
      const codeWithoutImport = removeCssImportFromCode(section.code, cssFileName);
      const code = addInlineStylesToCode(codeWithoutImport, fileName, cssRules);

      return { ...section, code };
    })
    .filter((section) => section.code.trim());
}

function getFallbackStylingSections(example, selectedFeatures = []) {
  const cssFileName = `${getFileStem(getDefaultFileName(example))}.css`;
  const cssClassName = getCssClassName(example);
  const defaultFileName = getDefaultFileName(example);
  const canImportCss = /\.(jsx|tsx|vue)$/.test(defaultFileName);
  const hasControls = selectedFeatures.some((featureId) =>
    [
      "search",
      "category",
      "filter",
      "range",
      "customWords",
      "price",
      "stock",
      "email",
      "password",
    ].includes(featureId),
  );
  const hasActions = selectedFeatures.some((featureId) =>
    [
      "add",
      "remove",
      "reset",
      "clear",
      "checkout",
      "delete",
      "edit",
      "toggle",
      "decrease",
      "increase",
    ].includes(featureId),
  );
  const hasSummary = selectedFeatures.some((featureId) =>
    ["count", "total", "empty", "error"].includes(featureId),
  );
  let scriptCode = canImportCss
    ? `// ${defaultFileName}
// Här importerar jag CSS-filen för komponentens utseende.
import "./${cssFileName}";

// Här ger jag wrappern ett klassnamn som CSS-filen kan styla.
// <section className="${cssClassName}">...</section>

`
    : `// ${defaultFileName}
// Här behåller jag JavaScript-logiken ren och stylar bara om resultatet visas i HTML.
// <section class="${cssClassName}">...</section>

`;

  if (example.id?.startsWith("vanilla")) {
    scriptCode = scriptCode.trimStart();
  }

  scriptCode = scriptCode.replace(/[\s\S]*/, "");

  return [
    {
      id: "styling-fallback",
      feature: "feature-styling",
      code: `${scriptCode}// ${cssFileName}
/* Här ger jag komponenten en tydlig yta utan att ändra logiken. */
.${cssClassName} {
  display: grid;
  gap: 0.75rem;
  max-width: 720px;
}

/* Här gör jag innehållet lättare att skanna under intervjun. */
.${cssClassName} article,
.${cssClassName} form,
.${cssClassName} button {
  border-radius: 8px;
}
${hasControls ? `
/* Här gör jag inputs och select enklare att använda när uppgiften har filter eller formulär. */
.${cssClassName} input,
.${cssClassName} select {
  padding: 0.55rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}
` : ""}${hasActions ? `
/* Här gör jag knapparna tydliga när användaren kan trigga actions. */
.${cssClassName} button {
  padding: 0.55rem 0.75rem;
  border: 1px solid #cbd5e1;
  background: #f8fafc;
}
` : ""}${hasSummary ? `
/* Här gör jag räknare, totaler och statusrader lätta att hitta. */
.${cssClassName} p,
.${cssClassName} strong {
  margin: 0;
}
` : ""}
`,
    },
  ];
}

function getSectionFileName(section, defaultFileName) {
  const firstLine = section.code.trimStart().split("\n")[0]?.trim() || "";
  const slashHeader = firstLine.match(
    /^\/\/\s+(.+\.(?:js|jsx|ts|tsx|html|css|vue))$/,
  );
  const htmlHeader = firstLine.match(
    /^<!--\s+(.+\.(?:js|jsx|ts|tsx|html|css|vue))\s+-->$/,
  );

  return slashHeader?.[1] || htmlHeader?.[1] || defaultFileName;
}

function addCssImportToCode(code, cssFileName) {
  if (code.includes(`"./${cssFileName}"`)) return code;

  const lines = code.split("\n");
  const firstLineIsFileHeader = /^\/\/\s+.+\.(?:js|jsx|ts|tsx)$/.test(
    lines[0]?.trim() || "",
  );
  const insertIndex = firstLineIsFileHeader ? 1 : 0;
  const importLines = [
    "// Styling: Här importerar jag CSS-filen högst upp i komponentfilen.",
    `import "./${cssFileName}";`,
    "",
  ];

  return [
    ...lines.slice(0, insertIndex),
    ...importLines,
    ...lines.slice(insertIndex),
  ].join("\n");
}

function getWrapperComment(fileName) {
  if (/\.(jsx|tsx)$/.test(fileName)) {
    return "{/* Styling: Här ger jag wrappern klassnamnet som CSS-filen stylar. */}";
  }

  return "<!-- Styling: Här ger jag wrappern klassnamnet som CSS-filen stylar. -->";
}

function addClassNameToFirstWrapper(code, fileName, cssClassName) {
  if (
    code.includes(`className="${cssClassName}"`) ||
    code.includes(`class="${cssClassName}"`)
  ) {
    return { code, changed: false };
  }

  const lines = code.split("\n");
  const classAttribute = /\.(jsx|tsx)$/.test(fileName) ? "className" : "class";
  const wrapperIndex = lines.findIndex((line) => {
    const trimmed = line.trim();

    return (
      /^<(section|div|form)\b/.test(trimmed) &&
      !trimmed.includes("className=") &&
      !trimmed.includes("class=")
    );
  });

  if (wrapperIndex === -1) return { code, changed: false };

  const updatedLine = lines[wrapperIndex].replace(
    /<(section|div|form)\b/,
    `<$1 ${classAttribute}="${cssClassName}"`,
  );

  lines.splice(wrapperIndex, 1, getWrapperComment(fileName), updatedLine);

  return { code: lines.join("\n"), changed: true };
}

function applyFallbackStylingToSections({
  sections,
  defaultFileName,
  cssFileName,
  cssClassName,
  shouldApply,
}) {
  if (!shouldApply) return sections;

  let importAdded = false;
  let wrapperClassAdded = false;

  return sections.map((section) => {
    const fileName = getSectionFileName(section, defaultFileName);
    const canImportCss = /\.(jsx|tsx)$/.test(fileName);
    const canReceiveWrapperClass = /\.(jsx|tsx|html|vue)$/.test(fileName);
    let code = section.code;

    if (!importAdded && canImportCss) {
      code = addCssImportToCode(code, cssFileName);
      importAdded = true;
    }

    if (!wrapperClassAdded && canReceiveWrapperClass) {
      const result = addClassNameToFirstWrapper(code, fileName, cssClassName);
      code = result.code;
      wrapperClassAdded = result.changed;
    }

    return { ...section, code };
  });
}

function applyFeatureColorsToSections(sections, features) {
  return sections.map((section) => {
    if (section.feature) return section;

    const matchingFeature = features.find((feature) => {
      const normalizedId = String(section.id).toLowerCase();
      const normalizedFeatureId = String(feature.id).toLowerCase();
      const labelPattern = new RegExp(
        `(?:\\/\\/|\\/\\*|\\{\\/\\*|<!--)\\s*${feature.label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*:`,
        "i",
      );

      return (
        normalizedId === normalizedFeatureId ||
        normalizedId.includes(normalizedFeatureId) ||
        labelPattern.test(section.code)
      );
    });

    if (!matchingFeature) return section;

    return {
      ...section,
      feature: matchingFeature.colorClass,
    };
  });
}

function getLineFeature(line, features) {
  return features.find((feature) => {
    const escapedLabel = feature.label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const labelPattern = new RegExp(
      `(?:\\/\\/|\\/\\*|\\{\\/\\*|<!--)\\s*${escapedLabel}\\s*:`,
      "i",
    );

    return labelPattern.test(line);
  });
}

function splitSectionsByFeatureComments(sections, features) {
  return sections.flatMap((section) => {
    if (section.feature) return [section];

    const parts = [];
    let currentLines = [];
    let currentFeature = null;
    let partIndex = 0;

    function flushPart() {
      const code = currentLines.join("\n");

      if (code.trim()) {
        parts.push({
          ...section,
          id: `${section.id}-split-${partIndex}`,
          feature: currentFeature?.colorClass,
          code: `${code}\n`,
        });
        partIndex += 1;
      }

      currentLines = [];
    }

    section.code.split("\n").forEach((line) => {
      const lineFeature = getLineFeature(line, features);
      const shouldStartFeature = lineFeature && lineFeature !== currentFeature;
      const shouldEndFeature =
        currentFeature && line.trim() === "" && currentLines.length > 0;

      if (shouldStartFeature) {
        flushPart();
        currentFeature = lineFeature;
      }

      currentLines.push(line);

      if (shouldEndFeature) {
        flushPart();
        currentFeature = null;
      }
    });

    flushPart();

    return parts.length > 0 ? parts : [section];
  });
}

function getVanillaHtmlSections(example, selectedFeatures) {
  if (!selectedFeatures.includes("html") || !supportsHtmlExample(example)) {
    return [];
  }

  const hasStyling = selectedFeatures.includes("styling");
  const cssClassName = getCssClassName(example);
  const wrapperClass = hasStyling ? ` class="${cssClassName}"` : "";
  const scriptFileName = getDefaultFileName(example);
  const htmlByChallenge = {
    "vanilla-counter": [
      {
        id: "html-base",
        code: `// index.html
<!-- Här har jag elementen som JavaScript-koden hämtar med querySelector. -->
<section${wrapperClass}>
  <h1>Counter</h1>
  <p id="value">0</p>
  <button id="increment">Increase</button>
</section>

`,
      },
      ...(selectedFeatures.includes("step")
        ? [
            {
              id: "html-step",
              feature: "feature-category",
              code: `<!-- Step: Här låter jag användaren välja hur mycket countern ska öka. -->
<input id="step" type="number" value="1" min="1" />

`,
            },
          ]
        : []),
      ...(selectedFeatures.includes("reset")
        ? [
            {
              id: "html-reset",
              feature: "feature-empty",
              code: `<!-- Reset: Här finns knappen som sätter värdet till noll igen. -->
<button id="reset">Reset</button>

`,
            },
          ]
        : []),
    ],
    "vanilla-todo-crud": [
      {
        id: "html-base",
        code: `// index.html
<!-- Här har jag formuläret som skapar nya todos. -->
<section${wrapperClass}>
  <form id="todo-form">
    <input id="todo-input" placeholder="New todo" />
    <button>Add</button>
  </form>

  <!-- Här renderar JavaScript listan från todos-arrayen. -->
  <ul id="todo-list"></ul>
</section>

`,
      },
    ],
    "vanilla-ui-components": [
      {
        id: "html-base",
        code: `// index.html
<!-- Här har jag knappen som öppnar modalen. -->
<section${wrapperClass}>
  <button id="open-modal">Open modal</button>

  <!-- Här är overlayn som JavaScript visar och döljer med en klass. -->
  <div id="modal" class="modal">
    <div class="modal-content">
      <h2>Modal</h2>
      <button id="close-modal">Close</button>
    </div>
  </div>
</section>

`,
      },
      ...(selectedFeatures.includes("tabs")
        ? [
            {
              id: "html-tabs",
              feature: "feature-sort",
              code: `<!-- Tabs: Här kopplar varje knapp till en panel med data-attribut. -->
<button data-tab="first">First</button>
<button data-tab="second">Second</button>
<section data-panel="first">First panel</section>
<section data-panel="second" hidden>Second panel</section>

`,
            },
          ]
        : []),
      ...(selectedFeatures.includes("carousel")
        ? [
            {
              id: "html-carousel",
              feature: "feature-empty",
              code: `<!-- Slider: Här har jag slides som JavaScript kan visa en i taget. -->
<button id="next-slide">Next</button>
<img data-slide src="/image-1.jpg" alt="First slide" />
<img data-slide src="/image-2.jpg" alt="Second slide" hidden />

`,
            },
          ]
        : []),
    ],
    "vanilla-fetch-sort": [
      {
        id: "html-base",
        code: `// index.html
<!-- Här visar jag status medan datan laddas. -->
<section${wrapperClass}>
  <p id="status"></p>
  <ul id="users"></ul>
</section>

`,
      },
      ...(selectedFeatures.includes("search")
        ? [
            {
              id: "html-search",
              feature: "feature-search",
              code: `<!-- Sök: Här skriver användaren texten som listan filtreras på. -->
<input id="search" placeholder="Search users" />

`,
            },
          ]
        : []),
    ],
    "vanilla-form-validation": [
      {
        id: "html-base",
        code: `// index.html
<!-- Här har jag formuläret som JavaScript ska validera. -->
<form id="signup-form"${wrapperClass}>
  <input id="email" type="email" placeholder="Email" />
  <input id="password" type="password" placeholder="Password" />
  <button>Sign up</button>
  <p id="message"></p>
</form>

`,
      },
    ],
    "vanilla-shopping-cart": [
      {
        id: "html-base",
        code: `// index.html
<!-- Här har jag ytorna som kundvagnen renderas till. -->
<section${wrapperClass}>
  <div id="products"></div>
  <div id="cart"></div>
  <p id="total"></p>
</section>

`,
      },
    ],
    "vanilla-autocomplete": [
      {
        id: "html-base",
        code: `// index.html
<!-- Här skriver användaren söktexten för autocomplete. -->
<section${wrapperClass}>
  <input id="search" placeholder="Search" autocomplete="off" />
  <ul id="suggestions"></ul>
</section>

`,
      },
    ],
    "vanilla-image-gallery": [
      {
        id: "html-base",
        code: `// index.html
<!-- Här visar jag huvudbilden och thumbnails som JavaScript styr. -->
<section${wrapperClass}>
  <img id="active-image" src="/image-1.jpg" alt="Selected" />
  <div id="thumbnails"></div>
</section>

`,
      },
    ],
  };

  return (
    htmlByChallenge[example.id] || [
      {
        id: "html-base",
        feature: "feature-shared",
        code: `// index.html
<!-- Här laddar jag JavaScript-filen och ger koden en yta att visa resultat i. -->
<section${wrapperClass}>
  <h1>${example.title}</h1>
  <pre id="output"></pre>
</section>

<script src="./${scriptFileName}"></script>

`,
      },
    ]
  );
}

export default function ExampleCard({ example, onBack }) {
  const { language, t } = useTranslation();
  const [selectedFeatures, setSelectedFeatures] = useState(
    defaultSelectedFeatures,
  );
  const [selectedStyleAddons, setSelectedStyleAddons] = useState([]);
  const [styleMode, setStyleMode] = useState("css");
  const [latestFeatureId, setLatestFeatureId] = useState(null);
  const [codeFocus, setCodeFocus] = useState(false);
  const [showComments, setShowComments] = useState(true);
  const [sectionCommentVisibility, setSectionCommentVisibility] = useState({});
  const [minimizedQuestions, setMinimizedQuestions] = useState([]);

  function toggleFeature(featureId) {
    setSelectedFeatures((prev) => {
      if (!prev.includes(featureId)) {
        setLatestFeatureId(featureId);
        return [...prev, featureId];
      }

      const updated = prev.filter((id) => id !== featureId);

      if (featureId === "styling") {
        setSelectedStyleAddons([]);
        setStyleMode("css");
      }

      if (latestFeatureId === featureId) {
        setLatestFeatureId(updated.at(-1) || null);
      }

      return updated;
    });
  }

  function clearFeatures() {
    setSelectedFeatures(defaultSelectedFeatures);
    setSelectedStyleAddons([]);
    setStyleMode("css");
    setLatestFeatureId(null);
    setSectionCommentVisibility({});
  }

  function toggleStyleAddon(addonId) {
    setSelectedStyleAddons((prev) =>
      prev.includes(addonId)
        ? prev.filter((id) => id !== addonId)
        : [...prev, addonId],
    );
  }

  function toggleStyleMode() {
    setStyleMode((current) => (current === "css" ? "inline" : "css"));
  }

  function toggleAllComments() {
    setShowComments((current) => !current);
    setSectionCommentVisibility({});
  }

  function toggleSectionComments(sectionId, currentVisibility) {
    setSectionCommentVisibility((prev) => ({
      ...prev,
      [sectionId]: !currentVisibility,
    }));
  }

  function toggleMinimizedQuestion(question) {
    setMinimizedQuestions((prev) =>
      prev.includes(question)
        ? prev.filter((item) => item !== question)
        : [...prev, question],
    );
  }

  const hasNativeStyling = example.features.some(
    (feature) => feature.id === "styling",
  );
  const hasNativeHtml = example.features.some((feature) => feature.id === "html");
  const supportsHtml = supportsHtmlExample(example);
  const isEn = language === "en";
  const challengeI18n = challengeInterviewTranslations[example.id];

  function getFeatureLabel(feature) {
    if (!isEn) return feature.label;
    const featI18n = challengeI18n?.features?.find((f) => f.id === feature.id);
    return featI18n?.label?.en || feature.label;
  }
  const defaultHtml = isEn ? defaultHtmlFeatureEn : defaultHtmlFeatureSv;
  const defaultStyling = isEn ? defaultStylingFeatureEn : defaultStylingFeatureSv;
  const htmlFeature =
    example.features.find((feature) => feature.id === "html") ??
    defaultHtml;
  const stylingFeature =
    example.features.find((feature) => feature.id === "styling") ??
    defaultStyling;
  const allFeatures = useMemo(() => [
    ...example.features,
    ...(!hasNativeHtml && supportsHtml ? [htmlFeature] : []),
    ...(!hasNativeStyling ? [stylingFeature] : []),
  ], [example.features, hasNativeHtml, supportsHtml, htmlFeature, hasNativeStyling, stylingFeature]);
  const requirementFeatures = example.features.filter(
    (feature) => !["html", "styling"].includes(feature.id),
  );
  const selectedForExample = selectedFeatures.filter((featureId) =>
    example.features.some((feature) => feature.id === featureId),
  );
  const defaultFileName = getDefaultFileName(example);
  const usesFallbackStyling =
    !hasNativeStyling && selectedFeatures.includes("styling");
  const rawCodeSections = [
    ...example.getCodeSections(selectedForExample, { language }),
    ...getVanillaHtmlSections(example, selectedFeatures),
  ];
  const cssFileName = getCssFileName(example, rawCodeSections);
  const cssClassName = getCssClassName(example);
  const baseCodeSections = [
    ...applyFallbackStylingToSections({
      sections: rawCodeSections,
      defaultFileName,
      cssFileName,
      cssClassName,
      shouldApply: usesFallbackStyling,
    }),
    ...(usesFallbackStyling
      ? getFallbackStylingSections(example, selectedFeatures)
      : []),
  ];
  const styleAddonSections = selectedFeatures.includes("styling")
    ? styleAddonOptions
        .filter((addon) => selectedStyleAddons.includes(addon.id))
        .map((addon) => ({
          id: `style-addon-${addon.id}`,
          feature: "feature-styling",
          code: addon.getCode(cssFileName, cssClassName),
        }))
    : [];
  const stylingCodeSections = [...baseCodeSections, ...styleAddonSections];
  const codeSections = applyInlineStylingToSections({
    sections: stylingCodeSections,
    defaultFileName,
    cssFileName,
    shouldApply: selectedFeatures.includes("styling") && styleMode === "inline",
  });
  const splitCodeSections = splitSectionsByFeatureComments(
    codeSections,
    allFeatures.filter((feature) => selectedFeatures.includes(feature.id)),
  );
  const coloredCodeSections = applyFeatureColorsToSections(
    splitCodeSections,
    allFeatures,
  );
  const displayCodeSections = useMemo(() => {
    if (language !== "en") return coloredCodeSections;
    return coloredCodeSections.map((section) => {
      let code = section.code;
      if (!code) return section;
      for (const [svComment, enComment] of Object.entries(hardcodedChallengeCommentsMap)) {
        if (code.includes(svComment)) {
          code = code.split(svComment).join(enComment);
        }
      }
      return { ...section, code };
    });
  }, [coloredCodeSections, language]);
  const hasDefaultSelection =
    isDefaultFeatureSelection(selectedFeatures) &&
    selectedStyleAddons.length === 0 &&
    styleMode === "css";

  const latestFeature = allFeatures.find(
    (feature) => feature.id === latestFeatureId,
  );

  const selectedBeforeLatest = selectedFeatures.filter(
    (id) => id !== latestFeatureId,
  );

  const stylingIsLatest = latestFeature?.id === "styling";
  const htmlIsLatest = latestFeature?.id === "html";
  const langKey = isEn ? "en" : "sv";

  const latestFeatureI18n = challengeI18n?.features?.find((f) => f.id === latestFeature?.id);

  const rawWhatToSay =
    htmlIsLatest
      ? htmlFeature.getWhatToSay()
      : stylingIsLatest && styleMode === "inline"
      ? (isEn
          ? "Okay, I'll apply styling directly on the elements with style attributes instead of a separate CSS file."
          : "Okej, jag lägger stylingen direkt på elementen med style-attribut i stället för en separat CSS-fil.")
      : latestFeature
        ? (latestFeatureI18n?.whatToSay?.[langKey] || latestFeature.getWhatToSay(selectedBeforeLatest))
        : (challengeI18n?.baseWhatToSay?.[langKey] || example.baseWhatToSay);

  const whatToSay = rawWhatToSay;

  const displayInterviewPrompt =
    challengeI18n?.interviewPrompt?.[langKey] || example.interviewPrompt;

  const displayInterviewerText =
    latestFeatureI18n?.interviewer?.[langKey] ||
    (latestFeature?.id === "html"
      ? htmlFeature.interviewer
      : latestFeature?.id === "styling"
      ? (isEn ? "Add basic styling to make the component cleaner and more readable." : stylingFeature.interviewer)
      : latestFeature?.interviewer || displayInterviewPrompt);

  const displayCurrentGoal =
    stylingIsLatest && styleMode === "inline"
      ? t("inlineStyleGoal", "Apply styling directly to elements using inline styles.")
      : latestFeatureI18n?.goal?.[langKey] ||
        (latestFeature?.id === "html"
          ? htmlFeature.goal
          : latestFeature?.id === "styling"
          ? (isEn ? "Add class names and an accompanying CSS stylesheet." : stylingFeature.goal)
          : latestFeature?.goal || challengeI18n?.currentGoal?.[langKey] || example.currentGoal);

  const visibleFollowUps = useMemo(() => {
    const defaultList = isEn ? defaultFollowUpQuestionsEn : defaultFollowUpQuestionsSv;
    const baseQuestions =
      example.baseFollowUpQuestions?.length > 0
        ? example.baseFollowUpQuestions
        : defaultList;
    const featureOrder = [
      latestFeatureId,
      ...selectedFeatures.filter((featureId) => featureId !== latestFeatureId),
    ].filter(Boolean);
    const featureQuestions = featureOrder.flatMap((featureId) =>
      (example.followUpQuestions || []).filter((item) =>
        item.featureIds.includes(featureId),
      ),
    );

    const merged = [...featureQuestions, ...baseQuestions].filter(
      (item, index, allItems) =>
        allItems.findIndex((otherItem) => otherItem.question === item.question) ===
        index,
    );

    if (!isEn) return merged;

    return merged.map((item) => {
      if (followUpDictionary[item.question]) {
        return {
          ...item,
          question: followUpDictionary[item.question].q,
          answer: followUpDictionary[item.question].a,
        };
      }
      // Stable match for feature follow-ups: 'Vad är viktigast att tänka på när du lägger till X?' or 'Vad är viktigast när du lägger till X?'
      const featureMatch = item.question.match(/(?:lägger till|att tänka på när du lägger till)\s+([^?]+)/i);
      if (featureMatch) {
        const rawFeatureName = featureMatch[1].trim();
        const featureObj = allFeatures.find((f) => f.label.toLowerCase() === rawFeatureName.toLowerCase() || f.id.toLowerCase() === rawFeatureName.toLowerCase());
        const featureI18n = challengeI18n?.features?.find((f) => f.id === featureObj?.id);
        const translatedFeatureName = featureI18n?.label?.en || rawFeatureName;
        return {
          ...item,
          question: `What is most critical when adding ${translatedFeatureName}?`,
          answer: "I want requests, state management, and error handling to stay synchronized so users get accurate feedback without regressing earlier features.",
        };
      }
      return item;
    });
  }, [example, latestFeatureId, selectedFeatures, isEn, allFeatures, challengeI18n]);

  return (
    <article className={codeFocus ? "example-detail code-focus" : "example-detail"}>
      <header className="detail-header">
        <button className="back-button" onClick={onBack} type="button">
          {t("back", "Back")}
        </button>

        <div>
          <p className="eyebrow">
            {difficultyKeys[example.difficulty]
              ? t(difficultyKeys[example.difficulty], example.difficulty)
              : example.difficulty}
          </p>
          <h1>
            {challengeTitleKeys[example.id]
              ? t(challengeTitleKeys[example.id], example.title)
              : example.title}
          </h1>
        </div>

        <div className="detail-header-actions">
          {supportsHtml && (
            <button
              className={
                selectedFeatures.includes("html")
                  ? `focus-button is-active ${htmlFeature.colorClass}`
                  : "focus-button"
              }
              onClick={() => toggleFeature("html")}
              type="button"
            >
              {selectedFeatures.includes("html") ? t("removeHtml", "Remove HTML") : "HTML"}
            </button>
          )}
          <button
            className={
              selectedFeatures.includes("styling")
                ? `focus-button is-active ${stylingFeature.colorClass}`
                : "focus-button"
            }
            onClick={() => toggleFeature("styling")}
            type="button"
          >
            {selectedFeatures.includes("styling") ? t("removeStyling", "Remove Styling") : t("styling", "Styling")}
          </button>
          {selectedFeatures.includes("styling") && (
            <button
              className={
                styleMode === "inline"
                  ? "focus-button is-active inline-style-button"
                  : "focus-button inline-style-button"
              }
              onClick={toggleStyleMode}
              type="button"
            >
              {styleMode === "inline" ? t("cssFile", "CSS file") : t("inline", "Inline")}
            </button>
          )}
          <button
            className={showComments ? "focus-button is-active" : "focus-button"}
            onClick={toggleAllComments}
            type="button"
          >
            {showComments ? t("hideComments", "Hide Comments") : t("showComments", "Show Comments")}
          </button>
          <button
            className={codeFocus ? "focus-button is-active" : "focus-button"}
            onClick={() => setCodeFocus((current) => !current)}
            type="button"
          >
            {codeFocus ? t("showInterview", "Show Interview") : t("codeFocus", "Code Focus")}
          </button>
          <p className="time-pill">{example.estimatedTime}</p>
        </div>
      </header>

      <div className="interview-layout">
        <aside className="controls-panel" aria-label={t("interviewAndRequirements", "Interview and requirements")}>
          {!codeFocus && (
            <section className="conversation-panel" aria-label={t("interview", "Interview")}>
              <div className="interview-box interviewer">
                <h2>{t("interviewerSays", "Interviewer says")}</h2>
                <p>{displayInterviewerText}</p>
              </div>

              <div className="interview-box goal">
                <h2>{t("currentGoal", "Current goal")}</h2>
                <p>{displayCurrentGoal}</p>
              </div>

              <div className="interview-box thinking">
                <h2>{t("howIThink", "My thought process")}</h2>
                <p>{whatToSay}</p>
              </div>
            </section>
          )}

          <section className="requirement-panel">
            <div className="feature-buttons">
              {requirementFeatures.map((feature) => {
                const isActive = selectedFeatures.includes(feature.id);

                return (
                  <button
                    key={feature.id}
                    className={
                      isActive
                        ? `feature-button active ${feature.colorClass}`
                        : "feature-button"
                    }
                    onClick={() => toggleFeature(feature.id)}
                    type="button"
                  >
                    {isActive ? `${t("removePrefix", "Remove")}: ${getFeatureLabel(feature)}` : getFeatureLabel(feature)}
                  </button>
                );
              })}
            </div>
          </section>

          <div className="interview-actions">
            <button
              className="clear-button"
              onClick={clearFeatures}
              disabled={hasDefaultSelection}
              type="button"
            >
              {t("clear", "Clear")}
            </button>
          </div>

          <div className="progress-strip" aria-label={t("addedRequirements", "Added requirements")}>
            {allFeatures.map((feature) => (
              <span
                key={feature.id}
                className={
                  selectedFeatures.includes(feature.id)
                    ? `progress-dot active ${feature.colorClass}`
                    : "progress-dot"
                }
              />
            ))}
          </div>

          {visibleFollowUps.length > 0 && (
            <section className="follow-up-panel">
              <h2>{t("commonFollowUps", "Common follow-up questions")}</h2>
              {visibleFollowUps.map((item) => {
                const isMinimized = minimizedQuestions.includes(item.question);
                const shortQuestion = getQuestionShortLabel(item.question, language);

                return (
                  <div
                    className={
                      isMinimized
                        ? "follow-up-item is-minimized"
                        : "follow-up-item"
                    }
                    key={item.question}
                  >
                    <div className="follow-up-title-row">
                      <strong>{isMinimized ? shortQuestion : item.question}</strong>
                      <button
                        className="follow-up-toggle"
                        onClick={() => toggleMinimizedQuestion(item.question)}
                        type="button"
                      >
                        {isMinimized ? t("show", "Show") : t("minimize", "Minimize")}
                      </button>
                    </div>

                    {!isMinimized && <p>{item.answer}</p>}
                  </div>
                );
              })}
            </section>
          )}
        </aside>

        <section className="code-panel" aria-label={t("currentCode", "Current code")}>
          <div className="code-panel-header">
            <h2>{t("currentCode", "Current code")}</h2>
            <div className="feature-legend" aria-label={t("addedRequirements", "Added requirements")}>
              {selectedFeatures.map((featureId) => {
                const feature = allFeatures.find(
                  (item) => item.id === featureId,
                );

                if (!feature) return null;

                return (
                  <span
                    key={featureId}
                    className={`legend-item ${feature.colorClass}`}
                  >
                    {getFeatureLabel(feature)}
                  </span>
                );
              })}
            </div>
          </div>
          {selectedFeatures.includes("styling") && (
            <div className="style-addon-panel" aria-label={t("addStylingRequirements", "Add styling requirements")}>
              {styleAddonOptions.map((addon) => {
                const isActive = selectedStyleAddons.includes(addon.id);

                return (
                  <button
                    className={`style-addon-button style-addon-${addon.id}${
                      isActive ? " is-active" : ""
                    }`}
                    key={addon.id}
                    onClick={() => toggleStyleAddon(addon.id)}
                    type="button"
                  >
                    {addon.label}
                  </button>
                );
              })}
            </div>
          )}
          <CodeBlock
            sections={displayCodeSections}
            defaultFileName={getDefaultFileName(example)}
            showComments={showComments}
            sectionCommentVisibility={sectionCommentVisibility}
            onSectionCommentToggle={toggleSectionComments}
          />
        </section>
      </div>
    </article>
  );
}
