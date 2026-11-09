import { challengeInterviewTranslations } from "../i18n/challengeTranslations.js";
export const commonFullstackFollowUpsSv = [
  {
    question: "Vad ansvarar frontend för här?",
    answer:
      "Frontend ska visa rätt UI-state, skicka rätt request och hantera svar, loading och fel på ett tydligt sätt.",
  },
  {
    question: "Vad måste backend fortfarande kontrollera?",
    answer:
      "Backend måste validera input, kontrollera auth och returnera tydliga statuskoder. Frontend-kod räcker aldrig som säkerhet.",
  },
];

export const commonFullstackFollowUpsEn = [
  {
    question: "What is frontend responsible for here?",
    answer:
      "Frontend must communicate the right UI state, dispatch valid requests, and handle responses, loading states, and error feedback clearly.",
  },
  {
    question: "What must backend still verify?",
    answer:
      "Backend must validate input payloads, authorize identity, and return clear HTTP status codes. Frontend checks are never sufficient for security.",
  },
];

export const commonFullstackFollowUps = commonFullstackFollowUpsSv;

const fullstackCommentsMap = {
  "import ": {
    sv: "Här tar jag in det jag behöver för den här delen.",
    en: "Here I import what is needed for this section.",
  },
  express: {
    sv: "Här skapar jag servern som tar emot requests.",
    en: "Here I initialize the server that handles incoming requests.",
  },
  initialData: {
    sv: "Här börjar jag med data eller testdata som flödet kan använda.",
    en: "Here I initialize data or test fixtures for the flow.",
  },
  letVar: {
    sv: "Här sparar jag ett värde som kan ändras under request-flödet.",
    en: "Here I store a mutable value during the request lifecycle.",
  },
  errorState: {
    sv: "Här sparar jag fel från API:t så användaren får feedback.",
    en: "Here I capture API errors so the user receives clear feedback.",
  },
  loadingState: {
    sv: "Här sparar jag om requesten pågår.",
    en: "Here I track whether the request is currently in flight.",
  },
  userState: {
    sv: "Här sparar jag om användaren är inloggad.",
    en: "Here I track whether the user is currently authenticated.",
  },
  formState: {
    sv: "Här sparar jag det användaren skriver innan det skickas till API:t.",
    en: "Here I capture user input before dispatching to the API.",
  },
  genericState: {
    sv: "Här sparar jag ett värde som användaren eller API:t kan ändra.",
    en: "Here I store state updated by user input or API responses.",
  },
  endpoint: {
    sv: "Här definierar jag endpointen som frontend ska kunna anropa.",
    en: "Here I declare the endpoint that the frontend will query.",
  },
  useEffect: {
    sv: "Här kör jag API-hämtningen när komponenten laddas.",
    en: "Here I trigger the initial API fetch on component mount.",
  },
  asyncFunction: {
    sv: "Den här funktionen får vara async eftersom den väntar på API:t.",
    en: "This function is marked async because it awaits the API response.",
  },
  helperFunction: {
    sv: "Jag samlar den här logiken i en funktion så flödet blir lättare att följa.",
    en: "I extract this logic into a dedicated helper to clarify the flow.",
  },
  fetch: {
    sv: "Här gör jag själva API-anropet.",
    en: "Here I perform the actual API request.",
  },
  filter: {
    sv: "Här tar jag bort eller väljer ut rätt items från listan.",
    en: "Here I filter or remove target items from the dataset.",
  },
  map: {
    sv: "Här går jag igenom listan och uppdaterar eller renderar varje item.",
    en: "Here I iterate over the collection to update or render each item.",
  },
  dbLayer: {
    sv: "Här låter jag backend prata med datalagret.",
    en: "Here the backend interacts with the database layer.",
  },
  ifStatement: {
    sv: "Här stoppar jag flödet om ett särskilt fall behöver hanteras först.",
    en: "Here I halt execution early to handle specific guard conditions.",
  },
  returnJsx: {
    sv: "Här returnerar jag det som ska visas på sidan.",
    en: "Here I return what should be rendered in the view.",
  },
  returnGeneric: {
    sv: "Här skickar jag tillbaka resultatet från funktionen.",
    en: "Here I return the computed value from the function.",
  },
  resSend: {
    sv: "Här skickar backend tillbaka svaret till klienten.",
    en: "Here the backend sends the HTTP response back to the client.",
  },
  formTag: {
    sv: "Här fångar jag formulärets submit innan requesten skickas.",
    en: "Here I intercept form submission before dispatching the request.",
  },
  inputTag: {
    sv: "Här kopplar jag inputfältet till state.",
    en: "Here I bind the input element to state.",
  },
  buttonTag: {
    sv: "Här låter jag användaren trigga requesten eller actionen.",
    en: "Here the user triggers the action or network request.",
  },
};

