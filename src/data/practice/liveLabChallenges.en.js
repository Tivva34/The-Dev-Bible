export const liveLabChallenge = {
  "id": "live-lab",
  "type": "live-lab",
  "title": "Random live lab drill",
  "difficulty": "Preview",
  "estimatedTime": "10-20 min",
  "description": "Random logic and styling exercises with live preview.",
  "challenges": [
    {
      "id": "logic-counter",
      "category": "Logik",
      "prompt": "Make the button increment the counter and the reset button reset the value to 0.",
      "html": "<main class=\"app\">\n  <h1>Counter</h1>\n  <p id=\"count\">0</p>\n  <div class=\"actions\">\n    <button id=\"increase\">Increase</button>\n    <button id=\"reset\">Reset</button>\n  </div>\n</main>",
      "css": ".app {\n  display: grid;\n  gap: 1rem;\n  place-items: center;\n  min-height: 100vh;\n  font-family: Arial, sans-serif;\n}\n\n#count {\n  font-size: 3rem;\n  font-weight: 800;\n}",
      "js": "const countElement = document.querySelector(\"#count\");\nconst increaseButton = document.querySelector(\"#increase\");\nconst resetButton = document.querySelector(\"#reset\");\n\n// Write your solution here.",
      "solutionJs": "const countElement = document.querySelector(\"#count\");\nconst increaseButton = document.querySelector(\"#increase\");\nconst resetButton = document.querySelector(\"#reset\");\n\nlet count = 0;\n\nfunction renderCount() {\n  countElement.textContent = count;\n}\n\nincreaseButton.addEventListener(\"click\", () => {\n  count += 1;\n  renderCount();\n});\n\nresetButton.addEventListener(\"click\", () => {\n  count = 0;\n  renderCount();\n});",
      "hints": [
        "You need a variable to keep track of count.",
        "Each button needs its own event listener.",
        "When count changes, textContent needs to be updated."
      ]
    },
    {
      "id": "logic-filter-list",
      "category": "Logik",
      "prompt": "Make the input field filter the list as the user types.",
      "html": "<main class=\"app\">\n  <h1>Users</h1>\n  <input id=\"search\" placeholder=\"Search users\" />\n  <ul id=\"users\"></ul>\n</main>",
      "css": ".app {\n  display: grid;\n  gap: 0.75rem;\n  max-width: 420px;\n  margin: 2rem auto;\n  font-family: Arial, sans-serif;\n}\n\ninput {\n  padding: 0.7rem;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n}",
      "js": "const users = [\"Alice\", \"Alex\", \"Sara\", \"Mira\"];\nconst searchInput = document.querySelector(\"#search\");\nconst usersList = document.querySelector(\"#users\");\n\n// Write your solution here.",
      "solutionJs": "const users = [\"Alice\", \"Alex\", \"Sara\", \"Mira\"];\nconst searchInput = document.querySelector(\"#search\");\nconst usersList = document.querySelector(\"#users\");\n\nfunction renderUsers(search = \"\") {\n  const visibleUsers = users.filter((user) =>\n    user.toLowerCase().includes(search.toLowerCase())\n  );\n\n  usersList.innerHTML = visibleUsers\n    .map((user) => `<li>${user}</li>`)\n    .join(\"\");\n}\n\nsearchInput.addEventListener(\"input\", (event) => {\n  renderUsers(event.target.value);\n});\n\nrenderUsers();",
      "hints": [
        "Start with a render function that outputs the entire list.",
        "filter and includes are well suited for searching.",
        "Listen to the input event to update dynamically as the user types."
      ]
    },
    {
      "id": "styling-product-card",
      "category": "Styling",
      "prompt": "Style the card into a clear product component with an image area, price, and button.",
      "html": "<main class=\"page\">\n  <article class=\"product-card\">\n    <div class=\"product-image\">Image</div>\n    <h1>Laptop Pro</h1>\n    <p class=\"price\">$1200</p>\n    <button>Add to cart</button>\n  </article>\n</main>",
      "css": ".page {\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write your styling here. */",
      "js": "// This exercise focuses on HTML and CSS.",
      "solutionCss": ".page {\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.product-card {\n  display: grid;\n  gap: 0.75rem;\n  width: min(100%, 320px);\n  padding: 1rem;\n  background: white;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);\n}\n\n.product-image {\n  display: grid;\n  place-items: center;\n  aspect-ratio: 16 / 10;\n  border-radius: 8px;\n  color: #0f172a;\n  background: #dbeafe;\n  font-weight: 800;\n}\n\n.product-card h1 {\n  margin: 0;\n  font-size: 1.15rem;\n}\n\n.price {\n  margin: 0;\n  font-weight: 800;\n}\n\n.product-card button {\n  min-height: 2.5rem;\n  border: 0;\n  border-radius: 8px;\n  color: white;\n  background: #2563eb;\n  font-weight: 800;\n}",
      "hints": [
        "Start with the card layout: display grid and gap.",
        "Ge bildytan en stabil aspect-ratio.",
        "The button needs distinct color, height, and border-radius."
      ]
    },
    {
      "id": "styling-responsive-grid",
      "category": "Styling",
      "prompt": "Make the list responsive so the cards arrange in a compact grid adapting to screen width.",
      "html": "<main class=\"page\">\n  <section class=\"card-grid\">\n    <article>React</article>\n    <article>Vue</article>\n    <article>Angular</article>\n    <article>JavaScript</article>\n  </section>\n</main>",
      "css": ".page {\n  min-height: 100vh;\n  padding: 1rem;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write your grid styling here. */",
      "js": "// This exercise focuses on CSS grid.",
      "solutionCss": ".page {\n  min-height: 100vh;\n  padding: 1rem;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 0.75rem;\n  max-width: 760px;\n  margin: 0 auto;\n}\n\n.card-grid article {\n  padding: 1rem;\n  min-height: 6rem;\n  border: 1px solid #dbe3ef;\n  border-radius: 10px;\n  background: white;\n  font-weight: 800;\n}",
      "hints": [
        "Grid styling should be placed on the wrapper, not on individual cards.",
        "repeat(auto-fit, minmax(...)) fits well when column count adapts automatically.",
        "Give cards padding and min-height so the preview renders clearly."
      ]
    },
    {
      "id": "logic-todo-list",
      "category": "Logik",
      "prompt": "Allow the user to add new todos and remove existing todos from the list.",
      "html": "<main class=\"app\">\n  <h1>Todos</h1>\n  <form id=\"todo-form\">\n    <input id=\"todo-input\" placeholder=\"New todo\" />\n    <button>Add</button>\n  </form>\n  <ul id=\"todo-list\"></ul>\n</main>",
      "css": ".app {\n  display: grid;\n  gap: 0.75rem;\n  max-width: 420px;\n  margin: 2rem auto;\n  font-family: Arial, sans-serif;\n}\n\nform {\n  display: flex;\n  gap: 0.5rem;\n}\n\ninput,\nbutton {\n  min-height: 2.4rem;\n  padding: 0.55rem 0.7rem;\n}",
      "js": "const form = document.querySelector(\"#todo-form\");\nconst input = document.querySelector(\"#todo-input\");\nconst list = document.querySelector(\"#todo-list\");\n\nconst todos = [];\n\n// Write your solution here.",
      "solutionJs": "const form = document.querySelector(\"#todo-form\");\nconst input = document.querySelector(\"#todo-input\");\nconst list = document.querySelector(\"#todo-list\");\n\nconst todos = [];\n\nfunction renderTodos() {\n  list.innerHTML = \"\";\n\n  todos.forEach((todo) => {\n    const item = document.createElement(\"li\");\n    const button = document.createElement(\"button\");\n\n    item.textContent = todo.text;\n    button.textContent = \"Remove\";\n    button.addEventListener(\"click\", () => {\n      const index = todos.findIndex((item) => item.id === todo.id);\n      todos.splice(index, 1);\n      renderTodos();\n    });\n\n    item.append(button);\n    list.append(item);\n  });\n}\n\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n\n  if (!input.value.trim()) return;\n\n  todos.push({ id: Date.now(), text: input.value });\n  input.value = \"\";\n  renderTodos();\n});",
      "hints": [
        "Start with a render function that repaints the list.",
        "The form needs preventDefault so the page does not reload.",
        "Store each todo as an object with id and text.",
        "Remove the correct todo by comparing id."
      ]
    },
    {
      "id": "logic-tabs",
      "category": "Logik",
      "prompt": "Make tab buttons switch the active panel and highlight the selected tab.",
      "html": "<main class=\"app\">\n  <div class=\"tabs\">\n    <button class=\"tab is-active\" data-tab=\"html\">HTML</button>\n    <button class=\"tab\" data-tab=\"css\">CSS</button>\n    <button class=\"tab\" data-tab=\"js\">JavaScript</button>\n  </div>\n  <section id=\"panel\">HTML controls the structure.</section>\n</main>",
      "css": ".app {\n  display: grid;\n  gap: 1rem;\n  max-width: 520px;\n  margin: 2rem auto;\n  font-family: Arial, sans-serif;\n}\n\n.tabs {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.tab.is-active {\n  color: white;\n  background: #2563eb;\n}",
      "js": "const tabs = document.querySelectorAll(\".tab\");\nconst panel = document.querySelector(\"#panel\");\n\nconst content = {\n  html: \"HTML controls the structure.\",\n  css: \"CSS controls the layout and style.\",\n  js: \"JavaScript controls interaction.\",\n};\n\n// Write your solution here.",
      "solutionJs": "const tabs = document.querySelectorAll(\".tab\");\nconst panel = document.querySelector(\"#panel\");\n\nconst content = {\n  html: \"HTML controls the structure.\",\n  css: \"CSS controls the layout and style.\",\n  js: \"JavaScript controls interaction.\",\n};\n\ntabs.forEach((tab) => {\n  tab.addEventListener(\"click\", () => {\n    tabs.forEach((item) => item.classList.remove(\"is-active\"));\n    tab.classList.add(\"is-active\");\n    panel.textContent = content[tab.dataset.tab];\n  });\n});",
      "hints": [
        "Each button has a data-tab attribute pointing to the correct content.",
        "When a button is clicked, all other buttons need to lose is-active.",
        "The panel text can be looked up from the content object."
      ]
    },
    {
      "id": "logic-accordion",
      "category": "Logik",
      "prompt": "Make each question expandable and collapsible as an accordion.",
      "html": "<main class=\"app\">\n  <h1>FAQ</h1>\n  <article class=\"faq-item\">\n    <button class=\"faq-question\">What is React?</button>\n    <p class=\"faq-answer\">A UI library.</p>\n  </article>\n  <article class=\"faq-item\">\n    <button class=\"faq-question\">What is state?</button>\n    <p class=\"faq-answer\">Data that can change.</p>\n  </article>\n</main>",
      "css": ".app {\n  display: grid;\n  gap: 0.75rem;\n  max-width: 520px;\n  margin: 2rem auto;\n  font-family: Arial, sans-serif;\n}\n\n.faq-answer {\n  display: none;\n}\n\n.faq-item.is-open .faq-answer {\n  display: block;\n}",
      "js": "const questions = document.querySelectorAll(\".faq-question\");\n\n// Write your solution here.",
      "solutionJs": "const questions = document.querySelectorAll(\".faq-question\");\n\nquestions.forEach((question) => {\n  question.addEventListener(\"click\", () => {\n    const item = question.closest(\".faq-item\");\n    item.classList.toggle(\"is-open\");\n  });\n});",
      "hints": [
        "Attach the click listener to the button.",
        "closest can locate the article wrapper.",
        "CSS reveals the answer when the wrapper carries the is-open class."
      ]
    },
    {
      "id": "logic-theme-toggle",
      "category": "Logik",
      "prompt": "Make the button toggle dark mode on the page and update the button label.",
      "html": "<main class=\"app\">\n  <h1>Theme toggle</h1>\n  <p>Click the button to switch theme.</p>\n  <button id=\"theme-button\">Dark mode</button>\n</main>",
      "css": "body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n  color: #0f172a;\n}\n\nbody.dark {\n  background: #0f172a;\n  color: #f8fafc;\n}\n\n.app {\n  display: grid;\n  gap: 0.75rem;\n  place-items: center;\n  min-height: 100vh;\n}",
      "js": "const button = document.querySelector(\"#theme-button\");\n\n// Write your solution here.",
      "solutionJs": "const button = document.querySelector(\"#theme-button\");\n\nbutton.addEventListener(\"click\", () => {\n  document.body.classList.toggle(\"dark\");\n\n  const isDark = document.body.classList.contains(\"dark\");\n  button.textContent = isDark ? \"Light mode\" : \"Dark mode\";\n});",
      "hints": [
        "Dark mode can be controlled with a class on the body element.",
        "classList.toggle turns the class on and off.",
        "contains can determine which button label to show."
      ]
    },
    {
      "id": "styling-login-form",
      "category": "Styling",
      "prompt": "Style the form into a clean login panel with labels, inputs, and an action button.",
      "html": "<main class=\"page\">\n  <form class=\"login-form\">\n    <h1>Log in</h1>\n    <label>\n      Email\n      <input placeholder=\"user@example.com\" />\n    </label>\n    <label>\n      Password\n      <input type=\"password\" placeholder=\"Password\" />\n    </label>\n    <button>Log in</button>\n  </form>\n</main>",
      "css": ".page {\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  font-family: Arial, sans-serif;\n  background: #eef2ff;\n}\n\n/* Write your form styling here. */",
      "js": "// This exercise focuses on CSS.",
      "solutionCss": ".page {\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  font-family: Arial, sans-serif;\n  background: #eef2ff;\n}\n\n.login-form {\n  display: grid;\n  gap: 0.85rem;\n  width: min(100%, 340px);\n  padding: 1rem;\n  background: white;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n}\n\n.login-form h1 {\n  margin: 0;\n  font-size: 1.35rem;\n}\n\n.login-form label {\n  display: grid;\n  gap: 0.35rem;\n  font-weight: 700;\n}\n\n.login-form input,\n.login-form button {\n  min-height: 2.5rem;\n  padding: 0.55rem 0.7rem;\n  border-radius: 8px;\n}\n\n.login-form input {\n  border: 1px solid #cbd5e1;\n}\n\n.login-form button {\n  border: 0;\n  color: white;\n  background: #2563eb;\n  font-weight: 800;\n}",
      "hints": [
        "The form needs a max-width so it doesn't stretch too wide.",
        "Form labels are clearer with display grid and gap.",
        "Inputs and buttons should share matching height and border-radius."
      ]
    },
    {
      "id": "styling-navbar",
      "category": "Styling",
      "prompt": "Style navigation so the logo, links, and action button align on a compact row.",
      "html": "<header class=\"navbar\">\n  <strong>DevPrep</strong>\n  <nav>\n    <a href=\"#\">Questions</a>\n    <a href=\"#\">Live coding</a>\n    <a href=\"#\">Training</a>\n  </nav>\n  <button>Start</button>\n</header>",
      "css": "body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write your navbar styling here. */",
      "js": "// This exercise focuses on layout and CSS.",
      "solutionCss": "body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.navbar {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 1rem;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  background: white;\n  border-bottom: 1px solid #dbe3ef;\n}\n\n.navbar nav {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: center;\n}\n\n.navbar a {\n  color: #334155;\n  text-decoration: none;\n  font-weight: 700;\n}\n\n.navbar button {\n  min-height: 2.2rem;\n  padding: 0.45rem 0.75rem;\n  color: white;\n  background: #0f172a;\n  border: 0;\n  border-radius: 8px;\n  font-weight: 800;\n}",
      "hints": [
        "The header can be a three-column CSS grid.",
        "Nav links can sit inside a flex container.",
        "The button should have its own background for distinct contrast."
      ]
    },
    {
      "id": "styling-modal-overlay",
      "category": "Styling",
      "prompt": "Style the modal with an overlay backdrop, centered dialog, and prominent actions.",
      "html": "<div class=\"overlay\">\n  <section class=\"modal\">\n    <h1>Delete item?</h1>\n    <p>This action cannot be undone.</p>\n    <div class=\"modal-actions\">\n      <button class=\"secondary\">Cancel</button>\n      <button class=\"danger\">Delete</button>\n    </div>\n  </section>\n</div>",
      "css": "body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n}\n\n/* Write your modal styling here. */",
      "js": "// This exercise focuses on overlay and modal CSS.",
      "solutionCss": "body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n}\n\n.overlay {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  padding: 1rem;\n  background: rgba(15, 23, 42, 0.65);\n}\n\n.modal {\n  display: grid;\n  gap: 0.75rem;\n  width: min(100%, 360px);\n  padding: 1rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.25);\n}\n\n.modal h1,\n.modal p {\n  margin: 0;\n}\n\n.modal-actions {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n\n.modal button {\n  min-height: 2.35rem;\n  padding: 0.5rem 0.75rem;\n  border: 0;\n  border-radius: 8px;\n  font-weight: 800;\n}\n\n.secondary {\n  background: #e2e8f0;\n}\n\n.danger {\n  color: white;\n  background: #dc2626;\n}",
      "hints": [
        "The overlay should cover the entire viewport.",
        "place-items: center can center the modal dialog.",
        "Actions are clearer with flexbox and justify-content: flex-end."
      ]
    },
    {
      "id": "styling-stats-cards",
      "category": "Styling",
      "prompt": "Style the stats cards into scannable dashboard metrics in a responsive grid.",
      "html": "<main class=\"dashboard\">\n  <article class=\"stat-card\">\n    <span>Users</span>\n    <strong>1280</strong>\n  </article>\n  <article class=\"stat-card\">\n    <span>Orders</span>\n    <strong>342</strong>\n  </article>\n  <article class=\"stat-card\">\n    <span>Revenue</span>\n    <strong>$18k</strong>\n  </article>\n</main>",
      "css": "body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write your dashboard styling here. */",
      "js": "// This exercise focuses on responsive dashboard styling.",
      "solutionCss": "body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.dashboard {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 0.75rem;\n  max-width: 760px;\n  margin: 2rem auto;\n  padding: 1rem;\n}\n\n.stat-card {\n  display: grid;\n  gap: 0.45rem;\n  padding: 1rem;\n  background: white;\n  border: 1px solid #dbe3ef;\n  border-radius: 10px;\n}\n\n.stat-card span {\n  color: #64748b;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n\n.stat-card strong {\n  color: #0f172a;\n  font-size: 1.6rem;\n}",
      "hints": [
        "The wrapper should be a CSS grid with auto-fit columns.",
        "The cards need distinct padding and subtle border.",
        "Label and metric value should have contrasting size and color."
      ]
    },
    {
      "id": "react-counter-component",
      "framework": "React",
      "category": "Logik",
      "prompt": "Build a React counter where the button increases the count and reset sets it back to 0.",
      "html": "<main class=\"preview-app\">\n  <h1>Counter</h1>\n  <p>0</p>\n  <div class=\"actions\">\n    <button>Increase</button>\n    <button>Reset</button>\n  </div>\n</main>",
      "previewHtml": "<main class=\"preview-app\">\n  <h1>Counter</h1>\n  <p>0</p>\n  <div class=\"actions\">\n    <button>Increase</button>\n    <button>Reset</button>\n  </div>\n</main>",
      "css": ".preview-app {\n  display: grid;\n  gap: 0.75rem;\n  place-items: center;\n  min-height: 100vh;\n  font-family: Arial, sans-serif;\n}",
      "js": "import { useState } from \"react\";\n\nexport default function Counter() {\n  // Create count state here.\n\n  return (\n    <main className=\"preview-app\">\n      <h1>Counter</h1>\n      <p>0</p>\n      <div className=\"actions\">\n        <button>Increase</button>\n        <button>Reset</button>\n      </div>\n    </main>\n  );\n}",
      "solutionJs": "import { useState } from \"react\";\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <main className=\"preview-app\">\n      <h1>Counter</h1>\n      <p>{count}</p>\n      <div className=\"actions\">\n        <button onClick={() => setCount(count + 1)}>Increase</button>\n        <button onClick={() => setCount(0)}>Reset</button>\n      </div>\n    </main>\n  );\n}",
      "hints": [
        "count changes based on user action, so it needs useState.",
        "The increase button should call setCount.",
        "Reset can set the value directly to 0."
      ]
    },
    {
      "id": "react-product-card-style",
      "framework": "React",
      "category": "Styling",
      "prompt": "Style the React component as a clear product card with an image area and button.",
      "html": "<article class=\"product-card\">\n  <div class=\"product-image\">Image</div>\n  <h1>Laptop Pro</h1>\n  <p>$1200</p>\n  <button>Add to cart</button>\n</article>",
      "previewHtml": "<article class=\"product-card\">\n  <div class=\"product-image\">Image</div>\n  <h1>Laptop Pro</h1>\n  <p>$1200</p>\n  <button>Add to cart</button>\n</article>",
      "css": "body {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write the card styling here. */",
      "js": "export default function ProductCard() {\n  return (\n    <article className=\"product-card\">\n      <div className=\"product-image\">Image</div>\n      <h1>Laptop Pro</h1>\n      <p>$1200</p>\n      <button>Add to cart</button>\n    </article>\n  );\n}",
      "solutionCss": "body {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.product-card {\n  display: grid;\n  gap: 0.75rem;\n  width: min(100%, 320px);\n  padding: 1rem;\n  background: white;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n}\n\n.product-image {\n  display: grid;\n  place-items: center;\n  aspect-ratio: 16 / 10;\n  border-radius: 8px;\n  background: #dbeafe;\n}\n\n.product-card button {\n  min-height: 2.5rem;\n  color: white;\n  background: #2563eb;\n  border: 0;\n  border-radius: 8px;\n  font-weight: 800;\n}",
      "hints": [
        "The CSS rules must match the class names used in JSX.",
        "Start with .product-card styled as display grid.",
        "Give the image area aspect-ratio so the layout remains stable."
      ]
    },
    {
      "id": "vue-counter-component",
      "framework": "Vue",
      "category": "Logik",
      "prompt": "Build a Vue counter with ref, increment, and reset.",
      "html": "<main class=\"preview-app\">\n  <h1>Counter</h1>\n  <p>0</p>\n  <div class=\"actions\">\n    <button>Increase</button>\n    <button>Reset</button>\n  </div>\n</main>",
      "previewHtml": "<main class=\"preview-app\">\n  <h1>Counter</h1>\n  <p>0</p>\n  <div class=\"actions\">\n    <button>Increase</button>\n    <button>Reset</button>\n  </div>\n</main>",
      "css": ".preview-app {\n  display: grid;\n  gap: 0.75rem;\n  place-items: center;\n  min-height: 100vh;\n  font-family: Arial, sans-serif;\n}",
      "js": "<script setup>\n// Import ref here.\n// Create count, increment, and reset here.\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <h1>Counter</h1>\n    <p>0</p>\n    <div class=\"actions\">\n      <button>Increase</button>\n      <button>Reset</button>\n    </div>\n  </main>\n</template>",
      "solutionJs": "<script setup>\nimport { ref } from \"vue\";\n\nconst count = ref(0);\n\nfunction increment() {\n  count.value += 1;\n}\n\nfunction reset() {\n  count.value = 0;\n}\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <h1>Counter</h1>\n    <p>{{ count }}</p>\n    <div class=\"actions\">\n      <button @click=\"increment\">Increase</button>\n      <button @click=\"reset\">Reset</button>\n    </div>\n  </main>\n</template>",
      "hints": [
        "Vue uses ref for state values that change over time.",
        "In script, update the ref via count.value.",
        "In template, use @click to handle button events."
      ]
    },
    {
      "id": "vue-tabs-style",
      "framework": "Vue",
      "category": "Styling",
      "prompt": "Style Vue tabs so buttons feel clickable and the active tab is distinct.",
      "html": "<section class=\"tabs-card\">\n  <div class=\"tabs\">\n    <button class=\"is-active\">Profile</button>\n    <button>Settings</button>\n    <button>Billing</button>\n  </div>\n  <p>Profile content</p>\n</section>",
      "previewHtml": "<section class=\"tabs-card\">\n  <div class=\"tabs\">\n    <button class=\"is-active\">Profile</button>\n    <button>Settings</button>\n    <button>Billing</button>\n  </div>\n  <p>Profile content</p>\n</section>",
      "css": "body {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write tabs styling here. */",
      "js": "<template>\n  <section class=\"tabs-card\">\n    <div class=\"tabs\">\n      <button class=\"is-active\">Profile</button>\n      <button>Settings</button>\n      <button>Billing</button>\n    </div>\n    <p>Profile content</p>\n  </section>\n</template>",
      "solutionCss": "body {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.tabs-card {\n  display: grid;\n  gap: 0.75rem;\n  width: min(100%, 420px);\n  padding: 1rem;\n  background: white;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n}\n\n.tabs {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.tabs button {\n  min-height: 2.3rem;\n  padding: 0.45rem 0.7rem;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  background: white;\n}\n\n.tabs .is-active {\n  color: white;\n  background: #2563eb;\n  border-color: #2563eb;\n}",
      "hints": [
        "Style the outer wrapper first.",
        "The tabs row works well with flexbox.",
        "Active tab button needs distinct contrast."
      ]
    },
    {
      "id": "angular-counter-component",
      "framework": "Angular",
      "category": "Logik",
      "prompt": "Build an Angular counter with count, increment, and reset.",
      "html": "<main class=\"preview-app\">\n  <h1>Counter</h1>\n  <p>0</p>\n  <div class=\"actions\">\n    <button>Increase</button>\n    <button>Reset</button>\n  </div>\n</main>",
      "previewHtml": "<main class=\"preview-app\">\n  <h1>Counter</h1>\n  <p>0</p>\n  <div class=\"actions\">\n    <button>Increase</button>\n    <button>Reset</button>\n  </div>\n</main>",
      "css": ".preview-app {\n  display: grid;\n  gap: 0.75rem;\n  place-items: center;\n  min-height: 100vh;\n  font-family: Arial, sans-serif;\n}",
      "js": "// counter.component.ts\nexport class CounterComponent {\n  // Create count, increment, and reset here.\n}\n\n// counter.component.html\n<main class=\"preview-app\">\n  <h1>Counter</h1>\n  <p>{{ count }}</p>\n  <div class=\"actions\">\n    <button>Increase</button>\n    <button>Reset</button>\n  </div>\n</main>",
      "solutionJs": "// counter.component.ts\nexport class CounterComponent {\n  count = 0;\n\n  increment() {\n    this.count += 1;\n  }\n\n  reset() {\n    this.count = 0;\n  }\n}\n\n// counter.component.html\n<main class=\"preview-app\">\n  <h1>Counter</h1>\n  <p>{{ count }}</p>\n  <div class=\"actions\">\n    <button (click)=\"increment()\">Increase</button>\n    <button (click)=\"reset()\">Reset</button>\n  </div>\n</main>",
      "hints": [
        "State lives as a property in the component class.",
        "Methods update count using this.count.",
        "The template uses (click) for event binding."
      ]
    },
    {
      "id": "angular-form-style",
      "framework": "Angular",
      "category": "Styling",
      "prompt": "Style the Angular form so labels, inputs, and the submit button are clear.",
      "html": "<form class=\"contact-form\">\n  <h1>Contact</h1>\n  <label>\n    Name\n    <input placeholder=\"Name\" />\n  </label>\n  <label>\n    Email\n    <input placeholder=\"Email\" />\n  </label>\n  <button>Send</button>\n</form>",
      "previewHtml": "<form class=\"contact-form\">\n  <h1>Contact</h1>\n  <label>\n    Name\n    <input placeholder=\"Name\" />\n  </label>\n  <label>\n    Email\n    <input placeholder=\"Email\" />\n  </label>\n  <button>Send</button>\n</form>",
      "css": "body {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write form styling here. */",
      "js": "// contact-form.component.html\n<form class=\"contact-form\">\n  <h1>Contact</h1>\n  <label>\n    Name\n    <input placeholder=\"Name\" />\n  </label>\n  <label>\n    Email\n    <input placeholder=\"Email\" />\n  </label>\n  <button>Send</button>\n</form>",
      "solutionCss": "body {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.contact-form {\n  display: grid;\n  gap: 0.85rem;\n  width: min(100%, 360px);\n  padding: 1rem;\n  background: white;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n}\n\n.contact-form label {\n  display: grid;\n  gap: 0.35rem;\n  font-weight: 700;\n}\n\n.contact-form input,\n.contact-form button {\n  min-height: 2.5rem;\n  padding: 0.55rem 0.7rem;\n  border-radius: 8px;\n}\n\n.contact-form input {\n  border: 1px solid #cbd5e1;\n}\n\n.contact-form button {\n  color: white;\n  background: #2563eb;\n  border: 0;\n  font-weight: 800;\n}",
      "hints": [
        "The form needs max-width and padding.",
        "Form labels are clearer with grid and gap.",
        "Inputs and buttons should share the same height."
      ]
    },
    {
      "id": "react-filter-list",
      "framework": "React",
      "category": "Logik",
      "prompt": "Build a React list where a search field filters products as the user types.",
      "html": "<main class=\"preview-app\">\n  <h1>Products</h1>\n  <input placeholder=\"Search products\" />\n  <article>Laptop</article>\n  <article>Phone</article>\n  <article>Keyboard</article>\n</main>",
      "previewHtml": "<main class=\"preview-app\">\n  <h1>Products</h1>\n  <input placeholder=\"Search products\" />\n  <article>Laptop</article>\n  <article>Phone</article>\n  <article>Keyboard</article>\n</main>",
      "css": ".preview-app {\n  display: grid;\n  gap: 0.75rem;\n  max-width: 420px;\n  margin: 2rem auto;\n  font-family: Arial, sans-serif;\n}\n\ninput,\narticle {\n  padding: 0.7rem;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n}",
      "js": "import { useState } from \"react\";\n\nconst products = [\n  { id: 1, name: \"Laptop\" },\n  { id: 2, name: \"Phone\" },\n  { id: 3, name: \"Keyboard\" },\n];\n\nexport default function ProductSearch() {\n  // Create search state here.\n  // Create visibleProducts here.\n\n  return (\n    <main className=\"preview-app\">\n      <h1>Products</h1>\n      <input placeholder=\"Search products\" />\n      {/* Render visibleProducts here. */}\n    </main>\n  );\n}",
      "solutionJs": "import { useState } from \"react\";\n\nconst products = [\n  { id: 1, name: \"Laptop\" },\n  { id: 2, name: \"Phone\" },\n  { id: 3, name: \"Keyboard\" },\n];\n\nexport default function ProductSearch() {\n  const [search, setSearch] = useState(\"\");\n\n  const visibleProducts = products.filter((product) =>\n    product.name.toLowerCase().includes(search.toLowerCase())\n  );\n\n  return (\n    <main className=\"preview-app\">\n      <h1>Products</h1>\n      <input\n        value={search}\n        onChange={(event) => setSearch(event.target.value)}\n        placeholder=\"Search products\"\n      />\n      {visibleProducts.map((product) => (\n        <article key={product.id}>{product.name}</article>\n      ))}\n    </main>\n  );\n}",
      "hints": [
        "Search query changes based on input, so it needs useState.",
        "visibleProducts can be calculated using filter.",
        "The input should be controlled using value and onChange."
      ]
    },
    {
      "id": "react-form-style",
      "framework": "React",
      "category": "Styling",
      "prompt": "Style a React form so it is compact, clear, and easy to complete.",
      "html": "<form class=\"settings-form\">\n  <h1>Settings</h1>\n  <label>\n    Display name\n    <input placeholder=\"Alex\" />\n  </label>\n  <label>\n    Role\n    <select>\n      <option>Frontend</option>\n      <option>Fullstack</option>\n    </select>\n  </label>\n  <button>Save</button>\n</form>",
      "previewHtml": "<form class=\"settings-form\">\n  <h1>Settings</h1>\n  <label>\n    Display name\n    <input placeholder=\"Alex\" />\n  </label>\n  <label>\n    Role\n    <select>\n      <option>Frontend</option>\n      <option>Fullstack</option>\n    </select>\n  </label>\n  <button>Save</button>\n</form>",
      "css": "body {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write form styling here. */",
      "js": "export default function SettingsForm() {\n  return (\n    <form className=\"settings-form\">\n      <h1>Settings</h1>\n      <label>\n        Display name\n        <input placeholder=\"Alex\" />\n      </label>\n      <label>\n        Role\n        <select>\n          <option>Frontend</option>\n          <option>Fullstack</option>\n        </select>\n      </label>\n      <button>Save</button>\n    </form>\n  );\n}",
      "solutionCss": "body {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.settings-form {\n  display: grid;\n  gap: 0.85rem;\n  width: min(100%, 360px);\n  padding: 1rem;\n  background: white;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n}\n\n.settings-form label {\n  display: grid;\n  gap: 0.35rem;\n  font-weight: 700;\n}\n\n.settings-form input,\n.settings-form select,\n.settings-form button {\n  min-height: 2.5rem;\n  padding: 0.55rem 0.7rem;\n  border-radius: 8px;\n}\n\n.settings-form input,\n.settings-form select {\n  border: 1px solid #cbd5e1;\n}\n\n.settings-form button {\n  color: white;\n  background: #2563eb;\n  border: 0;\n  font-weight: 800;\n}",
      "hints": [
        "The form needs max-width and padding.",
        "Form labels become clean with grid and gap.",
        "Input, select, and button should share consistent height."
      ]
    },
    {
      "id": "vue-filter-list",
      "framework": "Vue",
      "category": "Logik",
      "prompt": "Build a Vue list where a computed property filters products from a search field.",
      "html": "<main class=\"preview-app\">\n  <h1>Products</h1>\n  <input placeholder=\"Search products\" />\n  <article>Laptop</article>\n  <article>Phone</article>\n  <article>Keyboard</article>\n</main>",
      "previewHtml": "<main class=\"preview-app\">\n  <h1>Products</h1>\n  <input placeholder=\"Search products\" />\n  <article>Laptop</article>\n  <article>Phone</article>\n  <article>Keyboard</article>\n</main>",
      "css": ".preview-app {\n  display: grid;\n  gap: 0.75rem;\n  max-width: 420px;\n  margin: 2rem auto;\n  font-family: Arial, sans-serif;\n}\n\ninput,\narticle {\n  padding: 0.7rem;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n}",
      "js": "<script setup>\n// Import computed and ref here.\n\nconst products = [\n  { id: 1, name: \"Laptop\" },\n  { id: 2, name: \"Phone\" },\n  { id: 3, name: \"Keyboard\" },\n];\n\n// Create search and visibleProducts here.\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <h1>Products</h1>\n    <input placeholder=\"Search products\" />\n    <!-- Render visibleProducts here. -->\n  </main>\n</template>",
      "solutionJs": "<script setup>\nimport { computed, ref } from \"vue\";\n\nconst search = ref(\"\");\nconst products = [\n  { id: 1, name: \"Laptop\" },\n  { id: 2, name: \"Phone\" },\n  { id: 3, name: \"Keyboard\" },\n];\n\nconst visibleProducts = computed(() =>\n  products.filter((product) =>\n    product.name.toLowerCase().includes(search.value.toLowerCase())\n  )\n);\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <h1>Products</h1>\n    <input v-model=\"search\" placeholder=\"Search products\" />\n    <article v-for=\"product in visibleProducts\" :key=\"product.id\">\n      {{ product.name }}\n    </article>\n  </main>\n</template>",
      "hints": [
        "The search text can be stored in a ref.",
        "visibleProducts is suitable as a computed property.",
        "v-model binds the input field to search."
      ]
    },
    {
      "id": "vue-card-grid-style",
      "framework": "Vue",
      "category": "Styling",
      "prompt": "Style a Vue card list as a responsive grid with distinct cards.",
      "html": "<section class=\"topic-grid\">\n  <article>Components</article>\n  <article>Reactivity</article>\n  <article>Computed</article>\n  <article>Props</article>\n</section>",
      "previewHtml": "<section class=\"topic-grid\">\n  <article>Components</article>\n  <article>Reactivity</article>\n  <article>Computed</article>\n  <article>Props</article>\n</section>",
      "css": "body {\n  margin: 0;\n  padding: 1rem;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write grid styling here. */",
      "js": "<template>\n  <section class=\"topic-grid\">\n    <article>Components</article>\n    <article>Reactivity</article>\n    <article>Computed</article>\n    <article>Props</article>\n  </section>\n</template>",
      "solutionCss": "body {\n  margin: 0;\n  padding: 1rem;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.topic-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 0.75rem;\n  max-width: 760px;\n  margin: 0 auto;\n}\n\n.topic-grid article {\n  min-height: 6rem;\n  padding: 1rem;\n  background: white;\n  border: 1px solid #dbe3ef;\n  border-radius: 10px;\n  font-weight: 800;\n}",
      "hints": [
        "Grid styling should be placed on .topic-grid.",
        "auto-fit and minmax make the layout responsive.",
        "Cards need padding, border, and min-height."
      ]
    },
    {
      "id": "angular-filter-list",
      "framework": "Angular",
      "category": "Logik",
      "prompt": "Build an Angular list where a getter filters products from a search field.",
      "html": "<main class=\"preview-app\">\n  <h1>Products</h1>\n  <input placeholder=\"Search products\" />\n  <article>Laptop</article>\n  <article>Phone</article>\n  <article>Keyboard</article>\n</main>",
      "previewHtml": "<main class=\"preview-app\">\n  <h1>Products</h1>\n  <input placeholder=\"Search products\" />\n  <article>Laptop</article>\n  <article>Phone</article>\n  <article>Keyboard</article>\n</main>",
      "css": ".preview-app {\n  display: grid;\n  gap: 0.75rem;\n  max-width: 420px;\n  margin: 2rem auto;\n  font-family: Arial, sans-serif;\n}\n\ninput,\narticle {\n  padding: 0.7rem;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n}",
      "js": "// product-search.component.ts\nexport class ProductSearchComponent {\n  search = \"\";\n  products = [\n    { id: 1, name: \"Laptop\" },\n    { id: 2, name: \"Phone\" },\n    { id: 3, name: \"Keyboard\" },\n  ];\n\n  // Create visibleProducts getter here.\n}\n\n// product-search.component.html\n<main class=\"preview-app\">\n  <h1>Products</h1>\n  <input placeholder=\"Search products\" />\n  <!-- Render visibleProducts here. -->\n</main>",
      "solutionJs": "// product-search.component.ts\nexport class ProductSearchComponent {\n  search = \"\";\n  products = [\n    { id: 1, name: \"Laptop\" },\n    { id: 2, name: \"Phone\" },\n    { id: 3, name: \"Keyboard\" },\n  ];\n\n  get visibleProducts() {\n    return this.products.filter((product) =>\n      product.name.toLowerCase().includes(this.search.toLowerCase())\n    );\n  }\n}\n\n// product-search.component.html\n<main class=\"preview-app\">\n  <h1>Products</h1>\n  <input [(ngModel)]=\"search\" placeholder=\"Search products\" />\n  <article *ngFor=\"let product of visibleProducts\">\n    {{ product.name }}\n  </article>\n</main>",
      "hints": [
        "The search query can be stored as a property.",
        "visibleProducts can be implemented as a getter.",
        "[(ngModel)] requires FormsModule in a real Angular module."
      ]
    },
    {
      "id": "angular-table-style",
      "framework": "Angular",
      "category": "Styling",
      "prompt": "Style an Angular table so rows are effortless to scan.",
      "html": "<table class=\"data-table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Role</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Alex</td>\n      <td>Frontend</td>\n      <td>Active</td>\n    </tr>\n    <tr>\n      <td>Sara</td>\n      <td>Fullstack</td>\n      <td>Active</td>\n    </tr>\n  </tbody>\n</table>",
      "previewHtml": "<table class=\"data-table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Role</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Alex</td>\n      <td>Frontend</td>\n      <td>Active</td>\n    </tr>\n    <tr>\n      <td>Sara</td>\n      <td>Fullstack</td>\n      <td>Active</td>\n    </tr>\n  </tbody>\n</table>",
      "css": "body {\n  margin: 0;\n  padding: 1rem;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write table styling here. */",
      "js": "// users-table.component.html\n<table class=\"data-table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Role</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <!-- Render rows with *ngFor in a real component. -->\n  </tbody>\n</table>",
      "solutionCss": "body {\n  margin: 0;\n  padding: 1rem;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.data-table {\n  width: min(100%, 720px);\n  margin: 0 auto;\n  border-collapse: collapse;\n  background: white;\n  border: 1px solid #dbe3ef;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.data-table th,\n.data-table td {\n  padding: 0.75rem;\n  text-align: left;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.data-table th {\n  color: #475569;\n  background: #f1f5f9;\n  font-size: 0.8rem;\n}",
      "hints": [
        "Start with width: 100% and border-collapse: collapse on the table.",
        "th and td should share equal padding.",
        "The header can have a distinct background for scannability."
      ]
    },
    {
      "id": "react-todo-toggle",
      "title": "React todo toggle",
      "framework": "React",
      "category": "Logik",
      "prompt": "Build a React list where each todo can be toggled completed or active.",
      "html": "<main class=\"preview-app\"><h1>Todos</h1><button>Read docs</button><button>Build UI</button></main>",
      "previewHtml": "<main class=\"preview-app\"><h1>Todos</h1><button>Read docs</button><button class=\"is-done\">Build UI</button></main>",
      "css": ".preview-app { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }\nbutton { min-height: 2.5rem; border: 1px solid #cbd5e1; border-radius: 8px; background: white; }\n.is-done { text-decoration: line-through; opacity: 0.65; }",
      "js": "import { useState } from \"react\";\n\nconst initialTodos = [\n  { id: 1, text: \"Read docs\", done: false },\n  { id: 2, text: \"Build UI\", done: true },\n];\n\nexport default function TodoToggle() {\n  // Place todos in state and create toggleTodo here.\n  return <main className=\"preview-app\">{/* Render todos as buttons here. */}</main>;\n}",
      "solutionJs": "import { useState } from \"react\";\n\nconst initialTodos = [\n  { id: 1, text: \"Read docs\", done: false },\n  { id: 2, text: \"Build UI\", done: true },\n];\n\nexport default function TodoToggle() {\n  const [todos, setTodos] = useState(initialTodos);\n\n  function toggleTodo(todoId) {\n    setTodos((currentTodos) =>\n      currentTodos.map((todo) =>\n        todo.id === todoId ? { ...todo, done: !todo.done } : todo\n      )\n    );\n  }\n\n  return (\n    <main className=\"preview-app\">\n      <h1>Todos</h1>\n      {todos.map((todo) => (\n        <button\n          className={todo.done ? \"is-done\" : \"\"}\n          key={todo.id}\n          onClick={() => toggleTodo(todo.id)}\n        >\n          {todo.text}\n        </button>\n      ))}\n    </main>\n  );\n}",
      "hints": [
        "The list changes, so todos need to be held in state.",
        "map fits when updating one item while preserving the list.",
        "Class name can conditionally reflect todo.done."
      ]
    },
    {
      "id": "react-modal-toggle",
      "title": "React modal",
      "framework": "React",
      "category": "Logik",
      "prompt": "Build a React modal that can be opened and closed.",
      "html": "<main class=\"preview-app\"><button>Open modal</button><section class=\"modal\"><p>Modal content</p><button>Close</button></section></main>",
      "previewHtml": "<main class=\"preview-app\"><button>Open modal</button><section class=\"modal\"><p>Modal content</p><button>Close</button></section></main>",
      "css": ".preview-app { display: grid; gap: 1rem; place-items: center; min-height: 100vh; font-family: Arial, sans-serif; }\n.modal { padding: 1rem; border: 1px solid #cbd5e1; border-radius: 10px; background: white; }",
      "js": "import { useState } from \"react\";\n\nexport default function ModalExample() {\n  // Create isOpen state here.\n  return (\n    <main className=\"preview-app\">\n      <button>Open modal</button>\n      {/* Show modal only when isOpen is true. */}\n    </main>\n  );\n}",
      "solutionJs": "import { useState } from \"react\";\n\nexport default function ModalExample() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <main className=\"preview-app\">\n      <button onClick={() => setIsOpen(true)}>Open modal</button>\n      {isOpen && (\n        <section className=\"modal\" role=\"dialog\" aria-modal=\"true\">\n          <p>Modal content</p>\n          <button onClick={() => setIsOpen(false)}>Close</button>\n        </section>\n      )}\n    </main>\n  );\n}",
      "hints": [
        "The modal has two states: open or closed.",
        "Rendera modalen villkorligt.",
        "Close button sets isOpen to false."
      ]
    },
    {
      "id": "react-tabs-state",
      "title": "React tabs",
      "framework": "React",
      "category": "Logik",
      "prompt": "Build React tabs where the active tab controls which panel is displayed.",
      "html": "<section class=\"tabs-card\"><div class=\"tabs\"><button class=\"is-active\">Profile</button><button>Settings</button></div><p>Profile content</p></section>",
      "previewHtml": "<section class=\"tabs-card\"><div class=\"tabs\"><button class=\"is-active\">Profile</button><button>Settings</button></div><p>Profile content</p></section>",
      "css": ".tabs-card { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }\n.tabs { display: flex; gap: 0.5rem; }\n.is-active { color: white; background: #2563eb; }",
      "js": "import { useState } from \"react\";\n\nconst tabs = {\n  profile: \"Profile content\",\n  settings: \"Settings content\",\n};\n\nexport default function Tabs() {\n  // Create activeTab state here.\n  return <section className=\"tabs-card\">{/* Render tabs and panel here. */}</section>;\n}",
      "solutionJs": "import { useState } from \"react\";\n\nconst tabs = {\n  profile: \"Profile content\",\n  settings: \"Settings content\",\n};\n\nexport default function Tabs() {\n  const [activeTab, setActiveTab] = useState(\"profile\");\n\n  return (\n    <section className=\"tabs-card\">\n      <div className=\"tabs\">\n        {Object.keys(tabs).map((tab) => (\n          <button\n            className={activeTab === tab ? \"is-active\" : \"\"}\n            key={tab}\n            onClick={() => setActiveTab(tab)}\n          >\n            {tab}\n          </button>\n        ))}\n      </div>\n      <p>{tabs[activeTab]}</p>\n    </section>\n  );\n}",
      "hints": [
        "The active tab is stored in state.",
        "Object.keys can create tab buttons from the object keys.",
        "The active panel reads tabs[activeTab]."
      ]
    },
    {
      "id": "react-accordion-state",
      "title": "React accordion",
      "framework": "React",
      "category": "Logik",
      "prompt": "Build a React accordion where one question can be opened at a time.",
      "html": "<main class=\"preview-app\"><article><button>What is React?</button><p>A UI library.</p></article></main>",
      "previewHtml": "<main class=\"preview-app\"><article><button>What is React?</button><p>A UI library.</p></article></main>",
      "css": ".preview-app { display: grid; gap: 0.75rem; max-width: 520px; margin: 2rem auto; font-family: Arial, sans-serif; }\narticle { border: 1px solid #cbd5e1; border-radius: 8px; padding: 0.75rem; }",
      "js": "import { useState } from \"react\";\n\nconst faqs = [\n  { id: 1, question: \"What is React?\", answer: \"A UI library.\" },\n  { id: 2, question: \"What is state?\", answer: \"Data that can change.\" },\n];\n\nexport default function Accordion() {\n  // Create activeId state here.\n  return <main className=\"preview-app\">{/* Render questions here. */}</main>;\n}",
      "solutionJs": "import { useState } from \"react\";\n\nconst faqs = [\n  { id: 1, question: \"What is React?\", answer: \"A UI library.\" },\n  { id: 2, question: \"What is state?\", answer: \"Data that can change.\" },\n];\n\nexport default function Accordion() {\n  const [activeId, setActiveId] = useState(null);\n\n  return (\n    <main className=\"preview-app\">\n      {faqs.map((faq) => (\n        <article key={faq.id}>\n          <button onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}>\n            {faq.question}\n          </button>\n          {activeId === faq.id && <p>{faq.answer}</p>}\n        </article>\n      ))}\n    </main>\n  );\n}",
      "hints": [
        "Store the id of the opened question.",
        "Clicking the same question can close it.",
        "Display the answer using conditional rendering."
      ]
    },
    {
      "id": "vue-todo-toggle",
      "title": "Vue todo toggle",
      "framework": "Vue",
      "category": "Logik",
      "prompt": "Build a Vue list where each todo can be toggled completed or active.",
      "html": "<main class=\"preview-app\"><h1>Todos</h1><button>Read docs</button><button class=\"is-done\">Build UI</button></main>",
      "previewHtml": "<main class=\"preview-app\"><h1>Todos</h1><button>Read docs</button><button class=\"is-done\">Build UI</button></main>",
      "css": ".preview-app { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }\nbutton { min-height: 2.5rem; border: 1px solid #cbd5e1; border-radius: 8px; background: white; }\n.is-done { text-decoration: line-through; opacity: 0.65; }",
      "js": "<script setup>\n// Import ref here.\n// Create todos and toggleTodo here.\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <h1>Todos</h1>\n    <!-- Render todos as buttons here. -->\n  </main>\n</template>",
      "solutionJs": "<script setup>\nimport { ref } from \"vue\";\n\nconst todos = ref([\n  { id: 1, text: \"Read docs\", done: false },\n  { id: 2, text: \"Build UI\", done: true },\n]);\n\nfunction toggleTodo(todoId) {\n  const todo = todos.value.find((item) => item.id === todoId);\n  todo.done = !todo.done;\n}\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <h1>Todos</h1>\n    <button\n      v-for=\"todo in todos\"\n      :class=\"{ 'is-done': todo.done }\"\n      :key=\"todo.id\"\n      @click=\"toggleTodo(todo.id)\"\n    >\n      {{ todo.text }}\n    </button>\n  </main>\n</template>",
      "hints": [
        "Todos change dynamically, so they fit cleanly in ref.",
        "Find the matching todo via id.",
        ":class can conditionally depend on todo.done."
      ]
    },
    {
      "id": "vue-modal-toggle",
      "title": "Vue modal",
      "framework": "Vue",
      "category": "Logik",
      "prompt": "Build a Vue modal that can be opened and closed.",
      "html": "<main class=\"preview-app\"><button>Open modal</button><section class=\"modal\"><p>Modal content</p><button>Close</button></section></main>",
      "previewHtml": "<main class=\"preview-app\"><button>Open modal</button><section class=\"modal\"><p>Modal content</p><button>Close</button></section></main>",
      "css": ".preview-app { display: grid; gap: 1rem; place-items: center; min-height: 100vh; font-family: Arial, sans-serif; }\n.modal { padding: 1rem; border: 1px solid #cbd5e1; border-radius: 10px; background: white; }",
      "js": "<script setup>\n// Import ref and create isOpen here.\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <button>Open modal</button>\n    <!-- Show the modal with v-if here. -->\n  </main>\n</template>",
      "solutionJs": "<script setup>\nimport { ref } from \"vue\";\n\nconst isOpen = ref(false);\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <button @click=\"isOpen = true\">Open modal</button>\n    <section v-if=\"isOpen\" class=\"modal\" role=\"dialog\" aria-modal=\"true\">\n      <p>Modal content</p>\n      <button @click=\"isOpen = false\">Close</button>\n    </section>\n  </main>\n</template>",
      "hints": [
        "The modal has a boolean state.",
        "v-if fits well for showing or hiding the modal.",
        "@click can mutate isOpen directly."
      ]
    },
    {
      "id": "vue-form-validation",
      "title": "Vue form validation",
      "framework": "Vue",
      "category": "Logik",
      "prompt": "Build a Vue form that displays an error if email lacks '@'.",
      "html": "<form class=\"preview-app\"><input placeholder=\"Email\" /><p>Email must include @.</p></form>",
      "previewHtml": "<form class=\"preview-app\"><input placeholder=\"Email\" /><p>Email must include @.</p></form>",
      "css": ".preview-app { display: grid; gap: 0.75rem; max-width: 360px; margin: 2rem auto; font-family: Arial, sans-serif; }\ninput { min-height: 2.5rem; padding: 0.55rem; border: 1px solid #cbd5e1; border-radius: 8px; }\np { color: #dc2626; margin: 0; }",
      "js": "<script setup>\n// Import computed and ref here.\n// Create email and isInvalid here.\n</script>\n\n<template>\n  <form class=\"preview-app\">\n    <input placeholder=\"Email\" />\n    <!-- Show error message with v-if here. -->\n  </form>\n</template>",
      "solutionJs": "<script setup>\nimport { computed, ref } from \"vue\";\n\nconst email = ref(\"\");\nconst isInvalid = computed(\n  () => email.value.length > 0 && !email.value.includes(\"@\")\n);\n</script>\n\n<template>\n  <form class=\"preview-app\">\n    <input v-model=\"email\" placeholder=\"Email\" />\n    <p v-if=\"isInvalid\">Email must include @.</p>\n  </form>\n</template>",
      "hints": [
        "Email can be stored in a ref.",
        "The error message can be a computed property.",
        "v-if renders the error message when the condition is true."
      ]
    },
    {
      "id": "vue-modal-style",
      "title": "Vue modal styling",
      "framework": "Vue",
      "category": "Styling",
      "prompt": "Style a Vue modal with an overlay, dialog card, and actions.",
      "html": "<div class=\"overlay\"><section class=\"modal\"><h1>Confirm</h1><p>Are you sure?</p><div class=\"actions\"><button>Cancel</button><button>Save</button></div></section></div>",
      "previewHtml": "<div class=\"overlay\"><section class=\"modal\"><h1>Confirm</h1><p>Are you sure?</p><div class=\"actions\"><button>Cancel</button><button>Save</button></div></section></div>",
      "css": "body { margin: 0; font-family: Arial, sans-serif; }\n/* Write modal styling here. */",
      "js": "<template>\n  <div class=\"overlay\">\n    <section class=\"modal\">\n      <h1>Confirm</h1>\n      <p>Are you sure?</p>\n      <div class=\"actions\">\n        <button>Cancel</button>\n        <button>Save</button>\n      </div>\n    </section>\n  </div>\n</template>",
      "solutionCss": "body { margin: 0; font-family: Arial, sans-serif; }\n.overlay { display: grid; place-items: center; min-height: 100vh; padding: 1rem; background: rgba(15, 23, 42, 0.65); }\n.modal { display: grid; gap: 0.75rem; width: min(100%, 360px); padding: 1rem; background: white; border-radius: 12px; }\n.modal h1, .modal p { margin: 0; }\n.actions { display: flex; gap: 0.5rem; justify-content: flex-end; }\nbutton { min-height: 2.35rem; padding: 0.5rem 0.75rem; border: 0; border-radius: 8px; font-weight: 800; }",
      "hints": [
        "The overlay should cover the viewport.",
        "The dialog needs max-width and padding.",
        "Actions align well with justify-content: flex-end."
      ]
    },
    {
      "id": "angular-todo-toggle",
      "title": "Angular todo toggle",
      "framework": "Angular",
      "category": "Logik",
      "prompt": "Build an Angular list where each todo can be toggled completed or active.",
      "html": "<main class=\"preview-app\"><h1>Todos</h1><button>Read docs</button><button class=\"is-done\">Build UI</button></main>",
      "previewHtml": "<main class=\"preview-app\"><h1>Todos</h1><button>Read docs</button><button class=\"is-done\">Build UI</button></main>",
      "css": ".preview-app { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }\nbutton { min-height: 2.5rem; border: 1px solid #cbd5e1; border-radius: 8px; background: white; }\n.is-done { text-decoration: line-through; opacity: 0.65; }",
      "js": "// todo-list.component.ts\nexport class TodoListComponent {\n  todos = [\n    { id: 1, text: \"Read docs\", done: false },\n    { id: 2, text: \"Build UI\", done: true },\n  ];\n\n  // Create toggleTodo here.\n}\n\n// todo-list.component.html\n<main class=\"preview-app\">\n  <h1>Todos</h1>\n  <!-- Render todos with *ngFor here. -->\n</main>",
      "solutionJs": "// todo-list.component.ts\nexport class TodoListComponent {\n  todos = [\n    { id: 1, text: \"Read docs\", done: false },\n    { id: 2, text: \"Build UI\", done: true },\n  ];\n\n  toggleTodo(todoId) {\n    this.todos = this.todos.map((todo) =>\n      todo.id === todoId ? { ...todo, done: !todo.done } : todo\n    );\n  }\n}\n\n// todo-list.component.html\n<main class=\"preview-app\">\n  <h1>Todos</h1>\n  <button\n    *ngFor=\"let todo of todos\"\n    [class.is-done]=\"todo.done\"\n    (click)=\"toggleTodo(todo.id)\"\n  >\n    {{ todo.text }}\n  </button>\n</main>",
      "hints": [
        "The method needs to know which id was clicked.",
        "map can return a new array with the modified todo.",
        "[class.is-done] can reflect todo.done."
      ]
    },
    {
      "id": "angular-modal-toggle",
      "title": "Angular modal",
      "framework": "Angular",
      "category": "Logik",
      "prompt": "Build an Angular modal that can be opened and closed.",
      "html": "<main class=\"preview-app\"><button>Open modal</button><section class=\"modal\"><p>Modal content</p><button>Close</button></section></main>",
      "previewHtml": "<main class=\"preview-app\"><button>Open modal</button><section class=\"modal\"><p>Modal content</p><button>Close</button></section></main>",
      "css": ".preview-app { display: grid; gap: 1rem; place-items: center; min-height: 100vh; font-family: Arial, sans-serif; }\n.modal { padding: 1rem; border: 1px solid #cbd5e1; border-radius: 10px; background: white; }",
      "js": "// modal.component.ts\nexport class ModalComponent {\n  // Create isOpen, open, and close here.\n}\n\n// modal.component.html\n<main class=\"preview-app\">\n  <button>Open modal</button>\n  <!-- Show modal with *ngIf here. -->\n</main>",
      "solutionJs": "// modal.component.ts\nexport class ModalComponent {\n  isOpen = false;\n\n  open() {\n    this.isOpen = true;\n  }\n\n  close() {\n    this.isOpen = false;\n  }\n}\n\n// modal.component.html\n<main class=\"preview-app\">\n  <button (click)=\"open()\">Open modal</button>\n  <section *ngIf=\"isOpen\" class=\"modal\" role=\"dialog\" aria-modal=\"true\">\n    <p>Modal content</p>\n    <button (click)=\"close()\">Close</button>\n  </section>\n</main>",
      "hints": [
        "isOpen can be a boolean property.",
        "*ngIf shows the modal when isOpen is true.",
        "(click) binds the buttons to component methods."
      ]
    },
    {
      "id": "angular-tabs-state",
      "title": "Angular tabs",
      "framework": "Angular",
      "category": "Logik",
      "prompt": "Build Angular tabs where the active tab controls the panel content.",
      "html": "<section class=\"tabs-card\"><div class=\"tabs\"><button class=\"is-active\">Profile</button><button>Settings</button></div><p>Profile content</p></section>",
      "previewHtml": "<section class=\"tabs-card\"><div class=\"tabs\"><button class=\"is-active\">Profile</button><button>Settings</button></div><p>Profile content</p></section>",
      "css": ".tabs-card { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }\n.tabs { display: flex; gap: 0.5rem; }\n.is-active { color: white; background: #2563eb; }",
      "js": "// tabs.component.ts\nexport class TabsComponent {\n  activeTab = \"profile\";\n  tabs = {\n    profile: \"Profile content\",\n    settings: \"Settings content\",\n  };\n}\n\n// tabs.component.html\n<section class=\"tabs-card\">\n  <!-- Render tab buttons and active panel here. -->\n</section>",
      "solutionJs": "// tabs.component.ts\nexport class TabsComponent {\n  activeTab = \"profile\";\n  tabs = {\n    profile: \"Profile content\",\n    settings: \"Settings content\",\n  };\n}\n\n// tabs.component.html\n<section class=\"tabs-card\">\n  <div class=\"tabs\">\n    <button\n      [class.is-active]=\"activeTab === 'profile'\"\n      (click)=\"activeTab = 'profile'\"\n    >\n      Profile\n    </button>\n    <button\n      [class.is-active]=\"activeTab === 'settings'\"\n      (click)=\"activeTab = 'settings'\"\n    >\n      Settings\n    </button>\n  </div>\n  <p>{{ tabs[activeTab] }}</p>\n</section>",
      "hints": [
        "activeTab can be a string property.",
        "[class.is-active] markerar vald knapp.",
        "The panel reads tabs[activeTab]."
      ]
    },
    {
      "id": "angular-navbar-style",
      "title": "Angular navbar",
      "framework": "Angular",
      "category": "Styling",
      "prompt": "Style an Angular navbar with brand, links, and action button.",
      "html": "<header class=\"app-nav\"><strong>AngularPrep</strong><nav><a>Components</a><a>Forms</a><a>HTTP</a></nav><button>Start</button></header>",
      "previewHtml": "<header class=\"app-nav\"><strong>AngularPrep</strong><nav><a>Components</a><a>Forms</a><a>HTTP</a></nav><button>Start</button></header>",
      "css": "body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; }\n/* Write navbar styling here. */",
      "js": "// app-nav.component.html\n<header class=\"app-nav\">\n  <strong>AngularPrep</strong>\n  <nav>\n    <a>Components</a>\n    <a>Forms</a>\n    <a>HTTP</a>\n  </nav>\n  <button>Start</button>\n</header>",
      "solutionCss": "body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; }\n.app-nav { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 1rem; padding: 0.75rem 1rem; background: white; border-bottom: 1px solid #dbe3ef; }\n.app-nav nav { display: flex; gap: 0.75rem; justify-content: center; }\n.app-nav a { color: #334155; font-weight: 700; }\n.app-nav button { min-height: 2.25rem; padding: 0.45rem 0.75rem; color: white; background: #0f172a; border: 0; border-radius: 8px; font-weight: 800; }",
      "hints": [
        "The header can be a three-column CSS grid.",
        "Nav links can sit inside a flex container.",
        "The action button needs clear contrast."
      ]
    },
    {
      "id": "react-empty-state",
      "title": "React empty state",
      "framework": "React",
      "category": "Logik",
      "prompt": "Show an empty state in React when the list contains no items.",
      "html": "<main class=\"preview-app\"><h1>Products</h1><p>No products found.</p></main>",
      "previewHtml": "<main class=\"preview-app\"><h1>Products</h1><p>No products found.</p></main>",
      "css": ".preview-app { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }\np { padding: 0.75rem; border: 1px dashed #94a3b8; border-radius: 8px; color: #64748b; }",
      "js": "const products = [];\n\nexport default function ProductList() {\n  return (\n    <main className=\"preview-app\">\n      <h1>Products</h1>\n      {/* Show empty state or list here. */}\n    </main>\n  );\n}",
      "solutionJs": "const products = [];\n\nexport default function ProductList() {\n  return (\n    <main className=\"preview-app\">\n      <h1>Products</h1>\n      {products.length === 0 ? (\n        <p>No products found.</p>\n      ) : (\n        products.map((product) => <article key={product.id}>{product.name}</article>)\n      )}\n    </main>\n  );\n}",
      "hints": [
        "Kolla listans length.",
        "Ternary fits when the UI toggles between two distinct states.",
        "The list renders only when items exist."
      ]
    },
    {
      "id": "react-badge-style",
      "title": "React badge styling",
      "framework": "React",
      "category": "Styling",
      "prompt": "Style compact status badges for a React component.",
      "html": "<main class=\"badge-row\"><span class=\"badge success\">Active</span><span class=\"badge warning\">Pending</span><span class=\"badge danger\">Blocked</span></main>",
      "previewHtml": "<main class=\"badge-row\"><span class=\"badge success\">Active</span><span class=\"badge warning\">Pending</span><span class=\"badge danger\">Blocked</span></main>",
      "css": "body { display: grid; place-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }\n/* Write badge styling here. */",
      "js": "export default function StatusBadges() {\n  return (\n    <main className=\"badge-row\">\n      <span className=\"badge success\">Active</span>\n      <span className=\"badge warning\">Pending</span>\n      <span className=\"badge danger\">Blocked</span>\n    </main>\n  );\n}",
      "solutionCss": "body { display: grid; place-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }\n.badge-row { display: flex; gap: 0.5rem; }\n.badge { padding: 0.35rem 0.55rem; border-radius: 999px; font-size: 0.8rem; font-weight: 800; }\n.success { color: #166534; background: #dcfce7; }\n.warning { color: #92400e; background: #fef3c7; }\n.danger { color: #991b1b; background: #fee2e2; }",
      "hints": [
        "Badges look great with border-radius: 999px.",
        "Use distinct colors per status class.",
        "Keep the font size compact."
      ]
    },
    {
      "id": "vue-empty-state",
      "title": "Vue empty state",
      "framework": "Vue",
      "category": "Logik",
      "prompt": "Show an empty state in Vue when the list contains no items.",
      "html": "<main class=\"preview-app\"><h1>Products</h1><p>No products found.</p></main>",
      "previewHtml": "<main class=\"preview-app\"><h1>Products</h1><p>No products found.</p></main>",
      "css": ".preview-app { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }\np { padding: 0.75rem; border: 1px dashed #94a3b8; border-radius: 8px; color: #64748b; }",
      "js": "<script setup>\nconst products = [];\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <h1>Products</h1>\n    <!-- Show empty state or v-for here. -->\n  </main>\n</template>",
      "solutionJs": "<script setup>\nconst products = [];\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <h1>Products</h1>\n    <p v-if=\"products.length === 0\">No products found.</p>\n    <article v-for=\"product in products\" v-else :key=\"product.id\">\n      {{ product.name }}\n    </article>\n  </main>\n</template>",
      "hints": [
        "Kolla products.length.",
        "v-if can show the empty state.",
        "v-for renders the list when items exist."
      ]
    },
    {
      "id": "vue-badge-style",
      "title": "Vue badge styling",
      "framework": "Vue",
      "category": "Styling",
      "prompt": "Style compact status badges for a Vue component.",
      "html": "<main class=\"badge-row\"><span class=\"badge success\">Active</span><span class=\"badge warning\">Pending</span><span class=\"badge danger\">Blocked</span></main>",
      "previewHtml": "<main class=\"badge-row\"><span class=\"badge success\">Active</span><span class=\"badge warning\">Pending</span><span class=\"badge danger\">Blocked</span></main>",
      "css": "body { display: grid; place-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }\n/* Write badge styling here. */",
      "js": "<template>\n  <main class=\"badge-row\">\n    <span class=\"badge success\">Active</span>\n    <span class=\"badge warning\">Pending</span>\n    <span class=\"badge danger\">Blocked</span>\n  </main>\n</template>",
      "solutionCss": "body { display: grid; place-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }\n.badge-row { display: flex; gap: 0.5rem; }\n.badge { padding: 0.35rem 0.55rem; border-radius: 999px; font-size: 0.8rem; font-weight: 800; }\n.success { color: #166534; background: #dcfce7; }\n.warning { color: #92400e; background: #fef3c7; }\n.danger { color: #991b1b; background: #fee2e2; }",
      "hints": [
        "Badges should be compact yet legible.",
        "Use status classes for distinct color themes.",
        "Flex ger en enkel radlayout."
      ]
    },
    {
      "id": "angular-empty-state",
      "title": "Angular empty state",
      "framework": "Angular",
      "category": "Logik",
      "prompt": "Show an empty state in Angular when the list contains no items.",
      "html": "<main class=\"preview-app\"><h1>Products</h1><p>No products found.</p></main>",
      "previewHtml": "<main class=\"preview-app\"><h1>Products</h1><p>No products found.</p></main>",
      "css": ".preview-app { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }\np { padding: 0.75rem; border: 1px dashed #94a3b8; border-radius: 8px; color: #64748b; }",
      "js": "// product-list.component.ts\nexport class ProductListComponent {\n  products = [];\n}\n\n// product-list.component.html\n<main class=\"preview-app\">\n  <h1>Products</h1>\n  <!-- Show empty state or *ngFor here. -->\n</main>",
      "solutionJs": "// product-list.component.ts\nexport class ProductListComponent {\n  products = [];\n}\n\n// product-list.component.html\n<main class=\"preview-app\">\n  <h1>Products</h1>\n  <p *ngIf=\"products.length === 0\">No products found.</p>\n  <article *ngFor=\"let product of products\">\n    {{ product.name }}\n  </article>\n</main>",
      "hints": [
        "Kolla products.length.",
        "*ngIf shows the empty state.",
        "*ngFor renderar listan."
      ]
    },
    {
      "id": "angular-badge-style",
      "title": "Angular badge styling",
      "framework": "Angular",
      "category": "Styling",
      "prompt": "Style compact status badges for an Angular component.",
      "html": "<main class=\"badge-row\"><span class=\"badge success\">Active</span><span class=\"badge warning\">Pending</span><span class=\"badge danger\">Blocked</span></main>",
      "previewHtml": "<main class=\"badge-row\"><span class=\"badge success\">Active</span><span class=\"badge warning\">Pending</span><span class=\"badge danger\">Blocked</span></main>",
      "css": "body { display: grid; place-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }\n/* Write badge styling here. */",
      "js": "// status-badges.component.html\n<main class=\"badge-row\">\n  <span class=\"badge success\">Active</span>\n  <span class=\"badge warning\">Pending</span>\n  <span class=\"badge danger\">Blocked</span>\n</main>",
      "solutionCss": "body { display: grid; place-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }\n.badge-row { display: flex; gap: 0.5rem; }\n.badge { padding: 0.35rem 0.55rem; border-radius: 999px; font-size: 0.8rem; font-weight: 800; }\n.success { color: #166534; background: #dcfce7; }\n.warning { color: #92400e; background: #fef3c7; }\n.danger { color: #991b1b; background: #fee2e2; }",
      "hints": [
        "Badges fit naturally with a pill shape.",
        "Each status class gets its own dedicated color.",
        "Keep layout clean and simple using flex."
      ]
    }
  ]
};

