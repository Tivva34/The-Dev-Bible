export const todoListChallenge = {
  id: "todo-list",
  title: "Todo list",
  difficulty: "Junior",
  estimatedTime: "25 min",

  interviewPrompt: "Bygg en komponent som visar en lista med todos.",
  currentGoal: "Visa alla todos på sidan.",

  baseWhatToSay:
    "Okej, jag börjar med en statisk lista och renderar varje todo med map.",

  baseFollowUpQuestions: [
    {
      question: "Varför börjar du med statisk data?",
      answer:
        "Statisk data gör det lätt att se strukturen först: en lista med objekt som renderas till JSX.",
    },
    {
      question: "Varför använder du key?",
      answer:
        "React behöver en stabil key för varje todo när listan renderas eller ändras.",
    },
  ],

  followUpQuestions: [
    {
      featureIds: ["add"],
      question: "Varför sparar du inputvärdet i state?",
      answer:
        "För att React behöver veta vad användaren skriver innan jag skapar en ny todo.",
    },
    {
      featureIds: ["toggle"],
      question: "Varför använder du map när du markerar en todo?",
      answer:
        "Jag vill skapa en ny array där bara rätt todo ändras, utan att mutera den gamla listan.",
    },
    {
      featureIds: ["filter"],
      question: "Varför filtrerar du innan map?",
      answer:
        "Då får JSX:en bara den lista som faktiskt ska visas.",
    },
    {
      featureIds: ["delete", "clearCompleted"],
      question: "Varför använder du filter när du tar bort?",
      answer:
        "Filter ger mig en ny array där de todos som inte ska vara kvar har plockats bort.",
    },
    {
      featureIds: ["count"],
      question: "Varför räknar du från listan?",
      answer:
        "Då baseras siffran på aktuell data och uppdateras automatiskt när todos ändras.",
    },
    {
      featureIds: ["persist"],
      question: "Varför sparar du i localStorage?",
      answer:
        "Då finns todos kvar efter refresh utan att jag behöver en backend i den här uppgiften.",
    },
  ],

  features: [
    {
      id: "add",
      label: "Lägg till",
      colorClass: "feature-search",
      interviewer: "Lägg till ett inputfält så användaren kan skapa nya todos.",
      goal: "Låt användaren lägga till en ny todo.",
      getWhatToSay(selectedBefore) {
        if (selectedBefore.includes("filter")) {
          return "Okej, då behöver den nya todon hamna i samma lista som filtret sedan jobbar med.";
        }

        return "Okej, då gör jag listan till state och sparar texten användaren skriver innan jag lägger till en ny todo.";
      },
    },
    {
      id: "toggle",
      label: "Markera färdig",
      colorClass: "feature-sort",
      interviewer: "Gör så att användaren kan markera en todo som klar.",
      goal: "Låt varje todo växla mellan klar och inte klar.",
      getWhatToSay(selectedBefore) {
        if (selectedBefore.includes("filter")) {
          return "Okej, då ändrar jag original-listan och låter filtret fortsätta bestämma vad som syns.";
        }

        return "Okej, då uppdaterar jag bara den todo som klickas och behåller resten av listan som den är.";
      },
    },
    {
      id: "filter",
      label: "Filtrering",
      colorClass: "feature-category",
      interviewer: "Lägg till ett filter för att visa alla, aktiva eller klara todos.",
      goal: "Låt användaren styra vilka todos som visas.",
      getWhatToSay(selectedBefore) {
        if (selectedBefore.includes("toggle")) {
          return "Okej, eftersom varje todo nu kan vara klar kan jag filtrera listan baserat på completed.";
        }

        return "Okej, då sparar jag valt filter och skapar en synlig lista innan renderingen.";
      },
    },
    {
      id: "delete",
      label: "Ta bort",
      colorClass: "feature-price",
      interviewer: "Lägg till en knapp som tar bort en todo.",
      goal: "Låt användaren radera en todo.",
      getWhatToSay() {
        return "Okej, då filtrerar jag bort den todo som användaren klickar på och behåller resten.";
      },
    },
    {
      id: "count",
      label: "Antal kvar",
      colorClass: "feature-count",
      interviewer: "Visa hur många aktiva todos som finns kvar.",
      goal: "Räkna todos som inte är klara.",
      getWhatToSay(selectedBefore) {
        if (selectedBefore.includes("toggle")) {
          return "Okej, eftersom todos kan markeras som klara räknar jag de som fortfarande har completed false.";
        }

        return "Okej, då räknar jag aktiva todos från listan och visar siffran ovanför todos.";
      },
    },
    {
      id: "clearCompleted",
      label: "Rensa färdiga",
      colorClass: "feature-reset",
      interviewer: "Lägg till en knapp som tar bort alla klara todos.",
      goal: "Rensa todos som är completed.",
      getWhatToSay() {
        return "Okej, då filtrerar jag listan och behåller bara todos som inte är klara.";
      },
    },
    {
      id: "empty",
      label: "Tom lista",
      colorClass: "feature-empty",
      interviewer: "Visa ett meddelande om filtret inte matchar några todos.",
      goal: "Visa ett tydligt tomt läge.",
      getWhatToSay(selectedBefore) {
        if (selectedBefore.includes("filter")) {
          return "Okej, när filtret gör listan tom visar jag ett meddelande istället för en tom yta.";
        }

        return "Okej, jag lägger in en enkel kontroll för om listan som ska visas är tom.";
      },
    },
    {
      id: "persist",
      label: "LocalStorage",
      colorClass: "feature-favorites",
      interviewer: "Spara todos i localStorage så de finns kvar efter refresh.",
      goal: "Persist todo-listan lokalt.",
      getWhatToSay() {
        return "Okej, jag använder localStorage som enkel lagring och synkar den när todos ändras.";
      },
    },
  ],

  getCodeSections(selected) {
    const hasAdd = selected.includes("add");
    const hasToggle = selected.includes("toggle");
    const hasFilter = selected.includes("filter");
    const hasDelete = selected.includes("delete");
    const hasCount = selected.includes("count");
    const hasClearCompleted = selected.includes("clearCompleted");
    const hasEmpty = selected.includes("empty");
    const hasPersist = selected.includes("persist");

    const needsTodoState =
      hasAdd || hasToggle || hasDelete || hasClearCompleted || hasPersist;
    const needsState = needsTodoState || hasFilter;
    const listSource = needsTodoState ? "todos" : "initialTodos";
    const visibleList = hasFilter ? "visibleTodos" : listSource;

    return [
      ...(needsState
        ? [
            {
              id: "import",
              feature: "feature-shared",
              code: `// Här behöver jag state${hasPersist ? " och effect" : ""} för todo-flödet.
import { ${hasPersist ? "useEffect, " : ""}useState } from "react";

`,
            },
          ]
        : []),
      {
        id: "data",
        code: `// Jag börjar med några todos så komponenten har något att rendera.
const initialTodos = [
  { id: 1, text: "Read requirements", completed: true },
  { id: 2, text: "Build component", completed: false },
  { id: 3, text: "Explain tradeoffs", completed: false },
];

// Här bygger jag själva todo-komponenten.
export default function TodoList() {
`,
      },
      ...(needsTodoState
        ? [
            {
              id: "todos-state",
              feature: hasAdd ? "feature-search" : "feature-sort",
              code: hasPersist
                ? `  // Här läser jag sparade todos om de finns.
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : initialTodos;
  });
`
                : `  // Nu behöver listan ligga i state eftersom användaren kan ändra den.
  const [todos, setTodos] = useState(initialTodos);
`,
            },
          ]
        : []),
      ...(hasAdd
        ? [
            {
              id: "text-state",
              feature: "feature-search",
              code: `  // Här håller jag koll på texten innan den blir en ny todo.
  const [text, setText] = useState("");
`,
            },
          ]
        : []),
      ...(hasFilter
        ? [
            {
              id: "filter-state",
              feature: "feature-category",
              code: `  // Här sparar jag vilket filter användaren har valt.
  const [filter, setFilter] = useState("all");
`,
            },
          ]
        : []),
      ...(needsState ? [{ id: "state-space", code: `\n` }] : []),
      ...(hasAdd
        ? [
            {
              id: "add-handler",
              feature: "feature-search",
              code: `  function addTodo() {
    // Om inputen är tom vill jag inte skapa en tom rad.
    if (text.trim() === "") return;

    const nextTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos([...todos, nextTodo]);
    setText("");
  }

`,
            },
          ]
        : []),
      ...(hasToggle
        ? [
            {
              id: "toggle-handler",
              feature: "feature-sort",
              code: `  function toggleTodo(todoId) {
    // Jag skapar en ny array där bara rätt todo ändras.
    setTodos(
      todos.map((todo) =>
        todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

`,
            },
          ]
        : []),
      ...(hasDelete
        ? [
            {
              id: "delete-handler",
              feature: "feature-price",
              code: `  function deleteTodo(todoId) {
    // Här behåller jag alla todos utom den som ska bort.
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

`,
            },
          ]
        : []),
      ...(hasClearCompleted
        ? [
            {
              id: "clear-completed-handler",
              feature: "feature-reset",
              code: `  function clearCompleted() {
    // Här tar jag bort alla todos som redan är klara.
    setTodos(todos.filter((todo) => !todo.completed));
  }

`,
            },
          ]
        : []),
      ...(hasPersist
        ? [
            {
              id: "persist-effect",
              feature: "feature-favorites",
              code: `  // Här sparar jag senaste todo-listan varje gång den ändras.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

`,
            },
          ]
        : []),
      ...(hasFilter
        ? [
            {
              id: "visible-todos",
              feature: "feature-category",
              code: `  // Här tar jag fram listan som faktiskt ska visas.
  const visibleTodos = ${listSource}.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

`,
            },
          ]
        : []),
      ...(hasCount
        ? [
            {
              id: "active-count",
              feature: "feature-count",
              code: `  // Här räknar jag hur många todos som fortfarande är aktiva.
  const activeCount = ${listSource}.filter((todo) => !todo.completed).length;

`,
            },
          ]
        : []),
      {
        id: "return-start",
        code: `  // Här returnerar jag formulär, filter och listan.
  return (
    <div>
      <h1>Todos</h1>

`,
      },
      ...(hasAdd
        ? [
            {
              id: "add-ui",
              feature: "feature-search",
              code: `      {/* Här kopplar jag inputen till text-state. */}
      <input
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="New todo"
      />
      {/* Här skapar jag en ny todo från texten i inputen. */}
      <button onClick={addTodo}>Add</button>

`,
            },
          ]
        : []),
      ...(hasFilter
        ? [
            {
              id: "filter-ui",
              feature: "feature-category",
              code: `      {/* Här låter jag användaren välja vilka todos som visas. */}
      <select
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>

`,
            },
          ]
        : []),
      ...(hasCount
        ? [
            {
              id: "count-ui",
              feature: "feature-count",
              code: `      {/* Här visar jag hur många todos som finns kvar. */}
      <p>{activeCount} active todos left</p>

`,
            },
          ]
        : []),
      ...(hasClearCompleted
        ? [
            {
              id: "clear-completed-ui",
              feature: "feature-reset",
              code: `      {/* Här kan användaren rensa alla klara todos. */}
      <button onClick={clearCompleted}>Clear completed</button>

`,
            },
          ]
        : []),
      ...(hasEmpty
        ? [
            {
              id: "empty-state",
              feature: "feature-empty",
              code: `      {/* Om listan är tom visar jag det tydligt. */}
      {${visibleList}.length === 0 && <p>No todos found.</p>}

`,
            },
          ]
        : []),
      {
        id: "map-list",
        code: `      {/* Här renderar jag varje todo. */}
      {${visibleList}.map((todo) => (
        <article key={todo.id}>
          {/* Key hjälper React att känna igen varje todo när listan ändras. */}
          <p>{todo.text}</p>
          <p>{todo.completed ? "Done" : "Active"}</p>
${hasToggle ? `          {/* Här togglar jag bara den todo som användaren klickar på. */}
          <button onClick={() => toggleTodo(todo.id)}>
            Toggle
          </button>
` : ""}${hasDelete ? `          {/* Här tar jag bort just den här todon. */}
          <button onClick={() => deleteTodo(todo.id)}>
            Delete
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
