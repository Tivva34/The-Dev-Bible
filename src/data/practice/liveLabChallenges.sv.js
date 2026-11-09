export const liveLabChallenge = {
  id: "live-lab",
  type: "live-lab",
  title: "Random live lab drill",
  difficulty: "Preview",
  estimatedTime: "10-20 min",
  description: "Random logic och styling med live preview.",
  challenges: [
    {
      id: "logic-counter",
      category: "Logik",
      prompt:
        "Gör så att knappen ökar räknaren och att reset-knappen nollställer värdet.",
      html: `<main class="app">
  <h1>Counter</h1>
  <p id="count">0</p>
  <div class="actions">
    <button id="increase">Increase</button>
    <button id="reset">Reset</button>
  </div>
</main>`,
      css: `.app {
  display: grid;
  gap: 1rem;
  place-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

#count {
  font-size: 3rem;
  font-weight: 800;
}`,
      js: `const countElement = document.querySelector("#count");
const increaseButton = document.querySelector("#increase");
const resetButton = document.querySelector("#reset");

// Skriv din lösning här.`,
      solutionJs: `const countElement = document.querySelector("#count");
const increaseButton = document.querySelector("#increase");
const resetButton = document.querySelector("#reset");

let count = 0;

function renderCount() {
  countElement.textContent = count;
}

increaseButton.addEventListener("click", () => {
  count += 1;
  renderCount();
});

resetButton.addEventListener("click", () => {
  count = 0;
  renderCount();
});`,
      hints: [
        "Du behöver ett värde som håller reda på count.",
        "Knapparna behöver varsin event listener.",
        "När count ändras behöver textContent uppdateras.",
      ],
    },
    {
      id: "logic-filter-list",
      category: "Logik",
      prompt:
        "Gör så att inputfältet filtrerar listan medan användaren skriver.",
      html: `<main class="app">
  <h1>Users</h1>
  <input id="search" placeholder="Search users" />
  <ul id="users"></ul>
</main>`,
      css: `.app {
  display: grid;
  gap: 0.75rem;
  max-width: 420px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
}

input {
  padding: 0.7rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
}`,
      js: `const users = ["Alice", "Alex", "Sara", "Mira"];
const searchInput = document.querySelector("#search");
const usersList = document.querySelector("#users");

// Skriv din lösning här.`,
      solutionJs: `const users = ["Alice", "Alex", "Sara", "Mira"];
const searchInput = document.querySelector("#search");
const usersList = document.querySelector("#users");

function renderUsers(search = "") {
  const visibleUsers = users.filter((user) =>
    user.toLowerCase().includes(search.toLowerCase())
  );

  usersList.innerHTML = visibleUsers
    .map((user) => \`<li>\${user}</li>\`)
    .join("");
}

searchInput.addEventListener("input", (event) => {
  renderUsers(event.target.value);
});

renderUsers();`,
      hints: [
        "Börja med en render-funktion som skriver ut hela listan.",
        "filter och includes passar för sökningen.",
        "Lyssna på input-eventet för att uppdatera medan användaren skriver.",
      ],
    },
    {
      id: "styling-product-card",
      category: "Styling",
      prompt:
        "Styla kortet så det känns som en tydlig produktkomponent med bildyta, pris och knapp.",
      html: `<main class="page">
  <article class="product-card">
    <div class="product-image">Image</div>
    <h1>Laptop Pro</h1>
    <p class="price">$1200</p>
    <button>Add to cart</button>
  </article>
</main>`,
      css: `.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

/* Skriv din styling här. */`,
      js: `// Den här uppgiften fokuserar på HTML och CSS.`,
      solutionCss: `.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

.product-card {
  display: grid;
  gap: 0.75rem;
  width: min(100%, 320px);
  padding: 1rem;
  background: white;
  border: 1px solid #dbe3ef;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
}

.product-image {
  display: grid;
  place-items: center;
  aspect-ratio: 16 / 10;
  border-radius: 8px;
  color: #0f172a;
  background: #dbeafe;
  font-weight: 800;
}

.product-card h1 {
  margin: 0;
  font-size: 1.15rem;
}

.price {
  margin: 0;
  font-weight: 800;
}

.product-card button {
  min-height: 2.5rem;
  border: 0;
  border-radius: 8px;
  color: white;
  background: #2563eb;
  font-weight: 800;
}`,
      hints: [
        "Börja med kortets layout: display grid och gap.",
        "Ge bildytan en stabil aspect-ratio.",
        "Knappen behöver tydlig färg, höjd och border-radius.",
      ],
    },
    {
      id: "styling-responsive-grid",
      category: "Styling",
      prompt:
        "Gör listan responsiv så korten ligger i ett kompakt grid som anpassar sig efter bredden.",
      html: `<main class="page">
  <section class="card-grid">
    <article>React</article>
    <article>Vue</article>
    <article>Angular</article>
    <article>JavaScript</article>
  </section>
</main>`,
      css: `.page {
  min-height: 100vh;
  padding: 1rem;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

/* Skriv din grid-styling här. */`,
      js: `// Den här uppgiften fokuserar på CSS grid.`,
      solutionCss: `.page {
  min-height: 100vh;
  padding: 1rem;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
  max-width: 760px;
  margin: 0 auto;
}

.card-grid article {
  padding: 1rem;
  min-height: 6rem;
  border: 1px solid #dbe3ef;
  border-radius: 10px;
  background: white;
  font-weight: 800;
}`,
      hints: [
        "Grid ska ligga på wrappern, inte på varje kort.",
        "repeat(auto-fit, minmax(...)) passar när antalet kolumner ska anpassa sig.",
        "Ge korten padding och min-height så previewn blir tydlig.",
      ],
    },
    {
      id: "logic-todo-list",
      category: "Logik",
      prompt:
        "Gör så att användaren kan lägga till todos och ta bort en todo från listan.",
      html: `<main class="app">
  <h1>Todos</h1>
  <form id="todo-form">
    <input id="todo-input" placeholder="New todo" />
    <button>Add</button>
  </form>
  <ul id="todo-list"></ul>
</main>`,
      css: `.app {
  display: grid;
  gap: 0.75rem;
  max-width: 420px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
}

form {
  display: flex;
  gap: 0.5rem;
}

input,
button {
  min-height: 2.4rem;
  padding: 0.55rem 0.7rem;
}`,
      js: `const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");

const todos = [];

// Skriv din lösning här.`,
      solutionJs: `const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");

const todos = [];

function renderTodos() {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const item = document.createElement("li");
    const button = document.createElement("button");

    item.textContent = todo.text;
    button.textContent = "Remove";
    button.addEventListener("click", () => {
      const index = todos.findIndex((item) => item.id === todo.id);
      todos.splice(index, 1);
      renderTodos();
    });

    item.append(button);
    list.append(item);
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!input.value.trim()) return;

  todos.push({ id: Date.now(), text: input.value });
  input.value = "";
  renderTodos();
});`,
      hints: [
        "Börja med en render-funktion som ritar om listan.",
        "Formuläret behöver preventDefault så sidan inte laddas om.",
        "Spara varje todo som objekt med id och text.",
        "Ta bort rätt todo genom att jämföra id.",
      ],
    },
    {
      id: "logic-tabs",
      category: "Logik",
      prompt:
        "Gör så att tab-knapparna byter aktiv panel och markerar vald knapp.",
      html: `<main class="app">
  <div class="tabs">
    <button class="tab is-active" data-tab="html">HTML</button>
    <button class="tab" data-tab="css">CSS</button>
    <button class="tab" data-tab="js">JavaScript</button>
  </div>
  <section id="panel">HTML controls the structure.</section>
</main>`,
      css: `.app {
  display: grid;
  gap: 1rem;
  max-width: 520px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
}

.tabs {
  display: flex;
  gap: 0.5rem;
}

.tab.is-active {
  color: white;
  background: #2563eb;
}`,
      js: `const tabs = document.querySelectorAll(".tab");
const panel = document.querySelector("#panel");

const content = {
  html: "HTML controls the structure.",
  css: "CSS controls the layout and style.",
  js: "JavaScript controls interaction.",
};

// Skriv din lösning här.`,
      solutionJs: `const tabs = document.querySelectorAll(".tab");
const panel = document.querySelector("#panel");

const content = {
  html: "HTML controls the structure.",
  css: "CSS controls the layout and style.",
  js: "JavaScript controls interaction.",
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    panel.textContent = content[tab.dataset.tab];
  });
});`,
      hints: [
        "Varje knapp har data-tab som pekar på rätt innehåll.",
        "När en knapp klickas behöver alla andra knappar tappa is-active.",
        "Panelens text kan hämtas från content-objektet.",
      ],
    },
    {
      id: "logic-accordion",
      category: "Logik",
      prompt:
        "Gör så att varje fråga kan öppnas och stängas som en accordion.",
      html: `<main class="app">
  <h1>FAQ</h1>
  <article class="faq-item">
    <button class="faq-question">What is React?</button>
    <p class="faq-answer">A UI library.</p>
  </article>
  <article class="faq-item">
    <button class="faq-question">What is state?</button>
    <p class="faq-answer">Data that can change.</p>
  </article>
</main>`,
      css: `.app {
  display: grid;
  gap: 0.75rem;
  max-width: 520px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
}

.faq-answer {
  display: none;
}

.faq-item.is-open .faq-answer {
  display: block;
}`,
      js: `const questions = document.querySelectorAll(".faq-question");

// Skriv din lösning här.`,
      solutionJs: `const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.closest(".faq-item");
    item.classList.toggle("is-open");
  });
});`,
      hints: [
        "Klicket sitter på knappen.",
        "closest kan hitta article-wrappern.",
        "CSS visar svaret när wrappern har is-open.",
      ],
    },
    {
      id: "logic-theme-toggle",
      category: "Logik",
      prompt:
        "Gör så att knappen togglar dark mode på sidan och ändrar knapptexten.",
      html: `<main class="app">
  <h1>Theme toggle</h1>
  <p>Click the button to switch theme.</p>
  <button id="theme-button">Dark mode</button>
</main>`,
      css: `body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
  color: #0f172a;
}

body.dark {
  background: #0f172a;
  color: #f8fafc;
}

.app {
  display: grid;
  gap: 0.75rem;
  place-items: center;
  min-height: 100vh;
}`,
      js: `const button = document.querySelector("#theme-button");

// Skriv din lösning här.`,
      solutionJs: `const button = document.querySelector("#theme-button");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  button.textContent = isDark ? "Light mode" : "Dark mode";
});`,
      hints: [
        "Dark mode kan styras med en klass på body.",
        "classList.toggle växlar klassen av och på.",
        "contains kan avgöra vilken knapptext som ska visas.",
      ],
    },
    {
      id: "styling-login-form",
      category: "Styling",
      prompt:
        "Styla formuläret så det blir en tydlig login-panel med labels, inputs och knapp.",
      html: `<main class="page">
  <form class="login-form">
    <h1>Log in</h1>
    <label>
      Email
      <input placeholder="user@example.com" />
    </label>
    <label>
      Password
      <input type="password" placeholder="Password" />
    </label>
    <button>Log in</button>
  </form>
</main>`,
      css: `.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: Arial, sans-serif;
  background: #eef2ff;
}

/* Skriv din form-styling här. */`,
      js: `// Den här uppgiften fokuserar på CSS.`,
      solutionCss: `.page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: Arial, sans-serif;
  background: #eef2ff;
}

.login-form {
  display: grid;
  gap: 0.85rem;
  width: min(100%, 340px);
  padding: 1rem;
  background: white;
  border: 1px solid #dbe3ef;
  border-radius: 12px;
}

.login-form h1 {
  margin: 0;
  font-size: 1.35rem;
}

.login-form label {
  display: grid;
  gap: 0.35rem;
  font-weight: 700;
}

.login-form input,
.login-form button {
  min-height: 2.5rem;
  padding: 0.55rem 0.7rem;
  border-radius: 8px;
}

.login-form input {
  border: 1px solid #cbd5e1;
}

.login-form button {
  border: 0;
  color: white;
  background: #2563eb;
  font-weight: 800;
}`,
      hints: [
        "Formuläret behöver en maxbredd så det inte blir för brett.",
        "Labels blir tydligare med display grid och gap.",
        "Input och button bör ha samma höjd och radius.",
      ],
    },
    {
      id: "styling-navbar",
      category: "Styling",
      prompt:
        "Styla navigationen så logotyp, länkar och knapp ligger på en kompakt rad.",
      html: `<header class="navbar">
  <strong>DevPrep</strong>
  <nav>
    <a href="#">Questions</a>
    <a href="#">Live coding</a>
    <a href="#">Training</a>
  </nav>
  <button>Start</button>
</header>`,
      css: `body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

/* Skriv din navbar-styling här. */`,
      js: `// Den här uppgiften fokuserar på layout och CSS.`,
      solutionCss: `body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

.navbar {
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1rem;
  align-items: center;
  padding: 0.75rem 1rem;
  background: white;
  border-bottom: 1px solid #dbe3ef;
}

.navbar nav {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
}

.navbar a {
  color: #334155;
  text-decoration: none;
  font-weight: 700;
}

.navbar button {
  min-height: 2.2rem;
  padding: 0.45rem 0.75rem;
  color: white;
  background: #0f172a;
  border: 0;
  border-radius: 8px;
  font-weight: 800;
}`,
      hints: [
        "Headern kan vara grid med tre kolumner.",
        "Nav-länkarna kan ligga i flex.",
        "Knappen ska ha egen bakgrund så den blir tydlig.",
      ],
    },
    {
      id: "styling-modal-overlay",
      category: "Styling",
      prompt:
        "Styla modalen med overlay, centrerad dialog och tydliga actions.",
      html: `<div class="overlay">
  <section class="modal">
    <h1>Delete item?</h1>
    <p>This action cannot be undone.</p>
    <div class="modal-actions">
      <button class="secondary">Cancel</button>
      <button class="danger">Delete</button>
    </div>
  </section>
</div>`,
      css: `body {
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Skriv din modal-styling här. */`,
      js: `// Den här uppgiften fokuserar på overlay och modal-CSS.`,
      solutionCss: `body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.overlay {
  display: grid;
  place-items: center;
  min-height: 100vh;
  padding: 1rem;
  background: rgba(15, 23, 42, 0.65);
}

.modal {
  display: grid;
  gap: 0.75rem;
  width: min(100%, 360px);
  padding: 1rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.25);
}

.modal h1,
.modal p {
  margin: 0;
}

.modal-actions {
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.modal button {
  min-height: 2.35rem;
  padding: 0.5rem 0.75rem;
  border: 0;
  border-radius: 8px;
  font-weight: 800;
}

.secondary {
  background: #e2e8f0;
}

.danger {
  color: white;
  background: #dc2626;
}`,
      hints: [
        "Overlayn ska täcka hela viewporten.",
        "place-items center kan centrera modalen.",
        "Actions blir tydligare med flex och justify-content flex-end.",
      ],
    },
    {
      id: "styling-stats-cards",
      category: "Styling",
      prompt:
        "Styla stats-korten så de blir scanbara dashboard-kort i ett responsivt grid.",
      html: `<main class="dashboard">
  <article class="stat-card">
    <span>Users</span>
    <strong>1280</strong>
  </article>
  <article class="stat-card">
    <span>Orders</span>
    <strong>342</strong>
  </article>
  <article class="stat-card">
    <span>Revenue</span>
    <strong>$18k</strong>
  </article>
</main>`,
      css: `body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

/* Skriv din dashboard-styling här. */`,
      js: `// Den här uppgiften fokuserar på responsiv dashboard-styling.`,
      solutionCss: `body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 0.75rem;
  max-width: 760px;
  margin: 2rem auto;
  padding: 1rem;
}

.stat-card {
  display: grid;
  gap: 0.45rem;
  padding: 1rem;
  background: white;
  border: 1px solid #dbe3ef;
  border-radius: 10px;
}

.stat-card span {
  color: #64748b;
  font-size: 0.8rem;
  font-weight: 700;
}

.stat-card strong {
  color: #0f172a;
  font-size: 1.6rem;
}`,
      hints: [
        "Wrappern ska vara grid med auto-fit.",
        "Korten behöver tydlig padding och border.",
        "Label och värde bör ha olika storlek och färg.",
      ],
    },
    {
      id: "react-counter-component",
      framework: "React",
      category: "Logik",
      prompt:
        "Bygg en React-counter där knappen ökar värdet och reset återställer till 0.",
      html: `<main class="preview-app">
  <h1>Counter</h1>
  <p>0</p>
  <div class="actions">
    <button>Increase</button>
    <button>Reset</button>
  </div>
</main>`,
      previewHtml: `<main class="preview-app">
  <h1>Counter</h1>
  <p>0</p>
  <div class="actions">
    <button>Increase</button>
    <button>Reset</button>
  </div>
</main>`,
      css: `.preview-app {
  display: grid;
  gap: 0.75rem;
  place-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}`,
      js: `import { useState } from "react";

export default function Counter() {
  // Skapa count-state här.

  return (
    <main className="preview-app">
      <h1>Counter</h1>
      <p>0</p>
      <div className="actions">
        <button>Increase</button>
        <button>Reset</button>
      </div>
    </main>
  );
}`,
      solutionJs: `import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <main className="preview-app">
      <h1>Counter</h1>
      <p>{count}</p>
      <div className="actions">
        <button onClick={() => setCount(count + 1)}>Increase</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </main>
  );
}`,
      hints: [
        "count ändras av användaren, så det behöver useState.",
        "Increase-knappen ska använda setCount.",
        "Reset kan sätta värdet direkt till 0.",
      ],
    },
    {
      id: "react-product-card-style",
      framework: "React",
      category: "Styling",
      prompt:
        "Styla React-komponenten som ett tydligt produktkort med bildyta och knapp.",
      html: `<article class="product-card">
  <div class="product-image">Image</div>
  <h1>Laptop Pro</h1>
  <p>$1200</p>
  <button>Add to cart</button>
</article>`,
      previewHtml: `<article class="product-card">
  <div class="product-image">Image</div>
  <h1>Laptop Pro</h1>
  <p>$1200</p>
  <button>Add to cart</button>
</article>`,
      css: `body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

/* Skriv kortets styling här. */`,
      js: `export default function ProductCard() {
  return (
    <article className="product-card">
      <div className="product-image">Image</div>
      <h1>Laptop Pro</h1>
      <p>$1200</p>
      <button>Add to cart</button>
    </article>
  );
}`,
      solutionCss: `body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

.product-card {
  display: grid;
  gap: 0.75rem;
  width: min(100%, 320px);
  padding: 1rem;
  background: white;
  border: 1px solid #dbe3ef;
  border-radius: 12px;
}

.product-image {
  display: grid;
  place-items: center;
  aspect-ratio: 16 / 10;
  border-radius: 8px;
  background: #dbeafe;
}

.product-card button {
  min-height: 2.5rem;
  color: white;
  background: #2563eb;
  border: 0;
  border-radius: 8px;
  font-weight: 800;
}`,
      hints: [
        "CSS:en ska matcha klassnamnen i JSX.",
        "Börja med .product-card som grid.",
        "Ge bildytan aspect-ratio så layouten blir stabil.",
      ],
    },
    {
      id: "vue-counter-component",
      framework: "Vue",
      category: "Logik",
      prompt: "Bygg en Vue-counter med ref, increment och reset.",
      html: `<main class="preview-app">
  <h1>Counter</h1>
  <p>0</p>
  <div class="actions">
    <button>Increase</button>
    <button>Reset</button>
  </div>
</main>`,
      previewHtml: `<main class="preview-app">
  <h1>Counter</h1>
  <p>0</p>
  <div class="actions">
    <button>Increase</button>
    <button>Reset</button>
  </div>
</main>`,
      css: `.preview-app {
  display: grid;
  gap: 0.75rem;
  place-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}`,
      js: `<script setup>
// Importera ref här.
// Skapa count, increment och reset här.
</script>

<template>
  <main class="preview-app">
    <h1>Counter</h1>
    <p>0</p>
    <div class="actions">
      <button>Increase</button>
      <button>Reset</button>
    </div>
  </main>
</template>`,
      solutionJs: `<script setup>
import { ref } from "vue";

const count = ref(0);

function increment() {
  count.value += 1;
}

function reset() {
  count.value = 0;
}
</script>

<template>
  <main class="preview-app">
    <h1>Counter</h1>
    <p>{{ count }}</p>
    <div class="actions">
      <button @click="increment">Increase</button>
      <button @click="reset">Reset</button>
    </div>
  </main>
</template>`,
      hints: [
        "Vue använder ref för värden som kan ändras.",
        "I scriptet ändras ref med count.value.",
        "I templaten används @click för event.",
      ],
    },
    {
      id: "vue-tabs-style",
      framework: "Vue",
      category: "Styling",
      prompt:
        "Styla Vue-tabs så knapparna känns klickbara och aktiv tab är tydlig.",
      html: `<section class="tabs-card">
  <div class="tabs">
    <button class="is-active">Profile</button>
    <button>Settings</button>
    <button>Billing</button>
  </div>
  <p>Profile content</p>
</section>`,
      previewHtml: `<section class="tabs-card">
  <div class="tabs">
    <button class="is-active">Profile</button>
    <button>Settings</button>
    <button>Billing</button>
  </div>
  <p>Profile content</p>
</section>`,
      css: `body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

/* Skriv tabs-styling här. */`,
      js: `<template>
  <section class="tabs-card">
    <div class="tabs">
      <button class="is-active">Profile</button>
      <button>Settings</button>
      <button>Billing</button>
    </div>
    <p>Profile content</p>
  </section>
</template>`,
      solutionCss: `body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

.tabs-card {
  display: grid;
  gap: 0.75rem;
  width: min(100%, 420px);
  padding: 1rem;
  background: white;
  border: 1px solid #dbe3ef;
  border-radius: 12px;
}

.tabs {
  display: flex;
  gap: 0.5rem;
}

.tabs button {
  min-height: 2.3rem;
  padding: 0.45rem 0.7rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  background: white;
}

.tabs .is-active {
  color: white;
  background: #2563eb;
  border-color: #2563eb;
}`,
      hints: [
        "Styla wrappern först.",
        "Tabs-raden passar bra med flex.",
        "Aktiv knapp behöver tydlig kontrast.",
      ],
    },
    {
      id: "angular-counter-component",
      framework: "Angular",
      category: "Logik",
      prompt: "Bygg en Angular-counter med count, increment och reset.",
      html: `<main class="preview-app">
  <h1>Counter</h1>
  <p>0</p>
  <div class="actions">
    <button>Increase</button>
    <button>Reset</button>
  </div>
</main>`,
      previewHtml: `<main class="preview-app">
  <h1>Counter</h1>
  <p>0</p>
  <div class="actions">
    <button>Increase</button>
    <button>Reset</button>
  </div>
</main>`,
      css: `.preview-app {
  display: grid;
  gap: 0.75rem;
  place-items: center;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}`,
      js: `// counter.component.ts
export class CounterComponent {
  // Skapa count, increment och reset här.
}

// counter.component.html
<main class="preview-app">
  <h1>Counter</h1>
  <p>{{ count }}</p>
  <div class="actions">
    <button>Increase</button>
    <button>Reset</button>
  </div>
</main>`,
      solutionJs: `// counter.component.ts
export class CounterComponent {
  count = 0;

  increment() {
    this.count += 1;
  }

  reset() {
    this.count = 0;
  }
}

// counter.component.html
<main class="preview-app">
  <h1>Counter</h1>
  <p>{{ count }}</p>
  <div class="actions">
    <button (click)="increment()">Increase</button>
    <button (click)="reset()">Reset</button>
  </div>
</main>`,
      hints: [
        "State ligger som property i component class.",
        "Metoder använder this.count.",
        "Templaten använder (click) för events.",
      ],
    },
    {
      id: "angular-form-style",
      framework: "Angular",
      category: "Styling",
      prompt:
        "Styla Angular-formuläret så labels, inputs och submit-knapp blir tydliga.",
      html: `<form class="contact-form">
  <h1>Contact</h1>
  <label>
    Name
    <input placeholder="Name" />
  </label>
  <label>
    Email
    <input placeholder="Email" />
  </label>
  <button>Send</button>
</form>`,
      previewHtml: `<form class="contact-form">
  <h1>Contact</h1>
  <label>
    Name
    <input placeholder="Name" />
  </label>
  <label>
    Email
    <input placeholder="Email" />
  </label>
  <button>Send</button>
</form>`,
      css: `body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

/* Skriv formulär-styling här. */`,
      js: `// contact-form.component.html
<form class="contact-form">
  <h1>Contact</h1>
  <label>
    Name
    <input placeholder="Name" />
  </label>
  <label>
    Email
    <input placeholder="Email" />
  </label>
  <button>Send</button>
</form>`,
      solutionCss: `body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

.contact-form {
  display: grid;
  gap: 0.85rem;
  width: min(100%, 360px);
  padding: 1rem;
  background: white;
  border: 1px solid #dbe3ef;
  border-radius: 12px;
}

.contact-form label {
  display: grid;
  gap: 0.35rem;
  font-weight: 700;
}

.contact-form input,
.contact-form button {
  min-height: 2.5rem;
  padding: 0.55rem 0.7rem;
  border-radius: 8px;
}

.contact-form input {
  border: 1px solid #cbd5e1;
}

.contact-form button {
  color: white;
  background: #2563eb;
  border: 0;
  font-weight: 800;
}`,
      hints: [
        "Formuläret behöver maxbredd och padding.",
        "Labels blir tydligare med grid och gap.",
        "Input och button bör ha samma höjd.",
      ],
    },
    {
      id: "react-filter-list",
      framework: "React",
      category: "Logik",
      prompt:
        "Bygg en React-lista där ett sökfält filtrerar produkter medan användaren skriver.",
      html: `<main class="preview-app">
  <h1>Products</h1>
  <input placeholder="Search products" />
  <article>Laptop</article>
  <article>Phone</article>
  <article>Keyboard</article>
</main>`,
      previewHtml: `<main class="preview-app">
  <h1>Products</h1>
  <input placeholder="Search products" />
  <article>Laptop</article>
  <article>Phone</article>
  <article>Keyboard</article>
</main>`,
      css: `.preview-app {
  display: grid;
  gap: 0.75rem;
  max-width: 420px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
}

input,
article {
  padding: 0.7rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
}`,
      js: `import { useState } from "react";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Keyboard" },
];

export default function ProductSearch() {
  // Skapa search-state här.
  // Skapa visibleProducts här.

  return (
    <main className="preview-app">
      <h1>Products</h1>
      <input placeholder="Search products" />
      {/* Rendera visibleProducts här. */}
    </main>
  );
}`,
      solutionJs: `import { useState } from "react";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Keyboard" },
];

export default function ProductSearch() {
  const [search, setSearch] = useState("");

  const visibleProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="preview-app">
      <h1>Products</h1>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search products"
      />
      {visibleProducts.map((product) => (
        <article key={product.id}>{product.name}</article>
      ))}
    </main>
  );
}`,
      hints: [
        "Söktexten ändras av användaren, så den behöver state.",
        "visibleProducts kan räknas ut med filter.",
        "Input ska vara controlled med value och onChange.",
      ],
    },
    {
      id: "react-form-style",
      framework: "React",
      category: "Styling",
      prompt:
        "Styla en React-form så den blir kompakt, tydlig och lätt att fylla i.",
      html: `<form class="settings-form">
  <h1>Settings</h1>
  <label>
    Display name
    <input placeholder="Alex" />
  </label>
  <label>
    Role
    <select>
      <option>Frontend</option>
      <option>Fullstack</option>
    </select>
  </label>
  <button>Save</button>
</form>`,
      previewHtml: `<form class="settings-form">
  <h1>Settings</h1>
  <label>
    Display name
    <input placeholder="Alex" />
  </label>
  <label>
    Role
    <select>
      <option>Frontend</option>
      <option>Fullstack</option>
    </select>
  </label>
  <button>Save</button>
</form>`,
      css: `body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

/* Skriv form-styling här. */`,
      js: `export default function SettingsForm() {
  return (
    <form className="settings-form">
      <h1>Settings</h1>
      <label>
        Display name
        <input placeholder="Alex" />
      </label>
      <label>
        Role
        <select>
          <option>Frontend</option>
          <option>Fullstack</option>
        </select>
      </label>
      <button>Save</button>
    </form>
  );
}`,
      solutionCss: `body {
  display: grid;
  place-items: center;
  min-height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

.settings-form {
  display: grid;
  gap: 0.85rem;
  width: min(100%, 360px);
  padding: 1rem;
  background: white;
  border: 1px solid #dbe3ef;
  border-radius: 12px;
}

.settings-form label {
  display: grid;
  gap: 0.35rem;
  font-weight: 700;
}

.settings-form input,
.settings-form select,
.settings-form button {
  min-height: 2.5rem;
  padding: 0.55rem 0.7rem;
  border-radius: 8px;
}

.settings-form input,
.settings-form select {
  border: 1px solid #cbd5e1;
}

.settings-form button {
  color: white;
  background: #2563eb;
  border: 0;
  font-weight: 800;
}`,
      hints: [
        "Formen behöver maxbredd och padding.",
        "Labels blir tydliga med grid och gap.",
        "Input, select och button bör ha samma höjd.",
      ],
    },
    {
      id: "vue-filter-list",
      framework: "Vue",
      category: "Logik",
      prompt:
        "Bygg en Vue-lista där computed filtrerar produkter från ett sökfält.",
      html: `<main class="preview-app">
  <h1>Products</h1>
  <input placeholder="Search products" />
  <article>Laptop</article>
  <article>Phone</article>
  <article>Keyboard</article>
</main>`,
      previewHtml: `<main class="preview-app">
  <h1>Products</h1>
  <input placeholder="Search products" />
  <article>Laptop</article>
  <article>Phone</article>
  <article>Keyboard</article>
</main>`,
      css: `.preview-app {
  display: grid;
  gap: 0.75rem;
  max-width: 420px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
}

input,
article {
  padding: 0.7rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
}`,
      js: `<script setup>
// Importera computed och ref här.

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Keyboard" },
];

// Skapa search och visibleProducts här.
</script>

<template>
  <main class="preview-app">
    <h1>Products</h1>
    <input placeholder="Search products" />
    <!-- Rendera visibleProducts här. -->
  </main>
</template>`,
      solutionJs: `<script setup>
import { computed, ref } from "vue";

const search = ref("");
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Keyboard" },
];

const visibleProducts = computed(() =>
  products.filter((product) =>
    product.name.toLowerCase().includes(search.value.toLowerCase())
  )
);
</script>

<template>
  <main class="preview-app">
    <h1>Products</h1>
    <input v-model="search" placeholder="Search products" />
    <article v-for="product in visibleProducts" :key="product.id">
      {{ product.name }}
    </article>
  </main>
</template>`,
      hints: [
        "Söktexten kan ligga i ref.",
        "visibleProducts passar som computed.",
        "v-model kopplar inputfältet till search.",
      ],
    },
    {
      id: "vue-card-grid-style",
      framework: "Vue",
      category: "Styling",
      prompt:
        "Styla en Vue-kortlista som ett responsivt grid med tydliga kort.",
      html: `<section class="topic-grid">
  <article>Components</article>
  <article>Reactivity</article>
  <article>Computed</article>
  <article>Props</article>
</section>`,
      previewHtml: `<section class="topic-grid">
  <article>Components</article>
  <article>Reactivity</article>
  <article>Computed</article>
  <article>Props</article>
</section>`,
      css: `body {
  margin: 0;
  padding: 1rem;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

/* Skriv grid-styling här. */`,
      js: `<template>
  <section class="topic-grid">
    <article>Components</article>
    <article>Reactivity</article>
    <article>Computed</article>
    <article>Props</article>
  </section>
</template>`,
      solutionCss: `body {
  margin: 0;
  padding: 1rem;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

.topic-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.75rem;
  max-width: 760px;
  margin: 0 auto;
}

.topic-grid article {
  min-height: 6rem;
  padding: 1rem;
  background: white;
  border: 1px solid #dbe3ef;
  border-radius: 10px;
  font-weight: 800;
}`,
      hints: [
        "Grid ska ligga på .topic-grid.",
        "auto-fit och minmax gör layouten responsiv.",
        "Korten behöver padding, border och min-height.",
      ],
    },
    {
      id: "angular-filter-list",
      framework: "Angular",
      category: "Logik",
      prompt:
        "Bygg en Angular-lista där en getter filtrerar produkter från ett sökfält.",
      html: `<main class="preview-app">
  <h1>Products</h1>
  <input placeholder="Search products" />
  <article>Laptop</article>
  <article>Phone</article>
  <article>Keyboard</article>
</main>`,
      previewHtml: `<main class="preview-app">
  <h1>Products</h1>
  <input placeholder="Search products" />
  <article>Laptop</article>
  <article>Phone</article>
  <article>Keyboard</article>
</main>`,
      css: `.preview-app {
  display: grid;
  gap: 0.75rem;
  max-width: 420px;
  margin: 2rem auto;
  font-family: Arial, sans-serif;
}

input,
article {
  padding: 0.7rem;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
}`,
      js: `// product-search.component.ts
export class ProductSearchComponent {
  search = "";
  products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Keyboard" },
  ];

  // Skapa visibleProducts-getter här.
}

// product-search.component.html
<main class="preview-app">
  <h1>Products</h1>
  <input placeholder="Search products" />
  <!-- Rendera visibleProducts här. -->
</main>`,
      solutionJs: `// product-search.component.ts
export class ProductSearchComponent {
  search = "";
  products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Keyboard" },
  ];

  get visibleProducts() {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}

// product-search.component.html
<main class="preview-app">
  <h1>Products</h1>
  <input [(ngModel)]="search" placeholder="Search products" />
  <article *ngFor="let product of visibleProducts">
    {{ product.name }}
  </article>
</main>`,
      hints: [
        "Söktexten kan ligga som property.",
        "visibleProducts kan vara en getter.",
        "[(ngModel)] kräver FormsModule i en riktig Angular-modul.",
      ],
    },
    {
      id: "angular-table-style",
      framework: "Angular",
      category: "Styling",
      prompt:
        "Styla en Angular-tabell så raderna blir lätta att skanna.",
      html: `<table class="data-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alex</td>
      <td>Frontend</td>
      <td>Active</td>
    </tr>
    <tr>
      <td>Sara</td>
      <td>Fullstack</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>`,
      previewHtml: `<table class="data-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alex</td>
      <td>Frontend</td>
      <td>Active</td>
    </tr>
    <tr>
      <td>Sara</td>
      <td>Fullstack</td>
      <td>Active</td>
    </tr>
  </tbody>
</table>`,
      css: `body {
  margin: 0;
  padding: 1rem;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

/* Skriv tabell-styling här. */`,
      js: `// users-table.component.html
<table class="data-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Role</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <!-- Rendera rader med *ngFor i en riktig komponent. -->
  </tbody>
</table>`,
      solutionCss: `body {
  margin: 0;
  padding: 1rem;
  font-family: Arial, sans-serif;
  background: #f8fafc;
}

.data-table {
  width: min(100%, 720px);
  margin: 0 auto;
  border-collapse: collapse;
  background: white;
  border: 1px solid #dbe3ef;
  border-radius: 10px;
  overflow: hidden;
}

.data-table th,
.data-table td {
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

.data-table th {
  color: #475569;
  background: #f1f5f9;
  font-size: 0.8rem;
}`,
      hints: [
        "Börja med width och border-collapse på table.",
        "th och td bör ha samma padding.",
        "Headern kan få egen bakgrund för tydligare scan.",
      ],
    },
  ],
};

