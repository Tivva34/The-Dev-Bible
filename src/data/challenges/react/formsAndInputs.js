import { createSnippetChallenge } from "../helpers/snippetChallengeBuilder.js";



export const formValidationChallenge = createSnippetChallenge({
  id: "form-validation",
  title: "Form with validation",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg ett formulär för namn och email.",
  currentGoal: "Visa formuläret och spara inputvärden.",
  baseWhatToSay:
    "Okej, jag börjar med kontrollerade inputfält så React håller koll på vad användaren skriver.",
  baseCode: `import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <form>
      <label>
        Name
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </label>

      <label>
        Email
        <input value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>

      <button type="submit">Send</button>
    </form>
  );
}

`,
  baseFollowUpQuestions: [
    {
      question: "Varför använder du kontrollerade inputs?",
      answer:
        "Då är inputvärdena en del av React-state och jag kan validera eller återställa dem på ett tydligt sätt.",
    },
  ],
  features: [
    {
      id: "required",
      label: "Required",
      colorClass: "feature-search",
      interviewer: "Lägg till validering så båda fälten måste fyllas i.",
      goal: "Visa fel när fält saknar värde.",
      getWhatToSay() {
        return "Okej, då kontrollerar jag värdena när formuläret skickas och sparar felmeddelanden i state.";
      },
      code: `// Jag lägger till error-state och en submit-handler.
const [errors, setErrors] = useState({});

function handleSubmit(event) {
  event.preventDefault();

  const nextErrors = {};
  if (name.trim() === "") nextErrors.name = "Name is required";
  if (email.trim() === "") nextErrors.email = "Email is required";

  setErrors(nextErrors);
}

// Formuläret får onSubmit={handleSubmit}
// Under varje input visar jag till exempel:
// {errors.name && <p>{errors.name}</p>}

`,
    },
    {
      id: "email",
      label: "Email-format",
      colorClass: "feature-category",
      interviewer: "Kontrollera också att email ser ut som en emailadress.",
      goal: "Validera email-format.",
      getWhatToSay() {
        return "Okej, då lägger jag en separat kontroll för email så användaren får ett tydligare felmeddelande.";
      },
      code: `// Jag lägger email-kontrollen efter required-kontrollen.
if (email.trim() !== "" && !email.includes("@")) {
  nextErrors.email = "Email must include @";
}

`,
    },
    {
      id: "success",
      label: "Success",
      colorClass: "feature-sort",
      interviewer: "Visa ett tackmeddelande när formuläret är korrekt.",
      goal: "Visa lyckat state efter submit.",
      getWhatToSay() {
        return "Okej, när det inte finns några fel kan jag visa ett successmeddelande och nollställa fälten.";
      },
      code: `// Om inga fel finns markerar jag formuläret som skickat.
const [submitted, setSubmitted] = useState(false);

if (Object.keys(nextErrors).length === 0) {
  setSubmitted(true);
  setName("");
  setEmail("");
}

// I JSX:
// {submitted && <p>Thanks, your message was sent.</p>}

`,
    },
    {
      id: "reset",
      label: "Reset",
      colorClass: "feature-reset",
      interviewer: "Lägg till en knapp som tömmer formuläret.",
      goal: "Återställa formulär och fel.",
      getWhatToSay() {
        return "Okej, reset ska tömma både fälten och eventuella fel så formuläret hamnar i startläge igen.";
      },
      code: `const [errors, setErrors] = useState({});
const [submitted, setSubmitted] = useState(false);

function resetForm() {
  setName("");
  setEmail("");
  setErrors({});
  setSubmitted(false);
}

// I JSX:
// <button type="button" onClick={resetForm}>Reset</button>

`,
    },
    {
      id: "styling",
      label: "Styling",
      colorClass: "feature-styling",
      interviewer: "Lägg till enkel styling för formuläret.",
      goal: "Ge formuläret klassnamn och en egen CSS-fil.",
      getWhatToSay() {
        return "Okej, jag lägger klassnamn i JSX och låter CSS-filen ta hand om layout och feltexter.";
      },
      code: `// ContactForm.jsx
// Här importerar jag CSS-filen för formuläret.
import "./ContactForm.css";

<form className="contact-form">
  <label className="form-field">
    Name
    <input value={name} onChange={(event) => setName(event.target.value)} />
  </label>
</form>

// ContactForm.css
/* Här gör jag formuläret lätt att skanna under intervjun. */
.contact-form {
  display: grid;
  gap: 0.85rem;
  max-width: 420px;
}

/* Här staplar jag label och input tydligt. */
.form-field {
  display: grid;
  gap: 0.35rem;
}

/* Här gör jag inputen enklare att klicka och läsa. */
.form-field input {
  padding: 0.65rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}

`,
    },
  ],
});

