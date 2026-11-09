import { createSnippetChallenge } from "../helpers/snippetChallengeBuilder.js";



export const fizzBuzzChallenge = createSnippetChallenge({
  id: "fizz-buzz",
  title: "FizzBuzz",
  estimatedTime: "20 min",
  interviewPrompt:
    "Skriv en komponent som visar talen 1 till 20, men ersätter vissa tal enligt FizzBuzz.",
  currentGoal: "Visa en FizzBuzz-lista från 1 till 20.",
  baseWhatToSay:
    "Okej, jag börjar med att skapa en array med tal och en liten funktion som returnerar rätt text för varje tal.",
  baseCode: `function getFizzBuzzValue(number) {
  if (number % 15 === 0) return "FizzBuzz";
  if (number % 3 === 0) return "Fizz";
  if (number % 5 === 0) return "Buzz";
  return number;
}

export default function FizzBuzz() {
  const numbers = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <section>
      <h1>FizzBuzz</h1>
      {numbers.map((number) => (
        <p key={number}>{getFizzBuzzValue(number)}</p>
      ))}
    </section>
  );
}

`,
  baseFollowUpQuestions: [
    {
      question: "Varför kollar du 15 först?",
      answer:
        "Tal som är delbara med 15 är också delbara med 3 och 5, så FizzBuzz måste kontrolleras före Fizz och Buzz.",
    },
  ],
  features: [
    {
      id: "range",
      label: "Range",
      colorClass: "feature-search",
      interviewer: "Låt användaren välja hur många tal som ska visas.",
      goal: "Styra längden på listan med state.",
      getWhatToSay() {
        return "Okej, då sparar jag maxvärdet i state och skapar arrayen utifrån det.";
      },
      code: `import { useState } from "react";

const [maxNumber, setMaxNumber] = useState(20);
const numbers = Array.from({ length: maxNumber }, (_, index) => index + 1);

<input
  type="number"
  value={maxNumber}
  onChange={(event) => setMaxNumber(Number(event.target.value))}
/>

`,
    },
    {
      id: "customWords",
      label: "Egna ord",
      colorClass: "feature-category",
      interviewer: "Låt Fizz och Buzz vara valbara texter.",
      goal: "Göra orden konfigurerbara.",
      getWhatToSay() {
        return "Okej, då skickar jag in orden till funktionen istället för att hårdkoda dem där inne.";
      },
      code: `function getFizzBuzzValue(number, fizzWord, buzzWord) {
  if (number % 15 === 0) return \`\${fizzWord}\${buzzWord}\`;
  if (number % 3 === 0) return fizzWord;
  if (number % 5 === 0) return buzzWord;
  return number;
}

`,
    },
    {
      id: "rules",
      label: "Visa regler",
      colorClass: "feature-sort",
      interviewer: "Visa tydligt varför varje rad blev Fizz, Buzz eller FizzBuzz.",
      goal: "Visa extra information per tal.",
      getWhatToSay() {
        return "Okej, jag kan returnera både label och reason så UI:t kan visa förklaringen utan att duplicera logiken.";
      },
      code: `function getFizzBuzzResult(number) {
  if (number % 15 === 0) {
    return { label: "FizzBuzz", reason: "Divisible by 3 and 5" };
  }
  if (number % 3 === 0) return { label: "Fizz", reason: "Divisible by 3" };
  if (number % 5 === 0) return { label: "Buzz", reason: "Divisible by 5" };
  return { label: number, reason: "Regular number" };
}

`,
    },
    {
      id: "styling",
      label: "Styling",
      colorClass: "feature-styling",
      interviewer: "Lägg till styling som gör FizzBuzz-listan lättare att läsa.",
      goal: "Lägg CSS-import, wrapper-klass och styling för aktiva kontroller.",
      getWhatToSay() {
        return "Okej, jag lägger importen högst upp, ger section en klass och stylar de delar som finns i lösningen.";
      },
      code: "",
    },
    {
      id: "count",
      label: "Antal",
      colorClass: "feature-count",
      interviewer: "Visa hur många Fizz, Buzz och FizzBuzz som finns.",
      goal: "Räkna resultattyperna.",
      getWhatToSay() {
        return "Okej, jag kan räkna varje typ från samma lista som renderas så siffrorna matchar UI:t.";
      },
      code: `const results = numbers.map((number) => getFizzBuzzValue(number));

const fizzBuzzCount = results.filter((item) => item === "FizzBuzz").length;
const fizzCount = results.filter((item) => item === "Fizz").length;
const buzzCount = results.filter((item) => item === "Buzz").length;

`,
    },
  ],
});

