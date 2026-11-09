import { challengeInterviewTranslations } from "../i18n/challengeTranslations.js";
import { hardcodedChallengeCommentsMap } from "../i18n/codeCommentsMap.js";
/**
 * snippetChallengeBuilder.js
 * Generates snippet-based challenges with full bilingual support (SV / EN).
 */

export const commonSnippetFollowUpsSv = [
  {
    question: "Varför valde du den här strukturen?",
    answer:
      "Jag börjar med en enkel struktur som löser kravet tydligt. Om komponenten växer kan jag bryta ut logik eller mindre komponenter.",
  },
  {
    question: "Vilka edge cases tänker du på?",
    answer:
      "Jag tänker på tom data, fel input, snabba klick och att UI:t fortfarande ska visa ett tydligt state.",
  },
];

export const commonSnippetFollowUpsEn = [
  {
    question: "Why did you choose this structure?",
    answer:
      "I start with a straightforward architecture that satisfies the requirement clearly. As complexity increases, I can decompose logic into custom hooks or smaller sub-components.",
  },
  {
    question: "Which edge cases are top of mind?",
    answer:
      "I consider empty datasets, invalid inputs, rapid user clicks, and ensuring the interface consistently communicates clear operational feedback.",
  },
];

export const commonSnippetFollowUps = commonSnippetFollowUpsSv;

