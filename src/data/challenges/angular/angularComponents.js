import { createSnippetChallenge } from "../helpers/snippetChallengeBuilder.js";



export const angularComponentChallenge = createSnippetChallenge({
  id: "angular-component",
  title: "Angular component",
  estimatedTime: "20 min",
  interviewPrompt:
    "Bygg en Angular-komponent som visar en lista med produkter.",
  currentGoal: "Rendera produkter med Angular template-syntax.",
  baseWhatToSay:
    "Okej, jag börjar med en products-array och renderar varje produkt med *ngFor.",
  autoLineComments: false,
  baseCode: `// product-list.component.ts
// Här håller jag datan och hjälpfunktioner i komponentklassen.
products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Phone", price: 900 },
  { id: 3, name: "Keyboard", price: 150 },
];

// Här returnerar jag id:t så Angular kan känna igen varje rad.
trackById(index, product) {
  return product.id;
}

// product-list.component.html
<!-- Här renderar jag varje produkt från komponentens products-array. -->
<section>
  <article *ngFor="let product of products; trackBy: trackById">
    <h2>{{ product.name }}</h2>
    <p>{{ product.price }}</p>
  </article>
</section>

`,
  baseFollowUpQuestions: [
    {
      question: "Varför använder du trackBy?",
      answer:
        "Det hjälper Angular känna igen raderna i listan när datan ändras.",
    },
  ],
  features: [
    {
      id: "search",
      label: "Sök",
      colorClass: "feature-search",
      interviewer: "Lägg till sök i Angular-komponenten.",
      goal: "Filtrera produkter från input.",
      getWhatToSay() {
        return "Okej, jag sparar söktexten och använder en getter för listan som ska visas.";
      },
      code: `// product-list.component.ts
// Här sparar jag det användaren skriver i sökfältet.
search = "";

// Här räknar jag fram listan som faktiskt ska visas.
get visibleProducts() {
  return this.products.filter((product) =>
    product.name.toLowerCase().includes(this.search.toLowerCase())
  );
}

// product-list.component.html
<!-- Här kopplar jag inputfältet till komponentens search-värde. -->
<input [(ngModel)]="search" placeholder="Search products" />

<!-- Här använder jag den filtrerade listan istället för alla produkter. -->
<article *ngFor="let product of visibleProducts; trackBy: trackById">
  <h2>{{ product.name }}</h2>
</article>

`,
    },
    {
      id: "empty",
      label: "Tom lista",
      colorClass: "feature-empty",
      interviewer: "Visa ett meddelande när sökningen inte matchar något.",
      goal: "Hantera tomt resultat i Angular.",
      getWhatToSay() {
        return "Okej, jag använder *ngIf för att visa tomt läge när listan saknar träffar.";
      },
      code: `// product-list.component.html
<!-- Här visar jag ett tydligt tomt läge när filtret inte ger träffar. -->
<p *ngIf="visibleProducts.length === 0">No products found.</p>

<!-- Här visar jag listan bara när det finns produkter att rendera. -->
<section *ngIf="visibleProducts.length > 0">
  <article *ngFor="let product of visibleProducts; trackBy: trackById">
    <h2>{{ product.name }}</h2>
  </article>
</section>

`,
    },
  ],
});

