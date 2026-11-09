import { createSnippetChallenge } from "../helpers/snippetChallengeBuilder.js";



export const tabsChallenge = createSnippetChallenge({
  id: "tabs",
  title: "Tabs",
  estimatedTime: "20 min",
  interviewPrompt: "Bygg tabs där användaren kan växla mellan olika paneler.",
  currentGoal: "Visa tabbar och aktiv panel.",
  baseWhatToSay:
    "Okej, jag sparar id:t för aktiv tab och renderar innehållet som hör till den.",
  baseCode: `import { useState } from "react";

const tabs = [
  { id: "profile", label: "Profile", content: "Profile content" },
  { id: "settings", label: "Settings", content: "Settings content" },
  { id: "billing", label: "Billing", content: "Billing content" },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("profile");
  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <section>
      {tabs.map((tab) => (
        <button key={tab.id} onClick={() => setActiveTab(tab.id)}>
          {tab.label}
        </button>
      ))}

      <article>{currentTab.content}</article>
    </section>
  );
}

`,
  features: [
    {
      id: "active",
      label: "Aktiv stil",
      colorClass: "feature-search",
      interviewer: "Markera den aktiva tabben visuellt.",
      goal: "Visa vilken tab som är vald.",
      getWhatToSay() {
        return "Okej, då jämför jag varje tabs id med activeTab och lägger på en klass när de matchar.";
      },
      code: `className={tab.id === activeTab ? "tab active" : "tab"}

`,
    },
    {
      id: "keyboard",
      label: "Keyboard",
      colorClass: "feature-category",
      interviewer: "Lägg till stöd för ArrowLeft och ArrowRight.",
      goal: "Byt tab med tangentbord.",
      getWhatToSay() {
        return "Okej, då räknar jag ut index för aktiv tab och flyttar ett steg åt höger eller vänster.";
      },
      code: `function handleKeyDown(event) {
  const index = tabs.findIndex((tab) => tab.id === activeTab);
  if (event.key === "ArrowRight") {
    setActiveTab(tabs[(index + 1) % tabs.length].id);
  }
  if (event.key === "ArrowLeft") {
    setActiveTab(tabs[(index - 1 + tabs.length) % tabs.length].id);
  }
}

`,
    },
    {
      id: "aria",
      label: "ARIA",
      colorClass: "feature-sort",
      interviewer: "Gör tabs mer tillgängliga med roller och selected-state.",
      goal: "Lägg till grundläggande a11y.",
      getWhatToSay() {
        return "Okej, jag lägger role på listan, tabbarna och panelen så strukturen blir tydligare för hjälpmedel.";
      },
      code: `// Wrapper: role="tablist"
// Button: role="tab" aria-selected={tab.id === activeTab}
// Panel: role="tabpanel"

`,
    },
    {
      id: "styling",
      label: "Styling",
      colorClass: "feature-styling",
      interviewer: "Lägg till styling för tabs och aktiv panel.",
      goal: "Visa tabbarna som knappar och panelen som ett tydligt innehåll.",
      getWhatToSay() {
        return "Okej, jag lägger klassnamn på wrapper, tabbar och panel och sköter utseendet i CSS.";
      },
      code: `// Tabs.jsx
// Här importerar jag CSS-filen för tabs-komponenten.
import "./Tabs.css";

<section className="tabs">
  <div className="tab-list">
    {tabs.map((tab) => (
      <button className={tab.id === activeTab ? "tab active" : "tab"}>
        {tab.label}
      </button>
    ))}
  </div>

  <article className="tab-panel">{currentTab.content}</article>
</section>

// Tabs.css
/* Här lägger jag tabbarna på en rad med lite luft. */
.tab-list {
  display: flex;
  gap: 0.5rem;
}

/* Här gör jag varje tab tydlig som ett val. */
.tab {
  padding: 0.55rem 0.8rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #ffffff;
}

/* Här visar jag vilken tab som är aktiv. */
.tab.active {
  color: #ffffff;
  background: #2563eb;
  border-color: #2563eb;
}

/* Här ger jag panelen en tydlig yta. */
.tab-panel {
  margin-top: 0.75rem;
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}

`,
    },
  ],
});

