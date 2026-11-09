import { useTranslation } from "../../i18n/index.js";
import {
  challengeTitleKeys,
  difficultyKeys,
} from "../../i18n/translations/challengeTitles.js";
import "./ExampleList.css";

const liveCodingFilters = [
  {
    id: "all",
    label: "Allt",
    matches: () => true,
  },
  {
    id: "lists",
    label: "Listor",
    matches: (example) =>
      [
        "product-list",
        "todo-list",
        "editable-item",
        "search-highlight",
        "counter-list",
        "fetch-api-list",
        "infinite-scroll",
        "crud-api-list",
        "pagination",
        "autocomplete",
        "vanilla-autocomplete",
        "reusable-table",
        "vanilla-todo-crud",
        "vanilla-shopping-cart",
        "vanilla-fetch-sort",
        "vue-todo-app",
        "vue-form-validation",
        "vue-fetch-cart",
        "vue-dynamic-table",
        "vue-autocomplete",
        "vue-watch-search",
        "angular-todo-app",
        "angular-autocomplete",
        "angular-form-validation",
        "angular-http-forms",
        "angular-route-guard",
      ].includes(example.id),
  },
  {
    id: "cart",
    label: "Cart",
    matches: (example) =>
      [
        "shopping-cart",
        "vanilla-shopping-cart",
        "vue-fetch-cart",
        "angular-shopping-table",
        "angular-service-state",
      ].includes(example.id),
  },
  {
    id: "forms",
    label: "Form",
    matches: (example) =>
      [
        "form-validation",
        "multi-step-form",
        "server-validation",
        "auth-ui-mock",
        "angular-route-guard",
        "vanilla-form-validation",
        "vue-form-validation",
        "angular-form-validation",
        "angular-http-forms",
      ].includes(example.id),
  },
  {
    id: "search",
    label: "Search",
    matches: (example) =>
      [
        "product-list",
        "search-highlight",
        "fetch-api-list",
        "infinite-scroll",
        "autocomplete",
        "vanilla-autocomplete",
        "debounced-search",
        "vanilla-fetch-sort",
        "vue-component",
        "vue-autocomplete",
        "vue-watch-search",
        "vue-dynamic-table",
        "angular-component",
        "angular-autocomplete",
        "angular-http-forms",
        "angular-route-guard",
      ].includes(example.id),
  },
  {
    id: "api",
    label: "API",
    matches: (example) =>
      [
        "fetch-api-list",
        "infinite-scroll",
        "crud-api-list",
        "backend-endpoint",
        "protected-route",
        "server-validation",
        "vanilla-fetch-sort",
        "vue-fetch-cart",
        "angular-http-forms",
        "angular-route-guard",
      ].includes(example.id),
  },
  {
    id: "hooks",
    label: "Hooks",
    matches: (example) =>
      [
        "use-local-storage",
        "react-use-reducer",
        "vue-composable",
        "vue-provide-inject",
        "dark-mode-toggle",
        "debounced-search",
        "infinite-scroll",
        "fetch-api-list",
        "auth-ui-mock",
        "dropdown-menu",
        "tabs",
        "accordion",
        "modal",
        "multi-step-form",
        "form-validation",
      ].includes(example.id),
  },
  {
    id: "ui",
    label: "UI",
    matches: (example) =>
      [
        "component-basics",
        "reusable-table",
        "modal",
        "dropdown-menu",
        "tabs",
        "accordion",
        "image-gallery",
        "vanilla-image-gallery",
        "vue-image-gallery",
        "angular-image-gallery",
        "toast-system",
        "dark-mode-toggle",
        "auth-ui-mock",
        "vanilla-ui-components",
        "vue-ui-components",
        "vue-image-gallery",
        "vue-composable",
        "vue-custom-directive",
        "vue-provide-inject",
        "vue-component",
        "angular-ui-components",
        "angular-image-gallery",
        "angular-pipe",
        "angular-directive",
        "angular-component",
      ].includes(example.id),
  },
  {
    id: "styling",
    label: "Styling",
    matches: (example) =>
      [
        "product-list",
        "component-basics",
        "form-validation",
        "tabs",
        "modal",
        "accordion",
        "vue-form-validation",
        "angular-form-validation",
      ].includes(example.id),
  },
  {
    id: "table",
    label: "Tabell",
    matches: (example) =>
      [
        "reusable-table",
        "vue-dynamic-table",
        "angular-shopping-table",
      ].includes(example.id),
  },
  {
    id: "edit",
    label: "Edit",
    matches: (example) =>
      [
        "editable-item",
        "todo-list",
        "crud-api-list",
        "vanilla-todo-crud",
        "vue-todo-app",
        "angular-todo-app",
      ].includes(example.id),
  },
  {
    id: "state",
    label: "State",
    matches: (example) =>
      [
        "product-list",
        "todo-list",
        "editable-item",
        "counter-list",
        "shopping-cart",
        "tabs",
        "accordion",
        "dark-mode-toggle",
        "auth-ui-mock",
        "vanilla-counter",
        "react-counter",
        "react-use-reducer",
        "vue-counter",
        "vue-composable",
        "vue-watch-search",
        "vue-provide-inject",
        "angular-counter",
        "angular-service-state",
        "angular-route-guard",
        "vanilla-todo-crud",
        "vanilla-shopping-cart",
        "vanilla-autocomplete",
        "vanilla-image-gallery",
        "vanilla-ui-components",
        "vue-ui-components",
        "vue-autocomplete",
        "vue-image-gallery",
        "vue-todo-app",
        "vue-fetch-cart",
        "vue-form-validation",
        "angular-ui-components",
        "angular-autocomplete",
        "angular-image-gallery",
        "angular-todo-app",
        "angular-form-validation",
        "angular-shopping-table",
        "angular-directive",
      ].includes(example.id),
  },
  {
    id: "logic",
    label: "Logik",
    matches: (example) =>
      [
        "fizz-buzz",
        "vanilla-counter",
        "debounced-search",
        "use-local-storage",
        "utility-functions",
        "react-utility-functions",
        "javascript-promise-all",
        "javascript-event-emitter",
        "javascript-deep-clone",
        "javascript-throttle",
        "react-use-reducer",
        "vue-composable",
        "vue-watch-search",
        "vue-provide-inject",
        "angular-service-state",
        "angular-pipe",
        "angular-directive",
        "angular-route-guard",
        "vue-utility-functions",
        "angular-utility-functions",
        "react-counter",
        "vue-counter",
        "angular-counter",
      ].includes(example.id),
  },
];

