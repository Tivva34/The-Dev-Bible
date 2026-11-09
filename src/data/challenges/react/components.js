import { createSnippetChallenge } from "../helpers/snippetChallengeBuilder.js";



export const componentBasicsChallenge = createSnippetChallenge({
  id: "component-basics",
  title: "Components & props",
  estimatedTime: "20 min",
  interviewPrompt:
    "Bygg en återanvändbar Card-komponent som visar titel och text.",
  currentGoal: "Skapa en komponent och använd den med props.",
  baseWhatToSay:
    "Okej, jag börjar med en liten Card-komponent som får titel och text via props och renderas flera gånger.",
  baseCode: `function Card({ title, text }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

export default function App() {
  return (
    <section>
      <Card title="React" text="A UI library." />
      <Card title="Props" text="Data passed into a component." />
    </section>
  );
}

`,
  baseFollowUpQuestions: [
    {
      question: "Varför använder du props här?",
      answer:
        "Card-komponenten ska kunna återanvändas med olika innehåll utan att jag duplicerar markup.",
    },
  ],
  features: [
    {
      id: "children",
      label: "Children",
      colorClass: "feature-search",
      interviewer:
        "Gör så att Card kan ta emot valfritt innehåll med children.",
      goal: "Använd children för mer flexibel composition.",
      getWhatToSay() {
        return "Okej, children passar när komponenten ska styra ramen men innehållet kan variera.";
      },
      code: `function Card({ title, children }) {
  return (
    <article>
      <h2>{title}</h2>
      {children}
    </article>
  );
}

// Användning:
<Card title="React">
  <p>A UI library.</p>
  <button>Read more</button>
</Card>

`,
    },
    {
      id: "variant",
      label: "Variant",
      colorClass: "feature-category",
      interviewer: "Lägg till en variant-prop för olika visuella stilar.",
      goal: "Styra klassnamn med props.",
      getWhatToSay() {
        return "Okej, variant är ett bra sätt att låta samma komponent få olika stil utan att ändra strukturen.";
      },
      code: `function Card({ title, text, variant = "default" }) {
  return (
    <article className={\`card card-\${variant}\`}>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

`,
    },
    {
      id: "list",
      label: "Lista",
      colorClass: "feature-sort",
      interviewer:
        "Flytta innehållet till en array och rendera Card med map.",
      goal: "Rendera återanvändbara komponenter från data.",
      getWhatToSay() {
        return "Okej, då separerar jag datan från UI:t och mappar varje item till samma Card-komponent.";
      },
      code: `const topics = [
  { id: 1, title: "React", text: "A UI library." },
  { id: 2, title: "Props", text: "Data passed into a component." },
];

{topics.map((topic) => (
  <Card key={topic.id} title={topic.title} text={topic.text} />
))}

`,
    },
    {
      id: "onClick",
      label: "Callback",
      colorClass: "feature-count",
      interviewer: "Låt Card ta emot en onSelect-callback när man klickar.",
      goal: "Skicka events från child till parent.",
      getWhatToSay() {
        return "Okej, parent äger vad som ska hända, och Card anropar callbacken när användaren klickar.";
      },
      code: `function Card({ title, text, onSelect }) {
  return (
    <article onClick={onSelect}>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

<Card
  title="React"
  text="A UI library."
  onSelect={() => console.log("React selected")}
/>

`,
    },
    {
      id: "styling",
      label: "Styling",
      colorClass: "feature-styling",
      interviewer:
        "Lägg till enkel styling för Card-komponenten.",
      goal: "Lägg till klassnamn och en egen CSS-fil.",
      getWhatToSay() {
        return "Okej, jag lägger klassnamn i komponenten och flyttar utseendet till en CSS-fil.";
      },
      code: `// cardFunction.jsx
// Här importerar jag CSS-filen som hör till komponenten.
import "./cardFunction.css";

function Card({ title, text }) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
}

// cardFunction.css
/* Här ger jag komponenten en tydlig ram utan att ändra logiken. */
.card {
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #ffffff;
}

/* Här håller jag rubriken kompakt. */
.card h2 {
  margin: 0 0 0.35rem;
  font-size: 1rem;
}

`,
    },
  ],
});