fizzBuzzChallenge.getCodeSections = function getFizzBuzzSections(selected) {
  const hasRange = selected.includes("range");
  const hasCustomWords = selected.includes("customWords");
  const hasRules = selected.includes("rules");
  const hasCount = selected.includes("count");
  const hasStyling = selected.includes("styling");
  const needsState = hasRange || hasCustomWords;
  const valueFunctionName = hasRules ? "getFizzBuzzResult" : "getFizzBuzzValue";
  const valueArgs = hasCustomWords ? ", fizzWord, buzzWord" : "";
  const fizzValue = hasCustomWords ? "fizzWord" : '"Fizz"';
  const buzzValue = hasCustomWords ? "buzzWord" : '"Buzz"';
  const fizzBuzzValue = hasCustomWords
    ? "`${fizzWord}${buzzWord}`"
    : '"FizzBuzz"';
  const renderValue = hasRules ? "result.label" : "result";
  const fizzBuzzCompare = hasCustomWords ? "`${fizzWord}${buzzWord}`" : '"FizzBuzz"';
  const fizzCompare = hasCustomWords ? "fizzWord" : '"Fizz"';
  const buzzCompare = hasCustomWords ? "buzzWord" : '"Buzz"';

  return [
    ...(hasStyling
      ? [
          {
            id: "styling-import",
            feature: "feature-styling",
            code: `// Styling: Okej, jag importerar CSS-filen högst upp i komponentfilen.
import "./FizzBuzz.css";

`,
          },
        ]
      : []),
    ...(needsState
      ? [
          {
            id: "import",
            feature: "feature-shared",
            code: `// Här behöver jag useState eftersom användaren ska kunna ändra värden.
import { useState } from "react";

`,
          },
        ]
      : []),
    {
      id: "fizzbuzz-function",
      feature:
        (hasRules && "feature-sort") ||
        (hasCustomWords && "feature-category") ||
        null,
      code: hasRules
        ? `// Här samlar jag FizzBuzz-reglerna i en funktion.
function ${valueFunctionName}(number${valueArgs}) {
  if (number % 15 === 0) {
    return {
      label: ${fizzBuzzValue},
      reason: "Divisible by 3 and 5",
    };
  }

  if (number % 3 === 0) {
    return { label: ${fizzValue}, reason: "Divisible by 3" };
  }

  if (number % 5 === 0) {
    return { label: ${buzzValue}, reason: "Divisible by 5" };
  }

  return { label: number, reason: "Regular number" };
}

`
        : `// Här samlar jag FizzBuzz-reglerna i en funktion.
function ${valueFunctionName}(number${valueArgs}) {
  if (number % 15 === 0) return ${fizzBuzzValue};
  if (number % 3 === 0) return ${fizzValue};
  if (number % 5 === 0) return ${buzzValue};
  return number;
}

`,
    },
    {
      id: "component-start",
      code: `// Här bygger jag komponenten som visar FizzBuzz-listan.
export default function FizzBuzz() {
`,
    },
    ...(hasRange
      ? [
          {
            id: "range-state",
            feature: "feature-search",
            code: `  // Här sparar jag hur många tal användaren vill visa.
  const [maxNumber, setMaxNumber] = useState(20);

`,
          },
        ]
      : []),
    ...(hasCustomWords
      ? [
          {
            id: "word-state",
            feature: "feature-category",
            code: `  // Här sparar jag orden som ska användas för Fizz och Buzz.
  const [fizzWord, setFizzWord] = useState("Fizz");
  const [buzzWord, setBuzzWord] = useState("Buzz");

`,
          },
        ]
      : []),
    {
      id: "numbers",
      feature: hasRange ? "feature-search" : null,
      code: `  // Här skapar jag talen som ska renderas.
  const numbers = Array.from(
    { length: ${hasRange ? "maxNumber" : "20"} },
    (_, index) => index + 1
  );

`,
    },
    ...(hasCount
      ? [
          {
            id: "results",
            feature: "feature-count",
            code: `  // Här räknar jag på samma lista som användaren ser.
  const results = numbers.map((number) =>
    ${valueFunctionName}(number${hasCustomWords ? ", fizzWord, buzzWord" : ""})
  );
  const fizzBuzzCount = results.filter((item) =>
    ${hasRules ? `item.label === ${fizzBuzzCompare}` : `item === ${fizzBuzzCompare}`}
  ).length;
  const fizzCount = results.filter((item) =>
    ${hasRules ? `item.label === ${fizzCompare}` : `item === ${fizzCompare}`}
  ).length;
  const buzzCount = results.filter((item) =>
    ${hasRules ? `item.label === ${buzzCompare}` : `item === ${buzzCompare}`}
  ).length;

`,
          },
        ]
      : []),
    {
      id: "return",
      code: `  // Här returnerar jag kontrollerna och listan.
  return (
    <section${hasStyling ? ' className="fizz-buzz"' : ""}>
      <h1>FizzBuzz</h1>
${
  hasRange
    ? `      {/* Här låter jag användaren välja maxvärde. */}
      <input
        type="number"
        value={maxNumber}
        onChange={(event) => setMaxNumber(Number(event.target.value))}
      />
`
    : ""
}${
  hasCustomWords
    ? `      {/* Här låter jag användaren ändra orden. */}
      <input
        value={fizzWord}
        onChange={(event) => setFizzWord(event.target.value)}
      />
      <input
        value={buzzWord}
        onChange={(event) => setBuzzWord(event.target.value)}
      />
`
    : ""
}${
  hasCount
    ? `      {/* Här visar jag hur många av varje typ som finns. */}
      <p>FizzBuzz: {fizzBuzzCount}</p>
      <p>Fizz: {fizzCount}</p>
      <p>Buzz: {buzzCount}</p>
`
    : ""
}      {/* Här renderar jag varje tal från listan. */}
      {numbers.map((number) => {
        const result = ${valueFunctionName}(
          number${hasCustomWords ? ", fizzWord, buzzWord" : ""}
        );

        return (
          <p key={number}>
            {${renderValue}}
            ${hasRules ? "{result.reason}" : ""}
          </p>
        );
      })}
    </section>
  );
}
`,
    },
    ...(hasStyling
      ? [
          {
            id: "styling-css",
            feature: "feature-styling",
            code: `// FizzBuzz.css
/* Här ger jag hela FizzBuzz-uppgiften en kompakt och tydlig layout. */
.fizz-buzz {
  display: grid;
  gap: 0.75rem;
  max-width: 720px;
}

/* Här gör jag kontrollerna lätta att använda när range eller egna ord finns. */
.fizz-buzz input {
  max-width: 14rem;
  padding: 0.55rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}

/* Här håller jag resultatlistan lätt att skanna. */
.fizz-buzz p {
  margin: 0;
}
${hasCount ? `
/* Här gör jag räknarna tydliga när antal-kravet är aktivt. */
.fizz-buzz > p {
  font-weight: 700;
}
` : ""}${hasRules ? `
/* Här ger jag plats för förklaringen när regler visas. */
.fizz-buzz p {
  display: grid;
  gap: 0.15rem;
}
` : ""}
`,
          },
        ]
      : []),
  ];
};

