import { createSnippetChallenge } from "../helpers/snippetChallengeBuilder.js";



export const vanillaCounterChallenge = createSnippetChallenge({
  id: "vanilla-counter",
  title: "JS Counter",
  estimatedTime: "15 min",
  interviewPrompt:
    "Bygg en counter med vanlig JavaScript som kan öka värdet.",
  currentGoal: "Uppdatera DOM:en när användaren klickar.",
  baseWhatToSay:
    "Okej, jag sparar värdet i en variabel och renderar om texten när knappen klickas.",
  baseCode: `let count = 0;

const value = document.querySelector("#value");
const incrementButton = document.querySelector("#increment");

function render() {
  value.textContent = count;
}

incrementButton.addEventListener("click", () => {
  count += 1;
  render();
});

render();

`,
  baseFollowUpQuestions: [
    {
      question: "Varför har du en render-funktion?",
      answer:
        "Då finns det ett tydligt ställe där DOM:en uppdateras när värdet ändras.",
    },
  ],
  features: [
    {
      id: "reset",
      label: "Reset",
      colorClass: "feature-empty",
      interviewer: "Lägg till en reset-knapp.",
      goal: "Sätt tillbaka countern till noll.",
      getWhatToSay() {
        return "Okej, reset behöver ändra samma count-värde och sedan rendera om.";
      },
      code: `const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", () => {
  count = 0;
  render();
});

`,
    },
    {
      id: "step",
      label: "Step",
      colorClass: "feature-category",
      interviewer: "Låt användaren välja hur mycket värdet ska öka.",
      goal: "Läs step från ett inputfält.",
      getWhatToSay() {
        return "Okej, jag läser inputvärdet som number innan jag uppdaterar count.";
      },
      code: `const stepInput = document.querySelector("#step");

incrementButton.addEventListener("click", () => {
  const step = Number(stepInput.value);
  count += step;
  render();
});

`,
    },
  ],
});

vanillaCounterChallenge.getCodeSections = function getVanillaCounterSections(
  selected,
) {
  const hasReset = selected.includes("reset");
  const hasStep = selected.includes("step");

  return [
    {
      id: "state",
      code: `// Okej, jag sparar värdet i en variabel som render-funktionen kan visa.
let count = 0;

`,
    },
    {
      id: "elements",
      feature: hasStep || hasReset ? "feature-shared" : null,
      code: `// Här hämtar jag elementen som JavaScript-koden behöver uppdatera.
const value = document.querySelector("#value");
const incrementButton = document.querySelector("#increment");
${hasStep ? 'const stepInput = document.querySelector("#step");\n' : ""}${
        hasReset ? 'const resetButton = document.querySelector("#reset");\n' : ""
      }
`,
    },
    {
      id: "render",
      code: `// Här samlar jag DOM-uppdateringen på ett ställe.
function render() {
  value.textContent = count;
}

`,
    },
    {
      id: "increment",
      feature: hasStep ? "feature-category" : null,
      code: `// Här kopplar jag klicket till samma count-värde.
incrementButton.addEventListener("click", () => {
${hasStep ? `  const step = Number(stepInput.value);
  count += step;
` : `  count += 1;
`}  render();
});

`,
    },
    ...(hasReset
      ? [
          {
            id: "reset",
            feature: "feature-empty",
            code: `// Reset: Okej, reset ändrar samma count-värde och renderar om.
resetButton.addEventListener("click", () => {
  count = 0;
  render();
});

`,
          },
        ]
      : []),
    {
      id: "initial-render",
      code: `// Här visar jag startvärdet när sidan laddas.
render();

`,
    },
  ];
};

