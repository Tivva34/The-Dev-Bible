import { createSnippetChallenge } from "../helpers/snippetChallengeBuilder.js";



export const fetchApiListChallenge = createSnippetChallenge({
  id: "fetch-api-list",
  title: "Fetch API list",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg en komponent som hämtar och visar users från ett API.",
  currentGoal: "Hämta data och visa en lista.",
  baseWhatToSay:
    "Okej, jag använder useEffect för att hämta data när komponenten laddas och sparar resultatet i state.",
  baseCode: `import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <section>
      <h1>Users</h1>
      {users.map((user) => (
        <article key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </article>
      ))}
    </section>
  );
}

`,
  features: [
    {
      id: "loading",
      label: "Loading",
      colorClass: "feature-search",
      interviewer: "Visa loading medan datan hämtas.",
      goal: "Hantera vänteläge.",
      getWhatToSay() {
        return "Okej, då sparar jag ett loading-state och stänger av det när hämtningen är klar.";
      },
      code: `const [isLoading, setIsLoading] = useState(true);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => setUsers(data))
  .finally(() => setIsLoading(false));

if (isLoading) return <p>Loading users...</p>;

`,
    },
    {
      id: "error",
      label: "Error",
      colorClass: "feature-category",
      interviewer: "Visa ett felmeddelande om API-anropet misslyckas.",
      goal: "Hantera fel från fetch.",
      getWhatToSay() {
        return "Okej, då fångar jag felet i catch och visar ett enkelt meddelande i UI:t.";
      },
      code: `const [error, setError] = useState("");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) throw new Error("Could not fetch users");
    return response.json();
  })
  .then((data) => setUsers(data))
  .catch((error) => setError(error.message));

if (error) return <p>{error}</p>;

`,
    },
    {
      id: "search",
      label: "Sök",
      colorClass: "feature-sort",
      interviewer: "Lägg till sök på användarnamn.",
      goal: "Filtrera API-datan lokalt.",
      getWhatToSay() {
        return "Okej, jag låter API-datan ligga kvar och skapar en filtrerad lista baserat på söktexten.";
      },
      code: `const [search, setSearch] = useState("");

const visibleUsers = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase()),
);

// I JSX lägger jag ett inputfält och mappar över visibleUsers.

`,
    },
    {
      id: "retry",
      label: "Retry",
      colorClass: "feature-reset",
      interviewer: "Lägg till en retry-knapp om hämtningen misslyckas.",
      goal: "Kunna försöka hämta data igen.",
      getWhatToSay() {
        return "Okej, jag flyttar fetch-logiken till en funktion så samma kod kan köras både vid start och när användaren klickar retry.";
      },
      code: `const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState("");

function loadUsers() {
  setError("");
  setIsLoading(true);

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      if (!response.ok) throw new Error("Could not fetch users");
      return response.json();
    })
    .then((data) => setUsers(data))
    .catch((error) => setError(error.message))
    .finally(() => setIsLoading(false));
}

// I JSX vid error:
// <button onClick={loadUsers}>Try again</button>

`,
    },
  ],
});