export const liveLabExercises = [
  {
    "id": "live-lab-logic-counter",
    "type": "live-lab",
    "title": "Counter",
    "difficulty": "JavaScript",
    "estimatedTime": "Logik",
    "description": "Make the button increment the counter and the reset button reset the value to 0.",
    "framework": "JavaScript",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "logic-counter",
        "category": "Logik",
        "prompt": "Make the button increment the counter and the reset button reset the value to 0.",
        "html": "<main class=\"app\">\n  <h1>Counter</h1>\n  <p id=\"count\">0</p>\n  <div class=\"actions\">\n    <button id=\"increase\">Increase</button>\n    <button id=\"reset\">Reset</button>\n  </div>\n</main>",
        "css": ".app {\n  display: grid;\n  gap: 1rem;\n  place-items: center;\n  min-height: 100vh;\n  font-family: Arial, sans-serif;\n}\n\n#count {\n  font-size: 3rem;\n  font-weight: 800;\n}",
        "js": "const countElement = document.querySelector(\"#count\");\nconst increaseButton = document.querySelector(\"#increase\");\nconst resetButton = document.querySelector(\"#reset\");\n\n// Write your solution here.",
        "solutionJs": "const countElement = document.querySelector(\"#count\");\nconst increaseButton = document.querySelector(\"#increase\");\nconst resetButton = document.querySelector(\"#reset\");\n\nlet count = 0;\n\nfunction renderCount() {\n  countElement.textContent = count;\n}\n\nincreaseButton.addEventListener(\"click\", () => {\n  count += 1;\n  renderCount();\n});\n\nresetButton.addEventListener(\"click\", () => {\n  count = 0;\n  renderCount();\n});",
        "hints": [
          "You need a variable to keep track of count.",
          "Each button needs its own event listener.",
          "When count changes, textContent needs to be updated."
        ]
      }
    ]
  },
  {
    "id": "live-lab-logic-filter-list",
    "type": "live-lab",
    "title": "Filter list",
    "difficulty": "JavaScript",
    "estimatedTime": "Logik",
    "description": "Make the input field filter the list as the user types.",
    "framework": "JavaScript",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "logic-filter-list",
        "category": "Logik",
        "prompt": "Make the input field filter the list as the user types.",
        "html": "<main class=\"app\">\n  <h1>Users</h1>\n  <input id=\"search\" placeholder=\"Search users\" />\n  <ul id=\"users\"></ul>\n</main>",
        "css": ".app {\n  display: grid;\n  gap: 0.75rem;\n  max-width: 420px;\n  margin: 2rem auto;\n  font-family: Arial, sans-serif;\n}\n\ninput {\n  padding: 0.7rem;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n}",
        "js": "const users = [\"Alice\", \"Alex\", \"Sara\", \"Mira\"];\nconst searchInput = document.querySelector(\"#search\");\nconst usersList = document.querySelector(\"#users\");\n\n// Write your solution here.",
        "solutionJs": "const users = [\"Alice\", \"Alex\", \"Sara\", \"Mira\"];\nconst searchInput = document.querySelector(\"#search\");\nconst usersList = document.querySelector(\"#users\");\n\nfunction renderUsers(search = \"\") {\n  const visibleUsers = users.filter((user) =>\n    user.toLowerCase().includes(search.toLowerCase())\n  );\n\n  usersList.innerHTML = visibleUsers\n    .map((user) => `<li>${user}</li>`)\n    .join(\"\");\n}\n\nsearchInput.addEventListener(\"input\", (event) => {\n  renderUsers(event.target.value);\n});\n\nrenderUsers();",
        "hints": [
          "Start with a render function that outputs the entire list.",
          "filter and includes are well suited for searching.",
          "Listen to the input event to update dynamically as the user types."
        ]
      }
    ]
  },
  {
    "id": "live-lab-styling-product-card",
    "type": "live-lab",
    "title": "Product card",
    "difficulty": "JavaScript",
    "estimatedTime": "Styling",
    "description": "Style the card into a clear product component with an image area, price, and button.",
    "framework": "JavaScript",
    "labCategory": "Styling",
    "challenges": [
      {
        "id": "styling-product-card",
        "category": "Styling",
        "prompt": "Style the card into a clear product component with an image area, price, and button.",
        "html": "<main class=\"page\">\n  <article class=\"product-card\">\n    <div class=\"product-image\">Image</div>\n    <h1>Laptop Pro</h1>\n    <p class=\"price\">$1200</p>\n    <button>Add to cart</button>\n  </article>\n</main>",
        "css": ".page {\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write your styling here. */",
        "js": "// This exercise focuses on HTML and CSS.",
        "solutionCss": ".page {\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.product-card {\n  display: grid;\n  gap: 0.75rem;\n  width: min(100%, 320px);\n  padding: 1rem;\n  background: white;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);\n}\n\n.product-image {\n  display: grid;\n  place-items: center;\n  aspect-ratio: 16 / 10;\n  border-radius: 8px;\n  color: #0f172a;\n  background: #dbeafe;\n  font-weight: 800;\n}\n\n.product-card h1 {\n  margin: 0;\n  font-size: 1.15rem;\n}\n\n.price {\n  margin: 0;\n  font-weight: 800;\n}\n\n.product-card button {\n  min-height: 2.5rem;\n  border: 0;\n  border-radius: 8px;\n  color: white;\n  background: #2563eb;\n  font-weight: 800;\n}",
        "hints": [
          "Start with the card layout: display grid and gap.",
          "Ge bildytan en stabil aspect-ratio.",
          "The button needs distinct color, height, and border-radius."
        ]
      }
    ]
  },
  {
    "id": "live-lab-styling-responsive-grid",
    "type": "live-lab",
    "title": "Responsive grid",
    "difficulty": "JavaScript",
    "estimatedTime": "Styling",
    "description": "Make the list responsive so the cards arrange in a compact grid adapting to screen width.",
    "framework": "JavaScript",
    "labCategory": "Styling",
    "challenges": [
      {
        "id": "styling-responsive-grid",
        "category": "Styling",
        "prompt": "Make the list responsive so the cards arrange in a compact grid adapting to screen width.",
        "html": "<main class=\"page\">\n  <section class=\"card-grid\">\n    <article>React</article>\n    <article>Vue</article>\n    <article>Angular</article>\n    <article>JavaScript</article>\n  </section>\n</main>",
        "css": ".page {\n  min-height: 100vh;\n  padding: 1rem;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write your grid styling here. */",
        "js": "// This exercise focuses on CSS grid.",
        "solutionCss": ".page {\n  min-height: 100vh;\n  padding: 1rem;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.card-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 0.75rem;\n  max-width: 760px;\n  margin: 0 auto;\n}\n\n.card-grid article {\n  padding: 1rem;\n  min-height: 6rem;\n  border: 1px solid #dbe3ef;\n  border-radius: 10px;\n  background: white;\n  font-weight: 800;\n}",
        "hints": [
          "Grid styling should be placed on the wrapper, not on individual cards.",
          "repeat(auto-fit, minmax(...)) fits well when column count adapts automatically.",
          "Give cards padding and min-height so the preview renders clearly."
        ]
      }
    ]
  },
  {
    "id": "live-lab-logic-todo-list",
    "type": "live-lab",
    "title": "Todo list",
    "difficulty": "JavaScript",
    "estimatedTime": "Logik",
    "description": "Allow the user to add new todos and remove existing todos from the list.",
    "framework": "JavaScript",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "logic-todo-list",
        "category": "Logik",
        "prompt": "Allow the user to add new todos and remove existing todos from the list.",
        "html": "<main class=\"app\">\n  <h1>Todos</h1>\n  <form id=\"todo-form\">\n    <input id=\"todo-input\" placeholder=\"New todo\" />\n    <button>Add</button>\n  </form>\n  <ul id=\"todo-list\"></ul>\n</main>",
        "css": ".app {\n  display: grid;\n  gap: 0.75rem;\n  max-width: 420px;\n  margin: 2rem auto;\n  font-family: Arial, sans-serif;\n}\n\nform {\n  display: flex;\n  gap: 0.5rem;\n}\n\ninput,\nbutton {\n  min-height: 2.4rem;\n  padding: 0.55rem 0.7rem;\n}",
        "js": "const form = document.querySelector(\"#todo-form\");\nconst input = document.querySelector(\"#todo-input\");\nconst list = document.querySelector(\"#todo-list\");\n\nconst todos = [];\n\n// Write your solution here.",
        "solutionJs": "const form = document.querySelector(\"#todo-form\");\nconst input = document.querySelector(\"#todo-input\");\nconst list = document.querySelector(\"#todo-list\");\n\nconst todos = [];\n\nfunction renderTodos() {\n  list.innerHTML = \"\";\n\n  todos.forEach((todo) => {\n    const item = document.createElement(\"li\");\n    const button = document.createElement(\"button\");\n\n    item.textContent = todo.text;\n    button.textContent = \"Remove\";\n    button.addEventListener(\"click\", () => {\n      const index = todos.findIndex((item) => item.id === todo.id);\n      todos.splice(index, 1);\n      renderTodos();\n    });\n\n    item.append(button);\n    list.append(item);\n  });\n}\n\nform.addEventListener(\"submit\", (event) => {\n  event.preventDefault();\n\n  if (!input.value.trim()) return;\n\n  todos.push({ id: Date.now(), text: input.value });\n  input.value = \"\";\n  renderTodos();\n});",
        "hints": [
          "Start with a render function that repaints the list.",
          "The form needs preventDefault so the page does not reload.",
          "Store each todo as an object with id and text.",
          "Remove the correct todo by comparing id."
        ]
      }
    ]
  },
  {
    "id": "live-lab-logic-tabs",
    "type": "live-lab",
    "title": "Tabs",
    "difficulty": "JavaScript",
    "estimatedTime": "Logik",
    "description": "Make tab buttons switch the active panel and highlight the selected tab.",
    "framework": "JavaScript",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "logic-tabs",
        "category": "Logik",
        "prompt": "Make tab buttons switch the active panel and highlight the selected tab.",
        "html": "<main class=\"app\">\n  <div class=\"tabs\">\n    <button class=\"tab is-active\" data-tab=\"html\">HTML</button>\n    <button class=\"tab\" data-tab=\"css\">CSS</button>\n    <button class=\"tab\" data-tab=\"js\">JavaScript</button>\n  </div>\n  <section id=\"panel\">HTML controls the structure.</section>\n</main>",
        "css": ".app {\n  display: grid;\n  gap: 1rem;\n  max-width: 520px;\n  margin: 2rem auto;\n  font-family: Arial, sans-serif;\n}\n\n.tabs {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.tab.is-active {\n  color: white;\n  background: #2563eb;\n}",
        "js": "const tabs = document.querySelectorAll(\".tab\");\nconst panel = document.querySelector(\"#panel\");\n\nconst content = {\n  html: \"HTML controls the structure.\",\n  css: \"CSS controls the layout and style.\",\n  js: \"JavaScript controls interaction.\",\n};\n\n// Write your solution here.",
        "solutionJs": "const tabs = document.querySelectorAll(\".tab\");\nconst panel = document.querySelector(\"#panel\");\n\nconst content = {\n  html: \"HTML controls the structure.\",\n  css: \"CSS controls the layout and style.\",\n  js: \"JavaScript controls interaction.\",\n};\n\ntabs.forEach((tab) => {\n  tab.addEventListener(\"click\", () => {\n    tabs.forEach((item) => item.classList.remove(\"is-active\"));\n    tab.classList.add(\"is-active\");\n    panel.textContent = content[tab.dataset.tab];\n  });\n});",
        "hints": [
          "Each button has a data-tab attribute pointing to the correct content.",
          "When a button is clicked, all other buttons need to lose is-active.",
          "The panel text can be looked up from the content object."
        ]
      }
    ]
  },
  {
    "id": "live-lab-logic-accordion",
    "type": "live-lab",
    "title": "Accordion",
    "difficulty": "JavaScript",
    "estimatedTime": "Logik",
    "description": "Make each question expandable and collapsible as an accordion.",
    "framework": "JavaScript",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "logic-accordion",
        "category": "Logik",
        "prompt": "Make each question expandable and collapsible as an accordion.",
        "html": "<main class=\"app\">\n  <h1>FAQ</h1>\n  <article class=\"faq-item\">\n    <button class=\"faq-question\">What is React?</button>\n    <p class=\"faq-answer\">A UI library.</p>\n  </article>\n  <article class=\"faq-item\">\n    <button class=\"faq-question\">What is state?</button>\n    <p class=\"faq-answer\">Data that can change.</p>\n  </article>\n</main>",
        "css": ".app {\n  display: grid;\n  gap: 0.75rem;\n  max-width: 520px;\n  margin: 2rem auto;\n  font-family: Arial, sans-serif;\n}\n\n.faq-answer {\n  display: none;\n}\n\n.faq-item.is-open .faq-answer {\n  display: block;\n}",
        "js": "const questions = document.querySelectorAll(\".faq-question\");\n\n// Write your solution here.",
        "solutionJs": "const questions = document.querySelectorAll(\".faq-question\");\n\nquestions.forEach((question) => {\n  question.addEventListener(\"click\", () => {\n    const item = question.closest(\".faq-item\");\n    item.classList.toggle(\"is-open\");\n  });\n});",
        "hints": [
          "Attach the click listener to the button.",
          "closest can locate the article wrapper.",
          "CSS reveals the answer when the wrapper carries the is-open class."
        ]
      }
    ]
  },
  {
    "id": "live-lab-logic-theme-toggle",
    "type": "live-lab",
    "title": "Theme toggle",
    "difficulty": "JavaScript",
    "estimatedTime": "Logik",
    "description": "Make the button toggle dark mode on the page and update the button label.",
    "framework": "JavaScript",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "logic-theme-toggle",
        "category": "Logik",
        "prompt": "Make the button toggle dark mode on the page and update the button label.",
        "html": "<main class=\"app\">\n  <h1>Theme toggle</h1>\n  <p>Click the button to switch theme.</p>\n  <button id=\"theme-button\">Dark mode</button>\n</main>",
        "css": "body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n  color: #0f172a;\n}\n\nbody.dark {\n  background: #0f172a;\n  color: #f8fafc;\n}\n\n.app {\n  display: grid;\n  gap: 0.75rem;\n  place-items: center;\n  min-height: 100vh;\n}",
        "js": "const button = document.querySelector(\"#theme-button\");\n\n// Write your solution here.",
        "solutionJs": "const button = document.querySelector(\"#theme-button\");\n\nbutton.addEventListener(\"click\", () => {\n  document.body.classList.toggle(\"dark\");\n\n  const isDark = document.body.classList.contains(\"dark\");\n  button.textContent = isDark ? \"Light mode\" : \"Dark mode\";\n});",
        "hints": [
          "Dark mode can be controlled with a class on the body element.",
          "classList.toggle turns the class on and off.",
          "contains can determine which button label to show."
        ]
      }
    ]
  },
  {
    "id": "live-lab-styling-login-form",
    "type": "live-lab",
    "title": "Login form",
    "difficulty": "JavaScript",
    "estimatedTime": "Styling",
    "description": "Style the form into a clean login panel with labels, inputs, and an action button.",
    "framework": "JavaScript",
    "labCategory": "Styling",
    "challenges": [
      {
        "id": "styling-login-form",
        "category": "Styling",
        "prompt": "Style the form into a clean login panel with labels, inputs, and an action button.",
        "html": "<main class=\"page\">\n  <form class=\"login-form\">\n    <h1>Log in</h1>\n    <label>\n      Email\n      <input placeholder=\"user@example.com\" />\n    </label>\n    <label>\n      Password\n      <input type=\"password\" placeholder=\"Password\" />\n    </label>\n    <button>Log in</button>\n  </form>\n</main>",
        "css": ".page {\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  font-family: Arial, sans-serif;\n  background: #eef2ff;\n}\n\n/* Write your form styling here. */",
        "js": "// This exercise focuses on CSS.",
        "solutionCss": ".page {\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  font-family: Arial, sans-serif;\n  background: #eef2ff;\n}\n\n.login-form {\n  display: grid;\n  gap: 0.85rem;\n  width: min(100%, 340px);\n  padding: 1rem;\n  background: white;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n}\n\n.login-form h1 {\n  margin: 0;\n  font-size: 1.35rem;\n}\n\n.login-form label {\n  display: grid;\n  gap: 0.35rem;\n  font-weight: 700;\n}\n\n.login-form input,\n.login-form button {\n  min-height: 2.5rem;\n  padding: 0.55rem 0.7rem;\n  border-radius: 8px;\n}\n\n.login-form input {\n  border: 1px solid #cbd5e1;\n}\n\n.login-form button {\n  border: 0;\n  color: white;\n  background: #2563eb;\n  font-weight: 800;\n}",
        "hints": [
          "The form needs a max-width so it doesn't stretch too wide.",
          "Form labels are clearer with display grid and gap.",
          "Inputs and buttons should share matching height and border-radius."
        ]
      }
    ]
  },
  {
    "id": "live-lab-styling-navbar",
    "type": "live-lab",
    "title": "Navbar",
    "difficulty": "JavaScript",
    "estimatedTime": "Styling",
    "description": "Style navigation so the logo, links, and action button align on a compact row.",
    "framework": "JavaScript",
    "labCategory": "Styling",
    "challenges": [
      {
        "id": "styling-navbar",
        "category": "Styling",
        "prompt": "Style navigation so the logo, links, and action button align on a compact row.",
        "html": "<header class=\"navbar\">\n  <strong>DevPrep</strong>\n  <nav>\n    <a href=\"#\">Questions</a>\n    <a href=\"#\">Live coding</a>\n    <a href=\"#\">Training</a>\n  </nav>\n  <button>Start</button>\n</header>",
        "css": "body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write your navbar styling here. */",
        "js": "// This exercise focuses on layout and CSS.",
        "solutionCss": "body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.navbar {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  gap: 1rem;\n  align-items: center;\n  padding: 0.75rem 1rem;\n  background: white;\n  border-bottom: 1px solid #dbe3ef;\n}\n\n.navbar nav {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: center;\n}\n\n.navbar a {\n  color: #334155;\n  text-decoration: none;\n  font-weight: 700;\n}\n\n.navbar button {\n  min-height: 2.2rem;\n  padding: 0.45rem 0.75rem;\n  color: white;\n  background: #0f172a;\n  border: 0;\n  border-radius: 8px;\n  font-weight: 800;\n}",
        "hints": [
          "The header can be a three-column CSS grid.",
          "Nav links can sit inside a flex container.",
          "The button should have its own background for distinct contrast."
        ]
      }
    ]
  },
  {
    "id": "live-lab-styling-modal-overlay",
    "type": "live-lab",
    "title": "Modal overlay",
    "difficulty": "JavaScript",
    "estimatedTime": "Styling",
    "description": "Style the modal with an overlay backdrop, centered dialog, and prominent actions.",
    "framework": "JavaScript",
    "labCategory": "Styling",
    "challenges": [
      {
        "id": "styling-modal-overlay",
        "category": "Styling",
        "prompt": "Style the modal with an overlay backdrop, centered dialog, and prominent actions.",
        "html": "<div class=\"overlay\">\n  <section class=\"modal\">\n    <h1>Delete item?</h1>\n    <p>This action cannot be undone.</p>\n    <div class=\"modal-actions\">\n      <button class=\"secondary\">Cancel</button>\n      <button class=\"danger\">Delete</button>\n    </div>\n  </section>\n</div>",
        "css": "body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n}\n\n/* Write your modal styling here. */",
        "js": "// This exercise focuses on overlay and modal CSS.",
        "solutionCss": "body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n}\n\n.overlay {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  padding: 1rem;\n  background: rgba(15, 23, 42, 0.65);\n}\n\n.modal {\n  display: grid;\n  gap: 0.75rem;\n  width: min(100%, 360px);\n  padding: 1rem;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.25);\n}\n\n.modal h1,\n.modal p {\n  margin: 0;\n}\n\n.modal-actions {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n}\n\n.modal button {\n  min-height: 2.35rem;\n  padding: 0.5rem 0.75rem;\n  border: 0;\n  border-radius: 8px;\n  font-weight: 800;\n}\n\n.secondary {\n  background: #e2e8f0;\n}\n\n.danger {\n  color: white;\n  background: #dc2626;\n}",
        "hints": [
          "The overlay should cover the entire viewport.",
          "place-items: center can center the modal dialog.",
          "Actions are clearer with flexbox and justify-content: flex-end."
        ]
      }
    ]
  },
  {
    "id": "live-lab-styling-stats-cards",
    "type": "live-lab",
    "title": "Stats cards",
    "difficulty": "JavaScript",
    "estimatedTime": "Styling",
    "description": "Style the stats cards into scannable dashboard metrics in a responsive grid.",
    "framework": "JavaScript",
    "labCategory": "Styling",
    "challenges": [
      {
        "id": "styling-stats-cards",
        "category": "Styling",
        "prompt": "Style the stats cards into scannable dashboard metrics in a responsive grid.",
        "html": "<main class=\"dashboard\">\n  <article class=\"stat-card\">\n    <span>Users</span>\n    <strong>1280</strong>\n  </article>\n  <article class=\"stat-card\">\n    <span>Orders</span>\n    <strong>342</strong>\n  </article>\n  <article class=\"stat-card\">\n    <span>Revenue</span>\n    <strong>$18k</strong>\n  </article>\n</main>",
        "css": "body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write your dashboard styling here. */",
        "js": "// This exercise focuses on responsive dashboard styling.",
        "solutionCss": "body {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.dashboard {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 0.75rem;\n  max-width: 760px;\n  margin: 2rem auto;\n  padding: 1rem;\n}\n\n.stat-card {\n  display: grid;\n  gap: 0.45rem;\n  padding: 1rem;\n  background: white;\n  border: 1px solid #dbe3ef;\n  border-radius: 10px;\n}\n\n.stat-card span {\n  color: #64748b;\n  font-size: 0.8rem;\n  font-weight: 700;\n}\n\n.stat-card strong {\n  color: #0f172a;\n  font-size: 1.6rem;\n}",
        "hints": [
          "The wrapper should be a CSS grid with auto-fit columns.",
          "The cards need distinct padding and subtle border.",
          "Label and metric value should have contrasting size and color."
        ]
      }
    ]
  },
  {
    "id": "live-lab-react-counter-component",
    "type": "live-lab",
    "title": "React counter",
    "difficulty": "React",
    "estimatedTime": "Logik",
    "description": "Build a React counter where the button increases the count and reset sets it back to 0.",
    "framework": "React",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "react-counter-component",
        "framework": "React",
        "category": "Logik",
        "prompt": "Build a React counter where the button increases the count and reset sets it back to 0.",
        "html": "<main class=\"preview-app\">\n  <h1>Counter</h1>\n  <p>0</p>\n  <div class=\"actions\">\n    <button>Increase</button>\n    <button>Reset</button>\n  </div>\n</main>",
        "previewHtml": "<main class=\"preview-app\">\n  <h1>Counter</h1>\n  <p>0</p>\n  <div class=\"actions\">\n    <button>Increase</button>\n    <button>Reset</button>\n  </div>\n</main>",
        "css": ".preview-app {\n  display: grid;\n  gap: 0.75rem;\n  place-items: center;\n  min-height: 100vh;\n  font-family: Arial, sans-serif;\n}",
        "js": "import { useState } from \"react\";\n\nexport default function Counter() {\n  // Create count state here.\n\n  return (\n    <main className=\"preview-app\">\n      <h1>Counter</h1>\n      <p>0</p>\n      <div className=\"actions\">\n        <button>Increase</button>\n        <button>Reset</button>\n      </div>\n    </main>\n  );\n}",
        "solutionJs": "import { useState } from \"react\";\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <main className=\"preview-app\">\n      <h1>Counter</h1>\n      <p>{count}</p>\n      <div className=\"actions\">\n        <button onClick={() => setCount(count + 1)}>Increase</button>\n        <button onClick={() => setCount(0)}>Reset</button>\n      </div>\n    </main>\n  );\n}",
        "hints": [
          "count changes based on user action, so it needs useState.",
          "The increase button should call setCount.",
          "Reset can set the value directly to 0."
        ]
      }
    ]
  },
  {
    "id": "live-lab-react-product-card-style",
    "type": "live-lab",
    "title": "React product card",
    "difficulty": "React",
    "estimatedTime": "Styling",
    "description": "Style the React component as a clear product card with an image area and button.",
    "framework": "React",
    "labCategory": "Styling",
    "challenges": [
      {
        "id": "react-product-card-style",
        "framework": "React",
        "category": "Styling",
        "prompt": "Style the React component as a clear product card with an image area and button.",
        "html": "<article class=\"product-card\">\n  <div class=\"product-image\">Image</div>\n  <h1>Laptop Pro</h1>\n  <p>$1200</p>\n  <button>Add to cart</button>\n</article>",
        "previewHtml": "<article class=\"product-card\">\n  <div class=\"product-image\">Image</div>\n  <h1>Laptop Pro</h1>\n  <p>$1200</p>\n  <button>Add to cart</button>\n</article>",
        "css": "body {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write the card styling here. */",
        "js": "export default function ProductCard() {\n  return (\n    <article className=\"product-card\">\n      <div className=\"product-image\">Image</div>\n      <h1>Laptop Pro</h1>\n      <p>$1200</p>\n      <button>Add to cart</button>\n    </article>\n  );\n}",
        "solutionCss": "body {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.product-card {\n  display: grid;\n  gap: 0.75rem;\n  width: min(100%, 320px);\n  padding: 1rem;\n  background: white;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n}\n\n.product-image {\n  display: grid;\n  place-items: center;\n  aspect-ratio: 16 / 10;\n  border-radius: 8px;\n  background: #dbeafe;\n}\n\n.product-card button {\n  min-height: 2.5rem;\n  color: white;\n  background: #2563eb;\n  border: 0;\n  border-radius: 8px;\n  font-weight: 800;\n}",
        "hints": [
          "The CSS rules must match the class names used in JSX.",
          "Start with .product-card styled as display grid.",
          "Give the image area aspect-ratio so the layout remains stable."
        ]
      }
    ]
  },
  {
    "id": "live-lab-vue-counter-component",
    "type": "live-lab",
    "title": "Vue counter",
    "difficulty": "Vue",
    "estimatedTime": "Logik",
    "description": "Build a Vue counter with ref, increment, and reset.",
    "framework": "Vue",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "vue-counter-component",
        "framework": "Vue",
        "category": "Logik",
        "prompt": "Build a Vue counter with ref, increment, and reset.",
        "html": "<main class=\"preview-app\">\n  <h1>Counter</h1>\n  <p>0</p>\n  <div class=\"actions\">\n    <button>Increase</button>\n    <button>Reset</button>\n  </div>\n</main>",
        "previewHtml": "<main class=\"preview-app\">\n  <h1>Counter</h1>\n  <p>0</p>\n  <div class=\"actions\">\n    <button>Increase</button>\n    <button>Reset</button>\n  </div>\n</main>",
        "css": ".preview-app {\n  display: grid;\n  gap: 0.75rem;\n  place-items: center;\n  min-height: 100vh;\n  font-family: Arial, sans-serif;\n}",
        "js": "<script setup>\n// Import ref here.\n// Create count, increment, and reset here.\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <h1>Counter</h1>\n    <p>0</p>\n    <div class=\"actions\">\n      <button>Increase</button>\n      <button>Reset</button>\n    </div>\n  </main>\n</template>",
        "solutionJs": "<script setup>\nimport { ref } from \"vue\";\n\nconst count = ref(0);\n\nfunction increment() {\n  count.value += 1;\n}\n\nfunction reset() {\n  count.value = 0;\n}\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <h1>Counter</h1>\n    <p>{{ count }}</p>\n    <div class=\"actions\">\n      <button @click=\"increment\">Increase</button>\n      <button @click=\"reset\">Reset</button>\n    </div>\n  </main>\n</template>",
        "hints": [
          "Vue uses ref for state values that change over time.",
          "In script, update the ref via count.value.",
          "In template, use @click to handle button events."
        ]
      }
    ]
  },
  {
    "id": "live-lab-vue-tabs-style",
    "type": "live-lab",
    "title": "Vue tabs",
    "difficulty": "Vue",
    "estimatedTime": "Styling",
    "description": "Style Vue tabs so buttons feel clickable and the active tab is distinct.",
    "framework": "Vue",
    "labCategory": "Styling",
    "challenges": [
      {
        "id": "vue-tabs-style",
        "framework": "Vue",
        "category": "Styling",
        "prompt": "Style Vue tabs so buttons feel clickable and the active tab is distinct.",
        "html": "<section class=\"tabs-card\">\n  <div class=\"tabs\">\n    <button class=\"is-active\">Profile</button>\n    <button>Settings</button>\n    <button>Billing</button>\n  </div>\n  <p>Profile content</p>\n</section>",
        "previewHtml": "<section class=\"tabs-card\">\n  <div class=\"tabs\">\n    <button class=\"is-active\">Profile</button>\n    <button>Settings</button>\n    <button>Billing</button>\n  </div>\n  <p>Profile content</p>\n</section>",
        "css": "body {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write tabs styling here. */",
        "js": "<template>\n  <section class=\"tabs-card\">\n    <div class=\"tabs\">\n      <button class=\"is-active\">Profile</button>\n      <button>Settings</button>\n      <button>Billing</button>\n    </div>\n    <p>Profile content</p>\n  </section>\n</template>",
        "solutionCss": "body {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.tabs-card {\n  display: grid;\n  gap: 0.75rem;\n  width: min(100%, 420px);\n  padding: 1rem;\n  background: white;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n}\n\n.tabs {\n  display: flex;\n  gap: 0.5rem;\n}\n\n.tabs button {\n  min-height: 2.3rem;\n  padding: 0.45rem 0.7rem;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n  background: white;\n}\n\n.tabs .is-active {\n  color: white;\n  background: #2563eb;\n  border-color: #2563eb;\n}",
        "hints": [
          "Style the outer wrapper first.",
          "The tabs row works well with flexbox.",
          "Active tab button needs distinct contrast."
        ]
      }
    ]
  },
  {
    "id": "live-lab-angular-counter-component",
    "type": "live-lab",
    "title": "Angular counter",
    "difficulty": "Angular",
    "estimatedTime": "Logik",
    "description": "Build an Angular counter with count, increment, and reset.",
    "framework": "Angular",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "angular-counter-component",
        "framework": "Angular",
        "category": "Logik",
        "prompt": "Build an Angular counter with count, increment, and reset.",
        "html": "<main class=\"preview-app\">\n  <h1>Counter</h1>\n  <p>0</p>\n  <div class=\"actions\">\n    <button>Increase</button>\n    <button>Reset</button>\n  </div>\n</main>",
        "previewHtml": "<main class=\"preview-app\">\n  <h1>Counter</h1>\n  <p>0</p>\n  <div class=\"actions\">\n    <button>Increase</button>\n    <button>Reset</button>\n  </div>\n</main>",
        "css": ".preview-app {\n  display: grid;\n  gap: 0.75rem;\n  place-items: center;\n  min-height: 100vh;\n  font-family: Arial, sans-serif;\n}",
        "js": "// counter.component.ts\nexport class CounterComponent {\n  // Create count, increment, and reset here.\n}\n\n// counter.component.html\n<main class=\"preview-app\">\n  <h1>Counter</h1>\n  <p>{{ count }}</p>\n  <div class=\"actions\">\n    <button>Increase</button>\n    <button>Reset</button>\n  </div>\n</main>",
        "solutionJs": "// counter.component.ts\nexport class CounterComponent {\n  count = 0;\n\n  increment() {\n    this.count += 1;\n  }\n\n  reset() {\n    this.count = 0;\n  }\n}\n\n// counter.component.html\n<main class=\"preview-app\">\n  <h1>Counter</h1>\n  <p>{{ count }}</p>\n  <div class=\"actions\">\n    <button (click)=\"increment()\">Increase</button>\n    <button (click)=\"reset()\">Reset</button>\n  </div>\n</main>",
        "hints": [
          "State lives as a property in the component class.",
          "Methods update count using this.count.",
          "The template uses (click) for event binding."
        ]
      }
    ]
  },
  {
    "id": "live-lab-angular-form-style",
    "type": "live-lab",
    "title": "Angular form",
    "difficulty": "Angular",
    "estimatedTime": "Styling",
    "description": "Style the Angular form so labels, inputs, and the submit button are clear.",
    "framework": "Angular",
    "labCategory": "Styling",
    "challenges": [
      {
        "id": "angular-form-style",
        "framework": "Angular",
        "category": "Styling",
        "prompt": "Style the Angular form so labels, inputs, and the submit button are clear.",
        "html": "<form class=\"contact-form\">\n  <h1>Contact</h1>\n  <label>\n    Name\n    <input placeholder=\"Name\" />\n  </label>\n  <label>\n    Email\n    <input placeholder=\"Email\" />\n  </label>\n  <button>Send</button>\n</form>",
        "previewHtml": "<form class=\"contact-form\">\n  <h1>Contact</h1>\n  <label>\n    Name\n    <input placeholder=\"Name\" />\n  </label>\n  <label>\n    Email\n    <input placeholder=\"Email\" />\n  </label>\n  <button>Send</button>\n</form>",
        "css": "body {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write form styling here. */",
        "js": "// contact-form.component.html\n<form class=\"contact-form\">\n  <h1>Contact</h1>\n  <label>\n    Name\n    <input placeholder=\"Name\" />\n  </label>\n  <label>\n    Email\n    <input placeholder=\"Email\" />\n  </label>\n  <button>Send</button>\n</form>",
        "solutionCss": "body {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.contact-form {\n  display: grid;\n  gap: 0.85rem;\n  width: min(100%, 360px);\n  padding: 1rem;\n  background: white;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n}\n\n.contact-form label {\n  display: grid;\n  gap: 0.35rem;\n  font-weight: 700;\n}\n\n.contact-form input,\n.contact-form button {\n  min-height: 2.5rem;\n  padding: 0.55rem 0.7rem;\n  border-radius: 8px;\n}\n\n.contact-form input {\n  border: 1px solid #cbd5e1;\n}\n\n.contact-form button {\n  color: white;\n  background: #2563eb;\n  border: 0;\n  font-weight: 800;\n}",
        "hints": [
          "The form needs max-width and padding.",
          "Form labels are clearer with grid and gap.",
          "Inputs and buttons should share the same height."
        ]
      }
    ]
  },
  {
    "id": "live-lab-react-filter-list",
    "type": "live-lab",
    "title": "React filter list",
    "difficulty": "React",
    "estimatedTime": "Logik",
    "description": "Build a React list where a search field filters products as the user types.",
    "framework": "React",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "react-filter-list",
        "framework": "React",
        "category": "Logik",
        "prompt": "Build a React list where a search field filters products as the user types.",
        "html": "<main class=\"preview-app\">\n  <h1>Products</h1>\n  <input placeholder=\"Search products\" />\n  <article>Laptop</article>\n  <article>Phone</article>\n  <article>Keyboard</article>\n</main>",
        "previewHtml": "<main class=\"preview-app\">\n  <h1>Products</h1>\n  <input placeholder=\"Search products\" />\n  <article>Laptop</article>\n  <article>Phone</article>\n  <article>Keyboard</article>\n</main>",
        "css": ".preview-app {\n  display: grid;\n  gap: 0.75rem;\n  max-width: 420px;\n  margin: 2rem auto;\n  font-family: Arial, sans-serif;\n}\n\ninput,\narticle {\n  padding: 0.7rem;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n}",
        "js": "import { useState } from \"react\";\n\nconst products = [\n  { id: 1, name: \"Laptop\" },\n  { id: 2, name: \"Phone\" },\n  { id: 3, name: \"Keyboard\" },\n];\n\nexport default function ProductSearch() {\n  // Create search state here.\n  // Create visibleProducts here.\n\n  return (\n    <main className=\"preview-app\">\n      <h1>Products</h1>\n      <input placeholder=\"Search products\" />\n      {/* Render visibleProducts here. */}\n    </main>\n  );\n}",
        "solutionJs": "import { useState } from \"react\";\n\nconst products = [\n  { id: 1, name: \"Laptop\" },\n  { id: 2, name: \"Phone\" },\n  { id: 3, name: \"Keyboard\" },\n];\n\nexport default function ProductSearch() {\n  const [search, setSearch] = useState(\"\");\n\n  const visibleProducts = products.filter((product) =>\n    product.name.toLowerCase().includes(search.toLowerCase())\n  );\n\n  return (\n    <main className=\"preview-app\">\n      <h1>Products</h1>\n      <input\n        value={search}\n        onChange={(event) => setSearch(event.target.value)}\n        placeholder=\"Search products\"\n      />\n      {visibleProducts.map((product) => (\n        <article key={product.id}>{product.name}</article>\n      ))}\n    </main>\n  );\n}",
        "hints": [
          "Search query changes based on input, so it needs useState.",
          "visibleProducts can be calculated using filter.",
          "The input should be controlled using value and onChange."
        ]
      }
    ]
  },
  {
    "id": "live-lab-react-form-style",
    "type": "live-lab",
    "title": "React form",
    "difficulty": "React",
    "estimatedTime": "Styling",
    "description": "Style a React form so it is compact, clear, and easy to complete.",
    "framework": "React",
    "labCategory": "Styling",
    "challenges": [
      {
        "id": "react-form-style",
        "framework": "React",
        "category": "Styling",
        "prompt": "Style a React form so it is compact, clear, and easy to complete.",
        "html": "<form class=\"settings-form\">\n  <h1>Settings</h1>\n  <label>\n    Display name\n    <input placeholder=\"Alex\" />\n  </label>\n  <label>\n    Role\n    <select>\n      <option>Frontend</option>\n      <option>Fullstack</option>\n    </select>\n  </label>\n  <button>Save</button>\n</form>",
        "previewHtml": "<form class=\"settings-form\">\n  <h1>Settings</h1>\n  <label>\n    Display name\n    <input placeholder=\"Alex\" />\n  </label>\n  <label>\n    Role\n    <select>\n      <option>Frontend</option>\n      <option>Fullstack</option>\n    </select>\n  </label>\n  <button>Save</button>\n</form>",
        "css": "body {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write form styling here. */",
        "js": "export default function SettingsForm() {\n  return (\n    <form className=\"settings-form\">\n      <h1>Settings</h1>\n      <label>\n        Display name\n        <input placeholder=\"Alex\" />\n      </label>\n      <label>\n        Role\n        <select>\n          <option>Frontend</option>\n          <option>Fullstack</option>\n        </select>\n      </label>\n      <button>Save</button>\n    </form>\n  );\n}",
        "solutionCss": "body {\n  display: grid;\n  place-items: center;\n  min-height: 100vh;\n  margin: 0;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.settings-form {\n  display: grid;\n  gap: 0.85rem;\n  width: min(100%, 360px);\n  padding: 1rem;\n  background: white;\n  border: 1px solid #dbe3ef;\n  border-radius: 12px;\n}\n\n.settings-form label {\n  display: grid;\n  gap: 0.35rem;\n  font-weight: 700;\n}\n\n.settings-form input,\n.settings-form select,\n.settings-form button {\n  min-height: 2.5rem;\n  padding: 0.55rem 0.7rem;\n  border-radius: 8px;\n}\n\n.settings-form input,\n.settings-form select {\n  border: 1px solid #cbd5e1;\n}\n\n.settings-form button {\n  color: white;\n  background: #2563eb;\n  border: 0;\n  font-weight: 800;\n}",
        "hints": [
          "The form needs max-width and padding.",
          "Form labels become clean with grid and gap.",
          "Input, select, and button should share consistent height."
        ]
      }
    ]
  },
  {
    "id": "live-lab-vue-filter-list",
    "type": "live-lab",
    "title": "Vue filter list",
    "difficulty": "Vue",
    "estimatedTime": "Logik",
    "description": "Build a Vue list where a computed property filters products from a search field.",
    "framework": "Vue",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "vue-filter-list",
        "framework": "Vue",
        "category": "Logik",
        "prompt": "Build a Vue list where a computed property filters products from a search field.",
        "html": "<main class=\"preview-app\">\n  <h1>Products</h1>\n  <input placeholder=\"Search products\" />\n  <article>Laptop</article>\n  <article>Phone</article>\n  <article>Keyboard</article>\n</main>",
        "previewHtml": "<main class=\"preview-app\">\n  <h1>Products</h1>\n  <input placeholder=\"Search products\" />\n  <article>Laptop</article>\n  <article>Phone</article>\n  <article>Keyboard</article>\n</main>",
        "css": ".preview-app {\n  display: grid;\n  gap: 0.75rem;\n  max-width: 420px;\n  margin: 2rem auto;\n  font-family: Arial, sans-serif;\n}\n\ninput,\narticle {\n  padding: 0.7rem;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n}",
        "js": "<script setup>\n// Import computed and ref here.\n\nconst products = [\n  { id: 1, name: \"Laptop\" },\n  { id: 2, name: \"Phone\" },\n  { id: 3, name: \"Keyboard\" },\n];\n\n// Create search and visibleProducts here.\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <h1>Products</h1>\n    <input placeholder=\"Search products\" />\n    <!-- Render visibleProducts here. -->\n  </main>\n</template>",
        "solutionJs": "<script setup>\nimport { computed, ref } from \"vue\";\n\nconst search = ref(\"\");\nconst products = [\n  { id: 1, name: \"Laptop\" },\n  { id: 2, name: \"Phone\" },\n  { id: 3, name: \"Keyboard\" },\n];\n\nconst visibleProducts = computed(() =>\n  products.filter((product) =>\n    product.name.toLowerCase().includes(search.value.toLowerCase())\n  )\n);\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <h1>Products</h1>\n    <input v-model=\"search\" placeholder=\"Search products\" />\n    <article v-for=\"product in visibleProducts\" :key=\"product.id\">\n      {{ product.name }}\n    </article>\n  </main>\n</template>",
        "hints": [
          "The search text can be stored in a ref.",
          "visibleProducts is suitable as a computed property.",
          "v-model binds the input field to search."
        ]
      }
    ]
  },
  {
    "id": "live-lab-vue-card-grid-style",
    "type": "live-lab",
    "title": "Vue card grid",
    "difficulty": "Vue",
    "estimatedTime": "Styling",
    "description": "Style a Vue card list as a responsive grid with distinct cards.",
    "framework": "Vue",
    "labCategory": "Styling",
    "challenges": [
      {
        "id": "vue-card-grid-style",
        "framework": "Vue",
        "category": "Styling",
        "prompt": "Style a Vue card list as a responsive grid with distinct cards.",
        "html": "<section class=\"topic-grid\">\n  <article>Components</article>\n  <article>Reactivity</article>\n  <article>Computed</article>\n  <article>Props</article>\n</section>",
        "previewHtml": "<section class=\"topic-grid\">\n  <article>Components</article>\n  <article>Reactivity</article>\n  <article>Computed</article>\n  <article>Props</article>\n</section>",
        "css": "body {\n  margin: 0;\n  padding: 1rem;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write grid styling here. */",
        "js": "<template>\n  <section class=\"topic-grid\">\n    <article>Components</article>\n    <article>Reactivity</article>\n    <article>Computed</article>\n    <article>Props</article>\n  </section>\n</template>",
        "solutionCss": "body {\n  margin: 0;\n  padding: 1rem;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.topic-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));\n  gap: 0.75rem;\n  max-width: 760px;\n  margin: 0 auto;\n}\n\n.topic-grid article {\n  min-height: 6rem;\n  padding: 1rem;\n  background: white;\n  border: 1px solid #dbe3ef;\n  border-radius: 10px;\n  font-weight: 800;\n}",
        "hints": [
          "Grid styling should be placed on .topic-grid.",
          "auto-fit and minmax make the layout responsive.",
          "Cards need padding, border, and min-height."
        ]
      }
    ]
  },
  {
    "id": "live-lab-angular-filter-list",
    "type": "live-lab",
    "title": "Angular filter list",
    "difficulty": "Angular",
    "estimatedTime": "Logik",
    "description": "Build an Angular list where a getter filters products from a search field.",
    "framework": "Angular",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "angular-filter-list",
        "framework": "Angular",
        "category": "Logik",
        "prompt": "Build an Angular list where a getter filters products from a search field.",
        "html": "<main class=\"preview-app\">\n  <h1>Products</h1>\n  <input placeholder=\"Search products\" />\n  <article>Laptop</article>\n  <article>Phone</article>\n  <article>Keyboard</article>\n</main>",
        "previewHtml": "<main class=\"preview-app\">\n  <h1>Products</h1>\n  <input placeholder=\"Search products\" />\n  <article>Laptop</article>\n  <article>Phone</article>\n  <article>Keyboard</article>\n</main>",
        "css": ".preview-app {\n  display: grid;\n  gap: 0.75rem;\n  max-width: 420px;\n  margin: 2rem auto;\n  font-family: Arial, sans-serif;\n}\n\ninput,\narticle {\n  padding: 0.7rem;\n  border: 1px solid #cbd5e1;\n  border-radius: 8px;\n}",
        "js": "// product-search.component.ts\nexport class ProductSearchComponent {\n  search = \"\";\n  products = [\n    { id: 1, name: \"Laptop\" },\n    { id: 2, name: \"Phone\" },\n    { id: 3, name: \"Keyboard\" },\n  ];\n\n  // Create visibleProducts getter here.\n}\n\n// product-search.component.html\n<main class=\"preview-app\">\n  <h1>Products</h1>\n  <input placeholder=\"Search products\" />\n  <!-- Render visibleProducts here. -->\n</main>",
        "solutionJs": "// product-search.component.ts\nexport class ProductSearchComponent {\n  search = \"\";\n  products = [\n    { id: 1, name: \"Laptop\" },\n    { id: 2, name: \"Phone\" },\n    { id: 3, name: \"Keyboard\" },\n  ];\n\n  get visibleProducts() {\n    return this.products.filter((product) =>\n      product.name.toLowerCase().includes(this.search.toLowerCase())\n    );\n  }\n}\n\n// product-search.component.html\n<main class=\"preview-app\">\n  <h1>Products</h1>\n  <input [(ngModel)]=\"search\" placeholder=\"Search products\" />\n  <article *ngFor=\"let product of visibleProducts\">\n    {{ product.name }}\n  </article>\n</main>",
        "hints": [
          "The search query can be stored as a property.",
          "visibleProducts can be implemented as a getter.",
          "[(ngModel)] requires FormsModule in a real Angular module."
        ]
      }
    ]
  },
  {
    "id": "live-lab-angular-table-style",
    "type": "live-lab",
    "title": "Angular table",
    "difficulty": "Angular",
    "estimatedTime": "Styling",
    "description": "Style an Angular table so rows are effortless to scan.",
    "framework": "Angular",
    "labCategory": "Styling",
    "challenges": [
      {
        "id": "angular-table-style",
        "framework": "Angular",
        "category": "Styling",
        "prompt": "Style an Angular table so rows are effortless to scan.",
        "html": "<table class=\"data-table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Role</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Alex</td>\n      <td>Frontend</td>\n      <td>Active</td>\n    </tr>\n    <tr>\n      <td>Sara</td>\n      <td>Fullstack</td>\n      <td>Active</td>\n    </tr>\n  </tbody>\n</table>",
        "previewHtml": "<table class=\"data-table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Role</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Alex</td>\n      <td>Frontend</td>\n      <td>Active</td>\n    </tr>\n    <tr>\n      <td>Sara</td>\n      <td>Fullstack</td>\n      <td>Active</td>\n    </tr>\n  </tbody>\n</table>",
        "css": "body {\n  margin: 0;\n  padding: 1rem;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n/* Write table styling here. */",
        "js": "// users-table.component.html\n<table class=\"data-table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Role</th>\n      <th>Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <!-- Render rows with *ngFor in a real component. -->\n  </tbody>\n</table>",
        "solutionCss": "body {\n  margin: 0;\n  padding: 1rem;\n  font-family: Arial, sans-serif;\n  background: #f8fafc;\n}\n\n.data-table {\n  width: min(100%, 720px);\n  margin: 0 auto;\n  border-collapse: collapse;\n  background: white;\n  border: 1px solid #dbe3ef;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.data-table th,\n.data-table td {\n  padding: 0.75rem;\n  text-align: left;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.data-table th {\n  color: #475569;\n  background: #f1f5f9;\n  font-size: 0.8rem;\n}",
        "hints": [
          "Start with width: 100% and border-collapse: collapse on the table.",
          "th and td should share equal padding.",
          "The header can have a distinct background for scannability."
        ]
      }
    ]
  },
  {
    "id": "live-lab-react-todo-toggle",
    "type": "live-lab",
    "title": "React todo toggle",
    "difficulty": "React",
    "estimatedTime": "Logik",
    "description": "Build a React list where each todo can be toggled completed or active.",
    "framework": "React",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "react-todo-toggle",
        "title": "React todo toggle",
        "framework": "React",
        "category": "Logik",
        "prompt": "Build a React list where each todo can be toggled completed or active.",
        "html": "<main class=\"preview-app\"><h1>Todos</h1><button>Read docs</button><button>Build UI</button></main>",
        "previewHtml": "<main class=\"preview-app\"><h1>Todos</h1><button>Read docs</button><button class=\"is-done\">Build UI</button></main>",
        "css": ".preview-app { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }\nbutton { min-height: 2.5rem; border: 1px solid #cbd5e1; border-radius: 8px; background: white; }\n.is-done { text-decoration: line-through; opacity: 0.65; }",
        "js": "import { useState } from \"react\";\n\nconst initialTodos = [\n  { id: 1, text: \"Read docs\", done: false },\n  { id: 2, text: \"Build UI\", done: true },\n];\n\nexport default function TodoToggle() {\n  // Place todos in state and create toggleTodo here.\n  return <main className=\"preview-app\">{/* Render todos as buttons here. */}</main>;\n}",
        "solutionJs": "import { useState } from \"react\";\n\nconst initialTodos = [\n  { id: 1, text: \"Read docs\", done: false },\n  { id: 2, text: \"Build UI\", done: true },\n];\n\nexport default function TodoToggle() {\n  const [todos, setTodos] = useState(initialTodos);\n\n  function toggleTodo(todoId) {\n    setTodos((currentTodos) =>\n      currentTodos.map((todo) =>\n        todo.id === todoId ? { ...todo, done: !todo.done } : todo\n      )\n    );\n  }\n\n  return (\n    <main className=\"preview-app\">\n      <h1>Todos</h1>\n      {todos.map((todo) => (\n        <button\n          className={todo.done ? \"is-done\" : \"\"}\n          key={todo.id}\n          onClick={() => toggleTodo(todo.id)}\n        >\n          {todo.text}\n        </button>\n      ))}\n    </main>\n  );\n}",
        "hints": [
          "The list changes, so todos need to be held in state.",
          "map fits when updating one item while preserving the list.",
          "Class name can conditionally reflect todo.done."
        ]
      }
    ]
  },
  {
    "id": "live-lab-react-modal-toggle",
    "type": "live-lab",
    "title": "React modal",
    "difficulty": "React",
    "estimatedTime": "Logik",
    "description": "Build a React modal that can be opened and closed.",
    "framework": "React",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "react-modal-toggle",
        "title": "React modal",
        "framework": "React",
        "category": "Logik",
        "prompt": "Build a React modal that can be opened and closed.",
        "html": "<main class=\"preview-app\"><button>Open modal</button><section class=\"modal\"><p>Modal content</p><button>Close</button></section></main>",
        "previewHtml": "<main class=\"preview-app\"><button>Open modal</button><section class=\"modal\"><p>Modal content</p><button>Close</button></section></main>",
        "css": ".preview-app { display: grid; gap: 1rem; place-items: center; min-height: 100vh; font-family: Arial, sans-serif; }\n.modal { padding: 1rem; border: 1px solid #cbd5e1; border-radius: 10px; background: white; }",
        "js": "import { useState } from \"react\";\n\nexport default function ModalExample() {\n  // Create isOpen state here.\n  return (\n    <main className=\"preview-app\">\n      <button>Open modal</button>\n      {/* Show modal only when isOpen is true. */}\n    </main>\n  );\n}",
        "solutionJs": "import { useState } from \"react\";\n\nexport default function ModalExample() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <main className=\"preview-app\">\n      <button onClick={() => setIsOpen(true)}>Open modal</button>\n      {isOpen && (\n        <section className=\"modal\" role=\"dialog\" aria-modal=\"true\">\n          <p>Modal content</p>\n          <button onClick={() => setIsOpen(false)}>Close</button>\n        </section>\n      )}\n    </main>\n  );\n}",
        "hints": [
          "The modal has two states: open or closed.",
          "Rendera modalen villkorligt.",
          "Close button sets isOpen to false."
        ]
      }
    ]
  },
  {
    "id": "live-lab-react-tabs-state",
    "type": "live-lab",
    "title": "React tabs",
    "difficulty": "React",
    "estimatedTime": "Logik",
    "description": "Build React tabs where the active tab controls which panel is displayed.",
    "framework": "React",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "react-tabs-state",
        "title": "React tabs",
        "framework": "React",
        "category": "Logik",
        "prompt": "Build React tabs where the active tab controls which panel is displayed.",
        "html": "<section class=\"tabs-card\"><div class=\"tabs\"><button class=\"is-active\">Profile</button><button>Settings</button></div><p>Profile content</p></section>",
        "previewHtml": "<section class=\"tabs-card\"><div class=\"tabs\"><button class=\"is-active\">Profile</button><button>Settings</button></div><p>Profile content</p></section>",
        "css": ".tabs-card { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }\n.tabs { display: flex; gap: 0.5rem; }\n.is-active { color: white; background: #2563eb; }",
        "js": "import { useState } from \"react\";\n\nconst tabs = {\n  profile: \"Profile content\",\n  settings: \"Settings content\",\n};\n\nexport default function Tabs() {\n  // Create activeTab state here.\n  return <section className=\"tabs-card\">{/* Render tabs and panel here. */}</section>;\n}",
        "solutionJs": "import { useState } from \"react\";\n\nconst tabs = {\n  profile: \"Profile content\",\n  settings: \"Settings content\",\n};\n\nexport default function Tabs() {\n  const [activeTab, setActiveTab] = useState(\"profile\");\n\n  return (\n    <section className=\"tabs-card\">\n      <div className=\"tabs\">\n        {Object.keys(tabs).map((tab) => (\n          <button\n            className={activeTab === tab ? \"is-active\" : \"\"}\n            key={tab}\n            onClick={() => setActiveTab(tab)}\n          >\n            {tab}\n          </button>\n        ))}\n      </div>\n      <p>{tabs[activeTab]}</p>\n    </section>\n  );\n}",
        "hints": [
          "The active tab is stored in state.",
          "Object.keys can create tab buttons from the object keys.",
          "The active panel reads tabs[activeTab]."
        ]
      }
    ]
  },
  {
    "id": "live-lab-react-accordion-state",
    "type": "live-lab",
    "title": "React accordion",
    "difficulty": "React",
    "estimatedTime": "Logik",
    "description": "Build a React accordion where one question can be opened at a time.",
    "framework": "React",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "react-accordion-state",
        "title": "React accordion",
        "framework": "React",
        "category": "Logik",
        "prompt": "Build a React accordion where one question can be opened at a time.",
        "html": "<main class=\"preview-app\"><article><button>What is React?</button><p>A UI library.</p></article></main>",
        "previewHtml": "<main class=\"preview-app\"><article><button>What is React?</button><p>A UI library.</p></article></main>",
        "css": ".preview-app { display: grid; gap: 0.75rem; max-width: 520px; margin: 2rem auto; font-family: Arial, sans-serif; }\narticle { border: 1px solid #cbd5e1; border-radius: 8px; padding: 0.75rem; }",
        "js": "import { useState } from \"react\";\n\nconst faqs = [\n  { id: 1, question: \"What is React?\", answer: \"A UI library.\" },\n  { id: 2, question: \"What is state?\", answer: \"Data that can change.\" },\n];\n\nexport default function Accordion() {\n  // Create activeId state here.\n  return <main className=\"preview-app\">{/* Render questions here. */}</main>;\n}",
        "solutionJs": "import { useState } from \"react\";\n\nconst faqs = [\n  { id: 1, question: \"What is React?\", answer: \"A UI library.\" },\n  { id: 2, question: \"What is state?\", answer: \"Data that can change.\" },\n];\n\nexport default function Accordion() {\n  const [activeId, setActiveId] = useState(null);\n\n  return (\n    <main className=\"preview-app\">\n      {faqs.map((faq) => (\n        <article key={faq.id}>\n          <button onClick={() => setActiveId(activeId === faq.id ? null : faq.id)}>\n            {faq.question}\n          </button>\n          {activeId === faq.id && <p>{faq.answer}</p>}\n        </article>\n      ))}\n    </main>\n  );\n}",
        "hints": [
          "Store the id of the opened question.",
          "Clicking the same question can close it.",
          "Display the answer using conditional rendering."
        ]
      }
    ]
  },
  {
    "id": "live-lab-vue-todo-toggle",
    "type": "live-lab",
    "title": "Vue todo toggle",
    "difficulty": "Vue",
    "estimatedTime": "Logik",
    "description": "Build a Vue list where each todo can be toggled completed or active.",
    "framework": "Vue",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "vue-todo-toggle",
        "title": "Vue todo toggle",
        "framework": "Vue",
        "category": "Logik",
        "prompt": "Build a Vue list where each todo can be toggled completed or active.",
        "html": "<main class=\"preview-app\"><h1>Todos</h1><button>Read docs</button><button class=\"is-done\">Build UI</button></main>",
        "previewHtml": "<main class=\"preview-app\"><h1>Todos</h1><button>Read docs</button><button class=\"is-done\">Build UI</button></main>",
        "css": ".preview-app { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }\nbutton { min-height: 2.5rem; border: 1px solid #cbd5e1; border-radius: 8px; background: white; }\n.is-done { text-decoration: line-through; opacity: 0.65; }",
        "js": "<script setup>\n// Import ref here.\n// Create todos and toggleTodo here.\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <h1>Todos</h1>\n    <!-- Render todos as buttons here. -->\n  </main>\n</template>",
        "solutionJs": "<script setup>\nimport { ref } from \"vue\";\n\nconst todos = ref([\n  { id: 1, text: \"Read docs\", done: false },\n  { id: 2, text: \"Build UI\", done: true },\n]);\n\nfunction toggleTodo(todoId) {\n  const todo = todos.value.find((item) => item.id === todoId);\n  todo.done = !todo.done;\n}\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <h1>Todos</h1>\n    <button\n      v-for=\"todo in todos\"\n      :class=\"{ 'is-done': todo.done }\"\n      :key=\"todo.id\"\n      @click=\"toggleTodo(todo.id)\"\n    >\n      {{ todo.text }}\n    </button>\n  </main>\n</template>",
        "hints": [
          "Todos change dynamically, so they fit cleanly in ref.",
          "Find the matching todo via id.",
          ":class can conditionally depend on todo.done."
        ]
      }
    ]
  },
  {
    "id": "live-lab-vue-modal-toggle",
    "type": "live-lab",
    "title": "Vue modal",
    "difficulty": "Vue",
    "estimatedTime": "Logik",
    "description": "Build a Vue modal that can be opened and closed.",
    "framework": "Vue",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "vue-modal-toggle",
        "title": "Vue modal",
        "framework": "Vue",
        "category": "Logik",
        "prompt": "Build a Vue modal that can be opened and closed.",
        "html": "<main class=\"preview-app\"><button>Open modal</button><section class=\"modal\"><p>Modal content</p><button>Close</button></section></main>",
        "previewHtml": "<main class=\"preview-app\"><button>Open modal</button><section class=\"modal\"><p>Modal content</p><button>Close</button></section></main>",
        "css": ".preview-app { display: grid; gap: 1rem; place-items: center; min-height: 100vh; font-family: Arial, sans-serif; }\n.modal { padding: 1rem; border: 1px solid #cbd5e1; border-radius: 10px; background: white; }",
        "js": "<script setup>\n// Import ref and create isOpen here.\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <button>Open modal</button>\n    <!-- Show the modal with v-if here. -->\n  </main>\n</template>",
        "solutionJs": "<script setup>\nimport { ref } from \"vue\";\n\nconst isOpen = ref(false);\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <button @click=\"isOpen = true\">Open modal</button>\n    <section v-if=\"isOpen\" class=\"modal\" role=\"dialog\" aria-modal=\"true\">\n      <p>Modal content</p>\n      <button @click=\"isOpen = false\">Close</button>\n    </section>\n  </main>\n</template>",
        "hints": [
          "The modal has a boolean state.",
          "v-if fits well for showing or hiding the modal.",
          "@click can mutate isOpen directly."
        ]
      }
    ]
  },
  {
    "id": "live-lab-vue-form-validation",
    "type": "live-lab",
    "title": "Vue form validation",
    "difficulty": "Vue",
    "estimatedTime": "Logik",
    "description": "Build a Vue form that displays an error if email lacks '@'.",
    "framework": "Vue",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "vue-form-validation",
        "title": "Vue form validation",
        "framework": "Vue",
        "category": "Logik",
        "prompt": "Build a Vue form that displays an error if email lacks '@'.",
        "html": "<form class=\"preview-app\"><input placeholder=\"Email\" /><p>Email must include @.</p></form>",
        "previewHtml": "<form class=\"preview-app\"><input placeholder=\"Email\" /><p>Email must include @.</p></form>",
        "css": ".preview-app { display: grid; gap: 0.75rem; max-width: 360px; margin: 2rem auto; font-family: Arial, sans-serif; }\ninput { min-height: 2.5rem; padding: 0.55rem; border: 1px solid #cbd5e1; border-radius: 8px; }\np { color: #dc2626; margin: 0; }",
        "js": "<script setup>\n// Import computed and ref here.\n// Create email and isInvalid here.\n</script>\n\n<template>\n  <form class=\"preview-app\">\n    <input placeholder=\"Email\" />\n    <!-- Show error message with v-if here. -->\n  </form>\n</template>",
        "solutionJs": "<script setup>\nimport { computed, ref } from \"vue\";\n\nconst email = ref(\"\");\nconst isInvalid = computed(\n  () => email.value.length > 0 && !email.value.includes(\"@\")\n);\n</script>\n\n<template>\n  <form class=\"preview-app\">\n    <input v-model=\"email\" placeholder=\"Email\" />\n    <p v-if=\"isInvalid\">Email must include @.</p>\n  </form>\n</template>",
        "hints": [
          "Email can be stored in a ref.",
          "The error message can be a computed property.",
          "v-if renders the error message when the condition is true."
        ]
      }
    ]
  },
  {
    "id": "live-lab-vue-modal-style",
    "type": "live-lab",
    "title": "Vue modal styling",
    "difficulty": "Vue",
    "estimatedTime": "Styling",
    "description": "Style a Vue modal with an overlay, dialog card, and actions.",
    "framework": "Vue",
    "labCategory": "Styling",
    "challenges": [
      {
        "id": "vue-modal-style",
        "title": "Vue modal styling",
        "framework": "Vue",
        "category": "Styling",
        "prompt": "Style a Vue modal with an overlay, dialog card, and actions.",
        "html": "<div class=\"overlay\"><section class=\"modal\"><h1>Confirm</h1><p>Are you sure?</p><div class=\"actions\"><button>Cancel</button><button>Save</button></div></section></div>",
        "previewHtml": "<div class=\"overlay\"><section class=\"modal\"><h1>Confirm</h1><p>Are you sure?</p><div class=\"actions\"><button>Cancel</button><button>Save</button></div></section></div>",
        "css": "body { margin: 0; font-family: Arial, sans-serif; }\n/* Write modal styling here. */",
        "js": "<template>\n  <div class=\"overlay\">\n    <section class=\"modal\">\n      <h1>Confirm</h1>\n      <p>Are you sure?</p>\n      <div class=\"actions\">\n        <button>Cancel</button>\n        <button>Save</button>\n      </div>\n    </section>\n  </div>\n</template>",
        "solutionCss": "body { margin: 0; font-family: Arial, sans-serif; }\n.overlay { display: grid; place-items: center; min-height: 100vh; padding: 1rem; background: rgba(15, 23, 42, 0.65); }\n.modal { display: grid; gap: 0.75rem; width: min(100%, 360px); padding: 1rem; background: white; border-radius: 12px; }\n.modal h1, .modal p { margin: 0; }\n.actions { display: flex; gap: 0.5rem; justify-content: flex-end; }\nbutton { min-height: 2.35rem; padding: 0.5rem 0.75rem; border: 0; border-radius: 8px; font-weight: 800; }",
        "hints": [
          "The overlay should cover the viewport.",
          "The dialog needs max-width and padding.",
          "Actions align well with justify-content: flex-end."
        ]
      }
    ]
  },
  {
    "id": "live-lab-angular-todo-toggle",
    "type": "live-lab",
    "title": "Angular todo toggle",
    "difficulty": "Angular",
    "estimatedTime": "Logik",
    "description": "Build an Angular list where each todo can be toggled completed or active.",
    "framework": "Angular",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "angular-todo-toggle",
        "title": "Angular todo toggle",
        "framework": "Angular",
        "category": "Logik",
        "prompt": "Build an Angular list where each todo can be toggled completed or active.",
        "html": "<main class=\"preview-app\"><h1>Todos</h1><button>Read docs</button><button class=\"is-done\">Build UI</button></main>",
        "previewHtml": "<main class=\"preview-app\"><h1>Todos</h1><button>Read docs</button><button class=\"is-done\">Build UI</button></main>",
        "css": ".preview-app { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }\nbutton { min-height: 2.5rem; border: 1px solid #cbd5e1; border-radius: 8px; background: white; }\n.is-done { text-decoration: line-through; opacity: 0.65; }",
        "js": "// todo-list.component.ts\nexport class TodoListComponent {\n  todos = [\n    { id: 1, text: \"Read docs\", done: false },\n    { id: 2, text: \"Build UI\", done: true },\n  ];\n\n  // Create toggleTodo here.\n}\n\n// todo-list.component.html\n<main class=\"preview-app\">\n  <h1>Todos</h1>\n  <!-- Render todos with *ngFor here. -->\n</main>",
        "solutionJs": "// todo-list.component.ts\nexport class TodoListComponent {\n  todos = [\n    { id: 1, text: \"Read docs\", done: false },\n    { id: 2, text: \"Build UI\", done: true },\n  ];\n\n  toggleTodo(todoId) {\n    this.todos = this.todos.map((todo) =>\n      todo.id === todoId ? { ...todo, done: !todo.done } : todo\n    );\n  }\n}\n\n// todo-list.component.html\n<main class=\"preview-app\">\n  <h1>Todos</h1>\n  <button\n    *ngFor=\"let todo of todos\"\n    [class.is-done]=\"todo.done\"\n    (click)=\"toggleTodo(todo.id)\"\n  >\n    {{ todo.text }}\n  </button>\n</main>",
        "hints": [
          "The method needs to know which id was clicked.",
          "map can return a new array with the modified todo.",
          "[class.is-done] can reflect todo.done."
        ]
      }
    ]
  },
  {
    "id": "live-lab-angular-modal-toggle",
    "type": "live-lab",
    "title": "Angular modal",
    "difficulty": "Angular",
    "estimatedTime": "Logik",
    "description": "Build an Angular modal that can be opened and closed.",
    "framework": "Angular",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "angular-modal-toggle",
        "title": "Angular modal",
        "framework": "Angular",
        "category": "Logik",
        "prompt": "Build an Angular modal that can be opened and closed.",
        "html": "<main class=\"preview-app\"><button>Open modal</button><section class=\"modal\"><p>Modal content</p><button>Close</button></section></main>",
        "previewHtml": "<main class=\"preview-app\"><button>Open modal</button><section class=\"modal\"><p>Modal content</p><button>Close</button></section></main>",
        "css": ".preview-app { display: grid; gap: 1rem; place-items: center; min-height: 100vh; font-family: Arial, sans-serif; }\n.modal { padding: 1rem; border: 1px solid #cbd5e1; border-radius: 10px; background: white; }",
        "js": "// modal.component.ts\nexport class ModalComponent {\n  // Create isOpen, open, and close here.\n}\n\n// modal.component.html\n<main class=\"preview-app\">\n  <button>Open modal</button>\n  <!-- Show modal with *ngIf here. -->\n</main>",
        "solutionJs": "// modal.component.ts\nexport class ModalComponent {\n  isOpen = false;\n\n  open() {\n    this.isOpen = true;\n  }\n\n  close() {\n    this.isOpen = false;\n  }\n}\n\n// modal.component.html\n<main class=\"preview-app\">\n  <button (click)=\"open()\">Open modal</button>\n  <section *ngIf=\"isOpen\" class=\"modal\" role=\"dialog\" aria-modal=\"true\">\n    <p>Modal content</p>\n    <button (click)=\"close()\">Close</button>\n  </section>\n</main>",
        "hints": [
          "isOpen can be a boolean property.",
          "*ngIf shows the modal when isOpen is true.",
          "(click) binds the buttons to component methods."
        ]
      }
    ]
  },
  {
    "id": "live-lab-angular-tabs-state",
    "type": "live-lab",
    "title": "Angular tabs",
    "difficulty": "Angular",
    "estimatedTime": "Logik",
    "description": "Build Angular tabs where the active tab controls the panel content.",
    "framework": "Angular",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "angular-tabs-state",
        "title": "Angular tabs",
        "framework": "Angular",
        "category": "Logik",
        "prompt": "Build Angular tabs where the active tab controls the panel content.",
        "html": "<section class=\"tabs-card\"><div class=\"tabs\"><button class=\"is-active\">Profile</button><button>Settings</button></div><p>Profile content</p></section>",
        "previewHtml": "<section class=\"tabs-card\"><div class=\"tabs\"><button class=\"is-active\">Profile</button><button>Settings</button></div><p>Profile content</p></section>",
        "css": ".tabs-card { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }\n.tabs { display: flex; gap: 0.5rem; }\n.is-active { color: white; background: #2563eb; }",
        "js": "// tabs.component.ts\nexport class TabsComponent {\n  activeTab = \"profile\";\n  tabs = {\n    profile: \"Profile content\",\n    settings: \"Settings content\",\n  };\n}\n\n// tabs.component.html\n<section class=\"tabs-card\">\n  <!-- Render tab buttons and active panel here. -->\n</section>",
        "solutionJs": "// tabs.component.ts\nexport class TabsComponent {\n  activeTab = \"profile\";\n  tabs = {\n    profile: \"Profile content\",\n    settings: \"Settings content\",\n  };\n}\n\n// tabs.component.html\n<section class=\"tabs-card\">\n  <div class=\"tabs\">\n    <button\n      [class.is-active]=\"activeTab === 'profile'\"\n      (click)=\"activeTab = 'profile'\"\n    >\n      Profile\n    </button>\n    <button\n      [class.is-active]=\"activeTab === 'settings'\"\n      (click)=\"activeTab = 'settings'\"\n    >\n      Settings\n    </button>\n  </div>\n  <p>{{ tabs[activeTab] }}</p>\n</section>",
        "hints": [
          "activeTab can be a string property.",
          "[class.is-active] markerar vald knapp.",
          "The panel reads tabs[activeTab]."
        ]
      }
    ]
  },
  {
    "id": "live-lab-angular-navbar-style",
    "type": "live-lab",
    "title": "Angular navbar",
    "difficulty": "Angular",
    "estimatedTime": "Styling",
    "description": "Style an Angular navbar with brand, links, and action button.",
    "framework": "Angular",
    "labCategory": "Styling",
    "challenges": [
      {
        "id": "angular-navbar-style",
        "title": "Angular navbar",
        "framework": "Angular",
        "category": "Styling",
        "prompt": "Style an Angular navbar with brand, links, and action button.",
        "html": "<header class=\"app-nav\"><strong>AngularPrep</strong><nav><a>Components</a><a>Forms</a><a>HTTP</a></nav><button>Start</button></header>",
        "previewHtml": "<header class=\"app-nav\"><strong>AngularPrep</strong><nav><a>Components</a><a>Forms</a><a>HTTP</a></nav><button>Start</button></header>",
        "css": "body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; }\n/* Write navbar styling here. */",
        "js": "// app-nav.component.html\n<header class=\"app-nav\">\n  <strong>AngularPrep</strong>\n  <nav>\n    <a>Components</a>\n    <a>Forms</a>\n    <a>HTTP</a>\n  </nav>\n  <button>Start</button>\n</header>",
        "solutionCss": "body { margin: 0; font-family: Arial, sans-serif; background: #f8fafc; }\n.app-nav { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 1rem; padding: 0.75rem 1rem; background: white; border-bottom: 1px solid #dbe3ef; }\n.app-nav nav { display: flex; gap: 0.75rem; justify-content: center; }\n.app-nav a { color: #334155; font-weight: 700; }\n.app-nav button { min-height: 2.25rem; padding: 0.45rem 0.75rem; color: white; background: #0f172a; border: 0; border-radius: 8px; font-weight: 800; }",
        "hints": [
          "The header can be a three-column CSS grid.",
          "Nav links can sit inside a flex container.",
          "The action button needs clear contrast."
        ]
      }
    ]
  },
  {
    "id": "live-lab-react-empty-state",
    "type": "live-lab",
    "title": "React empty state",
    "difficulty": "React",
    "estimatedTime": "Logik",
    "description": "Show an empty state in React when the list contains no items.",
    "framework": "React",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "react-empty-state",
        "title": "React empty state",
        "framework": "React",
        "category": "Logik",
        "prompt": "Show an empty state in React when the list contains no items.",
        "html": "<main class=\"preview-app\"><h1>Products</h1><p>No products found.</p></main>",
        "previewHtml": "<main class=\"preview-app\"><h1>Products</h1><p>No products found.</p></main>",
        "css": ".preview-app { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }\np { padding: 0.75rem; border: 1px dashed #94a3b8; border-radius: 8px; color: #64748b; }",
        "js": "const products = [];\n\nexport default function ProductList() {\n  return (\n    <main className=\"preview-app\">\n      <h1>Products</h1>\n      {/* Show empty state or list here. */}\n    </main>\n  );\n}",
        "solutionJs": "const products = [];\n\nexport default function ProductList() {\n  return (\n    <main className=\"preview-app\">\n      <h1>Products</h1>\n      {products.length === 0 ? (\n        <p>No products found.</p>\n      ) : (\n        products.map((product) => <article key={product.id}>{product.name}</article>)\n      )}\n    </main>\n  );\n}",
        "hints": [
          "Kolla listans length.",
          "Ternary fits when the UI toggles between two distinct states.",
          "The list renders only when items exist."
        ]
      }
    ]
  },
  {
    "id": "live-lab-react-badge-style",
    "type": "live-lab",
    "title": "React badge styling",
    "difficulty": "React",
    "estimatedTime": "Styling",
    "description": "Style compact status badges for a React component.",
    "framework": "React",
    "labCategory": "Styling",
    "challenges": [
      {
        "id": "react-badge-style",
        "title": "React badge styling",
        "framework": "React",
        "category": "Styling",
        "prompt": "Style compact status badges for a React component.",
        "html": "<main class=\"badge-row\"><span class=\"badge success\">Active</span><span class=\"badge warning\">Pending</span><span class=\"badge danger\">Blocked</span></main>",
        "previewHtml": "<main class=\"badge-row\"><span class=\"badge success\">Active</span><span class=\"badge warning\">Pending</span><span class=\"badge danger\">Blocked</span></main>",
        "css": "body { display: grid; place-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }\n/* Write badge styling here. */",
        "js": "export default function StatusBadges() {\n  return (\n    <main className=\"badge-row\">\n      <span className=\"badge success\">Active</span>\n      <span className=\"badge warning\">Pending</span>\n      <span className=\"badge danger\">Blocked</span>\n    </main>\n  );\n}",
        "solutionCss": "body { display: grid; place-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }\n.badge-row { display: flex; gap: 0.5rem; }\n.badge { padding: 0.35rem 0.55rem; border-radius: 999px; font-size: 0.8rem; font-weight: 800; }\n.success { color: #166534; background: #dcfce7; }\n.warning { color: #92400e; background: #fef3c7; }\n.danger { color: #991b1b; background: #fee2e2; }",
        "hints": [
          "Badges look great with border-radius: 999px.",
          "Use distinct colors per status class.",
          "Keep the font size compact."
        ]
      }
    ]
  },
  {
    "id": "live-lab-vue-empty-state",
    "type": "live-lab",
    "title": "Vue empty state",
    "difficulty": "Vue",
    "estimatedTime": "Logik",
    "description": "Show an empty state in Vue when the list contains no items.",
    "framework": "Vue",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "vue-empty-state",
        "title": "Vue empty state",
        "framework": "Vue",
        "category": "Logik",
        "prompt": "Show an empty state in Vue when the list contains no items.",
        "html": "<main class=\"preview-app\"><h1>Products</h1><p>No products found.</p></main>",
        "previewHtml": "<main class=\"preview-app\"><h1>Products</h1><p>No products found.</p></main>",
        "css": ".preview-app { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }\np { padding: 0.75rem; border: 1px dashed #94a3b8; border-radius: 8px; color: #64748b; }",
        "js": "<script setup>\nconst products = [];\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <h1>Products</h1>\n    <!-- Show empty state or v-for here. -->\n  </main>\n</template>",
        "solutionJs": "<script setup>\nconst products = [];\n</script>\n\n<template>\n  <main class=\"preview-app\">\n    <h1>Products</h1>\n    <p v-if=\"products.length === 0\">No products found.</p>\n    <article v-for=\"product in products\" v-else :key=\"product.id\">\n      {{ product.name }}\n    </article>\n  </main>\n</template>",
        "hints": [
          "Kolla products.length.",
          "v-if can show the empty state.",
          "v-for renders the list when items exist."
        ]
      }
    ]
  },
  {
    "id": "live-lab-vue-badge-style",
    "type": "live-lab",
    "title": "Vue badge styling",
    "difficulty": "Vue",
    "estimatedTime": "Styling",
    "description": "Style compact status badges for a Vue component.",
    "framework": "Vue",
    "labCategory": "Styling",
    "challenges": [
      {
        "id": "vue-badge-style",
        "title": "Vue badge styling",
        "framework": "Vue",
        "category": "Styling",
        "prompt": "Style compact status badges for a Vue component.",
        "html": "<main class=\"badge-row\"><span class=\"badge success\">Active</span><span class=\"badge warning\">Pending</span><span class=\"badge danger\">Blocked</span></main>",
        "previewHtml": "<main class=\"badge-row\"><span class=\"badge success\">Active</span><span class=\"badge warning\">Pending</span><span class=\"badge danger\">Blocked</span></main>",
        "css": "body { display: grid; place-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }\n/* Write badge styling here. */",
        "js": "<template>\n  <main class=\"badge-row\">\n    <span class=\"badge success\">Active</span>\n    <span class=\"badge warning\">Pending</span>\n    <span class=\"badge danger\">Blocked</span>\n  </main>\n</template>",
        "solutionCss": "body { display: grid; place-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }\n.badge-row { display: flex; gap: 0.5rem; }\n.badge { padding: 0.35rem 0.55rem; border-radius: 999px; font-size: 0.8rem; font-weight: 800; }\n.success { color: #166534; background: #dcfce7; }\n.warning { color: #92400e; background: #fef3c7; }\n.danger { color: #991b1b; background: #fee2e2; }",
        "hints": [
          "Badges should be compact yet legible.",
          "Use status classes for distinct color themes.",
          "Flex ger en enkel radlayout."
        ]
      }
    ]
  },
  {
    "id": "live-lab-angular-empty-state",
    "type": "live-lab",
    "title": "Angular empty state",
    "difficulty": "Angular",
    "estimatedTime": "Logik",
    "description": "Show an empty state in Angular when the list contains no items.",
    "framework": "Angular",
    "labCategory": "Logik",
    "challenges": [
      {
        "id": "angular-empty-state",
        "title": "Angular empty state",
        "framework": "Angular",
        "category": "Logik",
        "prompt": "Show an empty state in Angular when the list contains no items.",
        "html": "<main class=\"preview-app\"><h1>Products</h1><p>No products found.</p></main>",
        "previewHtml": "<main class=\"preview-app\"><h1>Products</h1><p>No products found.</p></main>",
        "css": ".preview-app { display: grid; gap: 0.75rem; max-width: 420px; margin: 2rem auto; font-family: Arial, sans-serif; }\np { padding: 0.75rem; border: 1px dashed #94a3b8; border-radius: 8px; color: #64748b; }",
        "js": "// product-list.component.ts\nexport class ProductListComponent {\n  products = [];\n}\n\n// product-list.component.html\n<main class=\"preview-app\">\n  <h1>Products</h1>\n  <!-- Show empty state or *ngFor here. -->\n</main>",
        "solutionJs": "// product-list.component.ts\nexport class ProductListComponent {\n  products = [];\n}\n\n// product-list.component.html\n<main class=\"preview-app\">\n  <h1>Products</h1>\n  <p *ngIf=\"products.length === 0\">No products found.</p>\n  <article *ngFor=\"let product of products\">\n    {{ product.name }}\n  </article>\n</main>",
        "hints": [
          "Kolla products.length.",
          "*ngIf shows the empty state.",
          "*ngFor renderar listan."
        ]
      }
    ]
  },
  {
    "id": "live-lab-angular-badge-style",
    "type": "live-lab",
    "title": "Angular badge styling",
    "difficulty": "Angular",
    "estimatedTime": "Styling",
    "description": "Style compact status badges for an Angular component.",
    "framework": "Angular",
    "labCategory": "Styling",
    "challenges": [
      {
        "id": "angular-badge-style",
        "title": "Angular badge styling",
        "framework": "Angular",
        "category": "Styling",
        "prompt": "Style compact status badges for an Angular component.",
        "html": "<main class=\"badge-row\"><span class=\"badge success\">Active</span><span class=\"badge warning\">Pending</span><span class=\"badge danger\">Blocked</span></main>",
        "previewHtml": "<main class=\"badge-row\"><span class=\"badge success\">Active</span><span class=\"badge warning\">Pending</span><span class=\"badge danger\">Blocked</span></main>",
        "css": "body { display: grid; place-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }\n/* Write badge styling here. */",
        "js": "// status-badges.component.html\n<main class=\"badge-row\">\n  <span class=\"badge success\">Active</span>\n  <span class=\"badge warning\">Pending</span>\n  <span class=\"badge danger\">Blocked</span>\n</main>",
        "solutionCss": "body { display: grid; place-items: center; min-height: 100vh; margin: 0; font-family: Arial, sans-serif; }\n.badge-row { display: flex; gap: 0.5rem; }\n.badge { padding: 0.35rem 0.55rem; border-radius: 999px; font-size: 0.8rem; font-weight: 800; }\n.success { color: #166534; background: #dcfce7; }\n.warning { color: #92400e; background: #fef3c7; }\n.danger { color: #991b1b; background: #fee2e2; }",
        "hints": [
          "Badges fit naturally with a pill shape.",
          "Each status class gets its own dedicated color.",
          "Keep layout clean and simple using flex."
        ]
      }
    ]
  }
];
