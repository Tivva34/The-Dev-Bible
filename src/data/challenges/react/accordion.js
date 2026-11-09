export const accordionChallenge = {
  id: "accordion",
  title: "Accordion",
  difficulty: "Junior",
  estimatedTime: "20 min",
  interviewPrompt: "Bygg en accordion som visar en lista med frågor.",
  currentGoal: "Visa frågorna och svaren.",
  baseWhatToSay:
    "Okej, jag börjar med att rendera varje fråga och svar från en lista.",
  baseFollowUpQuestions: [
    {
      question: "Varför använder du map här?",
      answer:
        "För att varje accordion-rad kommer från samma datastruktur och renderas på samma sätt.",
    },
  ],
  followUpQuestions: [
    {
      featureIds: ["toggle"],
      question: "Varför sparar du id:t för öppen rad?",
      answer:
        "Då vet jag exakt vilken panel som ska visa sitt svar.",
    },
    {
      featureIds: ["single"],
      question: "Hur ser du till att bara en är öppen?",
      answer:
        "Jag sparar ett enda id i state istället för en array med flera öppna id:n.",
    },
    {
      featureIds: ["search", "empty"],
      question: "Varför filtrerar du före map?",
      answer:
        "Då renderar JSX bara de frågor som faktiskt ska visas.",
    },
    {
      featureIds: ["count"],
      question: "Hur räknar du öppna paneler?",
      answer:
        "I den här varianten finns bara ett activeId, så antalet är 1 om det finns ett id och annars 0.",
    },
  ],
  features: [
    {
      id: "toggle",
      label: "Öppna/stäng",
      colorClass: "feature-search",
      interviewer: "Gör så att användaren kan öppna och stänga en fråga.",
      goal: "Visa svaret bara för vald fråga.",
      getWhatToSay() {
        return "Okej, då sparar jag vilken fråga som är öppen och växlar den när användaren klickar.";
      },
    },
    {
      id: "single",
      label: "En åt gången",
      colorClass: "feature-category",
      interviewer: "Se till att bara en panel kan vara öppen åt gången.",
      goal: "Stäng tidigare panel när en ny öppnas.",
      getWhatToSay() {
        return "Okej, med ett enda activeId i state får jag automatiskt bara en öppen panel.";
      },
    },
    {
      id: "defaultOpen",
      label: "Första öppen",
      colorClass: "feature-sort",
      interviewer: "Låt första frågan vara öppen från start.",
      goal: "Sätta ett initialt öppet värde.",
      getWhatToSay() {
        return "Okej, då startar jag state med första frågans id istället för null.";
      },
    },
    {
      id: "search",
      label: "Sök fråga",
      colorClass: "feature-price",
      interviewer: "Lägg till sök så användaren kan filtrera frågorna.",
      goal: "Filtrera accordion-listan.",
      getWhatToSay() {
        return "Okej, jag sparar söktexten och filtrerar frågorna på question innan jag mappar ut dem.";
      },
    },
    {
      id: "empty",
      label: "Tomt resultat",
      colorClass: "feature-empty",
      interviewer: "Visa ett meddelande om sökningen inte ger några träffar.",
      goal: "Hantera tom filtrerad lista.",
      getWhatToSay() {
        return "Okej, då kontrollerar jag om den filtrerade listan är tom innan jag renderar frågorna.";
      },
    },
    {
      id: "count",
      label: "Antal öppna",
      colorClass: "feature-count",
      interviewer: "Visa hur många paneler som är öppna.",
      goal: "Räkna öppna paneler.",
      getWhatToSay() {
        return "Okej, eftersom jag sparar activeId kan jag räkna det som 1 eller 0.";
      },
    },
    {
      id: "styling",
      label: "Styling",
      colorClass: "feature-styling",
      interviewer: "Lägg till styling så accordion-raderna blir lättare att läsa.",
      goal: "Ge accordion en egen CSS-fil och tydliga klassnamn.",
      getWhatToSay() {
        return "Okej, jag lägger klassnamn på wrappern och raderna och flyttar utseendet till CSS.";
      },
    },
  ],
  getCodeSections(selected) {
    const hasToggle = selected.includes("toggle");
    const hasSingle = selected.includes("single");
    const hasDefaultOpen = selected.includes("defaultOpen");
    const hasSearch = selected.includes("search");
    const hasEmpty = selected.includes("empty");
    const hasCount = selected.includes("count");
    const hasStyling = selected.includes("styling");
    const needsOpenState = hasToggle || hasSingle || hasDefaultOpen || hasCount;
    const needsState = needsOpenState || hasSearch;
    const listName = hasSearch || hasEmpty ? "visibleFaqs" : "faqs";

    return [
      ...(needsState
        ? [
            {
              id: "import",
              feature: "feature-shared",
              code: `// Här behöver jag useState för det som användaren kan ändra.
import { useState } from "react";

`,
            },
          ]
        : []),
      ...(hasStyling
        ? [
            {
              id: "styling-import",
              feature: "feature-styling",
              code: `// Här importerar jag CSS-filen för accordion-komponenten.
import "./Accordion.css";

`,
            },
          ]
        : []),
      {
        id: "data",
        code: `// Jag börjar med en liten FAQ-lista som komponenten kan rendera.
const faqs = [
  { id: 1, question: "What is React?", answer: "A UI library." },
  { id: 2, question: "What is state?", answer: "Data that can change." },
  { id: 3, question: "What is JSX?", answer: "JavaScript with markup." },
];

// Här bygger jag själva accordion-komponenten.
export default function Accordion() {
`,
      },
      ...(needsOpenState
        ? [
            {
              id: "state",
              feature: hasDefaultOpen ? "feature-sort" : "feature-search",
              code: `  // Jag sparar id:t för panelen som är öppen just nu.
  const [activeId, setActiveId] = useState(${hasDefaultOpen ? "faqs[0].id" : "null"});

`,
            },
          ]
        : []),
      ...(hasSearch
        ? [
            {
              id: "search-state",
              feature: "feature-price",
              code: `  // Här behöver jag komma ihåg vad användaren söker på.
  const [search, setSearch] = useState("");

  // Här filtrerar jag listan innan den renderas.
  const visibleFaqs = faqs.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

`,
            },
          ]
        : []),
      ...(hasEmpty && !hasSearch
        ? [
            {
              id: "visible-fallback",
              feature: "feature-empty",
              code: `  // Här använder jag samma variabelnamn så tom-lista-logiken kan fungera.
  const visibleFaqs = faqs;

`,
            },
          ]
        : []),
      ...(hasToggle || hasSingle
        ? [
            {
              id: "toggle-handler",
              feature: hasSingle ? "feature-category" : "feature-search",
              code: `  function toggleQuestion(questionId) {
    // Klickar jag på samma fråga stänger jag den, annars öppnar jag den nya.
    setActiveId(activeId === questionId ? null : questionId);
  }

`,
            },
          ]
        : []),
      ...(hasCount
        ? [
            {
              id: "open-count",
              feature: "feature-count",
              code: `  // Med ett activeId är antalet öppna paneler antingen 0 eller 1.
  const openCount = activeId ? 1 : 0;

`,
            },
          ]
        : []),
      {
        id: "return-start",
        code: `  // Här returnerar jag rubriken och listan med frågor.
  return (
    <div${hasStyling ? ' className="accordion"' : ""}>
      <h1>FAQ</h1>

`,
      },
      ...(hasSearch
        ? [
            {
              id: "search-ui",
              feature: "feature-price",
              code: `      {/* Här kopplar jag sökfältet till search-state. */}
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search questions"
      />

`,
            },
          ]
        : []),
      ...(hasCount
        ? [
            {
              id: "count-ui",
              feature: "feature-count",
              code: `      {/* Här visar jag värdet som räknas ut ovanför return. */}
      <p>Open panels: {openCount}</p>

`,
            },
          ]
        : []),
      ...(hasEmpty
        ? [
            {
              id: "empty-ui",
              feature: "feature-empty",
              code: `      {/* Om filtreringen inte ger träffar visar jag ett tydligt meddelande. */}
      {visibleFaqs.length === 0 && <p>No questions found.</p>}

`,
            },
          ]
        : []),
      {
        id: "list",
        code: `      {/* Här renderar jag varje fråga från listan. */}
      {${listName}.map((item) => (
        <article${hasStyling ? ' className="accordion-item"' : ""} key={item.id}>
          {/* Key hjälper React att känna igen varje fråga när listan ändras. */}
${needsOpenState ? `          {/* Här låter jag klicket styra vilken fråga som är öppen. */}
          <button onClick={() => toggleQuestion(item.id)}>
            {item.question}
          </button>
          {/* Här visar jag svaret bara för den öppna frågan. */}
          {activeId === item.id && <p>{item.answer}</p>}
` : `          {/* Här visar jag frågan och svaret direkt. */}
          <h2>{item.question}</h2>
          <p>{item.answer}</p>
`}        </article>
      ))}
    </div>
  );
}`,
      },
      ...(hasStyling
        ? [
            {
              id: "styling-css",
              feature: "feature-styling",
              code: `// Accordion.css
/* Här staplar jag frågorna med lagom avstånd. */
.accordion {
  display: grid;
  gap: 0.75rem;
  max-width: 680px;
}

/* Här ger jag varje rad en tydlig avgränsning. */
.accordion-item {
  padding: 0.85rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #ffffff;
}

/* Här gör jag frågeknappen enkel att träffa. */
.accordion-item button {
  width: 100%;
  text-align: left;
}
`,
            },
          ]
        : []),
    ];
  },
};