fetchApiListChallenge.getCodeSections = function getFetchApiListSections(
  selected,
) {
  const hasLoading = selected.includes("loading");
  const hasError = selected.includes("error") || selected.includes("retry");
  const hasSearch = selected.includes("search");
  const hasRetry = selected.includes("retry");

  return [
    {
      id: "imports",
      code: `// Här behöver jag useEffect för API-anropet och useState för datan.
import { useEffect, useState } from "react";

`,
    },
    {
      id: "state",
      code: `// Här bygger jag komponenten som visar users från API:t.
export default function UserList() {
// Här sparar jag användarna som kommer från API:t.
  const [users, setUsers] = useState([]);
${hasLoading || hasRetry ? `// Loading: Här sparar jag om hämtningen pågår.
  const [isLoading, setIsLoading] = useState(${hasRetry ? "false" : "true"});
` : ""}${hasError ? `// Error: Här sparar jag felmeddelandet om API:t misslyckas.
  const [error, setError] = useState("");
` : ""}${hasSearch ? `// Sök: Här behöver jag komma ihåg vad användaren söker på.
  const [search, setSearch] = useState("");
` : ""}
`,
    },
    {
      id: "load-users",
      feature: hasLoading || hasError || hasRetry ? "feature-search" : null,
      code: `// Här samlar jag API-anropet i en funktion.
  function loadUsers() {
${hasError ? `    setError("");
` : ""}${hasLoading || hasRetry ? `    setIsLoading(true);
` : ""}
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
${hasError ? `        if (!response.ok) {
          throw new Error("Could not fetch users");
        }

` : ""}        return response.json();
      })
      .then((data) => setUsers(data))
${hasError ? `      .catch((error) => setError(error.message))
` : ""}${hasLoading || hasRetry ? `      .finally(() => setIsLoading(false))
` : ""};
  }

`,
    },
    {
      id: "effect",
      code: `// Här hämtar jag datan när komponenten laddas.
  useEffect(() => {
    loadUsers();
  }, []);

`,
    },
    ...(hasSearch
      ? [
          {
            id: "search-derived",
            feature: "feature-sort",
            code: `// Sök: Här skapar jag listan som matchar söktexten.
  const visibleUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

`,
          },
        ]
      : []),
    {
      id: "jsx",
      code: `// Här returnerar jag sökfält, status och listan.
  return (
    <section>
      <h1>Users</h1>
${hasSearch ? `
{/* Sök: Här kopplar jag inputfältet till search-state. */}
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search users"
      />
` : ""}${hasLoading || hasRetry ? `
      {isLoading && <p>Loading users...</p>}
` : ""}${hasError ? `
      {error && (
        <div>
          <p>{error}</p>
${hasRetry ? `          <button onClick={loadUsers}>Try again</button>
` : ""}        </div>
      )}
` : ""}
{/* Här renderar jag varje user från listan. */}
      {${hasSearch ? "visibleUsers" : "users"}.map((user) => (
        <article key={user.id}>
{/* Key hjälper React att känna igen varje user när listan ändras. */}
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </article>
      ))}
    </section>
  );
}

`,
    },
  ];
};

fetchApiListChallenge.getCodeSections = function getFetchApiListColoredSections(
  selected,
) {
  const hasLoading = selected.includes("loading");
  const hasError = selected.includes("error") || selected.includes("retry");
  const hasSearch = selected.includes("search");
  const hasRetry = selected.includes("retry");

  return [
    {
      id: "imports",
      code: `// Här behöver jag useEffect för API-anropet och useState för datan.
import { useEffect, useState } from "react";

`,
    },
    {
      id: "component-start",
      code: `// Här bygger jag komponenten som visar users från API:t.
export default function UserList() {
// Här sparar jag användarna som kommer från API:t.
  const [users, setUsers] = useState([]);

`,
    },
    ...(hasLoading || hasRetry
      ? [
          {
            id: "loading-state",
            feature: "feature-search",
            code: `// Loading: Här sparar jag om hämtningen pågår.
  const [isLoading, setIsLoading] = useState(${hasRetry ? "false" : "true"});

`,
          },
        ]
      : []),
    ...(hasError
      ? [
          {
            id: "error-state",
            feature: "feature-category",
            code: `// Error: Här sparar jag felmeddelandet om API:t misslyckas.
  const [error, setError] = useState("");

`,
          },
        ]
      : []),
    ...(hasSearch
      ? [
          {
            id: "search-state",
            feature: "feature-sort",
            code: `// Sök: Här behöver jag komma ihåg vad användaren söker på.
  const [search, setSearch] = useState("");

`,
          },
        ]
      : []),
    {
      id: "load-users",
      feature:
        hasRetry ? "feature-reset" : hasError ? "feature-category" : hasLoading ? "feature-search" : null,
      code: `// Här samlar jag API-anropet i en funktion.
  function loadUsers() {
${hasError ? `// Error: Här nollställer jag gamla fel innan ett nytt försök.
    setError("");
` : ""}${hasLoading || hasRetry ? `// Loading: Här visar jag att hämtningen har startat.
    setIsLoading(true);
` : ""}
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
${hasError ? `// Error: Här fångar jag dåliga svar innan json läses.
        if (!response.ok) {
          throw new Error("Could not fetch users");
        }

` : ""}        return response.json();
      })
      .then((data) => setUsers(data))
${hasError ? `      .catch((error) => setError(error.message))
` : ""}${hasLoading || hasRetry ? `      .finally(() => setIsLoading(false))
` : ""};
  }

`,
    },
    {
      id: "effect",
      code: `// Här hämtar jag datan när komponenten laddas.
  useEffect(() => {
    loadUsers();
  }, []);

`,
    },
    ...(hasSearch
      ? [
          {
            id: "search-derived",
            feature: "feature-sort",
            code: `// Sök: Här skapar jag listan som matchar söktexten.
  const visibleUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

`,
          },
        ]
      : []),
    {
      id: "jsx-start",
      code: `// Här returnerar jag sökfält, status och listan.
  return (
    <section>
      <h1>Users</h1>

`,
    },
    ...(hasSearch
      ? [
          {
            id: "search-input",
            feature: "feature-sort",
            code: `{/* Sök: Här kopplar jag inputfältet till search-state. */}
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search users"
      />

`,
          },
        ]
      : []),
    ...(hasLoading || hasRetry
      ? [
          {
            id: "loading-jsx",
            feature: "feature-search",
            code: `{/* Loading: Här visar jag vänteläget nära listan. */}
      {isLoading && <p>Loading users...</p>}

`,
          },
        ]
      : []),
    ...(hasError
      ? [
          {
            id: "error-jsx",
            feature: hasRetry ? "feature-reset" : "feature-category",
            code: `{/* Error: Här visar jag felmeddelandet från fetch. */}
      {error && (
        <div>
          <p>{error}</p>
${hasRetry ? `          <button type="button" onClick={loadUsers}>
            Try again
          </button>
` : ""}        </div>
      )}

`,
          },
        ]
      : []),
    {
      id: "jsx-list",
      code: `{/* Här renderar jag varje user från listan. */}
      {${hasSearch ? "visibleUsers" : "users"}.map((user) => (
        <article key={user.id}>
{/* Key hjälper React att känna igen varje user när listan ändras. */}
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </article>
      ))}
    </section>
  );
}

`,
    },
  ];
};