const lineCommentsMap = {
  "import ": {
    sv: "Här tar jag in det jag behöver för komponenten.",
    en: "Here I import what is needed for the component.",
  },
  "export default": {
    sv: "Här exporterar jag komponenten som uppgiften ska rendera.",
    en: "Here I export the component that the challenge should render.",
  },
  "export class": {
    sv: "Här skapar jag komponentklassen som templaten läser från.",
    en: "Here I define the component class that the template reads from.",
  },
  "data()": {
    sv: "Här lägger jag datan som Vue-templaten ska kunna reagera på.",
    en: "Here I store the reactive data that the Vue template binds to.",
  },
  "computed:": {
    sv: "Här samlar jag värden som räknas fram från befintlig data.",
    en: "Here I gather computed values derived from existing data.",
  },
  "methods:": {
    sv: "Här samlar jag funktioner som användaren kan trigga från vyn.",
    en: "Here I gather functions that the user can trigger from the view.",
  },
  "get ": {
    sv: "Här räknar jag fram ett värde som templaten kan läsa.",
    en: "Here I calculate a value that the template can read.",
  },
  querySelector: {
    sv: "Här hämtar jag elementet som JavaScript-koden ska uppdatera.",
    en: "Here I query the DOM element that JavaScript will update.",
  },
  initialData: {
    sv: "Här börjar jag med data som koden kan rendera eller bearbeta.",
    en: "Here I initialize data for the code to render or process.",
  },
  letVar: {
    sv: "Här sparar jag ett värde som kan ändras när användaren gör något.",
    en: "Here I store a mutable value that updates on user action.",
  },
  templateData: {
    sv: "Här sparar jag data som templaten eller funktionen använder.",
    en: "Here I store data consumed by the template or function.",
  },
  errorState: {
    sv: "Här sparar jag fel så användaren kan få tydlig feedback.",
    en: "Here I track errors so the user receives clear feedback.",
  },
  loadingState: {
    sv: "Här sparar jag om något pågår så UI:t kan visa rätt läge.",
    en: "Here I track pending operations so the UI shows the right state.",
  },
  searchState: {
    sv: "Här behöver jag komma ihåg vad användaren söker på.",
    en: "Here I track the active search query entered by the user.",
  },
  activeState: {
    sv: "Här sparar jag vilket val som är aktivt just nu.",
    en: "Here I track which option or tab is currently selected.",
  },
  formState: {
    sv: "Här sparar jag det användaren skriver i formuläret.",
    en: "Here I store user input from the form fields.",
  },
  genericState: {
    sv: "Här sparar jag ett värde som användaren kan påverka.",
    en: "Here I store state that updates based on user interaction.",
  },
  useEffect: {
    sv: "Här kör jag sid-effekten när komponenten behöver synka med något utanför renderingen.",
    en: "Here I execute the side effect to synchronize outside rendering.",
  },
  addEventListener: {
    sv: "Här kopplar jag användarens action till funktionen som uppdaterar datan.",
    en: "Here I attach the user action to the function updating data.",
  },
  asyncFunction: {
    sv: "Den här funktionen får vara async eftersom den väntar på ett svar.",
    en: "This function is marked async because it awaits a response.",
  },
  helperFunction: {
    sv: "Jag samlar den här logiken i en funktion så renderingen blir lättare att följa.",
    en: "I extract this logic into a helper function for readability.",
  },
  fetch: {
    sv: "Här gör jag själva API-anropet.",
    en: "Here I make the actual API request.",
  },
  filter: {
    sv: "Här filtrerar jag fram det som faktiskt ska visas.",
    en: "Here I filter out the items that should actually be displayed.",
  },
  map: {
    sv: "Här går jag igenom listan och renderar en rad för varje item.",
    en: "Here I iterate over the array and render a row for each item.",
  },
  reduce: {
    sv: "Här räknar jag fram ett värde från hela listan.",
    en: "Here I aggregate a calculated value from the entire array.",
  },
  ifStatement: {
    sv: "Här fångar jag ett särskilt fall innan resten av koden körs.",
    en: "Here I handle an edge case before the rest of the code executes.",
  },
  returnJsx: {
    sv: "Här returnerar jag det som ska visas på sidan.",
    en: "Here I return what should be rendered on the page.",
  },
  returnData: {
    sv: "Här returnerar jag datan som vyn ska kunna använda.",
    en: "Here I return the data available to the view template.",
  },
  returnGeneric: {
    sv: "Här skickar jag tillbaka resultatet från funktionen.",
    en: "Here I return the computed result from the function.",
  },
  formTag: {
    sv: "Här fångar jag formulärets submit så jag kan validera först.",
    en: "Here I intercept form submission to perform validation first.",
  },
  sectionTag: {
    sv: "Här grupperar jag innehållet som hör ihop i vyn.",
    en: "Here I group related elements together in the view.",
  },
  articleTag: {
    sv: "Här renderar jag ett item från listan.",
    en: "Here I render an item from the list.",
  },
  vForTag: {
    sv: "Här renderar jag en rad för varje item i listan.",
    en: "Here I render a row for each item in the list.",
  },
  vIfTag: {
    sv: "Här visar jag innehållet bara när villkoret stämmer.",
    en: "Here I render content conditionally when the predicate holds.",
  },
  inputTag: {
    sv: "Här kopplar jag inputfältet till state.",
    en: "Here I bind the input field to component state.",
  },
  selectTag: {
    sv: "Här låter jag användaren välja ett alternativ.",
    en: "Here I allow the user to select an option.",
  },
  buttonTag: {
    sv: "Här låter jag användaren trigga funktionen.",
    en: "Here I allow the user to trigger the action.",
  },
};