export function getFullstackLineComment(trimmed, language = "sv") {
  if (
    trimmed === "" ||
    trimmed === "};" ||
    trimmed === "}," ||
    trimmed === "}" ||
    trimmed === ");"
  ) {
    return "";
  }

  const lang = language === "en" ? "en" : "sv";

  if (trimmed.startsWith("import ")) return fullstackCommentsMap["import "][lang];
  if (trimmed.startsWith("const ") && trimmed.includes("express")) {
    return fullstackCommentsMap.express[lang];
  }
  if (trimmed.startsWith("const ") && trimmed.includes("[")) {
    return fullstackCommentsMap.initialData[lang];
  }
  if (trimmed.startsWith("let ")) {
    return fullstackCommentsMap.letVar[lang];
  }
  if (trimmed.startsWith("const [")) {
    const stateName = trimmed.match(/const \[([^,\]]+)/)?.[1]?.toLowerCase() || "";
    if (stateName.includes("error")) return fullstackCommentsMap.errorState[lang];
    if (stateName.includes("loading") || stateName.includes("submitting")) return fullstackCommentsMap.loadingState[lang];
    if (stateName.includes("user")) return fullstackCommentsMap.userState[lang];
    if (stateName.includes("email") || stateName.includes("password") || stateName.includes("title")) {
      return fullstackCommentsMap.formState[lang];
    }
    return fullstackCommentsMap.genericState[lang];
  }
  if (trimmed.startsWith("app.")) return fullstackCommentsMap.endpoint[lang];
  if (trimmed.startsWith("useEffect(")) return fullstackCommentsMap.useEffect[lang];
  if (trimmed.startsWith("async function")) return fullstackCommentsMap.asyncFunction[lang];
  if (trimmed.startsWith("function ")) return fullstackCommentsMap.helperFunction[lang];
  if (trimmed.startsWith("fetch(") || trimmed.includes(" fetch(")) return fullstackCommentsMap.fetch[lang];
  if (trimmed.includes(".filter(")) return fullstackCommentsMap.filter[lang];
  if (trimmed.includes(".map(")) return fullstackCommentsMap.map[lang];
  if (trimmed.includes(".find(") || trimmed.includes(".create(")) return fullstackCommentsMap.dbLayer[lang];
  if (trimmed.startsWith("if (")) return fullstackCommentsMap.ifStatement[lang];
  if (trimmed.startsWith("return (")) return fullstackCommentsMap.returnJsx[lang];
  if (trimmed.startsWith("return ")) return fullstackCommentsMap.returnGeneric[lang];
  if (trimmed.startsWith("res.")) return fullstackCommentsMap.resSend[lang];
  if (trimmed.startsWith("<form")) return fullstackCommentsMap.formTag[lang];
  if (trimmed.startsWith("<input")) return fullstackCommentsMap.inputTag[lang];
  if (trimmed.startsWith("<button")) return fullstackCommentsMap.buttonTag[lang];

  return "";
}

function withInterviewComment(thought, code, featureLabel, options = {}) {
  const intro = featureLabel
    ? `// ${featureLabel}: ${thought}`
    : `// ${thought}`;

  return `${intro}
${addLineComments(code, { skipFirstComment: true, language: options.language || "sv" })}`;
}

