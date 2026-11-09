// Comprehensive translation map for challenge interview prompts, goals, thoughts, and feature labels.
// Preserves 100% of Swedish baseline texts while offering idiomatic English for en mode.

export const challengeInterviewTranslations = {
  "angular-autocomplete": {
    "interviewPrompt": {
      "sv": "Bygg autocomplete i Angular.",
      "en": "Build autocomplete i Angular."
    },
    "currentGoal": {
      "sv": "Filtrera förslag från ett inputfält.",
      "en": "Filter suggestions from an input field."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar search i komponenten och använder en getter för matchande förslag.",
      "en": "Okay, I'll store the search query in the component and use a getter for matching suggestions."
    },
    "features": [
      {
        "id": "select",
        "label": {
          "sv": "Välj",
          "en": "Select"
        },
        "interviewer": {
          "sv": "Låt användaren klicka på ett förslag.",
          "en": "Allow the user to click a suggestion."
        },
        "goal": {
          "sv": "Sätta inputens värde från valt förslag.",
          "en": "Set the input value from the selected suggestion."
        },
        "whatToSay": {
          "sv": "Okej, metoden sätter search till valt förslag.",
          "en": "Okay, metoden sets search to valt suggestions."
        }
      },
      {
        "id": "empty",
        "label": {
          "sv": "Tom lista",
          "en": "Empty list"
        },
        "interviewer": {
          "sv": "Visa text när inga förslag matchar.",
          "en": "Display a message when no suggestions match."
        },
        "goal": {
          "sv": "Hantera tomt resultat.",
          "en": "Handle empty search results."
        },
        "whatToSay": {
          "sv": "Okej, *ngIf visar tomt läge när listan saknar träffar.",
          "en": "Okay, *ngIf displays the empty state when the list has no matches."
        }
      }
    ]
  },
  "angular-component": {
    "interviewPrompt": {
      "sv": "Bygg en Angular-komponent som visar en lista med produkter.",
      "en": "Build an Angular component that renders a list of products."
    },
    "currentGoal": {
      "sv": "Rendera produkter med Angular template-syntax.",
      "en": "Render products using Angular template syntax."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med en products-array och renderar varje produkt med *ngFor.",
      "en": "Okay, I'll start with a products array and render each product using *ngFor."
    },
    "features": [
      {
        "id": "search",
        "label": {
          "sv": "Sök",
          "en": "Search"
        },
        "interviewer": {
          "sv": "Lägg till sök i Angular-komponenten.",
          "en": "Add search to the Angular component."
        },
        "goal": {
          "sv": "Filtrera produkter från input.",
          "en": "Filtrera products from input."
        },
        "whatToSay": {
          "sv": "Okej, jag sparar söktexten och använder en getter för listan som ska visas.",
          "en": "Okay, I'll store the search query and use a getter for the list to be displayed."
        }
      },
      {
        "id": "empty",
        "label": {
          "sv": "Tom lista",
          "en": "Empty list"
        },
        "interviewer": {
          "sv": "Visa ett meddelande när sökningen inte matchar något.",
          "en": "Display a message when the search yields no results."
        },
        "goal": {
          "sv": "Hantera tomt resultat i Angular.",
          "en": "Handle empty results in Angular."
        },
        "whatToSay": {
          "sv": "Okej, jag använder *ngIf för att visa tomt läge när listan saknar träffar.",
          "en": "Okay, I use *ngIf to show an empty state when the list has no matches."
        }
      }
    ]
  },
  "angular-counter": {
    "interviewPrompt": {
      "sv": "Bygg en Angular-counter som kan öka värdet.",
      "en": "Build a Angular-counter that can increment the count."
    },
    "currentGoal": {
      "sv": "Visa ett värde och uppdatera det vid klick.",
      "en": "Display a value and update it on click."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar count i komponenten och uppdaterar det från templaten.",
      "en": "Okay, I'll store count in the component and update it from the template."
    },
    "features": [
      {
        "id": "decrease",
        "label": {
          "sv": "Minska",
          "en": "Decrease"
        },
        "interviewer": {
          "sv": "Lägg till en knapp som minskar värdet.",
          "en": "Add a button that decreases the value."
        },
        "goal": {
          "sv": "Uppdatera count åt båda håll.",
          "en": "Update count in both directions."
        },
        "whatToSay": {
          "sv": "Okej, decrease ändrar samma count-värde i komponenten.",
          "en": "Okay, decrease modifies the same count property in the component."
        }
      },
      {
        "id": "reset",
        "label": {
          "sv": "Reset",
          "en": "Reset"
        },
        "interviewer": {
          "sv": "Lägg till reset.",
          "en": "Add reset."
        },
        "goal": {
          "sv": "Sätta count till noll.",
          "en": "Reset count to zero."
        },
        "whatToSay": {
          "sv": "Okej, reset sätter komponentens count tillbaka till startvärdet.",
          "en": "Okay, reset restores the component's count to its initial value."
        }
      }
    ]
  },
  "angular-directive": {
    "interviewPrompt": {
      "sv": "Bygg en directive som highlightar ett element.",
      "en": "Build a directive that highlightar a element."
    },
    "currentGoal": {
      "sv": "Sätta bakgrundsfärg på host-elementet.",
      "en": "Set background color on the host element."
    },
    "baseWhatToSay": {
      "sv": "Okej, en directive passar när DOM-beteende ska kunna återanvändas på flera element.",
      "en": "Okay, a custom directive is ideal when reusable DOM behavior applies across multiple elements."
    },
    "features": [
      {
        "id": "input",
        "label": {
          "sv": "Input färg",
          "en": "Input color"
        },
        "interviewer": {
          "sv": "Låt användaren skicka in färgen.",
          "en": "Allow the user to pass in the color."
        },
        "goal": {
          "sv": "Styra directiven från templaten.",
          "en": "Control the directive dynamically from the template."
        },
        "whatToSay": {
          "sv": "Okej, @Input gör att samma directive kan användas med olika färger.",
          "en": "Okay, @Input allows the same directive to be configured with different colors."
        }
      },
      {
        "id": "hover",
        "label": {
          "sv": "Hover",
          "en": "Hover"
        },
        "interviewer": {
          "sv": "Highlighta bara vid hover.",
          "en": "Highlight only on hover."
        },
        "goal": {
          "sv": "Reagera på mouseenter och mouseleave.",
          "en": "React to mouseenter and mouseleave."
        },
        "whatToSay": {
          "sv": "Okej, HostListener passar när directiven ska reagera på events från elementet.",
          "en": "Okay, HostListener is ideal when the directive needs to react to element events."
        }
      },
      {
        "id": "class",
        "label": {
          "sv": "CSS-klass",
          "en": "CSS class"
        },
        "interviewer": {
          "sv": "Byt till att toggla en klass istället för inline style.",
          "en": "Switch to toggling a CSS class instead of inline styles."
        },
        "goal": {
          "sv": "Separera beteende och styling.",
          "en": "Separera beteende and styling."
        },
        "whatToSay": {
          "sv": "Okej, Renderer2 kan lägga till och ta bort klass utan att hårdkoda style i directiven.",
          "en": "Okay, Renderer2 can add and remove CSS classes without hardcoding inline styles in the directive."
        }
      }
    ]
  },
  "angular-form-validation": {
    "interviewPrompt": {
      "sv": "Bygg ett Angular-formulär med validering.",
      "en": "Build an Angular form with validation."
    },
    "currentGoal": {
      "sv": "Validera required och email.",
      "en": "Validera required and email."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag använder FormGroup och Validators så reglerna ligger nära formulärets state.",
      "en": "Okay, I'll use FormGroup and Validators so validation rules live close to form state."
    },
    "features": [
      {
        "id": "password",
        "label": {
          "sv": "Password",
          "en": "Password"
        },
        "interviewer": {
          "sv": "Lägg till lösenordsvalidering.",
          "en": "Add password validation."
        },
        "goal": {
          "sv": "Kräva minst åtta tecken.",
          "en": "Require at least eight characters."
        },
        "whatToSay": {
          "sv": "Okej, lösenordet blir en egen FormControl med minLength.",
          "en": "Okay, password becomes a dedicated FormControl with minLength."
        }
      }
    ]
  },
  "angular-route-guard": {
    "interviewPrompt": {
      "sv": "Bygg en enkel route guard för inloggat läge.",
      "en": "Build a route guard protecting authenticated routes."
    },
    "currentGoal": {
      "sv": "Tillåt navigation bara när user finns.",
      "en": "Allow navigation only when an authenticated user exists."
    },
    "baseWhatToSay": {
      "sv": "Okej, en guard passar när route-access ska avgöras innan komponenten visas.",
      "en": "Okay, a guard is ideal when route access must be determined before component render."
    },
    "features": [
      {
        "id": "redirect",
        "label": {
          "sv": "Redirect",
          "en": "Redirect"
        },
        "interviewer": {
          "sv": "Skicka användaren till login om den inte är inloggad.",
          "en": "Redirect unauthenticated users to login."
        },
        "goal": {
          "sv": "Returnera redirect istället för false.",
          "en": "Return a redirect UrlTree instead of false."
        },
        "whatToSay": {
          "sv": "Okej, guard ska inte bara neka, den kan också visa vart användaren ska gå istället.",
          "en": "Okay, a guard can redirect users to login rather than simply denying navigation."
        }
      },
      {
        "id": "role",
        "label": {
          "sv": "Roll",
          "en": "Role"
        },
        "interviewer": {
          "sv": "Tillåt bara admin.",
          "en": "Allow admin only."
        },
        "goal": {
          "sv": "Kontrollera både login och roll.",
          "en": "Verify both authentication and user role."
        },
        "whatToSay": {
          "sv": "Okej, då läser jag user och kontrollerar rollen innan routen öppnas.",
          "en": "Okay, I inspect the user and verify their role before granting route access."
        }
      },
      {
        "id": "service",
        "label": {
          "sv": "AuthService",
          "en": "AuthService"
        },
        "interviewer": {
          "sv": "Flytta auth-logiken till en service.",
          "en": "Move authentication logic into a service."
        },
        "goal": {
          "sv": "Undvika localStorage direkt i guarden.",
          "en": "Undvika localStorage direkt i guarden."
        },
        "whatToSay": {
          "sv": "Okej, guarden blir lättare att testa om den frågar en AuthService istället.",
          "en": "Okay, delegating permissions to an AuthService makes the route guard easier to test."
        }
      }
    ]
  },
  "angular-http-forms": {
    "interviewPrompt": {
      "sv": "Bygg en Angular-komponent som hämtar användare från ett API.",
      "en": "Build an Angular component that fetches users from an API."
    },
    "currentGoal": {
      "sv": "Använd HttpClient och visa loading/error.",
      "en": "Use HttpClient and display loading/error states."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag hämtar datan i ngOnInit och sparar loading och error i komponenten.",
      "en": "Okay, I'll fetch data in ngOnInit and store loading and error states in the component."
    },
    "features": [
      {
        "id": "reactive-form",
        "label": {
          "sv": "Reactive form",
          "en": "Reactive form"
        },
        "interviewer": {
          "sv": "Lägg till reactive form med email och password.",
          "en": "Add reactive form with email and password."
        },
        "goal": {
          "sv": "Använd FormGroup och validators.",
          "en": "Use FormGroup and validators."
        },
        "whatToSay": {
          "sv": "Okej, reactive forms passar när formuläret ska valideras tydligt.",
          "en": "Okay, reactive forms are ideal when form validation needs to be explicit."
        }
      },
      {
        "id": "search",
        "label": {
          "sv": "Sök",
          "en": "Search"
        },
        "interviewer": {
          "sv": "Lägg till sök i användarlistan.",
          "en": "Add search to the user list."
        },
        "goal": {
          "sv": "Filtrera användare från input.",
          "en": "Filtrera users from input."
        },
        "whatToSay": {
          "sv": "Okej, search blir ett komponentvärde som gettern använder.",
          "en": "Okay, search query is stored on the component and consumed by the getter."
        }
      }
    ]
  },
  "angular-image-gallery": {
    "interviewPrompt": {
      "sv": "Bygg ett bildgalleri i Angular.",
      "en": "Build a bildgalleri i Angular."
    },
    "currentGoal": {
      "sv": "Visa aktiv bild och byt till nästa.",
      "en": "Display active image and switch to next."
    },
    "baseWhatToSay": {
      "sv": "Okej, activeIndex styr vilken bild som visas i templaten.",
      "en": "Okay, activeIndex determines which image is rendered in the template."
    },
    "features": [
      {
        "id": "loop",
        "label": {
          "sv": "Loop",
          "en": "Loop"
        },
        "interviewer": {
          "sv": "Loopa tillbaka till första bilden efter sista.",
          "en": "Loop back to the first image after the last."
        },
        "goal": {
          "sv": "Hålla index inom arrayen.",
          "en": "Keep the index within array bounds."
        },
        "whatToSay": {
          "sv": "Okej, modulo gör att indexet aldrig hamnar utanför listan.",
          "en": "Okay, modulo ensures the active index wraps around without going out of bounds."
        }
      },
      {
        "id": "thumbs",
        "label": {
          "sv": "Thumbnails",
          "en": "Thumbnails"
        },
        "interviewer": {
          "sv": "Visa thumbnails som väljer aktiv bild.",
          "en": "Display thumbnails that select the active image."
        },
        "goal": {
          "sv": "Hoppa direkt till vald bild.",
          "en": "Jump directly to the selected image."
        },
        "whatToSay": {
          "sv": "Okej, varje thumbnail sätter activeIndex till sitt index.",
          "en": "Okay, each thumbnail sets activeIndex to its respective index."
        }
      }
    ]
  },
  "angular-pipe": {
    "interviewPrompt": {
      "sv": "Bygg en custom pipe som formaterar pris.",
      "en": "Build a custom pipe that formaterar price."
    },
    "currentGoal": {
      "sv": "Visa ett nummer som pris i templaten.",
      "en": "Display a nummer that price in templaten."
    },
    "baseWhatToSay": {
      "sv": "Okej, en pipe passar när samma presentation ska återanvändas i flera templates.",
      "en": "Okay, a pipe is ideal when data formatting logic is shared across templates."
    },
    "features": [
      {
        "id": "currency",
        "label": {
          "sv": "Currency",
          "en": "Currency"
        },
        "interviewer": {
          "sv": "Låt pipen ta emot valuta.",
          "en": "Allow the pipe to accept currency parameters."
        },
        "goal": {
          "sv": "Göra pipen mer flexibel.",
          "en": "Make the pipe more flexible."
        },
        "whatToSay": {
          "sv": "Okej, ett pipe-argument passar när formatet ska kunna styras från templaten.",
          "en": "Okay, pipe arguments allow formatting parameters to be configured in the template."
        }
      },
      {
        "id": "fallback",
        "label": {
          "sv": "Fallback",
          "en": "Fallback"
        },
        "interviewer": {
          "sv": "Hantera null eller undefined.",
          "en": "Handle null or undefined values gracefully."
        },
        "goal": {
          "sv": "Undvika fel i templaten.",
          "en": "Undvika fel i templaten."
        },
        "whatToSay": {
          "sv": "Okej, pipen ska kunna visa ett fallback-värde om priset saknas.",
          "en": "Okay, the pipe should return a fallback value when the price is missing."
        }
      },
      {
        "id": "locale",
        "label": {
          "sv": "Locale",
          "en": "Locale"
        },
        "interviewer": {
          "sv": "Använd Intl.NumberFormat.",
          "en": "Use Intl.NumberFormat for locale formatting."
        },
        "goal": {
          "sv": "Formatera pris efter locale.",
          "en": "Format price according to locale."
        },
        "whatToSay": {
          "sv": "Okej, Intl.NumberFormat är bättre än manuell string-formattering när locale spelar roll.",
          "en": "Okay, Intl.NumberFormat is preferable to manual string concatenation when locale matters."
        }
      }
    ]
  },
  "angular-service-state": {
    "interviewPrompt": {
      "sv": "Bygg en Angular service som delar cart-state.",
      "en": "Build an Angular service that shares shopping cart state."
    },
    "currentGoal": {
      "sv": "Lägg state och actions i en service.",
      "en": "Extract state and actions into a service."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag låter servicen äga cart-listan så komponenten kan använda samma state på flera ställen.",
      "en": "Okay, I'll have the service own the cart list so components share a single source of truth."
    },
    "features": [
      {
        "id": "remove",
        "label": {
          "sv": "Remove",
          "en": "Remove"
        },
        "interviewer": {
          "sv": "Lägg till remove i servicen.",
          "en": "Add remove i servicen."
        },
        "goal": {
          "sv": "Ta bort item från delat state.",
          "en": "Remove item from shared state."
        },
        "whatToSay": {
          "sv": "Okej, remove hör hemma bredvid add eftersom båda ändrar cart-state.",
          "en": "Okay, remove belongs alongside add since both mutate cart state."
        }
      },
      {
        "id": "total",
        "label": {
          "sv": "Total",
          "en": "Total"
        },
        "interviewer": {
          "sv": "Visa totalpris från servicen.",
          "en": "Display totalpris from servicen."
        },
        "goal": {
          "sv": "Räkna derived state.",
          "en": "Calculate derived state."
        },
        "whatToSay": {
          "sv": "Okej, totalen kan vara en getter eftersom den räknas från items.",
          "en": "Okay, the total can be a getter because it is derived directly from items."
        }
      },
      {
        "id": "observable",
        "label": {
          "sv": "Observable",
          "en": "Observable"
        },
        "interviewer": {
          "sv": "Gör cart-state reaktivt med BehaviorSubject.",
          "en": "Make cart state reactive using BehaviorSubject."
        },
        "goal": {
          "sv": "Exponera state som observable.",
          "en": "Exponera state that observable."
        },
        "whatToSay": {
          "sv": "Okej, BehaviorSubject passar när komponenter ska kunna prenumerera på senaste cart-värdet.",
          "en": "Okay, BehaviorSubject allows components to subscribe reactively to cart state updates."
        }
      }
    ]
  },
  "angular-shopping-table": {
    "interviewPrompt": {
      "sv": "Bygg en Angular-cart som visar produkter och totalpris.",
      "en": "Build an Angular shopping cart displaying products and total price."
    },
    "currentGoal": {
      "sv": "Spara cart och räkna totalpris.",
      "en": "Store cart and compute total price."
    },
    "baseWhatToSay": {
      "sv": "Okej, cart är listan användaren påverkar och totalen räknas från den.",
      "en": "Okay, cart holds items chosen by the user and total price is derived from it."
    },
    "features": [
      {
        "id": "quantity",
        "label": {
          "sv": "Quantity",
          "en": "Quantity"
        },
        "interviewer": {
          "sv": "Låt användaren ändra quantity.",
          "en": "Allow the user to modify item quantity."
        },
        "goal": {
          "sv": "Uppdatera antal på rätt item.",
          "en": "Update quantity on the target item."
        },
        "whatToSay": {
          "sv": "Okej, quantity hör till varje cart-rad och totalen uppdateras automatiskt.",
          "en": "Okay, quantity is tracked per cart line item, keeping totals in sync."
        }
      },
      {
        "id": "remove",
        "label": {
          "sv": "Remove",
          "en": "Remove"
        },
        "interviewer": {
          "sv": "Lägg till remove item.",
          "en": "Add remove item."
        },
        "goal": {
          "sv": "Ta bort item från cart.",
          "en": "Remove item from shopping cart."
        },
        "whatToSay": {
          "sv": "Okej, remove filtrerar bort raden men lämnar resten av carten kvar.",
          "en": "Okay, remove filters out the selected line item while keeping other items intact."
        }
      },
      {
        "id": "table",
        "label": {
          "sv": "Tabell",
          "en": "Table"
        },
        "interviewer": {
          "sv": "Visa carten som en tabell med sortering.",
          "en": "Display carten that a table with sorting."
        },
        "goal": {
          "sv": "Sortera tabellraderna.",
          "en": "Sortera tabellraderna."
        },
        "whatToSay": {
          "sv": "Okej, tabellen kan läsa från en sorterad kopia av cart.",
          "en": "Okay, the table can read from a sorted copy of the cart items."
        }
      }
    ]
  },
  "angular-todo-app": {
    "interviewPrompt": {
      "sv": "Bygg en todo-lista i Angular där användaren kan lägga till uppgifter.",
      "en": "Build a todo-lista i Angular where the user can add tasks."
    },
    "currentGoal": {
      "sv": "Använd component state, ngModel och *ngFor.",
      "en": "Use component state, ngModel, and *ngFor."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar text och todos i komponenten och renderar listan med *ngFor.",
      "en": "Okay, I'll store text and todos in the component and render the list with *ngFor."
    },
    "features": [
      {
        "id": "complete",
        "label": {
          "sv": "Complete",
          "en": "Complete"
        },
        "interviewer": {
          "sv": "Lägg till complete.",
          "en": "Add complete."
        },
        "goal": {
          "sv": "Toggla done på rätt todo.",
          "en": "Toggle done on the target todo."
        },
        "whatToSay": {
          "sv": "Okej, jag ändrar bara den todo som matchar id:t.",
          "en": "Okay, I only toggle the status of the todo item matching the target id."
        }
      },
      {
        "id": "filter",
        "label": {
          "sv": "Filter",
          "en": "Filter"
        },
        "interviewer": {
          "sv": "Lägg till filter för all, active och done.",
          "en": "Add filter for all, active and done."
        },
        "goal": {
          "sv": "Räkna fram synliga todos.",
          "en": "Compute visible todos."
        },
        "whatToSay": {
          "sv": "Okej, en getter passar när synliga todos beror på state.",
          "en": "Okay, a getter is ideal when visible todos depend reactively on state."
        }
      },
      {
        "id": "delete",
        "label": {
          "sv": "Delete",
          "en": "Delete"
        },
        "interviewer": {
          "sv": "Lägg till delete.",
          "en": "Add delete."
        },
        "goal": {
          "sv": "Ta bort rätt todo.",
          "en": "Remove the target todo."
        },
        "whatToSay": {
          "sv": "Okej, jag filtrerar bort den rad som matchar id:t.",
          "en": "Okay, I'll filter out the row matching the target id."
        }
      }
    ]
  },
  "angular-ui-components": {
    "interviewPrompt": {
      "sv": "Bygg en enkel Angular-modal.",
      "en": "Build a straightforward Angular modal dialog."
    },
    "currentGoal": {
      "sv": "Öppna och stäng en modal med component state.",
      "en": "Open and close a modal using component state."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar om modalen är öppen och visar den med *ngIf.",
      "en": "Okay, I track modal visibility in state and render it conditionally with *ngIf."
    },
    "features": [
      {
        "id": "tabs",
        "label": {
          "sv": "Tabs",
          "en": "Tabs"
        },
        "interviewer": {
          "sv": "Bygg tabs med aktiv flik.",
          "en": "Build tabs with an active tab indicator."
        },
        "goal": {
          "sv": "Byta innehåll med component state.",
          "en": "Toggle active content using component state."
        },
        "whatToSay": {
          "sv": "Okej, activeTab styr vilket block templaten visar.",
          "en": "Okay, activeTab determines which block the template renders."
        }
      },
      {
        "id": "accordion",
        "label": {
          "sv": "Accordion",
          "en": "Accordion"
        },
        "interviewer": {
          "sv": "Bygg en accordion där en rad kan öppnas.",
          "en": "Build an accordion where one panel can expand."
        },
        "goal": {
          "sv": "Visa svar för aktiv fråga.",
          "en": "Display the answer for the active question."
        },
        "whatToSay": {
          "sv": "Okej, activeId håller reda på vilken rad som är öppen.",
          "en": "Okay, activeId keeps track of which row is currently expanded."
        }
      }
    ]
  },
  "angular-utility-functions": {
    "interviewPrompt": {
      "sv": "Bygg en Angular-komponent som använder rena utility-funktioner för data.",
      "en": "Build an Angular component consuming pure utility functions for data formatting."
    },
    "currentGoal": {
      "sv": "Visa data som först formas av en hjälpfunktion.",
      "en": "Display data transformed by a helper function."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag håller hjälpfunktionen separat från komponentens state och använder den när värdena ska visas.",
      "en": "Okay, I keep pure helpers decoupled from component state and invoke them for display formatting."
    },
    "features": [
      {
        "id": "custom-map",
        "label": {
          "sv": "Egen mappning",
          "en": "Custom mapping"
        },
        "interviewer": {
          "sv": "Skriv en egen map-funktion och använd den i gettern.",
          "en": "Write a custom map implementation and consume it within the getter."
        },
        "goal": {
          "sv": "Visa callback-logik i Angular-koden.",
          "en": "Display callback-logik i Angular-koden."
        },
        "whatToSay": {
          "sv": "Okej, jag bygger helpern som en ren funktion och låter komponenten läsa resultatet via en getter.",
          "en": "Okay, I'll write the helper as a pure function and let the component read results via a getter."
        }
      },
      {
        "id": "debounce",
        "label": {
          "sv": "Debounce",
          "en": "Debounce"
        },
        "interviewer": {
          "sv": "Lägg till en debounce-funktion för sökning.",
          "en": "Add a debounce utility for search queries."
        },
        "goal": {
          "sv": "Fördröja sökmetoden i komponenten.",
          "en": "Debounce the component search method."
        },
        "whatToSay": {
          "sv": "Okej, debounce sparar timer-id och väntar tills användaren slutat skriva.",
          "en": "Okay, debounce stores timer-id and waits tills the user slutat skriva."
        }
      },
      {
        "id": "flatten",
        "label": {
          "sv": "Flatten",
          "en": "Flatten"
        },
        "interviewer": {
          "sv": "Lägg till en funktion som plattar till nästlade arrayer.",
          "en": "Add a helper that flattens nested arrays."
        },
        "goal": {
          "sv": "Hantera rekursion i TypeScript.",
          "en": "Handle recursion in TypeScript."
        },
        "whatToSay": {
          "sv": "Okej, jag låter funktionen anropa sig själv när den hittar en array.",
          "en": "Okay, the helper recursively calls itself whenever it encounters a nested array."
        }
      }
    ]
  },
  "auth-ui-mock": {
    "interviewPrompt": {
      "sv": "Bygg ett enkelt login/logout-flöde utan riktig backend.",
      "en": "Build a client-side login/logout flow without a backend."
    },
    "currentGoal": {
      "sv": "Växla mellan inloggad och utloggad vy.",
      "en": "Toggle between authenticated and unauthenticated views."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar en user i state och visar olika UI beroende på om user finns.",
      "en": "Okay, I'll track user state and render distinct UI depending on authentication status."
    },
    "features": [
      {
        "id": "form",
        "label": {
          "sv": "Login-form",
          "en": "Login form"
        },
        "interviewer": {
          "sv": "Låt användaren skriva sitt namn innan login.",
          "en": "Allow the user to enter their name before logging in."
        },
        "goal": {
          "sv": "Login med input.",
          "en": "Log in with user input."
        },
        "whatToSay": {
          "sv": "Okej, jag sparar namnet i state och skapar user från inputvärdet när användaren loggar in.",
          "en": "Okay, I store the name in state and create the user object upon login."
        }
      },
      {
        "id": "error",
        "label": {
          "sv": "Felmeddelande",
          "en": "Error message"
        },
        "interviewer": {
          "sv": "Visa fel om användaren försöker logga in utan namn.",
          "en": "Show an error if the user attempts to log in without a username."
        },
        "goal": {
          "sv": "Validera login.",
          "en": "Validera login."
        },
        "whatToSay": {
          "sv": "Okej, då sparar jag ett error och visar det när inputen är tom.",
          "en": "Okay, I track an error state and show feedback when input is empty."
        }
      },
      {
        "id": "persist",
        "label": {
          "sv": "Persist",
          "en": "Persist"
        },
        "interviewer": {
          "sv": "Behåll inloggningen efter refresh.",
          "en": "Preserve the session across page reloads."
        },
        "goal": {
          "sv": "Spara user lokalt.",
          "en": "Save user lokalt."
        },
        "whatToSay": {
          "sv": "Okej, jag läser user från localStorage som startvärde och uppdaterar localStorage vid login/logout.",
          "en": "Okay, I initialize user from localStorage and keep storage synchronized on login/logout."
        }
      },
      {
        "id": "role",
        "label": {
          "sv": "Roll",
          "en": "Role"
        },
        "interviewer": {
          "sv": "Lägg till en enkel role på user och visa admin-innehåll bara för admin.",
          "en": "Add a simple user role and display admin content only for administrators."
        },
        "goal": {
          "sv": "Villkorlig vy baserat på roll.",
          "en": "Conditional view based on user role."
        },
        "whatToSay": {
          "sv": "Okej, jag lägger role på user-objektet och renderar admin-delen bara när rollen matchar.",
          "en": "Okay, I attach role to user and render admin privileges only for matching roles."
        }
      }
    ]
  },
  "autocomplete": {
    "interviewPrompt": {
      "sv": "Bygg ett inputfält som visar förslag medan användaren skriver.",
      "en": "Build an input field that shows autocomplete suggestions as the user types."
    },
    "currentGoal": {
      "sv": "Filtrera förslag baserat på input.",
      "en": "Filter suggestions based on input."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar inputvärdet och filtrerar en lokal lista med förslag.",
      "en": "Okay, I store the input value and filter a local list of suggestions."
    },
    "features": [
      {
        "id": "select",
        "label": {
          "sv": "Välj förslag",
          "en": "Select suggestion"
        },
        "interviewer": {
          "sv": "När användaren klickar på ett förslag ska inputen fyllas.",
          "en": "When the user clicks a suggestion, populate the input."
        },
        "goal": {
          "sv": "Välja suggestion.",
          "en": "Select suggestion."
        },
        "whatToSay": {
          "sv": "Okej, då sätter jag query till det valda värdet när användaren klickar.",
          "en": "Okay, I set the query value to the selected suggestion on click."
        }
      },
      {
        "id": "empty",
        "label": {
          "sv": "Inga träffar",
          "en": "No matches"
        },
        "interviewer": {
          "sv": "Visa ett meddelande om inga förslag matchar.",
          "en": "Display a message when no suggestions match."
        },
        "goal": {
          "sv": "Hantera tomt resultat.",
          "en": "Handle empty results."
        },
        "whatToSay": {
          "sv": "Okej, då kontrollerar jag längden på suggestions när query har ett värde.",
          "en": "Okay, I check suggestion length once a query is typed to render empty feedback."
        }
      },
      {
        "id": "limit",
        "label": {
          "sv": "Begränsa",
          "en": "Limit"
        },
        "interviewer": {
          "sv": "Visa max fem förslag.",
          "en": "Display at most five suggestions."
        },
        "goal": {
          "sv": "Begränsa suggestions.",
          "en": "Limit suggestion count."
        },
        "whatToSay": {
          "sv": "Okej, då använder jag slice på den filtrerade listan innan renderingen.",
          "en": "Okay, I slice the filtered suggestions array prior to rendering."
        }
      },
      {
        "id": "keyboard",
        "label": {
          "sv": "Keyboard",
          "en": "Keyboard"
        },
        "interviewer": {
          "sv": "Låt användaren välja första förslaget med Enter.",
          "en": "Allow the user to select the first suggestion with Enter."
        },
        "goal": {
          "sv": "Stöd enkel tangentbordsinteraktion.",
          "en": "Support accessible keyboard interactions."
        },
        "whatToSay": {
          "sv": "Okej, om användaren trycker Enter och det finns förslag kan jag sätta query till första träffen.",
          "en": "Okay, pressing Enter selects the top suggestion when results are available."
        }
      }
    ]
  },
  "component-basics": {
    "interviewPrompt": {
      "sv": "Bygg en återanvändbar Card-komponent som visar titel och text.",
      "en": "Build a reusable Card component that displays title and text."
    },
    "currentGoal": {
      "sv": "Skapa en komponent och använd den med props.",
      "en": "Create a component and consume it with props."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med en liten Card-komponent som får titel och text via props och renderas flera gånger.",
      "en": "Okay, I'll start with a concise Card component that receives title and text via props and renders multiple times."
    },
    "features": [
      {
        "id": "children",
        "label": {
          "sv": "Children",
          "en": "Children"
        },
        "interviewer": {
          "sv": "Gör så att Card kan ta emot valfritt innehåll med children.",
          "en": "Allow Card to receive arbitrary nested content using children."
        },
        "goal": {
          "sv": "Använd children för mer flexibel composition.",
          "en": "Use children for flexible component composition."
        },
        "whatToSay": {
          "sv": "Okej, children passar när komponenten ska styra ramen men innehållet kan variera.",
          "en": "Okay, children is ideal when the component controls the shell while the content varies."
        }
      },
      {
        "id": "variant",
        "label": {
          "sv": "Variant",
          "en": "Variant"
        },
        "interviewer": {
          "sv": "Lägg till en variant-prop för olika visuella stilar.",
          "en": "Add a variant prop to support different visual styles."
        },
        "goal": {
          "sv": "Styra klassnamn med props.",
          "en": "Control dynamic class names using props."
        },
        "whatToSay": {
          "sv": "Okej, variant är ett bra sätt att låta samma komponent få olika stil utan att ändra strukturen.",
          "en": "Okay, variant is a clean pattern to let the component adopt different styles without altering structure."
        }
      },
      {
        "id": "list",
        "label": {
          "sv": "Lista",
          "en": "List"
        },
        "interviewer": {
          "sv": "Flytta innehållet till en array och rendera Card med map.",
          "en": "Move content into an array and render Card components using map."
        },
        "goal": {
          "sv": "Rendera återanvändbara komponenter från data.",
          "en": "Render reusable components from structured data collections."
        },
        "whatToSay": {
          "sv": "Okej, då separerar jag datan från UI:t och mappar varje item till samma Card-komponent.",
          "en": "Okay, I'll decouple data from the UI and map each item to the shared Card component."
        }
      },
      {
        "id": "onClick",
        "label": {
          "sv": "Callback",
          "en": "Callback"
        },
        "interviewer": {
          "sv": "Låt Card ta emot en onSelect-callback när man klickar.",
          "en": "Enable Card to accept an onSelect callback on click."
        },
        "goal": {
          "sv": "Skicka events från child till parent.",
          "en": "Emit events from child to parent component."
        },
        "whatToSay": {
          "sv": "Okej, parent äger vad som ska hända, och Card anropar callbacken när användaren klickar.",
          "en": "Okay, the parent owns the event handler while Card invokes the callback upon user interaction."
        }
      },
      {
        "id": "styling",
        "label": {
          "sv": "Styling",
          "en": "Styling"
        },
        "interviewer": {
          "sv": "Lägg till enkel styling för Card-komponenten.",
          "en": "Add baseline styling for the Card component."
        },
        "goal": {
          "sv": "Lägg till klassnamn och en egen CSS-fil.",
          "en": "Add class names and an accompanying CSS stylesheet."
        },
        "whatToSay": {
          "sv": "Okej, jag lägger klassnamn i komponenten och flyttar utseendet till en CSS-fil.",
          "en": "Okay, I'll assign class names in the component and organize styling in a CSS stylesheet."
        }
      }
    ]
  },
  "dark-mode-toggle": {
    "interviewPrompt": {
      "sv": "Bygg en knapp som växlar mellan light och dark mode.",
      "en": "Build a toggle button that switches between light and dark mode."
    },
    "currentGoal": {
      "sv": "Toggla tema i komponenten.",
      "en": "Toggla tema i komponenten."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar temat i state och använder det för att sätta klass på wrappern.",
      "en": "Okay, I store the active theme in state and apply a class name to the wrapper."
    },
    "features": [
      {
        "id": "label",
        "label": {
          "sv": "Tydlig etikett",
          "en": "Accessible label"
        },
        "interviewer": {
          "sv": "Knappen ska säga vilket tema den byter till.",
          "en": "The button should display the target theme it switches to."
        },
        "goal": {
          "sv": "Gör knapptexten tydligare.",
          "en": "Make knapptexten tydligare."
        },
        "whatToSay": {
          "sv": "Okej, då räknar jag ut nästa tema och använder det i knapptexten.",
          "en": "Okay, I compute the next theme and display it on the toggle button."
        }
      },
      {
        "id": "persist",
        "label": {
          "sv": "localStorage",
          "en": "localStorage"
        },
        "interviewer": {
          "sv": "Spara temat i localStorage.",
          "en": "Persist the theme in localStorage."
        },
        "goal": {
          "sv": "Behåll tema efter refresh.",
          "en": "Persist theme across browser reloads."
        },
        "whatToSay": {
          "sv": "Okej, jag läser startvärdet från localStorage och skriver tillbaka när temat ändras.",
          "en": "Okay, I read initial theme from localStorage and synchronize updates on change."
        }
      },
      {
        "id": "system",
        "label": {
          "sv": "Systemtema",
          "en": "System theme"
        },
        "interviewer": {
          "sv": "Använd systemets dark mode som default.",
          "en": "Use system dark mode as the default theme."
        },
        "goal": {
          "sv": "Läs prefers-color-scheme.",
          "en": "Inspect prefers-color-scheme media query."
        },
        "whatToSay": {
          "sv": "Okej, om inget finns sparat kan jag läsa prefers-color-scheme och välja starttema därifrån.",
          "en": "Okay, if no stored theme is found, I fall back to prefers-color-scheme."
        }
      }
    ]
  },
  "debounced-search": {
    "interviewPrompt": {
      "sv": "Bygg en söklista där filtreringen väntar en kort stund efter input.",
      "en": "Build a search list where filtering debounces briefly after typing."
    },
    "currentGoal": {
      "sv": "Spara söktext och visa resultat.",
      "en": "Store search query and display results."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med ett vanligt sökfält och en filtrerad lista.",
      "en": "Okay, I start with a standard text input and a filtered item list."
    },
    "features": [
      {
        "id": "debounce",
        "label": {
          "sv": "Debounce",
          "en": "Debounce"
        },
        "interviewer": {
          "sv": "Vänta 300 ms efter att användaren slutat skriva innan sökningen används.",
          "en": "Wait 300 ms after the user stops typing before applying search."
        },
        "goal": {
          "sv": "Debounca söktexten.",
          "en": "Debounce search query."
        },
        "whatToSay": {
          "sv": "Okej, jag sparar ett separat debounced-värde och uppdaterar det med setTimeout i useEffect.",
          "en": "Okay, I'll store a separate debounced value and update it with setTimeout inside useEffect."
        }
      },
      {
        "id": "loading",
        "label": {
          "sv": "Sökstatus",
          "en": "Search status"
        },
        "interviewer": {
          "sv": "Visa en status medan sökningen bearbetas.",
          "en": "Display a status indicator while search is processing."
        },
        "goal": {
          "sv": "Visa sökstatus.",
          "en": "Display search status."
        },
        "whatToSay": {
          "sv": "Okej, då kan jag jämföra search och debouncedSearch och visa en liten status medan de skiljer sig.",
          "en": "Okay, I can compare search and debouncedSearch to display an intermediate status while debouncing."
        }
      },
      {
        "id": "clear",
        "label": {
          "sv": "Rensa",
          "en": "Clear"
        },
        "interviewer": {
          "sv": "Lägg till en knapp som rensar sökfältet.",
          "en": "Add a button to clear the search field."
        },
        "goal": {
          "sv": "Töm sökningen.",
          "en": "Clear search input."
        },
        "whatToSay": {
          "sv": "Okej, då sätter jag search till en tom sträng när användaren klickar.",
          "en": "Okay, clicking reset sets the search query to an empty string."
        }
      },
      {
        "id": "minLength",
        "label": {
          "sv": "Min längd",
          "en": "Min length"
        },
        "interviewer": {
          "sv": "Starta inte sökningen förrän användaren skrivit minst två tecken.",
          "en": "Do not trigger search until user enters at least two characters."
        },
        "goal": {
          "sv": "Undvika för tidig filtrering.",
          "en": "Avoid prematurely filtering on tiny inputs."
        },
        "whatToSay": {
          "sv": "Okej, jag kontrollerar längden innan jag filtrerar och visar en tom lista tills texten är tillräckligt lång.",
          "en": "Okay, I verify input length first and hold off filtering until the query is long enough."
        }
      }
    ]
  },
  "dropdown-menu": {
    "interviewPrompt": {
      "sv": "Bygg en dropdown-meny som kan öppnas och stängas.",
      "en": "Build a dropdown-meny that can be opened and closed."
    },
    "currentGoal": {
      "sv": "Visa en knapp och en meny med alternativ.",
      "en": "Display a button and a meny with alternativ."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med en knapp och en lista med alternativ som visas i menyn.",
      "en": "Okay, I'll start with a button and a list of options displayed inside the menu."
    },
    "features": [
      {
        "id": "toggle",
        "label": {
          "sv": "Öppna/stäng",
          "en": "Open/close"
        },
        "interviewer": {
          "sv": "Gör så att knappen öppnar och stänger menyn.",
          "en": "Make the button toggle the menu open and closed."
        },
        "goal": {
          "sv": "Styra synligheten med state.",
          "en": "Control visibility using reactive state."
        },
        "whatToSay": {
          "sv": "Okej, jag sparar om menyn är öppen och togglar värdet när knappen klickas.",
          "en": "Okay, I track menu open state and toggle it when the button is clicked."
        }
      },
      {
        "id": "select",
        "label": {
          "sv": "Välj item",
          "en": "Select item"
        },
        "interviewer": {
          "sv": "Visa vilket alternativ användaren har valt.",
          "en": "Display which option the user has selected."
        },
        "goal": {
          "sv": "Spara valt alternativ.",
          "en": "Save valt alternativ."
        },
        "whatToSay": {
          "sv": "Okej, jag sparar valt option i state och stänger menyn när användaren väljer.",
          "en": "Okay, I store the selected option in state and close the dropdown upon selection."
        }
      },
      {
        "id": "outside",
        "label": {
          "sv": "Klick utanför",
          "en": "Click outside"
        },
        "interviewer": {
          "sv": "Stäng dropdownen när användaren klickar utanför.",
          "en": "Close the dropdown when clicking outside."
        },
        "goal": {
          "sv": "Hantera klick utanför komponenten.",
          "en": "Handle clicks outside the component."
        },
        "whatToSay": {
          "sv": "Okej, jag använder en ref för menyn och lyssnar på klick i dokumentet.",
          "en": "Okay, I attach a ref to the dropdown container and listen for document clicks."
        }
      },
      {
        "id": "keyboard",
        "label": {
          "sv": "Keyboard",
          "en": "Keyboard"
        },
        "interviewer": {
          "sv": "Låt Escape stänga menyn.",
          "en": "Allow Escape to dismiss the menu."
        },
        "goal": {
          "sv": "Göra dropdownen lättare att använda med tangentbord.",
          "en": "Make the dropdown keyboard-accessible."
        },
        "whatToSay": {
          "sv": "Okej, Escape är ett vanligt sätt att stänga en öppen meny med tangentbordet.",
          "en": "Okay, Escape provides standard keyboard navigation to close active dropdowns."
        }
      }
    ]
  },
  "editable-item": {
    "interviewPrompt": {
      "sv": "Bygg en liten lista där varje item visas med text.",
      "en": "Build a compact list where each item renders text content."
    },
    "currentGoal": {
      "sv": "Rendera items från state.",
      "en": "Rendera items from state."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med items i state och renderar varje rad från listan.",
      "en": "Okay, I'll start with items in state and render each row from the list."
    },
    "features": [
      {
        "id": "edit",
        "label": {
          "sv": "Edit-läge",
          "en": "Edit mode"
        },
        "interviewer": {
          "sv": "Låt användaren klicka Edit på en rad.",
          "en": "Allow the user to click Edit on a row."
        },
        "goal": {
          "sv": "Visa input för vald rad.",
          "en": "Show input field for selected row."
        },
        "whatToSay": {
          "sv": "Okej, jag sparar vilket id som redigeras och vilken text som ligger i inputen.",
          "en": "Okay, I store which item id is currently being edited along with draft text."
        }
      },
      {
        "id": "save",
        "label": {
          "sv": "Spara",
          "en": "Save"
        },
        "interviewer": {
          "sv": "Lägg till en Save-knapp som uppdaterar raden.",
          "en": "Add a Save-button that uppdaterar the row."
        },
        "goal": {
          "sv": "Spara ändrad text.",
          "en": "Save updated text."
        },
        "whatToSay": {
          "sv": "Okej, jag mappar listan och byter bara text på itemet som matchar editingId.",
          "en": "Okay, I map through items and update text strictly for the row matching editingId."
        }
      },
      {
        "id": "cancel",
        "label": {
          "sv": "Cancel",
          "en": "Cancel"
        },
        "interviewer": {
          "sv": "Låt användaren avbryta redigeringen.",
          "en": "Allow the user to avbryta redigeringen."
        },
        "goal": {
          "sv": "Stäng edit-läget utan att spara.",
          "en": "Exit edit mode without saving changes."
        },
        "whatToSay": {
          "sv": "Okej, cancel behöver bara tömma edit-state utan att röra items-listan.",
          "en": "Okay, cancel clears active edit state without modifying the items collection."
        }
      },
      {
        "id": "validation",
        "label": {
          "sv": "Validering",
          "en": "Validation"
        },
        "interviewer": {
          "sv": "Förhindra att användaren sparar tom text.",
          "en": "Prevent users from saving empty text."
        },
        "goal": {
          "sv": "Stoppa tomma items.",
          "en": "Stoppa tomma items."
        },
        "whatToSay": {
          "sv": "Okej, jag gör en tidig return om draft är tom efter trim.",
          "en": "Okay, I bail out early if the trimmed draft value is empty."
        }
      }
    ]
  },
  "fetch-api-list": {
    "interviewPrompt": {
      "sv": "Bygg en komponent som hämtar och visar users från ett API.",
      "en": "Build a component that fetches and displays users from an API."
    },
    "currentGoal": {
      "sv": "Hämta data och visa en lista.",
      "en": "Fetch data and render a list."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag använder useEffect för att hämta data när komponenten laddas och sparar resultatet i state.",
      "en": "Okay, I use useEffect to fetch data on mount and store results in state."
    },
    "features": [
      {
        "id": "loading",
        "label": {
          "sv": "Loading",
          "en": "Loading"
        },
        "interviewer": {
          "sv": "Visa loading medan datan hämtas.",
          "en": "Display a loading indicator while data is being fetched."
        },
        "goal": {
          "sv": "Hantera vänteläge.",
          "en": "Handle asynchronous loading state."
        },
        "whatToSay": {
          "sv": "Okej, då sparar jag ett loading-state och stänger av det när hämtningen är klar.",
          "en": "Okay, I track a loading boolean in state and toggle it off once fetching completes."
        }
      },
      {
        "id": "error",
        "label": {
          "sv": "Error",
          "en": "Error"
        },
        "interviewer": {
          "sv": "Visa ett felmeddelande om API-anropet misslyckas.",
          "en": "Display an error message if the API request fails."
        },
        "goal": {
          "sv": "Hantera fel från fetch.",
          "en": "Handle errors from fetch."
        },
        "whatToSay": {
          "sv": "Okej, då fångar jag felet i catch och visar ett enkelt meddelande i UI:t.",
          "en": "Okay, I catch errors during fetch and present feedback in the UI."
        }
      },
      {
        "id": "search",
        "label": {
          "sv": "Sök",
          "en": "Search"
        },
        "interviewer": {
          "sv": "Lägg till sök på användarnamn.",
          "en": "Add search filtering by username."
        },
        "goal": {
          "sv": "Filtrera API-datan lokalt.",
          "en": "Filter API-datan lokalt."
        },
        "whatToSay": {
          "sv": "Okej, jag låter API-datan ligga kvar och skapar en filtrerad lista baserat på söktexten.",
          "en": "Okay, I preserve original API records and derive a filtered list based on the search query."
        }
      },
      {
        "id": "retry",
        "label": {
          "sv": "Retry",
          "en": "Retry"
        },
        "interviewer": {
          "sv": "Lägg till en retry-knapp om hämtningen misslyckas.",
          "en": "Add a retry button if network requests fail."
        },
        "goal": {
          "sv": "Kunna försöka hämta data igen.",
          "en": "Allow users to retry fetching data."
        },
        "whatToSay": {
          "sv": "Okej, jag flyttar fetch-logiken till en funktion så samma kod kan köras både vid start och när användaren klickar retry.",
          "en": "Okay, I extract fetching into a reusable function callable on initial mount and on retry."
        }
      }
    ]
  },
  "fizz-buzz": {
    "interviewPrompt": {
      "sv": "Skriv en komponent som visar talen 1 till 20, men ersätter vissa tal enligt FizzBuzz.",
      "en": "Write a component that displays numbers 1 to 20, replacing specific numbers per FizzBuzz rules."
    },
    "currentGoal": {
      "sv": "Visa en FizzBuzz-lista från 1 till 20.",
      "en": "Display a FizzBuzz-list from 1 to 20."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med att skapa en array med tal och en liten funktion som returnerar rätt text för varje tal.",
      "en": "Okay, I'll start by creating an array of numbers and a concise helper returning the FizzBuzz string."
    },
    "features": [
      {
        "id": "range",
        "label": {
          "sv": "Range",
          "en": "Range"
        },
        "interviewer": {
          "sv": "Låt användaren välja hur många tal som ska visas.",
          "en": "Allow the user to select how many numbers to display."
        },
        "goal": {
          "sv": "Styra längden på listan med state.",
          "en": "Control list pagination limits using state."
        },
        "whatToSay": {
          "sv": "Okej, då sparar jag maxvärdet i state och skapar arrayen utifrån det.",
          "en": "Okay, I store the upper limit in state and generate the number sequence accordingly."
        }
      },
      {
        "id": "customWords",
        "label": {
          "sv": "Egna ord",
          "en": "Custom words"
        },
        "interviewer": {
          "sv": "Låt Fizz och Buzz vara valbara texter.",
          "en": "Allow Fizz and Buzz vara valbara texter."
        },
        "goal": {
          "sv": "Göra orden konfigurerbara.",
          "en": "Make output tokens configurable."
        },
        "whatToSay": {
          "sv": "Okej, då skickar jag in orden till funktionen istället för att hårdkoda dem där inne.",
          "en": "Okay, I pass the replacement tokens as arguments rather than hardcoding them internally."
        }
      },
      {
        "id": "rules",
        "label": {
          "sv": "Visa regler",
          "en": "Show rules"
        },
        "interviewer": {
          "sv": "Visa tydligt varför varje rad blev Fizz, Buzz eller FizzBuzz.",
          "en": "Clearly display why each row resolved to Fizz, Buzz, or FizzBuzz."
        },
        "goal": {
          "sv": "Visa extra information per tal.",
          "en": "Display extra information per tal."
        },
        "whatToSay": {
          "sv": "Okej, jag kan returnera både label och reason så UI:t kan visa förklaringen utan att duplicera logiken.",
          "en": "Okay, returning both label and reasoning allows the UI to explain each entry without duplicating logic."
        }
      },
      {
        "id": "styling",
        "label": {
          "sv": "Styling",
          "en": "Styling"
        },
        "interviewer": {
          "sv": "Lägg till styling som gör FizzBuzz-listan lättare att läsa.",
          "en": "Add styling to enhance readability for the FizzBuzz list."
        },
        "goal": {
          "sv": "Lägg CSS-import, wrapper-klass och styling för aktiva kontroller.",
          "en": "Add CSS import, container classes, and styles for interactive controls."
        },
        "whatToSay": {
          "sv": "Okej, jag lägger importen högst upp, ger section en klass och stylar de delar som finns i lösningen.",
          "en": "Okay, I place the stylesheet import at the top, assign container classes, and style interactive controls."
        }
      },
      {
        "id": "count",
        "label": {
          "sv": "Antal",
          "en": "Count"
        },
        "interviewer": {
          "sv": "Visa hur många Fizz, Buzz och FizzBuzz som finns.",
          "en": "Display counts for Fizz, Buzz, and FizzBuzz items."
        },
        "goal": {
          "sv": "Räkna resultattyperna.",
          "en": "Count occurrences of each result token."
        },
        "whatToSay": {
          "sv": "Okej, jag kan räkna varje typ från samma lista som renderas så siffrorna matchar UI:t.",
          "en": "Okay, deriving counts directly from the rendered collection keeps metrics consistent with the UI."
        }
      }
    ]
  },
  "form-validation": {
    "interviewPrompt": {
      "sv": "Bygg ett formulär för namn och email.",
      "en": "Build a form for name and email."
    },
    "currentGoal": {
      "sv": "Visa formuläret och spara inputvärden.",
      "en": "Render the form and capture user inputs in state."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med kontrollerade inputfält så React håller koll på vad användaren skriver.",
      "en": "Okay, I start with controlled inputs so React manages user inputs in state."
    },
    "features": [
      {
        "id": "required",
        "label": {
          "sv": "Required",
          "en": "Required"
        },
        "interviewer": {
          "sv": "Lägg till validering så båda fälten måste fyllas i.",
          "en": "Add validation requiring both fields to be filled."
        },
        "goal": {
          "sv": "Visa fel när fält saknar värde.",
          "en": "Display errors when required fields are empty."
        },
        "whatToSay": {
          "sv": "Okej, då kontrollerar jag värdena när formuläret skickas och sparar felmeddelanden i state.",
          "en": "Okay, I validate fields on submit and record error messages in state."
        }
      },
      {
        "id": "email",
        "label": {
          "sv": "Email-format",
          "en": "Email format"
        },
        "interviewer": {
          "sv": "Kontrollera också att email ser ut som en emailadress.",
          "en": "Kontrollera ockso that email ser ut that a emailadress."
        },
        "goal": {
          "sv": "Validera email-format.",
          "en": "Validera email-format."
        },
        "whatToSay": {
          "sv": "Okej, då lägger jag en separat kontroll för email så användaren får ett tydligare felmeddelande.",
          "en": "Okay, I add specific email format validation so feedback is precise."
        }
      },
      {
        "id": "success",
        "label": {
          "sv": "Success",
          "en": "Success"
        },
        "interviewer": {
          "sv": "Visa ett tackmeddelande när formuläret är korrekt.",
          "en": "Display a confirmation message when submission succeeds."
        },
        "goal": {
          "sv": "Visa lyckat state efter submit.",
          "en": "Display success state after submission."
        },
        "whatToSay": {
          "sv": "Okej, när det inte finns några fel kan jag visa ett successmeddelande och nollställa fälten.",
          "en": "Okay, when validations pass I present a success alert and reset input fields."
        }
      },
      {
        "id": "reset",
        "label": {
          "sv": "Reset",
          "en": "Reset"
        },
        "interviewer": {
          "sv": "Lägg till en knapp som tömmer formuläret.",
          "en": "Add a button that resets the form."
        },
        "goal": {
          "sv": "Återställa formulär och fel.",
          "en": "Reset form values and clear validation errors."
        },
        "whatToSay": {
          "sv": "Okej, reset ska tömma både fälten och eventuella fel så formuläret hamnar i startläge igen.",
          "en": "Okay, reset clears input values and dismisses errors back to baseline."
        }
      },
      {
        "id": "styling",
        "label": {
          "sv": "Styling",
          "en": "Styling"
        },
        "interviewer": {
          "sv": "Lägg till enkel styling för formuläret.",
          "en": "Add basic styling for the form."
        },
        "goal": {
          "sv": "Ge formuläret klassnamn och en egen CSS-fil.",
          "en": "Provide class names and a dedicated CSS file for the form."
        },
        "whatToSay": {
          "sv": "Okej, jag lägger klassnamn i JSX och låter CSS-filen ta hand om layout och feltexter.",
          "en": "Okay, I add class names in JSX and let the CSS file handle layout and error text styling."
        }
      }
    ]
  },
  "image-gallery": {
    "interviewPrompt": {
      "sv": "Bygg ett galleri med bilder och en vald bild.",
      "en": "Build an image gallery with thumbnails and a selected hero image."
    },
    "currentGoal": {
      "sv": "Visa thumbnails och vald bild.",
      "en": "Display thumbnails and the selected image."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar id:t för vald bild och använder det för att visa huvudbilden.",
      "en": "Okay, I track the selected image id in state to display the hero preview."
    },
    "features": [
      {
        "id": "next-prev",
        "label": {
          "sv": "Next/prev",
          "en": "Next/prev"
        },
        "interviewer": {
          "sv": "Lägg till next och previous.",
          "en": "Add next and previous."
        },
        "goal": {
          "sv": "Bläddra mellan bilder.",
          "en": "Navigate between gallery images."
        },
        "whatToSay": {
          "sv": "Okej, då räknar jag ut index för vald bild och flyttar ett steg i taget.",
          "en": "Okay, I determine current index and advance forward or backward one step at a time."
        }
      },
      {
        "id": "caption",
        "label": {
          "sv": "Caption",
          "en": "Caption"
        },
        "interviewer": {
          "sv": "Visa bildens caption under huvudbilden.",
          "en": "Display the image caption beneath the main image."
        },
        "goal": {
          "sv": "Visa mer info om vald bild.",
          "en": "Display additional info about the selected image."
        },
        "whatToSay": {
          "sv": "Okej, jag lägger caption på bilddatan och visar den för selectedImage.",
          "en": "Okay, I include caption metadata and render it alongside selectedImage."
        }
      },
      {
        "id": "empty",
        "label": {
          "sv": "Fallback",
          "en": "Fallback"
        },
        "interviewer": {
          "sv": "Visa fallback om det inte finns några bilder.",
          "en": "Render a fallback view when no images are present."
        },
        "goal": {
          "sv": "Hantera tomt galleri.",
          "en": "Handle empty gallery state."
        },
        "whatToSay": {
          "sv": "Okej, jag kontrollerar om images är tom innan jag försöker visa selectedImage.",
          "en": "Okay, I verify whether images is empty before rendering selectedImage."
        }
      }
    ]
  },
  "infinite-scroll": {
    "interviewPrompt": {
      "sv": "Bygg en lista som hämtar fler produkter när användaren scrollar ner.",
      "en": "Build a lista that fetches additional products as the user scrolls down."
    },
    "currentGoal": {
      "sv": "Hämta första sidan data och visa listan.",
      "en": "Fetch initial page data and render the list."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med första sidans data, loading och error så API-flödet är tydligt.",
      "en": "Okay, I start with first-page data, loading, and error states for clear API flow."
    },
    "features": [
      {
        "id": "append",
        "label": {
          "sv": "Append data",
          "en": "Append data"
        },
        "interviewer": {
          "sv": "När ny data hämtas ska den läggas till i listan.",
          "en": "When fresh data is fetched, append it to the list."
        },
        "goal": {
          "sv": "Behåll tidigare produkter.",
          "en": "Preserve previously loaded products."
        },
        "whatToSay": {
          "sv": "Okej, jag append:ar nästa sida istället för att ersätta listan.",
          "en": "Okay, I append new items onto existing records instead of overwriting the list."
        }
      },
      {
        "id": "load-more",
        "label": {
          "sv": "Load more",
          "en": "Load more"
        },
        "interviewer": {
          "sv": "Lägg till en knapp som hämtar nästa sida.",
          "en": "Add a button to load the next page."
        },
        "goal": {
          "sv": "Öka page när användaren vill se mer.",
          "en": "Increment page when user requests more data."
        },
        "whatToSay": {
          "sv": "Okej, page styr API-anropet, så knappen behöver bara öka page.",
          "en": "Okay, page controls the query parameters, so the button simply increments page."
        }
      },
      {
        "id": "observer",
        "label": {
          "sv": "Observer",
          "en": "Observer"
        },
        "interviewer": {
          "sv": "Byt Load more-knappen mot automatisk infinite scroll.",
          "en": "Replace the Load More button with automatic infinite scrolling."
        },
        "goal": {
          "sv": "Hämta mer när sista elementet syns.",
          "en": "Load more when the last element enters the viewport."
        },
        "whatToSay": {
          "sv": "Okej, jag använder IntersectionObserver för att se när slutet av listan kommer in i viewport.",
          "en": "Okay, I use an IntersectionObserver to detect when the bottom element enters view."
        }
      },
      {
        "id": "has-more",
        "label": {
          "sv": "Has more",
          "en": "Has more"
        },
        "interviewer": {
          "sv": "Sluta hämta när API:t säger att det inte finns mer data.",
          "en": "Stop requesting when the API signals no more records exist."
        },
        "goal": {
          "sv": "Undvika onödiga requests.",
          "en": "Prevent superfluous network requests."
        },
        "whatToSay": {
          "sv": "Okej, jag sparar hasMore från API:t och stoppar nästa hämtning när den är false.",
          "en": "Okay, I record hasMore from API responses and block fetches when false."
        }
      }
    ]
  },
  "javascript-deep-clone": {
    "interviewPrompt": {
      "sv": "Implementera en funktion som deep-clonar objekt och arrayer.",
      "en": "Implementera a funktion that deep-clonar objekt and arrayer."
    },
    "currentGoal": {
      "sv": "Kopiera nested objekt utan att dela referenser.",
      "en": "Deep copy nested objects without sharing references."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag hanterar primitiva värden direkt och går rekursivt igenom objekt och arrayer.",
      "en": "Okay, I return primitives directly and traverse arrays and plain objects recursively."
    },
    "features": [
      {
        "id": "date",
        "label": {
          "sv": "Date",
          "en": "Date"
        },
        "interviewer": {
          "sv": "Hantera Date-objekt.",
          "en": "Handle Date objects."
        },
        "goal": {
          "sv": "Kopiera Date utan att dela referens.",
          "en": "Deep clone Date instances without sharing references."
        },
        "whatToSay": {
          "sv": "Okej, Date behöver en egen gren eftersom det inte ska behandlas som ett vanligt objekt.",
          "en": "Okay, Date needs a dedicated branch since it should not be cloned like a generic object."
        }
      },
      {
        "id": "map",
        "label": {
          "sv": "Map",
          "en": "Map"
        },
        "interviewer": {
          "sv": "Hantera Map.",
          "en": "Handle Map objects."
        },
        "goal": {
          "sv": "Kopiera key/value-par.",
          "en": "Kopiera key/value-par."
        },
        "whatToSay": {
          "sv": "Okej, Map har egen iteration så jag skapar en ny Map och clonar varje värde.",
          "en": "Okay, Map requires its own instantiation and recursive entry cloning."
        }
      },
      {
        "id": "circular",
        "label": {
          "sv": "Circular",
          "en": "Circular"
        },
        "interviewer": {
          "sv": "Hantera cirkulära referenser.",
          "en": "Handle circular object references."
        },
        "goal": {
          "sv": "Undvika oändlig rekursion.",
          "en": "Prevent infinite recursion loops."
        },
        "whatToSay": {
          "sv": "Okej, jag behöver komma ihåg objekt jag redan har kopierat med en WeakMap.",
          "en": "Okay, I keep track of previously visited objects using a WeakMap."
        }
      }
    ]
  },
  "javascript-event-emitter": {
    "interviewPrompt": {
      "sv": "Implementera en enkel EventEmitter i JavaScript.",
      "en": "Implement a simple EventEmitter in JavaScript."
    },
    "currentGoal": {
      "sv": "Kunna prenumerera på ett event och trigga callbacks.",
      "en": "Subscribe to custom events and invoke callbacks."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar callbacks per eventnamn och anropar dem när eventet emit:as.",
      "en": "Okay, I store callback handlers per event name and trigger them on emission."
    },
    "features": [
      {
        "id": "off",
        "label": {
          "sv": "Off",
          "en": "Off"
        },
        "interviewer": {
          "sv": "Lägg till off så man kan avregistrera en callback.",
          "en": "Add off to unsubscribe a callback listener."
        },
        "goal": {
          "sv": "Ta bort prenumerationer.",
          "en": "Unsubscribe event listeners."
        },
        "whatToSay": {
          "sv": "Okej, jag filtrerar bort callbacken från eventets lista.",
          "en": "Okay, I'll filter out the callback from the event subscriber list."
        }
      },
      {
        "id": "once",
        "label": {
          "sv": "Once",
          "en": "Once"
        },
        "interviewer": {
          "sv": "Lägg till once som bara kör callbacken en gång.",
          "en": "Add once to execute a listener exactly once."
        },
        "goal": {
          "sv": "Prenumerera en enda gång.",
          "en": "Subscribe for a single trigger."
        },
        "whatToSay": {
          "sv": "Okej, once wrappar callbacken och tar bort sig själv efter första körningen.",
          "en": "Okay, once wraps the callback and auto-removes itself after invocation."
        }
      },
      {
        "id": "unsubscribe",
        "label": {
          "sv": "Return unsubscribe",
          "en": "Return unsubscribe"
        },
        "interviewer": {
          "sv": "Låt on returnera en unsubscribe-funktion.",
          "en": "Allow on returnera a unsubscribe-funktion."
        },
        "goal": {
          "sv": "Göra API:t enklare att använda.",
          "en": "Make the event subscription API ergonomic."
        },
        "whatToSay": {
          "sv": "Okej, då kan den som lyssnar själv städa upp utan att spara eventnamnet igen.",
          "en": "Okay, returning an unsubscribe callback allows easy teardown without resupplying event names."
        }
      }
    ]
  },
  "javascript-promise-all": {
    "interviewPrompt": {
      "sv": "Implementera en egen Promise.all-funktion.",
      "en": "Implement a custom Promise.all function."
    },
    "currentGoal": {
      "sv": "Returnera resultaten i rätt ordning när alla promises lyckas.",
      "en": "Return promise results in original sequence when all succeed."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag går igenom varje promise, sparar resultatet på samma index och resolve:ar när alla är klara.",
      "en": "Okay, I iterate through promises, assign resolved values at matching indices, and resolve when complete."
    },
    "features": [
      {
        "id": "empty",
        "label": {
          "sv": "Tom array",
          "en": "Empty array"
        },
        "interviewer": {
          "sv": "Hantera att arrayen är tom.",
          "en": "Handle empty promise collections."
        },
        "goal": {
          "sv": "Resolve:a direkt med en tom array.",
          "en": "Resolve immediately with an empty array."
        },
        "whatToSay": {
          "sv": "Okej, om det inte finns något att vänta på kan jag resolve:a direkt.",
          "en": "Okay, when there are no promises to await, resolve immediately."
        }
      },
      {
        "id": "non-promise",
        "label": {
          "sv": "Vanliga värden",
          "en": "Primitive values"
        },
        "interviewer": {
          "sv": "Stöd även vanliga värden, inte bara promises.",
          "en": "Support non-promise synchronous values."
        },
        "goal": {
          "sv": "Wrap:a varje item med Promise.resolve.",
          "en": "Wrap each item using Promise.resolve."
        },
        "whatToSay": {
          "sv": "Okej, Promise.resolve gör att både vanliga värden och promises kan hanteras likadant.",
          "en": "Okay, Promise.resolve normalizes both synchronous values and promises into a uniform interface."
        }
      },
      {
        "id": "reject",
        "label": {
          "sv": "Reject",
          "en": "Reject"
        },
        "interviewer": {
          "sv": "Om en promise rejectar ska hela funktionen rejecta.",
          "en": "If any promise rejects, the entire function should reject immediately."
        },
        "goal": {
          "sv": "Skicka felet vidare direkt.",
          "en": "Skicka felet vidare direkt."
        },
        "whatToSay": {
          "sv": "Okej, Promise.all ska avbryta med första felet, så catch kan anropa reject direkt.",
          "en": "Okay, Promise.all rejects on the first encountered error, invoking reject immediately."
        }
      }
    ]
  },
  "javascript-throttle": {
    "interviewPrompt": {
      "sv": "Implementera en throttle-funktion.",
      "en": "Implement a throttle-funktion."
    },
    "currentGoal": {
      "sv": "Begränsa hur ofta en callback får köras.",
      "en": "Throttle how frequently a callback may execute."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar senaste körningen och stoppar nya anrop tills delay har passerat.",
      "en": "Okay, I track timestamp of execution and throttle subsequent invocations until delay elapses."
    },
    "features": [
      {
        "id": "trailing",
        "label": {
          "sv": "Trailing",
          "en": "Trailing"
        },
        "interviewer": {
          "sv": "Kör sista anropet efter delay om användaren fortsätter trigga.",
          "en": "Execute trailing call after delay if invocations persist."
        },
        "goal": {
          "sv": "Inte tappa sista värdet.",
          "en": "Not tappa sista the value."
        },
        "whatToSay": {
          "sv": "Okej, då sparar jag senaste args och kör dem med timeout när perioden är slut.",
          "en": "Okay, I capture the latest arguments and schedule a trailing invocation via setTimeout."
        }
      },
      {
        "id": "cancel",
        "label": {
          "sv": "Cancel",
          "en": "Cancel"
        },
        "interviewer": {
          "sv": "Lägg till cancel.",
          "en": "Add cancel."
        },
        "goal": {
          "sv": "Kunna avbryta väntande körning.",
          "en": "Allow cancellation of pending scheduled invocations."
        },
        "whatToSay": {
          "sv": "Okej, cancel rensar timeouten så inget trailing-anrop körs efteråt.",
          "en": "Okay, cancel clears the active timeout to prevent subsequent trailing executions."
        }
      },
      {
        "id": "leading",
        "label": {
          "sv": "Leading av",
          "en": "Leading of"
        },
        "interviewer": {
          "sv": "Gör det möjligt att stänga av första direkta körningen.",
          "en": "Provide option to disable immediate leading invocation."
        },
        "goal": {
          "sv": "Styra om callback körs direkt eller väntar.",
          "en": "Control whether the callback executes immediately or debounces."
        },
        "whatToSay": {
          "sv": "Okej, en option gör beteendet tydligt utan att ändra resten av API:t.",
          "en": "Okay, configurable leading/trailing options provide flexibility without API breakage."
        }
      }
    ]
  },
  "multi-step-form": {
    "interviewPrompt": {
      "sv": "Bygg ett formulär med flera steg.",
      "en": "Build a multi-step wizard form."
    },
    "currentGoal": {
      "sv": "Visa ett steg i taget.",
      "en": "Display one step at a time."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar currentStep i state och renderar innehåll baserat på vilket steg som är aktivt.",
      "en": "Okay, I track currentStep in state and render form sections corresponding to the active step."
    },
    "features": [
      {
        "id": "back",
        "label": {
          "sv": "Back",
          "en": "Back"
        },
        "interviewer": {
          "sv": "Lägg till en tillbaka-knapp.",
          "en": "Add a back button."
        },
        "goal": {
          "sv": "Gå bakåt mellan steg.",
          "en": "Navigate backward between wizard steps."
        },
        "whatToSay": {
          "sv": "Okej, jag minskar step med ett och disable:ar knappen på första steget.",
          "en": "Okay, I decrement step by one and disable the back button on the initial step."
        }
      },
      {
        "id": "data",
        "label": {
          "sv": "Spara data",
          "en": "Save data"
        },
        "interviewer": {
          "sv": "Spara värdena från varje steg.",
          "en": "Persist input values across wizard steps."
        },
        "goal": {
          "sv": "Behåll formulärdata.",
          "en": "Retain form values across transitions."
        },
        "whatToSay": {
          "sv": "Okej, jag sparar formulärdatan i ett objekt och uppdaterar rätt fält när input ändras.",
          "en": "Okay, I store cumulative values in a formData object, updating specific fields on change."
        }
      },
      {
        "id": "summary",
        "label": {
          "sv": "Sammanfattning",
          "en": "Summary"
        },
        "interviewer": {
          "sv": "Visa en sammanfattning på sista steget.",
          "en": "Display a summary on the final review step."
        },
        "goal": {
          "sv": "Bekräfta inskickad data.",
          "en": "Review and confirm submitted data."
        },
        "whatToSay": {
          "sv": "Okej, då visar jag värdena från formData på bekräftelsesteget.",
          "en": "Okay, I present all captured fields from formData on the final review step."
        }
      },
      {
        "id": "validation",
        "label": {
          "sv": "Validera steg",
          "en": "Validate step"
        },
        "interviewer": {
          "sv": "Stoppa användaren från att gå vidare om aktuellt steg saknar värde.",
          "en": "Block advancement if the active step contains invalid inputs."
        },
        "goal": {
          "sv": "Validera innan nästa steg.",
          "en": "Validate inputs before advancing to the next step."
        },
        "whatToSay": {
          "sv": "Okej, innan jag ökar step kontrollerar jag fältet för nuvarande steg och visar ett fel om det saknas.",
          "en": "Okay, I block navigation to the next step if the active step is invalid."
        }
      }
    ]
  },
  "react-counter": {
    "interviewPrompt": {
      "sv": "Bygg en React-counter som kan öka värdet.",
      "en": "Build a React-counter that can increment the count."
    },
    "currentGoal": {
      "sv": "Visa ett värde och uppdatera det vid klick.",
      "en": "Display a value and update it on click."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag använder useState eftersom värdet ska ändras när användaren klickar.",
      "en": "Okay, I'll use useState because the value updates when the user clicks."
    },
    "features": [
      {
        "id": "decrease",
        "label": {
          "sv": "Minska",
          "en": "Decrease"
        },
        "interviewer": {
          "sv": "Lägg till en knapp som minskar värdet.",
          "en": "Add a button that decreases the value."
        },
        "goal": {
          "sv": "Kunna öka och minska samma state.",
          "en": "Increment and decrement unified counter state."
        },
        "whatToSay": {
          "sv": "Okej, minusknappen uppdaterar samma count-state men åt andra hållet.",
          "en": "Okay, the decrement button modifies the same count state in the opposite direction."
        }
      },
      {
        "id": "reset",
        "label": {
          "sv": "Reset",
          "en": "Reset"
        },
        "interviewer": {
          "sv": "Lägg till en reset-knapp.",
          "en": "Add a reset button."
        },
        "goal": {
          "sv": "Sätta tillbaka värdet till noll.",
          "en": "Reset counter value to zero."
        },
        "whatToSay": {
          "sv": "Okej, reset sätter count till startvärdet igen.",
          "en": "Okay, reset restores count back to its initial value."
        }
      }
    ]
  },
  "react-use-reducer": {
    "interviewPrompt": {
      "sv": "Bygg en komponent som hanterar request-status med useReducer.",
      "en": "Build a component that manages request status using useReducer."
    },
    "currentGoal": {
      "sv": "Visa idle-state och uppdatera status via actions.",
      "en": "Display idle state and transition status via actions."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag använder useReducer när flera actions ska ändra samma status-state tydligt.",
      "en": "Okay, I'll use useReducer when multiple discrete actions transition state explicitly."
    },
    "features": [
      {
        "id": "loading",
        "label": {
          "sv": "Loading",
          "en": "Loading"
        },
        "interviewer": {
          "sv": "Visa ett loading-meddelande när status är loading.",
          "en": "Show loading feedback when status equals loading."
        },
        "goal": {
          "sv": "Rendera UI baserat på status.",
          "en": "Render interface states according to status enum."
        },
        "whatToSay": {
          "sv": "Okej, statusen ligger redan i reducern, så jag kan visa loading från samma state.",
          "en": "Okay, status is already tracked in reducer state, making loading presentation direct."
        }
      },
      {
        "id": "success",
        "label": {
          "sv": "Success",
          "en": "Success"
        },
        "interviewer": {
          "sv": "Lägg till success-action med data.",
          "en": "Dispatch success action with payload data."
        },
        "goal": {
          "sv": "Spara hämtad data i reducer-state.",
          "en": "Save retrieved payload in reducer state."
        },
        "whatToSay": {
          "sv": "Okej, success behöver både ändra status och lägga in datan som kom tillbaka.",
          "en": "Okay, success must update status to idle and store the retrieved payload."
        }
      },
      {
        "id": "error",
        "label": {
          "sv": "Error",
          "en": "Error"
        },
        "interviewer": {
          "sv": "Lägg till error-action med felmeddelande.",
          "en": "Dispatch error action with error description."
        },
        "goal": {
          "sv": "Visa fel från reducer-state.",
          "en": "Display errors from reducer-state."
        },
        "whatToSay": {
          "sv": "Okej, error är en egen action så reducer-state kan beskriva exakt vad som gick fel.",
          "en": "Okay, dedicated error actions allow reducer state to record precise failure details."
        }
      }
    ]
  },
  "react-utility-functions": {
    "interviewPrompt": {
      "sv": "Bygg en React-komponent som använder små utility-funktioner för att forma data.",
      "en": "Build a React component using concise utility functions to shape data."
    },
    "currentGoal": {
      "sv": "Rendera en lista som använder en ren hjälpfunktion.",
      "en": "Render a list formatted by a pure helper function."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag håller hjälplogiken utanför komponenten och låter komponenten fokusera på rendering.",
      "en": "Okay, keeping helper logic outside the component lets JSX focus cleanly on rendering."
    },
    "features": [
      {
        "id": "custom-map",
        "label": {
          "sv": "Egen mappning",
          "en": "Custom mapping"
        },
        "interviewer": {
          "sv": "Skriv en egen map-funktion och använd den i komponenten.",
          "en": "Write a custom map implementation and consume it within the component."
        },
        "goal": {
          "sv": "Visa att du förstår callbacks och rendering.",
          "en": "Demonstrate callbacks in data transformation and rendering."
        },
        "whatToSay": {
          "sv": "Okej, jag bygger en ny array med callbackens resultat och använder den innan renderingen.",
          "en": "Okay, I transform records using the callback and consume derived items in rendering."
        }
      },
      {
        "id": "debounce",
        "label": {
          "sv": "Debounce",
          "en": "Debounce"
        },
        "interviewer": {
          "sv": "Lägg till en debounce-funktion för sökinput.",
          "en": "Add a debounce utility for search queries."
        },
        "goal": {
          "sv": "Fördröja sökningen tills användaren pausat.",
          "en": "Debounce search execution until user finishes typing."
        },
        "whatToSay": {
          "sv": "Okej, debounce behöver komma ihåg sin timer mellan anrop, så jag använder en closure.",
          "en": "Okay, debounce retains its timer handle across invocations via closure."
        }
      },
      {
        "id": "flatten",
        "label": {
          "sv": "Flatten",
          "en": "Flatten"
        },
        "interviewer": {
          "sv": "Lägg till en funktion som plattar till en nästlad array.",
          "en": "Add a utility function that flattens nested arrays."
        },
        "goal": {
          "sv": "Hantera rekursion i en ren hjälpfunktion.",
          "en": "Handle recursion inside a pure helper function."
        },
        "whatToSay": {
          "sv": "Okej, jag går igenom varje item och anropar samma funktion igen när itemet är en array.",
          "en": "Okay, I iterate through elements and invoke the function recursively on nested arrays."
        }
      },
      {
        "id": "styling",
        "label": {
          "sv": "Styling",
          "en": "Styling"
        },
        "interviewer": {
          "sv": "Lägg till styling för utility-exemplet.",
          "en": "Add stylesheet and layout styling for utility demo."
        },
        "goal": {
          "sv": "Importera CSS och ge wrappern ett klassnamn.",
          "en": "Importera CSS and ge wrappern a klassnamn."
        },
        "whatToSay": {
          "sv": "Okej, jag importerar CSS-filen högst upp och sätter klassnamnet direkt på wrappern.",
          "en": "Okay, I import the CSS file at top and attach container classes to the wrapper."
        }
      }
    ]
  },
  "reusable-table": {
    "interviewPrompt": {
      "sv": "Bygg en tabell som visar användare med namn, roll och status.",
      "en": "Build a table displaying users with name, role, and status."
    },
    "currentGoal": {
      "sv": "Rendera data i en tabell.",
      "en": "Render data inside a table."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med en enkel tabell där varje rad kommer från data-arrayen.",
      "en": "Okay, I'll start with a basic table where each row maps from the data array."
    },
    "features": [
      {
        "id": "columns",
        "label": {
          "sv": "Columns-data",
          "en": "Column data"
        },
        "interviewer": {
          "sv": "Gör kolumnerna data-drivna.",
          "en": "Make kolumnerna data-drivna."
        },
        "goal": {
          "sv": "Rendera headers och cells från en columns-array.",
          "en": "Rendera headers and cells from a columns-array."
        },
        "whatToSay": {
          "sv": "Okej, jag flyttar kolumninformationen till data så tabellen blir lättare att återanvända.",
          "en": "Okay, extracting column headers into declarative data makes the table generic and reusable."
        }
      },
      {
        "id": "sort",
        "label": {
          "sv": "Sortering",
          "en": "Sort"
        },
        "interviewer": {
          "sv": "Låt användaren sortera på namn.",
          "en": "Allow the user to sort table rows by name."
        },
        "goal": {
          "sv": "Sortera raderna.",
          "en": "Sortera raderna."
        },
        "whatToSay": {
          "sv": "Okej, jag sparar sortOrder i state och sorterar en kopia av listan innan render.",
          "en": "Okay, I'll store sortOrder in state and sort a copy of the list before rendering."
        }
      },
      {
        "id": "active",
        "label": {
          "sv": "Aktiva",
          "en": "Active items"
        },
        "interviewer": {
          "sv": "Lägg till filter för att bara visa aktiva användare.",
          "en": "Add a filter toggle to show active users only."
        },
        "goal": {
          "sv": "Filtrera tabellen.",
          "en": "Filter tabellen."
        },
        "whatToSay": {
          "sv": "Okej, jag sparar en boolean och använder den när jag tar fram listan som ska visas.",
          "en": "Okay, I store an active-only boolean in state and apply it during list derivation."
        }
      },
      {
        "id": "empty",
        "label": {
          "sv": "Tom tabell",
          "en": "Empty table"
        },
        "interviewer": {
          "sv": "Visa ett meddelande om inga rader matchar filtret.",
          "en": "Display a notice if no rows match the active filter."
        },
        "goal": {
          "sv": "Hantera tom tabell.",
          "en": "Handle empty table states."
        },
        "whatToSay": {
          "sv": "Okej, jag kontrollerar listans längd innan jag renderar tabellrader.",
          "en": "Okay, I verify array length before mapping over table rows to render empty feedback."
        }
      }
    ]
  },
  "search-highlight": {
    "interviewPrompt": {
      "sv": "Bygg en komponent som visar en lista och låter användaren söka i den.",
      "en": "Build a component that renders a list and allows search filtering."
    },
    "currentGoal": {
      "sv": "Visa listan och filtrera på söktext.",
      "en": "Display the collection and filter by search text."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med en lista och ett sökfält som filtrerar vad som visas.",
      "en": "Okay, I start with an item list and a search input filtering displayed records."
    },
    "features": [
      {
        "id": "highlight",
        "label": {
          "sv": "Highlight",
          "en": "Highlight"
        },
        "interviewer": {
          "sv": "Markera den del av texten som matchar sökningen.",
          "en": "Highlight the substring matching the search term."
        },
        "goal": {
          "sv": "Visa matchande text tydligare.",
          "en": "Display matchande text tydligare."
        },
        "whatToSay": {
          "sv": "Okej, jag delar upp titeln runt sökningen och renderar matchen i ett mark-element.",
          "en": "Okay, I split the title text around search matches and wrap hits in a mark element."
        }
      },
      {
        "id": "empty",
        "label": {
          "sv": "Tom lista",
          "en": "Empty list"
        },
        "interviewer": {
          "sv": "Visa ett meddelande när sökningen inte matchar något.",
          "en": "Display a message when the search yields no results."
        },
        "goal": {
          "sv": "Hantera tomt resultat.",
          "en": "Handle empty search results."
        },
        "whatToSay": {
          "sv": "Okej, jag kontrollerar längden på den filtrerade listan och visar ett tydligt meddelande.",
          "en": "Okay, I check filtered list length and display empty feedback when nothing matches."
        }
      },
      {
        "id": "clear",
        "label": {
          "sv": "Rensa",
          "en": "Clear"
        },
        "interviewer": {
          "sv": "Lägg till en knapp som rensar sökningen.",
          "en": "Add a button to clear the search input."
        },
        "goal": {
          "sv": "Snabbt komma tillbaka till hela listan.",
          "en": "Quickly restore the full item collection."
        },
        "whatToSay": {
          "sv": "Okej, eftersom sökningen ligger i state räcker det att sätta search till en tom sträng.",
          "en": "Okay, setting the search state variable to empty string resets the filter instantly."
        }
      }
    ]
  },
  "shopping-cart-quantity": {
    "interviewPrompt": {
      "sv": "Bygg en kundvagn där varje produkt kan ha quantity.",
      "en": "Build a shopping cart where each product tracks a quantity counter."
    },
    "currentGoal": {
      "sv": "Visa produkter och lägg till dem i cart.",
      "en": "Display products and allow adding them to cart."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar cart i state och lägger till produkten som ett cart-item med quantity.",
      "en": "Okay, I'll store cart items in state and track each product as a cart item with quantity."
    },
    "features": [
      {
        "id": "merge",
        "label": {
          "sv": "Slå ihop",
          "en": "Merge"
        },
        "interviewer": {
          "sv": "Om produkten redan finns i cart ska quantity öka istället.",
          "en": "If an item already exists in cart, increment quantity instead."
        },
        "goal": {
          "sv": "Undvik dubletter i cart.",
          "en": "Undvik dubletter i cart."
        },
        "whatToSay": {
          "sv": "Okej, jag kontrollerar om produkten redan finns och uppdaterar quantity istället för att lägga till en ny rad.",
          "en": "Okay, I'll check if the product exists in the cart and increment quantity instead of adding a duplicate row."
        }
      },
      {
        "id": "decrease",
        "label": {
          "sv": "Minska",
          "en": "Decrease"
        },
        "interviewer": {
          "sv": "Lägg till en knapp som minskar quantity.",
          "en": "Add a button that decreases quantity."
        },
        "goal": {
          "sv": "Minska antal i cart.",
          "en": "Decrease item quantity in cart."
        },
        "whatToSay": {
          "sv": "Okej, jag minskar rätt item och tar bort raden om quantity blir noll.",
          "en": "Okay, I decrement quantity on the item and remove the line item if quantity hits zero."
        }
      },
      {
        "id": "total",
        "label": {
          "sv": "Total",
          "en": "Total"
        },
        "interviewer": {
          "sv": "Visa totalpris baserat på price och quantity.",
          "en": "Display total price derived from price and quantity."
        },
        "goal": {
          "sv": "Räkna totalen.",
          "en": "Compute the total cost."
        },
        "whatToSay": {
          "sv": "Okej, då multiplicerar jag varje produkts pris med quantity och summerar med reduce.",
          "en": "Okay, I multiply each product price by its quantity and sum the total with reduce."
        }
      }
    ]
  },
  "tabs": {
    "interviewPrompt": {
      "sv": "Bygg tabs där användaren kan växla mellan olika paneler.",
      "en": "Build tabs where the user can toggle between different tab panels."
    },
    "currentGoal": {
      "sv": "Visa tabbar och aktiv panel.",
      "en": "Display tabbar and aktiv panel."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar id:t för aktiv tab och renderar innehållet som hör till den.",
      "en": "Okay, I store active tab id in state and display panel content matching that tab."
    },
    "features": [
      {
        "id": "active",
        "label": {
          "sv": "Aktiv stil",
          "en": "Active style"
        },
        "interviewer": {
          "sv": "Markera den aktiva tabben visuellt.",
          "en": "Visually indicate the currently active tab."
        },
        "goal": {
          "sv": "Visa vilken tab som är vald.",
          "en": "Indicate which tab is currently selected."
        },
        "whatToSay": {
          "sv": "Okej, då jämför jag varje tabs id med activeTab och lägger på en klass när de matchar.",
          "en": "Okay, I compare each tab's id against activeTab and apply an active CSS class."
        }
      },
      {
        "id": "keyboard",
        "label": {
          "sv": "Keyboard",
          "en": "Keyboard"
        },
        "interviewer": {
          "sv": "Lägg till stöd för ArrowLeft och ArrowRight.",
          "en": "Add keyboard navigation support for ArrowLeft and ArrowRight."
        },
        "goal": {
          "sv": "Byt tab med tangentbord.",
          "en": "Navigate tabs using keyboard arrow keys."
        },
        "whatToSay": {
          "sv": "Okej, då räknar jag ut index för aktiv tab och flyttar ett steg åt höger eller vänster.",
          "en": "Okay, I find the active tab index and increment or decrement position based on arrow keys."
        }
      },
      {
        "id": "aria",
        "label": {
          "sv": "ARIA",
          "en": "ARIA"
        },
        "interviewer": {
          "sv": "Gör tabs mer tillgängliga med roller och selected-state.",
          "en": "Improve tab accessibility using ARIA roles and selected states."
        },
        "goal": {
          "sv": "Lägg till grundläggande a11y.",
          "en": "Add foundational accessibility attributes."
        },
        "whatToSay": {
          "sv": "Okej, jag lägger role på listan, tabbarna och panelen så strukturen blir tydligare för hjälpmedel.",
          "en": "Okay, I assign tablist, tab, and tabpanel roles for assistive technology."
        }
      },
      {
        "id": "styling",
        "label": {
          "sv": "Styling",
          "en": "Styling"
        },
        "interviewer": {
          "sv": "Lägg till styling för tabs och aktiv panel.",
          "en": "Add styling for tabs and aktiv panel."
        },
        "goal": {
          "sv": "Visa tabbarna som knappar och panelen som ett tydligt innehåll.",
          "en": "Render tabs as buttons and the active panel with clean, distinct styling."
        },
        "whatToSay": {
          "sv": "Okej, jag lägger klassnamn på wrapper, tabbar och panel och sköter utseendet i CSS.",
          "en": "Okay, I assign class names to containers, tabs, and panels while delegating styling to CSS."
        }
      }
    ]
  },
  "toast-system": {
    "interviewPrompt": {
      "sv": "Bygg ett enkelt toast-system.",
      "en": "Build a simple toast notification system."
    },
    "currentGoal": {
      "sv": "Visa en toast när användaren klickar.",
      "en": "Display a toast notification on button click."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar en lista med toasts i state och renderar dem längst upp eller längst ner.",
      "en": "Okay, I maintain a list of active toasts in state and render them in a fixed container."
    },
    "features": [
      {
        "id": "multiple",
        "label": {
          "sv": "Flera",
          "en": "Multiple"
        },
        "interviewer": {
          "sv": "Tillåt flera toasts samtidigt.",
          "en": "Support stacking multiple toasts concurrently."
        },
        "goal": {
          "sv": "Lägg till nya toasts utan att ersätta gamla.",
          "en": "Append new toasts without overwriting existing notifications."
        },
        "whatToSay": {
          "sv": "Okej, då lägger jag den nya toasten sist i arrayen istället för att ersätta hela listan.",
          "en": "Okay, I push incoming toasts to the end of the array rather than wiping the list."
        }
      },
      {
        "id": "dismiss",
        "label": {
          "sv": "Stäng",
          "en": "Close"
        },
        "interviewer": {
          "sv": "Lägg till en knapp för att stänga en toast.",
          "en": "Add a button to dismiss individual toasts."
        },
        "goal": {
          "sv": "Ta bort toast manuellt.",
          "en": "Dismiss toast manually."
        },
        "whatToSay": {
          "sv": "Okej, jag tar bort rätt toast genom att filtrera på id.",
          "en": "Okay, I dismiss the target notification by filtering out its id."
        }
      },
      {
        "id": "auto",
        "label": {
          "sv": "Auto-hide",
          "en": "Auto-hide"
        },
        "interviewer": {
          "sv": "Göm toasten automatiskt efter några sekunder.",
          "en": "Auto-dismiss toasts after a short duration."
        },
        "goal": {
          "sv": "Ta bort toast efter timeout.",
          "en": "Dismiss toast after timeout."
        },
        "whatToSay": {
          "sv": "Okej, när jag skapar toasten kan jag samtidigt starta en timeout som tar bort just den toasten.",
          "en": "Okay, upon creating a toast I schedule a setTimeout to remove it automatically."
        }
      },
      {
        "id": "type",
        "label": {
          "sv": "Typ",
          "en": "Type"
        },
        "interviewer": {
          "sv": "Låt toasten ha olika typer, till exempel success och error.",
          "en": "Allow toasts to support multiple types, such as success and error."
        },
        "goal": {
          "sv": "Visa olika toast-varianter.",
          "en": "Display distinct toast notification variants."
        },
        "whatToSay": {
          "sv": "Okej, jag lägger type på toast-objektet så UI:t kan styla eller visa olika meddelanden.",
          "en": "Okay, I'll attach a type property to toast objects so the UI can format notification variants."
        }
      }
    ]
  },
  "todo-filter": {
    "interviewPrompt": {
      "sv": "Bygg en todo-lista där todos kan visas som alla, aktiva eller klara.",
      "en": "Build a todo-lista where todos can be filtered as all, active, or completed."
    },
    "currentGoal": {
      "sv": "Visa todos och ett filter.",
      "en": "Display todos and a filter."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med todos som har completed och ett filtervärde som styr vad som visas.",
      "en": "Okay, I initialize todos with completed booleans and track a filter selector in state."
    },
    "features": [
      {
        "id": "toggle",
        "label": {
          "sv": "Toggle",
          "en": "Toggle"
        },
        "interviewer": {
          "sv": "Gör så att en todo kan växla mellan klar och aktiv.",
          "en": "Allow toggling todos between completed and active."
        },
        "goal": {
          "sv": "Uppdatera completed.",
          "en": "Update completed."
        },
        "whatToSay": {
          "sv": "Okej, då behöver todos ligga i state och jag uppdaterar bara den todo som klickas.",
          "en": "Okay, todos are kept in state and I toggle the completed status of the clicked item."
        }
      },
      {
        "id": "count",
        "label": {
          "sv": "Antal",
          "en": "Count"
        },
        "interviewer": {
          "sv": "Visa hur många aktiva todos som finns kvar.",
          "en": "Display how many active todos remain incomplete."
        },
        "goal": {
          "sv": "Räkna aktiva todos.",
          "en": "Count active incomplete todos."
        },
        "whatToSay": {
          "sv": "Okej, då räknar jag todos där completed är false och visar siffran ovanför listan.",
          "en": "Okay, I count items where completed is false and display the metric above the list."
        }
      },
      {
        "id": "clear",
        "label": {
          "sv": "Rensa färdiga",
          "en": "Clear completed"
        },
        "interviewer": {
          "sv": "Lägg till en knapp som tar bort alla klara todos.",
          "en": "Add a button that removes all completed todos."
        },
        "goal": {
          "sv": "Rensa completed todos.",
          "en": "Remove all completed todos at once."
        },
        "whatToSay": {
          "sv": "Okej, då filtrerar jag bort alla todos som redan är klara.",
          "en": "Okay, I filter out completed todos to retain only active tasks."
        }
      }
    ]
  },
  "use-local-storage": {
    "interviewPrompt": {
      "sv": "Bygg en custom hook som sparar state i localStorage.",
      "en": "Build a custom hook that syncs state with localStorage."
    },
    "currentGoal": {
      "sv": "Skapa hooken och använd den i en komponent.",
      "en": "Create the custom hook and consume it within a component."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag bygger en hook som beter sig som useState men läser och skriver mot localStorage.",
      "en": "Okay, I author a custom hook mirroring useState that syncs reads and writes to localStorage."
    },
    "features": [
      {
        "id": "function",
        "label": {
          "sv": "Function update",
          "en": "Function update"
        },
        "interviewer": {
          "sv": "Stöd även setValue med callback, som useState gör.",
          "en": "Support functional setValue callbacks matching useState."
        },
        "goal": {
          "sv": "Stöd funktion som nästa värde.",
          "en": "Support functional state updates."
        },
        "whatToSay": {
          "sv": "Okej, då kontrollerar jag om nextValue är en funktion och räknar ut värdet från current value.",
          "en": "Okay, I inspect whether nextValue is a function and evaluate it with current state."
        }
      },
      {
        "id": "remove",
        "label": {
          "sv": "Remove",
          "en": "Remove"
        },
        "interviewer": {
          "sv": "Lägg till ett sätt att ta bort värdet från localStorage.",
          "en": "Provide a method to clear stored value from localStorage."
        },
        "goal": {
          "sv": "Rensa sparat värde.",
          "en": "Clear persisted storage key."
        },
        "whatToSay": {
          "sv": "Okej, då returnerar jag en remove-funktion som återställer state och tar bort nyckeln.",
          "en": "Okay, I return a remove handler that clears state and removes the localStorage key."
        }
      },
      {
        "id": "safe",
        "label": {
          "sv": "Try/catch",
          "en": "Try/catch"
        },
        "interviewer": {
          "sv": "Hantera trasig JSON utan att appen kraschar.",
          "en": "Handle errors when reading or writing to localStorage."
        },
        "goal": {
          "sv": "Gör hooken mer robust.",
          "en": "Make hooken mer robust."
        },
        "whatToSay": {
          "sv": "Okej, jag wrappar läsningen i try/catch och faller tillbaka till initialValue om parse misslyckas.",
          "en": "Okay, I wrap JSON parsing in a try/catch block, falling back safely to initialValue on parse failure."
        }
      }
    ]
  },
  "utility-functions": {
    "interviewPrompt": {
      "sv": "Skriv en liten utility-funktion i JavaScript.",
      "en": "Write a concise utility helper in JavaScript."
    },
    "currentGoal": {
      "sv": "Implementera funktionen tydligt och testa med ett exempel.",
      "en": "Implement the function clearly and test with an example."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med en ren funktion och ett litet exempel så jag kan se att resultatet blir rätt.",
      "en": "Okay, I start with a pure function and a minimal test case to verify outputs."
    },
    "features": [
      {
        "id": "custom-map",
        "label": {
          "sv": "Egen mappning",
          "en": "Custom mapping"
        },
        "interviewer": {
          "sv": "Skriv en egen version av Array.prototype.map.",
          "en": "Write a custom version of Array.prototype.map."
        },
        "goal": {
          "sv": "Förstå callback och array-iteration.",
          "en": "Demonstrate callbacks in array transformations."
        },
        "whatToSay": {
          "sv": "Okej, jag loopar över arrayen, anropar callbacken och bygger en ny array med resultatet.",
          "en": "Okay, I iterate through the array, execute the callback, and return a new transformed array."
        }
      },
      {
        "id": "debounce",
        "label": {
          "sv": "Debounce",
          "en": "Debounce"
        },
        "interviewer": {
          "sv": "Implementera en debounce-funktion.",
          "en": "Implement a debounce function."
        },
        "goal": {
          "sv": "Fördröja en funktion tills anropen lugnat sig.",
          "en": "Debounce function invocations until input activity settles."
        },
        "whatToSay": {
          "sv": "Okej, jag använder closure för att komma ihåg timeoutId mellan anrop.",
          "en": "Okay, I use closure scoping to preserve the timeout identifier between function calls."
        }
      },
      {
        "id": "flatten",
        "label": {
          "sv": "Flatten",
          "en": "Flatten"
        },
        "interviewer": {
          "sv": "Platta till en nästlad array.",
          "en": "Flatten arbitrarily nested arrays."
        },
        "goal": {
          "sv": "Hantera recursion eller stack.",
          "en": "Handle recursion in JavaScript."
        },
        "whatToSay": {
          "sv": "Okej, jag går igenom varje item och plattar till om itemet också är en array.",
          "en": "Okay, I iterate over each element and recursively flatten items that are arrays."
        }
      }
    ]
  },
  "vanilla-autocomplete": {
    "interviewPrompt": {
      "sv": "Bygg autocomplete med vanlig JavaScript.",
      "en": "Build autocomplete with vanilla JavaScript."
    },
    "currentGoal": {
      "sv": "Filtrera förslag när användaren skriver.",
      "en": "Filter suggestions dynamically as the user types."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag lyssnar på input och renderar förslag som matchar texten.",
      "en": "Okay, I'll listen for input events and render suggestions matching the entered text."
    },
    "features": [
      {
        "id": "keyboard",
        "label": {
          "sv": "Keyboard",
          "en": "Keyboard"
        },
        "interviewer": {
          "sv": "Lägg till aktivt index så användaren kan navigera med tangentbord.",
          "en": "Track active index for keyboard navigation."
        },
        "goal": {
          "sv": "Hålla koll på markerat förslag.",
          "en": "Track currently highlighted suggestion."
        },
        "whatToSay": {
          "sv": "Okej, activeIndex sparar vilken rad som är markerad just nu.",
          "en": "Okay, activeIndex keeps track of which suggestion is currently focused."
        }
      },
      {
        "id": "empty",
        "label": {
          "sv": "Tom lista",
          "en": "Empty list"
        },
        "interviewer": {
          "sv": "Visa ett meddelande när det inte finns några förslag.",
          "en": "Show a message when no suggestions are available."
        },
        "goal": {
          "sv": "Hantera tomt resultat.",
          "en": "Handle empty search results."
        },
        "whatToSay": {
          "sv": "Okej, om matches är tom visar jag text istället för en tom lista.",
          "en": "Okay, when matches is empty I render an empty notice instead of a blank container."
        }
      }
    ]
  },
  "vanilla-counter": {
    "interviewPrompt": {
      "sv": "Bygg en counter med vanlig JavaScript som kan öka värdet.",
      "en": "Build a counter with vanilla JavaScript that increments value."
    },
    "currentGoal": {
      "sv": "Uppdatera DOM:en när användaren klickar.",
      "en": "Update the DOM on user click events."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar värdet i en variabel och renderar om texten när knappen klickas.",
      "en": "Okay, I track count in a variable and re-render DOM text content upon button clicks."
    },
    "features": [
      {
        "id": "reset",
        "label": {
          "sv": "Reset",
          "en": "Reset"
        },
        "interviewer": {
          "sv": "Lägg till en reset-knapp.",
          "en": "Add a reset button."
        },
        "goal": {
          "sv": "Sätt tillbaka countern till noll.",
          "en": "Reset counter back to zero."
        },
        "whatToSay": {
          "sv": "Okej, reset behöver ändra samma count-värde och sedan rendera om.",
          "en": "Okay, reset resets count back to zero and updates the DOM text."
        }
      },
      {
        "id": "step",
        "label": {
          "sv": "Step",
          "en": "Step"
        },
        "interviewer": {
          "sv": "Låt användaren välja hur mycket värdet ska öka.",
          "en": "Allow user to customize increment step size."
        },
        "goal": {
          "sv": "Läs step från ett inputfält.",
          "en": "Read step size from an input field."
        },
        "whatToSay": {
          "sv": "Okej, jag läser inputvärdet som number innan jag uppdaterar count.",
          "en": "Okay, I parse the input value as a number before adding it to count."
        }
      }
    ]
  },
  "vanilla-fetch-sort": {
    "interviewPrompt": {
      "sv": "Hämta data med vanlig JavaScript och visa den i en lista.",
      "en": "Fetch data with vanilla JavaScript and render it in a list."
    },
    "currentGoal": {
      "sv": "Hämta, hantera loading och rendera resultatet.",
      "en": "Fetch data, manage loading status, and render results."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag visar loading först och byter sedan till listan när fetch är klar.",
      "en": "Okay, I present loading feedback upfront and switch to rendering the list once fetch resolves."
    },
    "features": [
      {
        "id": "error",
        "label": {
          "sv": "Error",
          "en": "Error"
        },
        "interviewer": {
          "sv": "Lägg till felhantering om API:t misslyckas.",
          "en": "Add error handling if the API request fails."
        },
        "goal": {
          "sv": "Visa ett tydligt felmeddelande.",
          "en": "Display a clear error message."
        },
        "whatToSay": {
          "sv": "Okej, jag fångar felet och visar ett state som går att förstå.",
          "en": "Okay, I catch network errors and render an informative error state."
        }
      },
      {
        "id": "search",
        "label": {
          "sv": "Sök",
          "en": "Search"
        },
        "interviewer": {
          "sv": "Lägg till sök i listan.",
          "en": "Add search filtering to the list."
        },
        "goal": {
          "sv": "Filtrera listan innan rendering.",
          "en": "Filter the list before rendering."
        },
        "whatToSay": {
          "sv": "Okej, jag låter söktexten påverka vilken lista renderUsers visar.",
          "en": "Okay, I filter the user list based on search text before rendering rows."
        }
      },
      {
        "id": "sort",
        "label": {
          "sv": "Sortering",
          "en": "Sort"
        },
        "interviewer": {
          "sv": "Lägg till sortering på namn.",
          "en": "Add alphabetical sorting by name."
        },
        "goal": {
          "sv": "Sortera kopia av listan.",
          "en": "Sort a copy of the list."
        },
        "whatToSay": {
          "sv": "Okej, jag sorterar en kopia så originaldatan finns kvar.",
          "en": "Okay, I sort a shallow copy of the list so original records remain untainted."
        }
      },
      {
        "id": "pagination",
        "label": {
          "sv": "Pagination",
          "en": "Pagination"
        },
        "interviewer": {
          "sv": "Visa bara fem användare per sida.",
          "en": "Display only five users per page."
        },
        "goal": {
          "sv": "Räkna ut slice för aktiv sida.",
          "en": "Compute the slice boundaries for the current page."
        },
        "whatToSay": {
          "sv": "Okej, page och pageSize räcker för att räkna ut vilka rader som ska synas.",
          "en": "Okay, page and pageSize are sufficient to slice the subset of rows to display."
        }
      }
    ]
  },
  "vanilla-form-validation": {
    "interviewPrompt": {
      "sv": "Bygg formulärvalidering med vanlig JavaScript.",
      "en": "Build form validation using vanilla JavaScript."
    },
    "currentGoal": {
      "sv": "Validera required-fält innan formuläret skickas.",
      "en": "Validate required fields prior to form submission."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag lyssnar på submit och stoppar formuläret om värdet saknas.",
      "en": "Okay, I'll listen for submit, prevent default submission, and display an error if the field is empty."
    },
    "features": [
      {
        "id": "email",
        "label": {
          "sv": "Email",
          "en": "Email"
        },
        "interviewer": {
          "sv": "Kontrollera att email ser giltig ut.",
          "en": "Verify that email format is valid."
        },
        "goal": {
          "sv": "Visa fel om email saknar @.",
          "en": "Display an error if email is missing the @ symbol."
        },
        "whatToSay": {
          "sv": "Okej, jag lägger till ett tydligt villkor för email-formatet.",
          "en": "Okay, I'll enforce an explicit condition verifying valid email format."
        }
      },
      {
        "id": "password",
        "label": {
          "sv": "Password",
          "en": "Password"
        },
        "interviewer": {
          "sv": "Lägg till validering för lösenordslängd.",
          "en": "Add minimum length validation for passwords."
        },
        "goal": {
          "sv": "Kräva minst åtta tecken.",
          "en": "Require at least eight characters."
        },
        "whatToSay": {
          "sv": "Okej, lösenordet får ett eget villkor så felet blir lätt att förstå.",
          "en": "Okay, password receives its own validation check with tailored error feedback."
        }
      }
    ]
  },
  "vanilla-image-gallery": {
    "interviewPrompt": {
      "sv": "Bygg ett bildgalleri med vanlig JavaScript.",
      "en": "Build a bildgalleri with vanilla JavaScript."
    },
    "currentGoal": {
      "sv": "Visa en aktiv bild och byt till nästa.",
      "en": "Display the active image and navigate to next."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar aktivt index och renderar bilden från arrayen.",
      "en": "Okay, I'll store activeIndex in state and render the active image from the array."
    },
    "features": [
      {
        "id": "loop",
        "label": {
          "sv": "Loop",
          "en": "Loop"
        },
        "interviewer": {
          "sv": "När användaren går förbi sista bilden ska galleriet börja om.",
          "en": "When navigating past the last image, loop back to the beginning."
        },
        "goal": {
          "sv": "Loopa indexet.",
          "en": "Loopa indexet."
        },
        "whatToSay": {
          "sv": "Okej, modulo gör att indexet börjar om när det passerar sista bilden.",
          "en": "Okay, modulo wrapping ensures the image index loops back to the start."
        }
      },
      {
        "id": "previous",
        "label": {
          "sv": "Föregående",
          "en": "Previous"
        },
        "interviewer": {
          "sv": "Lägg till en föregående-knapp.",
          "en": "Add a previous button."
        },
        "goal": {
          "sv": "Kunna gå bakåt i listan.",
          "en": "Navigate backwards in the image list."
        },
        "whatToSay": {
          "sv": "Okej, jag minskar indexet och loopar tillbaka till sista bilden vid behov.",
          "en": "Okay, in decreases indexet and loopar tillbaka to sista the image vid behov."
        }
      }
    ]
  },
  "vanilla-shopping-cart": {
    "interviewPrompt": {
      "sv": "Bygg en enkel kundvagn med vanlig JavaScript.",
      "en": "Build a straightforward shopping cart using vanilla JavaScript."
    },
    "currentGoal": {
      "sv": "Lägg produkter i cart och rendera listan.",
      "en": "Add products to shopping cart and render the cart list."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag låter cart-arrayen vara datan och renderar DOM:en från den.",
      "en": "Okay, I treat the cart array as source data and render the DOM dynamically from it."
    },
    "features": [
      {
        "id": "quantity",
        "label": {
          "sv": "Quantity",
          "en": "Quantity"
        },
        "interviewer": {
          "sv": "Om produkten redan finns ska quantity öka.",
          "en": "If the product is already in cart, increment quantity."
        },
        "goal": {
          "sv": "Hantera antal per cart-rad.",
          "en": "Manage item quantities per cart line item."
        },
        "whatToSay": {
          "sv": "Okej, jag letar efter befintlig produkt och uppdaterar quantity om den redan finns.",
          "en": "Okay, I locate the existing product and increment quantity if it is already in the cart."
        }
      },
      {
        "id": "total",
        "label": {
          "sv": "Total",
          "en": "Total"
        },
        "interviewer": {
          "sv": "Visa totalpris för carten.",
          "en": "Display total price for the shopping cart."
        },
        "goal": {
          "sv": "Summera pris och quantity.",
          "en": "Summera price and quantity."
        },
        "whatToSay": {
          "sv": "Okej, totalen räknas från cart-arrayen eftersom den är sanningen för valet.",
          "en": "Okay, total price is derived from cart items as the single source of truth."
        }
      }
    ]
  },
  "vanilla-todo-crud": {
    "interviewPrompt": {
      "sv": "Bygg en todo-lista i vanlig JavaScript där användaren kan lägga till saker.",
      "en": "Build a todo-lista in vanilla JavaScript where the user can add items."
    },
    "currentGoal": {
      "sv": "Lägg till todos och rendera listan.",
      "en": "Add todos and rendera the list."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag låter arrayen vara datan och bygger listans HTML från den.",
      "en": "Okay, in allows arrayen vara data and builds listans HTML from it."
    },
    "features": [
      {
        "id": "complete",
        "label": {
          "sv": "Complete",
          "en": "Complete"
        },
        "interviewer": {
          "sv": "Lägg till så att en todo kan markeras som klar.",
          "en": "Add so that a todo can markeras that klar."
        },
        "goal": {
          "sv": "Toggla done på rätt item.",
          "en": "Toggle done status on target item."
        },
        "whatToSay": {
          "sv": "Okej, jag använder id:t för att ändra rätt todo utan att röra resten.",
          "en": "Okay, I target the specific todo item by id without altering other items."
        }
      },
      {
        "id": "edit",
        "label": {
          "sv": "Edit",
          "en": "Edit"
        },
        "interviewer": {
          "sv": "Lägg till redigering av en todo.",
          "en": "Add redigering of a todo."
        },
        "goal": {
          "sv": "Uppdatera texten på en befintlig todo.",
          "en": "Update title text on an existing todo item."
        },
        "whatToSay": {
          "sv": "Okej, edit ändrar bara texten på det item som matchar id:t.",
          "en": "Okay, edit only modifies the title text for the matching item id."
        }
      },
      {
        "id": "delete",
        "label": {
          "sv": "Delete",
          "en": "Delete"
        },
        "interviewer": {
          "sv": "Lägg till så att användaren kan ta bort en todo.",
          "en": "Allow the user to delete a todo item."
        },
        "goal": {
          "sv": "Filtrera bort rätt item.",
          "en": "Filter out the target item."
        },
        "whatToSay": {
          "sv": "Okej, delete kan göras genom att filtrera bort rätt id.",
          "en": "Okay, deletion is handled by filtering out the matching item id."
        }
      }
    ]
  },
  "vanilla-ui-components": {
    "interviewPrompt": {
      "sv": "Bygg en modal med vanlig JavaScript som kan öppnas och stängas.",
      "en": "Build a modal dialog with vanilla JavaScript that can open and close."
    },
    "currentGoal": {
      "sv": "Styra synlighet med klass och klick.",
      "en": "Control visibility using classes and click handlers."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag hämtar knapparna och låter en klass avgöra om modalen syns.",
      "en": "Okay, I select button elements and toggle a CSS class to show or hide the modal."
    },
    "features": [
      {
        "id": "escape",
        "label": {
          "sv": "Escape",
          "en": "Escape"
        },
        "interviewer": {
          "sv": "Stäng modalen med Escape.",
          "en": "Dismiss modal when pressing Escape."
        },
        "goal": {
          "sv": "Lyssna på keyboard event.",
          "en": "Listen for keyboard events."
        },
        "whatToSay": {
          "sv": "Okej, Escape är ett globalt tangenttryck så jag lyssnar på document.",
          "en": "Okay, Escape is a global keyboard event so I listen on document."
        }
      },
      {
        "id": "outside",
        "label": {
          "sv": "Klick utanför",
          "en": "Click outside"
        },
        "interviewer": {
          "sv": "Stäng modalen när användaren klickar utanför innehållet.",
          "en": "Close the modal when clicking outside its content container."
        },
        "goal": {
          "sv": "Jämför klickets target med overlayn.",
          "en": "Compare event target against the modal backdrop overlay."
        },
        "whatToSay": {
          "sv": "Okej, om klicket träffar overlayn stänger jag modalen.",
          "en": "Okay, if the click target matches the backdrop overlay, I close the modal."
        }
      },
      {
        "id": "tabs",
        "label": {
          "sv": "Tabs",
          "en": "Tabs"
        },
        "interviewer": {
          "sv": "Bygg tabs som byter aktivt innehåll.",
          "en": "Build tab navigation that switches active content panels."
        },
        "goal": {
          "sv": "Spara aktiv tab i DOM:en.",
          "en": "Store active tab index in the DOM."
        },
        "whatToSay": {
          "sv": "Okej, varje tab får berätta vilket panel-id som ska visas.",
          "en": "Okay, each tab indicates which panel id should be displayed."
        }
      },
      {
        "id": "carousel",
        "label": {
          "sv": "Slider",
          "en": "Slider"
        },
        "interviewer": {
          "sv": "Lägg till en enkel bild-slider.",
          "en": "Add a simple image carousel."
        },
        "goal": {
          "sv": "Visa nästa bild och loopa tillbaka.",
          "en": "Display the next image with loop-around navigation."
        },
        "whatToSay": {
          "sv": "Okej, indexet styr vilken bild som visas och modulo gör loopen enkel.",
          "en": "Okay, the active index selects the displayed image, and modulo makes circular navigation clean."
        }
      }
    ]
  },
  "vue-autocomplete": {
    "interviewPrompt": {
      "sv": "Bygg autocomplete i Vue.",
      "en": "Build autocomplete i Vue."
    },
    "currentGoal": {
      "sv": "Filtrera förslag med computed.",
      "en": "Filter autocomplete suggestions using computed properties."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar söktexten med v-model och räknar fram förslagen i computed.",
      "en": "Okay, I bind search query using v-model and derive suggestions via computed."
    },
    "features": [
      {
        "id": "select",
        "label": {
          "sv": "Välj",
          "en": "Select"
        },
        "interviewer": {
          "sv": "Låt användaren klicka på ett förslag.",
          "en": "Allow the user to click a suggestion."
        },
        "goal": {
          "sv": "Sätta inputens värde från valt förslag.",
          "en": "Set the input value from the selected suggestion."
        },
        "whatToSay": {
          "sv": "Okej, klicket sätter search till valt förslag.",
          "en": "Okay, klicket sets search to valt suggestions."
        }
      },
      {
        "id": "empty",
        "label": {
          "sv": "Tom lista",
          "en": "Empty list"
        },
        "interviewer": {
          "sv": "Visa text när inga förslag matchar.",
          "en": "Display a message when no suggestions match."
        },
        "goal": {
          "sv": "Hantera tomt resultat.",
          "en": "Handle empty search results."
        },
        "whatToSay": {
          "sv": "Okej, v-if passar när jag vill visa tomt läge istället för listan.",
          "en": "Okay, v-if is ideal for displaying an empty state instead of the list."
        }
      }
    ]
  },
  "vue-component": {
    "interviewPrompt": {
      "sv": "Bygg en Vue-komponent som visar en lista med produkter.",
      "en": "Build a Vue component displaying a list of products."
    },
    "currentGoal": {
      "sv": "Rendera produkter med Vue template-syntax.",
      "en": "Render products using Vue template syntax."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med en products-array och renderar varje produkt med v-for.",
      "en": "Okay, I'll start with a products array and render each product with v-for."
    },
    "features": [
      {
        "id": "search",
        "label": {
          "sv": "Sök",
          "en": "Search"
        },
        "interviewer": {
          "sv": "Lägg till sök i Vue-komponenten.",
          "en": "Add search functionality to the Vue component."
        },
        "goal": {
          "sv": "Filtrera produkter med computed.",
          "en": "Filter products using computed properties."
        },
        "whatToSay": {
          "sv": "Okej, jag sparar söktexten i data och använder computed för listan som ska visas.",
          "en": "Okay, I store search text in data and compute the displayed list reactively."
        }
      },
      {
        "id": "empty",
        "label": {
          "sv": "Tom lista",
          "en": "Empty list"
        },
        "interviewer": {
          "sv": "Visa ett meddelande när sökningen inte matchar något.",
          "en": "Display a message when the search yields no results."
        },
        "goal": {
          "sv": "Hantera tomt resultat i Vue.",
          "en": "Handle empty search results in Vue."
        },
        "whatToSay": {
          "sv": "Okej, jag använder v-if för tomt läge och v-else för listan.",
          "en": "Okay, I'll use v-if for the empty state and v-else for the product list."
        }
      }
    ]
  },
  "vue-composable": {
    "interviewPrompt": {
      "sv": "Bygg en composable som hanterar en counter.",
      "en": "Build a composable function that manages counter state."
    },
    "currentGoal": {
      "sv": "Flytta återanvändbar state-logik till en composable.",
      "en": "Extract reusable state logic into a composable."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag lägger counter-logiken i en useCounter-funktion så komponenten bara använder API:t.",
      "en": "Okay, I extract counter state into a useCounter composable so the component simply consumes its API."
    },
    "features": [
      {
        "id": "decrease",
        "label": {
          "sv": "Minska",
          "en": "Decrease"
        },
        "interviewer": {
          "sv": "Lägg till decrease i composablen.",
          "en": "Add decrease i composablen."
        },
        "goal": {
          "sv": "Exponera fler funktioner från composablen.",
          "en": "Exponera fler funktioner from composablen."
        },
        "whatToSay": {
          "sv": "Okej, decrease hör hemma i composablen eftersom den ändrar samma count-state.",
          "en": "Okay, decrease belongs inside the composable because it mutates unified count state."
        }
      },
      {
        "id": "reset",
        "label": {
          "sv": "Reset",
          "en": "Reset"
        },
        "interviewer": {
          "sv": "Lägg till reset.",
          "en": "Add reset."
        },
        "goal": {
          "sv": "Återställa count från composablen.",
          "en": "Reset count through the composable."
        },
        "whatToSay": {
          "sv": "Okej, reset blir en liten funktion som sätter ref-värdet till noll.",
          "en": "Okay, reset will be a concise helper that resets the reactive ref back to zero."
        }
      }
    ]
  },
  "vue-counter": {
    "interviewPrompt": {
      "sv": "Bygg en Vue-counter som kan öka värdet.",
      "en": "Build a Vue-counter that can increment the count."
    },
    "currentGoal": {
      "sv": "Visa ett värde och uppdatera det vid klick.",
      "en": "Display a value and update it on click."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar count i data och låter klicket uppdatera värdet.",
      "en": "Okay, I'll store count in data and let click events update the value."
    },
    "features": [
      {
        "id": "decrease",
        "label": {
          "sv": "Minska",
          "en": "Decrease"
        },
        "interviewer": {
          "sv": "Lägg till en knapp som minskar värdet.",
          "en": "Add a button that decreases the value."
        },
        "goal": {
          "sv": "Kunna ändra count åt båda håll.",
          "en": "Modify counter in both directions."
        },
        "whatToSay": {
          "sv": "Okej, minusknappen ändrar samma count-värde i data.",
          "en": "Okay, the decrement button modifies the same reactive count property."
        }
      },
      {
        "id": "reset",
        "label": {
          "sv": "Reset",
          "en": "Reset"
        },
        "interviewer": {
          "sv": "Lägg till reset.",
          "en": "Add reset."
        },
        "goal": {
          "sv": "Sätta tillbaka count till noll.",
          "en": "Reset count value back to zero."
        },
        "whatToSay": {
          "sv": "Okej, reset sätter count tillbaka till startvärdet.",
          "en": "Okay, reset restores count back to its initial value."
        }
      }
    ]
  },
  "vue-custom-directive": {
    "interviewPrompt": {
      "sv": "Bygg ett inputfält med en egen focus-directive.",
      "en": "Build an input field with a custom auto-focus directive."
    },
    "currentGoal": {
      "sv": "Fokusera input när komponenten mountas.",
      "en": "Focus the input field when component mounts."
    },
    "baseWhatToSay": {
      "sv": "Okej, en custom directive passar när DOM-beteendet ska återanvändas utan att ligga i komponenten.",
      "en": "Okay, a custom directive is ideal when DOM behavior should be reusable across components."
    },
    "features": [
      {
        "id": "select-text",
        "label": {
          "sv": "Select text",
          "en": "Select text"
        },
        "interviewer": {
          "sv": "Markera även texten i inputfältet.",
          "en": "Also select all text inside the input field."
        },
        "goal": {
          "sv": "Utöka direktivets DOM-beteende.",
          "en": "Extend directive DOM manipulation capabilities."
        },
        "whatToSay": {
          "sv": "Okej, efter focus kan jag anropa select om elementet stödjer det.",
          "en": "Okay, after focusing the element I call select if supported."
        }
      },
      {
        "id": "modifier",
        "label": {
          "sv": "Modifier",
          "en": "Modifier"
        },
        "interviewer": {
          "sv": "Gör select valbart med en modifier.",
          "en": "Make select valbart with a modifier."
        },
        "goal": {
          "sv": "Styra direktivet från templaten.",
          "en": "Control the directive dynamically from the template."
        },
        "whatToSay": {
          "sv": "Okej, modifiers gör att samma directive kan användas på två sätt.",
          "en": "Okay, directive modifiers allow the same directive to support optional modes."
        }
      },
      {
        "id": "delay",
        "label": {
          "sv": "Delay",
          "en": "Delay"
        },
        "interviewer": {
          "sv": "Lägg till delay innan focus.",
          "en": "Add delay before triggering focus."
        },
        "goal": {
          "sv": "Fokusera efter animation eller render.",
          "en": "Focus after animation or render completes."
        },
        "whatToSay": {
          "sv": "Okej, binding.value kan styra hur länge direktivet väntar.",
          "en": "Okay, binding.value controls the directive's debounce delay duration."
        }
      }
    ]
  },
  "vue-dynamic-table": {
    "interviewPrompt": {
      "sv": "Bygg en Vue-tabell som visar användare.",
      "en": "Build a Vue table displaying users."
    },
    "currentGoal": {
      "sv": "Rendera tabellrader från data.",
      "en": "Rendera tabellrader from data."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med en users-array och låter v-for skapa raderna.",
      "en": "Okay, I'll start with a users collection and let v-for render the rows."
    },
    "features": [
      {
        "id": "sort",
        "label": {
          "sv": "Sortering",
          "en": "Sort"
        },
        "interviewer": {
          "sv": "Lägg till sortering på namn.",
          "en": "Add alphabetical sorting by name."
        },
        "goal": {
          "sv": "Sortera tabellen med computed.",
          "en": "Sort table rows using computed properties."
        },
        "whatToSay": {
          "sv": "Okej, jag sorterar en kopia så users inte ändras direkt.",
          "en": "Okay, I sort a shallow copy of users to preserve source data integrity."
        }
      },
      {
        "id": "filter",
        "label": {
          "sv": "Filter",
          "en": "Filter"
        },
        "interviewer": {
          "sv": "Lägg till filter på roll.",
          "en": "Add filtering by user role."
        },
        "goal": {
          "sv": "Visa bara användare med vald roll.",
          "en": "Display only users matching the chosen role."
        },
        "whatToSay": {
          "sv": "Okej, vald roll får styra vilka rader som visas.",
          "en": "Okay, the selected role will filter which rows appear in the view."
        }
      },
      {
        "id": "pagination",
        "label": {
          "sv": "Pagination",
          "en": "Pagination"
        },
        "interviewer": {
          "sv": "Lägg till pagination.",
          "en": "Add pagination."
        },
        "goal": {
          "sv": "Visa ett begränsat antal rader per sida.",
          "en": "Display a limited number of rows per page."
        },
        "whatToSay": {
          "sv": "Okej, page och pageSize räcker för att ta ut rätt slice.",
          "en": "Okay, page and pageSize are sufficient to extract the correct page slice."
        }
      }
    ]
  },
  "vue-fetch-cart": {
    "interviewPrompt": {
      "sv": "Bygg en Vue-vy som hämtar produkter och visar dem.",
      "en": "Build a Vue-vy that fetches products and displays them."
    },
    "currentGoal": {
      "sv": "Hämta data när komponenten mountas.",
      "en": "Fetch data when component is mounted."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag använder mounted för att hämta produkterna när vyn är redo.",
      "en": "Okay, I use the mounted lifecycle hook to fetch products once the view is ready."
    },
    "features": [
      {
        "id": "error",
        "label": {
          "sv": "Error",
          "en": "Error"
        },
        "interviewer": {
          "sv": "Lägg till felhantering.",
          "en": "Add felhantering."
        },
        "goal": {
          "sv": "Visa felmeddelande vid misslyckat anrop.",
          "en": "Display an error message on failed request."
        },
        "whatToSay": {
          "sv": "Okej, try/catch gör att UI:t kan visa ett fel istället för att fastna.",
          "en": "Okay, try/catch ensures the UI displays an error notice instead of hanging."
        }
      },
      {
        "id": "cart",
        "label": {
          "sv": "Cart",
          "en": "Cart"
        },
        "interviewer": {
          "sv": "Lägg till en enkel varukorg.",
          "en": "Add a simple shopping cart."
        },
        "goal": {
          "sv": "Spara valda produkter och räkna total.",
          "en": "Save selected products and derive the total cost."
        },
        "whatToSay": {
          "sv": "Okej, cart blir en egen lista och totalen räknas från den.",
          "en": "Okay, cart is tracked as its own list and total price is derived from it."
        }
      },
      {
        "id": "quantity",
        "label": {
          "sv": "Quantity",
          "en": "Quantity"
        },
        "interviewer": {
          "sv": "Låt användaren ändra quantity i cart.",
          "en": "Allow the user to adjust item quantity in cart."
        },
        "goal": {
          "sv": "Uppdatera quantity på rätt rad.",
          "en": "Update quantity on the selected line item."
        },
        "whatToSay": {
          "sv": "Okej, quantity gör att samma produkt kan ha ett tydligt antal.",
          "en": "Okay, tracking quantity ensures duplicate product additions update count cleanly."
        }
      }
    ]
  },
  "vue-form-validation": {
    "interviewPrompt": {
      "sv": "Bygg ett Vue-formulär med enkel validering.",
      "en": "Build a Vue form with simple validation."
    },
    "currentGoal": {
      "sv": "Validera email innan formuläret skickas.",
      "en": "Validate email format before submitting the form."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag kopplar input till data med v-model och validerar i submit-funktionen.",
      "en": "Okay, I'll bind inputs to reactive data with v-model and validate within the submit handler."
    },
    "features": [
      {
        "id": "password",
        "label": {
          "sv": "Password",
          "en": "Password"
        },
        "interviewer": {
          "sv": "Lägg till lösenordsvalidering.",
          "en": "Add password validation."
        },
        "goal": {
          "sv": "Kräva minst åtta tecken.",
          "en": "Require at least eight characters."
        },
        "whatToSay": {
          "sv": "Okej, lösenordet får eget state och ett eget felvillkor.",
          "en": "Okay, password receives dedicated state and tailored validation rules."
        }
      }
    ]
  },
  "vue-image-gallery": {
    "interviewPrompt": {
      "sv": "Bygg ett bildgalleri i Vue.",
      "en": "Build a bildgalleri i Vue."
    },
    "currentGoal": {
      "sv": "Visa aktiv bild och byt till nästa.",
      "en": "Display active image and switch to next."
    },
    "baseWhatToSay": {
      "sv": "Okej, activeIndex styr vilken bild som visas i templaten.",
      "en": "Okay, activeIndex determines which image is rendered in the template."
    },
    "features": [
      {
        "id": "loop",
        "label": {
          "sv": "Loop",
          "en": "Loop"
        },
        "interviewer": {
          "sv": "Loopa tillbaka till första bilden efter sista.",
          "en": "Loop back to the first image after the last."
        },
        "goal": {
          "sv": "Hålla index inom arrayen.",
          "en": "Keep the index within array bounds."
        },
        "whatToSay": {
          "sv": "Okej, modulo håller activeIndex inom bildernas längd.",
          "en": "Okay, modulo wrapping keeps activeIndex safely within gallery bounds."
        }
      },
      {
        "id": "thumbs",
        "label": {
          "sv": "Thumbnails",
          "en": "Thumbnails"
        },
        "interviewer": {
          "sv": "Visa thumbnails som kan välja aktiv bild.",
          "en": "Display thumbnails that allow choosing the active image."
        },
        "goal": {
          "sv": "Hoppa direkt till vald bild.",
          "en": "Jump directly to the selected image."
        },
        "whatToSay": {
          "sv": "Okej, varje thumbnail sätter activeIndex till sin egen position.",
          "en": "Okay, each thumbnail sets activeIndex to its corresponding position."
        }
      }
    ]
  },
  "vue-provide-inject": {
    "interviewPrompt": {
      "sv": "Dela theme-state med provide och inject.",
      "en": "Share theme state across components using provide and inject."
    },
    "currentGoal": {
      "sv": "Låta en child-komponent läsa theme utan props.",
      "en": "Allow a child component to read theme without prop drilling."
    },
    "baseWhatToSay": {
      "sv": "Okej, provide/inject passar när flera nivåer behöver samma värde utan prop drilling.",
      "en": "Okay, provide and inject is ideal when deeply nested components require state without prop drilling."
    },
    "features": [
      {
        "id": "reactive",
        "label": {
          "sv": "Reaktivt",
          "en": "Reactive state"
        },
        "interviewer": {
          "sv": "Gör theme reaktivt.",
          "en": "Make theme reactive."
        },
        "goal": {
          "sv": "Uppdatera child när theme ändras.",
          "en": "Update child component when theme updates."
        },
        "whatToSay": {
          "sv": "Okej, jag behöver provide:a ett reaktivt värde istället för en statisk sträng.",
          "en": "Okay, I must provide a reactive ref rather than a static string literal."
        }
      },
      {
        "id": "toggle",
        "label": {
          "sv": "Toggle",
          "en": "Toggle"
        },
        "interviewer": {
          "sv": "Låt child toggla theme.",
          "en": "Allow child toggla theme."
        },
        "goal": {
          "sv": "Dela både värde och action.",
          "en": "Share both theme state and update action."
        },
        "whatToSay": {
          "sv": "Okej, då skickar jag med en funktion tillsammans med värdet.",
          "en": "Okay, then kickar in with a function tillsammans with the value."
        }
      },
      {
        "id": "fallback",
        "label": {
          "sv": "Fallback",
          "en": "Fallback"
        },
        "interviewer": {
          "sv": "Lägg till fallback om provider saknas.",
          "en": "Add a fallback value when provider is missing."
        },
        "goal": {
          "sv": "Undvika att child kraschar.",
          "en": "Prevent child component from crashing when context is absent."
        },
        "whatToSay": {
          "sv": "Okej, inject kan få ett defaultvärde om komponenten används utan provider.",
          "en": "Okay, inject can specify a fallback default if used outside a provider."
        }
      }
    ]
  },
  "vue-todo-app": {
    "interviewPrompt": {
      "sv": "Bygg en todo-lista i Vue där användaren kan lägga till uppgifter.",
      "en": "Build a todo-lista i Vue where the user can add tasks."
    },
    "currentGoal": {
      "sv": "Använd v-model och v-for för en enkel todo-lista.",
      "en": "Use v-model and v-for to build a straightforward todo list."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar input och todos i data och renderar listan med v-for.",
      "en": "Okay, I'll store input text and todos in reactive state and render the list with v-for."
    },
    "features": [
      {
        "id": "complete",
        "label": {
          "sv": "Complete",
          "en": "Complete"
        },
        "interviewer": {
          "sv": "Lägg till så att en todo kan markeras som klar.",
          "en": "Add so that a todo can markeras that klar."
        },
        "goal": {
          "sv": "Toggla done på rätt todo.",
          "en": "Toggle done on the target todo."
        },
        "whatToSay": {
          "sv": "Okej, todo-objektet får ett done-värde som vyn kan reagera på.",
          "en": "Okay, each todo item receives a reactive done property for the view to track."
        }
      },
      {
        "id": "filter",
        "label": {
          "sv": "Filter",
          "en": "Filter"
        },
        "interviewer": {
          "sv": "Lägg till filter för alla, aktiva och klara todos.",
          "en": "Add filters for all, active, and completed todos."
        },
        "goal": {
          "sv": "Använd computed för synliga todos.",
          "en": "Use computed properties for visible todos."
        },
        "whatToSay": {
          "sv": "Okej, computed passar när listan ska räknas fram från befintlig data.",
          "en": "Okay, computed is ideal when deriving a filtered list from existing data."
        }
      },
      {
        "id": "delete",
        "label": {
          "sv": "Delete",
          "en": "Delete"
        },
        "interviewer": {
          "sv": "Lägg till delete.",
          "en": "Add delete."
        },
        "goal": {
          "sv": "Ta bort rätt todo från listan.",
          "en": "Remove the target todo from the list."
        },
        "whatToSay": {
          "sv": "Okej, jag filtrerar bort den todo som matchar id:t.",
          "en": "Okay, I'll filter out the todo matching the specified id."
        }
      }
    ]
  },
  "vue-ui-components": {
    "interviewPrompt": {
      "sv": "Bygg en enkel Vue-modal.",
      "en": "Build a straightforward Vue modal dialog."
    },
    "currentGoal": {
      "sv": "Öppna och stäng en modal med state.",
      "en": "Open and close a modal using reactive state."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag sparar om modalen är öppen och använder v-if för att visa den.",
      "en": "Okay, I track modal visibility in state and render it conditionally with v-if."
    },
    "features": [
      {
        "id": "tabs",
        "label": {
          "sv": "Tabs",
          "en": "Tabs"
        },
        "interviewer": {
          "sv": "Bygg tabs med aktiv flik.",
          "en": "Build tabs with an active tab indicator."
        },
        "goal": {
          "sv": "Byta innehåll med state.",
          "en": "Toggle visible content using reactive state."
        },
        "whatToSay": {
          "sv": "Okej, aktiv flik blir ett värde i data och templaten visar rätt innehåll.",
          "en": "Okay, active tab is tracked in component data and template renders matching content."
        }
      },
      {
        "id": "accordion",
        "label": {
          "sv": "Accordion",
          "en": "Accordion"
        },
        "interviewer": {
          "sv": "Bygg en accordion där en rad kan öppnas.",
          "en": "Build an accordion where one panel can expand."
        },
        "goal": {
          "sv": "Visa svar för aktiv fråga.",
          "en": "Display the answer for the active question."
        },
        "whatToSay": {
          "sv": "Okej, jag sparar id:t för den öppna raden och jämför det i templaten.",
          "en": "Okay, I track open panel id and evaluate it in template expressions."
        }
      }
    ]
  },
  "vue-utility-functions": {
    "interviewPrompt": {
      "sv": "Bygg en Vue-komponent som använder utility-funktioner för att forma data.",
      "en": "Build a Vue component using utility functions to shape data."
    },
    "currentGoal": {
      "sv": "Rendera data som först går genom en ren hjälpfunktion.",
      "en": "Render data formatted by a pure helper function."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag håller hjälpfunktionen separat och använder computed när komponenten behöver läsa resultatet.",
      "en": "Okay, I keep pure helpers separate and consume derived outputs through computed properties."
    },
    "features": [
      {
        "id": "custom-map",
        "label": {
          "sv": "Egen mappning",
          "en": "Custom mapping"
        },
        "interviewer": {
          "sv": "Skriv en egen map-funktion och använd den i computed.",
          "en": "Write a custom map implementation and consume it within computed properties."
        },
        "goal": {
          "sv": "Visa callbacks i Vue-flödet.",
          "en": "Demonstrate callbacks in Vue component logic."
        },
        "whatToSay": {
          "sv": "Okej, helpern returnerar en ny array och computed använder den när templaten renderas.",
          "en": "Okay, the helper returns a new array and computed properties pass it to the template."
        }
      },
      {
        "id": "debounce",
        "label": {
          "sv": "Debounce",
          "en": "Debounce"
        },
        "interviewer": {
          "sv": "Lägg till debounce för en sökmetod i Vue.",
          "en": "Add debounce to a Vue search method."
        },
        "goal": {
          "sv": "Fördröja en metod utan att förlora argumenten.",
          "en": "Debounce a method while preserving its arguments."
        },
        "whatToSay": {
          "sv": "Okej, debounce håller timer-id i closure och anropar metoden när användaren pausat.",
          "en": "Okay, debounce captures the timer id in a closure and invokes the method after user pauses."
        }
      },
      {
        "id": "flatten",
        "label": {
          "sv": "Flatten",
          "en": "Flatten"
        },
        "interviewer": {
          "sv": "Lägg till flatten för nästlade värden.",
          "en": "Add recursive flatten for nested values."
        },
        "goal": {
          "sv": "Platta till data innan den visas.",
          "en": "Flatten nested data before display."
        },
        "whatToSay": {
          "sv": "Okej, jag gör flatten som en ren funktion och använder resultatet i computed.",
          "en": "Okay, I implement flatten as a pure function and feed the result into computed properties."
        }
      }
    ]
  },
  "vue-watch-search": {
    "interviewPrompt": {
      "sv": "Bygg en Vue-sökning där watch reagerar på input.",
      "en": "Build a Vue search where a watcher reacts to input changes."
    },
    "currentGoal": {
      "sv": "Uppdatera resultat när search ändras.",
      "en": "Update search results whenever the query changes."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag låter watch reagera på search och hålla results separat.",
      "en": "Okay, I use a watcher on search to update results independently."
    },
    "features": [
      {
        "id": "immediate",
        "label": {
          "sv": "Immediate",
          "en": "Immediate"
        },
        "interviewer": {
          "sv": "Kör sökningen direkt när komponenten startar.",
          "en": "Execute search immediately when the component initializes."
        },
        "goal": {
          "sv": "Initiera results från start.",
          "en": "Initiera results from start."
        },
        "whatToSay": {
          "sv": "Okej, immediate gör att watchern körs direkt med startvärdet.",
          "en": "Okay, immediate ensures the watcher executes upfront with its initial value."
        }
      },
      {
        "id": "debounce",
        "label": {
          "sv": "Debounce",
          "en": "Debounce"
        },
        "interviewer": {
          "sv": "Debounca sökningen.",
          "en": "Debounce the search query."
        },
        "goal": {
          "sv": "Vänta kort innan results uppdateras.",
          "en": "Wait briefly before updating search results."
        },
        "whatToSay": {
          "sv": "Okej, jag sparar timeoutId och rensar tidigare timeout innan jag filtrerar.",
          "en": "Okay, I'll store timeoutId and cancel previous timeouts before executing search."
        }
      },
      {
        "id": "loading",
        "label": {
          "sv": "Loading",
          "en": "Loading"
        },
        "interviewer": {
          "sv": "Visa loading medan debounce väntar.",
          "en": "Display a loading state while debounce delay elapses."
        },
        "goal": {
          "sv": "Ge feedback under väntan.",
          "en": "Provide visual feedback while awaiting search completion."
        },
        "whatToSay": {
          "sv": "Okej, loading sätts till true innan timeout och false när resultaten uppdateras.",
          "en": "Okay, loading is set to true before the timeout and false once results update."
        }
      }
    ]
  },
  "product-list": {
    "interviewPrompt": {
      "sv": "Bygg en komponent som visar en lista med produkter.",
      "en": "Build a component that displays a list of products."
    },
    "currentGoal": {
      "sv": "Visa produkterna på sidan.",
      "en": "Display the products on the page."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med lite exempeldata och renderar ut produkterna med map.",
      "en": "Okay, I'll start with sample fixture data and map through the products to render them."
    },
    "features": [
      {
        "id": "search",
        "label": {
          "sv": "Sök",
          "en": "Search"
        },
        "interviewer": {
          "sv": "Bra. Lägg nu till ett sökfält så användaren kan söka på produktnamn.",
          "en": "Good. Now add a search field so the user can search by product name."
        },
        "goal": {
          "sv": "Låt användaren söka bland produkterna.",
          "en": "Allow the user to search across products."
        },
        "whatToSay": {
          "sv": "Okej, då behöver jag hålla reda på vad användaren skriver och använda det för att filtrera listan.",
          "en": "Okay, I need to track what the user types in state and use it to filter the product list."
        }
      },
      {
        "id": "category",
        "label": {
          "sv": "Kategori",
          "en": "Category"
        },
        "interviewer": {
          "sv": "Lägg till så att användaren kan filtrera produkterna efter kategori.",
          "en": "Add category filtering so the user can filter products by category."
        },
        "goal": {
          "sv": "Låt användaren välja vilken kategori som ska visas.",
          "en": "Allow the user to select which category to display."
        },
        "whatToSay": {
          "sv": "Okej, då sparar jag vald kategori och använder den för att bestämma vilka produkter som ska visas.",
          "en": "Okay, I store the selected category in state and use it to determine which products to display."
        }
      },
      {
        "id": "price",
        "label": {
          "sv": "Prisfilter",
          "en": "Price filter"
        },
        "interviewer": {
          "sv": "Lägg till ett prisfilter så användaren kan visa produkter under ett maxpris.",
          "en": "Add a price filter so the user can display products under a maximum price."
        },
        "goal": {
          "sv": "Filtrera produkterna efter pris.",
          "en": "Filter products by price."
        },
        "whatToSay": {
          "sv": "Okej, då behöver jag ett maxpris i state och filtrerar bort produkter som är dyrare än det.",
          "en": "Okay, I store a max price in state and filter out products exceeding that threshold."
        }
      },
      {
        "id": "stock",
        "label": {
          "sv": "Lagerstatus",
          "en": "Stock status"
        },
        "interviewer": {
          "sv": "Lägg till så att användaren kan välja att bara visa produkter som finns i lager.",
          "en": "Add a filter allowing the user to view only products currently in stock."
        },
        "goal": {
          "sv": "Filtrera på produkter som är i lager.",
          "en": "Filter for in-stock products only."
        },
        "whatToSay": {
          "sv": "Okej, då behöver varje produkt veta om den finns i lager, och sedan kan jag filtrera på det valet.",
          "en": "Okay, each product tracks its stock availability and I filter based on that flag."
        }
      },
      {
        "id": "sort",
        "label": {
          "sv": "Sortering",
          "en": "Sort"
        },
        "interviewer": {
          "sv": "Lägg till så att användaren kan sortera produkterna efter pris.",
          "en": "Allow the user to sort products by price."
        },
        "goal": {
          "sv": "Låt användaren ändra ordningen på produkterna.",
          "en": "Allow the user to change the display order of products."
        },
        "whatToSay": {
          "sv": "Okej, då lägger jag till ett val för sortering och sorterar en kopia av produktlistan.",
          "en": "Okay, I add a sorting control and sort a shallow copy of the product collection."
        }
      },
      {
        "id": "favorites",
        "label": {
          "sv": "Favoriter",
          "en": "Favorites"
        },
        "interviewer": {
          "sv": "Lägg till så att användaren kan markera produkter som favoriter.",
          "en": "Add so that the user can markera products that favoriter."
        },
        "goal": {
          "sv": "Låt användaren spara och ta bort favoriter.",
          "en": "Allow the user to save and remove favorites."
        },
        "whatToSay": {
          "sv": "Okej, då sparar jag id:n för favoriter i state och togglar varje produkt när användaren klickar.",
          "en": "Okay, I'll store favorite product IDs in state and toggle each product when clicked."
        }
      },
      {
        "id": "count",
        "label": {
          "sv": "Antal träffar",
          "en": "Result count"
        },
        "interviewer": {
          "sv": "Visa hur många produkter som matchar det användaren ser just nu.",
          "en": "Display how many products match the currently active filters."
        },
        "goal": {
          "sv": "Visa antal produkter i den aktuella listan.",
          "en": "Display the number of products in the current view."
        },
        "whatToSay": {
          "sv": "Okej, då kan jag visa längden på listan som renderas.",
          "en": "Okay, I can display the length of the filtered list that gets rendered."
        }
      },
      {
        "id": "reset",
        "label": {
          "sv": "Reset",
          "en": "Reset"
        },
        "interviewer": {
          "sv": "Lägg till en knapp som nollställer de val användaren har gjort.",
          "en": "Add a button that resets all active filter options."
        },
        "goal": {
          "sv": "Låt användaren återställa listan.",
          "en": "Allow the user to reset all filters."
        },
        "whatToSay": {
          "sv": "Okej, jag lägger in reset som en egen funktion. Eftersom inga val finns än finns det inget konkret att nollställa i den här versionen.",
          "en": "Okay, I define reset as a dedicated function to restore default filter settings."
        }
      },
      {
        "id": "empty",
        "label": {
          "sv": "Tom lista",
          "en": "Empty list"
        },
        "interviewer": {
          "sv": "Visa ett meddelande om inga produkter matchar det användaren valt.",
          "en": "Display a message if no products match the user's selected filters."
        },
        "goal": {
          "sv": "Visa ett meddelande när listan är tom.",
          "en": "Display an empty state message when no products are found."
        },
        "whatToSay": {
          "sv": "Okej, då lägger jag in en kontroll som visar ett meddelande om produktlistan är tom.",
          "en": "Okay, I add a conditional check to render an empty state message if the product list is empty."
        }
      },
      {
        "id": "styling",
        "label": {
          "sv": "Styling",
          "en": "Styling"
        },
        "interviewer": {
          "sv": "Lägg till enkel styling så produktlistan blir tydligare att läsa.",
          "en": "Add basic styling to make the product list cleaner and more readable."
        },
        "goal": {
          "sv": "Lägg till klassnamn och en egen CSS-fil.",
          "en": "Add class names and an accompanying CSS stylesheet."
        },
        "whatToSay": {
          "sv": "Okej, jag ger komponenten tydliga klassnamn och lägger själva utseendet i en CSS-fil.",
          "en": "Okay, I give the component clear class names and place the presentation in an external CSS stylesheet."
        }
      }
    ]
  },
  "todo-list": {
    "interviewPrompt": {
      "sv": "Bygg en komponent som visar en lista med todos.",
      "en": "Build a component that displays a list with todos."
    },
    "currentGoal": {
      "sv": "Visa alla todos på sidan.",
      "en": "Display all todos on the page."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med en statisk lista och renderar varje todo med map.",
      "en": "Okay, I'll start with a static list and render each todo using map."
    },
    "features": [
      {
        "id": "add",
        "label": {
          "sv": "Lägg till",
          "en": "Add"
        },
        "interviewer": {
          "sv": "Lägg till ett inputfält så användaren kan skapa nya todos.",
          "en": "Add an input field so the user can create new todos."
        },
        "goal": {
          "sv": "Låt användaren lägga till en ny todo.",
          "en": "Allow the user to add a new todo item."
        },
        "whatToSay": {
          "sv": "Okej, då gör jag listan till state och sparar texten användaren skriver innan jag lägger till en ny todo.",
          "en": "Okay, I hold the todo list in state and store input text before creating a new item."
        }
      },
      {
        "id": "toggle",
        "label": {
          "sv": "Markera färdig",
          "en": "Mark complete"
        },
        "interviewer": {
          "sv": "Gör så att användaren kan markera en todo som klar.",
          "en": "Make it so the user can markera a todo that klar."
        },
        "goal": {
          "sv": "Låt varje todo växla mellan klar och inte klar.",
          "en": "Allow each todo to toggle between completed and incomplete."
        },
        "whatToSay": {
          "sv": "Okej, då uppdaterar jag bara den todo som klickas och behåller resten av listan som den är.",
          "en": "Okay, I update only the clicked todo while preserving the rest of the list."
        }
      },
      {
        "id": "filter",
        "label": {
          "sv": "Filtrering",
          "en": "Filtering"
        },
        "interviewer": {
          "sv": "Lägg till ett filter för att visa alla, aktiva eller klara todos.",
          "en": "Add a filter selector to display all, active, or completed todos."
        },
        "goal": {
          "sv": "Låt användaren styra vilka todos som visas.",
          "en": "Allow the user to filter which todos are displayed."
        },
        "whatToSay": {
          "sv": "Okej, då sparar jag valt filter och skapar en synlig lista innan renderingen.",
          "en": "Okay, I'll store the selected filter in state and compute the visible list before rendering."
        }
      },
      {
        "id": "delete",
        "label": {
          "sv": "Ta bort",
          "en": "Delete"
        },
        "interviewer": {
          "sv": "Lägg till en knapp som tar bort en todo.",
          "en": "Add a button that removes a todo."
        },
        "goal": {
          "sv": "Låt användaren radera en todo.",
          "en": "Allow the user to radera a todo."
        },
        "whatToSay": {
          "sv": "Okej, då filtrerar jag bort den todo som användaren klickar på och behåller resten.",
          "en": "Okay, I filter out the targeted todo item while keeping the rest."
        }
      },
      {
        "id": "count",
        "label": {
          "sv": "Antal kvar",
          "en": "Items left"
        },
        "interviewer": {
          "sv": "Visa hur många aktiva todos som finns kvar.",
          "en": "Display how many active todos remain incomplete."
        },
        "goal": {
          "sv": "Räkna todos som inte är klara.",
          "en": "Count incomplete tasks remaining."
        },
        "whatToSay": {
          "sv": "Okej, då räknar jag aktiva todos från listan och visar siffran ovanför todos.",
          "en": "Okay, I derive active todo count from the collection and display the metric above the list."
        }
      },
      {
        "id": "clearCompleted",
        "label": {
          "sv": "Rensa färdiga",
          "en": "Clear completed"
        },
        "interviewer": {
          "sv": "Lägg till en knapp som tar bort alla klara todos.",
          "en": "Add a button that removes all completed todos."
        },
        "goal": {
          "sv": "Rensa todos som är completed.",
          "en": "Clear completed todos from the list."
        },
        "whatToSay": {
          "sv": "Okej, då filtrerar jag listan och behåller bara todos som inte är klara.",
          "en": "Okay, I filter the list to retain only incomplete todos."
        }
      },
      {
        "id": "empty",
        "label": {
          "sv": "Tom lista",
          "en": "Empty list"
        },
        "interviewer": {
          "sv": "Visa ett meddelande om filtret inte matchar några todos.",
          "en": "Display an empty notice when the active filter yields no todos."
        },
        "goal": {
          "sv": "Visa ett tydligt tomt läge.",
          "en": "Present a clear empty state."
        },
        "whatToSay": {
          "sv": "Okej, jag lägger in en enkel kontroll för om listan som ska visas är tom.",
          "en": "Okay, I'll include a simple boundary check for when the displayed list is empty."
        }
      },
      {
        "id": "persist",
        "label": {
          "sv": "LocalStorage",
          "en": "LocalStorage"
        },
        "interviewer": {
          "sv": "Spara todos i localStorage så de finns kvar efter refresh.",
          "en": "Persist todos in localStorage to preserve state across page reloads."
        },
        "goal": {
          "sv": "Persist todo-listan lokalt.",
          "en": "Persist todo-listan lokalt."
        },
        "whatToSay": {
          "sv": "Okej, jag använder localStorage som enkel lagring och synkar den när todos ändras.",
          "en": "Okay, I'll use localStorage for simple client persistence, synchronizing whenever todos update."
        }
      }
    ]
  },
  "counter-list": {
    "interviewPrompt": {
      "sv": "Bygg en komponent som visar en lista med counters.",
      "en": "Build a component that displays a list with counters."
    },
    "currentGoal": {
      "sv": "Visa varje counter och dess värde.",
      "en": "Display each counter and its current value."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med en enkel array och mappar ut varje counter. Eftersom inget ska ändras än behöver jag inte state direkt.",
      "en": "Okay, I'll start with a static array and map out each counter before introducing state."
    },
    "features": [
      {
        "id": "increment",
        "label": {
          "sv": "Öka",
          "en": "Increase"
        },
        "interviewer": {
          "sv": "Lägg till en knapp som ökar värdet på en counter.",
          "en": "Add a button to increment the counter value."
        },
        "goal": {
          "sv": "Låt användaren öka varje counter.",
          "en": "Allow the user to increment each counter."
        },
        "whatToSay": {
          "sv": "Okej, nu behöver counters ligga i state så att UI:t kan uppdateras när jag klickar.",
          "en": "Okay, counters must live in state so the UI updates when buttons are clicked."
        }
      },
      {
        "id": "decrement",
        "label": {
          "sv": "Minska",
          "en": "Decrease"
        },
        "interviewer": {
          "sv": "Lägg till en knapp som minskar värdet på en counter.",
          "en": "Add a button to decrement the counter value."
        },
        "goal": {
          "sv": "Låt användaren minska varje counter.",
          "en": "Allow the user to decrement each counter."
        },
        "whatToSay": {
          "sv": "Okej, då uppdaterar jag rätt counter i state och minskar värdet med ett.",
          "en": "Okay, I update the targeted counter in state and decrement its value by one."
        }
      },
      {
        "id": "step",
        "label": {
          "sv": "Step size",
          "en": "Step size"
        },
        "interviewer": {
          "sv": "Låt användaren välja hur mycket plus och minus ska ändra värdet.",
          "en": "Allow the user to configure how much increment and decrement adjust the value."
        },
        "goal": {
          "sv": "Använd ett valbart steg för ändringar.",
          "en": "Use a selectable step value for increments."
        },
        "whatToSay": {
          "sv": "Okej, jag sparar steget i state så att ändringen kan styras från ett inputfält.",
          "en": "Okay, I store step size in state so the adjustment amount can be controlled via an input field."
        }
      },
      {
        "id": "minZero",
        "label": {
          "sv": "Min 0",
          "en": "Min 0"
        },
        "interviewer": {
          "sv": "Se till att en counter aldrig kan bli mindre än noll.",
          "en": "Ensure counter values cannot drop below zero."
        },
        "goal": {
          "sv": "Stoppa negativa värden.",
          "en": "Prevent negative numbers."
        },
        "whatToSay": {
          "sv": "Okej, när jag minskar värdet använder jag Math.max så resultatet inte går under noll.",
          "en": "Okay, when decrementing I use Math.max so the value never drops below zero."
        }
      },
      {
        "id": "reset",
        "label": {
          "sv": "Reset",
          "en": "Reset"
        },
        "interviewer": {
          "sv": "Lägg till en reset-knapp för varje counter.",
          "en": "Add a reset button for each individual counter."
        },
        "goal": {
          "sv": "Låt användaren återställa en counter till noll.",
          "en": "Allow the user to reset a counter back to zero."
        },
        "whatToSay": {
          "sv": "Okej, reset är samma typ av uppdatering: jag hittar rätt counter och sätter värdet till noll.",
          "en": "Okay, reset follows the same pattern: find the target counter and reset its value to zero."
        }
      },
      {
        "id": "addCounter",
        "label": {
          "sv": "Lägg till",
          "en": "Add"
        },
        "interviewer": {
          "sv": "Lägg till en knapp som skapar en ny counter.",
          "en": "Add a button that creates a ny counter."
        },
        "goal": {
          "sv": "Kunna lägga till counters i listan.",
          "en": "Enable adding new counters to the list."
        },
        "whatToSay": {
          "sv": "Okej, jag skapar ett nytt objekt med ett nytt id och lägger det sist i listan.",
          "en": "Okay, I'll create a new counter object with a unique id and append it to the list."
        }
      },
      {
        "id": "removeCounter",
        "label": {
          "sv": "Ta bort",
          "en": "Remove"
        },
        "interviewer": {
          "sv": "Lägg till en knapp som tar bort en counter.",
          "en": "Add a button that removes a counter."
        },
        "goal": {
          "sv": "Kunna ta bort counters från listan.",
          "en": "Allow removing counters from the list."
        },
        "whatToSay": {
          "sv": "Okej, då filtrerar jag bort den counter som matchar id:t användaren klickade på.",
          "en": "Okay, I remove the counter matching the clicked id by filtering the array."
        }
      },
      {
        "id": "total",
        "label": {
          "sv": "Total",
          "en": "Total"
        },
        "interviewer": {
          "sv": "Visa även summan av alla counters.",
          "en": "Display the cumulative sum across all counters."
        },
        "goal": {
          "sv": "Räkna ut och visa totalen.",
          "en": "Compute and display the aggregate total."
        },
        "whatToSay": {
          "sv": "Okej, då kan jag summera värdena med reduce och visa resultatet ovanför listan.",
          "en": "Okay, I aggregate counter values with reduce and show the total above the list."
        }
      },
      {
        "id": "average",
        "label": {
          "sv": "Snitt",
          "en": "Average"
        },
        "interviewer": {
          "sv": "Visa snittvärdet för alla counters.",
          "en": "Display the average value across all counters."
        },
        "goal": {
          "sv": "Räkna ut genomsnittet.",
          "en": "Calculate the average value."
        },
        "whatToSay": {
          "sv": "Okej, jag kan återanvända summan och dela med antal counters, men behöver skydda mot tom lista.",
          "en": "Okay, I divide the sum by the number of counters, guarding against division by zero on empty lists."
        }
      }
    ]
  },
  "shopping-cart": {
    "interviewPrompt": {
      "sv": "Bygg en komponent som visar produkter som kan ligga i en kundvagn.",
      "en": "Build a component displaying products available for the shopping cart."
    },
    "currentGoal": {
      "sv": "Visa produkterna och deras pris.",
      "en": "Display products and their prices."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med produktdatan och renderar varje produkt med namn och pris.",
      "en": "Okay, I'll start with product data and render each product with its name and price."
    },
    "features": [
      {
        "id": "add",
        "label": {
          "sv": "Lägg till",
          "en": "Add"
        },
        "interviewer": {
          "sv": "Lägg till en knapp som lägger produkten i kundvagnen.",
          "en": "Add a button that adds the product in the shopping cart."
        },
        "goal": {
          "sv": "Låt användaren lägga produkter i cart.",
          "en": "Allow the user to add products to the shopping cart."
        },
        "whatToSay": {
          "sv": "Okej, nu behöver jag state för kundvagnen och en funktion som lägger till den klickade produkten.",
          "en": "Okay, I track shopping cart items in state and implement an action to add selected items."
        }
      },
      {
        "id": "remove",
        "label": {
          "sv": "Ta bort",
          "en": "Remove"
        },
        "interviewer": {
          "sv": "Låt användaren ta bort en produkt från kundvagnen.",
          "en": "Allow the user to remove a product from the shopping cart."
        },
        "goal": {
          "sv": "Låt användaren ångra ett val i cart.",
          "en": "Allow the user to remove an item from the cart."
        },
        "whatToSay": {
          "sv": "Okej, jag behöver cart-state och tar bort rätt produkt genom att skapa en ny filtrerad array.",
          "en": "Okay, I'll track cart state and remove the target product by returning a new filtered array."
        }
      },
      {
        "id": "quantity",
        "label": {
          "sv": "Quantity",
          "en": "Quantity"
        },
        "interviewer": {
          "sv": "Låt användaren öka och minska quantity för produkter i cart.",
          "en": "Allow the user to increment and decrement item quantities in cart."
        },
        "goal": {
          "sv": "Hantera antal per produkt i cart med plus och minus.",
          "en": "Manage item quantity in cart with increment and decrement controls."
        },
        "whatToSay": {
          "sv": "Okej, då låter jag samma cart-rad ha ett quantity-värde som kan öka och minska.",
          "en": "Okay, each cart line item tracks a quantity property that adjusts up or down."
        }
      },
      {
        "id": "total",
        "label": {
          "sv": "Total",
          "en": "Total"
        },
        "interviewer": {
          "sv": "Visa totalsumman för kundvagnen.",
          "en": "Display the total price for the shopping cart."
        },
        "goal": {
          "sv": "Räkna ut totalpriset.",
          "en": "Calculate the cart total price."
        },
        "whatToSay": {
          "sv": "Okej, totalen kan jag räkna ut från cart med reduce varje gång komponenten renderas.",
          "en": "Okay, the total price is derived from cart items using reduce on each render pass."
        }
      },
      {
        "id": "count",
        "label": {
          "sv": "Antal items",
          "en": "Item count"
        },
        "interviewer": {
          "sv": "Visa hur många produkter som ligger i kundvagnen.",
          "en": "Display how many products are currently in the shopping cart."
        },
        "goal": {
          "sv": "Räkna antal items i cart.",
          "en": "Count total items in cart."
        },
        "whatToSay": {
          "sv": "Okej, då kan jag visa längden på cart-arrayen.",
          "en": "Okay, I can display the total item count from the cart array."
        }
      },
      {
        "id": "discount",
        "label": {
          "sv": "Rabattkod",
          "en": "Discount code"
        },
        "interviewer": {
          "sv": "Lägg till en rabattkod som ger 10% rabatt om koden är SAVE10.",
          "en": "Add a discount code that applies 10% off when SAVE10 is entered."
        },
        "goal": {
          "sv": "Räkna total med rabatt.",
          "en": "Compute total price including active discount."
        },
        "whatToSay": {
          "sv": "Okej, då sparar jag rabattkoden i state och räknar ut rabatt när koden matchar.",
          "en": "Okay, I store discount code in state and apply 10% deduction when the code matches."
        }
      },
      {
        "id": "clear",
        "label": {
          "sv": "Töm varukorgen",
          "en": "Clear cart"
        },
        "interviewer": {
          "sv": "Lägg till en knapp som tömmer hela kundvagnen.",
          "en": "Add a button that clears the entire shopping cart."
        },
        "goal": {
          "sv": "Låt användaren rensa cart.",
          "en": "Allow the user to clear the entire cart."
        },
        "whatToSay": {
          "sv": "Okej, då sätter jag cart till en tom array när användaren klickar.",
          "en": "Okay, I reset cart to an empty array upon clicking clear cart."
        }
      },
      {
        "id": "checkout",
        "label": {
          "sv": "Checkout",
          "en": "Checkout"
        },
        "interviewer": {
          "sv": "Visa ett bekräftelsemeddelande när användaren klickar checkout.",
          "en": "Display a checkout confirmation message when user completes purchase."
        },
        "goal": {
          "sv": "Visa enkel orderbekräftelse.",
          "en": "Display a simple order confirmation summary."
        },
        "whatToSay": {
          "sv": "Okej, då sparar jag ett checkout-state och visar ett meddelande efter klick.",
          "en": "Okay, I'll track checkout state and display a confirmation message upon clicking."
        }
      },
      {
        "id": "empty",
        "label": {
          "sv": "Tom cart",
          "en": "Empty cart"
        },
        "interviewer": {
          "sv": "Visa ett meddelande när kundvagnen är tom.",
          "en": "Display a notice when the shopping cart is empty."
        },
        "goal": {
          "sv": "Gör tomt läge tydligt.",
          "en": "Make empty cart state clear."
        },
        "whatToSay": {
          "sv": "Okej, om cart är tom visar jag ett kort meddelande istället för en tom lista.",
          "en": "Okay, when cart is empty I display an empty cart alert instead of a blank list."
        }
      }
    ]
  },
  "modal": {
    "interviewPrompt": {
      "sv": "Bygg en komponent som kan visa en modal.",
      "en": "Build a component that displays an interactive modal dialog."
    },
    "currentGoal": {
      "sv": "Visa en knapp och modalens markup.",
      "en": "Display a button and modalens markup."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med knappen och själva modalstrukturen så dialogen syns tydligt.",
      "en": "Okay, I start with the trigger button and basic modal shell so dialog layout is visible."
    },
    "features": [
      {
        "id": "open",
        "label": {
          "sv": "Öppna/stäng",
          "en": "Open/close"
        },
        "interviewer": {
          "sv": "Gör så att modalen kan öppnas och stängas.",
          "en": "Allow the modal dialog to open and close."
        },
        "goal": {
          "sv": "Styra modalens synlighet med state.",
          "en": "Control modal dialog visibility using state."
        },
        "whatToSay": {
          "sv": "Okej, då behöver jag ett boolean-state och renderar modalen bara när den är öppen.",
          "en": "Okay, I maintain a boolean open flag and render the modal conditionally."
        }
      },
      {
        "id": "backdrop",
        "label": {
          "sv": "Overlay-klick",
          "en": "Backdrop click"
        },
        "interviewer": {
          "sv": "Stäng modalen när användaren klickar på bakgrunden.",
          "en": "Close the modal when clicking the backdrop overlay."
        },
        "goal": {
          "sv": "Låt overlay-klick stänga modalen.",
          "en": "Allow backdrop clicks to dismiss modal."
        },
        "whatToSay": {
          "sv": "Okej, jag lägger klicket på overlayn men stoppar klick inne i själva dialogen.",
          "en": "Okay, I handle clicks on the overlay while stopping propagation inside the modal card."
        }
      },
      {
        "id": "escape",
        "label": {
          "sv": "Escape",
          "en": "Escape"
        },
        "interviewer": {
          "sv": "Stäng modalen när användaren trycker Escape.",
          "en": "Close the modal when the user presses Escape."
        },
        "goal": {
          "sv": "Lyssna på Escape när modalen är öppen.",
          "en": "Listen for Escape keydown when modal is open."
        },
        "whatToSay": {
          "sv": "Okej, då använder jag useEffect för att lägga till och städa bort en keydown-listener.",
          "en": "Okay, I'll use useEffect to attach and clean up the keydown event listener."
        }
      },
      {
        "id": "content",
        "label": {
          "sv": "Dynamiskt innehåll",
          "en": "Dynamic Content"
        },
        "interviewer": {
          "sv": "Låt knappen bestämma vilken rubrik och text som visas i modalen.",
          "en": "Allow trigger buttons to parameterize modal title and description."
        },
        "goal": {
          "sv": "Styra modalens innehåll med state.",
          "en": "Control modal dialog content using state."
        },
        "whatToSay": {
          "sv": "Okej, jag sparar vilket modal-innehåll som är valt och renderar rubrik och text från det.",
          "en": "Okay, I store active modal payload in state and render title and body dynamically."
        }
      },
      {
        "id": "confirm",
        "label": {
          "sv": "Confirm",
          "en": "Confirm"
        },
        "interviewer": {
          "sv": "Lägg till en confirm-knapp som visar att åtgärden är klar.",
          "en": "Add a confirmation action button that indicates completion."
        },
        "goal": {
          "sv": "Hantera en bekräftande action.",
          "en": "Handle a confirmation action callback."
        },
        "whatToSay": {
          "sv": "Okej, jag lägger en handler för confirm som uppdaterar status och stänger modalen.",
          "en": "Okay, I add a confirm handler that updates action status and dismisses the dialog."
        }
      },
      {
        "id": "aria",
        "label": {
          "sv": "A11y",
          "en": "A11y"
        },
        "interviewer": {
          "sv": "Gör modalen mer tillgänglig med dialog-roll och aria-attribut.",
          "en": "Improve modal accessibility using dialog role and aria attributes."
        },
        "goal": {
          "sv": "Lägga till grundläggande modal-a11y.",
          "en": "Add fundamental modal accessibility features."
        },
        "whatToSay": {
          "sv": "Okej, jag ger dialogen role, aria-modal och kopplar rubriken med aria-labelledby.",
          "en": "Okay, in gives the dialog role, aria-modal and binds the heading with aria-labelledby."
        }
      },
      {
        "id": "styling",
        "label": {
          "sv": "Styling",
          "en": "Styling"
        },
        "interviewer": {
          "sv": "Lägg till styling för overlay och modalruta.",
          "en": "Add styling for overlay and modalruta."
        },
        "goal": {
          "sv": "Ge modalen tydlig position, bakgrund och spacing.",
          "en": "Ge the modal tydlig position, bakgrund and spacing."
        },
        "whatToSay": {
          "sv": "Okej, jag importerar en CSS-fil och stylar overlayn och dialogrutan separat.",
          "en": "Okay, in importerar a CSS-fil and stylar overlayn and dialogrutan separat."
        }
      }
    ]
  },
  "accordion": {
    "interviewPrompt": {
      "sv": "Bygg en accordion som visar en lista med frågor.",
      "en": "Build an accordion component displaying a list of questions."
    },
    "currentGoal": {
      "sv": "Visa frågorna och svaren.",
      "en": "Display questions and answers."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med att rendera varje fråga och svar från en lista.",
      "en": "Okay, I'll start by rendering each question and answer pair from the dataset."
    },
    "features": [
      {
        "id": "toggle",
        "label": {
          "sv": "Öppna/stäng",
          "en": "Open/close"
        },
        "interviewer": {
          "sv": "Gör så att användaren kan öppna och stänga en fråga.",
          "en": "Allow expanding and collapsing individual question panels."
        },
        "goal": {
          "sv": "Visa svaret bara för vald fråga.",
          "en": "Reveal answer content strictly for the expanded question."
        },
        "whatToSay": {
          "sv": "Okej, då sparar jag vilken fråga som är öppen och växlar den när användaren klickar.",
          "en": "Okay, I track active question id in state and toggle it open or closed on click."
        }
      },
      {
        "id": "single",
        "label": {
          "sv": "En åt gången",
          "en": "One at a time"
        },
        "interviewer": {
          "sv": "Se till att bara en panel kan vara öppen åt gången.",
          "en": "Ensure only one accordion item expands at any given time."
        },
        "goal": {
          "sv": "Stäng tidigare panel när en ny öppnas.",
          "en": "Collapse the previous panel when a new one opens."
        },
        "whatToSay": {
          "sv": "Okej, med ett enda activeId i state får jag automatiskt bara en öppen panel.",
          "en": "Okay, keeping a single activeId in state automatically limits expansion to one panel."
        }
      },
      {
        "id": "defaultOpen",
        "label": {
          "sv": "Första öppen",
          "en": "First open"
        },
        "interviewer": {
          "sv": "Låt första frågan vara öppen från start.",
          "en": "Have the first accordion question expanded by default."
        },
        "goal": {
          "sv": "Sätta ett initialt öppet värde.",
          "en": "Initialize activeId with default open item."
        },
        "whatToSay": {
          "sv": "Okej, då startar jag state med första frågans id istället för null.",
          "en": "Okay, I initialize state with the first item's id instead of null."
        }
      },
      {
        "id": "search",
        "label": {
          "sv": "Sök fråga",
          "en": "Search question"
        },
        "interviewer": {
          "sv": "Lägg till sök så användaren kan filtrera frågorna.",
          "en": "Add search input allowing users to filter questions."
        },
        "goal": {
          "sv": "Filtrera accordion-listan.",
          "en": "Filter accordion-listan."
        },
        "whatToSay": {
          "sv": "Okej, jag sparar söktexten och filtrerar frågorna på question innan jag mappar ut dem.",
          "en": "Okay, I store search query in state and filter questions by text before rendering."
        }
      },
      {
        "id": "empty",
        "label": {
          "sv": "Tomt resultat",
          "en": "Empty result"
        },
        "interviewer": {
          "sv": "Visa ett meddelande om sökningen inte ger några träffar.",
          "en": "Display a notification if no questions match search criteria."
        },
        "goal": {
          "sv": "Hantera tom filtrerad lista.",
          "en": "Handle empty filtered question list."
        },
        "whatToSay": {
          "sv": "Okej, då kontrollerar jag om den filtrerade listan är tom innan jag renderar frågorna.",
          "en": "Okay, I check whether the filtered list is empty before mapping over items."
        }
      },
      {
        "id": "count",
        "label": {
          "sv": "Antal öppna",
          "en": "Open count"
        },
        "interviewer": {
          "sv": "Visa hur många paneler som är öppna.",
          "en": "Display the count of currently expanded panels."
        },
        "goal": {
          "sv": "Räkna öppna paneler.",
          "en": "Count expanded accordion panels."
        },
        "whatToSay": {
          "sv": "Okej, eftersom jag sparar activeId kan jag räkna det som 1 eller 0.",
          "en": "Okay, since state holds a single activeId, open count resolves to 1 or 0."
        }
      },
      {
        "id": "styling",
        "label": {
          "sv": "Styling",
          "en": "Styling"
        },
        "interviewer": {
          "sv": "Lägg till styling så accordion-raderna blir lättare att läsa.",
          "en": "Add styling so accordion rows are clear and readable."
        },
        "goal": {
          "sv": "Ge accordion en egen CSS-fil och tydliga klassnamn.",
          "en": "Add clean styling and descriptive class names to the accordion."
        },
        "whatToSay": {
          "sv": "Okej, jag lägger klassnamn på wrappern och raderna och flyttar utseendet till CSS.",
          "en": "Okay, I assign class names to containers and rows while isolating styling to CSS."
        }
      }
    ]
  },
  "pagination": {
    "interviewPrompt": {
      "sv": "Bygg en komponent som visar en lista med paginering.",
      "en": "Build a component that displays a list with pagination."
    },
    "currentGoal": {
      "sv": "Visa alla items i en lista.",
      "en": "Display all items in a paginated list."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med att rendera listan rakt av så att datan syns på sidan.",
      "en": "Okay, I begin by rendering the baseline collection so items are visible on screen."
    },
    "features": [
      {
        "id": "paginate",
        "label": {
          "sv": "Paginering",
          "en": "Pagination"
        },
        "interviewer": {
          "sv": "Visa bara fem items per sida.",
          "en": "Display only five items per page."
        },
        "goal": {
          "sv": "Dela upp listan i sidor.",
          "en": "Split the list into separate pages."
        },
        "whatToSay": {
          "sv": "Okej, då sparar jag aktuell sida och använder start/end-index för att ta ut rätt items.",
          "en": "Okay, I track current page in state and compute slice boundaries to render the active page."
        }
      },
      {
        "id": "controls",
        "label": {
          "sv": "Next/prev",
          "en": "Next/prev"
        },
        "interviewer": {
          "sv": "Lägg till knappar för nästa och föregående sida.",
          "en": "Add next and previous pagination buttons."
        },
        "goal": {
          "sv": "Låt användaren byta sida.",
          "en": "Allow the user to byta sida."
        },
        "whatToSay": {
          "sv": "Okej, då ändrar knapparna page-state upp eller ner med ett steg.",
          "en": "Okay, clicking pagination controls adjusts page state up or down by one."
        }
      },
      {
        "id": "disabled",
        "label": {
          "sv": "Disabled",
          "en": "Disabled"
        },
        "interviewer": {
          "sv": "Disable:a knapparna när användaren är på första eller sista sidan.",
          "en": "Disable buttons when user is on the first or last page."
        },
        "goal": {
          "sv": "Förhindra ogiltiga sidbyten.",
          "en": "Prevent navigating beyond valid page bounds."
        },
        "whatToSay": {
          "sv": "Okej, jag räknar ut om vi är på första eller sista sidan och använder det på knapparna.",
          "en": "Okay, I evaluate first-page and last-page conditions and disable corresponding buttons."
        }
      },
      {
        "id": "pageSize",
        "label": {
          "sv": "Page size",
          "en": "Page size"
        },
        "interviewer": {
          "sv": "Låt användaren välja hur många items som visas per sida.",
          "en": "Allow the user to configure page size."
        },
        "goal": {
          "sv": "Gör sidstorleken valbar.",
          "en": "Make sidstorleken valbar."
        },
        "whatToSay": {
          "sv": "Okej, då gör jag page size till state och återställer sidan när användaren byter storlek.",
          "en": "Okay, I store pageSize in state and reset current page to 1 upon size changes."
        }
      },
      {
        "id": "filter",
        "label": {
          "sv": "Sök/filter",
          "en": "Search/filter"
        },
        "interviewer": {
          "sv": "Lägg till ett sökfält som filtrerar listan innan paginering.",
          "en": "Add a search input that filters items prior to pagination."
        },
        "goal": {
          "sv": "Filtrera items och paginera resultatet.",
          "en": "Filtrera items and paginera the result."
        },
        "whatToSay": {
          "sv": "Okej, jag filtrerar först och paginerar den filtrerade listan efteråt.",
          "en": "Okay, I filter the dataset first and paginate the resulting subset."
        }
      },
      {
        "id": "pageNumbers",
        "label": {
          "sv": "Sidnummer",
          "en": "Page numbers"
        },
        "interviewer": {
          "sv": "Visa sidnummer så användaren kan hoppa direkt till en sida.",
          "en": "Render page numbers so users can jump directly to any page."
        },
        "goal": {
          "sv": "Kunna välja sida direkt.",
          "en": "Allow selecting pages directly."
        },
        "whatToSay": {
          "sv": "Okej, jag skapar en knapp per sida från totalPages och sätter page när användaren klickar.",
          "en": "Okay, I'll generate page buttons from totalPages and set the active page on click."
        }
      },
      {
        "id": "resultCount",
        "label": {
          "sv": "Antal",
          "en": "Count"
        },
        "interviewer": {
          "sv": "Visa hur många resultat som finns totalt.",
          "en": "Display total record count."
        },
        "goal": {
          "sv": "Visa antal matchande items.",
          "en": "Display count of matching items."
        },
        "whatToSay": {
          "sv": "Okej, jag visar längden på listan som faktiskt pagineras.",
          "en": "Okay, I display the length of the filtered list being paginated."
        }
      },
      {
        "id": "firstLast",
        "label": {
          "sv": "First/last",
          "en": "First/last"
        },
        "interviewer": {
          "sv": "Lägg till knappar för första och sista sidan.",
          "en": "Add buttons to jump to the first and last pages."
        },
        "goal": {
          "sv": "Snabbnavigera till kanterna.",
          "en": "Quickly jump to first and last pages."
        },
        "whatToSay": {
          "sv": "Okej, första sidan är 1 och sista sidan är totalPages.",
          "en": "Okay, the first page is 1 and the last page is totalPages."
        }
      }
    ]
  },
  "backend-endpoint": {
    "interviewPrompt": {
      "sv": "Bygg en enkel Express-route som returnerar produkter från en databas.",
      "en": "Build a simple Express route that returns products from a database."
    },
    "currentGoal": {
      "sv": "Skapa en GET-route för produkter.",
      "en": "Create a GET route for products."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med en route som hämtar produkter och skickar tillbaka JSON.",
      "en": "Okay, I'll start with a route that queries products and returns JSON."
    },
    "features": [
      {
        "id": "try-catch",
        "label": {
          "sv": "Try/catch",
          "en": "Try/catch"
        },
        "interviewer": {
          "sv": "Lägg till felhantering om databasen misslyckas.",
          "en": "Add error handling in case the database operation fails."
        },
        "goal": {
          "sv": "Returnera 500 vid serverfel.",
          "en": "Return 500 on internal server failure."
        },
        "whatToSay": {
          "sv": "Okej, jag wrappar databasanropet så API:t svarar kontrollerat även om något går fel.",
          "en": "Okay, I wrap the database query in try/catch so the API returns a graceful response if an error occurs."
        }
      },
      {
        "id": "query",
        "label": {
          "sv": "Query params",
          "en": "Query params"
        },
        "interviewer": {
          "sv": "Låt klienten filtrera produkter med category som query param.",
          "en": "Allow clients to filter products using a category query parameter."
        },
        "goal": {
          "sv": "Hantera query params i backend.",
          "en": "Handle query parameters in the backend."
        },
        "whatToSay": {
          "sv": "Okej, jag bygger ett filterobjekt från req.query och skickar det till databasanropet.",
          "en": "Okay, I construct a filter criteria object from req.query and pass it into the database query."
        }
      },
      {
        "id": "post",
        "label": {
          "sv": "POST",
          "en": "POST"
        },
        "interviewer": {
          "sv": "Lägg till en POST-route som skapar en produkt.",
          "en": "Add a POST route that creates a new product."
        },
        "goal": {
          "sv": "Ta emot JSON och spara ny data.",
          "en": "Accept JSON payload and persist record."
        },
        "whatToSay": {
          "sv": "Okej, jag aktiverar JSON-body och skapar produkten från req.body.",
          "en": "Okay, I parse the JSON body and persist the product from req.body."
        }
      },
      {
        "id": "auth",
        "label": {
          "sv": "Auth check",
          "en": "Auth check"
        },
        "interviewer": {
          "sv": "Skydda POST-routen så bara inloggade användare kan skapa produkter.",
          "en": "Protect the POST route so only authenticated users can create products."
        },
        "goal": {
          "sv": "Lägga middleware före route-handlern.",
          "en": "Mount authentication middleware before the route handler."
        },
        "whatToSay": {
          "sv": "Okej, jag lägger auth-middleware före handlern så kontrollen sker innan datan sparas.",
          "en": "Okay, I place authentication middleware before the handler so authorization is verified before persisting data."
        }
      }
    ]
  },
  "crud-api-list": {
    "interviewPrompt": {
      "sv": "Bygg en komponent som hämtar todos från ett API och visar dem i en lista.",
      "en": "Build a component that fetches todos from an API and renders them in a list."
    },
    "currentGoal": {
      "sv": "Hämta todos och visa dem.",
      "en": "Fetch todos and render them."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med att hämta datan i useEffect och renderar listan när svaret kommer tillbaka.",
      "en": "Okay, I'll start by fetching data inside useEffect and render the list once the response arrives."
    },
    "features": [
      {
        "id": "loading-error",
        "label": {
          "sv": "Loading/error",
          "en": "Loading/error"
        },
        "interviewer": {
          "sv": "Lägg till loading och felhantering.",
          "en": "Add loading indicators and error handling."
        },
        "goal": {
          "sv": "Visa tydliga API-states.",
          "en": "Communicate clear API states."
        },
        "whatToSay": {
          "sv": "Okej, jag separerar vänteläge och fel så UI:t kan visa vad som händer med API-anropet.",
          "en": "Okay, I decouple loading and error states so the UI communicates request lifecycle accurately."
        }
      },
      {
        "id": "create",
        "label": {
          "sv": "Create",
          "en": "Create"
        },
        "interviewer": {
          "sv": "Lägg till ett formulär som skapar en ny todo via API:t.",
          "en": "Add a form that creates a new todo item via the API."
        },
        "goal": {
          "sv": "Skicka POST och uppdatera listan.",
          "en": "Dispatch POST and append to the list."
        },
        "whatToSay": {
          "sv": "Okej, jag sparar input i state, skickar POST och lägger in svaret i listan om API:t lyckas.",
          "en": "Okay, I store form inputs in state, dispatch a POST request, and append the created record to the list on success."
        }
      },
      {
        "id": "update",
        "label": {
          "sv": "Update",
          "en": "Update"
        },
        "interviewer": {
          "sv": "Låt användaren toggla completed och spara ändringen i API:t.",
          "en": "Allow the user to toggle completion and persist changes to the API."
        },
        "goal": {
          "sv": "Skicka PATCH och uppdatera rätt todo.",
          "en": "Dispatch PATCH and update target todo."
        },
        "whatToSay": {
          "sv": "Okej, jag skickar bara fältet som ändras och ersätter rätt todo i state med svaret från API:t.",
          "en": "Okay, I patch only the changed field and update the matching record in state with the API payload."
        }
      },
      {
        "id": "delete",
        "label": {
          "sv": "Delete",
          "en": "Delete"
        },
        "interviewer": {
          "sv": "Lägg till delete så användaren kan ta bort en todo.",
          "en": "Add delete functionality so the user can remove a todo."
        },
        "goal": {
          "sv": "Skicka DELETE och ta bort från UI.",
          "en": "Dispatch DELETE and remove from UI."
        },
        "whatToSay": {
          "sv": "Okej, efter att DELETE lyckas filtrerar jag bort rätt todo från listan.",
          "en": "Okay, once the DELETE request succeeds I filter out the removed record from the list."
        }
      }
    ]
  },
  "protected-route": {
    "interviewPrompt": {
      "sv": "Bygg en enkel skyddad vy som bara visas när användaren är inloggad.",
      "en": "Build a simple protected view that only renders when the user is authenticated."
    },
    "currentGoal": {
      "sv": "Visa dashboard om user finns, annars login.",
      "en": "Render dashboard if user exists, otherwise login."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med ett user-state och renderar olika vyer beroende på om user finns.",
      "en": "Okay, I'll start with user state and render distinct views depending on whether a user session exists."
    },
    "features": [
      {
        "id": "token",
        "label": {
          "sv": "Token",
          "en": "Token"
        },
        "interviewer": {
          "sv": "Spara en token när användaren loggar in.",
          "en": "Store an authentication token when the user logs in."
        },
        "goal": {
          "sv": "Komma ihåg auth-token.",
          "en": "Persist the authentication token."
        },
        "whatToSay": {
          "sv": "Okej, i en riktig app hade token kommit från backend. Här visar jag flödet med localStorage.",
          "en": "Okay, in a production application the token would originate from the backend. Here I demonstrate the workflow with localStorage."
        }
      },
      {
        "id": "restore",
        "label": {
          "sv": "Restore session",
          "en": "Restore session"
        },
        "interviewer": {
          "sv": "Behåll inloggningen efter refresh.",
          "en": "Preserve the session across page reloads."
        },
        "goal": {
          "sv": "Läsa sparad session från localStorage.",
          "en": "Restore saved session from localStorage."
        },
        "whatToSay": {
          "sv": "Okej, jag läser token som startvärde och skapar user-state om token finns.",
          "en": "Okay, I initialize by reading the token from storage and populate user state if valid."
        }
      },
      {
        "id": "logout",
        "label": {
          "sv": "Logout",
          "en": "Logout"
        },
        "interviewer": {
          "sv": "Lägg till logout som rensar sessionen.",
          "en": "Add logout functionality that clears the session."
        },
        "goal": {
          "sv": "Logga ut och ta bort token.",
          "en": "Log out and invalidate the token."
        },
        "whatToSay": {
          "sv": "Okej, logout ska både rensa state och ta bort token så refresh inte loggar in igen.",
          "en": "Okay, logout should clear local state as well as remove the token so refreshing does not re-authenticate."
        }
      },
      {
        "id": "roles",
        "label": {
          "sv": "Roller",
          "en": "Roles"
        },
        "interviewer": {
          "sv": "Visa admin-länk bara om användaren är admin.",
          "en": "Render the admin link only if the user has an admin role."
        },
        "goal": {
          "sv": "Villkorlig rendering baserat på roll.",
          "en": "Conditional rendering based on user role."
        },
        "whatToSay": {
          "sv": "Okej, jag lägger role på user och visar admin-UI bara när rollen matchar.",
          "en": "Okay, I attach a role attribute to the user and render admin UI conditionally when authorized."
        }
      }
    ]
  },
  "server-validation": {
    "interviewPrompt": {
      "sv": "Bygg ett signup-formulär som kan visa valideringsfel från backend.",
      "en": "Build a signup form that displays validation errors returned by the backend."
    },
    "currentGoal": {
      "sv": "Skicka formuläret till API:t.",
      "en": "Submit the form to the API."
    },
    "baseWhatToSay": {
      "sv": "Okej, jag börjar med kontrollerade fält och skickar datan som JSON till backend.",
      "en": "Okay, I'll start with controlled fields and submit the payload as JSON to the backend."
    },
    "features": [
      {
        "id": "client-check",
        "label": {
          "sv": "Client check",
          "en": "Client check"
        },
        "interviewer": {
          "sv": "Validera email och password innan requesten skickas.",
          "en": "Validate email and password before dispatching the request."
        },
        "goal": {
          "sv": "Stoppa uppenbart fel input tidigt.",
          "en": "Prevent invalid inputs early."
        },
        "whatToSay": {
          "sv": "Okej, jag gör en snabb frontend-kontroll för bättre UX, men backend måste fortfarande validera på riktigt.",
          "en": "Okay, I run a fast frontend check for responsive UX, but the backend must enforce strict server-side validation."
        }
      },
      {
        "id": "server-errors",
        "label": {
          "sv": "API errors",
          "en": "API errors"
        },
        "interviewer": {
          "sv": "Visa fältspecifika fel som kommer från backend.",
          "en": "Display field-specific validation errors returned by the API."
        },
        "goal": {
          "sv": "Koppla serverfel till rätt input.",
          "en": "Map server errors to target fields."
        },
        "whatToSay": {
          "sv": "Okej, om backend svarar med 400 läser jag felobjektet och visar det vid rätt fält.",
          "en": "Okay, if the backend returns a 400 status I parse the error payload and bind messages to corresponding fields."
        }
      },
      {
        "id": "disable",
        "label": {
          "sv": "Disable submit",
          "en": "Disable submit"
        },
        "interviewer": {
          "sv": "Disable:a submit-knappen medan requesten pågår.",
          "en": "Disable the submit button while the request is in flight."
        },
        "goal": {
          "sv": "Undvika dubbla submits.",
          "en": "Prevent duplicate submissions."
        },
        "whatToSay": {
          "sv": "Okej, jag sätter ett pending-state så användaren inte kan skicka samma request flera gånger.",
          "en": "Okay, I set a pending state to disable the submit button and prevent duplicate requests."
        }
      }
    ]
  }
};
