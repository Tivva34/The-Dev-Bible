import { createSnippetChallenge } from "../helpers/snippetChallengeBuilder.js";



export const vueComponentChallenge = createSnippetChallenge({
  id: "vue-component",
  title: "Vue component",
  estimatedTime: "20 min",
  interviewPrompt:
    "Bygg en Vue-komponent som visar en lista med produkter.",
  currentGoal: "Rendera produkter med Vue template-syntax.",
  baseWhatToSay:
    "Okej, jag börjar med en products-array och renderar varje produkt med v-for.",
  autoLineComments: false,
  baseCode: `// ProductList.vue
// Här börjar jag med produktdata som komponenten kan visa.
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 900 },
  { id: 3, name: "Keyboard", price: 150 },
];

export default {
  data() {
    return {
      // Här gör jag produkterna till data som templaten kan läsa.
      products,
    };
  },
};

<template>
  <!-- Här renderar jag varje produkt med v-for. -->
  <section>
    <article v-for="product in products" :key="product.id">
      <h2>{{ product.name }}</h2>
      <p>{{ product.price }}</p>
    </article>
  </section>
</template>

`,
  baseFollowUpQuestions: [
    {
      question: "Varför använder du v-for?",
      answer:
        "Det är Vue-sättet att rendera en lista från data, ungefär som map i React.",
    },
  ],
  features: [
    {
      id: "search",
      label: "Sök",
      colorClass: "feature-search",
      interviewer: "Lägg till sök i Vue-komponenten.",
      goal: "Filtrera produkter med computed.",
      getWhatToSay() {
        return "Okej, jag sparar söktexten i data och använder computed för listan som ska visas.";
      },
      code: `// ProductList.vue
data() {
  return {
    products,
    // Här sparar jag vad användaren skriver i sökfältet.
    search: "",
  };
},

computed: {
  // Här räknar jag fram produkterna som matchar sökningen.
  visibleProducts() {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(this.search.toLowerCase())
    );
  },
},

<!-- Här kopplar jag inputfältet till search. -->
<input v-model="search" placeholder="Search products" />

<!-- Här renderar jag den filtrerade listan. -->
<article v-for="product in visibleProducts" :key="product.id">
  <h2>{{ product.name }}</h2>
</article>

`,
    },
    {
      id: "empty",
      label: "Tom lista",
      colorClass: "feature-empty",
      interviewer: "Visa ett meddelande när sökningen inte matchar något.",
      goal: "Hantera tomt resultat i Vue.",
      getWhatToSay() {
        return "Okej, jag använder v-if för tomt läge och v-else för listan.";
      },
      code: `// ProductList.vue
<!-- Här visar jag ett tomt läge när listan saknar träffar. -->
<p v-if="visibleProducts.length === 0">No products found.</p>

<!-- Här visar jag listan när det finns produkter. -->
<section v-else>
  <article v-for="product in visibleProducts" :key="product.id">
    <h2>{{ product.name }}</h2>
  </article>
</section>

`,
    },
  ],
});