componentBasicsChallenge.getCodeSections = function getComponentBasicsSections(
  selected,
) {
  const hasChildren = selected.includes("children");
  const hasVariant = selected.includes("variant");
  const hasList = selected.includes("list");
  const hasCallback = selected.includes("onClick");
  const hasStyling = selected.includes("styling");

  const cardProps = [
    "title",
    hasChildren ? "children" : "text",
    hasVariant ? 'variant = "default"' : null,
    hasCallback ? "onSelect" : null,
  ]
    .filter(Boolean)
    .join(", ");
  const articleAttributes = [
    hasVariant
      ? 'className={`card card-${variant}`}'
      : hasStyling
        ? 'className="card"'
        : null,
    hasCallback ? "onClick={onSelect}" : null,
  ]
    .filter(Boolean)
    .join(" ");
  const articleStart = articleAttributes
    ? `<article ${articleAttributes}>`
    : "<article>";
  const cardFeatureCandidates = [
    hasCallback ? "feature-count" : null,
    hasVariant ? "feature-category" : null,
    hasChildren ? "feature-search" : null,
    hasStyling ? "feature-styling" : null,
  ].filter(Boolean);
  const appFeatureCandidates = [
    hasList ? "feature-sort" : null,
    hasCallback ? "feature-count" : null,
    hasChildren ? "feature-search" : null,
    hasVariant ? "feature-category" : null,
  ].filter(Boolean);
  const cardFeature =
    cardFeatureCandidates.length === 1 ? cardFeatureCandidates[0] : null;
  const appFeature =
    appFeatureCandidates.length === 1 ? appFeatureCandidates[0] : null;
  const firstCardProps = [
    'title="React"',
    hasChildren ? null : 'text="A UI library."',
    hasVariant ? 'variant="featured"' : null,
    hasCallback ? 'onSelect={() => console.log("React selected")}' : null,
  ]
    .filter(Boolean)
    .join(" ");
  const secondCardProps = [
    'title="Props"',
    hasChildren ? null : 'text="Data passed into a component."',
    hasVariant ? 'variant="default"' : null,
    hasCallback ? 'onSelect={() => console.log("Props selected")}' : null,
  ]
    .filter(Boolean)
    .join(" ");
  const cardContent = hasChildren
    ? `      {children}
`
    : `      <p>{text}</p>
`;
  const staticCards = hasChildren
    ? `      <Card ${firstCardProps}>
        <p>A UI library.</p>
        <button>Read more</button>
      </Card>
      <Card ${secondCardProps}>
        <p>Data passed into a component.</p>
      </Card>
`
    : `      <Card ${firstCardProps} />
      <Card ${secondCardProps} />
`;
  const listCardProps = [
    "key={topic.id}",
    "title={topic.title}",
    hasChildren ? null : "text={topic.text}",
    hasVariant ? 'variant={topic.id === 1 ? "featured" : "default"}' : null,
    hasCallback ? "onSelect={() => console.log(topic.title)}" : null,
  ]
    .filter(Boolean)
    .map((prop) => `          ${prop}`)
    .join("\n");

  const sections = [
    ...(hasStyling
      ? [
          {
            id: "styling-import",
            feature: "feature-styling",
            code: `// Styling: Okej, jag importerar CSS-filen i samma fil som komponenten.
import "./cardFunction.css";

`,
          },
        ]
      : []),
    ...(hasList
      ? [
          {
            id: "topics-data",
            feature: "feature-sort",
            code: `// Lista: Okej, jag separerar datan från UI:t så App kan mappa över den.
const topics = [
  { id: 1, title: "React", text: "A UI library." },
  { id: 2, title: "Props", text: "Data passed into a component." },
];

`,
          },
        ]
      : []),
    {
      id: "card-component",
      feature: cardFeature,
      code: `// Okej, jag börjar med en liten Card-komponent som får innehåll via props.
function Card({ ${cardProps} }) {
  // Här returnerar jag ramen som varje Card ska använda.
  return (
    ${articleStart}
      <h2>{title}</h2>
${cardContent}    </article>
  );
}

`,
    },
    {
      id: "app-component",
      feature: appFeature,
      code: `// Här använder jag Card-komponenten på sidan.
export default function App() {
  // Här returnerar jag listan med kort.
  return (
    <section>
${
  hasList
    ? `      {topics.map((topic) => (
        <Card
${listCardProps}
        ${hasChildren ? `>
          <p>{topic.text}</p>
        </Card>` : "/>"}
      ))}
`
    : staticCards
}    </section>
  );
}

`,
    },
    ...(hasStyling
      ? [
          {
            id: "styling-css",
            feature: "feature-styling",
            code: `// cardFunction.css
/* Här ger jag komponenten en tydlig ram utan att ändra logiken. */
.card {
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #ffffff;
}

/* Här håller jag rubriken kompakt. */
.card h2 {
  margin: 0 0 0.35rem;
  font-size: 1rem;
}

/* Här visar jag visuellt vilken variant som är viktigast. */
.card-featured {
  border-color: #2563eb;
}

`,
          },
        ]
      : []),
  ];

  return sections;
};

