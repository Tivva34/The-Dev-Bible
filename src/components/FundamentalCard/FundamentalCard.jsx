import { useState, useMemo } from "react";
import CodeBlock from "../CodeBlock/CodeBlock";
import { useTranslation } from "../../i18n/index.js";
import {
  challengeTitleKeys,
  difficultyKeys,
} from "../../i18n/translations/challengeTitles.js";
import { getLocalizedFundamentals } from "../../data/practice/fundamentals.js";
import "./FundamentalCard.css";

export default function FundamentalCard({ item, onBack }) {
  const { language, t } = useTranslation();
  const [showComments, setShowComments] = useState(true);
  const [sectionCommentVisibility, setSectionCommentVisibility] = useState({});

  const localizedItem = useMemo(() => {
    const list = getLocalizedFundamentals(language);
    return list.find((f) => f.id === item.id) || item;
  }, [item, language]);

  function toggleAllComments() {
    setShowComments((current) => !current);
    setSectionCommentVisibility({});
  }

  function toggleSectionComments(sectionId, sectionShowsComments) {
    setSectionCommentVisibility((current) => ({
      ...current,
      [sectionId]: !sectionShowsComments,
    }));
  }

  return (
    <article className="fundamental-detail">
      <header className="detail-header">
        <button className="back-button" onClick={onBack} type="button">
          {t("back", "Back")}
        </button>

        <div>
          <p className="eyebrow">
            {difficultyKeys[localizedItem.difficulty]
              ? t(difficultyKeys[localizedItem.difficulty], localizedItem.difficulty)
              : localizedItem.difficulty}
          </p>
          <h1>
            {challengeTitleKeys[localizedItem.id]
              ? t(challengeTitleKeys[localizedItem.id], localizedItem.title)
              : localizedItem.title}
          </h1>
        </div>

        <div className="detail-header-actions">
          <button
            className={showComments ? "focus-button is-active" : "focus-button"}
            onClick={toggleAllComments}
            type="button"
          >
            {showComments ? t("hideComments", "Hide Comments") : t("showComments", "Show Comments")}
          </button>
          <p className="time-pill">{localizedItem.estimatedTime}</p>
        </div>
      </header>

      <div className="fundamental-layout">
        <aside className="fundamental-info">
          <section className="fundamental-box">
            <h2>{t("whatUsedFor", "What this is used for")}</h2>
            <p>{localizedItem.intro}</p>
          </section>

          <section className="fundamental-box">
            <h2>{t("keyTakeaways", "Key takeaways")}</h2>
            <ul>
              {localizedItem.keyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </section>

          <section className="fundamental-box">
            <h2>{t("commonFollowUps", "Common follow-up questions")}</h2>
            <div className="fundamental-follow-ups">
              {localizedItem.followUps.map((followUp) => (
                <div key={followUp.question}>
                  <strong>{followUp.question}</strong>
                  <p>{followUp.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </aside>

        <section className="fundamental-code-panel">
          <div className="code-panel-header">
            <h2>{t("codeExamples", "Code examples")}</h2>
          </div>

          <CodeBlock
            defaultFileName={`${localizedItem.title.replace(/\s+/g, "")}.js`}
            onSectionCommentToggle={toggleSectionComments}
            sectionCommentVisibility={sectionCommentVisibility}
            sections={localizedItem.codeSections}
            showComments={showComments}
          />
        </section>
      </div>
    </article>
  );
}