formValidationChallenge.getCodeSections = function getFormValidationSections(
  selected,
) {
  const hasRequired = selected.includes("required");
  const hasEmail = selected.includes("email");
  const hasSuccess = selected.includes("success");
  const hasReset = selected.includes("reset");
  const hasStyling = selected.includes("styling");
  const needsErrors = hasRequired || hasEmail || hasReset;
  const needsSubmitted = hasSuccess || hasReset;

  return [
    {
      id: "imports",
      feature: hasStyling ? "feature-styling" : null,
      code: `// Här behöver jag useState eftersom användaren skriver i formuläret.
import { useState } from "react";
${hasStyling ? `// Styling: Här importerar jag CSS-filen högst upp i komponentfilen.
import "./ContactForm.css";
` : ""}
`,
    },
    {
      id: "component-start",
      code: `// Här bygger jag formulärkomponenten.
export default function ContactForm() {
// Här sparar jag värdet i namn-fältet.
  const [name, setName] = useState("");
// Här sparar jag värdet i email-fältet.
  const [email, setEmail] = useState("");
${needsErrors ? `// Här sparar jag felmeddelanden för fälten.
  const [errors, setErrors] = useState({});
` : ""}${needsSubmitted ? `// Här sparar jag om formuläret har skickats korrekt.
  const [submitted, setSubmitted] = useState(false);
` : ""}
`,
    },
    ...(needsErrors
      ? [
          {
            id: "submit",
            feature: hasEmail ? "feature-category" : "feature-search",
            code: `// Här kontrollerar jag formuläret när användaren skickar det.
  function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {};

    if (name.trim() === "") {
      nextErrors.name = "Name is required";
    }

    if (email.trim() === "") {
      nextErrors.email = "Email is required";
    }
${hasEmail ? `
    if (email.trim() !== "" && !email.includes("@")) {
      nextErrors.email = "Email must include @";
    }
` : ""}
    setErrors(nextErrors);
${hasSuccess ? `
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setName("");
      setEmail("");
    }
` : ""}  }

`,
          },
        ]
      : []),
    ...(hasReset
      ? [
          {
            id: "reset",
            feature: "feature-reset",
            code: `// Reset: Här tömmer jag både fält, fel och success-state.
  function resetForm() {
    setName("");
    setEmail("");
    setErrors({});
    setSubmitted(false);
  }

`,
          },
        ]
      : []),
    {
      id: "jsx",
      feature: hasStyling ? "feature-styling" : null,
      code: `// Här returnerar jag formuläret.
  return (
{/* Styling: Här ger jag formuläret klassnamnet som CSS-filen stylar. */}
    <form${hasStyling ? ' className="contact-form"' : ""}${needsErrors ? " onSubmit={handleSubmit}" : ""}>
{/* Här grupperar jag namn-label och input. */}
      <label${hasStyling ? ' className="form-field"' : ""}>
        Name
{/* Här kopplar jag inputfältet till name-state. */}
        <input value={name} onChange={(event) => setName(event.target.value)} />
      </label>
${needsErrors ? `      {errors.name && <p>${"{errors.name}"}</p>}
` : ""}
{/* Här grupperar jag email-label och input. */}
      <label${hasStyling ? ' className="form-field"' : ""}>
        Email
{/* Här kopplar jag inputfältet till email-state. */}
        <input value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
${needsErrors ? `      {errors.email && <p>${"{errors.email}"}</p>}
` : ""}${hasSuccess ? `      {submitted && <p>Thanks, your message was sent.</p>}
` : ""}
      <button type="submit">Send</button>
${hasReset ? `      <button type="button" onClick={resetForm}>Reset</button>
` : ""}    </form>
  );
}

`,
    },
    ...(hasStyling
      ? [
          {
            id: "styling-css",
            feature: "feature-styling",
            code: `// ContactForm.css
/* Här gör jag formuläret lätt att skanna. */
.contact-form {
  display: grid;
  gap: 0.85rem;
  max-width: 420px;
}

/* Här staplar jag label och input tydligt. */
.form-field {
  display: grid;
  gap: 0.35rem;
}

/* Här gör jag inputen enklare att klicka och läsa. */
.form-field input {
  padding: 0.65rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}

`,
          },
        ]
      : []),
  ];
};