const frameworkFilters = [
  {
    id: "react",
    label: "React",
    matches: (example) =>
      ![
        "vue-component",
        "vue-todo-app",
        "vue-fetch-cart",
        "vue-dynamic-table",
        "vue-utility-functions",
        "vue-composable",
        "vue-watch-search",
        "vue-custom-directive",
        "vue-provide-inject",
        "vue-counter",
        "vue-form-validation",
        "vue-ui-components",
        "vue-autocomplete",
        "vue-image-gallery",
        "angular-component",
        "angular-todo-app",
        "angular-http-forms",
        "angular-shopping-table",
        "angular-utility-functions",
        "angular-service-state",
        "angular-pipe",
        "angular-directive",
        "angular-route-guard",
        "angular-counter",
        "angular-form-validation",
        "angular-ui-components",
        "angular-autocomplete",
        "angular-image-gallery",
        "utility-functions",
        "javascript-promise-all",
        "javascript-event-emitter",
        "javascript-deep-clone",
        "javascript-throttle",
        "fizz-buzz",
        "vanilla-counter",
        "vanilla-autocomplete",
        "vanilla-todo-crud",
        "vanilla-form-validation",
        "vanilla-shopping-cart",
        "vanilla-image-gallery",
        "vanilla-ui-components",
        "vanilla-fetch-sort",
        "backend-endpoint",
      ].includes(example.id),
  },
  {
    id: "vue",
    label: "Vue",
    matches: (example) =>
      [
        "vue-component",
        "vue-todo-app",
        "vue-fetch-cart",
        "vue-dynamic-table",
        "vue-utility-functions",
        "vue-counter",
        "vue-form-validation",
        "vue-ui-components",
        "vue-autocomplete",
        "vue-image-gallery",
        "vue-composable",
        "vue-watch-search",
        "vue-custom-directive",
        "vue-provide-inject",
      ].includes(example.id),
  },
  {
    id: "angular",
    label: "Angular",
    matches: (example) =>
      [
        "angular-component",
        "angular-todo-app",
        "angular-http-forms",
        "angular-shopping-table",
        "angular-utility-functions",
        "angular-counter",
        "angular-form-validation",
        "angular-ui-components",
        "angular-autocomplete",
        "angular-image-gallery",
        "angular-service-state",
        "angular-pipe",
        "angular-directive",
        "angular-route-guard",
      ].includes(example.id),
  },
  {
    id: "javascript",
    label: "JavaScript",
    matches: (example) =>
      [
        "utility-functions",
        "javascript-promise-all",
        "javascript-event-emitter",
        "javascript-deep-clone",
        "javascript-throttle",
        "fizz-buzz",
        "vanilla-counter",
        "vanilla-autocomplete",
        "vanilla-todo-crud",
        "vanilla-form-validation",
        "vanilla-shopping-cart",
        "vanilla-image-gallery",
        "vanilla-ui-components",
        "vanilla-fetch-sort",
        "backend-endpoint",
      ].includes(example.id),
  },
];