export const vueTodoChallenge = createSnippetChallenge({
  id: "vue-todo-app",
  title: "Vue Todo",
  estimatedTime: "25 min",
  interviewPrompt:
    "Bygg en todo-lista i Vue där användaren kan lägga till uppgifter.",
  currentGoal: "Använd v-model och v-for för en enkel todo-lista.",
  baseWhatToSay:
    "Okej, jag sparar input och todos i data och renderar listan med v-for.",
  autoLineComments: false,
  baseCode: `// TodoList.vue
export default {
  data() {
    return {
      // Här sparar jag texten användaren skriver.
      text: "",
      // Här sparar jag todo-listan som templaten renderar.
      todos: [],
    };
  },
  methods: {
    // Här lägger jag till en ny todo från inputen.
    addTodo() {
      this.todos.push({ id: Date.now(), text: this.text, done: false });
      this.text = "";
    },
  },
};

<template>
  <!-- Här stoppar jag vanlig submit och kör addTodo istället. -->
  <form @submit.prevent="addTodo">
    <input v-model="text" placeholder="New todo" />
    <button>Add</button>
  </form>

  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
    </li>
  </ul>
</template>

`,
  baseFollowUpQuestions: [
    {
      question: "Varför använder du v-model?",
      answer:
        "Inputen och datan ska hålla samma värde, och v-model gör den kopplingen tydlig.",
    },
  ],
  features: [
    {
      id: "complete",
      label: "Complete",
      colorClass: "feature-search",
      interviewer: "Lägg till så att en todo kan markeras som klar.",
      goal: "Toggla done på rätt todo.",
      getWhatToSay() {
        return "Okej, todo-objektet får ett done-värde som vyn kan reagera på.";
      },
      code: `// TodoList.vue
methods: {
  // Här togglar jag done på den todo användaren klickar på.
  toggleTodo(todo) {
    todo.done = !todo.done;
  },
},

<!-- Här kopplar jag checkboxen till todo.done. -->
<li v-for="todo in todos" :key="todo.id">
  <label>
    <input type="checkbox" v-model="todo.done" />
    {{ todo.text }}
  </label>
</li>

`,
    },
    {
      id: "filter",
      label: "Filter",
      colorClass: "feature-category",
      interviewer: "Lägg till filter för alla, aktiva och klara todos.",
      goal: "Använd computed för synliga todos.",
      getWhatToSay() {
        return "Okej, computed passar när listan ska räknas fram från befintlig data.";
      },
      code: `// TodoList.vue
data() {
  return {
    // Här sparar jag vilket filter som är valt.
    filter: "all",
  };
},

computed: {
  // Här räknar jag fram de todos som ska visas.
  visibleTodos() {
    if (this.filter === "active") return this.todos.filter((todo) => !todo.done);
    if (this.filter === "done") return this.todos.filter((todo) => todo.done);
    return this.todos;
  },
},

`,
    },
    {
      id: "delete",
      label: "Delete",
      colorClass: "feature-empty",
      interviewer: "Lägg till delete.",
      goal: "Ta bort rätt todo från listan.",
      getWhatToSay() {
        return "Okej, jag filtrerar bort den todo som matchar id:t.";
      },
      code: `// TodoList.vue
methods: {
  // Här tar jag bort den todo som matchar id:t.
  deleteTodo(todoId) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  },
},

`,
    },
  ],
});

export const vueFetchCartChallenge = createSnippetChallenge({
  id: "vue-fetch-cart",
  title: "Vue Fetch & cart",
  estimatedTime: "30 min",
  interviewPrompt:
    "Bygg en Vue-vy som hämtar produkter och visar dem.",
  currentGoal: "Hämta data när komponenten mountas.",
  baseWhatToSay:
    "Okej, jag använder mounted för att hämta produkterna när vyn är redo.",
  autoLineComments: false,
  baseCode: `// ProductFetch.vue
export default {
  data() {
    return {
      // Här sparar jag produkterna som kommer från API:t.
      products: [],
      // Här sparar jag om API-anropet pågår.
      isLoading: false,
      // Här sparar jag feltext om hämtningen misslyckas.
      error: "",
    };
  },
  // Här hämtar jag produkterna när komponenten mountas.
  async mounted() {
    this.isLoading = true;
    const response = await fetch("/api/products");
    this.products = await response.json();
    this.isLoading = false;
  },
};

<template>
  <!-- Här visar jag tydligt vilket API-läge vyn är i. -->
  <p v-if="isLoading">Loading...</p>
  <p v-else-if="error">{{ error }}</p>
  <article v-for="product in products" :key="product.id">
    <h2>{{ product.name }}</h2>
    <p>{{ product.price }}</p>
  </article>
</template>

`,
  features: [
    {
      id: "error",
      label: "Error",
      colorClass: "feature-empty",
      interviewer: "Lägg till felhantering.",
      goal: "Visa felmeddelande vid misslyckat anrop.",
      getWhatToSay() {
        return "Okej, try/catch gör att UI:t kan visa ett fel istället för att fastna.";
      },
      code: `// ProductFetch.vue
try {
  const response = await fetch("/api/products");
  this.products = await response.json();
} catch (error) {
  this.error = "Could not load products.";
} finally {
  this.isLoading = false;
}

`,
    },
    {
      id: "cart",
      label: "Cart",
      colorClass: "feature-search",
      interviewer: "Lägg till en enkel varukorg.",
      goal: "Spara valda produkter och räkna total.",
      getWhatToSay() {
        return "Okej, cart blir en egen lista och totalen räknas från den.";
      },
      code: `// ProductFetch.vue
data() {
  return {
    // Här sparar jag produkterna som användaren lagt i carten.
    cart: [],
  };
},

computed: {
  // Här räknar jag totalen från carten.
  totalPrice() {
    return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
},

methods: {
  // Här lägger jag till en produkt i carten.
  addToCart(product) {
    this.cart.push({ ...product, quantity: 1 });
  },
},

`,
    },
    {
      id: "quantity",
      label: "Quantity",
      colorClass: "feature-sort",
      interviewer: "Låt användaren ändra quantity i cart.",
      goal: "Uppdatera quantity på rätt rad.",
      getWhatToSay() {
        return "Okej, quantity gör att samma produkt kan ha ett tydligt antal.";
      },
      code: `// ProductFetch.vue
<!-- Här låter jag användaren styra quantity i carten. -->
<input
  type="number"
  min="1"
  v-model.number="item.quantity"
/>

`,
    },
  ],
});