const extraLiveLabChallenges = [
  {
    id: "react-todo-toggle",
    title: "React todo toggle",
    framework: "React",
    category: "Logik",
    prompt: "Bygg en React-lista där varje todo kan togglas klar/oklar.",
    html: `<main class="preview-app"><h1>Todos</h1><button>Read docs</button><button>Build UI</button></main>`,
    previewHtml: `<main class="preview-app"><h1>Todos</h1><button>Read docs</button><button class="is-done">Build UI</button></main>`,
    css: `.preview-app { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }
button { min-height: 2.5rem; border: 1px solid #cbd5e1; border-radius: 8px; background: white; }
.is-done { text-decoration: line-through; opacity: 0.65; }`,
    js: `import { useState } from "react";

const initialTodos = [
  { id: 1, text: "Read docs", done: false },
  { id: 2, text: "Build UI", done: true },
];

export default function TodoToggle() {
  // Lägg todos i state och skapa toggleTodo här.
  return <main className="preview-app">{/* Rendera todos som knappar här. */}</main>;
}`,
    solutionJs: `import { useState } from "react";

const initialTodos = [
  { id: 1, text: "Read docs", done: false },
  { id: 2, text: "Build UI", done: true },
];

export default function TodoToggle() {
  const [todos, setTodos] = useState(initialTodos);

  function toggleTodo(todoId) {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  return (
    <main className="preview-app">
      <h1>Todos</h1>
      {todos.map((todo) => (
        <button
          className={todo.done ? "is-done" : ""}
          key={todo.id}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </button>
      ))}
    </main>
  );
}`,
    hints: [
      "Listan ändras, så todos behöver ligga i state.",
      "map passar när ett item ska ändras men listan behållas.",
      "Klassnamnet kan bero på todo.done.",
    ],
  },
  {
    id: "react-modal-toggle",
    title: "React modal",
    framework: "React",
    category: "Logik",
    prompt: "Bygg en React-modal som kan öppnas och stängas.",
    html: `<main class="preview-app"><button>Open modal</button><section class="modal"><p>Modal content</p><button>Close</button></section></main>`,
    previewHtml: `<main class="preview-app"><button>Open modal</button><section class="modal"><p>Modal content</p><button>Close</button></section></main>`,
    css: `.preview-app { display: grid; gap: 1rem; place-items: center; min-height: 100vh; font-family: Arial, sans-serif; }
.modal { padding: 1rem; border: 1px solid #cbd5e1; border-radius: 10px; background: white; }`,
    js: `import { useState } from "react";

export default function ModalExample() {
  // Skapa isOpen-state här.
  return (
    <main className="preview-app">
      <button>Open modal</button>
      {/* Visa modal bara när isOpen är true. */}
    </main>
  );
}`,
    solutionJs: `import { useState } from "react";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="preview-app">
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      {isOpen && (
        <section className="modal" role="dialog" aria-modal="true">
          <p>Modal content</p>
          <button onClick={() => setIsOpen(false)}>Close</button>
        </section>
      )}
    </main>
  );
}`,
    hints: [
      "Modalen har två lägen: öppen eller stängd.",
      "Rendera modalen villkorligt.",
      "Close-knappen sätter isOpen till false.",
    ],
  },
  {
    id: "react-tabs-state",
    title: "React tabs",
    framework: "React",
    category: "Logik",
    prompt: "Bygg React-tabs där aktiv tab styr vilket innehåll som visas.",
    html: `<section class="tabs-card"><div class="tabs"><button class="is-active">Profile</button><button>Settings</button></div><p>Profile content</p></section>`,
    previewHtml: `<section class="tabs-card"><div class="tabs"><button class="is-active">Profile</button><button>Settings</button></div><p>Profile content</p></section>`,
    css: `.tabs-card { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }
.tabs { display: flex; gap: 0.5rem; }
.is-active { color: white; background: #2563eb; }`,
    js: `import { useState } from "react";

const tabs = {
  profile: "Profile content",
  settings: "Settings content",
};

export default function Tabs() {
  // Skapa activeTab-state här.
  return <section className="tabs-card">{/* Rendera tabs och panel här. */}</section>;
}`,
    solutionJs: `import { useState } from "react";

const tabs = {
  profile: "Profile content",
  settings: "Settings content",
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <section className="tabs-card">
      <div className="tabs">
        {Object.keys(tabs).map((tab) => (
          <button
            className={activeTab === tab ? "is-active" : ""}
            key={tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <p>{tabs[activeTab]}</p>
    </section>
  );
}`,
    hints: [
      "Aktiv tab är state.",
      "Object.keys kan skapa knappar från objektet.",
      "Panelen läser tabs[activeTab].",
    ],
  },
  {
    id: "react-accordion-state",
    title: "React accordion",
    framework: "React",
    category: "Logik",
    prompt: "Bygg en React-accordion där en fråga kan öppnas i taget.",
    html: `<main class="preview-app"><article><button>What is React?</button><p>A UI library.</p></article></main>`,
    previewHtml: `<main class="preview-app"><article><button>What is React?</button><p>A UI library.</p></article></main>`,
    css: `.preview-app { display: grid; gap: 0.75rem; max-width: 520px; margin: 2rem auto; font-family: Arial, sans-serif; }
article { border: 1px solid #cbd5e1; border-radius: 8px; padding: 0.75rem; }`,
    js: `import { useState } from "react";

const faqs = [
  { id: 1, question: "What is React?", answer: "A UI library." },
  { id: 2, question: "What is state?", answer: "Data that can change." },
];

export default function Accordion() {
  // Skapa activeId-state här.
  return <main className="preview-app">{/* Rendera frågor här. */}</main>;
}`,
    solutionJs: `import { useState } from "react";

const faqs = [
  { id: 1, question: "What is React?", answer: "A UI library." },
  { id: 2, question: "What is state?", answer: "Data that can change." },
];

export default function Accordion() {
  const [activeId, setActiveId] = useState(null);

  return (
    <main className="preview-app">
      {faqs.map((faq) => (
        <article key={faq.id}>
          <button onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}>
            {faq.question}
          </button>
          {activeId === faq.id && <p>{faq.answer}</p>}
        </article>
      ))}
    </main>
  );
}`,
    hints: [
      "Spara id:t för öppen fråga.",
      "Klick på samma fråga kan stänga den.",
      "Visa svaret med villkorlig rendering.",
    ],
  },
];