export const angularTodoChallenge = createSnippetChallenge({
  id: "angular-todo-app",
  title: "Angular Todo",
  estimatedTime: "25 min",
  interviewPrompt:
    "Bygg en todo-lista i Angular där användaren kan lägga till uppgifter.",
  currentGoal: "Använd component state, ngModel och *ngFor.",
  baseWhatToSay:
    "Okej, jag sparar text och todos i komponenten och renderar listan med *ngFor.",
  autoLineComments: false,
  baseCode: `// todo.component.ts
text = "";
todos = [];

addTodo() {
  this.todos = [
    ...this.todos,
    { id: Date.now(), text: this.text, done: false },
  ];

  this.text = "";
}

// todo.component.html
<form (ngSubmit)="addTodo()">
  <input [(ngModel)]="text" name="text" placeholder="New todo" />
  <button>Add</button>
</form>

<ul>
  <li *ngFor="let todo of todos; trackBy: trackById">
    {{ todo.text }}
  </li>
</ul>

`,
  baseFollowUpQuestions: [
    {
      question: "Varför använder du trackBy?",
      answer:
        "Det hjälper Angular känna igen varje rad när listan ändras.",
    },
  ],
  features: [
    {
      id: "complete",
      label: "Complete",
      colorClass: "feature-search",
      interviewer: "Lägg till complete.",
      goal: "Toggla done på rätt todo.",
      getWhatToSay() {
        return "Okej, jag ändrar bara den todo som matchar id:t.";
      },
      code: `// todo.component.ts
toggleTodo(todoId) {
  this.todos = this.todos.map((todo) =>
    todo.id === todoId ? { ...todo, done: !todo.done } : todo
  );
}

// todo.component.html
<li *ngFor="let todo of todos; trackBy: trackById">
  <label>
    <input
      type="checkbox"
      [checked]="todo.done"
      (change)="toggleTodo(todo.id)"
    />
    {{ todo.text }}
  </label>
</li>

`,
    },
    {
      id: "filter",
      label: "Filter",
      colorClass: "feature-category",
      interviewer: "Lägg till filter för all, active och done.",
      goal: "Räkna fram synliga todos.",
      getWhatToSay() {
        return "Okej, en getter passar när synliga todos beror på state.";
      },
      code: `// todo.component.ts
filter = "all";

get visibleTodos() {
  if (this.filter === "active") return this.todos.filter((todo) => !todo.done);
  if (this.filter === "done") return this.todos.filter((todo) => todo.done);
  return this.todos;
}

// todo.component.html
<select [(ngModel)]="filter" name="filter">
  <option value="all">All</option>
  <option value="active">Active</option>
  <option value="done">Done</option>
</select>

<li *ngFor="let todo of visibleTodos; trackBy: trackById">
  {{ todo.text }}
</li>

`,
    },
    {
      id: "delete",
      label: "Delete",
      colorClass: "feature-empty",
      interviewer: "Lägg till delete.",
      goal: "Ta bort rätt todo.",
      getWhatToSay() {
        return "Okej, jag filtrerar bort den rad som matchar id:t.";
      },
      code: `// todo.component.ts
deleteTodo(todoId) {
  this.todos = this.todos.filter((todo) => todo.id !== todoId);
}

// todo.component.html
<button type="button" (click)="deleteTodo(todo.id)">
  Delete
</button>

`,
    },
  ],
});

export const angularHttpFormsChallenge = createSnippetChallenge({
  id: "angular-http-forms",
  title: "Angular HTTP + forms",
  estimatedTime: "30 min",
  interviewPrompt:
    "Bygg en Angular-komponent som hämtar användare från ett API.",
  currentGoal: "Använd HttpClient och visa loading/error.",
  baseWhatToSay:
    "Okej, jag hämtar datan i ngOnInit och sparar loading och error i komponenten.",
  autoLineComments: false,
  baseCode: `// users.component.ts
// Här sparar jag listan som kommer från API:t.
users = [];
// Här sparar jag om anropet pågår.
isLoading = false;
// Här sparar jag feltext om API:t misslyckas.
error = "";

// Här hämtar jag datan när komponenten startar.
ngOnInit() {
  this.loadUsers();
}

// Här samlar jag API-anropet så det går att köra igen.
loadUsers() {
  this.isLoading = true;

  this.http.get("/api/users").subscribe({
    next: (users) => {
      this.users = users;
      this.isLoading = false;
    },
    error: () => {
      this.error = "Could not load users.";
      this.isLoading = false;
    },
  });
}

`,
  features: [
    {
      id: "reactive-form",
      label: "Reactive form",
      colorClass: "feature-search",
      interviewer: "Lägg till reactive form med email och password.",
      goal: "Använd FormGroup och validators.",
      getWhatToSay() {
        return "Okej, reactive forms passar när formuläret ska valideras tydligt.";
      },
      code: `// users.component.ts
// Här skapar jag formuläret med Angulars reactive forms.
form = new FormGroup({
  email: new FormControl("", [Validators.required, Validators.email]),
  password: new FormControl("", [Validators.required]),
});

// Här stoppar jag submit om formuläret inte är giltigt.
submitForm() {
  if (this.form.invalid) return;

  console.log(this.form.value);
}

// users.component.html
<!-- Här kopplar jag templaten till reactive form-objektet. -->
<form [formGroup]="form" (ngSubmit)="submitForm()">
  <input formControlName="email" placeholder="Email" />
  <input formControlName="password" placeholder="Password" />
  <button type="submit">Save</button>
</form>

`,
    },
    {
      id: "search",
      label: "Sök",
      colorClass: "feature-category",
      interviewer: "Lägg till sök i användarlistan.",
      goal: "Filtrera användare från input.",
      getWhatToSay() {
        return "Okej, search blir ett komponentvärde som gettern använder.";
      },
      code: `// users.component.ts
// Här sparar jag det användaren söker på.
search = "";

// Här räknar jag fram listan som matchar sökningen.
get visibleUsers() {
  return this.users.filter((user) =>
    user.name.toLowerCase().includes(this.search.toLowerCase())
  );
}

// users.component.html
<!-- Här kopplar jag sökfältet till komponentens search-värde. -->
<input [(ngModel)]="search" placeholder="Search users" />

<!-- Här renderar jag den filtrerade listan. -->
<article *ngFor="let user of visibleUsers">
  {{ user.name }}
</article>

`,
    },
  ],
});