tabsChallenge.getCodeSections = function getTabsSections(selected) {
  const hasActive = selected.includes("active") || selected.includes("styling");
  const hasKeyboard = selected.includes("keyboard");
  const hasAria = selected.includes("aria");
  const hasStyling = selected.includes("styling");

  return [
    {
      id: "imports",
      feature: hasStyling ? "feature-styling" : null,
      code: `// Här behöver jag useState eftersom användaren byter aktiv tab.
import { useState } from "react";
${hasStyling ? `// Styling: Här importerar jag CSS-filen högst upp.
import "./Tabs.css";
` : ""}
`,
    },
    {
      id: "data",
      code: `// Jag börjar med tabbarna som komponenten kan visa.
const tabs = [
  { id: "profile", label: "Profile", content: "Profile content" },
  { id: "settings", label: "Settings", content: "Settings content" },
  { id: "billing", label: "Billing", content: "Billing content" },
];

`,
    },
    {
      id: "state",
      code: `// Här bygger jag tabs-komponenten.
export default function Tabs() {
// Här sparar jag vilken tab som är aktiv.
  const [activeTab, setActiveTab] = useState("profile");

// Här hittar jag innehållet för den aktiva tabben.
  const currentTab = tabs.find((tab) => tab.id === activeTab);

`,
    },
    ...(hasKeyboard
      ? [
          {
            id: "keyboard",
            feature: "feature-category",
            code: `// Keyboard: Här byter jag tab med piltangenterna.
  function handleKeyDown(event) {
    const index = tabs.findIndex((tab) => tab.id === activeTab);

    if (event.key === "ArrowRight") {
      setActiveTab(tabs[(index + 1) % tabs.length].id);
    }

    if (event.key === "ArrowLeft") {
      setActiveTab(tabs[(index - 1 + tabs.length) % tabs.length].id);
    }
  }

`,
          },
        ]
      : []),
    {
      id: "jsx",
      code: `// Här returnerar jag tabbar och aktiv panel.
  return (
{/* Styling: Här ger jag wrappern klassnamnet som CSS-filen stylar. */}
    <section${hasStyling ? ' className="tabs"' : ""}>
{/* Här grupperar jag knapparna som hör till tabs. */}
      <div${hasStyling ? ' className="tab-list"' : ""}${hasAria ? ' role="tablist"' : ""}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
${hasActive ? `            className={tab.id === activeTab ? "tab active" : "tab"}
` : ""}${hasAria ? `            role="tab"
            aria-selected={tab.id === activeTab}
` : ""}${hasKeyboard ? `            onKeyDown={handleKeyDown}
` : ""}            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

{/* Här visar jag innehållet för den aktiva tabben. */}
      <article${hasStyling ? ' className="tab-panel"' : ""}${hasAria ? ' role="tabpanel"' : ""}>
        {currentTab.content}
      </article>
    </section>
  );
}

`,
    },
    ...(hasStyling
      ? [
          {
            id: "styling-css",
            feature: "feature-styling",
            code: `// Tabs.css
/* Här lägger jag tabbarna på en rad med lite luft. */
.tab-list {
  display: flex;
  gap: 0.5rem;
}

/* Här gör jag varje tab tydlig som ett val. */
.tab {
  padding: 0.55rem 0.8rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #ffffff;
}

/* Här visar jag vilken tab som är aktiv. */
.tab.active {
  color: #ffffff;
  background: #2563eb;
  border-color: #2563eb;
}

/* Här ger jag panelen en tydlig yta. */
.tab-panel {
  margin-top: 0.75rem;
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
}

`,
          },
        ]
      : []),
  ];
};

export const autocompleteChallenge = createSnippetChallenge({
  id: "autocomplete",
  title: "Autocomplete",
  estimatedTime: "30 min",
  interviewPrompt: "Bygg ett inputfält som visar förslag medan användaren skriver.",
  currentGoal: "Filtrera förslag baserat på input.",
  baseWhatToSay:
    "Okej, jag sparar inputvärdet och filtrerar en lokal lista med förslag.",
  baseCode: `import { useState } from "react";

const countries = ["Sweden", "Norway", "Denmark", "Finland", "Germany"];

export default function Autocomplete() {
  const [query, setQuery] = useState("");

  const suggestions = countries.filter((country) =>
    country.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <section>
      <input value={query} onChange={(event) => setQuery(event.target.value)} />
      {query && suggestions.map((country) => (
        <button key={country}>{country}</button>
      ))}
    </section>
  );
}

`,
  features: [
    {
      id: "select",
      label: "Välj förslag",
      colorClass: "feature-search",
      interviewer: "När användaren klickar på ett förslag ska inputen fyllas.",
      goal: "Välja suggestion.",
      getWhatToSay() {
        return "Okej, då sätter jag query till det valda värdet när användaren klickar.";
      },
      code: `<button key={country} onClick={() => setQuery(country)}>
  {country}
</button>

`,
    },
    {
      id: "empty",
      label: "Inga träffar",
      colorClass: "feature-empty",
      interviewer: "Visa ett meddelande om inga förslag matchar.",
      goal: "Hantera tomt resultat.",
      getWhatToSay() {
        return "Okej, då kontrollerar jag längden på suggestions när query har ett värde.";
      },
      code: `{query && suggestions.length === 0 && <p>No matches found.</p>}

`,
    },
    {
      id: "limit",
      label: "Begränsa",
      colorClass: "feature-sort",
      interviewer: "Visa max fem förslag.",
      goal: "Begränsa suggestions.",
      getWhatToSay() {
        return "Okej, då använder jag slice på den filtrerade listan innan renderingen.";
      },
      code: `const visibleSuggestions = suggestions.slice(0, 5);

`,
    },
    {
      id: "keyboard",
      label: "Keyboard",
      colorClass: "feature-count",
      interviewer: "Låt användaren välja första förslaget med Enter.",
      goal: "Stöd enkel tangentbordsinteraktion.",
      getWhatToSay() {
        return "Okej, om användaren trycker Enter och det finns förslag kan jag sätta query till första träffen.";
      },
      code: `function handleKeyDown(event) {
  if (event.key === "Enter" && suggestions.length > 0) {
    setQuery(suggestions[0]);
  }
}

// Input får onKeyDown={handleKeyDown}

`,
    },
  ],
});