export const reactCounterChallenge = createSnippetChallenge({
  id: "react-counter",
  title: "React Counter",
  estimatedTime: "15 min",
  interviewPrompt: "Bygg en React-counter som kan öka värdet.",
  currentGoal: "Visa ett värde och uppdatera det vid klick.",
  baseWhatToSay:
    "Okej, jag använder useState eftersom värdet ska ändras när användaren klickar.",
  baseCode: `import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
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
      interviewer: "Lägg till en knapp som minskar värdet.",
      goal: "Kunna öka och minska samma state.",
      getWhatToSay() {
        return "Okej, minusknappen uppdaterar samma count-state men åt andra hållet.";
      },
      code: `<button onClick={() => setCount(count - 1)}>
  Decrease
</button>

`,
    },
    {
      id: "reset",
      label: "Reset",
      colorClass: "feature-empty",
      interviewer: "Lägg till en reset-knapp.",
      goal: "Sätta tillbaka värdet till noll.",
      getWhatToSay() {
        return "Okej, reset sätter count till startvärdet igen.";
      },
      code: `<button onClick={() => setCount(0)}>
  Reset
</button>

`,
    },
  ],
});

reactCounterChallenge.getCodeSections = function getReactCounterSections(
  selected,
) {
  const hasDecrease = selected.includes("decrease");
  const hasReset = selected.includes("reset");

  return [
    {
      id: "import",
      code: `// Här behöver jag useState eftersom värdet ändras vid klick.
import { useState } from "react";

`,
    },
    {
      id: "component",
      code: `// Här bygger jag counter-komponenten.
export default function Counter() {
  // Här sparar jag värdet som användaren kan ändra.
  const [count, setCount] = useState(0);

  // Här returnerar jag värdet och knapparna som ändrar det.
  return (
    <section>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
${
  hasDecrease
    ? `      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
`
    : ""
}${
  hasReset
    ? `      <button onClick={() => setCount(0)}>
        Reset
      </button>
`
    : ""
}    </section>
  );
}

`,
      feature:
        (hasReset && "feature-empty") ||
        (hasDecrease && "feature-category") ||
        null,
    },
  ];
};

export const todoFilterChallenge = createSnippetChallenge({
  id: "todo-filter",
  title: "Todo list with filters",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg en todo-lista där todos kan visas som alla, aktiva eller klara.",
  currentGoal: "Visa todos och ett filter.",
  baseWhatToSay:
    "Okej, jag börjar med todos som har completed och ett filtervärde som styr vad som visas.",
  baseCode: `import { useState } from "react";

const initialTodos = [
  { id: 1, text: "Read task", completed: true },
  { id: 2, text: "Build UI", completed: false },
  { id: 3, text: "Explain solution", completed: false },
];

export default function TodoFilter() {
  const [filter, setFilter] = useState("all");

  const visibleTodos = initialTodos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <section>
      <select value={filter} onChange={(event) => setFilter(event.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>

      {visibleTodos.map((todo) => (
        <p key={todo.id}>{todo.text}</p>
      ))}
    </section>
  );
}

`,
  features: [
    {
      id: "toggle",
      label: "Toggle",
      colorClass: "feature-search",
      interviewer: "Gör så att en todo kan växla mellan klar och aktiv.",
      goal: "Uppdatera completed.",
      getWhatToSay() {
        return "Okej, då behöver todos ligga i state och jag uppdaterar bara den todo som klickas.";
      },
      code: `const [todos, setTodos] = useState(initialTodos);

function toggleTodo(todoId) {
  setTodos(
    todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
    ),
  );
}

`,
    },
    {
      id: "count",
      label: "Antal",
      colorClass: "feature-category",
      interviewer: "Visa hur många aktiva todos som finns kvar.",
      goal: "Räkna aktiva todos.",
      getWhatToSay() {
        return "Okej, då räknar jag todos där completed är false och visar siffran ovanför listan.";
      },
      code: `const activeCount = todos.filter((todo) => !todo.completed).length;

// I JSX:
// <p>{activeCount} active todos left</p>

`,
    },
    {
      id: "clear",
      label: "Rensa färdiga",
      colorClass: "feature-sort",
      interviewer: "Lägg till en knapp som tar bort alla klara todos.",
      goal: "Rensa completed todos.",
      getWhatToSay() {
        return "Okej, då filtrerar jag bort alla todos som redan är klara.";
      },
      code: `function clearCompleted() {
  setTodos(todos.filter((todo) => !todo.completed));
}

// I JSX:
// <button onClick={clearCompleted}>Clear completed</button>

`,
    },
  ],
});

todoFilterChallenge.getCodeSections = function getTodoFilterSections(selected) {
  const hasToggle = selected.includes("toggle");
  const hasCount = selected.includes("count");
  const hasClear = selected.includes("clear");
  const needsTodoState = hasToggle || hasClear;
  const todoSource = needsTodoState ? "todos" : "initialTodos";

  return [
    {
      id: "imports",
      code: `// Här behöver jag useState eftersom filtret kan ändras.
import { useState } from "react";

`,
    },
    {
      id: "data",
      code: `// Jag börjar med todos som redan har ett completed-värde.
const initialTodos = [
  { id: 1, text: "Read task", completed: true },
  { id: 2, text: "Build UI", completed: false },
  { id: 3, text: "Explain solution", completed: false },
];

`,
    },
    {
      id: "state",
      code: `// Här bygger jag komponenten som filtrerar todos.
export default function TodoFilter() {
// Här sparar jag vilket filter som är valt.
  const [filter, setFilter] = useState("all");
${needsTodoState ? `// Här behöver todos ligga i state eftersom användaren kan ändra listan.
  const [todos, setTodos] = useState(initialTodos);
` : ""}
`,
    },
    ...(hasToggle
      ? [
          {
            id: "toggle",
            feature: "feature-search",
            code: `// Toggle: Här ändrar jag bara den todo som matchar id:t.
  function toggleTodo(todoId) {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }

`,
          },
        ]
      : []),
    ...(hasClear
      ? [
          {
            id: "clear",
            feature: "feature-sort",
            code: `// Rensa klara: Här behåller jag bara todos som inte är klara.
  function clearCompleted() {
    setTodos(todos.filter((todo) => !todo.completed));
  }

`,
          },
        ]
      : []),
    {
      id: "derived",
      feature: hasCount ? "feature-category" : null,
      code: `// Här skapar jag listan som faktiskt ska visas.
  const visibleTodos = ${todoSource}.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });
${hasCount ? `
// Antal: Här räknar jag hur många aktiva todos som finns kvar.
  const activeCount = ${todoSource}.filter((todo) => !todo.completed).length;
` : ""}
`,
    },
    {
      id: "jsx",
      code: `// Här returnerar jag filtret och todo-listan.
  return (
    <section>
{/* Här låter jag användaren välja vilka todos som ska visas. */}
      <select value={filter} onChange={(event) => setFilter(event.target.value)}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
${hasCount ? `
{/* Antal: Här visar jag hur många aktiva todos som finns kvar. */}
      <p>{activeCount} active todos left</p>
` : ""}${hasClear ? `
{/* Rensa klara: Här tar jag bort alla completed todos. */}
      <button type="button" onClick={clearCompleted}>
        Clear completed
      </button>
` : ""}
{/* Här renderar jag varje todo från den filtrerade listan. */}
      {visibleTodos.map((todo) => (
${hasToggle ? `        <label key={todo.id}>
{/* Key hjälper React att känna igen varje todo när listan ändras. */}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          {todo.text}
        </label>
` : `        <p key={todo.id}>{todo.text}</p>
`}      ))}
    </section>
  );
}

