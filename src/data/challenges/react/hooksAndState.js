import { createSnippetChallenge } from "../helpers/snippetChallengeBuilder.js";



export const useLocalStorageChallenge = createSnippetChallenge({
  id: "use-local-storage",
  title: "Custom hook: useLocalStorage",
  estimatedTime: "30 min",
  interviewPrompt: "Bygg en custom hook som sparar state i localStorage.",
  currentGoal: "Skapa hooken och använd den i en komponent.",
  baseWhatToSay:
    "Okej, jag bygger en hook som beter sig som useState men läser och skriver mot localStorage.",
  baseCode: `import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : initialValue;
  });

  function updateValue(nextValue) {
    setValue(nextValue);
    localStorage.setItem(key, JSON.stringify(nextValue));
  }

  return [value, updateValue];
}

export default function Notes() {
  const [note, setNote] = useLocalStorage("note", "");

  return <textarea value={note} onChange={(event) => setNote(event.target.value)} />;
}

`,
  features: [
    {
      id: "function",
      label: "Function update",
      colorClass: "feature-search",
      interviewer: "Stöd även setValue med callback, som useState gör.",
      goal: "Stöd funktion som nästa värde.",
      getWhatToSay() {
        return "Okej, då kontrollerar jag om nextValue är en funktion och räknar ut värdet från current value.";
      },
      code: `function updateValue(nextValue) {
  const resolvedValue =
    typeof nextValue === "function" ? nextValue(value) : nextValue;

  setValue(resolvedValue);
  localStorage.setItem(key, JSON.stringify(resolvedValue));
}

`,
    },
    {
      id: "remove",
      label: "Remove",
      colorClass: "feature-category",
      interviewer: "Lägg till ett sätt att ta bort värdet från localStorage.",
      goal: "Rensa sparat värde.",
      getWhatToSay() {
        return "Okej, då returnerar jag en remove-funktion som återställer state och tar bort nyckeln.";
      },
      code: `function removeValue() {
  setValue(initialValue);
  localStorage.removeItem(key);
}

return [value, updateValue, removeValue];

`,
    },
    {
      id: "safe",
      label: "Try/catch",
      colorClass: "feature-sort",
      interviewer: "Hantera trasig JSON utan att appen kraschar.",
      goal: "Gör hooken mer robust.",
      getWhatToSay() {
        return "Okej, jag wrappar läsningen i try/catch och faller tillbaka till initialValue om parse misslyckas.";
      },
      code: `try {
  const savedValue = localStorage.getItem(key);
  return savedValue ? JSON.parse(savedValue) : initialValue;
} catch {
  return initialValue;
}

`,
    },
  ],
});

useLocalStorageChallenge.getCodeSections = function getUseLocalStorageSections(
  selected,
) {
  const hasFunctionUpdate = selected.includes("function");
  const hasRemove = selected.includes("remove");
  const hasSafe = selected.includes("safe");

  return [
    {
      id: "imports",
      code: `// Här behöver jag useState eftersom hooken ska bete sig som vanligt state.
import { useState } from "react";

`,
    },
    {
      id: "hook-start",
      code: `// Här bygger jag en hook som läser och skriver mot localStorage.
function useLocalStorage(key, initialValue) {
// Här läser jag startvärdet en gång när hooken startar.
  const [value, setValue] = useState(() => {
${hasSafe ? `// Try/catch: Här skyddar jag appen om sparad JSON är trasig.
    try {
      const savedValue = localStorage.getItem(key);
      return savedValue ? JSON.parse(savedValue) : initialValue;
    } catch {
      return initialValue;
    }
` : `    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : initialValue;
`}  });

`,
    },
    {
      id: "update",
      feature: hasFunctionUpdate ? "feature-search" : null,
      code: `// Här uppdaterar jag både state och localStorage.
  function updateValue(nextValue) {
${hasFunctionUpdate ? `// Function update: Här stödjer jag callback på samma sätt som useState.
    const resolvedValue =
      typeof nextValue === "function" ? nextValue(value) : nextValue;

` : ""}    setValue(${hasFunctionUpdate ? "resolvedValue" : "nextValue"});
    localStorage.setItem(
      key,
      JSON.stringify(${hasFunctionUpdate ? "resolvedValue" : "nextValue"}),
    );
  }

`,
    },
    ...(hasRemove
      ? [
          {
            id: "remove",
            feature: "feature-category",
            code: `// Remove: Här återställer jag state och tar bort nyckeln.
  function removeValue() {
    setValue(initialValue);
    localStorage.removeItem(key);
  }

`,
          },
        ]
      : []),
    {
      id: "return-hook",
      code: `// Här returnerar jag samma typ av API som komponenten ska använda.
  return [value, updateValue${hasRemove ? ", removeValue" : ""}];
}

`,
    },
    {
      id: "component",
      code: `// Här använder jag hooken i en vanlig komponent.
export default function Notes() {
  const [note, setNote${hasRemove ? ", removeNote" : ""}] =
    useLocalStorage("note", "");

// Här returnerar jag fältet som sparas automatiskt.
  return (
    <section>
      <textarea
        value={note}
        onChange={(event) => setNote(event.target.value)}
      />
${hasRemove ? `      <button type="button" onClick={removeNote}>
        Clear note
      </button>
` : ""}    </section>
  );
}

`,
    },
  ];
};