liveLabChallenge.challenges.push(...extraLiveLabChallenges);

const moreFrameworkLiveLabChallenges = [
  {
    id: "vue-todo-toggle",
    title: "Vue todo toggle",
    framework: "Vue",
    category: "Logik",
    prompt: "Bygg en Vue-lista där varje todo kan togglas klar/oklar.",
    html: `<main class="preview-app"><h1>Todos</h1><button>Read docs</button><button class="is-done">Build UI</button></main>`,
    previewHtml: `<main class="preview-app"><h1>Todos</h1><button>Read docs</button><button class="is-done">Build UI</button></main>`,
    css: `.preview-app { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }
button { min-height: 2.5rem; border: 1px solid #cbd5e1; border-radius: 8px; background: white; }
.is-done { text-decoration: line-through; opacity: 0.65; }`,
    js: `<script setup>
// Importera ref här.
// Skapa todos och toggleTodo här.
</script>

<template>
  <main class="preview-app">
    <h1>Todos</h1>
    <!-- Rendera todos som knappar här. -->
  </main>
</template>`,
    solutionJs: `<script setup>
import { ref } from "vue";

const todos = ref([
  { id: 1, text: "Read docs", done: false },
  { id: 2, text: "Build UI", done: true },
]);

function toggleTodo(todoId) {
  const todo = todos.value.find((item) => item.id === todoId);
  todo.done = !todo.done;
}
</script>

<template>
  <main class="preview-app">
    <h1>Todos</h1>
    <button
      v-for="todo in todos"
      :class="{ 'is-done': todo.done }"
      :key="todo.id"
      @click="toggleTodo(todo.id)"
    >
      {{ todo.text }}
    </button>
  </main>
</template>`,
    hints: [
      "Todos ändras, så de kan ligga i ref.",
      "Hitta rätt todo via id.",
      ":class kan bero på todo.done.",
    ],
  },
  {
    id: "vue-modal-toggle",
    title: "Vue modal",
    framework: "Vue",
    category: "Logik",
    prompt: "Bygg en Vue-modal som kan öppnas och stängas.",
    html: `<main class="preview-app"><button>Open modal</button><section class="modal"><p>Modal content</p><button>Close</button></section></main>`,
    previewHtml: `<main class="preview-app"><button>Open modal</button><section class="modal"><p>Modal content</p><button>Close</button></section></main>`,
    css: `.preview-app { display: grid; gap: 1rem; place-items: center; min-height: 100vh; font-family: Arial, sans-serif; }
.modal { padding: 1rem; border: 1px solid #cbd5e1; border-radius: 10px; background: white; }`,
    js: `<script setup>
// Importera ref och skapa isOpen här.
</script>

<template>
  <main class="preview-app">
    <button>Open modal</button>
    <!-- Visa modalen med v-if här. -->
  </main>
</template>`,
    solutionJs: `<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
  <main class="preview-app">
    <button @click="isOpen = true">Open modal</button>
    <section v-if="isOpen" class="modal" role="dialog" aria-modal="true">
      <p>Modal content</p>
      <button @click="isOpen = false">Close</button>
    </section>
  </main>
</template>`,
    hints: [
      "Modalen har ett boolean-läge.",
      "v-if passar för att visa/dölja modal.",
      "@click kan ändra isOpen direkt.",
    ],
  },
  {
    id: "vue-form-validation",
    title: "Vue form validation",
    framework: "Vue",
    category: "Logik",
    prompt: "Bygg ett Vue-formulär som visar fel om email saknar @.",
    html: `<form class="preview-app"><input placeholder="Email" /><p>Email must include @.</p></form>`,
    previewHtml: `<form class="preview-app"><input placeholder="Email" /><p>Email must include @.</p></form>`,
    css: `.preview-app { display: grid; gap: 0.75rem; max-width: 360px; margin: 2rem auto; font-family: Arial, sans-serif; }
input { min-height: 2.5rem; padding: 0.55rem; border: 1px solid #cbd5e1; border-radius: 8px; }
p { color: #dc2626; margin: 0; }`,
    js: `<script setup>
// Importera computed och ref här.
// Skapa email och isInvalid här.
</script>

<template>
  <form class="preview-app">
    <input placeholder="Email" />
    <!-- Visa feltext med v-if här. -->
  </form>
</template>`,
    solutionJs: `<script setup>
import { computed, ref } from "vue";

const email = ref("");
const isInvalid = computed(
  () => email.value.length > 0 && !email.value.includes("@")
);
</script>

<template>
  <form class="preview-app">
    <input v-model="email" placeholder="Email" />
    <p v-if="isInvalid">Email must include @.</p>
  </form>
</template>`,
    hints: [
      "Email kan ligga i ref.",
      "Felet kan vara computed.",
      "v-if visar feltexten när villkoret är sant.",
    ],
  },
  {
    id: "vue-modal-style",
    title: "Vue modal styling",
    framework: "Vue",
    category: "Styling",
    prompt: "Styla en Vue-modal med overlay, dialog och actions.",
    html: `<div class="overlay"><section class="modal"><h1>Confirm</h1><p>Are you sure?</p><div class="actions"><button>Cancel</button><button>Save</button></div></section></div>`,
    previewHtml: `<div class="overlay"><section class="modal"><h1>Confirm</h1><p>Are you sure?</p><div class="actions"><button>Cancel</button><button>Save</button></div></section></div>`,
    css: `body { margin: 0; font-family: Arial, sans-serif; }
/* Skriv modal-styling här. */`,
    js: `<template>
  <div class="overlay">
    <section class="modal">
      <h1>Confirm</h1>
      <p>Are you sure?</p>
      <div class="actions">
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </section>
  </div>
</template>`,
    solutionCss: `body { margin: 0; font-family: Arial, sans-serif; }
.overlay { display: grid; place-items: center; min-height: 100vh; padding: 1rem; background: rgba(15, 23, 42, 0.65); }
.modal { display: grid; gap: 0.75rem; width: min(100%, 360px); padding: 1rem; background: white; border-radius: 12px; }
.modal h1, .modal p { margin: 0; }
.actions { display: flex; gap: 0.5rem; justify-content: flex-end; }
button { min-height: 2.35rem; padding: 0.5rem 0.75rem; border: 0; border-radius: 8px; font-weight: 800; }`,
    hints: [
      "Overlayn ska täcka viewporten.",
      "Dialogen behöver maxbredd och padding.",
      "Actions passar bra med flex-end.",
    ],
  },
  {
    id: "angular-todo-toggle",
    title: "Angular todo toggle",
    framework: "Angular",
    category: "Logik",
    prompt: "Bygg en Angular-lista där varje todo kan togglas klar/oklar.",
    html: `<main class="preview-app"><h1>Todos</h1><button>Read docs</button><button class="is-done">Build UI</button></main>`,
    previewHtml: `<main class="preview-app"><h1>Todos</h1><button>Read docs</button><button class="is-done">Build UI</button></main>`,
    css: `.preview-app { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }
button { min-height: 2.5rem; border: 1px solid #cbd5e1; border-radius: 8px; background: white; }
.is-done { text-decoration: line-through; opacity: 0.65; }`,
    js: `// todo-list.component.ts
export class TodoListComponent {
  todos = [
    { id: 1, text: "Read docs", done: false },
    { id: 2, text: "Build UI", done: true },
  ];

  // Skapa toggleTodo här.
}

// todo-list.component.html
<main class="preview-app">
  <h1>Todos</h1>
  <!-- Rendera todos med *ngFor här. -->
</main>`,
    solutionJs: `// todo-list.component.ts
export class TodoListComponent {
  todos = [
    { id: 1, text: "Read docs", done: false },
    { id: 2, text: "Build UI", done: true },
  ];

  toggleTodo(todoId) {
    this.todos = this.todos.map((todo) =>
      todo.id === todoId ? { ...todo, done: !todo.done } : todo
    );
  }
}

// todo-list.component.html
<main class="preview-app">
  <h1>Todos</h1>
  <button
    *ngFor="let todo of todos"
    [class.is-done]="todo.done"
    (click)="toggleTodo(todo.id)"
  >
    {{ todo.text }}
  </button>
</main>`,
    hints: [
      "Metoden behöver veta vilket id som klickades.",
      "map kan skapa en ny array med ändrad todo.",
      "[class.is-done] kan bero på todo.done.",
    ],
  },
  {
    id: "angular-modal-toggle",
    title: "Angular modal",
    framework: "Angular",
    category: "Logik",
    prompt: "Bygg en Angular-modal som kan öppnas och stängas.",
    html: `<main class="preview-app"><button>Open modal</button><section class="modal"><p>Modal content</p><button>Close</button></section></main>`,
    previewHtml: `<main class="preview-app"><button>Open modal</button><section class="modal"><p>Modal content</p><button>Close</button></section></main>`,
    css: `.preview-app { display: grid; gap: 1rem; place-items: center; min-height: 100vh; font-family: Arial, sans-serif; }
.modal { padding: 1rem; border: 1px solid #cbd5e1; border-radius: 10px; background: white; }`,
    js: `// modal.component.ts
export class ModalComponent {
  // Skapa isOpen, open och close här.
}

// modal.component.html
<main class="preview-app">
  <button>Open modal</button>
  <!-- Visa modal med *ngIf här. -->
</main>`,
    solutionJs: `// modal.component.ts
export class ModalComponent {
  isOpen = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}

// modal.component.html
<main class="preview-app">
  <button (click)="open()">Open modal</button>
  <section *ngIf="isOpen" class="modal" role="dialog" aria-modal="true">
    <p>Modal content</p>
    <button (click)="close()">Close</button>
  </section>
</main>`,
    hints: [
      "isOpen kan vara en boolean-property.",
      "*ngIf visar modalen när isOpen är true.",
      "(click) kopplar knapparna till metoderna.",
    ],
  },
  {
    id: "angular-tabs-state",
    title: "Angular tabs",
    framework: "Angular",
    category: "Logik",
    prompt: "Bygg Angular-tabs där aktiv tab styr panelens innehåll.",
    html: `<section class="tabs-card"><div class="tabs"><button class="is-active">Profile</button><button>Settings</button></div><p>Profile content</p></section>`,
    previewHtml: `<section class="tabs-card"><div class="tabs"><button class="is-active">Profile</button><button>Settings</button></div><p>Profile content</p></section>`,
    css: `.tabs-card { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }
.tabs { display: flex; gap: 0.5rem; }
.is-active { color: white; background: #2563eb; }`,
    js: `// tabs.component.ts
export class TabsComponent {
  activeTab = "profile";
  tabs = {
    profile: "Profile content",
    settings: "Settings content",
  };
}

// tabs.component.html
<section class="tabs-card">
  <!-- Rendera tab-knappar och aktiv panel här. -->
</section>`,
    solutionJs: `// tabs.component.ts
export class TabsComponent {
  activeTab = "profile";
  tabs = {
    profile: "Profile content",
    settings: "Settings content",
  };
}

// tabs.component.html
<section class="tabs-card">
  <div class="tabs">
    <button
      [class.is-active]="activeTab === 'profile'"
      (click)="activeTab = 'profile'"
    >
      Profile
    </button>
    <button
      [class.is-active]="activeTab === 'settings'"
      (click)="activeTab = 'settings'"
    >
      Settings
    </button>
  </div>
  <p>{{ tabs[activeTab] }}</p>
</section>`,
    hints: [
      "activeTab kan vara en string-property.",
      "[class.is-active] markerar vald knapp.",
      "Panelen kan läsa tabs[activeTab].",
    ],
  },
  {
    id: "angular-navbar-style",
    title: "Angular navbar",
    framework: "Angular",
    category: "Styling",
    prompt: "Styla en Angular-navbar med brand, länkar och action-knapp.",
    html: `<header class="app-nav"><strong>AngularPrep</strong><nav><a>Components</a><a>Forms</a><a>HTTP</a></nav><button>Start</button></header>`,
    previewHtml: `<header class="app-nav"><strong>AngularPrep</strong><nav><a>Components</a><a>Forms</a><a>HTTP</a></nav><button>Start</button></header>`,
    css: `body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; }
/* Skriv navbar-styling här. */`,
    js: `// app-nav.component.html
<header class="app-nav">
  <strong>AngularPrep</strong>
  <nav>
    <a>Components</a>
    <a>Forms</a>
    <a>HTTP</a>
  </nav>
  <button>Start</button>
</header>`,
    solutionCss: `body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; }
.app-nav { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 1rem; padding: 0.75rem 1rem; background: white; border-bottom: 1px solid #dbe3ef; }
.app-nav nav { display: flex; gap: 0.75rem; justify-content: center; }
.app-nav a { color: #334155; font-weight: 700; }
.app-nav button { min-height: 2.25rem; padding: 0.45rem 0.75rem; color: white; background: #0f172a; border: 0; border-radius: 8px; font-weight: 800; }`,
    hints: [
      "Headern kan vara grid med tre kolumner.",
      "Nav-länkarna kan ligga i flex.",
      "Action-knappen behöver tydlig kontrast.",
    ],
  },
];