export const searchHighlightChallenge = createSnippetChallenge({
  id: "search-highlight",
  title: "Search + highlight",
  estimatedTime: "20 min",
  interviewPrompt:
    "Bygg en komponent som visar en lista och låter användaren söka i den.",
  currentGoal: "Visa listan och filtrera på söktext.",
  baseWhatToSay:
    "Okej, jag börjar med en lista och ett sökfält som filtrerar vad som visas.",
  baseCode: `import { useState } from "react";

const articles = [
  { id: 1, title: "React state" },
  { id: 2, title: "JavaScript arrays" },
  { id: 3, title: "CSS layout" },
];

export default function SearchList() {
  const [search, setSearch] = useState("");

  const visibleArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search articles"
      />

      {visibleArticles.map((article) => (
        <article key={article.id}>
          <h2>{article.title}</h2>
        </article>
      ))}
    </section>
  );
}

`,
  baseFollowUpQuestions: [
    {
      question: "Varför filtrerar du innan map?",
      answer:
        "Då behöver JSX bara rendera de rader som faktiskt matchar sökningen.",
    },
  ],
  followUpQuestions: [
    {
      featureIds: ["highlight"],
      question: "Hur undviker du farlig HTML när du highlightar?",
      answer:
        "Jag delar upp texten i delar och renderar JSX, istället för att använda dangerouslySetInnerHTML.",
    },
    {
      featureIds: ["empty"],
      question: "Varför behövs tomt resultat?",
      answer:
        "Användaren behöver förstå att sökningen fungerade men att inget matchade.",
    },
  ],
  features: [
    {
      id: "highlight",
      label: "Highlight",
      colorClass: "feature-search",
      interviewer: "Markera den del av texten som matchar sökningen.",
      goal: "Visa matchande text tydligare.",
      getWhatToSay() {
        return "Okej, jag delar upp titeln runt sökningen och renderar matchen i ett mark-element.";
      },
      code: `function HighlightText({ text, query }) {
  if (query.trim() === "") return text;

  const matchIndex = text.toLowerCase().indexOf(query.toLowerCase());
  if (matchIndex === -1) return text;

  const before = text.slice(0, matchIndex);
  const match = text.slice(matchIndex, matchIndex + query.length);
  const after = text.slice(matchIndex + query.length);

  return (
    <>
      {before}
      <mark>{match}</mark>
      {after}
    </>
  );
}

<h2>
  <HighlightText text={article.title} query={search} />
</h2>

`,
    },
    {
      id: "empty",
      label: "Tom lista",
      colorClass: "feature-empty",
      interviewer: "Visa ett meddelande när sökningen inte matchar något.",
      goal: "Hantera tomt resultat.",
      getWhatToSay() {
        return "Okej, jag kontrollerar längden på den filtrerade listan och visar ett tydligt meddelande.";
      },
      code: `{visibleArticles.length === 0 && <p>No articles found.</p>}

`,
    },
    {
      id: "clear",
      label: "Rensa",
      colorClass: "feature-reset",
      interviewer: "Lägg till en knapp som rensar sökningen.",
      goal: "Snabbt komma tillbaka till hela listan.",
      getWhatToSay() {
        return "Okej, eftersom sökningen ligger i state räcker det att sätta search till en tom sträng.";
      },
      code: `<button type="button" onClick={() => setSearch("")}>
  Clear
</button>

`,
    },
  ],
});