export const debouncedSearchChallenge = createSnippetChallenge({
  id: "debounced-search",
  title: "Debounced search",
  estimatedTime: "30 min",
  interviewPrompt: "Bygg en söklista där filtreringen väntar en kort stund efter input.",
  currentGoal: "Spara söktext och visa resultat.",
  baseWhatToSay:
    "Okej, jag börjar med ett vanligt sökfält och en filtrerad lista.",
  baseCode: `import { useState } from "react";

const products = ["Laptop", "Phone", "Keyboard", "Mouse", "Monitor"];

export default function DebouncedSearch() {
  const [search, setSearch] = useState("");

  const results = products.filter((product) =>
    product.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section>
      <input value={search} onChange={(event) => setSearch(event.target.value)} />
      {results.map((product) => <p key={product}>{product}</p>)}
    </section>
  );
}

`,
  features: [
    {
      id: "debounce",
      label: "Debounce",
      colorClass: "feature-search",
      interviewer: "Vänta 300 ms efter att användaren slutat skriva innan sökningen används.",
      goal: "Debounca söktexten.",
      getWhatToSay() {
        return "Okej, jag sparar ett separat debounced-värde och uppdaterar det med setTimeout i useEffect.";
      },
      code: `import { useEffect, useState } from "react";

const [debouncedSearch, setDebouncedSearch] = useState(search);

useEffect(() => {
  const timeoutId = setTimeout(() => {
    setDebouncedSearch(search);
  }, 300);

  return () => clearTimeout(timeoutId);
}, [search]);

// Filtreringen använder debouncedSearch istället för search.

`,
    },
    {
      id: "loading",
      label: "Sökstatus",
      colorClass: "feature-category",
      interviewer: "Visa en status medan sökningen bearbetas.",
      goal: "Visa searching-state.",
      getWhatToSay() {
        return "Okej, då kan jag jämföra search och debouncedSearch och visa en liten status medan de skiljer sig.";
      },
      code: `const isSearching = search !== debouncedSearch;

// I JSX:
// {isSearching && <p>Searching...</p>}

`,
    },
    {
      id: "clear",
      label: "Rensa",
      colorClass: "feature-sort",
      interviewer: "Lägg till en knapp som rensar sökfältet.",
      goal: "Töm sökningen.",
      getWhatToSay() {
        return "Okej, då sätter jag search till en tom sträng när användaren klickar.";
      },
      code: `<button onClick={() => setSearch("")}>Clear</button>

`,
    },
    {
      id: "minLength",
      label: "Min längd",
      colorClass: "feature-stock",
      interviewer: "Starta inte sökningen förrän användaren skrivit minst två tecken.",
      goal: "Undvika för tidig filtrering.",
      getWhatToSay() {
        return "Okej, jag kontrollerar längden innan jag filtrerar och visar en tom lista tills texten är tillräckligt lång.";
      },
      code: `const canSearch = search.trim().length >= 2;

const results = canSearch
  ? products.filter((product) =>
      product.toLowerCase().includes(search.toLowerCase()),
    )
  : [];

`,
    },
  ],
});

