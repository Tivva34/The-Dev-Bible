export const comprehensiveFollowUpDictionary = {
  "Hur skulle du förklara lösningen kort?": {
    q: "How would you summarize the solution concisely?",
    a: "I would describe which data the component consumes, what state is needed, and how the rendering updates when user actions occur."
  },
  "Vad skulle du förbättra om du hade mer tid?": {
    q: "What would you improve if you had additional time?",
    a: "I would add automated tests, verify edge cases, and evaluate whether any logic should be extracted into custom helpers for readability."
  },
  "Varför valde du den här strukturen?": {
    q: "Why did you choose this structure?",
    a: "I start with a straightforward architecture that satisfies the requirement clearly. As complexity increases, I can decompose logic into custom hooks or smaller sub-components."
  },
  "Vilka edge cases tänker du på?": {
    q: "Which edge cases are top of mind?",
    a: "I consider empty datasets, invalid inputs, rapid user clicks, and ensuring the interface consistently communicates clear operational feedback."
  },
  "Vad ansvarar frontend för här?": {
    q: "What is frontend responsible for here?",
    a: "Frontend must communicate the right UI state, dispatch valid requests, and handle responses, loading states, and error feedback clearly."
  },
  "Vad måste backend fortfarande kontrollera?": {
    q: "What must backend still verify?",
    a: "Backend must validate input payloads, authorize identity, and return clear HTTP status codes. Frontend checks are never sufficient for security."
  },
  "Varför hämtar du i useEffect?": {
    q: "Why do you fetch data inside useEffect?",
    a: "I want to initiate the API request when the component mounts rather than on every render cycle, maintaining full control over side effects."
  },
  "Varför använder du map här?": {
    q: "Why do you use map here?",
    a: "Map is declarative, transforms data collections into template elements cleanly, and avoids imperative loop mutations."
  },
  "Varför använder du trackBy?": {
    q: "Why do you use trackBy?",
    a: "TrackBy helps Angular uniquely identify items, avoiding unnecessary DOM re-creation and improving rendering performance."
  },
  "Varför är hjälpfunktionen utanför klassen?": {
    q: "Why is the helper function defined outside the class?",
    a: "Keeping pure functions outside the component class makes them easier to test independently and prevents unnecessary re-creation per instance."
  },
  "Varför börjar du utan useState?": {
    q: "Why do you start without useState?",
    a: "Starting with static markup validates the rendering structure first. I only introduce state once dynamic behavior is needed."
  },
  "Varför har varje counter ett id?": {
    q: "Why does each counter have an id?",
    a: "A unique id ensures immutable state updates target the exact item without relying on volatile array indices."
  },
  "Varför kollar du 15 först?": {
    q: "Why do you check 15 first?",
    a: "Multiples of 15 are divisible by both 3 and 5. Evaluating this condition first avoids false positives on the individual modulo checks."
  },
  "Varför har du en render-funktion?": {
    q: "Why do you encapsulate rendering in a function?",
    a: "A dedicated render function keeps DOM updates centralized, predictable, and simple to trigger when state changes."
  },
  "Varför renderar du från arrayen?": {
    q: "Why do you render from an array?",
    a: "Treating the array as the single source of truth decouples business data from DOM presentation."
  },
  "Varför använder du en klass?": {
    q: "Why do you use a class?",
    a: "In Angular and OOP architectures, classes encapsulate state properties, dependency injection, and component lifecycle methods."
  },
  "Varför börjar du med ett litet exempel?": {
    q: "Why do you start with a minimal example?",
    a: "Beginning with a minimal implementation demonstrates working code quickly before adding incremental complexity."
  },
  "Varför visar du loading?": {
    q: "Why do you display a loading state?",
    a: "Loading feedback confirms that the application is actively waiting for asynchronous data, improving user experience."
  },
  "Varför delar du upp overlay och modal-innehåll?": {
    q: "Why do you separate overlay backdrop and modal content?",
    a: "Separating the backdrop enables independent styling, click-outside handling, and proper accessibility layering."
  },
  "Varför visar du allt från början?": {
    q: "Why do you display the default view from the start?",
    a: "Showing a baseline initial state gives immediate visual feedback before user filtering or interaction begins."
  },
  "Varför använder du key?": {
    q: "Why do you use key?",
    a: "The key prop gives elements a stable identity so the reconciliation algorithm updates only items that actually changed."
  },
  "Varför använder du props här?": {
    q: "Why do you use props here?",
    a: "Props allow the Card component to be reused with different content without duplicating markup or logic."
  },
  "Varför ligger items i state?": {
    q: "Why are items held in state?",
    a: "Holding items in state ensures the UI automatically re-renders whenever items are added, updated, or removed."
  },
  "Varför använder du kontrollerade inputs?": {
    q: "Why do you use controlled inputs?",
    a: "Controlled inputs synchronize form values with component state, making validation and submission predictable."
  },
  "Varför ligger hjälpfunktionen utanför komponenten?": {
    q: "Why is the helper function placed outside the component?",
    a: "Placing pure helper functions outside prevents them from being re-instantiated on every render pass."
  },
  "Varför filtrerar du innan map?": {
    q: "Why do you filter before map?",
    a: "Filtering upfront ensures that only matching items are transformed and rendered into DOM elements."
  },
  "Varför passar table här?": {
    q: "Why is a table suitable here?",
    a: "A table provides semantic, accessible tabular structure for multi-attribute structured data."
  },
  "Varför separerar du loading, error och data?": {
    q: "Why do you separate loading, error, and data?",
    a: "Discrete flags make each network phase explicit and prevent contradictory UI states."
  },
  "Varför börjar du med en vanlig lista?": {
    q: "Why do you start with a standard list?",
    a: "A simple list establishes a clear baseline before introducing sorting, filtering, or pagination."
  },
  "Varför börjar du med produkter utanför komponenten?": {
    q: "Why do you define products outside the component?",
    a: "Static mock datasets defined outside the component avoid unnecessary re-allocation on each render."
  },
  "Varför börjar du med statisk data?": {
    q: "Why do you begin with static data?",
    a: "Static data proves that the component layout functions correctly before introducing async network complexity."
  },
  "Varför använder du v-for?": {
    q: "Why do you use v-for?",
    a: "v-for is Vue's idiomatic directive for declaratively mapping arrays to DOM elements."
  },
  "Varför använder du v-model?": {
    q: "Why do you use v-model?",
    a: "v-model provides two-way data binding, synchronizing user input with component state seamlessly."
  },
  "Varför använder du computed här?": {
    q: "Why do you use computed here?",
    a: "Computed properties cache their derived results reactively, re-evaluating only when dependencies change."
  },

  // Missing Follow-Up Questions from Accordion
  "Varför sparar du id:t för öppen rad?": {
    q: "Why do you store the id of the open row?",
    a: "Storing the open id tells me exactly which panel should expand and render its content."
  },
  "Hur ser du till att bara en är öppen?": {
    q: "How do you ensure only one panel is open at a time?",
    a: "I store a single active id in state instead of an array of open ids, automatically closing any previously opened item."
  },
  "Varför filtrerar du före map?": {
    q: "Why do you filter before map?",
    a: "Filtering first ensures JSX only iterates over and renders the items that actually match the active query."
  },
  "Hur räknar du öppna paneler?": {
    q: "How do you count open panels?",
    a: "Since this variant stores only a single activeId, the open count is 1 if an activeId exists, otherwise 0."
  },

  // Missing Follow-Up Questions from CounterList
  "Varför använder du map när värdet ändras?": {
    q: "Why do you use map when a counter value updates?",
    a: "Using map creates a brand new array where only the object with the matching id is modified, keeping state immutable."
  },
  "Varför gör du step till state?": {
    q: "Why do you put step into state?",
    a: "Storing step in state allows the user to configure the increment size dynamically, applying it to both plus and minus operations."
  },
  "Hur håller du listan immutable?": {
    q: "How do you keep the list immutable?",
    a: "I create a new array copy using array spread or filter whenever an item is added or removed instead of mutating the existing array in place."
  },
  "Varför räknar du ut värdena utanför JSX?": {
    q: "Why do you calculate derived values outside JSX?",
    a: "Computing totals and aggregates above the return statement keeps the JSX clean and focused strictly on presentation."
  },

  // Missing Follow-Up Questions from Modal
  "Varför använder du boolean state?": {
    q: "Why do you use a boolean state for the modal?",
    a: "A modal is either open or closed, so a simple boolean is the cleanest representation of its display state."
  },
  "Varför stänger du på flera sätt?": {
    q: "Why do you provide multiple ways to close the modal?",
    a: "Users expect standard accessible UX where they can close a dialog via the close button, pressing Escape, or clicking the overlay."
  },
  "Hur gör du modalen återanvändbar?": {
    q: "How do you make the modal reusable?",
    a: "I parameterize the title, content, and action handlers via props rather than hardcoding static content into the component."
  },
  "Vad är viktigast för tillgänglighet här?": {
    q: "What is most important for accessibility here?",
    a: "Ensuring the dialog has appropriate role attributes, aria-modal, and accessible labels so assistive technologies understand the focus and context."
  },

  // Missing Follow-Up Questions from Pagination
  "Varför använder du slice?": {
    q: "Why do you use slice?",
    a: "Slice allows me to extract only the subset of items that belongs to the current page without mutating the source dataset."
  },
  "Varför disable:ar du knappar?": {
    q: "Why do you disable pagination buttons?",
    a: "Disabling buttons prevents the user from navigating out of bounds beyond the first or last available page."
  },
  "Varför går du tillbaka till sida 1?": {
    q: "Why do you reset back to page 1?",
    a: "When search filters or page size change, the previous page index may no longer exist in the new result set."
  },
  "Varför använder du Array.from?": {
    q: "Why do you use Array.from?",
    a: "Array.from generates a sequence of page number buttons dynamically based on totalPages without hardcoding page buttons."
  },

  // Missing Follow-Up Questions from ProductList
  "Varför filtrerar du innan renderingen?": {
    q: "Why do you filter the list prior to rendering?",
    a: "Filtering upfront keeps the JSX clean so it only iterates over the products that should actually be displayed."
  },
  "Varför kopierar du arrayen innan sortering?": {
    q: "Why do you copy the array before sorting?",
    a: "Because Array.prototype.sort mutates the array in place. Creating a shallow copy preserves the original data order."
  },
  "Varför sparar du bara id för favoriter?": {
    q: "Why do you store only product IDs for favorites?",
    a: "The full product details already exist in the products array, so keeping a Set or array of IDs avoids data duplication in state."
  },
  "Varför använder du längden på listan som visas?": {
    q: "Why do you use the length of the rendered list?",
    a: "It reflects the exact number of matching items visible to the user after all active filters and searches are applied."
  },
  "Vad ska reset-knappen nollställa?": {
    q: "What should the reset button reset?",
    a: "It should clear only the active filter selections for the current challenge, such as search query, category, price filter, stock filter, sorting, and favorites."
  },
  "Varför visar du empty state före listan?": {
    q: "Why do you display an empty state before the list?",
    a: "Checking whether the visible array is empty allows rendering a dedicated empty message immediately without modifying the mapping logic."
  },
  "Varför lägger du styling i en egen CSS-fil?": {
    q: "Why do you place styling in a dedicated CSS file?",
    a: "Separating presentation into an external stylesheet keeps the JSX markup focused on structure while making design rules modular and maintainable."
  },

  // Missing Follow-Up Questions from React Components
  "Varför sparar du editingId?": {
    q: "Why do you store editingId?",
    a: "Storing the editingId identifies the single row that should display editable input fields instead of plain text."
  },
  "Varför behövs cancel?": {
    q: "Why is a cancel action needed?",
    a: "It gives the user the ability to discard pending edits without committing changes to state."
  },

  // Missing Follow-Up Questions from React Hooks and State
  "Varför använder du status istället för flera booleans?": {
    q: "Why do you use a status enum instead of multiple booleans?",
    a: "A status string guarantees the component exists in exactly one explicit state at a time (e.g., idle, loading, success, or error), eliminating conflicting booleans."
  },
  "Varför skickar du data i action.payload?": {
    q: "Why do you pass data in action.payload?",
    a: "It follows standard reducer patterns, carrying both the event type and the data required to calculate the next state."
  },
  "Varför tömmer du data vid error?": {
    q: "Why do you clear data when an error occurs?",
    a: "Clearing previous data prevents stale results from appearing valid when the latest network request fails."
  },

  // Missing Follow-Up Questions from React Lists and Tables
  "Hur undviker du farlig HTML när du highlightar?": {
    q: "How do you avoid dangerous HTML when highlighting search matches?",
    a: "I split the text into substrings and render safe React JSX elements instead of injecting raw markup via dangerouslySetInnerHTML."
  },
  "Varför behövs tomt resultat?": {
    q: "Why is an empty state message necessary?",
    a: "The user needs clear confirmation that their search executed successfully but simply found zero matching records."
  },
  "Varför bryter du ut columns?": {
    q: "Why do you extract table columns into a configuration?",
    a: "A column configuration makes table rendering data-driven, reusable, and easy to extend without rewriting table markup."
  },
  "Varför kopierar du listan innan sort?": {
    q: "Why do you copy the list before sorting?",
    a: "Sorting mutates the source array in place, so creating a copy prevents unintended side effects on original state."
  },

  // Missing Follow-Up Questions from Shopping Cart
  "Varför uppdaterar du cart med en ny array?": {
    q: "Why do you update the shopping cart with a new array?",
    a: "Providing a new array reference triggers React's reconciliation cycle predictably and avoids silent in-place mutation bugs."
  },
  "Varför räknar du totalen från cart?": {
    q: "Why do you calculate the total from the cart array?",
    a: "The cart is the single source of truth for user selections, so deriving totals on the fly ensures accurate pricing."
  },
  "Varför använder du quantity?": {
    q: "Why do you track item quantity?",
    a: "Tracking quantity allows the cart to display each product once while incrementing or decrementing counts cleanly."
  },
  "Varför räknar du rabatt separat?": {
    q: "Why do you calculate discounts separately?",
    a: "Breaking calculations down provides transparency so the user can clearly inspect subtotal, discount, and final amount."
  },

  // Missing Follow-Up Questions from Todo List
  "Varför sparar du inputvärdet i state?": {
    q: "Why do you store input values in state?",
    a: "React needs to control and read the current input value before creating and validating a new todo item."
  },
  "Varför använder du map när du markerar en todo?": {
    q: "Why do you use map when toggling a todo?",
    a: "Map produces a new array where only the targeted todo's completed status is toggled, preserving immutability."
  },
  "Varför använder du filter när du tar bort?": {
    q: "Why do you use filter when deleting an item?",
    a: "Filter returns a new array containing only the items that do not match the deleted item's id."
  },
  "Varför räknar du från listan?": {
    q: "Why do you derive item counts directly from the list?",
    a: "Deriving counts from state ensures metrics automatically stay in sync without manual counters that risk drifting."
  },
  "Varför sparar du i localStorage?": {
    q: "Why do you persist state in localStorage?",
    a: "LocalStorage preserves user todos across page reloads without requiring a backend server for this client-side exercise."
  }
};