searchHighlightChallenge.getCodeSections = function getSearchHighlightSections(
  selected,
) {
  const hasHighlight = selected.includes("highlight");
  const hasEmpty = selected.includes("empty");
  const hasClear = selected.includes("clear");

  return [
    {
      id: "imports",
      code: `// Här behöver jag useState eftersom användaren skriver en sökning.
import { useState } from "react";

`,
    },
    {
      id: "data",
      code: `// Jag börjar med artiklarna som listan ska visa.
const articles = [
  { id: 1, title: "React state" },
  { id: 2, title: "JavaScript arrays" },
  { id: 3, title: "CSS layout" },
];

`,
    },
    ...(hasHighlight
      ? [
          {
            id: "highlight-component",
            feature: "feature-search",
            code: `// Highlight: Här delar jag upp texten utan att använda farlig HTML.
function HighlightText({ text, query }) {
  if (query.trim() === "") return text;

  const matchIndex = text.toLowerCase().indexOf(query.toLowerCase());
  if (matchIndex === -1) return text;

  const before = text.slice(0, matchIndex);
  const match = text.slice(matchIndex, matchIndex + query.length);
  const after = text.slice(matchIndex + query.length);

  return (
    <>
      {before}
      <mark>{match}</mark>
      {after}
    </>
  );
}

`,
          },
        ]
      : []),
    {
      id: "component",
      code: `// Här bygger jag söklistan.
export default function SearchList() {
// Här sparar jag texten som användaren söker på.
  const [search, setSearch] = useState("");

// Här filtrerar jag artiklarna innan de renderas.
  const visibleArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase()),
  );

// Här returnerar jag sökfältet och träffarna.
  return (
    <section>
{/* Här kopplar jag inputfältet till search-state. */}
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search articles"
      />
${hasClear ? `
{/* Rensa: Här tömmer jag sökningen med ett klick. */}
      <button type="button" onClick={() => setSearch("")}>
        Clear
      </button>
` : ""}${hasEmpty ? `
{/* Tom lista: Här visar jag när sökningen saknar träffar. */}
      {visibleArticles.length === 0 && <p>No articles found.</p>}
` : ""}
{/* Här renderar jag varje artikel som matchar sökningen. */}
      {visibleArticles.map((article) => (
        <article key={article.id}>
          <h2>
${hasHighlight ? `            <HighlightText text={article.title} query={search} />
` : `            {article.title}
`}          </h2>
        </article>
      ))}
    </section>
  );
}

`,
    },
  ];
};