export const vueDynamicTableChallenge = createSnippetChallenge({
  id: "vue-dynamic-table",
  title: "Vue dynamic table",
  estimatedTime: "30 min",
  interviewPrompt:
    "Bygg en Vue-tabell som visar användare.",
  currentGoal: "Rendera tabellrader från data.",
  baseWhatToSay:
    "Okej, jag börjar med en users-array och låter v-for skapa raderna.",
  autoLineComments: false,
  baseCode: `// UserTable.vue
export default {
  data() {
    return {
      // Här sparar jag tabellens rader.
      users: [
        { id: 1, name: "Ada", role: "Admin" },
        { id: 2, name: "Linus", role: "User" },
      ],
    };
  },
};

<template>
  <!-- Här renderar jag en tabellrad per användare. -->
  <table>
    <tr v-for="user in users" :key="user.id">
      <td>{{ user.name }}</td>
      <td>{{ user.role }}</td>
    </tr>
  </table>
</template>

`,
  features: [
    {
      id: "sort",
      label: "Sortering",
      colorClass: "feature-sort",
      interviewer: "Lägg till sortering på namn.",
      goal: "Sortera tabellen med computed.",
      getWhatToSay() {
        return "Okej, jag sorterar en kopia så users inte ändras direkt.";
      },
      code: `// UserTable.vue
computed: {
  // Här sorterar jag en kopia av listan.
  sortedUsers() {
    return [...this.users].sort((a, b) => a.name.localeCompare(b.name));
  },
},

`,
    },
    {
      id: "filter",
      label: "Filter",
      colorClass: "feature-search",
      interviewer: "Lägg till filter på roll.",
      goal: "Visa bara användare med vald roll.",
      getWhatToSay() {
        return "Okej, vald roll får styra vilka rader som visas.";
      },
      code: `// UserTable.vue
data() {
  return {
    // Här sparar jag vilken roll som ska visas.
    role: "all",
  };
},

computed: {
  // Här filtrerar jag efter vald roll.
  visibleUsers() {
    if (this.role === "all") return this.sortedUsers;
    return this.sortedUsers.filter((user) => user.role === this.role);
  },
},

`,
    },
    {
      id: "pagination",
      label: "Pagination",
      colorClass: "feature-category",
      interviewer: "Lägg till pagination.",
      goal: "Visa ett begränsat antal rader per sida.",
      getWhatToSay() {
        return "Okej, page och pageSize räcker för att ta ut rätt slice.";
      },
      code: `// UserTable.vue
data() {
  return {
    // Här sparar jag vilken sida användaren är på.
    page: 1,
    // Här bestämmer jag hur många rader som visas per sida.
    pageSize: 5,
  };
},

computed: {
  // Här tar jag ut raderna för aktuell sida.
  pageUsers() {
    const start = (this.page - 1) * this.pageSize;
    return this.visibleUsers.slice(start, start + this.pageSize);
  },
},

`,
    },
  ],
});

