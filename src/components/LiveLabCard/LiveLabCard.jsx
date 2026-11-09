import { useState, useMemo } from "react";
import { useTranslation } from "../../i18n/index.js";
import {
  challengeTitleKeys,
  difficultyKeys,
} from "../../i18n/translations/challengeTitles.js";
import { getLocalizedLiveLab } from "../../data/practice/liveLabChallenges.js";
import "./LiveLabCard.css";

const labFrameworks = ["JavaScript", "React", "Vue", "Angular"];
const labFilters = ["Logik", "Styling"];

function getRandomIndex(length, previousIndex) {
  if (length <= 1) return 0;

  let nextIndex = previousIndex;

  while (nextIndex === previousIndex) {
    nextIndex = Math.floor(Math.random() * length);
  }

  return nextIndex;
}

function buildPreview({ html, css, js }, language = "en") {
  const closingScriptTag = "</" + "script>";
  const styleTag = `<style>${css}</style>`;
  const scriptTag = `<script>${js}${closingScriptTag}`;

  if (/<html[\s>]/i.test(html)) {
    const htmlWithStyle = /<\/head>/i.test(html)
      ? html.replace(/<\/head>/i, `${styleTag}\n  </head>`)
      : html.replace(/<body/i, `<head>${styleTag}</head>\n  <body`);

    return /<\/body>/i.test(htmlWithStyle)
      ? htmlWithStyle.replace(/<\/body>/i, `${scriptTag}\n  </body>`)
      : `${htmlWithStyle}\n${scriptTag}`;
  }

  const langAttr = language === "sv" ? "sv" : "en";

  return `<!doctype html>
<html lang="${langAttr}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    ${styleTag}
  </head>
  <body>
    ${html}
    ${scriptTag}
  </body>
</html>`;
}

function getFullHtmlDocument(challenge, language = "en") {
  const html = challenge.html ?? "";

  if (/<html[\s>]/i.test(html)) return html;

  if (challenge.category !== "Logik" || challenge.framework) return html;

  const isSv = language === "sv";
  const langAttr = isSv ? "sv" : "en";
  const cssComment = isSv
    ? "<!-- CSS ligger i CSS-rutan och läggs in i previewn. -->"
    : "<!-- CSS resides in the CSS pane and injects into the preview. -->";
  const jsComment = isSv
    ? "<!-- JavaScript ligger i JavaScript-rutan och körs i previewn. -->"
    : "<!-- JavaScript resides in the JavaScript pane and executes in the preview. -->";

  return `<!doctype html>
<html lang="${langAttr}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${challenge.prompt.slice(0, 36)}</title>
    ${cssComment}
  </head>
  <body>
    ${html}
    ${jsComment}
  </body>
</html>`;
}

function getChallengeField(challenge, field, language = "en") {
  if (field === "html") return getFullHtmlDocument(challenge, language);

  return challenge[field] ?? "";
}

function getChallengeFramework(challenge) {
  return challenge.framework ?? "JavaScript";
}

function getCodeLabel(framework) {
  if (framework === "React") return "React / JSX";
  if (framework === "Vue") return "Vue component";
  if (framework === "Angular") return "Angular component";

  return "JavaScript";
}

function getDraftValue({ draft, challenge, field }, language = "en") {
  if (draft.challengeId !== challenge.id) {
    return getChallengeField(challenge, field, language);
  }

  return draft[field] ?? getChallengeField(challenge, field, language);
}