export const reusableTableChallenge = createSnippetChallenge({
  id: "reusable-table",
  title: "Reusable table",
  estimatedTime: "30 min",
  interviewPrompt:
    "Bygg en tabell som visar användare med namn, roll och status.",
  currentGoal: "Rendera data i en tabell.",
  baseWhatToSay:
    "Okej, jag börjar med en enkel tabell där varje rad kommer från data-arrayen.",
  baseCode: `import { useState } from "react";

const users = [
  { id: 1, name: "Alice", role: "Frontend", active: true },
  { id: 2, name: "Sara", role: "Backend", active: false },
  { id: 3, name: "Alex", role: "Fullstack", active: true },
];

export default function UserTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.role}</td>
            <td>{user.active ? "Active" : "Inactive"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

`,
  baseFollowUpQuestions: [
    {
      question: "Varför passar table här?",
      answer:
        "Datan är rad- och kolumnbaserad, så en riktig tabell ger tydligare struktur och bättre semantik.",
    },
  ],
  followUpQuestions: [
    {
      featureIds: ["columns"],
      question: "Varför bryter du ut columns?",
      answer:
        "Då kan tabellens struktur styras av data istället för att hårdkodas på flera ställen.",
    },
    {
      featureIds: ["sort"],
      question: "Varför kopierar du listan innan sort?",
      answer:
        "Sort muterar arrayen, så jag kopierar först för att inte ändra originaldatan.",
    },
  ],
  features: [
    {
      id: "columns",
      label: "Columns-data",
      colorClass: "feature-search",
      interviewer: "Gör kolumnerna data-drivna.",
      goal: "Rendera headers och cells från en columns-array.",
      getWhatToSay() {
        return "Okej, jag flyttar kolumninformationen till data så tabellen blir lättare att återanvända.";
      },
      code: `const columns = [
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  {
    key: "active",
    label: "Status",
    render: (user) => (user.active ? "Active" : "Inactive"),
  },
];

{columns.map((column) => (
  <th key={column.key}>{column.label}</th>
))}

{columns.map((column) => (
  <td key={column.key}>
    {column.render ? column.render(user) : user[column.key]}
  </td>
))}

`,
    },
    {
      id: "sort",
      label: "Sortering",
      colorClass: "feature-sort",
      interviewer: "Låt användaren sortera på namn.",
      goal: "Sortera raderna.",
      getWhatToSay() {
        return "Okej, jag sparar sortOrder i state och sorterar en kopia av listan innan render.";
      },
      code: `const [sortOrder, setSortOrder] = useState("asc");

const visibleUsers = [...users].sort((a, b) => {
  return sortOrder === "asc"
    ? a.name.localeCompare(b.name)
    : b.name.localeCompare(a.name);
});

<button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
  Sort name
</button>

`,
    },
    {
      id: "active",
      label: "Aktiva",
      colorClass: "feature-category",
      interviewer: "Lägg till filter för att bara visa aktiva användare.",
      goal: "Filtrera tabellen.",
      getWhatToSay() {
        return "Okej, jag sparar en boolean och använder den när jag tar fram listan som ska visas.";
      },
      code: `const [onlyActive, setOnlyActive] = useState(false);

const filteredUsers = visibleUsers.filter((user) => {
  return !onlyActive || user.active;
});

<label>
  <input
    type="checkbox"
    checked={onlyActive}
    onChange={(event) => setOnlyActive(event.target.checked)}
  />
  Only active
</label>

`,
    },
    {
      id: "empty",
      label: "Tom tabell",
      colorClass: "feature-empty",
      interviewer: "Visa ett meddelande om inga rader matchar filtret.",
      goal: "Hantera tom tabell.",
      getWhatToSay() {
        return "Okej, jag kontrollerar listans längd innan jag renderar tabellrader.";
      },
      code: `{filteredUsers.length === 0 && (
  <tr>
    <td colSpan={columns.length}>No users found.</td>
  </tr>
)}

`,
    },
  ],
});

reusableTableChallenge.getCodeSections = function getReusableTableSections(
  selected,
) {
  const hasColumns = selected.includes("columns");
  const hasSort = selected.includes("sort");
  const hasFilter = selected.includes("active") || selected.includes("empty");
  const hasEmpty = selected.includes("empty");
  const listName = hasFilter ? "filteredUsers" : hasSort ? "visibleUsers" : "users";

  return [
    {
      id: "imports",
      code: `${hasSort || hasFilter ? `// Här behöver jag useState eftersom användaren kan ändra tabellens vy.
import { useState } from "react";

` : ""}`,
    },
    {
      id: "data",
      code: `// Jag börjar med användardata som tabellen kan rendera.
const users = [
  { id: 1, name: "Alice", role: "Frontend", active: true },
  { id: 2, name: "Sara", role: "Backend", active: false },
  { id: 3, name: "Alex", role: "Fullstack", active: true },
];
${hasColumns ? `// Columns-data: Här beskriver jag tabellens kolumner på ett ställe.
const columns = [
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  {
    key: "active",
    label: "Status",
    render: (user) => (user.active ? "Active" : "Inactive"),
  },
];
` : ""}
`,
    },
    {
      id: "component",
      code: `// Här bygger jag tabellen som visar användarna.
export default function UserTable() {
${hasSort ? `// Sortering: Här sparar jag om namnen sorteras stigande eller fallande.
  const [sortOrder, setSortOrder] = useState("asc");
` : ""}${hasFilter ? `// Aktiva: Här sparar jag om bara aktiva användare ska visas.
  const [onlyActive, setOnlyActive] = useState(false);
` : ""}${hasSort ? `
// Sortering: Här sorterar jag en kopia så originaldatan inte ändras.
  const visibleUsers = [...users].sort((a, b) =>
    sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name),
  );
` : ""}${hasFilter ? `
// Aktiva: Här filtrerar jag listan innan tabellen renderas.
  const filteredUsers = ${hasSort ? "visibleUsers" : "users"}.filter((user) => {
    return !onlyActive || user.active;
  });
` : ""}
// Här returnerar jag kontrollerna och tabellen.
  return (
    <section>
${hasSort ? `      <button
        type="button"
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
      >
        Sort name
      </button>
` : ""}${hasFilter ? `      <label>
        <input
          type="checkbox"
          checked={onlyActive}
          onChange={(event) => setOnlyActive(event.target.checked)}
        />
        Only active
      </label>
` : ""}      <table>
        <thead>
          <tr>
${hasColumns ? `            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
` : `            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
`}          </tr>
        </thead>
        <tbody>
${hasEmpty ? `          {${listName}.length === 0 && (
            <tr>
              <td colSpan={${hasColumns ? "columns.length" : "3"}}>
                No users found.
              </td>
            </tr>
          )}
` : ""}          {${listName}.map((user) => (
            <tr key={user.id}>
${hasColumns ? `              {columns.map((column) => (
                <td key={column.key}>
                  {column.render ? column.render(user) : user[column.key]}
                </td>
              ))}
` : `              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.active ? "Active" : "Inactive"}</td>
`}            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

`,
    },
  ].filter((section) => section.code.trim() !== "");
};