`,
    },
  ];
};

export const shoppingCartQuantityChallenge = createSnippetChallenge({
  id: "shopping-cart-quantity",
  title: "Shopping cart with quantity",
  estimatedTime: "30 min",
  interviewPrompt: "Bygg en kundvagn där varje produkt kan ha quantity.",
  currentGoal: "Visa produkter och lägg till dem i cart.",
  baseWhatToSay:
    "Okej, jag sparar cart i state och lägger till produkten som ett cart-item med quantity.",
  baseCode: `import { useState } from "react";

const products = [
  { id: 1, name: "Keyboard", price: 120 },
  { id: 2, name: "Mouse", price: 80 },
];

export default function CartQuantity() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, { ...product, quantity: 1 }]);
  }

  return (
    <section>
      {products.map((product) => (
        <button key={product.id} onClick={() => addToCart(product)}>
          Add {product.name}
        </button>
      ))}

      {cart.map((item) => (
        <p key={item.id}>{item.name}: {item.quantity}</p>
      ))}
    </section>
  );
}

`,
  features: [
    {
      id: "merge",
      label: "Slå ihop",
      colorClass: "feature-search",
      interviewer: "Om produkten redan finns i cart ska quantity öka istället.",
      goal: "Undvik dubletter i cart.",
      getWhatToSay() {
        return "Okej, jag kontrollerar om produkten redan finns och uppdaterar quantity istället för att lägga till en ny rad.";
      },
      code: `function addToCart(product) {
  const exists = cart.some((item) => item.id === product.id);

  if (exists) {
    setCart(
      cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    );
    return;
  }

  setCart([...cart, { ...product, quantity: 1 }]);
}