export const angularShoppingTableChallenge = createSnippetChallenge({
  id: "angular-shopping-table",
  title: "Angular cart & table",
  estimatedTime: "30 min",
  interviewPrompt:
    "Bygg en Angular-cart som visar produkter och totalpris.",
  currentGoal: "Spara cart och räkna totalpris.",
  baseWhatToSay:
    "Okej, cart är listan användaren påverkar och totalen räknas från den.",
  autoLineComments: false,
  baseCode: `// cart.component.ts
// Här sparar jag produkterna som ligger i carten.
cart = [
  { id: 1, name: "Laptop", price: 1200, quantity: 1 },
  { id: 2, name: "Phone", price: 900, quantity: 2 },
];

// Här räknar jag totalen från carten.
get totalPrice() {
  return this.cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}

// cart.component.html
<!-- Här renderar jag varje rad i carten. -->
<article *ngFor="let item of cart; trackBy: trackById">
  <h2>{{ item.name }}</h2>
  <p>{{ item.quantity }} x {{ item.price }}</p>
</article>

<!-- Här visar jag totalen som kommer från gettern. -->
<p>Total: {{ totalPrice }}</p>

`,
  features: [
    {
      id: "quantity",
      label: "Quantity",
      colorClass: "feature-search",
      interviewer: "Låt användaren ändra quantity.",
      goal: "Uppdatera antal på rätt item.",
      getWhatToSay() {
        return "Okej, quantity hör till varje cart-rad och totalen uppdateras automatiskt.";
      },
      code: `// cart.component.html
<!-- Här låter jag användaren ändra antal på raden. -->
<input
  type="number"
  min="1"
  [(ngModel)]="item.quantity"
/>

`,
    },
    {
      id: "remove",
      label: "Remove",
      colorClass: "feature-empty",
      interviewer: "Lägg till remove item.",
      goal: "Ta bort item från cart.",
      getWhatToSay() {
        return "Okej, remove filtrerar bort raden men lämnar resten av carten kvar.";
      },
      code: `// cart.component.ts
// Här tar jag bort rätt item från carten.
removeItem(itemId) {
  this.cart = this.cart.filter((item) => item.id !== itemId);
}

// cart.component.html
<!-- Här kopplar jag knappen till rätt cart-rad. -->
<button type="button" (click)="removeItem(item.id)">
  Remove
</button>

`,
    },
    {
      id: "table",
      label: "Tabell",
      colorClass: "feature-sort",
      interviewer: "Visa carten som en tabell med sortering.",
      goal: "Sortera tabellraderna.",
      getWhatToSay() {
        return "Okej, tabellen kan läsa från en sorterad kopia av cart.";
      },
      code: `// cart.component.ts
// Här sorterar jag en kopia av carten.
get sortedCart() {
  return [...this.cart].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

// cart.component.html
<!-- Här läser tabellen från den sorterade carten. -->
<article *ngFor="let item of sortedCart; trackBy: trackById">
  {{ item.name }}
</article>

`,
    },
  ],
});