autocompleteChallenge.getCodeSections = function getAutocompleteSections(
  selected,
) {
  const hasSelect = selected.includes("select");
  const hasEmpty = selected.includes("empty");
  const hasLimit = selected.includes("limit");
  const hasKeyboard = selected.includes("keyboard");
  const suggestionSource = hasLimit ? "visibleSuggestions" : "suggestions";

  return [
    {
      id: "imports",
      code: `// Här behöver jag useState eftersom användaren skriver i inputfältet.
import { useState } from "react";

`,
    },
    {
      id: "data",
      code: `// Jag börjar med en lokal lista med förslag.
const countries = ["Sweden", "Norway", "Denmark", "Finland", "Germany"];

`,
    },
    {
      id: "state",
      code: `// Här bygger jag autocomplete-komponenten.
export default function Autocomplete() {
// Här sparar jag texten som användaren skriver.
  const [query, setQuery] = useState("");

`,
    },
    {
      id: "derived",
      feature: hasLimit ? "feature-sort" : null,
      code: `// Här filtrerar jag förslagen baserat på inputvärdet.
  const suggestions = countries.filter((country) =>
    country.toLowerCase().includes(query.toLowerCase()),
  );
${hasLimit ? `
// Begränsa: Här visar jag bara de första fem träffarna.
  const visibleSuggestions = suggestions.slice(0, 5);
` : ""}
`,
    },
    ...(hasKeyboard
      ? [
          {
            id: "keyboard",
            feature: "feature-count",
            code: `// Keyboard: Här väljer jag första förslaget med Enter.
  function handleKeyDown(event) {
    if (event.key === "Enter" && ${suggestionSource}.length > 0) {
      setQuery(${suggestionSource}[0]);
    }
  }

`,
          },
        ]
      : []),
    {
      id: "jsx",
      code: `// Här returnerar jag inputfältet och förslagen.
  return (
    <section>
{/* Här kopplar jag inputfältet till query-state. */}
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
${hasKeyboard ? `        onKeyDown={handleKeyDown}
` : ""}      />

      {query && ${suggestionSource}.map((country) => (
        <button
          key={country}
${hasSelect ? `          onClick={() => setQuery(country)}
` : ""}        >
          {country}
        </button>
      ))}
${hasEmpty ? `
{/* Inga träffar: Här visar jag ett tomt läge när inget matchar. */}
      {query && suggestions.length === 0 && <p>No matches found.</p>}
` : ""}    </section>
  );
}

`,
    },
  ];
};

export const imageGalleryChallenge = createSnippetChallenge({
  id: "image-gallery",
  title: "Image gallery",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg ett galleri med bilder och en vald bild.",
  currentGoal: "Visa thumbnails och vald bild.",
  baseWhatToSay:
    "Okej, jag sparar id:t för vald bild och använder det för att visa huvudbilden.",
  baseCode: `import { useState } from "react";

const images = [
  { id: 1, alt: "Mountains", url: "/images/mountains.jpg" },
  { id: 2, alt: "Forest", url: "/images/forest.jpg" },
  { id: 3, alt: "Ocean", url: "/images/ocean.jpg" },
];

export default function ImageGallery() {
  const [selectedId, setSelectedId] = useState(1);
  const selectedImage = images.find((image) => image.id === selectedId);

  return (
    <section>
      <img src={selectedImage.url} alt={selectedImage.alt} />
      {images.map((image) => (
        <button key={image.id} onClick={() => setSelectedId(image.id)}>
          {image.alt}
        </button>
      ))}
    </section>
  );
}

`,
  features: [
    {
      id: "next-prev",
      label: "Next/prev",
      colorClass: "feature-search",
      interviewer: "Lägg till next och previous.",
      goal: "Bläddra mellan bilder.",
      getWhatToSay() {
        return "Okej, då räknar jag ut index för vald bild och flyttar ett steg i taget.";
      },
      code: `const currentIndex = images.findIndex((image) => image.id === selectedId);

function showNext() {
  const nextIndex = (currentIndex + 1) % images.length;
  setSelectedId(images[nextIndex].id);
}

function showPrevious() {
  const previousIndex = (currentIndex - 1 + images.length) % images.length;
  setSelectedId(images[previousIndex].id);
}

`,
    },
    {
      id: "caption",
      label: "Caption",
      colorClass: "feature-category",
      interviewer: "Visa bildens caption under huvudbilden.",
      goal: "Visa mer info om vald bild.",
      getWhatToSay() {
        return "Okej, jag lägger caption på bilddatan och visar den för selectedImage.";
      },
      code: `{ id: 1, alt: "Mountains", caption: "A calm mountain view", url: "/images/mountains.jpg" }

// I JSX:
// <p>{selectedImage.caption}</p>

`,
    },
    {
      id: "empty",
      label: "Fallback",
      colorClass: "feature-empty",
      interviewer: "Visa fallback om det inte finns några bilder.",
      goal: "Hantera tomt galleri.",
      getWhatToSay() {
        return "Okej, jag kontrollerar om images är tom innan jag försöker visa selectedImage.";
      },
      code: `if (images.length === 0) {
  return <p>No images available.</p>;
}

`,
    },
  ],
});