`,
    },
    {
      id: "decrease",
      label: "Minska",
      colorClass: "feature-category",
      interviewer: "Lägg till en knapp som minskar quantity.",
      goal: "Minska antal i cart.",
      getWhatToSay() {
        return "Okej, jag minskar rätt item och tar bort raden om quantity blir noll.";
      },
      code: `function decreaseQuantity(productId) {
  setCart(
    cart
      .map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      )
      .filter((item) => item.quantity > 0),
  );
}

`,
    },
    {
      id: "total",
      label: "Total",
      colorClass: "feature-sort",
      interviewer: "Visa totalpris baserat på price och quantity.",
      goal: "Räkna totalen.",
      getWhatToSay() {
        return "Okej, då multiplicerar jag varje produkts pris med quantity och summerar med reduce.";
      },
      code: `const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0,
);

// I JSX:
// <strong>Total: \${total}</strong>

`,
    },
  ],
});

shoppingCartQuantityChallenge.getCodeSections =
  function getShoppingCartQuantitySections(selected) {
    const hasMerge = selected.includes("merge");
    const hasDecrease = selected.includes("decrease");
    const hasTotal = selected.includes("total");

    return [
      {
        id: "imports",
        code: `// Här behöver jag useState eftersom cart ändras när användaren klickar.
import { useState } from "react";

`,
      },
      {
        id: "data",
        code: `// Jag börjar med produkter som användaren kan lägga i cart.
const products = [
  { id: 1, name: "Keyboard", price: 120 },
  { id: 2, name: "Mouse", price: 80 },
];

`,
      },
      {
        id: "state",
        code: `// Här bygger jag kundvagnen med quantity.