export const vanillaTodoCrudChallenge = createSnippetChallenge({
  id: "vanilla-todo-crud",
  title: "JS Todo CRUD",
  estimatedTime: "25 min",
  interviewPrompt:
    "Bygg en todo-lista i vanlig JavaScript där användaren kan lägga till saker.",
  currentGoal: "Lägg till todos och rendera listan.",
  baseWhatToSay:
    "Okej, jag låter arrayen vara datan och bygger listans HTML från den.",
  baseCode: `const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");

let todos = [];

function renderTodos() {
  list.innerHTML = todos
    .map((todo) => "<li>" + todo.text + "</li>")
    .join("");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  todos = [...todos, { id: Date.now(), text: input.value, done: false }];
  input.value = "";
  renderTodos();
});

`,
  baseFollowUpQuestions: [
    {
      question: "Varför renderar du från arrayen?",
      answer:
        "Arrayen är sanningen för listan, så DOM:en ska byggas från den varje gång den ändras.",
    },
  ],
  features: [
    {
      id: "complete",
      label: "Complete",
      colorClass: "feature-search",
      interviewer: "Lägg till så att en todo kan markeras som klar.",
      goal: "Toggla done på rätt item.",
      getWhatToSay() {
        return "Okej, jag använder id:t för att ändra rätt todo utan att röra resten.";
      },
      code: `function toggleTodo(todoId) {
  todos = todos.map((todo) =>
    todo.id === todoId ? { ...todo, done: !todo.done } : todo
  );

  renderTodos();
}

`,
    },
    {
      id: "edit",
      label: "Edit",
      colorClass: "feature-sort",
      interviewer: "Lägg till redigering av en todo.",
      goal: "Uppdatera texten på en befintlig todo.",
      getWhatToSay() {
        return "Okej, edit ändrar bara texten på det item som matchar id:t.";
      },
      code: `function editTodo(todoId, nextText) {
  todos = todos.map((todo) =>
    todo.id === todoId ? { ...todo, text: nextText } : todo
  );

  renderTodos();
}

`,
    },
    {
      id: "delete",
      label: "Delete",
      colorClass: "feature-empty",
      interviewer: "Lägg till så att användaren kan ta bort en todo.",
      goal: "Filtrera bort rätt item.",
      getWhatToSay() {
        return "Okej, delete kan göras genom att filtrera bort rätt id.";
      },
      code: `function deleteTodo(todoId) {
  todos = todos.filter((todo) => todo.id !== todoId);
  renderTodos();
}

`,
    },
  ],
});

export const vanillaUiComponentsChallenge = createSnippetChallenge({
  id: "vanilla-ui-components",
  title: "JS UI components",
  estimatedTime: "25 min",
  interviewPrompt:
    "Bygg en modal med vanlig JavaScript som kan öppnas och stängas.",
  currentGoal: "Styra synlighet med klass och klick.",
  baseWhatToSay:
    "Okej, jag hämtar knapparna och låter en klass avgöra om modalen syns.",
  baseCode: `const modal = document.querySelector("#modal");
const openButton = document.querySelector("#open-modal");
const closeButton = document.querySelector("#close-modal");

function openModal() {
  modal.classList.add("is-open");
}

function closeModal() {
  modal.classList.remove("is-open");
}

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

`,
  baseFollowUpQuestions: [
    {
      question: "Varför använder du en klass?",
      answer:
        "Då kan JavaScript styra beteendet och CSS styra hur öppet och stängt läge ser ut.",
    },
  ],
  features: [
    {
      id: "escape",
      label: "Escape",
      colorClass: "feature-search",
      interviewer: "Stäng modalen med Escape.",
      goal: "Lyssna på keyboard event.",
      getWhatToSay() {
        return "Okej, Escape är ett globalt tangenttryck så jag lyssnar på document.";
      },
      code: `document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

`,
    },
    {
      id: "outside",
      label: "Klick utanför",
      colorClass: "feature-category",
      interviewer: "Stäng modalen när användaren klickar utanför innehållet.",
      goal: "Jämför klickets target med overlayn.",
      getWhatToSay() {
        return "Okej, om klicket träffar overlayn stänger jag modalen.";
      },
      code: `modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

`,
    },
    {
      id: "tabs",
      label: "Tabs",
      colorClass: "feature-sort",
      interviewer: "Bygg tabs som byter aktivt innehåll.",
      goal: "Spara aktiv tab i DOM:en.",
      getWhatToSay() {
        return "Okej, varje tab får berätta vilket panel-id som ska visas.";
      },
      code: `const tabButtons = document.querySelectorAll("[data-tab]");
const panels = document.querySelectorAll("[data-panel]");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const activeTab = button.dataset.tab;

    panels.forEach((panel) => {
      panel.hidden = panel.dataset.panel !== activeTab;
    });
  });
});

`,
    },
    {
      id: "carousel",
      label: "Slider",
      colorClass: "feature-empty",
      interviewer: "Lägg till en enkel bild-slider.",
      goal: "Visa nästa bild och loopa tillbaka.",
      getWhatToSay() {
        return "Okej, indexet styr vilken bild som visas och modulo gör loopen enkel.";
      },
      code: `let activeIndex = 0;

function showSlide(nextIndex) {
  activeIndex = (nextIndex + slides.length) % slides.length;

  slides.forEach((slide, index) => {
    slide.hidden = index !== activeIndex;
  });
}

nextButton.addEventListener("click", () => showSlide(activeIndex + 1));

`,
    },
  ],
});