export function getLineComment(trimmed, language = "sv") {
  if (
    trimmed === "" ||
    trimmed === "};" ||
    trimmed === "}," ||
    trimmed === "}" ||
    trimmed === ");" ||
    trimmed === "</template>"
  ) {
    return "";
  }

  const lang = language === "en" ? "en" : "sv";

  if (trimmed.startsWith("import ")) return lineCommentsMap["import "][lang];
  if (trimmed.startsWith("export default")) return lineCommentsMap["export default"][lang];
  if (trimmed.startsWith("export class")) return lineCommentsMap["export class"][lang];
  if (trimmed.startsWith("data()")) return lineCommentsMap["data()"][lang];
  if (trimmed.startsWith("computed:")) return lineCommentsMap["computed:"][lang];
  if (trimmed.startsWith("methods:")) return lineCommentsMap["methods:"][lang];
  if (trimmed.startsWith("get ")) return lineCommentsMap["get "][lang];

  if (trimmed.startsWith("const ") && trimmed.includes("querySelector")) {
    return lineCommentsMap.querySelector[lang];
  }

  if (trimmed.startsWith("const ") && trimmed.includes("[")) {
    return lineCommentsMap.initialData[lang];
  }

  if (trimmed.startsWith("let ")) {
    return lineCommentsMap.letVar[lang];
  }

  if (/^\w+\s*=/.test(trimmed)) {
    return lineCommentsMap.templateData[lang];
  }

  if (trimmed.startsWith("const [")) {
    const stateName = trimmed.match(/const \[([^,\]]+)/)?.[1]?.toLowerCase() || "";

    if (stateName.includes("error")) {
      return lineCommentsMap.errorState[lang];
    }
    if (stateName.includes("loading") || stateName.includes("submitting")) {
      return lineCommentsMap.loadingState[lang];
    }
    if (stateName.includes("search")) {
      return lineCommentsMap.searchState[lang];
    }
    if (stateName.includes("selected") || stateName.includes("active")) {
      return lineCommentsMap.activeState[lang];
    }
    if (
      stateName.includes("form") ||
      stateName.includes("name") ||
      stateName.includes("email") ||
      stateName.includes("password")
    ) {
      return lineCommentsMap.formState[lang];
    }

    return lineCommentsMap.genericState[lang];
  }

  if (trimmed.startsWith("useEffect(")) return lineCommentsMap.useEffect[lang];
  if (trimmed.includes("addEventListener")) return lineCommentsMap.addEventListener[lang];
  if (trimmed.startsWith("async function")) return lineCommentsMap.asyncFunction[lang];
  if (trimmed.startsWith("function ")) return lineCommentsMap.helperFunction[lang];
  if (trimmed.startsWith("fetch(") || trimmed.includes(" fetch(")) return lineCommentsMap.fetch[lang];
  if (trimmed.includes(".filter(")) return lineCommentsMap.filter[lang];
  if (trimmed.includes(".map(")) return lineCommentsMap.map[lang];
  if (trimmed.includes(".reduce(")) return lineCommentsMap.reduce[lang];
  if (trimmed.startsWith("if (")) return lineCommentsMap.ifStatement[lang];
  if (trimmed.startsWith("return (")) return lineCommentsMap.returnJsx[lang];
  if (trimmed.startsWith("return {")) return lineCommentsMap.returnData[lang];
  if (trimmed.startsWith("return ")) return lineCommentsMap.returnGeneric[lang];
  if (trimmed.startsWith("<form")) return lineCommentsMap.formTag[lang];
  if (trimmed.startsWith("<section")) return lineCommentsMap.sectionTag[lang];
  if (trimmed.startsWith("<article")) return lineCommentsMap.articleTag[lang];
  if (trimmed.includes("v-for") || trimmed.includes("*ngFor")) return lineCommentsMap.vForTag[lang];
  if (trimmed.includes("v-if") || trimmed.includes("*ngIf")) return lineCommentsMap.vIfTag[lang];
  if (trimmed.startsWith("<input")) return lineCommentsMap.inputTag[lang];
  if (trimmed.startsWith("<select")) return lineCommentsMap.selectTag[lang];
  if (trimmed.startsWith("<button")) return lineCommentsMap.buttonTag[lang];

  return "";
}

export function isImportantCommentTarget(trimmed) {
  return (
    trimmed.startsWith("import ") ||
    trimmed.startsWith("const [") ||
    trimmed.startsWith("const ") ||
    trimmed.startsWith("let ") ||
    /^\w+\s*=/.test(trimmed) ||
    trimmed.startsWith("function ") ||
    trimmed.startsWith("async function") ||
    trimmed.startsWith("export default") ||
    trimmed.startsWith("export class") ||
    trimmed.startsWith("data()") ||
    trimmed.startsWith("computed:") ||
    trimmed.startsWith("methods:") ||
    trimmed.startsWith("get ") ||
    trimmed.startsWith("if (") ||
    trimmed.startsWith("return (") ||
    trimmed.startsWith("return ") ||
    trimmed.startsWith("<input") ||
    trimmed.startsWith("<button") ||
    trimmed.startsWith("<form") ||
    trimmed.startsWith("<section") ||
    trimmed.startsWith("<article") ||
    trimmed.includes(".map(") ||
    trimmed.includes(".filter(") ||
    trimmed.includes(".reduce(") ||
    trimmed.includes("v-for") ||
    trimmed.includes("*ngFor")
  );
}