export default function LiveLabCard({ item, onBack }) {
  const { language, t } = useTranslation();
  const localizedItem = useMemo(() => {
    return getLocalizedLiveLab(language);
  }, [language]);
  const challenges = localizedItem.challenges ?? item.challenges ?? [];
  const availableFrameworks = labFrameworks.filter((framework) =>
    challenges.some((challenge) => getChallengeFramework(challenge) === framework),
  );
  const initialFramework = getChallengeFramework(challenges[0] ?? {});
  const initialFilter = challenges[0]?.category ?? "Logik";
  const [activeFramework, setActiveFramework] = useState(initialFramework);
  const [activeFilter, setActiveFilter] = useState(initialFilter);
  const frameworkChallenges = challenges.filter(
    (challenge) => getChallengeFramework(challenge) === activeFramework,
  );
  const availableFilters = labFilters.filter((filter) =>
    frameworkChallenges.some((challenge) => challenge.category === filter),
  );
  const selectedFilter = availableFilters.includes(activeFilter)
    ? activeFilter
    : availableFilters[0];
  const filteredChallenges = frameworkChallenges.filter(
    (challenge) => challenge.category === selectedFilter,
  );
  const [currentFilteredIndex, setCurrentFilteredIndex] = useState(0);
  const [visibleHintCount, setVisibleHintCount] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [isTopCollapsed, setIsTopCollapsed] = useState(false);
  const [draft, setDraft] = useState({
    challengeId: null,
    html: "",
    css: "",
    js: "",
  });
  const currentChallenge =
    filteredChallenges[currentFilteredIndex] ?? filteredChallenges[0];

  if (!currentChallenge) {
    return (
      <section className="live-lab-detail">
        <button className="back-button" onClick={onBack} type="button">
          {t("back", "Back")}
        </button>
        <p>{t("emptyLiveLabMessage", "No live lab exercises available yet.")}</p>
      </section>
    );
  }

  const showHtmlEditor = activeFramework === "JavaScript";
  const html = getDraftValue({
    draft,
    challenge: currentChallenge,
    field: "html",
  }, language);
  const css = getDraftValue({
    draft,
    challenge: currentChallenge,
    field: "css",
  }, language);
  const js = getDraftValue({
    draft,
    challenge: currentChallenge,
    field: "js",
  }, language);
  const editorHtml = showSolution
    ? (currentChallenge.solutionHtml ?? html)
    : html;
  const editorCss = showSolution
    ? (currentChallenge.solutionCss ?? css)
    : css;
  const editorJs = showSolution ? (currentChallenge.solutionJs ?? js) : js;
  const previewHtml = showHtmlEditor
    ? editorHtml
    : (currentChallenge.previewHtml ?? currentChallenge.html ?? "");
  const preview = buildPreview({
    html: previewHtml,
    css: editorCss,
    js: showHtmlEditor ? editorJs : "",
  }, language);
  const visibleHints = currentChallenge.hints.slice(0, visibleHintCount);
  const hasMoreHints = visibleHintCount < currentChallenge.hints.length;

  function updateDraft(field, value) {
    setDraft({
      challengeId: currentChallenge.id,
      html,
      css,
      js,
      [field]: value,
    });
  }

  function resetChallenge(nextIndex = currentFilteredIndex) {
    const nextChallenge = filteredChallenges[nextIndex];

    setCurrentFilteredIndex(nextIndex);
    setVisibleHintCount(0);
    setShowSolution(false);
    setDraft({
      challengeId: nextChallenge?.id ?? null,
      html: nextChallenge ? getChallengeField(nextChallenge, "html", language) : "",
      css: nextChallenge ? getChallengeField(nextChallenge, "css", language) : "",
      js: nextChallenge ? getChallengeField(nextChallenge, "js", language) : "",
    });
  }

  function pickRandomChallenge() {
    resetChallenge(getRandomIndex(filteredChallenges.length, currentFilteredIndex));
  }

  function changeFramework(framework) {
    const nextFrameworkChallenges = challenges.filter(
      (challenge) => getChallengeFramework(challenge) === framework,
    );
    const nextFilter =
      labFilters.find((filter) =>
        nextFrameworkChallenges.some(
          (challenge) => challenge.category === filter,
        ),
      ) ?? "Logik";

    setActiveFramework(framework);
    setActiveFilter(nextFilter);
    setCurrentFilteredIndex(0);
    setVisibleHintCount(0);
    setShowSolution(false);
    setDraft({
      challengeId: null,
      html: "",
      css: "",
      js: "",
    });
  }

  function changeFilter(filter) {
    setActiveFilter(filter);
    setCurrentFilteredIndex(0);
    setVisibleHintCount(0);
    setShowSolution(false);
    setDraft({
      challengeId: null,
      html: "",
      css: "",
      js: "",
    });
  }

  return (
    <section className="live-lab-detail">
      {isTopCollapsed && (
        <div className="live-lab-collapsed-bar">
          <button className="back-button" onClick={onBack} type="button">
            {t("back", "Back")}
          </button>
          <span>
            {activeFramework} · {currentChallenge.category} ·{" "}
            {currentFilteredIndex + 1}/{filteredChallenges.length}
          </span>
          <button
            className="live-lab-collapse-button"
            onClick={() => setIsTopCollapsed(false)}
            type="button"
          >
            {t("showTop", "Show Header")}
          </button>
        </div>
      )}

      {!isTopCollapsed && (
        <>
          <header className="detail-header">
            <button className="back-button" onClick={onBack} type="button">
              {t("back", "Back")}
            </button>

            <div>
              <p className="eyebrow">
                {difficultyKeys[item.difficulty]
                  ? t(difficultyKeys[item.difficulty], item.difficulty)
                  : item.difficulty}
              </p>
              <h1>
                {challengeTitleKeys[item.id]
                  ? t(challengeTitleKeys[item.id], item.title)
                  : item.title}
              </h1>
            </div>

            <div className="live-lab-header-actions">
              <p className="time-pill">{item.estimatedTime}</p>
              <button
                className="live-lab-collapse-button"
                onClick={() => setIsTopCollapsed(true)}
                type="button"
              >
                {t("minimizeTop", "Minimize Header")}
              </button>
            </div>
          </header>

          <div className="live-lab-compact-controls">
            <div className="live-lab-compact-left">
              <div className="live-lab-compact-tabs">
                <div className="live-lab-tabs" aria-label={t("chooseFramework", "Select framework")}>
                  {availableFrameworks.map((framework) => (
                    <button
                      className={
                        activeFramework === framework
                          ? "live-lab-tab is-active"
                          : "live-lab-tab"
                      }
                      key={framework}
                      onClick={() => changeFramework(framework)}
                      type="button"
                    >
                      {framework}
                    </button>
                  ))}
                </div>

                <div className="live-lab-tabs" aria-label={t("chooseLabType", "Select lab type")}>
                  {availableFilters.map((filter) => (
                    <button
                      className={
                        selectedFilter === filter
                          ? "live-lab-tab is-active"
                          : "live-lab-tab"
                      }
                      key={filter}
                      onClick={() => changeFilter(filter)}
                      type="button"
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              <section className="live-lab-prompt">
                <div className="training-meta-row">
                  <span>
                    {activeFramework} · {currentChallenge.category}
                  </span>
                  <span>
                    {currentFilteredIndex + 1} {t("of", "of")} {filteredChallenges.length}
                  </span>
                </div>
                <h2>{t("task", "Task")}</h2>
                <p>{currentChallenge.prompt}</p>
              </section>
            </div>

            <div className="live-lab-actions">
              <button onClick={pickRandomChallenge} type="button">
                {t("newExercise", "New Exercise")}
              </button>
              <button
                disabled={!hasMoreHints}
                onClick={() => setVisibleHintCount((count) => count + 1)}
                type="button"
              >
                {t("hint", "Hint")} {Math.min(visibleHintCount + 1, currentChallenge.hints.length)}
              </button>
              <button onClick={() => resetChallenge()} type="button">
                {t("reset", "Reset")}
              </button>
              <button
                className={showSolution ? "live-lab-answer is-active" : ""}
                onClick={() => setShowSolution((current) => !current)}
                type="button"
              >
                {showSolution ? t("hideSolution", "Hide Solution") : t("showSolution", "Show Solution")}
              </button>
            </div>
          </div>

          {visibleHints.length > 0 && (
            <section className="live-lab-hints">
              <h2>{t("hints", "Hints")}</h2>
              {visibleHints.map((hint, index) => (
                <p key={hint}>
                  <strong>{index + 1}.</strong> {hint}
                </p>
              ))}
            </section>
          )}

      <div className="live-lab-topbar">
        <div className="live-lab-tabs" aria-label={t("chooseFramework", "Select framework")}>
          {availableFrameworks.map((framework) => (
            <button
              className={
                activeFramework === framework
                  ? "live-lab-tab is-active"
                  : "live-lab-tab"
              }
              key={framework}
              onClick={() => changeFramework(framework)}
              type="button"
            >
              {framework}
            </button>
          ))}
        </div>

        <div className="live-lab-tabs" aria-label={t("chooseLabType", "Select lab type")}>
        {availableFilters.map((filter) => (
          <button
            className={
              selectedFilter === filter
                ? "live-lab-tab is-active"
                : "live-lab-tab"
            }
            key={filter}
            onClick={() => changeFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
        </div>

        <div className="live-lab-taskbar">
          <section className="live-lab-prompt">
            <div className="training-meta-row">
              <span>
                {activeFramework} · {currentChallenge.category}
              </span>
              <span>
                {currentFilteredIndex + 1} {t("of", "of")} {filteredChallenges.length}
              </span>
            </div>
            <h2>{t("task", "Task")}</h2>
            <p>{currentChallenge.prompt}</p>
          </section>

          <div className="live-lab-actions">
            <button onClick={pickRandomChallenge} type="button">
              {t("newExercise", "New Exercise")}
            </button>
            <button
              disabled={!hasMoreHints}
              onClick={() => setVisibleHintCount((count) => count + 1)}
              type="button"
            >
              {t("hint", "Hint")} {Math.min(visibleHintCount + 1, currentChallenge.hints.length)}
            </button>
            <button onClick={() => resetChallenge()} type="button">
              {t("reset", "Reset")}
            </button>
            <button
              className={showSolution ? "live-lab-answer is-active" : ""}
              onClick={() => setShowSolution((current) => !current)}
              type="button"
            >
              {showSolution ? t("hideSolution", "Hide Solution") : t("showSolution", "Show Solution")}
            </button>
          </div>

          {visibleHints.length > 0 && (
            <section className="live-lab-hints">
              <h2>{t("hints", "Hints")}</h2>
              {visibleHints.map((hint, index) => (
                <p key={hint}>
                  <strong>{index + 1}.</strong> {hint}
                </p>
              ))}
            </section>
          )}
        </div>
      </div>
        </>
      )}

      <div className="live-lab-layout">
        <section className="live-lab-workspace">
          <div className="live-lab-editors">
            <label>
              <span>
                {getCodeLabel(activeFramework)}
                {showSolution ? ` · ${t("solutionBadge", "Solution").toLowerCase()}` : ""}
              </span>
              <textarea
                onChange={(event) => updateDraft("js", event.target.value)}
                readOnly={showSolution}
                spellCheck="false"
                value={editorJs}
              />
            </label>

            {showHtmlEditor && (
              <label>
                <span>HTML{showSolution ? ` · ${t("solutionBadge", "Solution").toLowerCase()}` : ""}</span>
                <textarea
                  onChange={(event) => updateDraft("html", event.target.value)}
                  readOnly={showSolution}
                  spellCheck="false"
                  value={editorHtml}
                />
              </label>
            )}

            <label>
              <span>CSS{showSolution ? ` · ${t("solutionBadge", "Solution").toLowerCase()}` : ""}</span>
              <textarea
                onChange={(event) => updateDraft("css", event.target.value)}
                readOnly={showSolution}
                spellCheck="false"
                value={editorCss}
              />
            </label>
          </div>

          <div className="live-lab-preview-panel">
            <div className="live-lab-preview-header">{t("preview", "Preview")}</div>
            <iframe
              sandbox="allow-scripts"
              srcDoc={preview}
              title="Live preview"
            />
          </div>

        </section>
      </div>
    </section>
  );
}