export const vanillaFormValidationChallenge = createSnippetChallenge({
  id: "vanilla-form-validation",
  title: "JS Form validation",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg formulärvalidering med vanlig JavaScript.",
  currentGoal: "Validera required-fält innan formuläret skickas.",
  baseWhatToSay:
    "Okej, jag lyssnar på submit och stoppar formuläret om värdet saknas.",
  baseCode: `const form = document.querySelector("#signup-form");
const emailInput = document.querySelector("#email");
const errorText = document.querySelector("#email-error");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (emailInput.value.trim() === "") {
    errorText.textContent = "Email is required.";
    return;
  }

  errorText.textContent = "";
  form.submit();
});

`,
  features: [
    {
      id: "email",
      label: "Email",
      colorClass: "feature-search",
      interviewer: "Kontrollera att email ser giltig ut.",
      goal: "Visa fel om email saknar @.",
      getWhatToSay() {
        return "Okej, jag lägger till ett tydligt villkor för email-formatet.";
      },
      code: `if (!emailInput.value.includes("@")) {
  errorText.textContent = "Email must include @.";
  return;
}

`,
    },
    {
      id: "password",
      label: "Password",
      colorClass: "feature-category",
      interviewer: "Lägg till validering för lösenordslängd.",
      goal: "Kräva minst åtta tecken.",
      getWhatToSay() {
        return "Okej, lösenordet får ett eget villkor så felet blir lätt att förstå.";
      },
      code: `const passwordInput = document.querySelector("#password");
const passwordError = document.querySelector("#password-error");

if (passwordInput.value.length < 8) {
  passwordError.textContent = "Password must be at least 8 characters.";
  return;
}

passwordError.textContent = "";

`,
    },
  ],
});

export const vanillaShoppingCartChallenge = createSnippetChallenge({
  id: "vanilla-shopping-cart",
  title: "JS Shopping cart",
  estimatedTime: "30 min",
  interviewPrompt: "Bygg en enkel kundvagn med vanlig JavaScript.",
  currentGoal: "Lägg produkter i cart och rendera listan.",
  baseWhatToSay:
    "Okej, jag låter cart-arrayen vara datan och renderar DOM:en från den.",
  baseCode: `const cartList = document.querySelector("#cart");
const addButtons = document.querySelectorAll("[data-product]");

let cart = [];

function renderCart() {
  cartList.innerHTML = cart
    .map((item) => "<li>" + item.name + "</li>")
    .join("");
}

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cart = [...cart, { id: button.dataset.id, name: button.dataset.product }];
    renderCart();
  });
});

`,
  features: [
    {
      id: "quantity",
      label: "Quantity",
      colorClass: "feature-price",
      interviewer: "Om produkten redan finns ska quantity öka.",
      goal: "Hantera antal per cart-rad.",
      getWhatToSay() {
        return "Okej, jag letar efter befintlig produkt och uppdaterar quantity om den redan finns.";
      },
      code: `function addToCart(product) {
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    cart = cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    return;
  }

  cart = [...cart, { ...product, quantity: 1 }];
}

`,
    },
    {
      id: "total",
      label: "Total",
      colorClass: "feature-sort",
      interviewer: "Visa totalpris för carten.",
      goal: "Summera pris och quantity.",
      getWhatToSay() {
        return "Okej, totalen räknas från cart-arrayen eftersom den är sanningen för valet.";
      },
      code: `const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

`,
    },
  ],
});