export const reactReducerChallenge = createSnippetChallenge({
  id: "react-use-reducer",
  title: "React useReducer",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg en liten counter med useReducer.",
  currentGoal: "Uppdatera state via actions i en reducer.",
  baseWhatToSay:
    "Okej, jag använder useReducer när flera actions ändrar samma state på ett tydligt sätt.",
  baseCode: `import { useReducer } from "react";

function counterReducer(state, action) {
  if (action.type === "increase") {
    return { count: state.count + 1 };
  }

  return state;
}

export default function ReducerCounter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <section>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increase" })}>
        Increase
      </button>
    </section>
  );
}

`,
  features: [
    {
      id: "decrease",
      label: "Minska",
      colorClass: "feature-category",
      interviewer: "Lägg till en decrease-action.",
      goal: "Hantera fler actions i reducer.",
      getWhatToSay() {
        return "Okej, jag lägger till en ny action-type och låter reducer returnera nytt state.";
      },
      code: `if (action.type === "decrease") {
  return { count: state.count - 1 };
}

<button onClick={() => dispatch({ type: "decrease" })}>
  Decrease
</button>

`,
    },
    {
      id: "reset",
      label: "Reset",
      colorClass: "feature-empty",
      interviewer: "Lägg till reset.",
      goal: "Sätta count till noll via reducer.",
      getWhatToSay() {
        return "Okej, reset är en egen action som alltid returnerar startvärdet.";
      },
      code: `if (action.type === "reset") {
  return { count: 0 };
}

<button onClick={() => dispatch({ type: "reset" })}>
  Reset
</button>

`,
    },
    {
      id: "step",
      label: "Step",
      colorClass: "feature-search",
      interviewer: "Låt användaren välja hur mycket countern ändras.",
      goal: "Skicka payload i action.",
      getWhatToSay() {
        return "Okej, då skickar jag med step som payload så reducer inte behöver känna till inputfältet.";
      },
      code: `const [step, setStep] = useState(1);

dispatch({ type: "increase", payload: step });

`,
    },
  ],
});

reactReducerChallenge.getCodeSections = function getReactReducerSections(
  selected,
) {
  const hasDecrease = selected.includes("decrease");
  const hasReset = selected.includes("reset");
  const hasStep = selected.includes("step");

  return [
    {
      id: "imports",
      code: `// Här behöver jag useReducer för actions${hasStep ? " och useState för step-värdet" : ""}.
import { useReducer${hasStep ? ", useState" : ""} } from "react";

`,
    },
    {
      id: "reducer-start",
      code: `// Här samlar jag hur count får ändras.
function counterReducer(state, action) {
  if (action.type === "increase") {
    return { count: state.count + ${hasStep ? "action.payload" : "1"} };
  }

`,
    },
    ...(hasDecrease
      ? [
          {
            id: "decrease-case",
            feature: "feature-category",
            code: `// Minska: Här hanterar jag en egen action för minus.
  if (action.type === "decrease") {
    return { count: state.count - ${hasStep ? "action.payload" : "1"} };
  }

`,
          },
        ]
      : []),
    ...(hasReset
      ? [
          {
            id: "reset-case",
            feature: "feature-empty",
            code: `// Reset: Här återställer jag reducer-state till startvärdet.
  if (action.type === "reset") {
    return { count: 0 };
  }

`,
          },
        ]
      : []),
    {
      id: "reducer-end",
      code: `  return state;
}

`,
    },
    {
      id: "component-start",
      code: `// Här använder jag reducern i komponenten.
export default function ReducerCounter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
${hasStep ? `// Step: Här sparar jag hur mycket varje klick ska ändra count.
  const [step, setStep] = useState(1);
` : ""}
`,
    },
    {
      id: "jsx-start",
      code: `// Här returnerar jag värdet och knapparna.
  return (
    <section>
      <p>Count: {state.count}</p>

`,
    },
    ...(hasStep
      ? [
          {
            id: "step-input",
            feature: "feature-search",
            code: `
{/* Step: Här låter jag användaren välja payload-värdet. */}
      <input
        type="number"
        value={step}
        onChange={(event) => setStep(Number(event.target.value))}
      />

`,
          },
        ]
      : []),
    {
      id: "increase-button",
      code: `      <button
        onClick={() =>
          dispatch({ type: "increase"${hasStep ? ", payload: step" : ""} })
        }
      >
        Increase
      </button>

`,
    },
    ...(hasDecrease
      ? [
          {
            id: "decrease-button",
            feature: "feature-category",
            code: `      <button
        onClick={() =>
          dispatch({ type: "decrease"${hasStep ? ", payload: step" : ""} })
        }
      >
        Decrease
      </button>

`,
          },
        ]
      : []),
    ...(hasReset
      ? [
          {
            id: "reset-button",
            feature: "feature-empty",
            code: `      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>

`,
          },
        ]
      : []),
    {
      id: "jsx-end",
      code: `    </section>
  );
}

`,
    },
  ];
};