export const vueUtilityFunctionsChallenge = createSnippetChallenge({
  id: "vue-utility-functions",
  title: "Vue utility functions",
  estimatedTime: "25 min",
  interviewPrompt:
    "Bygg en Vue-komponent som använder utility-funktioner för att forma data.",
  currentGoal: "Rendera data som först går genom en ren hjälpfunktion.",
  baseWhatToSay:
    "Okej, jag håller hjälpfunktionen separat och använder computed när komponenten behöver läsa resultatet.",
  autoLineComments: false,
  baseCode: `// UtilityExample.vue
// Här håller jag hjälplogiken utanför komponenten.
function doubleNumbers(numbers) {
  return numbers.map((number) => number * 2);
}

export default {
  data() {
    return {
      numbers: [1, 2, 3],
    };
  },

  computed: {
    // Här räknar jag fram värdena som templaten ska visa.
    doubledNumbers() {
      return doubleNumbers(this.numbers);
    },
  },
};

<template>
  <!-- Här renderar jag resultatet från computed. -->
  <section>
    <p v-for="number in doubledNumbers" :key="number">
      {{ number }}
    </p>
  </section>
</template>

`,
  baseFollowUpQuestions: [
    {
      question: "Varför använder du computed här?",
      answer:
        "Resultatet beror på komponentens data, så computed gör att listan räknas om när datan ändras.",
    },
  ],
  features: [
    {
      id: "custom-map",
      label: "Egen mappning",
      colorClass: "feature-search",
      interviewer: "Skriv en egen map-funktion och använd den i computed.",
      goal: "Visa callbacks i Vue-flödet.",
      getWhatToSay() {
        return "Okej, helpern returnerar en ny array och computed använder den när templaten renderas.";
      },
      code: `// UtilityExample.vue
function customMap(array, callback) {
  const result = [];

  for (let index = 0; index < array.length; index += 1) {
    result.push(callback(array[index], index, array));
  }

  return result;
}

computed: {
  doubledNumbers() {
    return customMap(this.numbers, (number) => number * 2);
  },
},

`,
    },
    {
      id: "debounce",
      label: "Debounce",
      colorClass: "feature-category",
      interviewer: "Lägg till debounce för en sökmetod i Vue.",
      goal: "Fördröja en metod utan att förlora argumenten.",
      getWhatToSay() {
        return "Okej, debounce håller timer-id i closure och anropar metoden när användaren pausat.";
      },
      code: `// UtilityExample.vue
function debounce(callback, delay) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
}

methods: {
  search: debounce(function search(query) {
    console.log(query);
  }, 300),
},

`,
    },
    {
      id: "flatten",
      label: "Flatten",
      colorClass: "feature-sort",
      interviewer: "Lägg till flatten för nästlade värden.",
      goal: "Platta till data innan den visas.",
      getWhatToSay() {
        return "Okej, jag gör flatten som en ren funktion och använder resultatet i computed.";
      },
      code: `// UtilityExample.vue
function flattenArray(items) {
  return items.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? flattenArray(item) : item);
  }, []);
}

computed: {
  flatNumbers() {
    return flattenArray([1, [2, [3]], 4]);
  },
},

`,
    },
  ],
});

export const vueCounterChallenge = createSnippetChallenge({
  id: "vue-counter",
  title: "Vue Counter",
  estimatedTime: "15 min",
  interviewPrompt: "Bygg en Vue-counter som kan öka värdet.",
  currentGoal: "Visa ett värde och uppdatera det vid klick.",
  baseWhatToSay:
    "Okej, jag sparar count i data och låter klicket uppdatera värdet.",
  autoLineComments: false,
  baseCode: `// Counter.vue
export default {
  data() {
    return {
      // Här sparar jag värdet som templaten visar.
      count: 0,
    };
  },
};

<template>
  <!-- Här visar jag count och uppdaterar det med klick. -->
  <section>
    <p>Count: {{ count }}</p>
    <button @click="count += 1">Increase</button>
  </section>
</template>

`,
  features: [
    {
      id: "decrease",
      label: "Minska",
      colorClass: "feature-category",
      interviewer: "Lägg till en knapp som minskar värdet.",
      goal: "Kunna ändra count åt båda håll.",
      getWhatToSay() {
        return "Okej, minusknappen ändrar samma count-värde i data.";
      },
      code: `// Counter.vue
<button @click="count -= 1">Decrease</button>

`,
    },
    {
      id: "reset",
      label: "Reset",
      colorClass: "feature-empty",
      interviewer: "Lägg till reset.",
      goal: "Sätta tillbaka count till noll.",
      getWhatToSay() {
        return "Okej, reset sätter count tillbaka till startvärdet.";
      },
      code: `// Counter.vue
<button @click="count = 0">Reset</button>

`,
    },
  ],
});

