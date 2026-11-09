import { useMemo, useState } from "react";
import { useTranslation } from "../../i18n/index.js";
import {
  challengeTitleKeys,
  difficultyKeys,
} from "../../i18n/translations/challengeTitles.js";
import {
  followUpTemplatesSv,
  portfolioBackgroundFollowUpsSv,
} from "../../data/interview/questionFollowUps.sv.js";
import {
  followUpTemplatesEn,
  portfolioBackgroundFollowUpsEn,
} from "../../data/interview/questionFollowUps.en.js";
import { getLocalizedInterviewQuestions } from "../../data/interview/interviewQuestions.js";
import { getLocalizedFullstackQuestions } from "../../data/interview/fullstackQuestions.js";
import "./QuestionCard.css";

const filterOrder = [
  "React",
  "State",
  "API",
  "Form",
  "CSS",
  "Test",
  "A11y",
  "Debug",
  "Performance",
  "Backend",
  "Project",
  "Personal",
  "General",
];

const filterTranslations = {
  Allt: "all",
  All: "all",
  React: "React",
  State: "state",
  API: "api",
  Form: "form",
  CSS: "styling",
  Test: "test",
  A11y: "a11y",
  Debug: "debug",
  Prestanda: "performance",
  Performance: "performance",
  Backend: "backend",
  Projekt: "project",
  Project: "project",
  Personligt: "personal",
  Personal: "personal",
  Allmänt: "general",
  General: "general",
};

function getQuestionTags(entry, language = "en") {
  const text = `${entry.question} ${entry.answer}`.toLowerCase();
  const tags = [];
  const isSv = language === "sv";

  if (text.includes("react") || text.includes("komponent") || text.includes("component")) {
    tags.push("React");
  }
  if (
    text.includes("state") ||
    text.includes("usestate") ||
    text.includes("props")
  ) {
    tags.push("State");
  }
  if (
    text.includes("api") ||
    text.includes("fetch") ||
    text.includes("backend") ||
    text.includes("server")
  ) {
    tags.push("API");
  }
  if (
    text.includes("input") ||
    text.includes("form") ||
    text.includes("valider") ||
    text.includes("validat")
  ) {
    tags.push("Form");
  }
  if (
    text.includes("css") ||
    text.includes("layout") ||
    text.includes("responsiv") ||
    text.includes("styling")
  ) {
    tags.push("CSS");
  }
  if (text.includes("test")) tags.push("Test");
  if (
    text.includes("accessibility") ||
    text.includes("tillgänglighet") ||
    text.includes("keyboard") ||
    text.includes("semantisk") ||
    text.includes("semantic")
  ) {
    tags.push("A11y");
  }
  if (text.includes("debug") || text.includes("bug")) tags.push("Debug");
  if (
    text.includes("prestanda") ||
    text.includes("performance") ||
    text.includes("memo") ||
    text.includes("virtualiz") ||
    text.includes("virtualiser")
  ) {
    tags.push(isSv ? "Prestanda" : "Performance");
  }
  if (
    text.includes("databas") ||
    text.includes("database") ||
    text.includes("auth") ||
    text.includes("endpoint") ||
    text.includes("statuskod") ||
    text.includes("status code")
  ) {
    tags.push("Backend");
  }
  if (
    text.includes("projekt") ||
    text.includes("project") ||
    text.includes("portfolio") ||
    text.includes("github") ||
    text.includes("repo")
  ) {
    tags.push(isSv ? "Projekt" : "Project");
  }
  if (
    text.includes("bakgrund") ||
    text.includes("background") ||
    text.includes("utbildning") ||
    text.includes("education") ||
    text.includes("roll") ||
    text.includes("role") ||
    text.includes("driver") ||
    text.includes("motivat")
  ) {
    tags.push(isSv ? "Personligt" : "Personal");
  }

  const defaultTag = isSv ? "Allmänt" : "General";
  return tags.length > 0 ? tags : [defaultTag];
}

function getFollowUps(entry, item, language = "en") {
  const followUps = entry.followUps || [];

  if (
    ["before-live-coding", "after-live-coding", "portfolio-projects"].includes(
      item.id,
    )
  ) {
    return followUps.slice(0, 4);
  }

  if (followUps.length >= 2) {
    return followUps.slice(0, 4);
  }

  const isSv = language === "sv";
  const portfolioBackgroundMap = isSv
    ? portfolioBackgroundFollowUpsSv
    : portfolioBackgroundFollowUpsEn;
  const followUpTemplates = isSv ? followUpTemplatesSv : followUpTemplatesEn;

  if (item.id === "portfolio-background") {
    const defaultFallback = isSv
      ? [
          {
            question: "Kan du ge ett konkret exempel?",
            answer:
              "Jag skulle koppla svaret till ett konkret projekt, en tidigare arbetssituation eller något jag byggt själv.",
          },
        ]
      : [
          {
            question: "Can you provide a concrete example?",
            answer:
              "I would connect the response to a concrete project, a prior working situation, or a practical application I built myself.",
          },
        ];

    return [
      ...followUps,
      ...(portfolioBackgroundMap[entry.question] || defaultFallback),
    ].slice(0, 4);
  }

  const generatedFollowUps = entry.tags.flatMap(
    (tag) => followUpTemplates[tag] || [],
  );
  const uniqueFollowUps = [...followUps, ...generatedFollowUps].filter(
    (followUp, index, allFollowUps) =>
      allFollowUps.findIndex((item) => item.question === followUp.question) ===
      index,
  );

  return uniqueFollowUps.slice(0, 4);
}