reactReducerChallenge.interviewPrompt =
  "Bygg en komponent som hanterar request-status med useReducer.";
reactReducerChallenge.currentGoal =
  "Visa idle-state och uppdatera status via actions.";
reactReducerChallenge.baseWhatToSay =
  "Okej, jag använder useReducer när flera actions ska ändra samma status-state tydligt.";
reactReducerChallenge.features = [
  {
    id: "loading",
    label: "Loading",
    colorClass: "feature-search",
    interviewer: "Visa ett loading-meddelande när status är loading.",
    goal: "Rendera UI baserat på status.",
    getWhatToSay() {
      return "Okej, statusen ligger redan i reducern, så jag kan visa loading från samma state.";
    },
  },
  {
    id: "success",
    label: "Success",
    colorClass: "feature-category",
    interviewer: "Lägg till success-action med data.",
    goal: "Spara hämtad data i reducer-state.",
    getWhatToSay() {
      return "Okej, success behöver både ändra status och lägga in datan som kom tillbaka.";
    },
  },
  {
    id: "error",
    label: "Error",
    colorClass: "feature-reset",
    interviewer: "Lägg till error-action med felmeddelande.",
    goal: "Visa fel från reducer-state.",
    getWhatToSay() {
      return "Okej, error är en egen action så reducer-state kan beskriva exakt vad som gick fel.";
    },
  },
];
reactReducerChallenge.followUpQuestions = [
  {
    featureIds: ["loading"],
    question: "Varför använder du status istället för flera booleans?",
    answer:
      "Status gör att komponenten bara kan vara i ett läge åt gången, till exempel idle, loading, success eller error.",
  },
  {
    featureIds: ["success"],
    question: "Varför skickar du data i action.payload?",
    answer:
      "Då beskriver actionen både vad som hände och vilken data reducer behöver för att skapa nästa state.",
  },
  {
    featureIds: ["error"],
    question: "Varför tömmer du data vid error?",
    answer:
      "Jag vill undvika att gammal data ser aktuell ut när senaste requesten faktiskt misslyckades.",
  },
];
reactReducerChallenge.getCodeSections = function getReactReducerStatusSections(
  selected,
) {
  const hasLoading = selected.includes("loading");
  const hasSuccess = selected.includes("success");
  const hasError = selected.includes("error");

  return [
    {
      id: "imports",
      code: `// Här behöver jag useReducer eftersom flera actions ändrar samma state.
import { useReducer } from "react";

`,
    },
    {
      id: "initial-state",
      code: `// Här samlar jag startläget för status, data och error.
const initialState = {
  status: "idle",
  data: null,
  error: "",
};

`,
    },
    {
      id: "reducer-start",
      code: `// Här samlar jag hur request-state får ändras.
function requestReducer(state, action) {
  if (action.type === "start") {
    return { ...state, status: "loading", error: "" };
  }

`,
    },
    ...(hasSuccess
      ? [
          {
            id: "success-case",
            feature: "feature-category",
            code: `// Success: Här sparar jag datan och markerar att requesten lyckades.
  if (action.type === "success") {
    return {
      status: "success",
      data: action.payload,
      error: "",
    };
  }

`,
          },
        ]
      : []),
    ...(hasError
      ? [
          {
            id: "error-case",
            feature: "feature-reset",
            code: `// Error: Här sparar jag felmeddelandet och tömmer datan.
  if (action.type === "error") {
    return {
      status: "error",
      data: null,
      error: action.payload,
    };
  }

`,
          },
        ]
      : []),
    {
      id: "reducer-end",
      code: `  return state;
}

`,
    },
    {
      id: "component-start",
      code: `// Här använder jag reducern i komponenten.
export default function RequestStatus() {
  const [state, dispatch] = useReducer(requestReducer, initialState);

// Här returnerar jag statusen och actions.
  return (
    <section>
      <p>Status: {state.status}</p>

`,
    },
    ...(hasLoading
      ? [
          {
            id: "loading-ui",
            feature: "feature-search",
            code: `{/* Loading: Här visar jag ett tydligt vänteläge. */}
      {state.status === "loading" && <p>Loading...</p>}

`,
          },
        ]
      : []),
    ...(hasSuccess
      ? [
          {
            id: "success-ui",
            feature: "feature-category",
            code: `{/* Success: Här visar jag datan när requesten lyckades. */}
      {state.status === "success" && <p>{state.data}</p>}

`,
          },
        ]
      : []),
    ...(hasError
      ? [
          {
            id: "error-ui",
            feature: "feature-reset",
            code: `{/* Error: Här visar jag felet från reducer-state. */}
      {state.status === "error" && <p>{state.error}</p>}

`,
          },
        ]
      : []),
    {
      id: "start-button",
      code: `      <button onClick={() => dispatch({ type: "start" })}>
        Start request
      </button>

`,
    },
    ...(hasSuccess
      ? [
          {
            id: "success-button",
            feature: "feature-category",
            code: `      <button
        onClick={() =>
          dispatch({ type: "success", payload: "Users loaded" })
        }
      >
        Resolve success
      </button>

`,
          },
        ]
      : []),
    ...(hasError
      ? [
          {
            id: "error-button",
            feature: "feature-reset",
            code: `      <button
        onClick={() =>
          dispatch({ type: "error", payload: "Could not load users" })
        }
      >
        Resolve error
      </button>

`,
          },
        ]
      : []),
    {
      id: "jsx-end",
      code: `    </section>
  );
}

`,
    },
  ];
};

