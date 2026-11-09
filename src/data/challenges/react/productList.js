export const productListChallenge = {
  id: "product-list",
  title: "Product list",
  difficulty: "Junior",
  estimatedTime: "25 min",

  interviewPrompt: "Bygg en komponent som visar en lista med produkter.",
  currentGoal: "Visa produkterna på sidan.",

  baseWhatToSay:
    "Okej, jag börjar med lite exempeldata och renderar ut produkterna med map.",

  baseFollowUpQuestions: [
    {
      question: "Varför använder du map här?",
      answer:
        "För att jag vill gå igenom varje produkt och returnera JSX för varje item i listan.",
    },
    {
      question: "Varför använder du key?",
      answer:
        "React behöver en key för att kunna hålla koll på varje item när listan uppdateras.",
    },
  ],

  followUpQuestions: [
    {
      featureIds: ["search", "category", "price", "stock"],
      question: "Varför filtrerar du innan renderingen?",
      answer:
        "Då blir JSX:en renare, och jag mappar bara över listan som faktiskt ska visas.",
    },
    {
      featureIds: ["sort"],
      question: "Varför kopierar du arrayen innan sortering?",
      answer:
        "För att sort ändrar arrayen direkt. Med en kopia undviker jag att mutera originaldatan.",
    },
    {
      featureIds: ["favorites"],
      question: "Varför sparar du bara id för favoriter?",
      answer:
        "Då slipper jag kopiera hela produkten till state. Produkten finns redan i products, så id räcker för att veta vilka som är valda.",
    },
    {
      featureIds: ["count"],
      question: "Varför använder du längden på listan som visas?",
      answer:
        "Då räknar jag samma lista som användaren faktiskt ser, även om sök, filter eller sortering är aktiva.",
    },
    {
      featureIds: ["reset"],
      question: "Vad ska reset-knappen nollställa?",
      answer:
        "Den ska bara nollställa de val som finns i den aktuella lösningen, till exempel söktext, kategori, prisfilter, lagerfilter, sortering och favoriter.",
    },
    {
      featureIds: ["empty"],
      question: "Varför visar du empty state före listan?",
      answer:
        "Då kan jag reagera direkt på att den synliga listan är tom, utan att ändra själva map-logiken.",
    },
    {
      featureIds: ["styling"],
      question: "Varför lägger du styling i en egen CSS-fil?",
      answer:
        "Komponenten blir lättare att läsa eftersom JSX:en visar strukturen och CSS-filen tar hand om utseendet.",
    },
  ],

  features: [
    {
      id: "search",
      label: "Sök",
      colorClass: "feature-search",
      interviewer:
        "Bra. Lägg nu till ett sökfält så användaren kan söka på produktnamn.",
      goal: "Låt användaren söka bland produkterna.",
      getWhatToSay(selectedBefore) {
        if (selectedBefore.includes("sort")) {
          return "Okej, då lägger jag sökningen före sorteringen så att jag först får rätt produkter och sedan sorterar resultatet.";
        }

        if (selectedBefore.includes("category")) {
          return "Okej, då kombinerar jag sökningen med kategorifiltret så att båda villkoren påverkar listan.";
        }

        return "Okej, då behöver jag hålla reda på vad användaren skriver och använda det för att filtrera listan.";
      },
    },
    {
      id: "category",
      label: "Kategori",
      colorClass: "feature-category",
      interviewer:
        "Lägg till så att användaren kan filtrera produkterna efter kategori.",
      goal: "Låt användaren välja vilken kategori som ska visas.",
      getWhatToSay(selectedBefore) {
        if (selectedBefore.includes("search")) {
          return "Okej, då lägger jag till ett kategorival och kombinerar det med sökningen.";
        }

        if (selectedBefore.includes("sort")) {
          return "Okej, då filtrerar jag först fram rätt kategori och låter sorteringen jobba på den listan.";
        }

        return "Okej, då sparar jag vald kategori och använder den för att bestämma vilka produkter som ska visas.";
      },
    },
    {
      id: "price",
      label: "Prisfilter",
      colorClass: "feature-price",
      interviewer:
        "Lägg till ett prisfilter så användaren kan visa produkter under ett maxpris.",
      goal: "Filtrera produkterna efter pris.",
      getWhatToSay(selectedBefore) {
        if (
          selectedBefore.includes("search") ||
          selectedBefore.includes("category")
        ) {
          return "Okej, då lägger jag priset som ännu ett villkor i samma filterkedja, så alla aktiva krav påverkar samma synliga lista.";
        }

        return "Okej, då behöver jag ett maxpris i state och filtrerar bort produkter som är dyrare än det.";
      },
    },
    {
      id: "stock",
      label: "Lagerstatus",
      colorClass: "feature-stock",
      interviewer:
        "Lägg till så att användaren kan välja att bara visa produkter som finns i lager.",
      goal: "Filtrera på produkter som är i lager.",
      getWhatToSay(selectedBefore) {
        if (selectedBefore.includes("price")) {
          return "Okej, då kombinerar jag lagerstatus med prisfiltret så att båda villkoren gäller samtidigt.";
        }

        return "Okej, då behöver varje produkt veta om den finns i lager, och sedan kan jag filtrera på det valet.";
      },
    },
    {
      id: "sort",
      label: "Sortering",
      colorClass: "feature-sort",
      interviewer:
        "Lägg till så att användaren kan sortera produkterna efter pris.",
      goal: "Låt användaren ändra ordningen på produkterna.",
      getWhatToSay(selectedBefore) {
        if (
          selectedBefore.includes("search") ||
          selectedBefore.includes("category") ||
          selectedBefore.includes("price") ||
          selectedBefore.includes("stock")
        ) {
          return "Okej, då sorterar jag den lista som redan är filtrerad, så ordningen ändras på det som faktiskt visas.";
        }

        return "Okej, då lägger jag till ett val för sortering och sorterar en kopia av produktlistan.";
      },
    },
    {
      id: "favorites",
      label: "Favoriter",
      colorClass: "feature-favorites",
      interviewer:
        "Lägg till så att användaren kan markera produkter som favoriter.",
      goal: "Låt användaren spara och ta bort favoriter.",
      getWhatToSay() {
        return "Okej, då sparar jag id:n för favoriter i state och togglar varje produkt när användaren klickar.";
      },
    },
    {
      id: "count",
      label: "Antal träffar",
      colorClass: "feature-count",
      interviewer:
        "Visa hur många produkter som matchar det användaren ser just nu.",
      goal: "Visa antal produkter i den aktuella listan.",
      getWhatToSay(selectedBefore) {
        if (
          selectedBefore.includes("search") ||
          selectedBefore.includes("category") ||
          selectedBefore.includes("price") ||
          selectedBefore.includes("stock")
        ) {
          return "Okej, då räknar jag den filtrerade listan, inte originaldatan, så siffran matchar det som visas.";
        }

        return "Okej, då kan jag visa längden på listan som renderas.";
      },
    },
    {
      id: "reset",
      label: "Reset",
      colorClass: "feature-reset",
      interviewer:
        "Lägg till en knapp som nollställer de val användaren har gjort.",
      goal: "Låt användaren återställa listan.",
      getWhatToSay(selectedBefore) {
        if (selectedBefore.length > 0) {
          return "Okej, då samlar jag återställningen i en funktion så att alla aktiva val går tillbaka till startläget.";
        }

        return "Okej, jag lägger in reset som en egen funktion. Eftersom inga val finns än finns det inget konkret att nollställa i den här versionen.";
      },
    },
    {
      id: "empty",
      label: "Tom lista",
      colorClass: "feature-empty",
      interviewer:
        "Visa ett meddelande om inga produkter matchar det användaren valt.",
      goal: "Visa ett meddelande när listan är tom.",
      getWhatToSay(selectedBefore) {
        if (
          selectedBefore.includes("search") ||
          selectedBefore.includes("category") ||
          selectedBefore.includes("price") ||
          selectedBefore.includes("stock")
        ) {
          return "Okej, eftersom listan kan bli tom efter filtrering visar jag ett enkelt meddelande istället för en tom yta.";
        }

        return "Okej, då lägger jag in en kontroll som visar ett meddelande om produktlistan är tom.";
      },
    },
    {
      id: "styling",
      label: "Styling",
      colorClass: "feature-styling",
      interviewer:
        "Lägg till enkel styling så produktlistan blir tydligare att läsa.",
      goal: "Lägg till klassnamn och en egen CSS-fil.",
      getWhatToSay() {
        return "Okej, jag ger komponenten tydliga klassnamn och lägger själva utseendet i en CSS-fil.";
      },
    },
  ],

  getCodeSections(selected) {
    const hasSearch = selected.includes("search");
    const hasCategory = selected.includes("category");
    const hasPrice = selected.includes("price");
    const hasStock = selected.includes("stock");
    const hasSort = selected.includes("sort");
    const hasFavorites = selected.includes("favorites");
    const hasCount = selected.includes("count");
    const hasReset = selected.includes("reset");
    const hasEmpty = selected.includes("empty");
    const hasStyling = selected.includes("styling");

    const needsState =
      hasSearch ||
      hasCategory ||
      hasPrice ||
      hasStock ||
      hasSort ||
      hasFavorites;
    const needsFilter = hasSearch || hasCategory || hasPrice || hasStock;
    const sourceListName = needsFilter ? "filteredProducts" : "products";
    const listName = hasSort ? "visibleProducts" : sourceListName;
    const filterFeature =
      (hasSearch && "feature-search") ||
      (hasCategory && "feature-category") ||
      (hasPrice && "feature-price") ||
      "feature-stock";
    const filterReturn =
      [
        hasSearch ? "matchesSearch" : null,
        hasCategory ? "matchesCategory" : null,
        hasPrice ? "matchesPrice" : null,
        hasStock ? "matchesStock" : null,
      ]
        .filter(Boolean)
        .join(" && ") || "true";

    const productRows = [
      `  { id: 1, name: "Laptop", category: "Tech", price: 1200${
        hasStock ? ", inStock: true" : ""
      } },`,
      `  { id: 2, name: "Shoes", category: "Fashion", price: 80${
        hasStock ? ", inStock: false" : ""
      } },`,
      `  { id: 3, name: "Phone", category: "Tech", price: 900${
        hasStock ? ", inStock: true" : ""
      } },`,
      `  { id: 4, name: "Keyboard", category: "Tech", price: 150${
        hasStock ? ", inStock: true" : ""
      } },`,
    ].join("\n");

    const resetLines = [
      hasSearch ? '    setSearch("");' : null,
      hasCategory ? '    setCategory("All");' : null,
      hasPrice ? "    setMaxPrice(1500);" : null,
      hasStock ? "    setOnlyInStock(false);" : null,
      hasSort ? '    setSortOrder("none");' : null,
      hasFavorites ? "    setFavoriteIds([]);" : null,
    ].filter(Boolean);

    return [
      ...(needsState
        ? [
            {
              id: "import",
              feature: "feature-shared",
              code: `// Här behöver jag useState eftersom användaren ska kunna ändra något.
import { useState } from "react";

`,
            },
          ]
        : []),
      ...(hasStyling
        ? [
            {
              id: "styling-import",
              feature: "feature-styling",
              code: `// Här importerar jag CSS-filen för den här komponenten.
import "./ProductList.css";

`,
            },
          ]
        : []),
      {
        id: "data",
        code: `// Jag börjar med lite produktdata som komponenten kan visa.
const products = [
${productRows}
];

// Här bygger jag komponenten som visar produktlistan.
export default function ProductList() {
`,
      },
      ...(hasSearch
        ? [
            {
              id: "search-state",
              feature: "feature-search",
              code: `  // Här behöver jag komma ihåg vad användaren skriver.
  const [search, setSearch] = useState("");
`,
            },
          ]
        : []),
      ...(hasCategory
        ? [
            {
              id: "category-state",
              feature: "feature-category",
              code: `  // Här behöver jag spara vilken kategori som är vald.
  const [category, setCategory] = useState("All");
`,
            },
          ]
        : []),
      ...(hasPrice
        ? [
            {
              id: "price-state",
              feature: "feature-price",
              code: `  // Här sparar jag det högsta priset användaren vill se.
  const [maxPrice, setMaxPrice] = useState(1500);
`,
            },
          ]
        : []),
      ...(hasStock
        ? [
            {
              id: "stock-state",
              feature: "feature-stock",
              code: `  // Här sparar jag om bara produkter i lager ska visas.
  const [onlyInStock, setOnlyInStock] = useState(false);
`,
            },
          ]
        : []),
      ...(hasSort
        ? [
            {
              id: "sort-state",
              feature: "feature-sort",
              code: `  // Här behöver jag spara hur listan ska sorteras.
  const [sortOrder, setSortOrder] = useState("none");
`,
            },
          ]
        : []),
      ...(hasFavorites
        ? [
            {
              id: "favorites-state",
              feature: "feature-favorites",
              code: `  // Här sparar jag id:n för produkterna som är favoriter.
  const [favoriteIds, setFavoriteIds] = useState([]);
`,
            },
          ]
        : []),
      ...(needsState ? [{ id: "state-space", code: `\n` }] : []),
      ...(hasFavorites
        ? [
            {
              id: "favorites-toggle",
              feature: "feature-favorites",
              code: `  // Här togglar jag en produkt som favorit.
  function toggleFavorite(productId) {
    setFavoriteIds((currentIds) =>
      currentIds.includes(productId)
        ? currentIds.filter((id) => id !== productId)
        : [...currentIds, productId],
    );
  }

`,
            },
          ]
        : []),
      ...(hasReset
        ? [
            {
              id: "reset-logic",
              feature: "feature-reset",
              code: `  // Här samlar jag allt som ska tillbaka till startläget.
  function resetFilters() {
${
  resetLines.length > 0
    ? resetLines.join("\n")
    : "    // Just nu finns inget aktivt val att nollställa."
}
  }

`,
            },
          ]
        : []),
      ...(needsFilter
        ? [
            {
              id: "filter-start",
              feature: filterFeature,
              code: `  // Här skapar jag listan som faktiskt ska visas.
  const filteredProducts = products.filter((product) => {
`,
            },
            ...(hasSearch
              ? [
                  {
                    id: "search-filter",
                    feature: "feature-search",
                    code: `    // Först kollar jag om produkten matchar sökningen.
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

`,
                  },
                ]
              : []),
            ...(hasCategory
              ? [
                  {
                    id: "category-filter",
                    feature: "feature-category",
                    code: `    // Sedan kollar jag om kategorin matchar.
    const matchesCategory =
      category === "All" || product.category === category;

`,
                  },
                ]
              : []),
            ...(hasPrice
              ? [
                  {
                    id: "price-filter",
                    feature: "feature-price",
                    code: `    // Sedan kollar jag om produkten ryms inom maxpriset.
    const matchesPrice = product.price <= maxPrice;

`,
                  },
                ]
              : []),
            ...(hasStock
              ? [
                  {
                    id: "stock-filter",
                    feature: "feature-stock",
                    code: `    // Om lagerfiltret är aktivt måste produkten finnas i lager.
    const matchesStock = !onlyInStock || product.inStock;

`,
                  },
                ]
              : []),
            {
              id: "filter-return",
              feature: filterFeature,
              code: `    // Produkten ska visas om alla aktiva villkor stämmer.
    return ${filterReturn};
  });

`,
            },
          ]
        : []),
      ...(hasSort
        ? [
            {
              id: "sort-logic",
              feature: "feature-sort",
              code: `  // Här sorterar jag listan som ska visas.
  const visibleProducts = [...${sourceListName}].sort((a, b) => {
    if (sortOrder === "low-high") return a.price - b.price;
    if (sortOrder === "high-low") return b.price - a.price;
    return 0;
  });

`,
            },
          ]
        : []),
      {
        id: "return-start",
        code: `  // Här returnerar jag kontrollerna och själva produktlistan.
  return (
    <div${hasStyling ? ' className="product-list"' : ""}>
      <h1>Products</h1>

`,
      },
      ...(hasSearch
        ? [
            {
              id: "search-input",
              feature: "feature-search",
              code: `      {/* Här kopplar jag inputfältet till search-state. */}
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search products"
      />

`,
            },
          ]
        : []),
      ...(hasCategory
        ? [
            {
              id: "category-select",
              feature: "feature-category",
              code: `      {/* Här låter jag användaren välja kategori. */}
      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="All">All</option>
        <option value="Tech">Tech</option>
        <option value="Fashion">Fashion</option>
      </select>

`,
            },
          ]
        : []),
      ...(hasPrice
        ? [
            {
              id: "price-input",
              feature: "feature-price",
              code: `      {/* Här låter jag användaren styra maxpriset. */}
      <label>
        Max price: \${maxPrice}
        <input
          type="range"
          min="0"
          max="1500"
          value={maxPrice}
          onChange={(event) => setMaxPrice(Number(event.target.value))}
        />
      </label>

`,
            },
          ]
        : []),
      ...(hasStock
        ? [
            {
              id: "stock-checkbox",
              feature: "feature-stock",
              code: `      {/* Här låter jag användaren välja bara produkter i lager. */}
      <label>
        <input
          type="checkbox"
          checked={onlyInStock}
          onChange={(event) => setOnlyInStock(event.target.checked)}
        />
        Only show products in stock
      </label>

`,
            },
          ]
        : []),
      ...(hasSort
        ? [
            {
              id: "sort-select",
              feature: "feature-sort",
              code: `      {/* Här låter jag användaren välja sorteringsordning. */}
      <select
        value={sortOrder}
        onChange={(event) => setSortOrder(event.target.value)}
      >
        <option value="none">No sorting</option>
        <option value="low-high">Price: low to high</option>
        <option value="high-low">Price: high to low</option>
      </select>

`,
            },
          ]
        : []),
      ...(hasReset
        ? [
            {
              id: "reset-button",
              feature: "feature-reset",
              code: `      {/* Här kan användaren snabbt börja om från startläget. */}
      <button onClick={resetFilters}>Reset</button>

`,
            },
          ]
        : []),
      ...(hasCount
        ? [
            {
              id: "count-result",
              feature: "feature-count",
              code: `      {/* Här visar jag hur många produkter som matchar just nu. */}
      <p>{${listName}.length} products found</p>

`,
            },
          ]
        : []),
      ...(hasEmpty
        ? [
            {
              id: "empty-state",
              feature: "feature-empty",
              code: `      {/* Om listan är tom visar jag ett enkelt meddelande. */}
      {${listName}.length === 0 && <p>No products found.</p>}

`,
            },
          ]
        : []),
      {
        id: "map-list",
        code: `      {/* Här renderar jag varje produkt. */}
      {${listName}.map((product) => (
        <article${hasStyling ? ' className="product-card"' : ""} key={product.id}>
          {/* Key hjälper React att känna igen varje produkt när listan ändras. */}
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <p>\${product.price}</p>
${
  hasStock
    ? `          {/* Här visar jag lagerstatusen tydligt för varje produkt. */}
          <p>{product.inStock ? "In stock" : "Out of stock"}</p>
`
    : ""
}${
  hasFavorites
    ? `          {/* Här togglar jag favoritstatus för just den här produkten. */}
          <button onClick={() => toggleFavorite(product.id)}>
            {favoriteIds.includes(product.id) ? "Remove favorite" : "Add favorite"}
          </button>
`
    : ""
}        </article>
      ))}
    </div>
  );
}`,
      },
      ...(hasStyling
        ? [
            {
              id: "styling-css",
              feature: "feature-styling",
              code: `// ProductList.css
/* Här ger jag hela listan lite luft och en tydlig maxbredd. */
.product-list {
  display: grid;
  gap: 1rem;
  max-width: 720px;
}

/* Här gör jag varje produkt lätt att skanna i intervjun. */
.product-card {
  padding: 1rem;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  background: #ffffff;
}

/* Här håller jag rubriken kompakt i varje kort. */
.product-card h2 {
  margin: 0 0 0.35rem;
  font-size: 1rem;
}
`,
            },
          ]
        : []),
    ];
  },
};