imageGalleryChallenge.getCodeSections = function getImageGallerySections(
  selected,
) {
  const hasNextPrev = selected.includes("next-prev");
  const hasCaption = selected.includes("caption");
  const hasEmpty = selected.includes("empty");

  return [
    {
      id: "imports",
      code: `// Här behöver jag useState eftersom användaren väljer bild.
import { useState } from "react";

`,
    },
    {
      id: "data",
      feature: hasCaption ? "feature-category" : null,
      code: `// Jag börjar med bilddata som galleriet kan visa.
const images = [
  {
    id: 1,
    alt: "Mountains",
${hasCaption ? `    caption: "A calm mountain view",
` : ""}    url: "/images/mountains.jpg",
  },
  {
    id: 2,
    alt: "Forest",
${hasCaption ? `    caption: "A green forest path",
` : ""}    url: "/images/forest.jpg",
  },
  {
    id: 3,
    alt: "Ocean",
${hasCaption ? `    caption: "Waves by the shore",
` : ""}    url: "/images/ocean.jpg",
  },
];

`,
    },
    {
      id: "state",
      code: `// Här bygger jag galleriet med en vald bild.
export default function ImageGallery() {
// Här sparar jag id:t för bilden som är vald.
  const [selectedId, setSelectedId] = useState(1);

`,
    },
    ...(hasEmpty
      ? [
          {
            id: "empty",
            feature: "feature-empty",
            code: `// Fallback: Här stoppar jag renderingen om det inte finns bilder.
  if (images.length === 0) {
    return <p>No images available.</p>;
  }

`,
          },
        ]
      : []),
    {
      id: "derived",
      code: `// Här hittar jag bilden som matchar valt id.
  const selectedImage = images.find((image) => image.id === selectedId);
${hasNextPrev ? `// Next/prev: Här hittar jag indexet så jag kan bläddra i listan.
  const currentIndex = images.findIndex((image) => image.id === selectedId);
` : ""}
`,
    },
    ...(hasNextPrev
      ? [
          {
            id: "navigation",
            feature: "feature-search",
            code: `// Next/prev: Här flyttar jag till nästa bild och loopar från slutet.
  function showNext() {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedId(images[nextIndex].id);
  }

// Next/prev: Här flyttar jag bakåt och loopar från början.
  function showPrevious() {
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedId(images[previousIndex].id);
  }

`,
          },
        ]
      : []),
    {
      id: "jsx",
      code: `// Här returnerar jag huvudbilden och thumbnails.
  return (
    <section>
{/* Här visar jag den bild som matchar selectedId. */}
      <img src={selectedImage.url} alt={selectedImage.alt} />
${hasCaption ? `
{/* Caption: Här visar jag texten som hör till vald bild. */}
      <p>{selectedImage.caption}</p>
` : ""}${hasNextPrev ? `
{/* Next/prev: Här låter jag användaren bläddra mellan bilderna. */}
      <button type="button" onClick={showPrevious}>
        Previous
      </button>
      <button type="button" onClick={showNext}>
        Next
      </button>
` : ""}
{/* Här renderar jag en knapp för varje thumbnail. */}
      {images.map((image) => (
        <button
          key={image.id}
          type="button"
          onClick={() => setSelectedId(image.id)}
        >
          {image.alt}
        </button>
      ))}
    </section>
  );
}

`,
    },
  ];
};