const liveLabFrameworkFilters = [
  {
    id: "javascript",
    label: "JavaScript",
    matches: (example) => example.framework === "JavaScript",
  },
  {
    id: "react",
    label: "React",
    matches: (example) => example.framework === "React",
  },
  {
    id: "vue",
    label: "Vue",
    matches: (example) => example.framework === "Vue",
  },
  {
    id: "angular",
    label: "Angular",
    matches: (example) => example.framework === "Angular",
  },
];

const categoryTranslationKeys = {
  // English source categories
  "Common Interview Questions": "catCommonQuestions",
  "Background & Project Presentation": "catBackgroundProjects",
  "Live Coding Challenges": "catLiveCoding",
  "Fullstack Interview Questions": "catFullstackQuestions",
  "Fullstack Live Coding": "catFullstackLiveCoding",
  "Architecture & System Design": "catProjectsArchitecture",
  "Practice Mode": "catTrainingMode",
  "Code Fundamentals": "catCodeFundamentals",
  "Random Exercise": "catRandomExercise",
  "Live Tab Exercises": "catLiveTabExercises",

  // Swedish backward compatibility
  "Vanliga intervjufrågor": "catCommonQuestions",
  "Bakgrund och projektpresentation": "catBackgroundProjects",
  "Live Coding Uppgifter": "catLiveCoding",
  "Fullstack intervjufrågor": "catFullstackQuestions",
  "Projekt och arkitekturfrågor": "catProjectsArchitecture",
  "Träningsläge": "catTrainingMode",
  "Kodgrunder": "catCodeFundamentals",
  "Random övning": "catRandomExercise",
  "Live tab övningar": "catLiveTabExercises",
};

const filterTranslationKeys = {
  all: "all",
  lists: "lists",
  cart: "cart",
  forms: "forms",
  search: "search",
  api: "api",
  hooks: "hooks",
  ui: "ui",
  styling: "styling",
  table: "table",
  edit: "edit",
  state: "state",
  logic: "logic",
};

function isLiveCodingSection(section) {
  return section.category.toLowerCase().includes("live coding");
}

function isLiveLabExerciseSection(section) {
  return section.items.some(
    (example) => example.type === "live-lab" && example.framework,
  );
}