debouncedSearchChallenge.getCodeSections = function getDebouncedSearchSections(
  selected,
) {
  const hasDebounce = selected.includes("debounce") || selected.includes("loading");
  const hasLoading = selected.includes("loading");
  const hasClear = selected.includes("clear");
  const hasMinLength = selected.includes("minLength");
  const querySource = hasDebounce ? "debouncedSearch" : "search";

  return [
    {
      id: "imports",
      code: `// Här behöver jag ${hasDebounce ? "useEffect för fördröjningen och useState för inputvärdet." : "useState eftersom användaren skriver i inputfältet."}
import { ${hasDebounce ? "useEffect, " : ""}useState } from "react";

`,
    },
    {
      id: "data",
      code: `// Jag börjar med en liten produktlista som sökfältet kan filtrera.
const products = ["Laptop", "Phone", "Keyboard", "Mouse", "Monitor"];

`,
    },
    {
      id: "state",
      code: `// Här bygger jag komponenten som visar sökfältet och resultaten.
export default function DebouncedSearch() {
// Här sparar jag texten direkt när användaren skriver.
  const [search, setSearch] = useState("");
${hasDebounce ? `// Debounce: Här sparar jag värdet som får uppdateras lite senare.
  const [debouncedSearch, setDebouncedSearch] = useState(search);
` : ""}
`,
    },
    ...(hasDebounce
      ? [
          {
            id: "debounce",
            feature: "feature-search",
            code: `// Debounce: Här väntar jag 300 ms innan sökningen används.
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [search]);

`,
          },
        ]
      : []),
    {
      id: "derived",
      feature: hasMinLength ? "feature-stock" : null,
      code: `${hasMinLength ? `// Min längd: Här stoppar jag filtreringen tills söktexten är minst två tecken.
  const canSearch = ${querySource}.trim().length >= 2;

` : ""}// Här skapar jag listan som faktiskt ska visas.
  const results = ${hasMinLength ? "canSearch" : "true"}
    ? products.filter((product) =>
        product.toLowerCase().includes(${querySource}.toLowerCase()),
      )
    : [];
${hasLoading && hasDebounce ? `// Searching: Här ser jag om inputvärdet väntar på debounce-värdet.
  const isSearching = search !== debouncedSearch;
` : ""}
`,
    },
    {
      id: "jsx",
      code: `// Här returnerar jag sökfältet och resultatlistan.
  return (
    <section>
{/* Här kopplar jag inputfältet till search-state. */}
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search products"
      />
${hasClear ? `
{/* Rensa: Här tömmer jag sökfältet med ett klick. */}
      <button type="button" onClick={() => setSearch("")}>
        Clear
      </button>
` : ""}${hasLoading && hasDebounce ? `
{/* Searching: Här visar jag status medan debounce-värdet uppdateras. */}
      {isSearching && <p>Searching...</p>}
` : ""}${hasMinLength ? `
{/* Min längd: Här visar jag varför listan är tom innan två tecken. */}
      {!canSearch && <p>Write at least two characters.</p>}
` : ""}
{/* Här renderar jag varje sökträff. */}
      {results.map((product) => (
        <p key={product}>{product}</p>
      ))}
    </section>
  );
}

`,
    },
  ];
};

export const multiStepFormChallenge = createSnippetChallenge({
  id: "multi-step-form",
  title: "Multi-step form",
  estimatedTime: "35 min",
  interviewPrompt: "Bygg ett formulär med flera steg.",
  currentGoal: "Visa ett steg i taget.",
  baseWhatToSay:
    "Okej, jag sparar currentStep i state och renderar innehåll baserat på vilket steg som är aktivt.",
  baseCode: `import { useState } from "react";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  return (
    <form>
      {step === 1 && <input placeholder="Name" />}
      {step === 2 && <input placeholder="Email" />}
      {step === 3 && <p>Confirm details</p>}

      <button type="button" onClick={() => setStep(step + 1)}>
        Next
      </button>
    </form>
  );
}

`,
  features: [
    {
      id: "back",
      label: "Back",
      colorClass: "feature-search",
      interviewer: "Lägg till en tillbaka-knapp.",
      goal: "Gå bakåt mellan steg.",
      getWhatToSay() {
        return "Okej, jag minskar step med ett och disable:ar knappen på första steget.";
      },
      code: `<button type="button" onClick={() => setStep(step - 1)} disabled={step === 1}>
  Back
</button>

`,
    },
    {
      id: "data",
      label: "Spara data",
      colorClass: "feature-category",
      interviewer: "Spara värdena från varje steg.",
      goal: "Behåll formulärdata.",
      getWhatToSay() {
        return "Okej, jag sparar formulärdatan i ett objekt och uppdaterar rätt fält när input ändras.";
      },
      code: `const [formData, setFormData] = useState({ name: "", email: "" });

function updateField(field, value) {
  setFormData({ ...formData, [field]: value });
}

`,
    },
    {
      id: "summary",
      label: "Sammanfattning",
      colorClass: "feature-sort",
      interviewer: "Visa en sammanfattning på sista steget.",
      goal: "Bekräfta inskickad data.",
      getWhatToSay() {
        return "Okej, då visar jag värdena från formData på bekräftelsesteget.";
      },
      code: `{step === 3 && (
  <section>
    <p>Name: {formData.name}</p>
    <p>Email: {formData.email}</p>
  </section>
)}

`,
    },
    {
      id: "validation",
      label: "Validera steg",
      colorClass: "feature-stock",
      interviewer: "Stoppa användaren från att gå vidare om aktuellt steg saknar värde.",
      goal: "Validera innan nästa steg.",
      getWhatToSay() {
        return "Okej, innan jag ökar step kontrollerar jag fältet för nuvarande steg och visar ett fel om det saknas.";
      },
      code: `const [formData, setFormData] = useState({ name: "", email: "" });
const [error, setError] = useState("");

function goNext() {
  if (step === 1 && formData.name.trim() === "") {
    setError("Name is required");
    return;
  }

  setError("");
  setStep(step + 1);
}

`,
    },
  ],
});