export const javascriptPromiseAllChallenge = createSnippetChallenge({
  id: "javascript-promise-all",
  title: "JS Promise.all",
  estimatedTime: "25 min",
  interviewPrompt: "Implementera en egen Promise.all-funktion.",
  currentGoal: "Returnera resultaten i rätt ordning när alla promises lyckas.",
  baseWhatToSay:
    "Okej, jag går igenom varje promise, sparar resultatet på samma index och resolve:ar när alla är klara.",
  baseCode: `function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed += 1;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

promiseAll([Promise.resolve("A"), Promise.resolve("B")]).then(console.log);

`,
  features: [
    {
      id: "empty",
      label: "Tom array",
      colorClass: "feature-empty",
      interviewer: "Hantera att arrayen är tom.",
      goal: "Resolve:a direkt med en tom array.",
      getWhatToSay() {
        return "Okej, om det inte finns något att vänta på kan jag resolve:a direkt.";
      },
      code: `if (promises.length === 0) {
  resolve([]);
  return;
}

`,
    },
    {
      id: "non-promise",
      label: "Vanliga värden",
      colorClass: "feature-category",
      interviewer: "Stöd även vanliga värden, inte bara promises.",
      goal: "Wrap:a varje item med Promise.resolve.",
      getWhatToSay() {
        return "Okej, Promise.resolve gör att både vanliga värden och promises kan hanteras likadant.";
      },
      code: `Promise.resolve(promise).then((value) => {
  results[index] = value;
});

`,
    },
    {
      id: "reject",
      label: "Reject",
      colorClass: "feature-reset",
      interviewer: "Om en promise rejectar ska hela funktionen rejecta.",
      goal: "Skicka felet vidare direkt.",
      getWhatToSay() {
        return "Okej, Promise.all ska avbryta med första felet, så catch kan anropa reject direkt.";
      },
      code: `.catch(reject);

`,
    },
  ],
});