function addLineComments(code, options = {}) {
  const lines = code.split("\n");
  const commentedLines = [];
  let skippedFirstComment = false;
  let currentFileType = "";
  const language = options.language || "sv";

  lines.forEach((line) => {
    const trimmed = line.trim();
    const fileHeader = trimmed.match(
      /^\/\/\s+.+\.(js|jsx|ts|tsx|html|css|vue)$/,
    );

    if (fileHeader) {
      currentFileType = fileHeader[1];
      commentedLines.push(line);
      return;
    }

    const previousLine = commentedLines.at(-1)?.trim() || "";
    const alreadyCommented =
      previousLine.startsWith("//") ||
      previousLine.startsWith("{/*") ||
      previousLine.startsWith("<!--") ||
      previousLine.startsWith("/*");
    let comment = alreadyCommented ? "" : getFullstackLineComment(trimmed, language);

    if (comment && options.skipFirstComment && !skippedFirstComment) {
      comment = "";
      skippedFirstComment = true;
    }

    if (comment) {
      const indent = line.match(/^\s*/)[0];
      const isHtmlContext = currentFileType === "html";
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

    commentedLines.push(line);
  });

  return commentedLines.join("\n");
}

export function createFeatureFollowUps(features, language = "sv") {
  const isEn = language === "en";
  return features.map((feature) => ({
    featureIds: [feature.id],
    question: isEn
      ? `What is most critical when adding ${feature.label}?`
      : `Vad är viktigast när du lägger till ${feature.label}?`,
    answer: isEn
      ? "I want requests, state management, and error handling to stay synchronized so users get accurate feedback without regressing earlier features."
      : "Jag vill att request, state och felhantering hänger ihop så användaren får rätt feedback och tidigare funktioner fortsätter fungera.",
  }));
}

function splitBaseCodeSections(code) {
  return code
    .trimEnd()
    .split(/\n\s*\n/)
    .filter((sectionCode) => sectionCode.trim())
    .map((sectionCode, index) => ({
      id: `base-${index}`,
      code: `${sectionCode}\n\n`,
    }));
}

function hasUiMarkup(code) {
  return /<\w|<\/\w|<template>|<!--|\*ngFor|\*ngIf|v-for|v-if|@\w+=|\(click\)=/.test(
    code,
  );
}

function hasSetupCode(code) {
  return /import\s|const\s+\[|useEffect|useState|async function|function\s+\w+|const\s+\w+\s*=|let\s+\w+\s*=|app\.(get|post|put|delete)|new FormGroup/.test(
    code,
  );
}

function getBaseRenderIndex(baseSections) {
  const renderIndex = baseSections.findIndex((section) =>
    hasUiMarkup(section.code),
  );

  if (renderIndex !== -1) return renderIndex;

  return baseSections.findIndex((section) =>
    /return\s+\(|render\(|innerHTML|addEventListener|app\.(get|post|put|delete)/.test(
      section.code,
    ),
  );
}

function arrangeSnippetSections(baseSections, featureSections) {
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

function createSnippetChallenge({
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
}) {
  return {
    id,
    title,
    difficulty: "Junior",
    estimatedTime,
    interviewPrompt,
    currentGoal,
    baseWhatToSay,
    baseFollowUpQuestions: [
      ...commonFullstackFollowUps,
      ...baseFollowUpQuestions,
    ],
    followUpQuestions: [
      ...followUpQuestions,
      ...createFeatureFollowUps(features),
    ],
    features,
    getCodeSections(selected, options = {}) {
      const language = typeof options === "string" ? options : (options?.language || "sv");
      const challengeI18n = challengeInterviewTranslations[id];
      const thought = (language === "en" && challengeI18n?.baseWhatToSay?.en) || baseWhatToSay;
      const baseCodeWithComments = withInterviewComment(thought, baseCode, undefined, { language });
      const baseSections = splitBaseCodeSections(baseCodeWithComments);
      const featureSections = features
        .filter((feature) => selected.includes(feature.id))
        .map((feature) => {
          const featureI18n = challengeI18n?.features?.find((f) => f.id === feature.id);
          const featureLabel = (language === "en" && featureI18n?.label?.en) || feature.label;
          const featureThought = (language === "en" && featureI18n?.whatToSay?.en) ||
            feature.getWhatToSay(
              selected.filter((featureId) => featureId !== feature.id),
            );

          return {
            id: feature.id,
            feature: feature.colorClass,
            code: withInterviewComment(
              featureThought,
              typeof feature.code === "function"
                ? feature.code(selected)
                : feature.code,
              featureLabel,
              { language },
            ),
          };
        });

      return arrangeSnippetSections(baseSections, featureSections);
    },
  };
}

export const crudApiChallenge = createSnippetChallenge({
  id: "crud-api-list",
  title: "CRUD mot API",
  estimatedTime: "35 min",
  interviewPrompt:
    "Bygg en komponent som hämtar todos från ett API och visar dem i en lista.",
  currentGoal: "Hämta todos och visa dem.",
  baseWhatToSay:
    "Okej, jag börjar med att hämta datan i useEffect och renderar listan när svaret kommer tillbaka.",
  baseCode: `import { useEffect, useState } from "react";

export default function TodoApiList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("/api/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <section>
      <h1>Todos</h1>
      {todos.map((todo) => (
        <article key={todo.id}>
          {/* Key hjälper React att känna igen varje todo när listan ändras. */}
          <h2>{todo.title}</h2>
          <p>{todo.completed ? "Done" : "Active"}</p>
        </article>
      ))}
    </section>
  );
}

`,
  baseFollowUpQuestions: [
    {
      question: "Varför hämtar du i useEffect?",
      answer:
        "Jag vill köra API-anropet när komponenten laddas, inte varje gång komponenten renderas.",
    },
  ],
  features: [
    {
      id: "loading-error",
      label: "Loading/error",
      colorClass: "feature-search",
      interviewer: "Lägg till loading och felhantering.",
      goal: "Visa tydliga API-states.",
      getWhatToSay() {
        return "Okej, jag separerar vänteläge och fel så UI:t kan visa vad som händer med API-anropet.";
      },
      code: `const [isLoading, setIsLoading] = useState(true);
const [error, setError] = useState("");

useEffect(() => {
  fetch("/api/todos")
    .then((response) => {
      if (!response.ok) throw new Error("Could not load todos");
      return response.json();
    })
    .then((data) => setTodos(data))
    .catch((error) => setError(error.message))
    .finally(() => setIsLoading(false));
}, []);

if (isLoading) return <p>Loading todos...</p>;
if (error) return <p>{error}</p>;

`,
    },
    {
      id: "create",
      label: "Create",
      colorClass: "feature-category",
      interviewer: "Lägg till ett formulär som skapar en ny todo via API:t.",
      goal: "Skicka POST och uppdatera listan.",
      getWhatToSay() {
        return "Okej, jag sparar input i state, skickar POST och lägger in svaret i listan om API:t lyckas.";
      },
      code: `const [title, setTitle] = useState("");

async function createTodo(event) {
  event.preventDefault();

  const response = await fetch("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });

  const newTodo = await response.json();
  setTodos([...todos, newTodo]);
  setTitle("");
}

`,
    },
    {
      id: "update",
      label: "Update",
      colorClass: "feature-sort",
      interviewer: "Låt användaren toggla completed och spara ändringen i API:t.",
      goal: "Skicka PATCH och uppdatera rätt todo.",
      getWhatToSay() {
        return "Okej, jag skickar bara fältet som ändras och ersätter rätt todo i state med svaret från API:t.";
      },
      code: `async function toggleTodo(todo) {
  const response = await fetch(\`/api/todos/\${todo.id}\`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: !todo.completed }),
  });

  const updatedTodo = await response.json();
  setTodos(
    todos.map((item) =>
      item.id === updatedTodo.id ? updatedTodo : item
    )
  );
}

`,
    },
    {
      id: "delete",
      label: "Delete",
      colorClass: "feature-reset",
      interviewer: "Lägg till delete så användaren kan ta bort en todo.",
      goal: "Skicka DELETE och ta bort från UI.",
      getWhatToSay() {
        return "Okej, efter att DELETE lyckas filtrerar jag bort rätt todo från listan.";
      },
      code: `async function deleteTodo(todoId) {
  await fetch(\`/api/todos/\${todoId}\`, {
    method: "DELETE",
  });

  setTodos(todos.filter((todo) => todo.id !== todoId));
}

`,
    },
  ],
});

export const protectedRouteChallenge = createSnippetChallenge({
  id: "protected-route",
  title: "Protected route",
  estimatedTime: "30 min",
  interviewPrompt:
    "Bygg en enkel skyddad vy som bara visas när användaren är inloggad.",
  currentGoal: "Visa dashboard om user finns, annars login.",
  baseWhatToSay:
    "Okej, jag börjar med ett user-state och renderar olika vyer beroende på om user finns.",
  baseCode: `import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return <button onClick={() => setUser({ name: "Tim" })}>Login</button>;
  }

  return <h1>Welcome, {user.name}</h1>;
}

`,
  features: [
    {
      id: "token",
      label: "Token",
      colorClass: "feature-search",
      interviewer: "Spara en token när användaren loggar in.",
      goal: "Komma ihåg auth-token.",
      getWhatToSay() {
        return "Okej, i en riktig app hade token kommit från backend. Här visar jag flödet med localStorage.";
      },
      code: `function login() {
  const token = "fake-jwt-token";
  localStorage.setItem("token", token);
  setUser({ name: "Tim" });
}

`,
    },
    {
      id: "restore",
      label: "Restore session",
      colorClass: "feature-category",
      interviewer: "Behåll inloggningen efter refresh.",
      goal: "Läsa sparad session från localStorage.",
      getWhatToSay() {
        return "Okej, jag läser token som startvärde och skapar user-state om token finns.";
      },
      code: `const [user, setUser] = useState(() => {
  const token = localStorage.getItem("token");
  return token ? { name: "Tim" } : null;
});

`,
    },
    {
      id: "logout",
      label: "Logout",
      colorClass: "feature-reset",
      interviewer: "Lägg till logout som rensar sessionen.",
      goal: "Logga ut och ta bort token.",
      getWhatToSay() {
        return "Okej, logout ska både rensa state och ta bort token så refresh inte loggar in igen.";
      },
      code: `function logout() {
  localStorage.removeItem("token");
  setUser(null);
}

`,
    },
    {
      id: "roles",
      label: "Roller",
      colorClass: "feature-count",
      interviewer: "Visa admin-länk bara om användaren är admin.",
      goal: "Villkorlig rendering baserat på roll.",
      getWhatToSay() {
        return "Okej, jag lägger role på user och visar admin-UI bara när rollen matchar.";
      },
      code: `const user = { name: "Tim", role: "admin" };

{user.role === "admin" && (
  <a href="/admin">Admin</a>
)}

`,
    },
  ],
});

export const serverValidationChallenge = createSnippetChallenge({
  id: "server-validation",
  title: "Server validation",
  estimatedTime: "30 min",
  interviewPrompt:
    "Bygg ett signup-formulär som kan visa valideringsfel från backend.",
  currentGoal: "Skicka formuläret till API:t.",
  baseWhatToSay:
    "Okej, jag börjar med kontrollerade fält och skickar datan som JSON till backend.",
  baseCode: `import { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={(event) => setEmail(event.target.value)} />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button>Sign up</button>
    </form>
  );
}

`,
  features: [
    {
      id: "client-check",
      label: "Client check",
      colorClass: "feature-search",
      interviewer: "Validera email och password innan requesten skickas.",
      goal: "Stoppa uppenbart fel input tidigt.",
      getWhatToSay() {
        return "Okej, jag gör en snabb frontend-kontroll för bättre UX, men backend måste fortfarande validera på riktigt.";
      },
      code: `const nextErrors = {};
if (!email.includes("@")) nextErrors.email = "Email must be valid";
if (password.length < 8) nextErrors.password = "Password is too short";

if (Object.keys(nextErrors).length > 0) {
  setErrors(nextErrors);
  return;
}

`,
    },
    {
      id: "server-errors",
      label: "API errors",
      colorClass: "feature-category",
      interviewer: "Visa fältspecifika fel som kommer från backend.",
      goal: "Koppla serverfel till rätt input.",
      getWhatToSay() {
        return "Okej, om backend svarar med 400 läser jag felobjektet och visar det vid rätt fält.";
      },
      code: `const [errors, setErrors] = useState({});

const response = await fetch("/api/signup", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password }),
});

if (response.status === 400) {
  const data = await response.json();
  setErrors(data.errors);
  return;
}

`,
    },
    {
      id: "disable",
      label: "Disable submit",
      colorClass: "feature-sort",
      interviewer: "Disable:a submit-knappen medan requesten pågår.",
      goal: "Undvika dubbla submits.",
      getWhatToSay() {
        return "Okej, jag sätter ett pending-state så användaren inte kan skicka samma request flera gånger.";
      },
      code: `const [isSubmitting, setIsSubmitting] = useState(false);

setIsSubmitting(true);
try {
  await fetch("/api/signup", requestOptions);
} finally {
  setIsSubmitting(false);
}

// I JSX:
// <button disabled={isSubmitting}>Sign up</button>

`,
    },
  ],
});

export const backendEndpointChallenge = createSnippetChallenge({
  id: "backend-endpoint",
  title: "Backend endpoint",
  estimatedTime: "30 min",
  interviewPrompt:
    "Bygg en enkel Express-route som returnerar produkter från en databas.",
  currentGoal: "Skapa en GET-route för produkter.",
  baseWhatToSay:
    "Okej, jag börjar med en route som hämtar produkter och skickar tillbaka JSON.",
  baseCode: `import express from "express";

const app = express();

app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.listen(3000);

`,
  features: [
    {
      id: "try-catch",
      label: "Try/catch",
      colorClass: "feature-search",
      interviewer: "Lägg till felhantering om databasen misslyckas.",
      goal: "Returnera 500 vid serverfel.",
      getWhatToSay() {
        return "Okej, jag wrappar databasanropet så API:t svarar kontrollerat även om något går fel.";
      },
      code: `app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch {
    res.status(500).json({ message: "Could not load products" });
  }
});

`,
    },
    {
      id: "query",
      label: "Query params",
      colorClass: "feature-category",
      interviewer: "Låt klienten filtrera produkter med category som query param.",
      goal: "Hantera query params i backend.",
      getWhatToSay() {
        return "Okej, jag bygger ett filterobjekt från req.query och skickar det till databasanropet.";
      },
      code: `app.get("/api/products", async (req, res) => {
  const filter = {};
  if (req.query.category) {
    filter.category = req.query.category;
  }

  const products = await Product.find(filter);
  res.json(products);
});

`,
    },
    {
      id: "post",
      label: "POST",
      colorClass: "feature-sort",
      interviewer: "Lägg till en POST-route som skapar en produkt.",
      goal: "Ta emot JSON och spara ny data.",
      getWhatToSay() {
        return "Okej, jag aktiverar JSON-body och skapar produkten från req.body.";
      },
      code: `app.use(express.json());

app.post("/api/products", async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
});

`,
    },
    {
      id: "auth",
      label: "Auth check",
      colorClass: "feature-reset",
      interviewer: "Skydda POST-routen så bara inloggade användare kan skapa produkter.",
      goal: "Lägga middleware före route-handlern.",
      getWhatToSay() {
        return "Okej, jag lägger auth-middleware före handlern så kontrollen sker innan datan sparas.";
      },
      code: `function requireAuth(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  next();
}

app.post("/api/products", requireAuth, async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json(product);
});

`,
    },
  ],
});