export default function QuestionCard({ item, onBack }) {
  const { language, t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState({
    itemId: null,
    projectId: null,
  });
  const [questionFilter, setQuestionFilter] = useState("all");
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  // Retrieve fully localized dataset matching active language
  const localizedItem = useMemo(() => {
    const iq = getLocalizedInterviewQuestions(language);
    const fq = getLocalizedFullstackQuestions(language);

    const match =
      Object.values(iq).find((set) => set.id === item.id) ||
      Object.values(fq).find((set) => set.id === item.id);

    return match || item;
  }, [item, language]);

  const selectedProjectId =
    selectedProject.itemId === localizedItem.id
      ? selectedProject.projectId
      : null;
  const activeProject = localizedItem.projects?.find(
    (project) => project.id === selectedProjectId,
  );

  const questionsWithTags = useMemo(
    () =>
      localizedItem.questions.map((entry, index) => ({
        ...entry,
        index,
        tags: getQuestionTags(entry, language),
      })),
    [localizedItem.questions, language],
  );

  const availableFilters = useMemo(() => {
    const tags = new Set(questionsWithTags.flatMap((entry) => entry.tags));
    const isSv = language === "sv";
    const generalTag = isSv ? "Allmänt" : "General";

    return [
      "all",
      ...filterOrder.filter((filter) => tags.has(filter)),
      ...[...tags].filter(
        (filter) => filter !== generalTag && !filterOrder.includes(filter),
      ),
      ...(tags.has(generalTag) ? [generalTag] : []),
    ];
  }, [questionsWithTags, language]);

  const activeQuestionFilter = availableFilters.includes(questionFilter)
    ? questionFilter
    : "all";

  const visibleQuestions =
    activeQuestionFilter === "all"
      ? questionsWithTags
      : questionsWithTags.filter((entry) =>
          entry.tags.includes(activeQuestionFilter),
        );

  function toggleQuestion(index) {
    setOpenQuestionIndex((currentIndex) =>
      currentIndex === index ? null : index,
    );
  }

  return (
    <article className="question-detail">
      <header className="detail-header">
        <button className="back-button" onClick={onBack}>
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

        <p className="time-pill">{localizedItem.estimatedTime}</p>
      </header>

      {localizedItem.intro && (
        <section className="question-intro-banner">
          <p>{localizedItem.intro}</p>
        </section>
      )}

      {localizedItem.projects ? (
        <section
          className="repo-projects"
          aria-label={t("projectsFromGithub", "Projects from GitHub")}
        >
          <div className="project-picker">
            {localizedItem.projects.map((project) => (
              <button
                className={
                  selectedProjectId === project.id
                    ? "project-tab is-active"
                    : "project-tab"
                }
                key={project.id}
                onClick={() => {
                  setSelectedProject((currentProject) => ({
                    itemId: localizedItem.id,
                    projectId:
                      currentProject.itemId === localizedItem.id &&
                      currentProject.projectId === project.id
                        ? null
                        : project.id,
                  }));
                }}
                type="button"
              >
                {project.name}
              </button>
            ))}
          </div>

          <div className="project-detail">
            {activeProject ? (
              <>
                <div className="project-detail-header">
                  <div>
                    <p className="eyebrow">{t("project", "Project")}</p>
                    <h2>{activeProject.name}</h2>
                  </div>
                  <p className="project-type">{activeProject.type}</p>
                </div>

                <div className="tech-list">
                  {activeProject.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-copy">
                  <div>
                    <h3>{t("aboutProject", "About the project")}</h3>
                    <p>{activeProject.about}</p>
                  </div>
                  <div>
                    <h3>{t("inInterviewSay", "In an interview I can say")}</h3>
                    <p>{activeProject.interviewAngle}</p>
                  </div>
                </div>
              </>
            ) : (
              <p className="project-empty">
                {t(
                  "selectProjectPrompt",
                  "Select a project to view technologies and interview explanation.",
                )}
              </p>
            )}
          </div>
        </section>
      ) : null}

      <section
        className="question-filter"
        aria-label={t("filterQuestions", "Filter questions")}
      >
        <div className="question-filter-buttons">
          {availableFilters.map((filter) => {
            const translationKey = filterTranslations[filter];
            const filterLabel = translationKey
              ? t(translationKey, filter)
              : filter;

            return (
              <button
                className={
                  activeQuestionFilter === filter
                    ? "question-filter-button is-active"
                    : "question-filter-button"
                }
                key={filter}
                onClick={() => {
                  setQuestionFilter(filter);
                  setOpenQuestionIndex(null);
                }}
                type="button"
              >
                {filterLabel}
              </button>
            );
          })}
        </div>
      </section>

      <section
        className="question-list"
        aria-label={t("commonInterviewQuestions", "Common interview questions")}
      >
        {visibleQuestions.map((entry) => {
          const isOpen = openQuestionIndex === entry.index;
          const followUps = getFollowUps(entry, localizedItem, language);

          return (
            <article
              className={isOpen ? "question-item is-open" : "question-item"}
              key={entry.index}
              onClick={() => toggleQuestion(entry.index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleQuestion(entry.index);
                }
              }}
              role="button"
              tabIndex={0}
            >
              <div className="question-heading">
                <h2>{entry.question}</h2>
                <span>
                  {isOpen
                    ? t("close", "Close")
                    : t("followUps", "Follow-up questions")}
                </span>
              </div>
              <div className="question-tags">
                {entry.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p>{entry.answer}</p>

              {isOpen && (
                <div className="follow-up-answers">
                  {entry.code && (
                    <pre className="question-code-block">
                      <code>{entry.code}</code>
                    </pre>
                  )}

                  {followUps.map((followUp, fIndex) => (
                    <div className="follow-up-answer" key={fIndex}>
                      <strong>{followUp.question}</strong>
                      <p>{followUp.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </article>
          );
        })}
      </section>
    </article>
  );
}