export default function CartQuantity() {
// Här sparar jag produkterna som användaren lagt i cart.
  const [cart, setCart] = useState([]);

`,
      },
      {
        id: "add",
        feature: hasMerge ? "feature-search" : null,
        code: `// Här lägger jag till produkten i cart.
  function addToCart(product) {
${hasMerge ? `    const exists = cart.some((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
      return;
    }

` : ""}    setCart([...cart, { ...product, quantity: 1 }]);
  }

`,
      },
      ...(hasDecrease
        ? [
            {
              id: "decrease",
              feature: "feature-category",
              code: `// Minska: Här minskar jag rätt item och tar bort raden vid noll.
  function decreaseQuantity(productId) {
    setCart(
      cart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

`,
            },
          ]
        : []),
      ...(hasTotal
        ? [
            {
              id: "total",
              feature: "feature-sort",
              code: `// Total: Här räknar jag pris gånger quantity för hela cart.
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

`,
            },
          ]
        : []),
      {
        id: "jsx",
        code: `// Här returnerar jag produkter och cart.
  return (
    <section>
{/* Här renderar jag produkter som kan läggas till i cart. */}
      {products.map((product) => (
        <button key={product.id} onClick={() => addToCart(product)}>
          Add {product.name}
        </button>
      ))}

{/* Här renderar jag varje rad i cart. */}
      {cart.map((item) => (
        <article key={item.id}>
{/* Key hjälper React att känna igen varje cart-rad när listan ändras. */}
          <p>{item.name}: {item.quantity}</p>
${hasDecrease ? `          <button onClick={() => decreaseQuantity(item.id)}>
            -
          </button>
` : ""}        </article>
      ))}
${hasTotal ? `
{/* Total: Här visar jag totalpriset från cart-arrayen. */}
      <strong>Total: ${"{total}"}</strong>
` : ""}    </section>
  );
}

`,
      },
    ];
  };

export const editableItemChallenge = createSnippetChallenge({
  id: "editable-item",
  title: "Editable item",
  estimatedTime: "25 min",
  interviewPrompt:
    "Bygg en liten lista där varje item visas med text.",
  currentGoal: "Rendera items från state.",
  baseWhatToSay:
    "Okej, jag börjar med items i state och renderar varje rad från listan.",
  baseCode: `import { useState } from "react";

const initialItems = [
  { id: 1, text: "Read task" },
  { id: 2, text: "Build solution" },
  { id: 3, text: "Explain choices" },
];

export default function EditableList() {
  const [items, setItems] = useState(initialItems);

  return (
    <section>
      {items.map((item) => (
        <article key={item.id}>
          <p>{item.text}</p>
        </article>
      ))}
    </section>
  );
}

`,
  baseFollowUpQuestions: [
    {
      question: "Varför ligger items i state?",
      answer:
        "När användaren ska kunna ändra text behöver komponenten kunna rendera om med den nya listan.",
    },
  ],
  followUpQuestions: [
    {
      featureIds: ["edit"],
      question: "Varför sparar du editingId?",
      answer:
        "Då vet jag exakt vilken rad som ska visa input istället för vanlig text.",
    },
    {
      featureIds: ["cancel"],
      question: "Varför behövs cancel?",
      answer:
        "Användaren ska kunna ångra ändringen utan att state-listan uppdateras.",
    },
  ],
  features: [
    {
      id: "edit",
      label: "Edit-läge",
      colorClass: "feature-search",
      interviewer: "Låt användaren klicka Edit på en rad.",
      goal: "Visa input för vald rad.",
      getWhatToSay() {
        return "Okej, jag sparar vilket id som redigeras och vilken text som ligger i inputen.";
      },
      code: `const [editingId, setEditingId] = useState(null);
const [draft, setDraft] = useState("");

function startEdit(item) {
  setEditingId(item.id);
  setDraft(item.text);
}

{editingId === item.id ? (
  <input value={draft} onChange={(event) => setDraft(event.target.value)} />
) : (
  <p>{item.text}</p>
)}

<button onClick={() => startEdit(item)}>Edit</button>

`,
    },
    {
      id: "save",
      label: "Spara",
      colorClass: "feature-category",
      interviewer: "Lägg till en Save-knapp som uppdaterar raden.",
      goal: "Spara ändrad text.",
      getWhatToSay() {
        return "Okej, jag mappar listan och byter bara text på itemet som matchar editingId.";
      },
      code: `function saveItem() {
  setItems(
    items.map((item) =>
      item.id === editingId ? { ...item, text: draft } : item
    )
  );
  setEditingId(null);
  setDraft("");
}

<button onClick={saveItem}>Save</button>

`,
    },
    {
      id: "cancel",
      label: "Cancel",
      colorClass: "feature-reset",
      interviewer: "Låt användaren avbryta redigeringen.",
      goal: "Stäng edit-läget utan att spara.",
      getWhatToSay() {
        return "Okej, cancel behöver bara tömma edit-state utan att röra items-listan.";
      },
      code: `function cancelEdit() {
  setEditingId(null);
  setDraft("");
}

<button onClick={cancelEdit}>Cancel</button>

`,
    },
    {
      id: "validation",
      label: "Validering",
      colorClass: "feature-empty",
      interviewer: "Förhindra att användaren sparar tom text.",
      goal: "Stoppa tomma items.",
      getWhatToSay() {
        return "Okej, jag gör en tidig return om draft är tom efter trim.";
      },
      code: `if (draft.trim() === "") return;

<button disabled={draft.trim() === ""} onClick={saveItem}>
  Save
</button>

`,
    },
  ],
});

editableItemChallenge.getCodeSections = function getEditableItemSections(
  selected,
) {
  const hasEdit = selected.includes("edit") || selected.includes("save") || selected.includes("cancel") || selected.includes("validation");
  const hasSave = selected.includes("save");
  const hasCancel = selected.includes("cancel");
  const hasValidation = selected.includes("validation");

  return [
    {
      id: "imports",
      code: `// Här behöver jag useState eftersom listan${hasEdit ? " och edit-läget" : ""} kan ändras.
import { useState } from "react";

`,
    },
    {
      id: "data",
      code: `// Jag börjar med några items som listan kan visa.
const initialItems = [
  { id: 1, text: "Read task" },
  { id: 2, text: "Build solution" },
  { id: 3, text: "Explain choices" },
];

`,
    },
    {
      id: "state",
      code: `// Här bygger jag listan där varje item kan visas.
export default function EditableList() {
// Här sparar jag listan så den kan uppdateras.
  const [items, setItems] = useState(initialItems);
${hasEdit ? `// Edit-läge: Här sparar jag vilken rad som redigeras.
  const [editingId, setEditingId] = useState(null);
// Edit-läge: Här sparar jag texten i inputfältet.
  const [draft, setDraft] = useState("");
` : ""}
`,
    },
    ...(hasEdit
      ? [
          {
            id: "start-edit",
            feature: "feature-search",
            code: `// Edit-läge: Här öppnar jag inputen för vald rad.
  function startEdit(item) {
    setEditingId(item.id);
    setDraft(item.text);
  }

`,
          },
        ]
      : []),
    ...(hasSave
      ? [
          {
            id: "save",
            feature: "feature-category",
            code: `// Spara: Här uppdaterar jag bara raden som redigeras.
  function saveItem() {
${hasValidation ? `    if (draft.trim() === "") return;

` : ""}    setItems(
      items.map((item) =>
        item.id === editingId ? { ...item, text: draft } : item,
      ),
    );
    setEditingId(null);
    setDraft("");
  }

`,
          },
        ]
      : []),
    ...(hasCancel
      ? [
          {
            id: "cancel",
            feature: "feature-reset",
            code: `// Cancel: Här stänger jag edit-läget utan att ändra listan.
  function cancelEdit() {
    setEditingId(null);
    setDraft("");
  }

`,
          },
        ]
      : []),
    {
      id: "jsx",
      code: `// Här returnerar jag varje rad i listan.
  return (
    <section>
      {items.map((item) => (
        <article key={item.id}>
${hasEdit ? `          {editingId === item.id ? (
            <input
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
            />
          ) : (
            <p>{item.text}</p>
          )}
          <button type="button" onClick={() => startEdit(item)}>
            Edit
          </button>
${hasSave ? `          <button
            type="button"
            onClick={saveItem}
${hasValidation ? `            disabled={draft.trim() === ""}
` : ""}          >
            Save
          </button>
` : ""}${hasCancel ? `          <button type="button" onClick={cancelEdit}>
            Cancel
          </button>
` : ""}` : `          <p>{item.text}</p>
`}        </article>
      ))}
    </section>
  );
}

`,
    },
  ];
};