reusableTableChallenge.getCodeSections = function getReusableTableSplitSections(
  selected,
) {
  const hasColumns = selected.includes("columns");
  const hasSort = selected.includes("sort");
  const hasFilter = selected.includes("active");
  const hasEmpty = selected.includes("empty");
  const listName = hasFilter ? "filteredUsers" : hasSort ? "visibleUsers" : "users";

  return [
    ...(hasSort || hasFilter
      ? [
          {
            id: "imports",
            feature: "feature-shared",
            code: `// Här behöver jag useState eftersom användaren kan ändra tabellens vy.
import { useState } from "react";

`,
          },
        ]
      : []),
    {
      id: "data",
      code: `// Jag börjar med användardata som tabellen kan rendera.
const users = [
  { id: 1, name: "Alice", role: "Frontend", active: true },
  { id: 2, name: "Sara", role: "Backend", active: false },
  { id: 3, name: "Alex", role: "Fullstack", active: true },
];

`,
    },
    ...(hasColumns
      ? [
          {
            id: "columns-data",
            feature: "feature-search",
            code: `// Columns-data: Här beskriver jag tabellens kolumner på ett ställe.
const columns = [
  { key: "name", label: "Name" },
  { key: "role", label: "Role" },
  {
    key: "active",
    label: "Status",
    render: (user) => (user.active ? "Active" : "Inactive"),
  },
];

`,
          },
        ]
      : []),
    {
      id: "component-start",
      code: `// Här bygger jag tabellen som visar användarna.
export default function UserTable() {

`,
    },
    ...(hasSort
      ? [
          {
            id: "sort-state",
            feature: "feature-sort",
            code: `// Sortering: Här sparar jag om namnen sorteras stigande eller fallande.
  const [sortOrder, setSortOrder] = useState("asc");

`,
          },
          {
            id: "sort-logic",
            feature: "feature-sort",
            code: `// Sortering: Här sorterar jag en kopia så originaldatan inte ändras.
  const visibleUsers = [...users].sort((a, b) =>
    sortOrder === "asc"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name),
  );

`,
          },
        ]
      : []),
    ...(hasFilter
      ? [
          {
            id: "active-state",
            feature: "feature-category",
            code: `// Aktiva: Här sparar jag om bara aktiva användare ska visas.
  const [onlyActive, setOnlyActive] = useState(false);

`,
          },
          {
            id: "active-logic",
            feature: "feature-category",
            code: `// Aktiva: Här filtrerar jag listan innan tabellen renderas.
  const filteredUsers = ${hasSort ? "visibleUsers" : "users"}.filter((user) => {
    return !onlyActive || user.active;
  });

`,
          },
        ]
      : []),
    {
      id: "return-start",
      code: `// Här returnerar jag kontrollerna och tabellen.
  return (
    <section>
`,
    },
    ...(hasSort
      ? [
          {
            id: "sort-button",
            feature: "feature-sort",
            code: `      {/* Sortering: Här låter jag användaren vända sorteringsordningen. */}
      <button
        type="button"
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
      >
        Sort name
      </button>
`,
          },
        ]
      : []),
    ...(hasFilter
      ? [
          {
            id: "active-control",
            feature: "feature-category",
            code: `      {/* Aktiva: Här kopplar jag checkboxen till filter-state. */}
      <label>
        <input
          type="checkbox"
          checked={onlyActive}
          onChange={(event) => setOnlyActive(event.target.checked)}
        />
        Only active
      </label>
`,
          },
        ]
      : []),
    {
      id: "table-start",
      code: `      <table>
        <thead>
          <tr>
`,
    },
    ...(hasColumns
      ? [
          {
            id: "columns-header",
            feature: "feature-search",
            code: `            {/* Columns-data: Här renderar jag varje rubrik från columns-arrayen. */}
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
`,
          },
        ]
      : [
          {
            id: "static-header",
            code: `            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
`,
          },
        ]),
    {
      id: "body-start",
      code: `          </tr>
        </thead>
        <tbody>
`,
    },
    ...(hasEmpty
      ? [
          {
            id: "empty-row",
            feature: "feature-empty",
            code: `          {/* Tom tabell: Här visar jag en rad om listan saknar träffar. */}
          {${listName}.length === 0 && (
            <tr>
              <td colSpan={${hasColumns ? "columns.length" : "3"}}>
                No users found.
              </td>
            </tr>
          )}
`,
          },
        ]
      : []),
    {
      id: "row-start",
      code: `          {/* Här renderar jag varje användare som en tabellrad. */}
          {${listName}.map((user) => (
            <tr key={user.id}>
`,
    },
    ...(hasColumns
      ? [
          {
            id: "columns-cells",
            feature: "feature-search",
            code: `              {/* Columns-data: Här renderar jag cellerna med samma column-definition. */}
              {columns.map((column) => (
                <td key={column.key}>
                  {column.render ? column.render(user) : user[column.key]}
                </td>
              ))}
`,
          },
        ]
      : [
          {
            id: "static-cells",
            code: `              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.active ? "Active" : "Inactive"}</td>
`,
          },
        ]),
    {
      id: "table-end",
      code: `            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

`,
    },
  ].filter((section) => section.code.trim() !== "");
};

