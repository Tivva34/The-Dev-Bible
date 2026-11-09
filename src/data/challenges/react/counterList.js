export const counterListChallenge = {
  id: "counter-list",
  title: "Counter list",
  difficulty: "Junior",
  estimatedTime: "20 min",

  interviewPrompt: "Bygg en komponent som visar en lista med counters.",
  currentGoal: "Visa varje counter och dess värde.",

  baseWhatToSay:
    "Okej, jag börjar med en enkel array och mappar ut varje counter. Eftersom inget ska ändras än behöver jag inte state direkt.",

  baseFollowUpQuestions: [
    {
      question: "Varför börjar du utan useState?",
      answer:
        "Grundkravet är bara att visa data. State behövs först när användaren ska kunna ändra något.",
    },
    {
      question: "Varför har varje counter ett id?",
      answer:
        "Jag behöver ett stabilt id för key så att React kan hålla isär varje counter i listan.",
    },
  ],

  followUpQuestions: [
    {
      featureIds: ["increment", "decrement"],
      question: "Varför använder du map när värdet ändras?",
      answer:
        "Jag vill skapa en ny array och bara ändra objektet med rätt id.",
    },
    {
      featureIds: ["step"],
      question: "Varför gör du step till state?",
      answer:
        "Då kan användaren ändra steget och samma värde används både för plus och minus.",
    },
    {
      featureIds: ["addCounter", "removeCounter"],
      question: "Hur håller du listan immutable?",
      answer:
        "Jag skapar en ny array när jag lägger till eller filtrerar bort en counter.",
    },
    {
      featureIds: ["total", "average"],
      question: "Varför räknar du ut värdena utanför JSX?",
      answer:
        "Då blir renderingen lättare att läsa och JSX:en slipper innehålla själva uträkningen.",
    },
  ],

  features: [
    {
      id: "increment",
      label: "Öka",
      colorClass: "feature-search",
      interviewer: "Lägg till en knapp som ökar värdet på en counter.",
      goal: "Låt användaren öka varje counter.",
      getWhatToSay(selectedBefore) {
        if (selectedBefore.includes("decrement")) {
          return "Okej, då kan jag använda samma uppdateringsmönster som för minus, men öka värdet istället.";
        }

        return "Okej, nu behöver counters ligga i state så att UI:t kan uppdateras när jag klickar.";
      },
    },
    {
      id: "decrement",
      label: "Minska",
      colorClass: "feature-category",
      interviewer: "Lägg till en knapp som minskar värdet på en counter.",
      goal: "Låt användaren minska varje counter.",
      getWhatToSay(selectedBefore) {
        if (selectedBefore.includes("increment")) {
          return "Okej, då lägger jag till minus med samma immutabla uppdatering som plus-knappen.";
        }

        return "Okej, då uppdaterar jag rätt counter i state och minskar värdet med ett.";
      },
    },
    {
      id: "step",
      label: "Step size",
      colorClass: "feature-price",
      interviewer: "Låt användaren välja hur mycket plus och minus ska ändra värdet.",
      goal: "Använd ett valbart steg för ändringar.",
      getWhatToSay(selectedBefore) {
        if (
          selectedBefore.includes("increment") ||
          selectedBefore.includes("decrement")
        ) {
          return "Okej, jag byter ut ettan i plus och minus mot ett step-värde från state.";
        }

        return "Okej, jag sparar steget i state så att ändringen kan styras från ett inputfält.";
      },
    },
    {
      id: "minZero",
      label: "Min 0",
      colorClass: "feature-stock",
      interviewer: "Se till att en counter aldrig kan bli mindre än noll.",
      goal: "Stoppa negativa värden.",
      getWhatToSay() {
        return "Okej, när jag minskar värdet använder jag Math.max så resultatet inte går under noll.";
      },
    },
    {
      id: "reset",
      label: "Reset",
      colorClass: "feature-sort",
      interviewer: "Lägg till en reset-knapp för varje counter.",
      goal: "Låt användaren återställa en counter till noll.",
      getWhatToSay() {
        return "Okej, reset är samma typ av uppdatering: jag hittar rätt counter och sätter värdet till noll.";
      },
    },
    {
      id: "addCounter",
      label: "Lägg till",
      colorClass: "feature-favorites",
      interviewer: "Lägg till en knapp som skapar en ny counter.",
      goal: "Kunna lägga till counters i listan.",
      getWhatToSay() {
        return "Okej, jag skapar ett nytt objekt med ett nytt id och lägger det sist i listan.";
      },
    },
    {
      id: "removeCounter",
      label: "Ta bort",
      colorClass: "feature-reset",
      interviewer: "Lägg till en knapp som tar bort en counter.",
      goal: "Kunna ta bort counters från listan.",
      getWhatToSay() {
        return "Okej, då filtrerar jag bort den counter som matchar id:t användaren klickade på.";
      },
    },
    {
      id: "total",
      label: "Total",
      colorClass: "feature-empty",
      interviewer: "Visa även summan av alla counters.",
      goal: "Räkna ut och visa totalen.",
      getWhatToSay(selectedBefore) {
        if (
          selectedBefore.includes("increment") ||
          selectedBefore.includes("decrement") ||
          selectedBefore.includes("reset")
        ) {
          return "Okej, eftersom counters kan ändras räknar jag totalen från aktuell state varje render.";
        }

        return "Okej, då kan jag summera värdena med reduce och visa resultatet ovanför listan.";
      },
    },
    {
      id: "average",
      label: "Snitt",
      colorClass: "feature-count",
      interviewer: "Visa snittvärdet för alla counters.",
      goal: "Räkna ut genomsnittet.",
      getWhatToSay() {
        return "Okej, jag kan återanvända summan och dela med antal counters, men behöver skydda mot tom lista.";
      },
    },
  ],

  getCodeSections(selected) {
    const hasIncrement = selected.includes("increment");
    const hasDecrement = selected.includes("decrement");
    const hasStep = selected.includes("step");
    const hasMinZero = selected.includes("minZero");
    const hasReset = selected.includes("reset");
    const hasAddCounter = selected.includes("addCounter");
    const hasRemoveCounter = selected.includes("removeCounter");
    const hasTotal = selected.includes("total");
    const hasAverage = selected.includes("average");

    const needsCounterState =
      hasIncrement ||
      hasDecrement ||
      hasMinZero ||
      hasReset ||
      hasAddCounter ||
      hasRemoveCounter;
    const needsState = needsCounterState || hasStep;
    const listName = needsCounterState ? "counters" : "initialCounters";
    const stepValue = hasStep ? "step" : "1";

    return [
      ...(needsState
        ? [
            {
              id: "import",
              feature: "feature-shared",
              code: `// Här behöver jag useState eftersom något i UI:t ska kunna ändras.
import { useState } from "react";

`,
            },
          ]
        : []),
      {
        id: "data",
        code: `// Jag börjar med några counters så listan har data från start.
const initialCounters = [
  { id: 1, label: "Apples", value: 2 },
  { id: 2, label: "Bananas", value: 4 },
  { id: 3, label: "Oranges", value: 1 },
];

// Här bygger jag komponenten som visar counters.
export default function CounterList() {
`,
      },
      ...(needsCounterState
        ? [
            {
              id: "counter-state",
              feature: "feature-shared",
              code: `  // Nu behöver listan ligga i state eftersom användaren ändrar counters.
  const [counters, setCounters] = useState(initialCounters);

`,
            },
          ]
        : []),
      ...(hasStep
        ? [
            {
              id: "step-state",
              feature: "feature-price",
              code: `  // Här låter jag användaren styra hur stort varje klick ska vara.
  const [step, setStep] = useState(1);

`,
            },
          ]
        : []),
      ...(hasIncrement
        ? [
            {
              id: "increment-handler",
              feature: "feature-search",
              code: `  function increment(counterId) {
    // Jag ändrar bara den counter som användaren klickade på.
    setCounters(
      counters.map((counter) =>
        counter.id === counterId
          ? { ...counter, value: counter.value + ${stepValue} }
          : counter
      )
    );
  }

`,
            },
          ]
        : []),
      ...(hasDecrement || hasMinZero
        ? [
            {
              id: "decrement-handler",
              feature: hasMinZero ? "feature-stock" : "feature-category",
              code: `  function decrement(counterId) {
    // Samma idé här, men värdet går ner istället.
    setCounters(
      counters.map((counter) =>
        counter.id === counterId
          ? {
              ...counter,
              value: ${hasMinZero ? `Math.max(0, counter.value - ${stepValue})` : `counter.value - ${stepValue}`},
            }
          : counter
      )
    );
  }

`,
            },
          ]
        : []),
      ...(hasReset
        ? [
            {
              id: "reset-handler",
              feature: "feature-sort",
              code: `  function resetCounter(counterId) {
    // Reset ändrar bara ett objekt och låter resten vara kvar.
    setCounters(
      counters.map((counter) =>
        counter.id === counterId
          ? { ...counter, value: 0 }
          : counter
      )
    );
  }

`,
            },
          ]
        : []),
      ...(hasAddCounter
        ? [
            {
              id: "add-handler",
              feature: "feature-favorites",
              code: `  function addCounter() {
    // Jag skapar ett nytt id från den högsta counter som redan finns.
    const nextId = Math.max(...counters.map((counter) => counter.id)) + 1;

    setCounters([
      ...counters,
      { id: nextId, label: \`Counter \${nextId}\`, value: 0 },
    ]);
  }

`,
            },
          ]
        : []),
      ...(hasRemoveCounter
        ? [
            {
              id: "remove-handler",
              feature: "feature-reset",
              code: `  function removeCounter(counterId) {
    // Här tar jag bort rätt counter utan att ändra resten.
    setCounters(counters.filter((counter) => counter.id !== counterId));
  }

`,
            },
          ]
        : []),
      ...(hasTotal || hasAverage
        ? [
            {
              id: "total",
              feature: hasAverage ? "feature-count" : "feature-empty",
              code: `  // Här räknar jag ut summan av alla counters.
  const total = ${listName}.reduce(
    (sum, counter) => sum + counter.value,
    0
  );
${hasAverage ? `  const average = ${listName}.length === 0 ? 0 : total / ${listName}.length;\n` : ""}
`,
            },
          ]
        : []),
      {
        id: "return-start",
        code: `  // Här returnerar jag totalsiffror, knappar och själva listan.
  return (
    <div>
      <h1>Counters</h1>

`,
      },
      ...(hasStep
        ? [
            {
              id: "step-ui",
              feature: "feature-price",
              code: `      {/* Här låter jag användaren välja hur stort varje steg ska vara. */}
      <label>
        Step
        <input
          type="number"
          min="1"
          value={step}
          onChange={(event) => setStep(Number(event.target.value))}
        />
      </label>

`,
            },
          ]
        : []),
      ...(hasTotal
        ? [
            {
              id: "total-ui",
              feature: "feature-empty",
              code: `      {/* Här visar jag totalen ovanför listan. */}
      <p>Total: {total}</p>

`,
            },
          ]
        : []),
      ...(hasAverage
        ? [
            {
              id: "average-ui",
              feature: "feature-count",
              code: `      {/* Snittet kan ändras både när värden och listan ändras. */}
      <p>Average: {average.toFixed(1)}</p>

`,
            },
          ]
        : []),
      ...(hasAddCounter
        ? [
            {
              id: "add-ui",
              feature: "feature-favorites",
              code: `      {/* Här kan användaren lägga till en ny counter. */}
      <button onClick={addCounter}>Add counter</button>

`,
            },
          ]
        : []),
      {
        id: "map-list",
        code: `      {/* Här renderar jag varje counter. */}
      {${listName}.map((counter) => (
        <article key={counter.id}>
          {/* Key hjälper React att hålla isär varje counter i listan. */}
          <h2>{counter.label}</h2>
          <p>{counter.value}</p>
${hasIncrement ? `          {/* Här ökar jag bara den counter som användaren klickar på. */}
          <button onClick={() => increment(counter.id)}>
            +
          </button>
` : ""}${hasDecrement || hasMinZero ? `          {/* Här minskar jag bara den counter som användaren klickar på. */}
          <button onClick={() => decrement(counter.id)}>
            -
          </button>
` : ""}${hasReset ? `          {/* Här nollställer jag just den här countern. */}
          <button onClick={() => resetCounter(counter.id)}>
            Reset
          </button>
` : ""}${hasRemoveCounter ? `          {/* Här tar jag bort just den här countern från listan. */}
          <button onClick={() => removeCounter(counter.id)}>
            Remove
          </button>
` : ""}        </article>
      ))}
    </div>
  );
}`,
      },
    ];
  },
};