export const angularUtilityFunctionsChallenge = createSnippetChallenge({
  id: "angular-utility-functions",
  title: "Angular utility functions",
  estimatedTime: "25 min",
  interviewPrompt:
    "Bygg en Angular-komponent som använder rena utility-funktioner för data.",
  currentGoal: "Visa data som först formas av en hjälpfunktion.",
  baseWhatToSay:
    "Okej, jag håller hjälpfunktionen separat från komponentens state och använder den när värdena ska visas.",
  autoLineComments: false,
  baseCode: `// utility-example.component.ts
// Här håller jag hjälplogiken som en ren funktion.
function doubleNumbers(numbers: number[]) {
  return numbers.map((number) => number * 2);
}

export class UtilityExampleComponent {
  numbers = [1, 2, 3];

  // Här räknar jag fram värdena som templaten ska visa.
  get doubledNumbers() {
    return doubleNumbers(this.numbers);
  }
}

// utility-example.component.html
<!-- Här renderar jag värdena från gettern. -->
<section>
  <p *ngFor="let number of doubledNumbers">
    {{ number }}
  </p>
</section>

`,
  baseFollowUpQuestions: [
    {
      question: "Varför är hjälpfunktionen utanför klassen?",
      answer:
        "Den behöver inte läsa Angular-state, så den blir enklare att testa och återanvända.",
    },
  ],
  features: [
    {
      id: "custom-map",
      label: "Egen mappning",
      colorClass: "feature-search",
      interviewer: "Skriv en egen map-funktion och använd den i gettern.",
      goal: "Visa callback-logik i Angular-koden.",
      getWhatToSay() {
        return "Okej, jag bygger helpern som en ren funktion och låter komponenten läsa resultatet via en getter.";
      },
      code: `// utility-example.component.ts
function customMap<T, R>(
  array: T[],
  callback: (item: T, index: number) => R
) {
  const result: R[] = [];

  for (let index = 0; index < array.length; index += 1) {
    result.push(callback(array[index], index));
  }

  return result;
}

get doubledNumbers() {
  return customMap(this.numbers, (number) => number * 2);
}

`,
    },
    {
      id: "debounce",
      label: "Debounce",
      colorClass: "feature-category",
      interviewer: "Lägg till en debounce-funktion för sökning.",
      goal: "Fördröja sökmetoden i komponenten.",
      getWhatToSay() {
        return "Okej, debounce sparar timer-id och väntar tills användaren slutat skriva.";
      },
      code: `// utility-example.component.ts
function debounce(callback: (...args: string[]) => void, delay: number) {
  let timeoutId: ReturnType<typeof setTimeout>;

  return (...args: string[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
}

search = debounce((query: string) => {
  console.log(query);
}, 300);

`,
    },
    {
      id: "flatten",
      label: "Flatten",
      colorClass: "feature-sort",
      interviewer: "Lägg till en funktion som plattar till nästlade arrayer.",
      goal: "Hantera rekursion i TypeScript.",
      getWhatToSay() {
        return "Okej, jag låter funktionen anropa sig själv när den hittar en array.";
      },
      code: `// utility-example.component.ts
function flattenArray(items: unknown[]): unknown[] {
  const result: unknown[] = [];

  items.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
      return;
    }

    result.push(item);
  });

  return result;
}

flatNumbers = flattenArray([1, [2, [3]], 4]);

`,
    },
  ],
});

export const angularCounterChallenge = createSnippetChallenge({
  id: "angular-counter",
  title: "Angular Counter",
  estimatedTime: "15 min",
  interviewPrompt: "Bygg en Angular-counter som kan öka värdet.",
  currentGoal: "Visa ett värde och uppdatera det vid klick.",
  baseWhatToSay:
    "Okej, jag sparar count i komponenten och uppdaterar det från templaten.",
  autoLineComments: false,
  baseCode: `// counter.component.ts
export class CounterComponent {
  count = 0;

  increase() {
    this.count += 1;
  }
}

// counter.component.html
<section>
  <p>Count: {{ count }}</p>
  <button (click)="increase()">Increase</button>
</section>

`,
  features: [
    {
      id: "decrease",
      label: "Minska",
      colorClass: "feature-category",
      interviewer: "Lägg till en knapp som minskar värdet.",
      goal: "Uppdatera count åt båda håll.",
      getWhatToSay() {
        return "Okej, decrease ändrar samma count-värde i komponenten.";
      },
      code: `// counter.component.ts
decrease() {
  this.count -= 1;
}

// counter.component.html
<button (click)="decrease()">Decrease</button>

`,
    },
    {
      id: "reset",
      label: "Reset",
      colorClass: "feature-empty",
      interviewer: "Lägg till reset.",
      goal: "Sätta count till noll.",
      getWhatToSay() {
        return "Okej, reset sätter komponentens count tillbaka till startvärdet.";
      },
      code: `// counter.component.ts
reset() {
  this.count = 0;
}

// counter.component.html
<button (click)="reset()">Reset</button>

`,
    },
  ],
});