export default function ExampleList({
  activeLayout,
  activeFilter,
  activeFramework,
  layoutOptions,
  sections,
  onFilterChange,
  onFrameworkChange,
  onLayoutChange,
  onSelect,
}) {
  const { t } = useTranslation();
  return (
    <section className="example-list" aria-label={t("selectInterview", "Select interview")}>
      {sections.map((section, sectionIndex) => {
        const liveCodingSection = isLiveCodingSection(section);
        const liveLabExerciseSection = isLiveLabExerciseSection(section);
        const activeFrameworkFilters = liveLabExerciseSection
          ? liveLabFrameworkFilters
          : frameworkFilters;
        const availableFrameworks = activeFrameworkFilters.filter(
          (filter) => section.items.some(filter.matches),
        );
        const selectedFramework = availableFrameworks.some(
          (filter) => filter.id === activeFramework,
        )
          ? activeFramework
          : availableFrameworks[0]?.id;
        const activeFrameworkConfig =
          activeFrameworkFilters.find(
            (filter) => filter.id === selectedFramework,
          ) ?? activeFrameworkFilters[0];
        const frameworkItems = liveCodingSection || liveLabExerciseSection
          ? section.items.filter(activeFrameworkConfig.matches)
          : section.items;
        const availableFilters = liveCodingFilters.filter(
          (filter) =>
            filter.id === "all" || frameworkItems.some(filter.matches),
        );
        const selectedFilter = availableFilters.some(
          (filter) => filter.id === activeFilter,
        )
          ? activeFilter
          : "all";
        const activeFilterConfig =
          liveCodingFilters.find((filter) => filter.id === selectedFilter) ??
          liveCodingFilters[0];
        const visibleItems = liveCodingSection
          ? frameworkItems.filter(activeFilterConfig.matches)
          : liveLabExerciseSection
            ? frameworkItems
          : section.items;

        return (
          <section className="category-section" key={section.category}>
            <div className="category-header-row">
              <div className="category-header">
                <h2>{t(categoryTranslationKeys[section.category] || section.category, section.category)}</h2>
              </div>

              {(liveCodingSection || liveLabExerciseSection) && (
                <div className="live-filter-stack">
                  <div className="framework-filter-tags" aria-label={t("filterTech", "Filter technology")}>
                    {availableFrameworks.map((filter) => (
                      <button
                        className={
                          selectedFramework === filter.id
                            ? "framework-filter-tag is-active"
                            : "framework-filter-tag"
                        }
                        key={filter.id}
                        onClick={() => {
                          onFrameworkChange(filter.id);
                          onFilterChange("all");
                        }}
                        type="button"
                      >
                        {filter.label}
                      </button>
                    ))}
                  </div>

                  {liveCodingSection && (
                    <div className="live-filter-tags" aria-label={t("filterTasks", "Filter exercises")}>
                      {availableFilters.map((filter) => {
                        const translationKey = filterTranslationKeys[filter.id];
                        const label = translationKey ? t(translationKey, filter.label) : filter.label;

                        return (
                          <button
                            className={
                              selectedFilter === filter.id
                                ? "live-filter-tag is-active"
                                : "live-filter-tag"
                            }
                            key={filter.id}
                            onClick={() => onFilterChange(filter.id)}
                            type="button"
                          >
                            {label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {sectionIndex === 0 && (
                <div className="layout-switcher" aria-label={t("chooseTrack", "Select interview track")}>
                  {Object.entries(layoutOptions).map(([layoutId, layout]) => (
                    <button
                      className={
                        activeLayout === layoutId
                          ? "layout-option is-active"
                          : "layout-option"
                      }
                      key={layoutId}
                      onClick={() => onLayoutChange(layoutId)}
                      type="button"
                    >
                      {t(layoutId, layout.label)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="challenge-grid">
              {visibleItems.map((example, index) => {
                const titleKey = challengeTitleKeys[example.id];
                const displayTitle = titleKey ? t(titleKey, example.title) : example.title;
                const difficultyKey = difficultyKeys[example.difficulty];
                const displayDifficulty = difficultyKey ? t(difficultyKey, example.difficulty) : example.difficulty;

                return (
                  <button
                    key={example.id || example.title}
                    className="example-title-button"
                    onClick={() => onSelect(example)}
                  >
                    <span className="challenge-index">{index + 1}</span>
                    <span className="challenge-copy">
                      <strong>{displayTitle}</strong>
                      <small>
                        {displayDifficulty} · {example.estimatedTime}
                      </small>
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}
    </section>
  );
}
