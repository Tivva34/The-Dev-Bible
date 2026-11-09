import { createSnippetChallenge } from "../helpers/snippetChallengeBuilder.js";



export const angularServiceStateChallenge = createSnippetChallenge({
  id: "angular-service-state",
  title: "Angular service state",
  estimatedTime: "30 min",
  interviewPrompt: "Bygg en Angular service som delar cart-state.",
  currentGoal: "Lägg state och actions i en service.",
  baseWhatToSay:
    "Okej, jag låter servicen äga cart-listan så komponenten kan använda samma state på flera ställen.",
  autoLineComments: false,
  baseCode: `// cart.service.ts
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class CartService {
  items = [];

  addItem(product) {
    this.items = [...this.items, product];
  }
}

// cart.component.ts
export class CartComponent {
  constructor(public cartService: CartService) {}
}

// cart.component.html
<button (click)="cartService.addItem(product)">Add</button>
<p>Items: {{ cartService.items.length }}</p>

`,
  features: [
    {
      id: "remove",
      label: "Remove",
      colorClass: "feature-reset",
      interviewer: "Lägg till remove i servicen.",
      goal: "Ta bort item från delat state.",
      getWhatToSay() {
        return "Okej, remove hör hemma bredvid add eftersom båda ändrar cart-state.";
      },
      code: `removeItem(productId) {
  this.items = this.items.filter((item) => item.id !== productId);
}

<button (click)="cartService.removeItem(item.id)">Remove</button>

`,
    },
    {
      id: "total",
      label: "Total",
      colorClass: "feature-sort",
      interviewer: "Visa totalpris från servicen.",
      goal: "Räkna derived state.",
      getWhatToSay() {
        return "Okej, totalen kan vara en getter eftersom den räknas från items.";
      },
      code: `get total() {
  return this.items.reduce((sum, item) => sum + item.price, 0);
}

<strong>Total: {{ cartService.total }}</strong>

`,
    },
    {
      id: "observable",
      label: "Observable",
      colorClass: "feature-search",
      interviewer: "Gör cart-state reaktivt med BehaviorSubject.",
      goal: "Exponera state som observable.",
      getWhatToSay() {
        return "Okej, BehaviorSubject passar när komponenter ska kunna prenumerera på senaste cart-värdet.";
      },
      code: `private itemsSubject = new BehaviorSubject([]);
items$ = this.itemsSubject.asObservable();

addItem(product) {
  this.itemsSubject.next([...this.itemsSubject.value, product]);
}

`,
    },
  ],
});

export const angularPipeChallenge = createSnippetChallenge({
  id: "angular-pipe",
  title: "Angular custom pipe",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg en custom pipe som formaterar pris.",
  currentGoal: "Visa ett nummer som pris i templaten.",
  baseWhatToSay:
    "Okej, en pipe passar när samma presentation ska återanvändas i flera templates.",
  autoLineComments: false,
  baseCode: `// price.pipe.ts
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "price" })
export class PricePipe implements PipeTransform {
  transform(value: number) {
    return "$" + value.toFixed(2);
  }
}

// product.component.html
<p>{{ product.price | price }}</p>

`,
  features: [
    {
      id: "currency",
      label: "Currency",
      colorClass: "feature-category",
      interviewer: "Låt pipen ta emot valuta.",
      goal: "Göra pipen mer flexibel.",
      getWhatToSay() {
        return "Okej, ett pipe-argument passar när formatet ska kunna styras från templaten.";
      },
      code: `transform(value: number, currency = "$") {
  return currency + value.toFixed(2);
}

<p>{{ product.price | price:"€" }}</p>

`,
    },
    {
      id: "fallback",
      label: "Fallback",
      colorClass: "feature-empty",
      interviewer: "Hantera null eller undefined.",
      goal: "Undvika fel i templaten.",
      getWhatToSay() {
        return "Okej, pipen ska kunna visa ett fallback-värde om priset saknas.";
      },
      code: `if (value == null) {
  return "No price";
}

`,
    },
    {
      id: "locale",
      label: "Locale",
      colorClass: "feature-sort",
      interviewer: "Använd Intl.NumberFormat.",
      goal: "Formatera pris efter locale.",
      getWhatToSay() {
        return "Okej, Intl.NumberFormat är bättre än manuell string-formattering när locale spelar roll.";
      },
      code: `return new Intl.NumberFormat("sv-SE", {
  style: "currency",
  currency: "SEK",
}).format(value);

`,
    },
  ],
});

