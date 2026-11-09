export const paginationChallenge = {
  id: "pagination",
  title: "Pagination",
  difficulty: "Junior",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg en komponent som visar en lista med paginering.",
  currentGoal: "Visa alla items i en lista.",
  baseWhatToSay:
    "Okej, jag börjar med att rendera listan rakt av så att datan syns på sidan.",
  baseFollowUpQuestions: [
    {
      question: "Varför visar du allt från början?",
      answer:
        "Jag börjar med att få datan synlig på sidan och håller renderingen enkel.",
    },
  ],
  followUpQuestions: [
    {
      featureIds: ["paginate"],
      question: "Varför använder du slice?",
      answer:
        "Slice låter mig ta ut bara den del av arrayen som hör till aktuell sida.",
    },
    {
      featureIds: ["disabled"],
      question: "Varför disable:ar du knappar?",
      answer:
        "Då kan användaren inte klicka förbi första eller sista sidan.",
    },
    {
      featureIds: ["filter", "pageSize"],
      question: "Varför går du tillbaka till sida 1?",
      answer:
        "När listan eller sidstorleken ändras kan nuvarande sida hamna utanför resultatet.",
    },
    {
      featureIds: ["pageNumbers"],
      question: "Varför använder du Array.from?",
      answer:
        "Jag vill skapa en knapp per sida utifrån totalPages utan att hårdkoda antal sidor.",
    },
  ],
  features: [
    {
      id: "paginate",
      label: "Paginering",
      colorClass: "feature-search",
      interviewer: "Visa bara fem items per sida.",
      goal: "Dela upp listan i sidor.",
      getWhatToSay() {
        return "Okej, då sparar jag aktuell sida och använder start/end-index för att ta ut rätt items.";
      },
    },
    {
      id: "controls",
      label: "Next/prev",
      colorClass: "feature-category",
      interviewer: "Lägg till knappar för nästa och föregående sida.",
      goal: "Låt användaren byta sida.",
      getWhatToSay() {
        return "Okej, då ändrar knapparna page-state upp eller ner med ett steg.";
      },
    },
    {
      id: "disabled",
      label: "Disabled",
      colorClass: "feature-sort",
      interviewer: "Disable:a knapparna när användaren är på första eller sista sidan.",
      goal: "Förhindra ogiltiga sidbyten.",
      getWhatToSay() {
        return "Okej, jag räknar ut om vi är på första eller sista sidan och använder det på knapparna.";
      },
    },
    {
      id: "pageSize",
      label: "Page size",
      colorClass: "feature-empty",
      interviewer: "Låt användaren välja hur många items som visas per sida.",
      goal: "Gör sidstorleken valbar.",
      getWhatToSay() {
        return "Okej, då gör jag page size till state och återställer sidan när användaren byter storlek.";
      },
    },
    {
      id: "filter",
      label: "Sök/filter",
      colorClass: "feature-stock",
      interviewer: "Lägg till ett sökfält som filtrerar listan innan paginering.",
      goal: "Filtrera items och paginera resultatet.",
      getWhatToSay() {
        return "Okej, jag filtrerar först och paginerar den filtrerade listan efteråt.";
      },
    },
    {
      id: "pageNumbers",
      label: "Sidnummer",
      colorClass: "feature-price",
      interviewer: "Visa sidnummer så användaren kan hoppa direkt till en sida.",
      goal: "Kunna välja sida direkt.",
      getWhatToSay() {
        return "Okej, jag skapar en knapp per sida från totalPages och sätter page när användaren klickar.";
      },
    },
    {
      id: "resultCount",
      label: "Antal",
      colorClass: "feature-count",
      interviewer: "Visa hur många resultat som finns totalt.",
      goal: "Visa antal matchande items.",
      getWhatToSay() {
        return "Okej, jag visar längden på listan som faktiskt pagineras.";
      },
    },
    {
      id: "firstLast",
      label: "First/last",
      colorClass: "feature-reset",
      interviewer: "Lägg till knappar för första och sista sidan.",
      goal: "Snabbnavigera till kanterna.",
      getWhatToSay() {
        return "Okej, första sidan är 1 och sista sidan är totalPages.";
      },
    },
  ],
  getCodeSections(selected) {
    const hasPaginate = selected.includes("paginate");
    const hasControls = selected.includes("controls");
    const hasDisabled = selected.includes("disabled");
    const hasPageSize = selected.includes("pageSize");
    const hasFilter = selected.includes("filter");
    const hasPageNumbers = selected.includes("pageNumbers");
    const hasResultCount = selected.includes("resultCount");
    const hasFirstLast = selected.includes("firstLast");
    const needsPagination =
      hasPaginate ||
      hasControls ||
      hasDisabled ||
      hasPageSize ||
      hasPageNumbers ||
      hasFirstLast;
    const needsState = needsPagination || hasFilter;
    const pageSizeValue = hasPageSize ? "pageSize" : "5";
    const sourceList = hasFilter ? "filteredItems" : "items";
    const listName = needsPagination ? "visibleItems" : sourceList;

    return [
      ...(needsState
        ? [
            {
              id: "import",
              feature: "feature-shared",
              code: `// Här behöver jag useState för det användaren kan styra.
import { useState } from "react";

`,
            },
          ]
        : []),
      {
        id: "data",
        code: `// Jag börjar med en enkel lista så komponenten har något att visa.
const items = [
  "HTML", "CSS", "JavaScript", "React", "Vite",
  "State", "Props", "Events", "Forms", "Effects",
  "Fetch", "Routing",
];

// Här bygger jag komponenten som visar listan.
export default function Pagination() {
`,
      },
      ...(needsPagination
        ? [
            {
              id: "page-state",
              feature: "feature-search",
              code: `  // Här sparar jag vilken sida användaren är på.
  const [page, setPage] = useState(1);
`,
            },
          ]
        : []),
      ...(hasPageSize
        ? [
            {
              id: "size-state",
              feature: "feature-empty",
              code: `  // Här sparar jag hur många items som ska visas per sida.
  const [pageSize, setPageSize] = useState(5);
`,
            },
          ]
        : []),
      ...(hasFilter
        ? [
            {
              id: "filter-state",
              feature: "feature-stock",
              code: `  // Sökningen påverkar vilken lista som sedan pagineras.
  const [search, setSearch] = useState("");

  // Här tar jag fram de items som matchar sökningen.
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );
`,
            },
          ]
        : []),
      ...(needsPagination
        ? [
            {
              id: "page-logic",
              feature: "feature-search",
              code: `
  // Här räknar jag ut vilken del av listan som hör till aktuell sida.
  const totalPages = Math.max(1, Math.ceil(${sourceList}.length / ${pageSizeValue}));
  const startIndex = (page - 1) * ${pageSizeValue};
  const visibleItems = ${sourceList}.slice(startIndex, startIndex + ${pageSizeValue});
`,
            },
          ]
        : []),
      ...(hasDisabled || hasFirstLast
        ? [
            {
              id: "disabled",
              feature: hasFirstLast ? "feature-reset" : "feature-sort",
              code: `
  // De här värdena gör knapparna säkra vid kanterna.
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;
`,
            },
          ]
        : []),
      {
        id: "return-start",
        code: `
  // Här returnerar jag rubriken och listan.
  return (
    <div>
      <h1>Topics</h1>

`,
      },
      ...(hasFilter
        ? [
            {
              id: "filter-ui",
              feature: "feature-stock",
              code: `      {/* Här kopplar jag sökfältet till search-state. */}
      <input
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
${needsPagination ? "          setPage(1);\n" : ""}
        }}
        placeholder="Search topics"
      />

`,
            },
          ]
        : []),
      ...(hasPageSize
        ? [
            {
              id: "page-size-ui",
              feature: "feature-empty",
              code: `      {/* När storleken ändras börjar jag om på första sidan. */}
      <select
        value={pageSize}
        onChange={(event) => {
          setPageSize(Number(event.target.value));
          setPage(1);
        }}
      >
        <option value={5}>5 per page</option>
        <option value={10}>10 per page</option>
      </select>

`,
            },
          ]
        : []),
      ...(hasResultCount
        ? [
            {
              id: "count-ui",
              feature: "feature-count",
              code: `      {/* Här visar jag hur många resultat som finns efter filtrering. */}
      <p>{${sourceList}.length} results</p>

`,
            },
          ]
        : []),
      {
        id: "list",
        code: `      {/* Här renderar jag varje item som ska synas just nu. */}
      {${listName}.map((item) => (
        <p key={item}>
          {/* Key hjälper React att känna igen varje rad när listan ändras. */}
          {item}
        </p>
      ))}

`,
      },
      ...(hasControls || hasFirstLast
        ? [
            {
              id: "controls",
              feature: hasFirstLast ? "feature-reset" : "feature-category",
              code: `${hasFirstLast ? `      {/* Här låter jag användaren hoppa till första sidan. */}
      <button onClick={() => setPage(1)}${hasDisabled ? " disabled={isFirstPage}" : ""}>
        First
      </button>
` : ""}${hasControls ? `      {/* Här går användaren en sida bakåt. */}
      <button
        onClick={() => setPage(page - 1)}
${hasDisabled ? "        disabled={isFirstPage}\n" : ""}      >
        Previous
      </button>
` : ""}      {/* Här visar jag aktuell sida så användaren vet var den är. */}
      <span>Page {page} of {totalPages}</span>
${hasControls ? `      {/* Här går användaren en sida framåt. */}
      <button
        onClick={() => setPage(page + 1)}
${hasDisabled ? "        disabled={isLastPage}\n" : ""}      >
        Next
      </button>
` : ""}${hasFirstLast ? `      {/* Här låter jag användaren hoppa till sista sidan. */}
      <button onClick={() => setPage(totalPages)}${hasDisabled ? " disabled={isLastPage}" : ""}>
        Last
      </button>
` : ""}`,
            },
          ]
        : []),
      ...(hasPageNumbers
        ? [
            {
              id: "page-numbers",
              feature: "feature-price",
              code: `      {/* Här skapar jag en knapp för varje sida. */}
      {Array.from({ length: totalPages }, (_, index) => {
        const pageNumber = index + 1;

        return (
          <button key={pageNumber} onClick={() => setPage(pageNumber)}>
            {/* Key hjälper React att känna igen varje sidknapp. */}
            {pageNumber}
          </button>
        );
      })}
`,
            },
          ]
        : []),
      {
        id: "return-end",
        code: `    </div>
  );
}`,
      },
    ];
  },
};