export const reactUtilityFunctionsChallenge = createSnippetChallenge({
  id: "react-utility-functions",
  title: "React utility functions",
  estimatedTime: "25 min",
  interviewPrompt:
    "Bygg en React-komponent som använder små utility-funktioner för att forma data.",
  currentGoal: "Rendera en lista som använder en ren hjälpfunktion.",
  baseWhatToSay:
    "Okej, jag håller hjälplogiken utanför komponenten och låter komponenten fokusera på rendering.",
  baseCode: `function doubleNumbers(numbers) {
  return numbers.map((number) => number * 2);
}

export default function UtilityExample() {
  const values = doubleNumbers([1, 2, 3]);

  return (
    <section>
      <h1>Values</h1>
      {values.map((value) => (
        <p key={value}>{value}</p>
      ))}
    </section>
  );
}

`,
  baseFollowUpQuestions: [
    {
      question: "Varför ligger hjälpfunktionen utanför komponenten?",
      answer:
        "Den behöver inget React-state, så den kan vara en ren funktion som är enkel att testa separat.",
    },
  ],
  features: [
    {
      id: "custom-map",
      label: "Egen mappning",
      colorClass: "feature-search",
      interviewer: "Skriv en egen map-funktion och använd den i komponenten.",
      goal: "Visa att du förstår callbacks och rendering.",
      getWhatToSay() {
        return "Okej, jag bygger en ny array med callbackens resultat och använder den innan renderingen.";
      },
      code: `function customMap(array, callback) {
  const result = [];

  for (let index = 0; index < array.length; index += 1) {
    result.push(callback(array[index], index, array));
  }

  return result;
}

const values = customMap([1, 2, 3], (number) => number * 2);

`,
    },
    {
      id: "debounce",
      label: "Debounce",
      colorClass: "feature-category",
      interviewer: "Lägg till en debounce-funktion för sökinput.",
      goal: "Fördröja sökningen tills användaren pausat.",
      getWhatToSay() {
        return "Okej, debounce behöver komma ihåg sin timer mellan anrop, så jag använder en closure.";
      },
      code: `function debounce(callback, delay) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const debouncedSearch = debounce((query) => {
  console.log(query);
}, 300);

`,
    },
    {
      id: "flatten",
      label: "Flatten",
      colorClass: "feature-sort",
      interviewer: "Lägg till en funktion som plattar till en nästlad array.",
      goal: "Hantera rekursion i en ren hjälpfunktion.",
      getWhatToSay() {
        return "Okej, jag går igenom varje item och anropar samma funktion igen när itemet är en array.";
      },
      code: `function flattenArray(items) {
  const result = [];

  items.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
      return;
    }

    result.push(item);
  });

  return result;
}

const flattened = flattenArray([1, [2, [3]], 4]);

`,
    },
    {
      id: "styling",
      label: "Styling",
      colorClass: "feature-styling",
      interviewer: "Lägg till styling för utility-exemplet.",
      goal: "Importera CSS och ge wrappern ett klassnamn.",
      getWhatToSay() {
        return "Okej, jag importerar CSS-filen högst upp och sätter klassnamnet direkt på wrappern.";
      },
      code: "",
    },
  ],
});