export const toastChallenge = createSnippetChallenge({
  id: "toast-system",
  title: "Notification/toast system",
  estimatedTime: "30 min",
  interviewPrompt: "Bygg ett enkelt toast-system.",
  currentGoal: "Visa en toast när användaren klickar.",
  baseWhatToSay:
    "Okej, jag sparar en lista med toasts i state och renderar dem längst upp eller längst ner.",
  baseCode: `import { useState } from "react";

export default function ToastDemo() {
  const [toasts, setToasts] = useState([]);

  function showToast() {
    setToasts([{ id: Date.now(), message: "Saved!" }]);
  }

  return (
    <section>
      <button onClick={showToast}>Save</button>
      {toasts.map((toast) => (
        <p key={toast.id}>{toast.message}</p>
      ))}
    </section>
  );
}

`,
  features: [
    {
      id: "multiple",
      label: "Flera",
      colorClass: "feature-search",
      interviewer: "Tillåt flera toasts samtidigt.",
      goal: "Lägg till nya toasts utan att ersätta gamla.",
      getWhatToSay() {
        return "Okej, då lägger jag den nya toasten sist i arrayen istället för att ersätta hela listan.";
      },
      code: `setToasts((currentToasts) => [
  ...currentToasts,
  { id: Date.now(), message: "Saved!" },
]);

`,
    },
    {
      id: "dismiss",
      label: "Stäng",
      colorClass: "feature-category",
      interviewer: "Lägg till en knapp för att stänga en toast.",
      goal: "Ta bort toast manuellt.",
      getWhatToSay() {
        return "Okej, jag tar bort rätt toast genom att filtrera på id.";
      },
      code: `function dismissToast(toastId) {
  setToasts((currentToasts) =>
    currentToasts.filter((toast) => toast.id !== toastId),
  );
}

`,
    },
    {
      id: "auto",
      label: "Auto-hide",
      colorClass: "feature-sort",
      interviewer: "Göm toasten automatiskt efter några sekunder.",
      goal: "Ta bort toast efter timeout.",
      getWhatToSay() {
        return "Okej, när jag skapar toasten kan jag samtidigt starta en timeout som tar bort just den toasten.";
      },
      code: `function showToast() {
  const toast = { id: Date.now(), message: "Saved!" };
  setToasts((currentToasts) => [...currentToasts, toast]);

  setTimeout(() => {
    setToasts((currentToasts) =>
      currentToasts.filter((item) => item.id !== toast.id),
    );
  }, 3000);
}

`,
    },
    {
      id: "type",
      label: "Typ",
      colorClass: "feature-stock",
      interviewer: "Låt toasten ha olika typer, till exempel success och error.",
      goal: "Visa olika toast-varianter.",
      getWhatToSay() {
        return "Okej, jag lägger type på toast-objektet så UI:t kan styla eller visa olika meddelanden.";
      },
      code: `function showToast(type = "success") {
  const message = type === "error" ? "Something went wrong" : "Saved!";
  setToasts((currentToasts) => [
    ...currentToasts,
    { id: Date.now(), message, type },
  ]);
}

// I JSX:
// <p className={\`toast \${toast.type}\`}>{toast.message}</p>

`,
    },
  ],
});

toastChallenge.getCodeSections = function getToastSections(selected) {
  const hasMultiple = selected.includes("multiple");
  const hasDismiss = selected.includes("dismiss") || selected.includes("auto");
  const hasAuto = selected.includes("auto");
  const hasType = selected.includes("type");

  return [
    {
      id: "imports",
      code: `// Här behöver jag useState eftersom toast-listan kan ändras.
import { useState } from "react";

`,
    },
    {
      id: "state",
      code: `// Här bygger jag en liten demo för toast-meddelanden.
export default function ToastDemo() {
// Här sparar jag alla toasts som ska visas.
  const [toasts, setToasts] = useState([]);

`,
    },
    ...(hasDismiss
      ? [
          {
            id: "dismiss",
            feature: "feature-category",
            code: `// Stäng: Här tar jag bort den toast som matchar id:t.
  function dismissToast(toastId) {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== toastId),
    );
  }

`,
          },
        ]
      : []),
    {
      id: "show-toast",
      feature: hasMultiple ? "feature-search" : null,
      code: `// Här skapar jag en toast när användaren klickar.
  function showToast(${hasType ? `type = "success"` : ""}) {
${hasType ? `// Typ: Här väljer jag meddelande utifrån toast-typen.
    const message = type === "error" ? "Something went wrong" : "Saved!";
` : ""}    const toast = {
      id: Date.now(),
      message: ${hasType ? "message" : `"Saved!"`},
${hasType ? `      type,
` : ""}    };

${hasMultiple || hasAuto ? `// Flera: Här lägger jag till toasten utan att ta bort de gamla.
    setToasts((currentToasts) => [...currentToasts, toast]);
` : `// Här ersätter jag tidigare toast med den nya.
    setToasts([toast]);
`}${hasAuto ? `
// Auto-hide: Här tar jag bort samma toast efter tre sekunder.
    setTimeout(() => {
      dismissToast(toast.id);
    }, 3000);
` : ""}  }

`,
    },
    {
      id: "jsx",
      code: `// Här returnerar jag knappen och toast-listan.
  return (
    <section>
      <button type="button" onClick={() => showToast()}>
        Save
      </button>
${hasType ? `      <button type="button" onClick={() => showToast("error")}>
        Show error
      </button>
` : ""}
{/* Här renderar jag varje toast som finns i state. */}
      {toasts.map((toast) => (
        <article${hasType ? ` className={\`toast \${toast.type}\`}` : ""} key={toast.id}>
          <p>{toast.message}</p>
${hasDismiss ? `          <button type="button" onClick={() => dismissToast(toast.id)}>
            Close
          </button>
` : ""}        </article>
      ))}
    </section>
  );
}