multiStepFormChallenge.getCodeSections = function getMultiStepFormSections(
  selected,
) {
  const hasBack = selected.includes("back");
  const hasData = selected.includes("data") || selected.includes("summary") || selected.includes("validation");
  const hasSummary = selected.includes("summary");
  const hasValidation = selected.includes("validation");

  return [
    {
      id: "imports",
      code: `// Här behöver jag useState eftersom användaren byter steg${hasData ? " och skriver formulärdata" : ""}.
import { useState } from "react";

`,
    },
    {
      id: "state",
      code: `// Här bygger jag formuläret som visar ett steg i taget.
export default function MultiStepForm() {
// Här sparar jag vilket steg användaren är på.
  const [step, setStep] = useState(1);
${hasData ? `// Spara data: Här sparar jag värdena från formulärets steg.
  const [formData, setFormData] = useState({ name: "", email: "" });
` : ""}${hasValidation ? `// Validera steg: Här sparar jag feltexten för aktuellt steg.
  const [error, setError] = useState("");
` : ""}
`,
    },
    ...(hasData
      ? [
          {
            id: "update-field",
            feature: "feature-category",
            code: `// Spara data: Här uppdaterar jag bara fältet som ändras.
  function updateField(field, value) {
    setFormData({ ...formData, [field]: value });
  }

`,
          },
        ]
      : []),
    {
      id: "navigation",
      feature: hasValidation ? "feature-stock" : null,
      code: `${hasValidation ? `// Validera steg: Här stoppar jag nästa steg om värdet saknas.
  function goNext() {
    if (step === 1 && formData.name.trim() === "") {
      setError("Name is required");
      return;
    }

    if (step === 2 && formData.email.trim() === "") {
      setError("Email is required");
      return;
    }

    setError("");
    setStep(step + 1);
  }
` : `// Här går jag vidare till nästa steg.
  function goNext() {
    setStep(step + 1);
  }
`}${hasBack ? `
// Back: Här går jag tillbaka ett steg utan att ändra datan.
  function goBack() {
    setStep(step - 1);
  }
` : ""}

`,
    },
    {
      id: "jsx",
      code: `// Här returnerar jag rätt fält för det aktiva steget.
  return (
    <form>
${hasData ? `      {step === 1 && (
        <input
          value={formData.name}
          onChange={(event) => updateField("name", event.target.value)}
          placeholder="Name"
        />
      )}
      {step === 2 && (
        <input
          value={formData.email}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder="Email"
        />
      )}
` : `      {step === 1 && <input placeholder="Name" />}
      {step === 2 && <input placeholder="Email" />}
`}${hasSummary ? `      {step === 3 && (
        <section>
{/* Sammanfattning: Här visar jag det användaren har skrivit. */}
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </section>
      )}
` : `      {step === 3 && <p>Confirm details</p>}
`}${hasValidation ? `
{/* Validera steg: Här visar jag felet nära knapparna. */}
      {error && <p>{error}</p>}
` : ""}${hasBack ? `
{/* Back: Här låter jag användaren gå tillbaka från senare steg. */}
      <button type="button" onClick={goBack} disabled={step === 1}>
        Back
      </button>
` : ""}
{/* Här går jag vidare om det finns ett nästa steg. */}
      {step < 3 && (
        <button type="button" onClick={goNext}>
          Next
        </button>
      )}
    </form>
  );
}

`,
    },
  ];
};