liveLabChallenge.challenges.push(...moreFrameworkLiveLabChallenges);

const finalFrameworkLiveLabChallenges = [
  {
    id: "react-empty-state",
    title: "React empty state",
    framework: "React",
    category: "Logik",
    prompt: "Visa en empty state i React när listan saknar items.",
    html: `<main class="preview-app"><h1>Products</h1><p>No products found.</p></main>`,
    previewHtml: `<main class="preview-app"><h1>Products</h1><p>No products found.</p></main>`,
    css: `.preview-app { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }
p { padding: 0.75rem; border: 1px dashed #94a3b8; border-radius: 8px; color: #64748b; }`,
    js: `const products = [];

export default function ProductList() {
  return (
    <main className="preview-app">
      <h1>Products</h1>
      {/* Visa empty state eller listan här. */}
    </main>
  );
}`,
    solutionJs: `const products = [];

export default function ProductList() {
  return (
    <main className="preview-app">
      <h1>Products</h1>
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => <article key={product.id}>{product.name}</article>)
      )}
    </main>
  );
}`,
    hints: [
      "Kolla listans length.",
      "Ternary passar när UI:t har två tydliga lägen.",
      "Listan renderas bara när den har items.",
    ],
  },
  {
    id: "react-badge-style",
    title: "React badge styling",
    framework: "React",
    category: "Styling",
    prompt: "Styla små statusbadges för en React-komponent.",
    html: `<main class="badge-row"><span class="badge success">Active</span><span class="badge warning">Pending</span><span class="badge danger">Blocked</span></main>`,
    previewHtml: `<main class="badge-row"><span class="badge success">Active</span><span class="badge warning">Pending</span><span class="badge danger">Blocked</span></main>`,
    css: `body { display: grid; place-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }
/* Skriv badge-styling här. */`,
    js: `export default function StatusBadges() {
  return (
    <main className="badge-row">
      <span className="badge success">Active</span>
      <span className="badge warning">Pending</span>
      <span className="badge danger">Blocked</span>
    </main>
  );
}`,
    solutionCss: `body { display: grid; place-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }
.badge-row { display: flex; gap: 0.5rem; }
.badge { padding: 0.35rem 0.55rem; border-radius: 999px; font-size: 0.8rem; font-weight: 800; }
.success { color: #166534; background: #dcfce7; }
.warning { color: #92400e; background: #fef3c7; }
.danger { color: #991b1b; background: #fee2e2; }`,
    hints: [
      "Badges passar bra med border-radius 999px.",
      "Använd olika färger per statusklass.",
      "Håll textstorleken kompakt.",
    ],
  },
  {
    id: "vue-empty-state",
    title: "Vue empty state",
    framework: "Vue",
    category: "Logik",
    prompt: "Visa en empty state i Vue när listan saknar items.",
    html: `<main class="preview-app"><h1>Products</h1><p>No products found.</p></main>`,
    previewHtml: `<main class="preview-app"><h1>Products</h1><p>No products found.</p></main>`,
    css: `.preview-app { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }
p { padding: 0.75rem; border: 1px dashed #94a3b8; border-radius: 8px; color: #64748b; }`,
    js: `<script setup>
const products = [];
</script>

<template>
  <main class="preview-app">
    <h1>Products</h1>
    <!-- Visa empty state eller v-for här. -->
  </main>
</template>`,
    solutionJs: `<script setup>
const products = [];
</script>

<template>
  <main class="preview-app">
    <h1>Products</h1>
    <p v-if="products.length === 0">No products found.</p>
    <article v-for="product in products" v-else :key="product.id">
      {{ product.name }}
    </article>
  </main>
</template>`,
    hints: [
      "Kolla products.length.",
      "v-if kan visa tomt läge.",
      "v-for renderar listan när den finns.",
    ],
  },
  {
    id: "vue-badge-style",
    title: "Vue badge styling",
    framework: "Vue",
    category: "Styling",
    prompt: "Styla små statusbadges för en Vue-komponent.",
    html: `<main class="badge-row"><span class="badge success">Active</span><span class="badge warning">Pending</span><span class="badge danger">Blocked</span></main>`,
    previewHtml: `<main class="badge-row"><span class="badge success">Active</span><span class="badge warning">Pending</span><span class="badge danger">Blocked</span></main>`,
    css: `body { display: grid; place-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }
/* Skriv badge-styling här. */`,
    js: `<template>
  <main class="badge-row">
    <span class="badge success">Active</span>
    <span class="badge warning">Pending</span>
    <span class="badge danger">Blocked</span>
  </main>
</template>`,
    solutionCss: `body { display: grid; place-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }
.badge-row { display: flex; gap: 0.5rem; }
.badge { padding: 0.35rem 0.55rem; border-radius: 999px; font-size: 0.8rem; font-weight: 800; }
.success { color: #166534; background: #dcfce7; }
.warning { color: #92400e; background: #fef3c7; }
.danger { color: #991b1b; background: #fee2e2; }`,
    hints: [
      "Badges ska vara små men tydliga.",
      "Använd statusklasser för olika färger.",
      "Flex ger en enkel radlayout.",
    ],
  },
  {
    id: "angular-empty-state",
    title: "Angular empty state",
    framework: "Angular",
    category: "Logik",
    prompt: "Visa en empty state i Angular när listan saknar items.",
    html: `<main class="preview-app"><h1>Products</h1><p>No products found.</p></main>`,
    previewHtml: `<main class="preview-app"><h1>Products</h1><p>No products found.</p></main>`,
    css: `.preview-app { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }
p { padding: 0.75rem; border: 1px dashed #94a3b8; border-radius: 8px; color: #64748b; }`,
    js: `// product-list.component.ts
export class ProductListComponent {
  products = [];
}

// product-list.component.html
<main class="preview-app">
  <h1>Products</h1>
  <!-- Visa empty state eller *ngFor här. -->
</main>`,
    solutionJs: `// product-list.component.ts
export class ProductListComponent {
  products = [];
}

// product-list.component.html
<main class="preview-app">
  <h1>Products</h1>
  <p *ngIf="products.length === 0">No products found.</p>
  <article *ngFor="let product of products">
    {{ product.name }}
  </article>
</main>`,
    hints: [
      "Kolla products.length.",
      "*ngIf visar tomt läge.",
      "*ngFor renderar listan.",
    ],
  },
  {
    id: "angular-badge-style",
    title: "Angular badge styling",
    framework: "Angular",
    category: "Styling",
    prompt: "Styla små statusbadges för en Angular-komponent.",
    html: `<main class="badge-row"><span class="badge success">Active</span><span class="badge warning">Pending</span><span class="badge danger">Blocked</span></main>`,
    previewHtml: `<main class="badge-row"><span class="badge success">Active</span><span class="badge warning">Pending</span><span class="badge danger">Blocked</span></main>`,
    css: `body { display: grid; place-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }
/* Skriv badge-styling här. */`,
    js: `// status-badges.component.html
<main class="badge-row">
  <span class="badge success">Active</span>
  <span class="badge warning">Pending</span>
  <span class="badge danger">Blocked</span>
</main>`,
    solutionCss: `body { display: grid; place-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }
.badge-row { display: flex; gap: 0.5rem; }
.badge { padding: 0.35rem 0.55rem; border-radius: 999px; font-size: 0.8rem; font-weight: 800; }
.success { color: #166534; background: #dcfce7; }
.warning { color: #92400e; background: #fef3c7; }
.danger { color: #991b1b; background: #fee2e2; }`,
    hints: [
      "Badges passar med pill-form.",
      "Varje statusklass får egen färg.",
      "Håll layouten enkel med flex.",
    ],
  },
];