vueCounterChallenge.getCodeSections = function getVueCounterSections(selected) {
  const hasDecrease = selected.includes("decrease");
  const hasReset = selected.includes("reset");

  return [
    {
      id: "script",
      code: `// Counter.vue
export default {
  data() {
    return {
      // Här sparar jag värdet som templaten visar.
      count: 0,
    };
  },
};

`,
    },
    {
      id: "template",
      feature:
        (hasReset && "feature-empty") ||
        (hasDecrease && "feature-category") ||
        null,
      code: `<template>
  <!-- Här visar jag count och uppdaterar det med klick. -->
  <section>
    <p>Count: {{ count }}</p>
    <button @click="count += 1">Increase</button>
${
  hasDecrease
    ? `    <button @click="count -= 1">Decrease</button>
`
    : ""
}${
  hasReset
    ? `    <button @click="count = 0">Reset</button>
`
    : ""
}  </section>
</template>

`,
    },
  ];
};

vueCounterChallenge.getCodeSections = function getVueCounterSplitSections(
  selected,
) {
  const hasDecrease = selected.includes("decrease");
  const hasReset = selected.includes("reset");

  return [
    {
      id: "script",
      code: `// Counter.vue
export default {
  data() {
    return {
      // Här sparar jag värdet som templaten visar.
      count: 0,
    };
  },
};

`,
    },
    {
      id: "template-base",
      code: `<template>
  <!-- Här visar jag count och uppdaterar det med klick. -->
  <section>
    <p>Count: {{ count }}</p>
    <button @click="count += 1">Increase</button>

`,
    },
    ...(hasDecrease
      ? [
          {
            id: "decrease-button",
            feature: "feature-category",
            code: `    <button @click="count -= 1">Decrease</button>

`,
          },
        ]
      : []),
    ...(hasReset
      ? [
          {
            id: "reset-button",
            feature: "feature-empty",
            code: `    <button @click="count = 0">Reset</button>

`,
          },
        ]
      : []),
    {
      id: "template-end",
      code: `  </section>
</template>

`,
    },
  ];
};

export const vueFormValidationChallenge = createSnippetChallenge({
  id: "vue-form-validation",
  title: "Vue Form validation",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg ett Vue-formulär med enkel validering.",
  currentGoal: "Validera email innan formuläret skickas.",
  baseWhatToSay:
    "Okej, jag kopplar input till data med v-model och validerar i submit-funktionen.",
  autoLineComments: false,
  baseCode: `// SignupForm.vue
export default {
  data() {
    return {
      email: "",
      error: "",
    };
  },
  methods: {
    submitForm() {
      if (this.email.trim() === "") {
        this.error = "Email is required.";
        return;
      }

      this.error = "";
    },
  },
};

<template>
  <form @submit.prevent="submitForm">
    <input v-model="email" placeholder="Email" />
    <p v-if="error">{{ error }}</p>
    <button>Submit</button>
  </form>
</template>

`,
  features: [
    {
      id: "password",
      label: "Password",
      colorClass: "feature-category",
      interviewer: "Lägg till lösenordsvalidering.",
      goal: "Kräva minst åtta tecken.",
      getWhatToSay() {
        return "Okej, lösenordet får eget state och ett eget felvillkor.";
      },
      code: `// SignupForm.vue
data() {
  return {
    password: "",
  };
},

if (this.password.length < 8) {
  this.error = "Password must be at least 8 characters.";
  return;
}

<input v-model="password" type="password" placeholder="Password" />

`,
    },
  ],
});

export const vueUiComponentsChallenge = createSnippetChallenge({
  id: "vue-ui-components",
  title: "Vue UI components",
  estimatedTime: "30 min",
  interviewPrompt: "Bygg en enkel Vue-modal.",
  currentGoal: "Öppna och stäng en modal med state.",
  baseWhatToSay:
    "Okej, jag sparar om modalen är öppen och använder v-if för att visa den.",
  autoLineComments: false,
  baseCode: `// ModalExample.vue
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};

<template>
  <button @click="isOpen = true">Open modal</button>

  <section v-if="isOpen" role="dialog">
    <h2>Modal</h2>
    <button @click="isOpen = false">Close</button>
  </section>
</template>

`,
  features: [
    {
      id: "tabs",
      label: "Tabs",
      colorClass: "feature-sort",
      interviewer: "Bygg tabs med aktiv flik.",
      goal: "Byta innehåll med state.",
      getWhatToSay() {
        return "Okej, aktiv flik blir ett värde i data och templaten visar rätt innehåll.";
      },
      code: `// Tabs.vue
data() {
  return {
    activeTab: "details",
  };
},

<button @click="activeTab = 'details'">Details</button>
<button @click="activeTab = 'reviews'">Reviews</button>
<p v-if="activeTab === 'details'">Details content</p>
<p v-if="activeTab === 'reviews'">Reviews content</p>

`,
    },
    {
      id: "accordion",
      label: "Accordion",
      colorClass: "feature-search",
      interviewer: "Bygg en accordion där en rad kan öppnas.",
      goal: "Visa svar för aktiv fråga.",
      getWhatToSay() {
        return "Okej, jag sparar id:t för den öppna raden och jämför det i templaten.";
      },
      code: `// Accordion.vue
data() {
  return {
    activeId: null,
  };
},

<article v-for="item in faqs" :key="item.id">
  <button @click="activeId = activeId === item.id ? null : item.id">
    {{ item.question }}
  </button>
  <p v-if="activeId === item.id">{{ item.answer }}</p>
</article>

`,
    },
  ],
});