`,
    },
  ];
};

export const darkModeChallenge = createSnippetChallenge({
  id: "dark-mode-toggle",
  title: "Dark mode toggle",
  estimatedTime: "20 min",
  interviewPrompt: "Bygg en knapp som växlar mellan light och dark mode.",
  currentGoal: "Toggla tema i komponenten.",
  baseWhatToSay:
    "Okej, jag sparar temat i state och använder det för att sätta klass på wrappern.",
  baseCode: `import { useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  return (
    <section className={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle theme
      </button>
      <p>Current theme: {theme}</p>
    </section>
  );
}

`,
  features: [
    {
      id: "label",
      label: "Tydlig etikett",
      colorClass: "feature-search",
      interviewer: "Knappen ska säga vilket tema den byter till.",
      goal: "Gör knapptexten tydligare.",
      getWhatToSay() {
        return "Okej, då räknar jag ut nästa tema och använder det i knapptexten.";
      },
      code: `const nextTheme = theme === "light" ? "dark" : "light";

<button onClick={() => setTheme(nextTheme)}>
  Switch to {nextTheme} mode
</button>

`,
    },
    {
      id: "persist",
      label: "localStorage",
      colorClass: "feature-category",
      interviewer: "Spara temat i localStorage.",
      goal: "Behåll tema efter refresh.",
      getWhatToSay() {
        return "Okej, jag läser startvärdet från localStorage och skriver tillbaka när temat ändras.";
      },
      code: `const [theme, setTheme] = useState(
  () => localStorage.getItem("theme") || "light",
);

function changeTheme(nextTheme) {
  setTheme(nextTheme);
  localStorage.setItem("theme", nextTheme);
}

`,
    },
    {
      id: "system",
      label: "Systemtema",
      colorClass: "feature-sort",
      interviewer: "Använd systemets dark mode som default.",
      goal: "Läs prefers-color-scheme.",
      getWhatToSay() {
        return "Okej, om inget finns sparat kan jag läsa prefers-color-scheme och välja starttema därifrån.";
      },
      code: `const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = prefersDark ? "dark" : "light";

`,
    },
  ],
});

darkModeChallenge.getCodeSections = function getDarkModeSections(selected) {
  const hasLabel = selected.includes("label");
  const hasPersist = selected.includes("persist");
  const hasSystem = selected.includes("system");
  const initializer = hasPersist || hasSystem
    ? `() => {
${hasPersist ? `    const savedTheme = localStorage.getItem("theme");
` : ""}${hasSystem ? `    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const systemTheme = prefersDark ? "dark" : "light";

` : ""}    return ${hasPersist ? "savedTheme || " : ""}${hasSystem ? "systemTheme" : `"light"`};
  }`
    : `"light"`;

  return [
    {
      id: "imports",
      code: `// Här behöver jag useState eftersom användaren kan byta tema.
import { useState } from "react";

`,
    },
    {
      id: "state",
      code: `// Här bygger jag komponenten som växlar tema.
export default function ThemeToggle() {
// Här sparar jag vilket tema som är aktivt.
  const [theme, setTheme] = useState(${initializer});
${hasLabel ? `// Tydlig label: Här räknar jag ut vilket tema knappen byter till.
  const nextTheme = theme === "light" ? "dark" : "light";
` : ""}
`,
    },
    {
      id: "handlers",
      feature: hasPersist ? "feature-category" : null,
      code: `// Här byter jag mellan light och dark.
  function changeTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
${hasPersist ? `
// localStorage: Här sparar jag temat så det finns kvar efter refresh.
    localStorage.setItem("theme", nextTheme);
` : ""}  }

`,
    },
    {
      id: "jsx",
      code: `// Här returnerar jag wrappern som får temaklassen.
  return (
    <section className={theme}>
      <button type="button" onClick={changeTheme}>
        ${hasLabel ? "Switch to {nextTheme} mode" : "Toggle theme"}
      </button>
      <p>Current theme: {theme}</p>
    </section>
  );
}

`,
    },
  ];
};

export const dropdownMenuChallenge = createSnippetChallenge({
  id: "dropdown-menu",
  title: "Dropdown menu",
  estimatedTime: "20 min",
  interviewPrompt:
    "Bygg en dropdown-meny som kan öppnas och stängas.",
  currentGoal: "Visa en knapp och en meny med alternativ.",
  baseWhatToSay:
    "Okej, jag börjar med en knapp och en lista med alternativ som visas i menyn.",
  baseCode: `const options = ["Profile", "Settings", "Logout"];