export const angularDirectiveChallenge = createSnippetChallenge({
  id: "angular-directive",
  title: "Angular directive",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg en directive som highlightar ett element.",
  currentGoal: "Sätta bakgrundsfärg på host-elementet.",
  baseWhatToSay:
    "Okej, en directive passar när DOM-beteende ska kunna återanvändas på flera element.",
  autoLineComments: false,
  baseCode: `// highlight.directive.ts
import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = "yellow";
  }
}

// app.component.html
<p appHighlight>Important text</p>

`,
  features: [
    {
      id: "input",
      label: "Input färg",
      colorClass: "feature-category",
      interviewer: "Låt användaren skicka in färgen.",
      goal: "Styra directiven från templaten.",
      getWhatToSay() {
        return "Okej, @Input gör att samma directive kan användas med olika färger.";
      },
      code: `@Input("appHighlight") color = "yellow";

ngOnInit() {
  this.elementRef.nativeElement.style.backgroundColor = this.color;
}

<p appHighlight="lightblue">Important text</p>

`,
    },
    {
      id: "hover",
      label: "Hover",
      colorClass: "feature-search",
      interviewer: "Highlighta bara vid hover.",
      goal: "Reagera på mouseenter och mouseleave.",
      getWhatToSay() {
        return "Okej, HostListener passar när directiven ska reagera på events från elementet.";
      },
      code: `@HostListener("mouseenter")
onMouseEnter() {
  this.setColor("yellow");
}

@HostListener("mouseleave")
onMouseLeave() {
  this.setColor("");
}

`,
    },
    {
      id: "class",
      label: "CSS-klass",
      colorClass: "feature-sort",
      interviewer: "Byt till att toggla en klass istället för inline style.",
      goal: "Separera beteende och styling.",
      getWhatToSay() {
        return "Okej, Renderer2 kan lägga till och ta bort klass utan att hårdkoda style i directiven.";
      },
      code: `this.renderer.addClass(this.elementRef.nativeElement, "highlighted");
this.renderer.removeClass(this.elementRef.nativeElement, "highlighted");

`,
    },
  ],
});

export const angularGuardChallenge = createSnippetChallenge({
  id: "angular-route-guard",
  title: "Angular route guard",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg en enkel route guard för inloggat läge.",
  currentGoal: "Tillåt navigation bara när user finns.",
  baseWhatToSay:
    "Okej, en guard passar när route-access ska avgöras innan komponenten visas.",
  autoLineComments: false,
  baseCode: `// auth.guard.ts
export function authGuard() {
  const isLoggedIn = Boolean(localStorage.getItem("user"));
  return isLoggedIn;
}

// app.routes.ts
{
  path: "dashboard",
  canActivate: [authGuard],
}

`,
  features: [
    {
      id: "redirect",
      label: "Redirect",
      colorClass: "feature-reset",
      interviewer: "Skicka användaren till login om den inte är inloggad.",
      goal: "Returnera redirect istället för false.",
      getWhatToSay() {
        return "Okej, guard ska inte bara neka, den kan också visa vart användaren ska gå istället.";
      },
      code: `if (!isLoggedIn) {
  return router.parseUrl("/login");
}

return true;

`,
    },
    {
      id: "role",
      label: "Roll",
      colorClass: "feature-category",
      interviewer: "Tillåt bara admin.",
      goal: "Kontrollera både login och roll.",
      getWhatToSay() {
        return "Okej, då läser jag user och kontrollerar rollen innan routen öppnas.";
      },
      code: `const user = JSON.parse(localStorage.getItem("user") || "null");
return user?.role === "admin";

`,
    },
    {
      id: "service",
      label: "AuthService",
      colorClass: "feature-search",
      interviewer: "Flytta auth-logiken till en service.",
      goal: "Undvika localStorage direkt i guarden.",
      getWhatToSay() {
        return "Okej, guarden blir lättare att testa om den frågar en AuthService istället.";
      },
      code: `const authService = inject(AuthService);
return authService.isLoggedIn();

`,
    },
  ],
});