export const javascriptEventEmitterChallenge = createSnippetChallenge({
  id: "javascript-event-emitter",
  title: "JS Event Emitter",
  estimatedTime: "25 min",
  interviewPrompt: "Implementera en enkel EventEmitter i JavaScript.",
  currentGoal: "Kunna prenumerera på ett event och trigga callbacks.",
  baseWhatToSay:
    "Okej, jag sparar callbacks per eventnamn och anropar dem när eventet emit:as.",
  baseCode: `class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, callback) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(callback);
  }

  emit(eventName, payload) {
    const callbacks = this.events[eventName] || [];
    callbacks.forEach((callback) => callback(payload));
  }
}

const emitter = new EventEmitter();
emitter.on("save", (value) => console.log(value));
emitter.emit("save", "Saved");

`,
  features: [
    {
      id: "off",
      label: "Off",
      colorClass: "feature-reset",
      interviewer: "Lägg till off så man kan avregistrera en callback.",
      goal: "Ta bort prenumerationer.",
      getWhatToSay() {
        return "Okej, jag filtrerar bort callbacken från eventets lista.";
      },
      code: `off(eventName, callback) {
  this.events[eventName] = (this.events[eventName] || []).filter(
    (savedCallback) => savedCallback !== callback,
  );
}

`,
    },
    {
      id: "once",
      label: "Once",
      colorClass: "feature-category",
      interviewer: "Lägg till once som bara kör callbacken en gång.",
      goal: "Prenumerera en enda gång.",
      getWhatToSay() {
        return "Okej, once wrappar callbacken och tar bort sig själv efter första körningen.";
      },
      code: `once(eventName, callback) {
  const wrapper = (payload) => {
    callback(payload);
    this.off(eventName, wrapper);
  };

  this.on(eventName, wrapper);
}

`,
    },
    {
      id: "unsubscribe",
      label: "Return unsubscribe",
      colorClass: "feature-search",
      interviewer: "Låt on returnera en unsubscribe-funktion.",
      goal: "Göra API:t enklare att använda.",
      getWhatToSay() {
        return "Okej, då kan den som lyssnar själv städa upp utan att spara eventnamnet igen.";
      },
      code: `on(eventName, callback) {
  this.events[eventName] = this.events[eventName] || [];
  this.events[eventName].push(callback);

  return () => this.off(eventName, callback);
}

`,
    },
  ],
});