export function addLineComments(code, options = {}) {
  const lines = code.split("\n");
  const commentedLines = [];
  let skippedFirstComment = false;
  let currentFileType = "";
  let insideTemplate = false;
  const language = options.language || "sv";

  lines.forEach((line) => {
    const trimmed = line.trim();
    const fileHeader = trimmed.match(
      /^\/\/\s+.+\.(js|jsx|ts|tsx|html|css|vue)$/,
    );

    if (fileHeader) {
      currentFileType = fileHeader[1];
      insideTemplate = false;
      commentedLines.push(line);
      return;
    }

    if (trimmed === "<template>") {
      insideTemplate = true;
    }

    if (trimmed === "</template>") {
      insideTemplate = false;
    }

    const previousLine = commentedLines.at(-1)?.trim() || "";
    const alreadyCommented =
      previousLine.startsWith("//") ||
      previousLine.startsWith("{/*") ||
      previousLine.startsWith("<!--") ||
      previousLine.startsWith("/*");
    let comment = alreadyCommented ? "" : getLineComment(trimmed, language);

    if (options.light && !isImportantCommentTarget(trimmed)) {
      comment = "";
    }

    if (comment && options.skipFirstComment && !skippedFirstComment) {
      comment = "";
      skippedFirstComment = true;
    }

    if (comment) {
      const indent = line.match(/^\s*/)[0];
      const isHtmlContext =
        currentFileType === "html" ||
        insideTemplate ||
        trimmed.startsWith("<template") ||
        trimmed.startsWith("</template");
      const isCssContext = currentFileType === "css";
      const isJsxLine =
        trimmed.startsWith("<") ||
        trimmed.startsWith("{") ||
        trimmed.startsWith("}");

      if (isCssContext) {
        commentedLines.push(`${indent}/* ${comment} */`);
      } else if (isHtmlContext) {
        commentedLines.push(`${indent}<!-- ${comment} -->`);
      } else {
        commentedLines.push(
          isJsxLine ? `${indent}{/* ${comment} */}` : `${indent}// ${comment}`,
        );
      }
    }

    let lineToPush = line;
    if (language === "en" && hardcodedChallengeCommentsMap[trimmed]) {
      const indent = line.match(/^\s*/)[0];
      lineToPush = `${indent}${hardcodedChallengeCommentsMap[trimmed]}`;
    }

    commentedLines.push(lineToPush);
  });

  return commentedLines.join("\n");
}

export function withInterviewComment(thought, code, featureLabel, options = {}) {
  const intro = featureLabel
    ? `// ${featureLabel}: ${thought}`
    : `// ${thought}`;

  return `${intro}
${addLineComments(code, {
  skipFirstComment: true,
  light: options.autoLineComments === false,
  language: options.language || "sv",
})}`;
}

export function createFeatureFollowUps(features, language = "sv") {
  const isEn = language === "en";
  return features.map((feature) => ({
    featureIds: [feature.id],
    question: isEn
      ? `What is most important to consider when adding ${feature.label}?`
      : `Vad är viktigast att tänka på när du lägger till ${feature.label}?`,
    answer: isEn
      ? "I want to satisfy the new requirement without regressing existing functionality, keeping state, handlers, and rendering cleanly decoupled."
      : "Jag vill lägga till kravet utan att ta bort tidigare funktionalitet, och hålla state, handlers och rendering tydligt separerade.",
  }));
}

export function splitBaseCodeSections(code) {
  return code
    .trimEnd()
    .split(/\n\s*\n/)
    .filter((sectionCode) => sectionCode.trim())
    .map((sectionCode, index) => ({
      id: `base-${index}`,
      code: `${sectionCode}\n\n`,
    }));
}