export const vueAutocompleteChallenge = createSnippetChallenge({
  id: "vue-autocomplete",
  title: "Vue Autocomplete",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg autocomplete i Vue.",
  currentGoal: "Filtrera förslag med computed.",
  baseWhatToSay:
    "Okej, jag sparar söktexten med v-model och räknar fram förslagen i computed.",
  autoLineComments: false,
  baseCode: `// Autocomplete.vue
export default {
  data() {
    return {
      search: "",
      suggestions: ["React", "Vue", "Angular", "JavaScript"],
    };
  },
  computed: {
    visibleSuggestions() {
      return this.suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};

<template>
  <input v-model="search" placeholder="Search" />
  <ul>
    <li v-for="suggestion in visibleSuggestions" :key="suggestion">
      {{ suggestion }}
    </li>
  </ul>
</template>

`,
  features: [
    {
      id: "select",
      label: "Välj",
      colorClass: "feature-search",
      interviewer: "Låt användaren klicka på ett förslag.",
      goal: "Sätta inputens värde från valt förslag.",
      getWhatToSay() {
        return "Okej, klicket sätter search till valt förslag.";
      },
      code: `// Autocomplete.vue
methods: {
  selectSuggestion(suggestion) {
    this.search = suggestion;
  },
},

<li
  v-for="suggestion in visibleSuggestions"
  :key="suggestion"
  @click="selectSuggestion(suggestion)"
>
  {{ suggestion }}
</li>

`,
    },
    {
      id: "empty",
      label: "Tom lista",
      colorClass: "feature-empty",
      interviewer: "Visa text när inga förslag matchar.",
      goal: "Hantera tomt resultat.",
      getWhatToSay() {
        return "Okej, v-if passar när jag vill visa tomt läge istället för listan.";
      },
      code: `// Autocomplete.vue
<p v-if="visibleSuggestions.length === 0">No suggestions found.</p>

`,
    },
  ],
});

export const vueImageGalleryChallenge = createSnippetChallenge({
  id: "vue-image-gallery",
  title: "Vue Image gallery",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg ett bildgalleri i Vue.",
  currentGoal: "Visa aktiv bild och byt till nästa.",
  baseWhatToSay:
    "Okej, activeIndex styr vilken bild som visas i templaten.",
  autoLineComments: false,
  baseCode: `// ImageGallery.vue
export default {
  data() {
    return {
      activeIndex: 0,
      images: ["one.jpg", "two.jpg", "three.jpg"],
    };
  },
  computed: {
    activeImage() {
      return this.images[this.activeIndex];
    },
  },
};

<template>
  <img :src="activeImage" alt="" />
  <button @click="activeIndex += 1">Next</button>
</template>

`,
  features: [
    {
      id: "loop",
      label: "Loop",
      colorClass: "feature-sort",
      interviewer: "Loopa tillbaka till första bilden efter sista.",
      goal: "Hålla index inom arrayen.",
      getWhatToSay() {
        return "Okej, modulo håller activeIndex inom bildernas längd.";
      },
      code: `// ImageGallery.vue
methods: {
  showNext() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  },
},

<button @click="showNext">Next</button>

`,
    },
    {
      id: "thumbs",
      label: "Thumbnails",
      colorClass: "feature-category",
      interviewer: "Visa thumbnails som kan välja aktiv bild.",
      goal: "Hoppa direkt till vald bild.",
      getWhatToSay() {
        return "Okej, varje thumbnail sätter activeIndex till sin egen position.";
      },
      code: `// ImageGallery.vue
<button
  v-for="(image, index) in images"
  :key="image"
  @click="activeIndex = index"
>
  {{ index + 1 }}
</button>

`,
    },
  ],
});

