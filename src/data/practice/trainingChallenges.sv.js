export const randomTrainingChallenge = {
  id: "random-training",
  type: "training",
  title: "Random challenge",
  difficulty: "Practice",
  estimatedTime: "5-15 min",
  description: "Slumpade kodövningar med hints och svar.",
  challenges: [
    {
      id: "filter-active-products",
      category: "JavaScript",
      prompt:
        "Skriv en funktion som tar en lista med produkter och returnerar bara produkter som finns i lager.",
      starterCode: `const products = [
  { id: 1, name: "Laptop", inStock: true },
  { id: 2, name: "Shoes", inStock: false },
  { id: 3, name: "Phone", inStock: true },
];

function getProductsInStock(products) {
  // Skriv din lösning här.
}

console.log(getProductsInStock(products));`,
      starterHtml: `<section class="products-app">
  <h1>Products</h1>
  <div id="products"></div>
</section>`,
      starterCss: `.products-app {
  display: grid;
  gap: 0.75rem;
  max-width: 720px;
}

.product-card {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}`,
      hints: [
        "Tänk först på om du ska skapa en ny lista eller ändra den gamla.",
        "Här vill du behålla vissa produkter och ta bort andra.",
        "filter returnerar en ny array.",
        "Villkoret kan vara product.inStock.",
      ],
      solution: `const products = [
  { id: 1, name: "Laptop", inStock: true },
  { id: 2, name: "Shoes", inStock: false },
  { id: 3, name: "Phone", inStock: true },
];

function getProductsInStock(products) {
  return products.filter((product) => product.inStock);
}

console.log(getProductsInStock(products));`,
      solutionHtml: `<section class="products-app">
  <h1>Products</h1>
  <div id="products"></div>
</section>`,
      solutionCss: `.products-app {
  display: grid;
  gap: 0.75rem;
  max-width: 720px;
}

.product-card {
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}`,
      followUps: [
        {
          question: "Varför filter här?",
          answer:
            "filter passar eftersom jag vill skapa en ny lista där bara produkterna som matchar villkoret finns kvar.",
        },
        {
          question: "Ändrar du originaldatan?",
          answer:
            "Nej, filter returnerar en ny array och lämnar products oförändrad.",
        },
      ],
    },
    {
      id: "search-by-name",
      category: "JavaScript",
      prompt:
        "Skriv en funktion som söker produkter på namn och inte bryr sig om stora eller små bokstäver.",
      starterCode: `const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Keyboard" },
];

function searchProducts(products, query) {
  // Skriv din lösning här.
}

console.log(searchProducts(products, "lap"));`,
      hints: [
        "Du vill returnera en lista, inte bara true eller false.",
        "filter passar eftersom flera produkter kan matcha.",
        "Gör både produktnamnet och query till lowercase.",
        "includes passar när texten bara behöver finnas någonstans i namnet.",
      ],
      solution: `const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Keyboard" },
];

function searchProducts(products, query) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
}

console.log(searchProducts(products, "lap"));`,
      followUps: [
        {
          question: "Varför lowercase på båda?",
          answer:
            "Då matchar sökningen även om användaren skriver med annan casing än datan.",
        },
        {
          question: "Vad händer vid tom query?",
          answer:
            "En tom sträng finns i alla strängar, så alla produkter returneras.",
        },
      ],
    },
    {
      id: "sort-products-by-price",
      category: "JavaScript",
      prompt:
        "Skriv en funktion som sorterar produkter från billigast till dyrast utan att ändra original-arrayen.",
      starterCode: `const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Keyboard", price: 150 },
  { id: 3, name: "Phone", price: 900 },
];

function sortByPrice(products) {
  // Skriv din lösning här.
}

console.log(sortByPrice(products));`,
      hints: [
        "sort ändrar arrayen den körs på.",
        "Skapa därför en kopia först.",
        "Spread kan kopiera arrayen: [...products].",
        "För stigande pris jämför du a.price - b.price.",
      ],
      solution: `const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Keyboard", price: 150 },
  { id: 3, name: "Phone", price: 900 },
];

function sortByPrice(products) {
  return [...products].sort((a, b) => a.price - b.price);
}

console.log(sortByPrice(products));`,
      followUps: [
        {
          question: "Varför kopierar du arrayen?",
          answer:
            "sort muterar arrayen direkt, så kopian gör att originaldatan lämnas oförändrad.",
        },
        {
          question: "Hur sorterar du dyrast först?",
          answer:
            "Då vänder jag jämförelsen och använder b.price - a.price.",
        },
      ],
    },
    {
      id: "count-completed-todos",
      category: "JavaScript",
      prompt: "Räkna hur många todos som är klara och returnera antalet.",
      starterCode: `const todos = [
  { id: 1, text: "Read docs", done: true },
  { id: 2, text: "Build component", done: false },
  { id: 3, text: "Write tests", done: true },
];

function countCompleted(todos) {
  // Skriv din lösning här.
}

console.log(countCompleted(todos));`,
      hints: [
        "Du behöver hitta alla todos där done är true.",
        "filter kan skapa en lista med bara klara todos.",
        "length ger antalet items i den filtrerade listan.",
        "Du kan också lösa detta med reduce om du vill träna det.",
      ],
      solution: `const todos = [
  { id: 1, text: "Read docs", done: true },
  { id: 2, text: "Build component", done: false },
  { id: 3, text: "Write tests", done: true },
];

function countCompleted(todos) {
  return todos.filter((todo) => todo.done).length;
}

console.log(countCompleted(todos));`,
      followUps: [
        {
          question: "Kan reduce också fungera?",
          answer:
            "Ja, reduce fungerar bra om jag vill räkna i ett enda steg utan att skapa en filtrerad lista först.",
        },
        {
          question: "Vilken lösning väljer du här?",
          answer:
            "Jag väljer filter och length eftersom den är lätt att läsa för den här enkla räkningen.",
        },
      ],
    },
    {
      id: "sum-cart-total",
      category: "JavaScript",
      prompt:
        "Skriv en funktion som räknar ut totalpriset för en cart där varje item har price och quantity.",
      starterCode: `const cart = [
  { id: 1, name: "Laptop", price: 1200, quantity: 1 },
  { id: 2, name: "Keyboard", price: 150, quantity: 2 },
];

function getCartTotal(cart) {
  // Skriv din lösning här.
}

console.log(getCartTotal(cart));`,
      hints: [
        "Du vill få ut ett enda värde från hela listan.",
        "reduce passar när många items ska bli en summa.",
        "Varje rad ska bidra med price * quantity.",
        "Startvärdet för summan kan vara 0.",
      ],
      solution: `const cart = [
  { id: 1, name: "Laptop", price: 1200, quantity: 1 },
  { id: 2, name: "Keyboard", price: 150, quantity: 2 },
];

function getCartTotal(cart) {
  return cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
}

console.log(getCartTotal(cart));`,
      followUps: [
        {
          question: "Varför reduce?",
          answer:
            "Jag vill räkna fram ett enda totalvärde från alla items i listan.",
        },
        {
          question: "Varför multiplicerar du quantity?",
          answer:
            "Samma produkt kan finnas flera gånger i carten, så priset måste räknas per antal.",
        },
      ],
    },
    {
      id: "toggle-favorite",
      category: "JavaScript",
      prompt:
        "Skriv en funktion som togglar om ett id finns i en lista med favorit-id:n.",
      starterCode: `const favoriteIds = [1, 3];

function toggleFavorite(favoriteIds, productId) {
  // Skriv din lösning här.
}

console.log(toggleFavorite(favoriteIds, 3));
console.log(toggleFavorite(favoriteIds, 2));`,
      hints: [
        "Först behöver du veta om id:t redan finns.",
        "includes kan kontrollera om id:t finns.",
        "Om id:t finns kan filter ta bort det.",
        "Om id:t saknas kan spread lägga till det i en ny array.",
      ],
      solution: `const favoriteIds = [1, 3];

function toggleFavorite(favoriteIds, productId) {
  if (favoriteIds.includes(productId)) {
    return favoriteIds.filter((id) => id !== productId);
  }

  return [...favoriteIds, productId];
}

console.log(toggleFavorite(favoriteIds, 3));
console.log(toggleFavorite(favoriteIds, 2));`,
      followUps: [
        {
          question: "Varför returnerar du ny array?",
          answer:
            "Det gör funktionen enklare att använda med state eftersom jag inte muterar den gamla listan.",
        },
        {
          question: "Vad händer om id:t saknas?",
          answer: "Då lägger jag till id:t sist i en ny array med spread.",
        },
      ],
    },
    {
      id: "update-object-in-array",
      category: "JavaScript",
      prompt:
        "Skriv en funktion som uppdaterar namnet på en todo utan att mutera original-arrayen.",
      starterCode: `const todos = [
  { id: 1, text: "Read docs", done: false },
  { id: 2, text: "Build component", done: false },
];

function updateTodoText(todos, todoId, nextText) {
  // Skriv din lösning här.
}

console.log(updateTodoText(todos, 2, "Build form"));`,
      hints: [
        "Du behöver gå igenom alla todos.",
        "map passar eftersom listan ska ha samma längd efteråt.",
        "Bara todo med matchande id ska ändras.",
        "Spread kan kopiera objektet och byta text.",
      ],
      solution: `const todos = [
  { id: 1, text: "Read docs", done: false },
  { id: 2, text: "Build component", done: false },
];

function updateTodoText(todos, todoId, nextText) {
  return todos.map((todo) =>
    todo.id === todoId ? { ...todo, text: nextText } : todo
  );
}

console.log(updateTodoText(todos, 2, "Build form"));`,
      followUps: [
        {
          question: "Varför map här?",
          answer:
            "Jag vill behålla alla todos men byta ut ett item när id:t matchar.",
        },
        {
          question: "Varför spread på objektet?",
          answer:
            "Då behåller jag övriga fält och ändrar bara text.",
        },
      ],
    },
    {
      id: "group-by-category",
      category: "JavaScript",
      prompt:
        "Skriv en funktion som grupperar produkter efter kategori.",
      starterCode: `const products = [
  { id: 1, name: "Laptop", category: "Tech" },
  { id: 2, name: "Shoes", category: "Fashion" },
  { id: 3, name: "Phone", category: "Tech" },
];

function groupByCategory(products) {
  // Skriv din lösning här.
}

console.log(groupByCategory(products));`,
      hints: [
        "Resultatet kan vara ett objekt där varje key är en kategori.",
        "reduce passar när du bygger upp ett objekt steg för steg.",
        "Om kategorin saknas behöver du skapa en tom array först.",
        "Sedan pushar du in produkten i rätt kategori.",
      ],
      solution: `const products = [
  { id: 1, name: "Laptop", category: "Tech" },
  { id: 2, name: "Shoes", category: "Fashion" },
  { id: 3, name: "Phone", category: "Tech" },
];

function groupByCategory(products) {
  return products.reduce((groups, product) => {
    if (!groups[product.category]) {
      groups[product.category] = [];
    }

    groups[product.category].push(product);
    return groups;
  }, {});
}

console.log(groupByCategory(products));`,
      followUps: [
        {
          question: "Varför reduce här?",
          answer:
            "Jag bygger upp ett nytt objekt från listan, och reduce passar för den typen av ackumulering.",
        },
        {
          question: "Vad gör if-satsen?",
          answer:
            "Den ser till att kategorin har en array innan jag lägger in produkten.",
        },
      ],
    },
    {
      id: "flatten-array",
      category: "JavaScript",
      prompt:
        "Skriv en funktion som plattar till en nästlad array.",
      starterCode: `const values = [1, [2, [3]], 4];

function flattenArray(items) {
  // Skriv din lösning här.
}

console.log(flattenArray(values));`,
      hints: [
        "Du behöver gå igenom varje item i arrayen.",
        "Array.isArray kan kontrollera om item är en array.",
        "Om item är en array kan funktionen anropa sig själv.",
        "Om item inte är en array lägger du till värdet i resultatet.",
      ],
      solution: `const values = [1, [2, [3]], 4];

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

console.log(flattenArray(values));`,
      followUps: [
        {
          question: "Varför rekursion?",
          answer:
            "Eftersom varje item kan vara en ny array med samma problem igen.",
        },
        {
          question: "Vad gör spread här?",
          answer:
            "Den lägger in alla värden från den plattade under-arrayen i resultatet.",
        },
      ],
    },
    {
      id: "find-first-duplicate",
      category: "JavaScript",
      prompt:
        "Skriv en funktion som hittar första duplicerade värdet i en array.",
      starterCode: `const values = ["a", "b", "c", "b", "a"];

function findFirstDuplicate(values) {
  // Skriv din lösning här.
}

console.log(findFirstDuplicate(values));`,
      hints: [
        "Du behöver komma ihåg vilka värden du redan sett.",
        "Set passar för snabb kontroll av tidigare värden.",
        "Gå igenom värdena i ordning.",
        "Returnera direkt när ett värde redan finns i Set.",
      ],
      solution: `const values = ["a", "b", "c", "b", "a"];

function findFirstDuplicate(values) {
  const seen = new Set();

  for (const value of values) {
    if (seen.has(value)) {
      return value;
    }

    seen.add(value);
  }

  return null;
}

console.log(findFirstDuplicate(values));`,
      followUps: [
        {
          question: "Varför Set?",
          answer:
            "Set gör det enkelt att kontrollera om ett värde redan har dykt upp.",
        },
        {
          question: "Varför for...of?",
          answer:
            "Jag vill kunna returnera direkt när jag hittar första dupliceringen.",
        },
      ],
    },
    {
      id: "debounce-search",
      category: "JavaScript",
      prompt:
        "Skriv en debounce-funktion som väntar innan callbacken körs.",
      starterCode: `function debounce(callback, delay) {
  // Skriv din lösning här.
}

const search = debounce((query) => {
  console.log(query);
}, 300);

search("react");`,
      hints: [
        "Du behöver spara timer-id:t mellan anrop.",
        "Den returnerade funktionen behöver därför en closure.",
        "clearTimeout stoppar den tidigare timern.",
        "setTimeout startar en ny timer som kör callbacken senare.",
      ],
      solution: `function debounce(callback, delay) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const search = debounce((query) => {
  console.log(query);
}, 300);

search("react");`,
      followUps: [
        {
          question: "Varför closure?",
          answer:
            "Den returnerade funktionen behöver komma ihåg timeoutId mellan varje anrop.",
        },
        {
          question: "När används debounce?",
          answer:
            "Det passar till exempel i sökfält där jag vill vänta tills användaren slutat skriva.",
        },
      ],
    },
    {
      id: "promise-all-lite",
      category: "JavaScript",
      prompt:
        "Skriv en async-funktion som hämtar users och posts samtidigt och returnerar båda.",
      starterCode: `async function loadDashboard() {
  // Skriv din lösning här.
}`,
      hints: [
        "Båda anropen är oberoende av varandra.",
        "Då behöver du inte vänta på det första innan det andra startar.",
        "Promise.all kan köra flera promises parallellt.",
        "Destructuring kan ge tydliga namn på resultaten.",
      ],
      solution: `async function loadDashboard() {
  const [usersResponse, postsResponse] = await Promise.all([
    fetch("/api/users"),
    fetch("/api/posts"),
  ]);

  const [users, posts] = await Promise.all([
    usersResponse.json(),
    postsResponse.json(),
  ]);

  return { users, posts };
}`,
      followUps: [
        {
          question: "Varför Promise.all?",
          answer:
            "Anropen är oberoende, så de kan starta samtidigt och bli snabbare tillsammans.",
        },
        {
          question: "Vad händer om ett anrop misslyckas?",
          answer:
            "Promise.all rejectar, så i en riktig lösning hade jag lagt try/catch runt flödet.",
        },
      ],
    },
    {
      id: "react-controlled-input",
      category: "React",
      prompt:
        "Bygg en enkel React-komponent med ett inputfält som visar texten användaren skriver.",
      starterCode: `import { useState } from "react";

export default function NamePreview() {
  // Skapa state för texten här.

  return (
    <section className="practice-app">
      <input placeholder="Name" />
      <p>Texten ska visas här.</p>
    </section>
  );
}`,
      hints: [
        "Texten ändras av användaren.",
        "Därför behöver texten ligga i state.",
        "Inputfältets value ska vara state-värdet.",
        "onChange ska uppdatera state med event.target.value.",
      ],
      solution: `import { useState } from "react";

export default function NamePreview() {
  const [name, setName] = useState("");

  return (
    <section>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
      />
      <p>{name}</p>
    </section>
  );
}`,
      followUps: [
        {
          question: "Varför controlled input?",
          answer:
            "React äger värdet, så UI:t och state håller sig synkade hela tiden.",
        },
        {
          question: "Varför useState?",
          answer:
            "Namnet kan ändras när användaren skriver, och då behöver komponenten renderas om.",
        },
      ],
    },
    {
      id: "react-filter-list",
      category: "React",
      prompt:
        "Bygg en React-komponent som visar en lista och filtrerar den med ett sökfält.",
      starterCode: `import { useState } from "react";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Sara" },
];

export default function UserSearch() {
  // Skapa state för sökningen här.
  // Skapa visibleUsers från users och sökningen här.

  return (
    <section className="practice-app">
      <input placeholder="Search users" />

      {/* Rendera visibleUsers här. */}
    </section>
  );
}`,
      hints: [
        "Söktexten ändras av användaren och behöver state.",
        "Den synliga listan kan räknas ut från users och search.",
        "filter och includes räcker för sökningen.",
        "Rendera visibleUsers med map och använd user.id som key.",
      ],
      solution: `import { useState } from "react";

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Sara" },
];

export default function UserSearch() {
  const [search, setSearch] = useState("");

  const visibleUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search users"
      />

      {visibleUsers.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </section>
  );
}`,
      followUps: [
        {
          question: "Varför sparar du bara search i state?",
          answer:
            "Listan som visas kan räknas ut från users och search, så den behöver inte egen state.",
        },
        {
          question: "Varför key på user.id?",
          answer:
            "React behöver en stabil key för att känna igen varje rad när listan ändras.",
        },
      ],
    },
    {
      id: "react-modal-toggle",
      category: "React",
      prompt: "Bygg en komponent som kan öppna och stänga en modal.",
      starterCode: `import { useState } from "react";

export default function ModalExample() {
  // Skapa state för om modalen är öppen här.

  return (
    <section className="practice-app">
      <button>Open modal</button>

      {/* Rendera modalen här när den är öppen. */}
    </section>
  );
}`,
      hints: [
        "Modalen har två lägen: öppen eller stängd.",
        "Ett boolean-state passar för det.",
        "Knappen öppnar modalen genom att sätta state till true.",
        "Rendera modalen villkorligt när state är true.",
      ],
      solution: `import { useState } from "react";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section>
      <button onClick={() => setIsOpen(true)}>Open modal</button>

      {isOpen && (
        <div role="dialog" aria-modal="true">
          <p>Modal content</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </div>
      )}
    </section>
  );
}`,
      followUps: [
        {
          question: "Varför boolean-state?",
          answer: "Modalen har två tydliga lägen: öppen eller stängd.",
        },
        {
          question: "Varför role dialog?",
          answer:
            "Det gör syftet tydligare för hjälpmedel och är en bra start för tillgänglighet.",
        },
      ],
    },
    {
      id: "react-list-key",
      category: "React",
      prompt: "Rendera en lista med produkter och använd en stabil key.",
      starterCode: `const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
];

export default function ProductList() {
  return (
    <section className="practice-app">
      {/* Rendera products med map här. */}
    </section>
  );
}`,
      hints: [
        "Varje produkt ska bli JSX.",
        "map passar när data ska renderas som lista.",
        "key ska sitta på yttersta elementet i map-resultatet.",
        "Använd product.id eftersom det är stabilt.",
      ],
      solution: `const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
];

export default function ProductList() {
  return (
    <section>
      {products.map((product) => (
        <article key={product.id}>
          <h2>{product.name}</h2>
        </article>
      ))}
    </section>
  );
}`,
      followUps: [
        {
          question: "Varför inte index som key?",
          answer:
            "Ett id är stabilare om listan ändras, sorteras eller filtreras.",
        },
        {
          question: "Varför map?",
          answer:
            "map låter mig översätta varje objekt i datan till ett element i UI:t.",
        },
      ],
    },
    {
      id: "react-form-validation",
      category: "React",
      prompt: "Bygg ett formulär som visar fel om email saknar @.",
      starterCode: `import { useState } from "react";

export default function EmailForm() {
  // Skapa state för email här.
  // Räkna ut om email är invalid här.

  return (
    <form className="practice-app">
      <input placeholder="Email" />
      {/* Visa feltext här när email är invalid. */}
    </form>
  );
}`,
      hints: [
        "Email-värdet ändras av användaren.",
        "Spara email i state.",
        "Felet kan räknas ut från email-värdet.",
        "Visa feltexten villkorligt med &&.",
      ],
      solution: `import { useState } from "react";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const isInvalid = email.length > 0 && !email.includes("@");

  return (
    <form>
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
      {isInvalid && <p>Email must include @.</p>}
    </form>
  );
}`,
      followUps: [
        {
          question: "Varför räknas felet ut?",
          answer:
            "Felet beror direkt på email-värdet, så jag behöver inte spara det separat.",
        },
        {
          question: "När visas felet?",
          answer:
            "Jag visar det först när användaren har skrivit något och värdet saknar @.",
        },
      ],
    },
    {
      id: "react-toggle-item",
      category: "React",
      prompt:
        "Bygg en React-komponent som togglar om en todo är klar när användaren klickar.",
      starterCode: `import { useState } from "react";

const initialTodos = [
  { id: 1, text: "Read docs", done: false },
  { id: 2, text: "Build component", done: true },
];

export default function TodoList() {
  // Lägg initialTodos i state här.
  // Skapa toggle-funktionen här.

  return (
    <section className="practice-app">
      {/* Rendera todos som knappar här. */}
    </section>
  );
}`,
      hints: [
        "Todos behöver ligga i state eftersom de ändras.",
        "När ett item ändras ska du skapa en ny array.",
        "map passar eftersom listan ska ha samma längd.",
        "Byt bara done på todo med matchande id.",
      ],
      solution: `import { useState } from "react";

const initialTodos = [
  { id: 1, text: "Read docs", done: false },
  { id: 2, text: "Build component", done: true },
];

export default function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  function toggleTodo(todoId) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  return (
    <section>
      {todos.map((todo) => (
        <button key={todo.id} onClick={() => toggleTodo(todo.id)}>
          {todo.done ? "Done" : "Todo"}: {todo.text}
        </button>
      ))}
    </section>
  );
}`,
      followUps: [
        {
          question: "Varför funktion i setTodos?",
          answer:
            "Då utgår jag från senaste state-värdet, vilket är säkrare när nästa state bygger på föregående.",
        },
        {
          question: "Varför map?",
          answer:
            "Jag vill behålla hela listan men byta ut den todo som matchar id:t.",
        },
      ],
    },
    {
      id: "react-useeffect-fetch",
      category: "React",
      prompt:
        "Bygg en React-komponent som hämtar users när komponenten mountas och visar loading.",
      starterCode: `import { useEffect, useState } from "react";

export default function Users() {
  // Skapa state för users och loading här.
  // Hämta data i useEffect här.

  return (
    <section className="practice-app">
      {/* Visa loading eller user-listan här. */}
    </section>
  );
}`,
      hints: [
        "Datan kommer från något utanför renderingen.",
        "useEffect passar för fetch när komponenten mountas.",
        "Du behöver state för users och loading.",
        "Sätt loading till false när hämtningen är klar.",
      ],
      solution: `import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadUsers() {
      const response = await fetch("/api/users");
      const data = await response.json();

      setUsers(data);
      setIsLoading(false);
    }

    loadUsers();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return users.map((user) => <p key={user.id}>{user.name}</p>);
}`,
      followUps: [
        {
          question: "Varför useEffect?",
          answer:
            "Fetch är en sidoeffekt eftersom den synkar komponenten med data utanför renderingen.",
        },
        {
          question: "Vad saknas för produktion?",
          answer:
            "Jag hade lagt till error state, response.ok och eventuellt abort om komponenten försvinner.",
        },
      ],
    },
    {
      id: "vue-counter-ref",
      category: "Vue",
      prompt:
        "Bygg en Vue-komponent med en counter som ökar när användaren klickar.",
      starterCode: `<script setup>
// Importera ref här.
// Skapa count och increment här.
</script>

<template>
  <button>
    Count: 0
  </button>
</template>`,
      hints: [
        "I Vue Composition API används ref för värden som kan ändras.",
        "Importera ref från vue.",
        "I scriptet ändras värdet med count.value.",
        "I templaten kan du skriva count direkt.",
      ],
      solution: `<script setup>
import { ref } from "vue";

const count = ref(0);

function increment() {
  count.value += 1;
}
</script>

<template>
  <button @click="increment">
    Count: {{ count }}
  </button>
</template>`,
      followUps: [
        {
          question: "Varför ref här?",
          answer:
            "count kan ändras av användaren och Vue behöver reagera när värdet uppdateras.",
        },
        {
          question: "Varför count.value i script?",
          answer:
            "ref wrapper värdet i ett objekt, så i JavaScript behöver jag läsa och skriva via value.",
        },
      ],
    },
    {
      id: "vue-search-computed",
      category: "Vue",
      prompt:
        "Bygg en Vue-komponent som filtrerar en lista med users via ett sökfält.",
      starterCode: `<script setup>
// Importera computed och ref här.

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Sara" },
];

// Skapa search och visibleUsers här.
</script>

<template>
  <input placeholder="Search users" />

  <!-- Rendera visibleUsers här. -->
</template>`,
      hints: [
        "Söktexten ändras av användaren och kan ligga i ref.",
        "Listan som visas kan räknas ut från users och search.",
        "computed passar för data som härleds från annan reactive data.",
        "v-model kopplar inputfältet till search.",
      ],
      solution: `<script setup>
import { computed, ref } from "vue";

const search = ref("");
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Sara" },
];

const visibleUsers = computed(() =>
  users.filter((user) =>
    user.name.toLowerCase().includes(search.value.toLowerCase())
  )
);
</script>

<template>
  <input v-model="search" placeholder="Search users" />

  <p v-for="user in visibleUsers" :key="user.id">
    {{ user.name }}
  </p>
</template>`,
      followUps: [
        {
          question: "Varför computed?",
          answer:
            "visibleUsers beror på search och users, så Vue kan räkna om listan när sökningen ändras.",
        },
        {
          question: "Varför :key?",
          answer:
            "Vue behöver en stabil key för att känna igen varje rad när listan ändras.",
        },
      ],
    },
    {
      id: "vue-form-validation",
      category: "Vue",
      prompt:
        "Bygg ett Vue-formulär som visar fel om email saknar @.",
      starterCode: `<script setup>
// Importera computed och ref här.
// Skapa email och isInvalid här.
</script>

<template>
  <form>
    <input placeholder="Email" />
    <!-- Visa feltext här när email är invalid. -->
  </form>
</template>`,
      hints: [
        "Email ändras av användaren och kan ligga i ref.",
        "Felet kan räknas ut från email-värdet.",
        "computed passar för isInvalid.",
        "v-if kan visa feltexten villkorligt.",
      ],
      solution: `<script setup>
import { computed, ref } from "vue";

const email = ref("");
const isInvalid = computed(
  () => email.value.length > 0 && !email.value.includes("@")
);
</script>

<template>
  <form>
    <input v-model="email" placeholder="Email" />
    <p v-if="isInvalid">Email must include @.</p>
  </form>
</template>`,
      followUps: [
        {
          question: "Varför v-model?",
          answer:
            "v-model kopplar inputfältets värde till email så datan och UI:t hålls synkade.",
        },
        {
          question: "Varför räknas felet ut?",
          answer:
            "Felet beror direkt på email, så det behöver inte sparas som separat state.",
        },
      ],
    },
    {
      id: "angular-counter",
      category: "Angular",
      prompt:
        "Bygg en Angular-komponent med en counter som ökar när användaren klickar.",
      starterCode: `// counter.component.ts
export class CounterComponent {
  // Skapa count och increment här.
}

// counter.component.html
<button>
  Count: {{ count }}
</button>`,
      hints: [
        "I Angular kan component class hålla state.",
        "Skapa en count-property.",
        "Skapa en metod som ökar count.",
        "I templaten används (click) för event och {{ }} för visning.",
      ],
      solution: `// counter.component.ts
export class CounterComponent {
  count = 0;

  increment() {
    this.count += 1;
  }
}

// counter.component.html
<button (click)="increment()">
  Count: {{ count }}
</button>`,
      followUps: [
        {
          question: "Varför ligger count i component class?",
          answer:
            "Det är komponentens state och templaten kan läsa värdet direkt därifrån.",
        },
        {
          question: "Varför (click)?",
          answer:
            "Det är Angulars event binding och kopplar klicket till metoden i komponenten.",
        },
      ],
    },
    {
      id: "angular-search-list",
      category: "Angular",
      prompt:
        "Bygg en Angular-komponent som filtrerar users via ett sökfält.",
      starterCode: `// user-search.component.ts
export class UserSearchComponent {
  search = "";
  users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Sara" },
  ];

  // Skapa visibleUsers-getter här.
}

// user-search.component.html
<input placeholder="Search users" />

<!-- Rendera visibleUsers här. -->`,
      hints: [
        "Söktexten kan ligga som en property i component class.",
        "users kan vara en array i komponenten.",
        "En getter kan räkna ut visibleUsers.",
        "[(ngModel)] kopplar inputfältet till search.",
      ],
      solution: `// user-search.component.ts
export class UserSearchComponent {
  search = "";
  users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Alex" },
    { id: 3, name: "Sara" },
  ];

  get visibleUsers() {
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}

// user-search.component.html
<input [(ngModel)]="search" placeholder="Search users" />

<p *ngFor="let user of visibleUsers">
  {{ user.name }}
</p>`,
      followUps: [
        {
          question: "Varför getter?",
          answer:
            "visibleUsers beror på search och users, så den kan räknas ut när templaten behöver den.",
        },
        {
          question: "Vad kräver ngModel?",
          answer:
            "I en riktig Angular-modul behöver FormsModule vara importerat.",
        },
      ],
    },
    {
      id: "angular-form-validation",
      category: "Angular",
      prompt:
        "Bygg ett enkelt Angular-formulär som visar fel om email saknar @.",
      starterCode: `// email-form.component.ts
export class EmailFormComponent {
  email = "";

  // Skapa isInvalid-getter här.
}

// email-form.component.html
<form>
  <input placeholder="Email" />
  <!-- Visa feltext här när email är invalid. -->
</form>`,
      hints: [
        "Email kan ligga som en property i component class.",
        "En getter kan räkna ut om värdet är invalid.",
        "[(ngModel)] kopplar inputfältet till email.",
        "*ngIf visar feltexten när villkoret är sant.",
      ],
      solution: `// email-form.component.ts
export class EmailFormComponent {
  email = "";

  get isInvalid() {
    return this.email.length > 0 && !this.email.includes("@");
  }
}

// email-form.component.html
<form>
  <input [(ngModel)]="email" placeholder="Email" />
  <p *ngIf="isInvalid">Email must include @.</p>
</form>`,
      followUps: [
        {
          question: "Varför getter för isInvalid?",
          answer:
            "Felet beror direkt på email, så det kan räknas ut istället för att sparas separat.",
        },
        {
          question: "Varför *ngIf?",
          answer:
            "Det gör att feltexten bara renderas när formuläret faktiskt är invalid.",
        },
      ],
    },
  ],
};