angularCounterChallenge.getCodeSections = function getAngularCounterSections(
  selected,
) {
  const hasDecrease = selected.includes("decrease");
  const hasReset = selected.includes("reset");

  return [
    {
      id: "component-base",
      code: `// counter.component.ts
export class CounterComponent {
  count = 0;

  increase() {
    this.count += 1;
  }
`,
    },
    ...(hasDecrease
      ? [
          {
            id: "decrease-method",
            feature: "feature-category",
            code: `
  decrease() {
    this.count -= 1;
  }

`,
          },
        ]
      : []),
    ...(hasReset
      ? [
          {
            id: "reset-method",
            feature: "feature-empty",
            code: `
  reset() {
    this.count = 0;
  }

`,
          },
        ]
      : []),
    {
      id: "component-end",
      code: `}

`,
    },
    {
      id: "template-base",
      code: `// counter.component.html
<section>
  <p>Count: {{ count }}</p>
  <button (click)="increase()">Increase</button>
`,
    },
    ...(hasDecrease
      ? [
          {
            id: "decrease-button",
            feature: "feature-category",
            code: `  <button (click)="decrease()">Decrease</button>

`,
          },
        ]
      : []),
    ...(hasReset
      ? [
          {
            id: "reset-button",
            feature: "feature-empty",
            code: `  <button (click)="reset()">Reset</button>

`,
          },
        ]
      : []),
    {
      id: "template-end",
      code: `</section>

`,
    },
  ];
};

export const angularFormValidationChallenge = createSnippetChallenge({
  id: "angular-form-validation",
  title: "Angular Form validation",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg ett Angular-formulär med validering.",
  currentGoal: "Validera required och email.",
  baseWhatToSay:
    "Okej, jag använder FormGroup och Validators så reglerna ligger nära formulärets state.",
  autoLineComments: false,
  baseCode: `// signup-form.component.ts
import { FormControl, FormGroup, Validators } from "@angular/forms";

export class SignupFormComponent {
  form = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
  });
}

// signup-form.component.html
<form [formGroup]="form">
  <input formControlName="email" placeholder="Email" />
  <p *ngIf="form.controls.email.invalid">
    Email is required.
  </p>
  <button [disabled]="form.invalid">Submit</button>
</form>

`,
  features: [
    {
      id: "password",
      label: "Password",
      colorClass: "feature-category",
      interviewer: "Lägg till lösenordsvalidering.",
      goal: "Kräva minst åtta tecken.",
      getWhatToSay() {
        return "Okej, lösenordet blir en egen FormControl med minLength.";
      },
      code: `// signup-form.component.ts
password: new FormControl("", [
  Validators.required,
  Validators.minLength(8),
]),

// signup-form.component.html
<input formControlName="password" type="password" />

`,
    },
  ],
});

export const angularUiComponentsChallenge = createSnippetChallenge({
  id: "angular-ui-components",
  title: "Angular UI components",
  estimatedTime: "30 min",
  interviewPrompt: "Bygg en enkel Angular-modal.",
  currentGoal: "Öppna och stäng en modal med component state.",
  baseWhatToSay:
    "Okej, jag sparar om modalen är öppen och visar den med *ngIf.",
  autoLineComments: false,
  baseCode: `// modal.component.ts
export class ModalComponent {
  isOpen = false;
}

// modal.component.html
<button (click)="isOpen = true">Open modal</button>

<section *ngIf="isOpen" role="dialog">
  <h2>Modal</h2>
  <button (click)="isOpen = false">Close</button>
</section>

`,
  features: [
    {
      id: "tabs",
      label: "Tabs",
      colorClass: "feature-sort",
      interviewer: "Bygg tabs med aktiv flik.",
      goal: "Byta innehåll med component state.",
      getWhatToSay() {
        return "Okej, activeTab styr vilket block templaten visar.";
      },
      code: `// tabs.component.ts
activeTab = "details";

// tabs.component.html
<button (click)="activeTab = 'details'">Details</button>
<button (click)="activeTab = 'reviews'">Reviews</button>
<p *ngIf="activeTab === 'details'">Details content</p>
<p *ngIf="activeTab === 'reviews'">Reviews content</p>

`,
    },
    {
      id: "accordion",
      label: "Accordion",
      colorClass: "feature-search",
      interviewer: "Bygg en accordion där en rad kan öppnas.",
      goal: "Visa svar för aktiv fråga.",
      getWhatToSay() {
        return "Okej, activeId håller reda på vilken rad som är öppen.";
      },
      code: `// accordion.component.ts
activeId: number | null = null;

// accordion.component.html
<article *ngFor="let item of faqs; trackBy: trackById">
  <button (click)="activeId = activeId === item.id ? null : item.id">
    {{ item.question }}
  </button>
  <p *ngIf="activeId === item.id">{{ item.answer }}</p>
</article>

`,
    },
  ],
});