export function splitFeatureCodeSections(feature, code) {
  return code
    .trimEnd()
    .split(/\n\s*\n/)
    .filter((sectionCode) => sectionCode.trim())
    .map((sectionCode, index) => ({
      id: `${feature.id}-${index}`,
      feature: feature.colorClass,
      code: `${sectionCode}\n\n`,
    }));
}

export function hasUiMarkup(code) {
  return /<\w|<\/\w|<template>|<!--|\*ngFor|\*ngIf|v-for|v-if|@\w+=|\(click\)=/.test(
    code,
  );
}

export function hasSetupCode(code) {
  return /import\s|const\s+\[|useEffect|useState|function\s+\w+|const\s+\w+\s*=|let\s+\w+\s*=|data\(\)|computed:|methods:|get\s+\w+\(|new FormGroup/.test(
    code,
  );
}

export function getBaseRenderIndex(baseSections) {
  const renderIndex = baseSections.findIndex((section) =>
    hasUiMarkup(section.code),
  );

  if (renderIndex !== -1) return renderIndex;

  return baseSections.findIndex((section) =>
    /return\s+\(|render\(|innerHTML|addEventListener/.test(section.code),
  );
}

export function arrangeSnippetSections(baseSections, featureSections) {
  const importSections = featureSections.filter((section) =>
    section.code.trimStart().startsWith("import "),
  );
  const setupSections = featureSections.filter(
    (section) =>
      !importSections.includes(section) &&
      hasSetupCode(section.code) &&
      !hasUiMarkup(section.code),
  );
  const uiSections = featureSections.filter(
    (section) =>
      !importSections.includes(section) && !setupSections.includes(section),
  );
  const renderIndex = getBaseRenderIndex(baseSections);

  if (renderIndex === -1) {
    return [...importSections, ...baseSections, ...setupSections, ...uiSections];
  }

  return [
    ...importSections,
    ...baseSections.slice(0, renderIndex),
    ...setupSections,
    ...baseSections.slice(renderIndex),
    ...uiSections,
  ];
}

export function createSnippetChallenge({
  id,
  title,
  estimatedTime,
  interviewPrompt,
  currentGoal,
  baseWhatToSay,
  baseCode,
  features,
  baseFollowUpQuestions = [],
  followUpQuestions = [],
  autoLineComments = true,
}) {
  return {
    id,
    title,
    difficulty: "Junior",
    estimatedTime,
    interviewPrompt,
    currentGoal,
    baseWhatToSay,
    baseFollowUpQuestions: [...commonSnippetFollowUps, ...baseFollowUpQuestions],
    followUpQuestions: [
      ...followUpQuestions,
      ...createFeatureFollowUps(features),
    ],
    features,
    getCodeSections(selected, options = {}) {
      const language = typeof options === "string" ? options : (options?.language || "sv");
      const challengeI18n = challengeInterviewTranslations[id];
      const thought = (language === "en" && challengeI18n?.baseWhatToSay?.en) || baseWhatToSay;

      const baseCodeWithComments = withInterviewComment(
        thought,
        baseCode,
        undefined,
        {
          autoLineComments,
          language,
        },
      );

      const baseSections = splitBaseCodeSections(baseCodeWithComments);
      const featureSections = features
        .filter((feature) => selected.includes(feature.id))
        .flatMap((feature) => {
          const featureI18n = challengeI18n?.features?.find((f) => f.id === feature.id);
          const featureLabel = (language === "en" && featureI18n?.label?.en) || feature.label;
          const featureThought = (language === "en" && featureI18n?.whatToSay?.en) ||
            feature.getWhatToSay(
              selected.filter((featureId) => featureId !== feature.id),
            );

          return splitFeatureCodeSections(
            feature,
            withInterviewComment(
              featureThought,
              typeof feature.code === "function"
                ? feature.code(selected)
                : feature.code,
              featureLabel,
              { autoLineComments, language },
            ),
          );
        });

      return arrangeSnippetSections(baseSections, featureSections);
    },
  };
}