export default function DropdownMenu() {
  return (
    <div>
      <button>Menu</button>

      <ul>
        {options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
    </div>
  );
}

`,
  baseFollowUpQuestions: [
    {
      question: "Varför börjar du med en vanlig lista?",
      answer:
        "Menyn är i grunden en lista med val, så jag börjar med semantisk HTML och gör interaktionen tydlig efteråt.",
    },
  ],
  features: [
    {
      id: "toggle",
      label: "Öppna/stäng",
      colorClass: "feature-search",
      interviewer: "Gör så att knappen öppnar och stänger menyn.",
      goal: "Styra synligheten med state.",
      getWhatToSay() {
        return "Okej, jag sparar om menyn är öppen och togglar värdet när knappen klickas.";
      },
      code: `import { useState } from "react";

const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(!isOpen)}>Menu</button>

{isOpen && (
  <ul>
    {options.map((option) => (
      <li key={option}>{option}</li>
    ))}
  </ul>
)}

`,
    },
    {
      id: "select",
      label: "Välj item",
      colorClass: "feature-category",
      interviewer: "Visa vilket alternativ användaren har valt.",
      goal: "Spara valt alternativ.",
      getWhatToSay() {
        return "Okej, jag sparar valt option i state och stänger menyn när användaren väljer.";
      },
      code: `const [selectedOption, setSelectedOption] = useState("Profile");

function selectOption(option) {
  setSelectedOption(option);
  setIsOpen(false);
}

<button onClick={() => selectOption(option)}>{option}</button>
<p>Selected: {selectedOption}</p>

`,
    },
    {
      id: "outside",
      label: "Klick utanför",
      colorClass: "feature-sort",
      interviewer: "Stäng dropdownen när användaren klickar utanför.",
      goal: "Hantera klick utanför komponenten.",
      getWhatToSay() {
        return "Okej, jag använder en ref för menyn och lyssnar på klick i dokumentet.";
      },
      code: `import { useEffect, useRef } from "react";

const menuRef = useRef(null);