export const vanillaAutocompleteChallenge = createSnippetChallenge({
  id: "vanilla-autocomplete",
  title: "JS Autocomplete",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg autocomplete med vanlig JavaScript.",
  currentGoal: "Filtrera förslag när användaren skriver.",
  baseWhatToSay:
    "Okej, jag lyssnar på input och renderar förslag som matchar texten.",
  baseCode: `const input = document.querySelector("#search");
const list = document.querySelector("#suggestions");

const suggestions = ["React", "Vue", "Angular", "JavaScript"];

function renderSuggestions(query) {
  const matches = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );

  list.innerHTML = matches
    .map((suggestion) => "<li>" + suggestion + "</li>")
    .join("");
}

input.addEventListener("input", (event) => {
  renderSuggestions(event.target.value);
});

`,
  features: [
    {
      id: "keyboard",
      label: "Keyboard",
      colorClass: "feature-search",
      interviewer: "Lägg till aktivt index så användaren kan navigera med tangentbord.",
      goal: "Hålla koll på markerat förslag.",
      getWhatToSay() {
        return "Okej, activeIndex sparar vilken rad som är markerad just nu.";
      },
      code: `let activeIndex = 0;

input.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown") activeIndex += 1;
  if (event.key === "ArrowUp") activeIndex -= 1;
  renderSuggestions(input.value);
});

`,
    },
    {
      id: "empty",
      label: "Tom lista",
      colorClass: "feature-empty",
      interviewer: "Visa ett meddelande när det inte finns några förslag.",
      goal: "Hantera tomt resultat.",
      getWhatToSay() {
        return "Okej, om matches är tom visar jag text istället för en tom lista.";
      },
      code: `if (matches.length === 0) {
  list.innerHTML = "<li>No suggestions found.</li>";
  return;
}

`,
    },
  ],
});

export const vanillaImageGalleryChallenge = createSnippetChallenge({
  id: "vanilla-image-gallery",
  title: "JS Image gallery",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg ett bildgalleri med vanlig JavaScript.",
  currentGoal: "Visa en aktiv bild och byt till nästa.",
  baseWhatToSay:
    "Okej, jag sparar aktivt index och renderar bilden från arrayen.",
  baseCode: `const image = document.querySelector("#active-image");
const nextButton = document.querySelector("#next");

const images = ["one.jpg", "two.jpg", "three.jpg"];
let activeIndex = 0;

function renderImage() {
  image.src = images[activeIndex];
}

nextButton.addEventListener("click", () => {
  activeIndex = activeIndex + 1;
  renderImage();
});

renderImage();

`,
  features: [
    {
      id: "loop",
      label: "Loop",
      colorClass: "feature-sort",
      interviewer: "När användaren går förbi sista bilden ska galleriet börja om.",
      goal: "Loopa indexet.",
      getWhatToSay() {
        return "Okej, modulo gör att indexet börjar om när det passerar sista bilden.";
      },
      code: `activeIndex = (activeIndex + 1) % images.length;
renderImage();

`,
    },
    {
      id: "previous",
      label: "Föregående",
      colorClass: "feature-category",
      interviewer: "Lägg till en föregående-knapp.",
      goal: "Kunna gå bakåt i listan.",
      getWhatToSay() {
        return "Okej, jag minskar indexet och loopar tillbaka till sista bilden vid behov.";
      },
      code: `const previousButton = document.querySelector("#previous");

previousButton.addEventListener("click", () => {
  activeIndex = (activeIndex - 1 + images.length) % images.length;
  renderImage();
});

`,
    },
  ],
});

