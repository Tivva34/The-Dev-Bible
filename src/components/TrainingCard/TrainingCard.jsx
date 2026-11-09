import { useMemo, useState } from "react";
import { useTranslation } from "../../i18n/index.js";
import {
  challengeTitleKeys,
  difficultyKeys,
} from "../../i18n/translations/challengeTitles.js";
import { getLocalizedTrainingChallenges } from "../../data/practice/trainingChallenges.js";
import "./TrainingCard.css";

function getRandomIndex(length, previousIndex) {
  if (length <= 1) return 0;

  let nextIndex = previousIndex;

  while (nextIndex === previousIndex) {
    nextIndex = Math.floor(Math.random() * length);
  }

  return nextIndex;
}

const trainingCategories = ["JavaScript", "React", "Vue", "Angular"];
const defaultHtmlStarter = `<main class="practice-app">
  <h1>Practice</h1>
  <section id="app"></section>
</main>`;
const defaultCssStarter = `.practice-app {
  display: grid;
  gap: 0.75rem;
  max-width: 720px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
}

button,
input,
select {
  min-height: 2.4rem;
  padding: 0.55rem 0.7rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
}`;

function TrainingCodeBlock({ label, code }) {
  return (
    <div className="training-code-panel">
      <div className="training-code-header">{label}</div>
      <pre className="training-code-block">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function normalizeCode(code) {
  return code
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\/\/.*$/gm, "")
    .replace(/\s+/g, "")
    .replace(/;/g, "")
    .replace(/"/g, "'")
    .trim();
}

function getMainLabel(category) {
  if (category === "React") return "React / JSX";
  if (category === "Vue") return "Vue component";
  if (category === "Angular") return "Angular";
  return "JavaScript";
}

function getActiveDraftValue({ challenge, field, userDraft, fallback }) {
  if (userDraft.challengeId !== challenge.id) return fallback;

  return userDraft[field] ?? fallback;
}

export default function TrainingCard({ item, onBack }) {
  const { language, t } = useTranslation();
  const localizedData = useMemo(() => {
    return getLocalizedTrainingChallenges(language);
  }, [language]);
  const challenges = localizedData.challenges ?? item.challenges ?? [];
  const availableCategories = trainingCategories.filter((category) =>
    challenges.some((challenge) => challenge.category === category),
  );
  const firstIndex = useMemo(
    () => getRandomIndex(challenges.length, -1),
    [challenges.length],
  );
  const firstChallenge = challenges[firstIndex];
  const firstCategory =
    availableCategories.find(
      (category) => category === firstChallenge?.category,
    ) ??
    availableCategories[0] ??
    "JavaScript";
  const [currentIndex, setCurrentIndex] = useState(firstIndex);
  const [activeCategory, setActiveCategory] = useState(firstCategory);
  const [visibleHintCount, setVisibleHintCount] = useState(0);
  const [showSolution, setShowSolution] = useState(false);
  const [userDraft, setUserDraft] = useState({
    challengeId: null,
    code: "",
    html: "",
    css: "",
  });
  const [checkResult, setCheckResult] = useState(null);
  const filteredChallenges = challenges.filter(
    (challenge) => challenge.category === activeCategory,
  );
  const currentChallenge =
    challenges[currentIndex]?.category === activeCategory
      ? challenges[currentIndex]
      : filteredChallenges[0];
  const currentFilteredIndex = filteredChallenges.findIndex(
    (challenge) => challenge.id === currentChallenge?.id,
  );

  function getChallengeIndex(challenge) {
    return challenges.findIndex((item) => item.id === challenge?.id);
  }

  function resetChallenge(nextIndex) {
    setCurrentIndex(nextIndex);
    setVisibleHintCount(0);
    setShowSolution(false);
    setCheckResult(null);
  }

  function pickRandomChallenge() {
    const nextFilteredIndex = getRandomIndex(
      filteredChallenges.length,
      currentFilteredIndex,
    );
    resetChallenge(getChallengeIndex(filteredChallenges[nextFilteredIndex]));
  }

  function changeCategory(category) {
    const firstMatch = challenges.find(
      (challenge) => challenge.category === category,
    );

    setActiveCategory(category);
    resetChallenge(getChallengeIndex(firstMatch));
  }

  function checkAnswer() {
    const showHtmlEditor =
      currentChallenge.category === "JavaScript" ||
      currentChallenge.starterHtml !== undefined ||
      currentChallenge.solutionHtml !== undefined;
    const showCssEditor = true;
    const activeUserCode = getActiveDraftValue({
      challenge: currentChallenge,
      field: "code",
      userDraft,
      fallback: currentChallenge.starterCode,
    });
    const activeUserHtml = getActiveDraftValue({
      challenge: currentChallenge,
      field: "html",
      userDraft,
      fallback: currentChallenge.starterHtml ?? defaultHtmlStarter,
    });
    const activeUserCss = getActiveDraftValue({
      challenge: currentChallenge,
      field: "css",
      userDraft,
      fallback: currentChallenge.starterCss ?? defaultCssStarter,
    });
    const normalizedUserCode = normalizeCode(activeUserCode);
    const normalizedStarterCode = normalizeCode(currentChallenge.starterCode);
    const normalizedSolution = normalizeCode(currentChallenge.solution);
    const starterMatches =
      normalizedUserCode === normalizedStarterCode &&
      (!showHtmlEditor ||
        normalizeCode(activeUserHtml) ===
          normalizeCode(currentChallenge.starterHtml ?? defaultHtmlStarter)) &&
      (!showCssEditor ||
        normalizeCode(activeUserCss) ===
          normalizeCode(currentChallenge.starterCss ?? defaultCssStarter));
    const solutionMatches =
      normalizedUserCode === normalizedSolution &&
      (currentChallenge.solutionHtml === undefined ||
        normalizeCode(activeUserHtml) ===
          normalizeCode(currentChallenge.solutionHtml)) &&
      (currentChallenge.solutionCss === undefined ||
        normalizeCode(activeUserCss) === normalizeCode(currentChallenge.solutionCss));

    if (starterMatches) {
      setCheckResult({
        type: "neutral",
        title: t("unchangedTitle", "Not modified yet"),
        message: t("unchangedMessage", "Write your solution in the code editor first, then click check to validate."),
      });
      return;
    }

    if (solutionMatches) {
      setCheckResult({
        type: "success",
        title: t("correctTitle", "Looks good!"),
        message: t("correctMessage", "Your solution matches the expected answer when comments and whitespace are ignored."),
      });
      return;
    }

    setCheckResult({
      type: "warning",
      title: t("differentTitle", "Not matching solution yet"),
      message: t("differentMessage", "Compare structure, return values, and methods used. You can take a hint or view the solution if you get stuck."),
    });
  }

  if (!currentChallenge) {
    return (
      <section className="training-detail">
        <button className="back-button" onClick={onBack} type="button">
          {t("back", "Back")}
        </button>
        <p>{t("emptyTrainingMessage", "No practice exercises available yet.")}</p>
      </section>
    );
  }

  const visibleHints = currentChallenge.hints.slice(0, visibleHintCount);
  const hasMoreHints = visibleHintCount < currentChallenge.hints.length;
  const activeUserCode =
    userDraft.challengeId === currentChallenge.id
      ? userDraft.code
      : currentChallenge.starterCode;
  const showHtmlEditor =
    currentChallenge.category === "JavaScript" ||
    currentChallenge.starterHtml !== undefined ||
    currentChallenge.solutionHtml !== undefined;
  const activeUserHtml = getActiveDraftValue({
    challenge: currentChallenge,
    field: "html",
    userDraft,
    fallback: currentChallenge.starterHtml ?? defaultHtmlStarter,
  });
  const activeUserCss = getActiveDraftValue({
    challenge: currentChallenge,
    field: "css",
    userDraft,
    fallback: currentChallenge.starterCss ?? defaultCssStarter,
  });

  return (
    <section className="training-detail">
      <header className="training-header">
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

        <span className="time-pill">{item.estimatedTime}</span>
      </header>

      <div className="training-category-tabs" aria-label={t("filterTech", "Filter technology")}>
        {availableCategories.map((category) => (
          <button
            className={
              activeCategory === category
                ? "training-category-tab is-active"
                : "training-category-tab"
            }
            key={category}
            onClick={() => changeCategory(category)}
            type="button"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="training-layout">
        <aside className="training-side">
          <div className="training-prompt-card">
            <div className="training-meta-row">
              <span>{currentChallenge.category}</span>
              <span>
                {currentFilteredIndex + 1} {t("of", "of")} {filteredChallenges.length}
              </span>
            </div>

            <h2>{t("interviewerSays", "Interviewer says")}</h2>
            <p>{currentChallenge.prompt}</p>
          </div>

          <div className="training-actions">
            <button onClick={pickRandomChallenge} type="button">
              {t("newExercise", "New Exercise")}
            </button>
            <button onClick={checkAnswer} type="button">
              {t("checkAnswer", "Check answer")}
            </button>
            <button
              disabled={!hasMoreHints}
              onClick={() => setVisibleHintCount((count) => count + 1)}
              type="button"
            >
              {t("hint", "Hint")} {Math.min(visibleHintCount + 1, currentChallenge.hints.length)}
            </button>
            <button
              onClick={() => {
                setUserDraft({
                  challengeId: currentChallenge.id,
                  code: currentChallenge.starterCode,
                  html: currentChallenge.starterHtml ?? defaultHtmlStarter,
                  css: currentChallenge.starterCss ?? defaultCssStarter,
                });
                setCheckResult(null);
              }}
              type="button"
            >
              {t("reset", "Reset")}
            </button>
            <button
              className={showSolution ? "training-answer-button is-active" : ""}
              onClick={() => setShowSolution((current) => !current)}
              type="button"
            >
              {showSolution ? t("hideSolution", "Hide Solution") : t("showSolution", "Show Solution")}
            </button>
          </div>

          {checkResult && (
            <div className={`training-check-result ${checkResult.type}`}>
              <strong>{checkResult.title}</strong>
              <p>{checkResult.message}</p>
            </div>
          )}

          {visibleHints.length > 0 && (
            <div className="training-hints">
              <h2>{t("hints", "Hints")}</h2>
              {visibleHints.map((hint, index) => (
                <p key={hint}>
                  <strong>{index + 1}.</strong> {hint}
                </p>
              ))}
            </div>
          )}

          {showSolution && currentChallenge.followUps.length > 0 && (
            <div className="training-follow-ups">
              <h2>{t("followUps", "Follow-up questions")}</h2>
              {currentChallenge.followUps.map((followUp) => (
                <div className="training-follow-up" key={followUp.question}>
                  <strong>{followUp.question}</strong>
                  <p>{followUp.answer}</p>
                </div>
              ))}
            </div>
          )}
        </aside>

        <section className="training-code-stack">
          <div className="training-code-panel">
            <div className="training-code-header">
              {t("yourCode", "Your code")} · {getMainLabel(currentChallenge.category)}
            </div>
            <textarea
              aria-label={t("writeSolutionAria", "Write your solution")}
              className="training-code-editor"
              onChange={(event) => {
                setUserDraft({
                  challengeId: currentChallenge.id,
                  code: event.target.value,
                  html: activeUserHtml,
                  css: activeUserCss,
                });
                setCheckResult(null);
              }}
              spellCheck="false"
              value={activeUserCode}
            />
          </div>

          {showHtmlEditor && (
            <div className="training-code-panel">
              <div className="training-code-header">HTML</div>
              <textarea
                aria-label={t("writeHtmlAria", "Write HTML")}
                className="training-code-editor support-editor"
                onChange={(event) => {
                  setUserDraft({
                    challengeId: currentChallenge.id,
                    code: activeUserCode,
                    html: event.target.value,
                    css: activeUserCss,
                  });
                  setCheckResult(null);
                }}
                spellCheck="false"
                value={activeUserHtml}
              />
            </div>
          )}

          <div className="training-code-panel">
            <div className="training-code-header">CSS</div>
            <textarea
              aria-label={t("writeCssAria", "Write CSS")}
              className="training-code-editor support-editor"
              onChange={(event) => {
                setUserDraft({
                  challengeId: currentChallenge.id,
                  code: activeUserCode,
                  html: activeUserHtml,
                  css: event.target.value,
                });
                setCheckResult(null);
              }}
              spellCheck="false"
              value={activeUserCss}
            />
          </div>

          {showSolution && (
            <>
              <TrainingCodeBlock
                code={currentChallenge.solution}
                label={`${getMainLabel(currentChallenge.category)} · ${t("solutionBadge", "Solution").toLowerCase()}`}
              />
              {currentChallenge.solutionHtml && (
                <TrainingCodeBlock
                  code={currentChallenge.solutionHtml}
                  label={`HTML · ${t("solutionBadge", "Solution").toLowerCase()}`}
                />
              )}
              {currentChallenge.solutionCss && (
                <TrainingCodeBlock
                  code={currentChallenge.solutionCss}
                  label={`CSS · ${t("solutionBadge", "Solution").toLowerCase()}`}
                />
              )}
            </>
          )}
        </section>
      </div>
    </section>
  );
}