liveLabChallenge.challenges.push(...finalFrameworkLiveLabChallenges);

const liveLabTitles = {
  "logic-counter": "Counter",
  "logic-filter-list": "Filter list",
  "styling-product-card": "Product card",
  "styling-responsive-grid": "Responsive grid",
  "logic-todo-list": "Todo list",
  "logic-tabs": "Tabs",
  "logic-accordion": "Accordion",
  "logic-theme-toggle": "Theme toggle",
  "styling-login-form": "Login form",
  "styling-navbar": "Navbar",
  "styling-modal-overlay": "Modal overlay",
  "styling-stats-cards": "Stats cards",
  "react-counter-component": "React counter",
  "react-product-card-style": "React product card",
  "react-filter-list": "React filter list",
  "react-form-style": "React form",
  "vue-counter-component": "Vue counter",
  "vue-tabs-style": "Vue tabs",
  "vue-filter-list": "Vue filter list",
  "vue-card-grid-style": "Vue card grid",
  "angular-counter-component": "Angular counter",
  "angular-form-style": "Angular form",
  "angular-filter-list": "Angular filter list",
  "angular-table-style": "Angular table",
};

export const liveLabExercises = liveLabChallenge.challenges.map(
  (challenge) => ({
    id: `live-lab-${challenge.id}`,
    type: "live-lab",
    title: challenge.title ?? liveLabTitles[challenge.id] ?? challenge.prompt,
    difficulty: challenge.framework ?? "JavaScript",
    estimatedTime: challenge.category,
    description: challenge.prompt,
    framework: challenge.framework ?? "JavaScript",
    labCategory: challenge.category,
    challenges: [challenge],
  }),
);