export const angularAutocompleteChallenge = createSnippetChallenge({
  id: "angular-autocomplete",
  title: "Angular Autocomplete",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg autocomplete i Angular.",
  currentGoal: "Filtrera förslag från ett inputfält.",
  baseWhatToSay:
    "Okej, jag sparar search i komponenten och använder en getter för matchande förslag.",
  autoLineComments: false,
  baseCode: `// autocomplete.component.ts
export class AutocompleteComponent {
  search = "";
  suggestions = ["React", "Vue", "Angular", "JavaScript"];

  get visibleSuggestions() {
    return this.suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}

// autocomplete.component.html
<input [(ngModel)]="search" placeholder="Search" />
<ul>
  <li *ngFor="let suggestion of visibleSuggestions">
    {{ suggestion }}
  </li>
</ul>

`,
  features: [
    {
      id: "select",
      label: "Välj",
      colorClass: "feature-search",
      interviewer: "Låt användaren klicka på ett förslag.",
      goal: "Sätta inputens värde från valt förslag.",
      getWhatToSay() {
        return "Okej, metoden sätter search till valt förslag.";
      },
      code: `// autocomplete.component.ts
selectSuggestion(suggestion: string) {
  this.search = suggestion;
}

// autocomplete.component.html
<li
  *ngFor="let suggestion of visibleSuggestions"
  (click)="selectSuggestion(suggestion)"
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
        return "Okej, *ngIf visar tomt läge när listan saknar träffar.";
      },
      code: `// autocomplete.component.html
<p *ngIf="visibleSuggestions.length === 0">No suggestions found.</p>

`,
    },
  ],
});

export const angularImageGalleryChallenge = createSnippetChallenge({
  id: "angular-image-gallery",
  title: "Angular Image gallery",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg ett bildgalleri i Angular.",
  currentGoal: "Visa aktiv bild och byt till nästa.",
  baseWhatToSay:
    "Okej, activeIndex styr vilken bild som visas i templaten.",
  autoLineComments: false,
  baseCode: `// image-gallery.component.ts
export class ImageGalleryComponent {
  activeIndex = 0;
  images = ["one.jpg", "two.jpg", "three.jpg"];

  get activeImage() {
    return this.images[this.activeIndex];
  }
}

// image-gallery.component.html
<img [src]="activeImage" alt="" />
<button (click)="activeIndex = activeIndex + 1">Next</button>

`,
  features: [
    {
      id: "loop",
      label: "Loop",
      colorClass: "feature-sort",
      interviewer: "Loopa tillbaka till första bilden efter sista.",
      goal: "Hålla index inom arrayen.",
      getWhatToSay() {
        return "Okej, modulo gör att indexet aldrig hamnar utanför listan.";
      },
      code: `// image-gallery.component.ts
showNext() {
  this.activeIndex = (this.activeIndex + 1) % this.images.length;
}

// image-gallery.component.html
<button (click)="showNext()">Next</button>

`,
    },
    {
      id: "thumbs",
      label: "Thumbnails",
      colorClass: "feature-category",
      interviewer: "Visa thumbnails som väljer aktiv bild.",
      goal: "Hoppa direkt till vald bild.",
      getWhatToSay() {
        return "Okej, varje thumbnail sätter activeIndex till sitt index.";
      },
      code: `// image-gallery.component.html
<button
  *ngFor="let image of images; let index = index"
  (click)="activeIndex = index"
>
  {{ index + 1 }}
</button>

`,
    },
  ],
});