reactUtilityFunctionsChallenge.getCodeSections =
  function getReactUtilityFunctionsSections(selected) {
    const hasCustomMap = selected.includes("custom-map");
    const hasDebounce = selected.includes("debounce");
    const hasFlatten = selected.includes("flatten");
    const hasStyling = selected.includes("styling");

    return [
      {
        id: "imports",
        feature: hasStyling ? "feature-styling" : null,
        code: hasStyling
          ? `// Styling: Här importerar jag CSS-filen högst upp i komponentfilen.
import "./ReactUtilityFunctions.css";

`
          : "",
      },
      {
        id: "helpers",
        code: `// Här håller jag hjälplogiken utanför komponenten.
function doubleNumbers(numbers) {
  return numbers.map((number) => number * 2);
}

`,
      },
      ...(hasCustomMap
        ? [
            {
              id: "custom-map",
              feature: "feature-search",
              code: `// Egen map: Här bygger jag en ny array med callbackens resultat.
function customMap(array, callback) {
  const result = [];

  for (let index = 0; index < array.length; index += 1) {
    result.push(callback(array[index], index, array));
  }

  return result;
}

`,
            },
          ]
        : []),
      ...(hasDebounce
        ? [
            {
              id: "debounce",
              feature: "feature-category",
              code: `// Debounce: Här sparar closure-funktionen sin timer mellan anrop.
function debounce(callback, delay) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const debouncedSearch = debounce((query) => {
  console.log(query);
}, 300);

`,
            },
          ]
        : []),
      ...(hasFlatten
        ? [
            {
              id: "flatten",
              feature: "feature-sort",
              code: `// Flatten: Här använder jag rekursion när ett item också är en array.
function flattenArray(items) {
  const result = [];

  items.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
      return;
    }

    result.push(item);
  });

  return result;
}

`,
            },
          ]
        : []),
      {
        id: "component",
        code: `// Här bygger jag komponenten som använder helper-funktionerna.
export default function UtilityExample() {
  const values = ${
    hasCustomMap
      ? "customMap([1, 2, 3], (number) => number * 2)"
      : "doubleNumbers([1, 2, 3])"
  };
${hasFlatten ? "  const flattened = flattenArray([1, [2, [3]], 4]);\n" : ""}
  return (
{/* Här ger jag wrappern klassnamnet som CSS-filen stylar. */}
    <section${hasStyling ? ' className="react-utility-functions"' : ""}>
      <h1>Values</h1>
{/* Här renderar jag resultatet från helper-funktionen. */}
      {values.map((value) => (
        <p key={value}>{value}</p>
      ))}
${hasFlatten ? `{/* Här visar jag också resultatet från flatten-funktionen. */}
      <p>{flattened.join(", ")}</p>
` : ""}    </section>
  );
}

`,
      },
      ...(hasStyling
        ? [
            {
              id: "styling-css",
              feature: "feature-styling",
              code: `// ReactUtilityFunctions.css
/* Här ger jag utility-exemplet en tydlig yta. */
.react-utility-functions {
  display: grid;
  gap: 0.75rem;
  max-width: 720px;
}

/* Här gör jag varje rad lättare att skanna. */
.react-utility-functions p {
  margin: 0;
  padding: 0.5rem 0.65rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #ffffff;
}

`,
            },
          ]
        : []),
    ].filter((section) => section.code);
  };