export const infiniteScrollChallenge = createSnippetChallenge({
  id: "infinite-scroll",
  title: "Infinite scroll",
  estimatedTime: "30 min",
  interviewPrompt:
    "Bygg en lista som hämtar fler produkter när användaren scrollar ner.",
  currentGoal: "Hämta första sidan data och visa listan.",
  baseWhatToSay:
    "Okej, jag börjar med första sidans data, loading och error så API-flödet är tydligt.",
  baseCode: `import { useEffect, useState } from "react";

export default function InfiniteProducts() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch(\`/api/products?page=\${page}\`);
        const data = await response.json();
        setProducts(data);
      } catch {
        setError("Could not load products");
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, [page]);

  return (
    <section>
      {products.map((product) => (
        <article key={product.id}>{product.name}</article>
      ))}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </section>
  );
}

`,
  baseFollowUpQuestions: [
    {
      question: "Varför separerar du loading, error och data?",
      answer:
        "Då kan UI:t visa rätt läge för användaren istället för att listan bara blir tom.",
    },
  ],
  features: [
    {
      id: "append",
      label: "Append data",
      colorClass: "feature-search",
      interviewer: "När ny data hämtas ska den läggas till i listan.",
      goal: "Behåll tidigare produkter.",
      getWhatToSay() {
        return "Okej, jag append:ar nästa sida istället för att ersätta listan.";
      },
      code: `setProducts((currentProducts) => [
  ...currentProducts,
  ...data,
]);

`,
    },
    {
      id: "load-more",
      label: "Load more",
      colorClass: "feature-category",
      interviewer: "Lägg till en knapp som hämtar nästa sida.",
      goal: "Öka page när användaren vill se mer.",
      getWhatToSay() {
        return "Okej, page styr API-anropet, så knappen behöver bara öka page.";
      },
      code: `<button onClick={() => setPage(page + 1)} disabled={isLoading}>
  Load more
</button>

`,
    },
    {
      id: "observer",
      label: "Observer",
      colorClass: "feature-sort",
      interviewer: "Byt Load more-knappen mot automatisk infinite scroll.",
      goal: "Hämta mer när sista elementet syns.",
      getWhatToSay() {
        return "Okej, jag använder IntersectionObserver för att se när slutet av listan kommer in i viewport.";
      },
      code: `const [sentinel, setSentinel] = useState(null);

useEffect(() => {
  if (!sentinel || isLoading) return;

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      setPage((currentPage) => currentPage + 1);
    }
  });

  observer.observe(sentinel);
  return () => observer.disconnect();
}, [sentinel, isLoading]);

<div ref={setSentinel} />

`,
    },
    {
      id: "has-more",
      label: "Has more",
      colorClass: "feature-empty",
      interviewer: "Sluta hämta när API:t säger att det inte finns mer data.",
      goal: "Undvika onödiga requests.",
      getWhatToSay() {
        return "Okej, jag sparar hasMore från API:t och stoppar nästa hämtning när den är false.";
      },
      code: `const [hasMore, setHasMore] = useState(true);

setHasMore(data.hasMore);

if (!hasMore) {
  return <p>No more products.</p>;
}

`,
    },
  ],
});