export const authUiChallenge = createSnippetChallenge({
  id: "auth-ui-mock",
  title: "Auth UI mock",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg ett enkelt login/logout-flöde utan riktig backend.",
  currentGoal: "Växla mellan inloggad och utloggad vy.",
  baseWhatToSay:
    "Okej, jag sparar en user i state och visar olika UI beroende på om user finns.",
  baseCode: `import { useState } from "react";

export default function AuthMock() {
  const [user, setUser] = useState(null);

  function login() {
    setUser({ name: "Alex" });
  }

  function logout() {
    setUser(null);
  }

  if (user) {
    return (
      <section>
        <p>Welcome, {user.name}</p>
        <button onClick={logout}>Logout</button>
      </section>
    );
  }

  return <button onClick={login}>Login</button>;
}

`,
  features: [
    {
      id: "form",
      label: "Login-form",
      colorClass: "feature-search",
      interviewer: "Låt användaren skriva sitt namn innan login.",
      goal: "Login med input.",
      getWhatToSay() {
        return "Okej, jag sparar namnet i state och skapar user från inputvärdet när användaren loggar in.";
      },
      code: `const [name, setName] = useState("");

function login() {
  if (name.trim() === "") return;
  setUser({ name });
}

`,
    },
    {
      id: "error",
      label: "Felmeddelande",
      colorClass: "feature-category",
      interviewer: "Visa fel om användaren försöker logga in utan namn.",
      goal: "Validera login.",
      getWhatToSay() {
        return "Okej, då sparar jag ett error och visar det när inputen är tom.";
      },
      code: `const [error, setError] = useState("");

if (name.trim() === "") {
  setError("Name is required");
  return;
}

setError("");

`,
    },
    {
      id: "persist",
      label: "Persist",
      colorClass: "feature-sort",
      interviewer: "Behåll inloggningen efter refresh.",
      goal: "Spara user lokalt.",
      getWhatToSay() {
        return "Okej, jag läser user från localStorage som startvärde och uppdaterar localStorage vid login/logout.";
      },
      code: `const [user, setUser] = useState(() => {
  const savedUser = localStorage.getItem("user");
  return savedUser ? JSON.parse(savedUser) : null;
});

localStorage.setItem("user", JSON.stringify(nextUser));
localStorage.removeItem("user");

`,
    },
    {
      id: "role",
      label: "Roll",
      colorClass: "feature-count",
      interviewer: "Lägg till en enkel role på user och visa admin-innehåll bara för admin.",
      goal: "Villkorlig vy baserat på roll.",
      getWhatToSay() {
        return "Okej, jag lägger role på user-objektet och renderar admin-delen bara när rollen matchar.";
      },
      code: `function login() {
  setUser({ name: "Alex", role: "admin" });
}

// I JSX när user finns:
// {user.role === "admin" && <button>Admin settings</button>}

`,
    },
  ],
});

authUiChallenge.getCodeSections = function getAuthUiSections(selected) {
  const hasForm = selected.includes("form") || selected.includes("error");
  const hasError = selected.includes("error");
  const hasPersist = selected.includes("persist");
  const hasRole = selected.includes("role");

  return [
    {
      id: "imports",
      code: `// Här behöver jag useState eftersom login-läget kan ändras.
import { useState } from "react";

`,
    },
    {
      id: "state",
      code: `// Här bygger jag ett login/logout-flöde utan backend.
export default function AuthMock() {
// Här sparar jag användaren eller null om ingen är inloggad.
  const [user, setUser] = useState(${hasPersist ? `() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  }` : "null"});
${hasForm ? `// Login-form: Här sparar jag namnet som användaren skriver.
  const [name, setName] = useState("");
` : ""}${hasError ? `// Felmeddelande: Här sparar jag felet som visas vid tom input.
  const [error, setError] = useState("");
` : ""}
`,
    },
    {
      id: "handlers",
      code: `// Här loggar jag in användaren.
  function login() {
${hasError ? `    if (name.trim() === "") {
      setError("Name is required");
      return;
    }

    setError("");
` : hasForm ? `    if (name.trim() === "") return;
` : ""}    const nextUser = {
      name: ${hasForm ? "name" : `"Alex"`},
${hasRole ? `      role: "admin",
` : ""}    };

    setUser(nextUser);
${hasPersist ? `// Persist: Här sparar jag användaren lokalt vid login.
    localStorage.setItem("user", JSON.stringify(nextUser));
` : ""}  }

// Här loggar jag ut användaren.
  function logout() {
    setUser(null);
${hasPersist ? `// Persist: Här tar jag bort sparad användare vid logout.
    localStorage.removeItem("user");
` : ""}  }

`,
    },
    {
      id: "jsx",
      code: `// Här visar jag inloggad vy om user finns.
  if (user) {
    return (
      <section>
        <p>Welcome, {user.name}</p>
${hasRole ? `        {user.role === "admin" && (
          <button type="button">Admin settings</button>
        )}
` : ""}        <button type="button" onClick={logout}>
          Logout
        </button>
      </section>
    );
  }

// Här visar jag login-vyn när ingen user finns.
  return (
    <section>
${hasForm ? `      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
      />
` : ""}${hasError ? `      {error && <p>{error}</p>}
` : ""}      <button type="button" onClick={login}>
        Login
      </button>
    </section>
  );
}

`,
    },
  ];
};


