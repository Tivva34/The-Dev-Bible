export const fundamentalsExamples = [
  {
    id: "fundamentals-loops",
    type: "fundamental",
    title: "Loop patterns",
    difficulty: "JavaScript",
    estimatedTime: "5 min",
    intro:
      "Loopar används när samma logik ska köras flera gånger. Valet beror på om jag behöver index, värden eller en ny array.",
    keyPoints: [
      "for passar när index eller break behövs.",
      "for...of passar när jag bara vill läsa värden.",
      "while passar när loopen styrs av ett villkor.",
      "map passar när jag vill skapa en ny array.",
    ],
    followUps: [
      {
        question: "När använder du map istället för for?",
        answer:
          "När jag vill skapa en ny array från en befintlig array utan att ändra originalet.",
      },
      {
        question: "När passar for-loop bättre?",
        answer:
          "När jag behöver index, vill kunna avbryta med break eller behöver mer kontroll över stegen.",
      },
    ],
    codeSections: [
      {
        id: "for-loop",
        feature: "feature-search",
        code: `// forLoop.js
// Här använder jag for när jag behöver index.
const numbers = [1, 2, 3];

// Här startar jag på index 0 och går tills listan tar slut.
for (let index = 0; index < numbers.length; index += 1) {
// Här kan jag använda både index och värdet på platsen.
  console.log(index, numbers[index]);
}`,
      },
      {
        id: "for-of-loop",
        feature: "feature-category",
        code: `// forOfLoop.js
// Här använder jag for...of när jag bara behöver värdet.
const names = ["Alice", "Alex", "Sam"];

// Här går loopen igenom ett namn i taget.
for (const name of names) {
// Här slipper jag tänka på index.
  console.log(name);
}`,
      },
      {
        id: "while-loop",
        feature: "feature-sort",
        code: `// whileLoop.js
// Här använder jag while när ett villkor styr hur länge loopen körs.
let attempts = 0;

// Här fortsätter loopen så länge villkoret är sant.
while (attempts < 3) {
// Här uppdaterar jag värdet så loopen inte kör för alltid.
  attempts += 1;
  console.log(attempts);
}`,
      },
      {
        id: "map-loop",
        feature: "feature-empty",
        code: `// mapExample.js
// Här använder jag map när jag vill skapa en ny array.
const prices = [100, 200, 300];

// Här returnerar varje varv ett nytt värde till den nya arrayen.
const pricesWithVat = prices.map((price) => price * 1.25);

console.log(pricesWithVat);`,
      },
    ],
  },
  {
    id: "fundamentals-if-statements",
    type: "fundamental",
    title: "Conditionals & branching",
    difficulty: "JavaScript",
    estimatedTime: "5 min",
    intro:
      "If-satser används när koden ska göra olika saker beroende på ett villkor. Jag försöker hålla villkoren tydliga och specialfall enkla att läsa.",
    keyPoints: [
      "Guard clauses gör specialfall tydliga.",
      "if/else passar när två vägar hör ihop.",
      "switch passar när ett värde har flera fasta lägen.",
      "ternary passar bara för små uttryck.",
    ],
    followUps: [
      {
        question: "Varför returnerar du tidigt?",
        answer:
          "Det gör varje specialfall tydligt och minskar behovet av nästlade if-satser.",
      },
      {
        question: "När hade du använt switch?",
        answer:
          "När samma värde kan ha flera tydliga lägen, till exempel loading, success och error.",
      },
    ],
    codeSections: [
      {
        id: "guard-clause",
        feature: "feature-search",
        code: `// guardClause.js
// Här hanterar jag specialfallen först.
function getStatusMessage(isLoading, error, users) {
// Här avbryter jag direkt om datan fortfarande laddas.
  if (isLoading) return "Loading...";

// Här avbryter jag direkt om något gick fel.
  if (error) return "Something went wrong";

// Här hanterar jag tom lista innan success-fallet.
  if (users.length === 0) return "No users found";

// Här hamnar jag bara om allt gick bra.
  return "Users loaded";
}`,
      },
      {
        id: "if-else",
        feature: "feature-category",
        code: `// ifElse.js
// Här använder jag if/else när det finns två tydliga vägar.
function getButtonText(isSaving) {
// Här visas en text när sparningen pågår.
  if (isSaving) {
    return "Saving...";
  }

// Här visas standardtexten annars.
  return "Save";
}`,
      },
      {
        id: "switch-status",
        feature: "feature-sort",
        code: `// switchStatus.js
// Här använder jag switch när status kan ha flera fasta värden.
function getMessage(status) {
  switch (status) {
    case "loading":
      return "Loading...";
    case "error":
      return "Something went wrong";
    case "success":
      return "Done";
    default:
      return "Unknown status";
  }
}`,
      },
    ],
  },
  {
    id: "fundamentals-array-methods",
    type: "fundamental",
    title: "Array methods",
    difficulty: "JavaScript",
    estimatedTime: "5 min",
    intro:
      "Array-metoder är vanliga i frontend eftersom UI ofta byggs från listor med data.",
    keyPoints: [
      "filter skapar en lista med items som matchar villkoret.",
      "map skapar en ny lista där varje item omvandlas.",
      "reduce räknar fram ett värde från hela listan.",
    ],
    followUps: [
      {
        question: "Varför är array-metoder vanliga i React?",
        answer:
          "React renderar ofta listor från data, och array-metoder låter mig skapa ny data utan att mutera originalet.",
      },
      {
        question: "När använder du reduce?",
        answer:
          "När jag vill räkna fram ett enda värde, till exempel totalpris, antal eller grupperad data.",
      },
    ],
    codeSections: [
      {
        id: "filter-method",
        feature: "feature-search",
        code: `// filterExample.js
// Här använder jag filter för att behålla det som matchar.
const products = [
  { name: "Laptop", inStock: true },
  { name: "Keyboard", inStock: false },
];

// Här skapas en ny lista med produkter i lager.
const inStockProducts = products.filter((product) => product.inStock);

console.log(inStockProducts);`,
      },
      {
        id: "map-method",
        feature: "feature-category",
        code: `// mapExample.js
// Här använder jag map för att omvandla varje item.
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Keyboard", price: 150 },
];

// Här skapas en ny lista med bara produktnamnen.
const productNames = products.map((product) => product.name);

console.log(productNames);`,
      },
      {
        id: "reduce-method",
        feature: "feature-sort",
        code: `// reduceExample.js
// Här använder jag reduce för att räkna fram ett totalvärde.
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Keyboard", price: 150 },
];

// Här börjar summan på 0 och ökar med varje pris.
const totalPrice = products.reduce((sum, product) => {
  return sum + product.price;
}, 0);

console.log(totalPrice);`,
      },
    ],
  },
  {
    id: "fundamentals-usestate",
    type: "fundamental",
    title: "useState",
    difficulty: "React",
    estimatedTime: "5 min",
    intro:
      "useState används när ett värde kan ändras och UI:t ska renderas om när värdet ändras.",
    keyPoints: [
      "State passar för input, toggle, aktiv flik och vald data.",
      "Värden som kan räknas ut behöver oftast inte egen state.",
      "Setter-funktionen används för att uppdatera värdet.",
    ],
    followUps: [
      {
        question: "När ska något inte vara state?",
        answer:
          "Om värdet kan räknas ut från props eller annan state behöver det oftast inte sparas separat.",
      },
      {
        question: "Varför använder du setter-funktionen?",
        answer:
          "React behöver setter-funktionen för att veta att värdet ändrats och att komponenten ska renderas om.",
      },
    ],
    codeSections: [
      {
        id: "counter-state",
        feature: "feature-search",
        code: `// Counter.jsx
// Här behöver jag useState eftersom användaren kan ändra värdet.
import { useState } from "react";

export default function Counter() {
// Här sparar jag värdet som visas i knappen.
  const [count, setCount] = useState(0);

// Här renderar jag knappen och uppdaterar state vid klick.
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`,
      },
      {
        id: "input-state",
        feature: "feature-category",
        code: `// NamePreview.jsx
// Här behöver jag state eftersom inputfältet ändras av användaren.
import { useState } from "react";

export default function NamePreview() {
// Här sparar jag texten användaren skriver.
  const [name, setName] = useState("");

// Här kopplar jag inputfältet till samma state.
  return (
    <section>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <p>{name}</p>
    </section>
  );
}`,
      },
    ],
  },
  {
    id: "fundamentals-useeffect",
    type: "fundamental",
    title: "useEffect",
    difficulty: "React",
    estimatedTime: "5 min",
    intro:
      "useEffect används när komponenten behöver synka med något utanför renderingen, till exempel fetch, localStorage eller event listeners.",
    keyPoints: [
      "Effekter körs efter render.",
      "Dependency-arrayen styr när effekten körs igen.",
      "Cleanup behövs för timers och event listeners.",
    ],
    followUps: [
      {
        question: "Vad betyder dependency-arrayen?",
        answer:
          "Den styr när effekten körs igen. En tom array betyder att effekten körs när komponenten mountas.",
      },
      {
        question: "När behövs cleanup?",
        answer:
          "När effekten startar något som lever vidare, till exempel event listeners, timers eller subscriptions.",
      },
    ],
    codeSections: [
      {
        id: "fetch-effect",
        feature: "feature-search",
        code: `// Users.jsx
// Här behöver jag useEffect eftersom komponenten hämtar data.
import { useEffect, useState } from "react";

export default function Users() {
// Här sparar jag datan som kommer från API:t.
  const [users, setUsers] = useState([]);

// Här körs fetch när komponenten mountas.
  useEffect(() => {
    async function loadUsers() {
      const response = await fetch("/api/users");
      const data = await response.json();
      setUsers(data);
    }

    loadUsers();
  }, []);

// Här renderar jag datan när den finns i state.
  return users.map((user) => <p key={user.id}>{user.name}</p>);
}`,
      },
      {
        id: "cleanup-effect",
        feature: "feature-category",
        code: `// WindowSize.jsx
// Här använder jag cleanup eftersom event listenern lever vidare.
import { useEffect, useState } from "react";

export default function WindowSize() {
// Här sparar jag bredden från browsern.
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
// Här uppdaterar jag state när fönstret ändras.
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

// Här tar jag bort lyssnaren när komponenten försvinner.
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <p>{width}px</p>;
}`,
      },
    ],
  },
  {
    id: "fundamentals-props-callback",
    type: "fundamental",
    title: "Props & callbacks",
    difficulty: "React",
    estimatedTime: "5 min",
    intro:
      "Props skickar data ner till en komponent. Callback-funktioner låter child-komponenten meddela parenten när något händer.",
    keyPoints: [
      "Props går från parent till child.",
      "Callback skickas ner när child ska trigga något i parent.",
      "Parent äger ofta datan och beslutet.",
    ],
    followUps: [
      {
        question: "Varför ligger onSelect i parenten?",
        answer:
          "Parenten äger oftast datan eller beslutet, medan child-komponenten bara triggar händelsen.",
      },
      {
        question: "När använder du children?",
        answer:
          "När komponenten ska återanvända en ram eller layout men innehållet kan variera.",
      },
    ],
    codeSections: [
      {
        id: "props-example",
        feature: "feature-search",
        code: `// ProductCard.jsx
// Här tar child-komponenten emot data via props.
function ProductCard({ product }) {
// Här renderar jag produktens data.
  return (
    <article>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </article>
  );
}`,
      },
      {
        id: "callback-example",
        feature: "feature-category",
        code: `// ProductCardWithCallback.jsx
// Här tar child-komponenten emot en callback från parenten.
function ProductCard({ product, onSelect }) {
// Här anropar jag callbacken när användaren klickar.
  return (
    <article>
      <h2>{product.name}</h2>
      <button onClick={() => onSelect(product.id)}>
        Select
      </button>
    </article>
  );
}`,
      },
    ],
  },
  {
    id: "fundamentals-fetch",
    type: "fundamental",
    title: "Fetch async/await",
    difficulty: "JavaScript",
    estimatedTime: "5 min",
    intro:
      "async/await gör asynkron kod lättare att läsa. Vid API-anrop behöver jag tänka på loading, error och data.",
    keyPoints: [
      "await väntar på ett Promise.",
      "try/catch fångar fel i det asynkrona flödet.",
      "response.ok bör kontrolleras i riktiga API-flöden.",
    ],
    followUps: [
      {
        question: "Varför try/catch?",
        answer:
          "Då kan jag hantera fel och visa ett tydligt fallback-läge istället för att appen kraschar.",
      },
      {
        question: "Vad saknas i ett riktigt API-flöde?",
        answer:
          "Jag hade även kontrollerat response.ok och visat loading samt error i UI:t.",
      },
    ],
    codeSections: [
      {
        id: "basic-fetch",
        feature: "feature-search",
        code: `// loadProducts.js
// Här gör jag funktionen async eftersom fetch är asynkront.
async function loadProducts() {
// Här fångar jag fel från nätverket eller JSON-parsning.
  try {
    const response = await fetch("/api/products");
    const products = await response.json();

    return products;
  } catch {
// Här returnerar jag ett säkert fallback-värde.
    return [];
  }
}`,
      },
      {
        id: "response-ok",
        feature: "feature-category",
        code: `// loadProductsWithStatus.js
// Här kontrollerar jag även om servern svarade med felstatus.
async function loadProducts() {
  const response = await fetch("/api/products");

// Här kastar jag ett fel om svaret inte är lyckat.
  if (!response.ok) {
    throw new Error("Could not load products");
  }

// Här läser jag datan när svaret är okej.
  return response.json();
}`,
      },
    ],
  },
];