useEffect(() => {
  function handleClickOutside(event) {
    if (!menuRef.current?.contains(event.target)) {
      setIsOpen(false);
    }
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

<div ref={menuRef}>...</div>

`,
    },
    {
      id: "keyboard",
      label: "Keyboard",
      colorClass: "feature-count",
      interviewer: "Låt Escape stänga menyn.",
      goal: "Göra dropdownen lättare att använda med tangentbord.",
      getWhatToSay() {
        return "Okej, Escape är ett vanligt sätt att stänga en öppen meny med tangentbordet.";
      },
      code: `useEffect(() => {
  function handleKeyDown(event) {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  }

  document.addEventListener("keydown", handleKeyDown);
  return () => document.removeEventListener("keydown", handleKeyDown);
}, []);

`,
    },
  ],
});

dropdownMenuChallenge.getCodeSections = function getDropdownMenuSections(
  selected,
) {
  const hasToggle = selected.includes("toggle") || selected.includes("select") || selected.includes("outside") || selected.includes("keyboard");
  const hasSelect = selected.includes("select");
  const hasOutside = selected.includes("outside");
  const hasKeyboard = selected.includes("keyboard");
  const imports = [
    hasKeyboard || hasOutside ? "useEffect" : null,
    hasOutside ? "useRef" : null,
    hasToggle ? "useState" : null,
  ].filter(Boolean);

  return [
    {
      id: "imports",
      code: imports.length
        ? `// Här importerar jag hooks för menyinteraktionen.
import { ${imports.join(", ")} } from "react";

`
        : "",
    },
    {
      id: "data",
      code: `// Jag börjar med valen som dropdownen ska visa.
const options = ["Profile", "Settings", "Logout"];

`,
    },
    {
      id: "state",
      code: `// Här bygger jag dropdown-menyn.
export default function DropdownMenu() {
${hasToggle ? `// Öppna/stäng: Här sparar jag om menyn är öppen.
  const [isOpen, setIsOpen] = useState(false);
` : ""}${hasSelect ? `// Välj item: Här sparar jag vilket val användaren har klickat på.
  const [selectedOption, setSelectedOption] = useState("Profile");
` : ""}${hasOutside ? `// Klick utanför: Här håller jag reda på wrapper-elementet.
  const menuRef = useRef(null);
` : ""}
`,
    },
    ...(hasSelect
      ? [
          {
            id: "select",
            feature: "feature-category",
            code: `// Välj item: Här sparar jag valet och stänger menyn.
  function selectOption(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

`,
          },
        ]
      : []),
    ...(hasOutside
      ? [
          {
            id: "outside",
            feature: "feature-sort",
            code: `// Klick utanför: Här stänger jag menyn om klicket sker utanför wrappern.
  useEffect(() => {
    function handleClickOutside(event) {
      if (!menuRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

`,
          },
        ]
      : []),
    ...(hasKeyboard
      ? [
          {
            id: "keyboard",
            feature: "feature-count",
            code: `// Keyboard: Här stänger jag menyn när användaren trycker Escape.
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

`,
          },
        ]
      : []),
    {
      id: "jsx",
      code: `// Här returnerar jag knappen och menyvalen.
  return (
    <div${hasOutside ? " ref={menuRef}" : ""}>
${hasSelect ? `      <p>Selected: {selectedOption}</p>
` : ""}      <button${hasToggle ? ` type="button" onClick={() => setIsOpen(!isOpen)}` : ""}>
        Menu
      </button>

${hasToggle ? `      {isOpen && (
        <ul>
          {options.map((option) => (
            <li key={option}>
${hasSelect ? `              <button type="button" onClick={() => selectOption(option)}>
                {option}
              </button>
` : `              {option}
`}            </li>
          ))}
        </ul>
      )}
` : `      <ul>
        {options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
`}    </div>
  );
}

`,
    },
  ].filter((section) => section.code.trim() !== "");
};

dropdownMenuChallenge.getCodeSections = function getDropdownMenuSplitSections(
  selected,
) {
  const hasToggle =
    selected.includes("toggle") ||
    selected.includes("select") ||
    selected.includes("outside") ||
    selected.includes("keyboard");
  const hasSelect = selected.includes("select");
  const hasOutside = selected.includes("outside");
  const hasKeyboard = selected.includes("keyboard");
  const imports = [
    hasKeyboard || hasOutside ? "useEffect" : null,
    hasOutside ? "useRef" : null,
    hasToggle ? "useState" : null,
  ].filter(Boolean);

  return [
    ...(imports.length > 0
      ? [
          {
            id: "imports",
            feature: "feature-shared",
            code: `// Här importerar jag hooks för menyinteraktionen.
import { ${imports.join(", ")} } from "react";

`,
          },
        ]
      : []),
    {
      id: "data",
      code: `// Jag börjar med valen som dropdownen ska visa.
const options = ["Profile", "Settings", "Logout"];

// Här bygger jag dropdown-menyn.
export default function DropdownMenu() {

`,
    },
    ...(hasToggle
      ? [
          {
            id: "toggle-state",
            feature: "feature-search",
            code: `// Öppna/stäng: Här sparar jag om menyn är öppen.
  const [isOpen, setIsOpen] = useState(false);

`,
          },
        ]
      : []),
    ...(hasSelect
      ? [
          {
            id: "select-state",
            feature: "feature-category",
            code: `// Välj item: Här sparar jag vilket val användaren har klickat på.
  const [selectedOption, setSelectedOption] = useState("Profile");

`,
          },
          {
            id: "select-handler",
            feature: "feature-category",
            code: `// Välj item: Här sparar jag valet och stänger menyn.
  function selectOption(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

`,
          },
        ]
      : []),
    ...(hasOutside
      ? [
          {
            id: "outside-ref",
            feature: "feature-sort",
            code: `// Klick utanför: Här håller jag reda på wrapper-elementet.
  const menuRef = useRef(null);

`,
          },
          {
            id: "outside-effect",
            feature: "feature-sort",
            code: `// Klick utanför: Här stänger jag menyn om klicket sker utanför wrappern.
  useEffect(() => {
    function handleClickOutside(event) {
      if (!menuRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

`,
          },
        ]
      : []),
    ...(hasKeyboard
      ? [
          {
            id: "keyboard-effect",
            feature: "feature-count",
            code: `// Keyboard: Här stänger jag menyn när användaren trycker Escape.
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

`,
          },
        ]
      : []),
    {
      id: "return-start",
      code: `// Här returnerar jag knappen och menyvalen.
  return (
`,
    },
    ...(hasOutside
      ? [
          {
            id: "outside-wrapper",
            feature: "feature-sort",
            code: `    <div ref={menuRef}>
`,
          },
        ]
      : [
          {
            id: "wrapper",
            code: `    <div>
`,
          },
        ]),
    ...(hasSelect
      ? [
          {
            id: "selected-label",
            feature: "feature-category",
            code: `      <p>Selected: {selectedOption}</p>
`,
          },
        ]
      : []),
    ...(hasToggle
      ? [
          {
            id: "toggle-button",
            feature: "feature-search",
            code: `      {/* Öppna/stäng: Här togglar knappen menyn. */}
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Menu
      </button>

      {isOpen && (
        <ul>
          {options.map((option) => (
            <li key={option}>
`,
          },
        ]
      : [
          {
            id: "static-button-list",
            code: `      <button>Menu</button>

      <ul>
        {options.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ul>
`,
          },
        ]),
    ...(hasToggle && hasSelect
      ? [
          {
            id: "select-option-button",
            feature: "feature-category",
            code: `              <button type="button" onClick={() => selectOption(option)}>
                {option}
              </button>
`,
          },
        ]
      : []),
    ...(hasToggle && !hasSelect
      ? [
          {
            id: "option-text",
            code: `              {option}
`,
          },
        ]
      : []),
    ...(hasToggle
      ? [
          {
            id: "toggle-list-end",
            feature: "feature-search",
            code: `            </li>
          ))}
        </ul>
      )}
`,
          },
        ]
      : []),
    {
      id: "component-end",
      code: `    </div>
  );
}

`,
    },
  ].filter((section) => section.code.trim() !== "");
};