export const javascriptDeepCloneChallenge = createSnippetChallenge({
  id: "javascript-deep-clone",
  title: "JS Deep clone",
  estimatedTime: "25 min",
  interviewPrompt: "Implementera en funktion som deep-clonar objekt och arrayer.",
  currentGoal: "Kopiera nested objekt utan att dela referenser.",
  baseWhatToSay:
    "Okej, jag hanterar primitiva värden direkt och går rekursivt igenom objekt och arrayer.",
  baseCode: `function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  const clone = Array.isArray(value) ? [] : {};

  Object.keys(value).forEach((key) => {
    clone[key] = deepClone(value[key]);
  });

  return clone;
}

const user = { name: "Alex", skills: ["React"] };
const copy = deepClone(user);

`,
  features: [
    {
      id: "date",
      label: "Date",
      colorClass: "feature-category",
      interviewer: "Hantera Date-objekt.",
      goal: "Kopiera Date utan att dela referens.",
      getWhatToSay() {
        return "Okej, Date behöver en egen gren eftersom det inte ska behandlas som ett vanligt objekt.";
      },
      code: `if (value instanceof Date) {
  return new Date(value.getTime());
}

`,
    },
    {
      id: "map",
      label: "Map",
      colorClass: "feature-sort",
      interviewer: "Hantera Map.",
      goal: "Kopiera key/value-par.",
      getWhatToSay() {
        return "Okej, Map har egen iteration så jag skapar en ny Map och clonar varje värde.";
      },
      code: `if (value instanceof Map) {
  return new Map(
    [...value].map(([key, mapValue]) => [key, deepClone(mapValue)]),
  );
}

`,
    },
    {
      id: "circular",
      label: "Circular",
      colorClass: "feature-empty",
      interviewer: "Hantera cirkulära referenser.",
      goal: "Undvika oändlig rekursion.",
      getWhatToSay() {
        return "Okej, jag behöver komma ihåg objekt jag redan har kopierat med en WeakMap.";
      },
      code: `function deepClone(value, seen = new WeakMap()) {
  if (seen.has(value)) return seen.get(value);

  const clone = Array.isArray(value) ? [] : {};
  seen.set(value, clone);
}

`,
    },
  ],
});

export const javascriptThrottleChallenge = createSnippetChallenge({
  id: "javascript-throttle",
  title: "JS Throttle",
  estimatedTime: "25 min",
  interviewPrompt: "Implementera en throttle-funktion.",
  currentGoal: "Begränsa hur ofta en callback får köras.",
  baseWhatToSay:
    "Okej, jag sparar senaste körningen och stoppar nya anrop tills delay har passerat.",
  baseCode: `function throttle(callback, delay) {
  let lastRun = 0;

  return (...args) => {
    const now = Date.now();

    if (now - lastRun < delay) return;

    lastRun = now;
    callback(...args);
  };
}

const onScroll = throttle(() => console.log("scroll"), 300);

`,
  features: [
    {
      id: "trailing",
      label: "Trailing",
      colorClass: "feature-search",
      interviewer: "Kör sista anropet efter delay om användaren fortsätter trigga.",
      goal: "Inte tappa sista värdet.",
      getWhatToSay() {
        return "Okej, då sparar jag senaste args och kör dem med timeout när perioden är slut.";
      },
      code: `let timeoutId;
let latestArgs;

timeoutId = setTimeout(() => {
  callback(...latestArgs);
  timeoutId = null;
}, delay);

`,
    },
    {
      id: "cancel",
      label: "Cancel",
      colorClass: "feature-reset",
      interviewer: "Lägg till cancel.",
      goal: "Kunna avbryta väntande körning.",
      getWhatToSay() {
        return "Okej, cancel rensar timeouten så inget trailing-anrop körs efteråt.";
      },
      code: `throttled.cancel = () => {
  clearTimeout(timeoutId);
  timeoutId = null;
};

`,
    },
    {
      id: "leading",
      label: "Leading av",
      colorClass: "feature-category",
      interviewer: "Gör det möjligt att stänga av första direkta körningen.",
      goal: "Styra om callback körs direkt eller väntar.",
      getWhatToSay() {
        return "Okej, en option gör beteendet tydligt utan att ändra resten av API:t.";
      },
      code: `function throttle(callback, delay, options = { leading: true }) {
  let lastRun = options.leading ? 0 : Date.now();
}

`,
    },
  ],
});