infiniteScrollChallenge.getCodeSections = function getInfiniteScrollSections(
  selected,
) {
  const hasAppend = selected.includes("append");
  const hasLoadMore = selected.includes("load-more");
  const hasObserver = selected.includes("observer");
  const hasMoreState = selected.includes("has-more");
  const usesManualButton = hasLoadMore && !hasObserver;

  return [
    {
      id: "imports",
      code: `// Här behöver jag useEffect för API-anropet och useState för listans lägen.
import { useEffect, useState } from "react";

`,
    },
    {
      id: "state",
      code: `// Här bygger jag komponenten som hämtar produkter sida för sida.
export default function InfiniteProducts() {
// Här sparar jag produkterna som ska visas.
  const [products, setProducts] = useState([]);
// Här sparar jag vilken sida API:t ska hämta.
  const [page, setPage] = useState(1);
// Här sparar jag om ett request pågår.
  const [isLoading, setIsLoading] = useState(false);
// Här sparar jag felmeddelandet om API:t misslyckas.
  const [error, setError] = useState("");
${hasMoreState ? `// Has more: Här sparar jag om API:t har fler sidor att hämta.
  const [hasMore, setHasMore] = useState(true);
` : ""}${hasObserver ? `// Observer: Här sparar jag elementet längst ner i listan.
  const [sentinel, setSentinel] = useState(null);
` : ""}
`,
    },
    {
      id: "fetch",
      feature: hasAppend || hasMoreState ? "feature-search" : null,
      code: `// Här hämtar jag aktuell sida när page ändras.
  useEffect(() => {
    async function loadProducts() {
${hasMoreState ? `      if (!hasMore) return;

` : ""}      setIsLoading(true);
      setError("");

      try {
        const response = await fetch(\`/api/products?page=\${page}\`);
        const data = await response.json();
${hasAppend ? `
// Append data: Här lägger jag till nästa sida utan att tappa tidigare produkter.
        setProducts((currentProducts) => [
          ...currentProducts,
          ...${hasMoreState ? "data.items" : "data"},
        ]);
` : `
// Här ersätter jag listan med datan från aktuell sida.
        setProducts(${hasMoreState ? "data.items" : "data"});
`}${hasMoreState ? `
// Has more: Här sparar jag API:ts besked om fler sidor finns.
        setHasMore(data.hasMore);
` : ""}      } catch {
        setError("Could not load products");
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, [page${hasMoreState ? ", hasMore" : ""}]);

`,
    },
    ...(hasObserver
      ? [
          {
            id: "observer",
            feature: "feature-sort",
            code: `// Observer: Här hämtar jag nästa sida när slutet av listan syns.
  useEffect(() => {
    if (!sentinel || isLoading${hasMoreState ? " || !hasMore" : ""}) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setPage((currentPage) => currentPage + 1);
      }
    });

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [sentinel, isLoading${hasMoreState ? ", hasMore" : ""}]);

`,
          },
        ]
      : []),
    {
      id: "jsx",
      feature: usesManualButton || hasObserver || hasMoreState ? "feature-category" : null,
      code: `// Här renderar jag listan och statuslägena.
  return (
    <section>
{/* Här renderar jag varje produkt från products-state. */}
      {products.map((product) => (
        <article key={product.id}>{product.name}</article>
      ))}

      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
${usesManualButton ? `
{/* Load more: Här ökar jag page så useEffect hämtar nästa sida. */}
      <button
        onClick={() => setPage((currentPage) => currentPage + 1)}
        disabled={isLoading${hasMoreState ? " || !hasMore" : ""}}
      >
        Load more
      </button>
` : ""}${hasObserver ? `
{/* Observer: Här sitter elementet som IntersectionObserver bevakar. */}
      <div ref={setSentinel} />
` : ""}${hasMoreState ? `
      {!hasMore && <p>No more products.</p>}
` : ""}    </section>
  );
}

`,
    },
  ];
};

