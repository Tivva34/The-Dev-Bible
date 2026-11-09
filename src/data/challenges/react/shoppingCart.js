export const shoppingCartChallenge = {
  id: "shopping-cart",
  title: "Shopping cart",
  difficulty: "Junior",
  estimatedTime: "30 min",
  interviewPrompt: "Bygg en komponent som visar produkter som kan ligga i en kundvagn.",
  currentGoal: "Visa produkterna och deras pris.",
  baseWhatToSay:
    "Okej, jag börjar med produktdatan och renderar varje produkt med namn och pris.",
  baseFollowUpQuestions: [
    {
      question: "Varför börjar du med produkter utanför komponenten?",
      answer:
        "Produktdatan är statisk här, så komponenten kan fokusera på att rendera listan tydligt.",
    },
  ],
  followUpQuestions: [
    {
      featureIds: ["add", "remove"],
      question: "Varför uppdaterar du cart med en ny array?",
      answer:
        "För att React ska få en ny referens och kunna rendera om på ett förutsägbart sätt.",
    },
    {
      featureIds: ["total"],
      question: "Varför räknar du totalen från cart?",
      answer:
        "Cart är sanningen för vad användaren valt, så totalen ska komma därifrån.",
    },
    {
      featureIds: ["quantity"],
      question: "Varför använder du quantity?",
      answer:
        "Då kan samma produkt ligga en gång i cart men ändå ha ett antal som kan öka eller minska.",
    },
    {
      featureIds: ["discount"],
      question: "Varför räknar du rabatt separat?",
      answer:
        "Då blir det tydligt vad som är subtotal, rabatt och slutpris.",
    },
  ],
  features: [
    {
      id: "add",
      label: "Lägg till",
      colorClass: "feature-search",
      interviewer: "Lägg till en knapp som lägger produkten i kundvagnen.",
      goal: "Låt användaren lägga produkter i cart.",
      getWhatToSay() {
        return "Okej, nu behöver jag state för kundvagnen och en funktion som lägger till den klickade produkten.";
      },
    },
    {
      id: "remove",
      label: "Ta bort",
      colorClass: "feature-category",
      interviewer: "Låt användaren ta bort en produkt från kundvagnen.",
      goal: "Låt användaren ångra ett val i cart.",
      getWhatToSay(selectedBefore) {
        if (selectedBefore.includes("add")) {
          return "Okej, då filtrerar jag bort produkten från cart med hjälp av dess id.";
        }

        return "Okej, jag behöver cart-state och tar bort rätt produkt genom att skapa en ny filtrerad array.";
      },
    },
    {
      id: "quantity",
      label: "Quantity",
      colorClass: "feature-price",
      interviewer: "Låt användaren öka och minska quantity för produkter i cart.",
      goal: "Hantera antal per produkt i cart med plus och minus.",
      getWhatToSay() {
        return "Okej, då låter jag samma cart-rad ha ett quantity-värde som kan öka och minska.";
      },
    },
    {
      id: "total",
      label: "Total",
      colorClass: "feature-sort",
      interviewer: "Visa totalsumman för kundvagnen.",
      goal: "Räkna ut totalpriset.",
      getWhatToSay() {
        return "Okej, totalen kan jag räkna ut från cart med reduce varje gång komponenten renderas.";
      },
    },
    {
      id: "count",
      label: "Antal items",
      colorClass: "feature-count",
      interviewer: "Visa hur många produkter som ligger i kundvagnen.",
      goal: "Räkna antal items i cart.",
      getWhatToSay(selectedBefore) {
        if (selectedBefore.includes("quantity")) {
          return "Okej, då summerar jag quantity så siffran visar totalt antal produkter, inte bara antal rader.";
        }

        return "Okej, då kan jag visa längden på cart-arrayen.";
      },
    },
    {
      id: "discount",
      label: "Rabattkod",
      colorClass: "feature-stock",
      interviewer: "Lägg till en rabattkod som ger 10% rabatt om koden är SAVE10.",
      goal: "Räkna total med rabatt.",
      getWhatToSay() {
        return "Okej, då sparar jag rabattkoden i state och räknar ut rabatt när koden matchar.";
      },
    },
    {
      id: "clear",
      label: "Töm varukorgen",
      colorClass: "feature-reset",
      interviewer: "Lägg till en knapp som tömmer hela kundvagnen.",
      goal: "Låt användaren rensa cart.",
      getWhatToSay() {
        return "Okej, då sätter jag cart till en tom array när användaren klickar.";
      },
    },
    {
      id: "checkout",
      label: "Checkout",
      colorClass: "feature-favorites",
      interviewer: "Visa ett bekräftelsemeddelande när användaren klickar checkout.",
      goal: "Visa enkel orderbekräftelse.",
      getWhatToSay() {
        return "Okej, då sparar jag ett checkout-state och visar ett meddelande efter klick.";
      },
    },
    {
      id: "empty",
      label: "Tom cart",
      colorClass: "feature-empty",
      interviewer: "Visa ett meddelande när kundvagnen är tom.",
      goal: "Gör tomt läge tydligt.",
      getWhatToSay() {
        return "Okej, om cart är tom visar jag ett kort meddelande istället för en tom lista.";
      },
    },
  ],
  getCodeSections(selected) {
    const hasAdd = selected.includes("add");
    const hasRemove = selected.includes("remove");
    const hasQuantity = selected.includes("quantity");
    const hasTotal = selected.includes("total");
    const hasCount = selected.includes("count");
    const hasDiscount = selected.includes("discount");
    const hasClear = selected.includes("clear");
    const hasCheckout = selected.includes("checkout");
    const hasEmpty = selected.includes("empty");
    const canAddToCart = hasAdd || hasQuantity;
    const needsCart =
      canAddToCart ||
      hasRemove ||
      hasQuantity ||
      hasTotal ||
      hasCount ||
      hasDiscount ||
      hasClear ||
      hasCheckout ||
      hasEmpty;
    const totalExpression = hasQuantity
      ? "sum + product.price * product.quantity"
      : "sum + product.price";

    return [
      ...(needsCart
        ? [
            {
              id: "import",
              feature: "feature-shared",
              code: `// Här behöver jag useState för att komma ihåg kundvagnen.
import { useState } from "react";

`,
            },
          ]
        : []),
      {
        id: "data",
        code: `// Jag börjar med några produkter som går att lägga i kundvagnen.
const products = [
  { id: 1, name: "Keyboard", price: 120 },
  { id: 2, name: "Mouse", price: 80 },
  { id: 3, name: "Monitor", price: 300 },
];

// Här bygger jag komponenten för produktlistan och kundvagnen.
export default function ShoppingCart() {
`,
      },
      ...(needsCart
        ? [
            {
              id: "cart-state",
              feature: "feature-shared",
              code: `  // Här sparar jag produkterna som användaren har valt.
  const [cart, setCart] = useState([]);

`,
            },
          ]
        : []),
      ...(hasDiscount
        ? [
            {
              id: "discount-state",
              feature: "feature-stock",
              code: `  // Här sparar jag rabattkoden användaren skriver.
  const [discountCode, setDiscountCode] = useState("");

`,
            },
          ]
        : []),
      ...(hasCheckout
        ? [
            {
              id: "checkout-state",
              feature: "feature-favorites",
              code: `  // Här håller jag koll på om ordern är bekräftad.
  const [isCheckedOut, setIsCheckedOut] = useState(false);

`,
            },
          ]
        : []),
      ...(canAddToCart
        ? [
            {
              id: "add-handler",
              feature: hasAdd ? "feature-search" : "feature-price",
              code: hasQuantity
                ? `  function addToCart(product) {
    // Finns produkten redan ökar jag quantity istället för att skapa en ny rad.
    const productExists = cart.some((item) => item.id === product.id);

    if (productExists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      return;
    }

    setCart([...cart, { ...product, quantity: 1 }]);
  }

`
                : `  function addToCart(product) {
    // Jag lägger till produkten utan att ändra den gamla cart-arrayen.
    setCart([...cart, product]);
  }

`,
            },
          ]
        : []),
      ...(hasQuantity
        ? [
            {
              id: "increase-handler",
              feature: "feature-price",
              code: `  function increaseQuantity(productId) {
    // Här ökar jag quantity på den cart-rad som matchar id:t.
    setCart(
      cart.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  }

`,
            },
            {
              id: "decrease-handler",
              feature: "feature-price",
              code: `  function decreaseQuantity(productId) {
    // Här minskar jag quantity och tar bort raden om den blir noll.
    setCart(
      cart
        .map((product) =>
          product.id === productId
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
        .filter((product) => product.quantity > 0)
    );
  }

`,
            },
          ]
        : []),
      ...(hasRemove
        ? [
            {
              id: "remove-handler",
              feature: "feature-category",
              code: `  function removeFromCart(productId) {
    // Här tar jag bort första matchen genom att filtrera på id.
    setCart(cart.filter((product) => product.id !== productId));
  }

`,
            },
          ]
        : []),
      ...(hasClear
        ? [
            {
              id: "clear-handler",
              feature: "feature-reset",
              code: `  function clearCart() {
    // Här tömmer jag hela kundvagnen.
    setCart([]);
  }

`,
            },
          ]
        : []),
      ...(hasTotal || hasDiscount
        ? [
            {
              id: "total",
              feature: "feature-sort",
              code: `  // Totalen räknas från det som faktiskt ligger i cart.
  const subtotal = cart.reduce(
    (sum, product) => ${totalExpression},
    0
  );
${hasDiscount ? `  const discount = discountCode === "SAVE10" ? subtotal * 0.1 : 0;
  const total = subtotal - discount;
` : `  const total = subtotal;
`}

`,
            },
          ]
        : []),
      ...(hasCount
        ? [
            {
              id: "cart-count",
              feature: "feature-count",
              code: hasQuantity
                ? `  // Här summerar jag quantity för att få totalt antal produkter.
  const cartCount = cart.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

`
                : `  // Här räknar jag hur många rader som finns i cart.
  const cartCount = cart.length;

`,
            },
          ]
        : []),
      {
        id: "return-start",
        code: `  // Här returnerar jag först produkterna och sedan kundvagnen.
  return (
    <div>
      <h1>Products</h1>

`,
      },
      {
        id: "products-list",
        code: `      {/* Här renderar jag alla produkter. */}
      {products.map((product) => (
        <article key={product.id}>
          {/* Key hjälper React att känna igen varje produkt när listan ändras. */}
          <h2>{product.name}</h2>
          <p>\${product.price}</p>
${hasAdd ? `          {/* Här skickar jag med hela produkten till cart-funktionen. */}
          <button onClick={() => addToCart(product)}>
            Add to cart
          </button>
` : hasQuantity ? `          {/* Här lägger jag produkten i cart med quantity. */}
          <button onClick={() => addToCart(product)}>
            Add to cart
          </button>
` : ""}        </article>
      ))}

`,
      },
      ...(needsCart
        ? [
            {
              id: "cart-title",
              feature: "feature-shared",
              code: `      {/* Här delar jag upp sidan så carten blir tydlig. */}
      <h2>Cart</h2>

`,
            },
          ]
        : []),
      ...(hasCount
        ? [
            {
              id: "count-ui",
              feature: "feature-count",
              code: `      {/* Här visar jag hur många produkter användaren har valt. */}
      <p>Items in cart: {cartCount}</p>

`,
            },
          ]
        : []),
      ...(hasDiscount
        ? [
            {
              id: "discount-ui",
              feature: "feature-stock",
              code: `      {/* Här skriver användaren rabattkoden. */}
      <input
        value={discountCode}
        onChange={(event) => setDiscountCode(event.target.value)}
        placeholder="Discount code"
      />

`,
            },
          ]
        : []),
      ...(hasEmpty
        ? [
            {
              id: "empty",
              feature: "feature-empty",
              code: `      {/* Om cart är tom säger jag det direkt. */}
      {cart.length === 0 && <p>Your cart is empty.</p>}

`,
            },
          ]
        : []),
      ...(needsCart
        ? [
            {
              id: "cart-list",
              feature: "feature-shared",
              code: `      {/* Här renderar jag produkterna som ligger i cart. */}
      {cart.map((product) => (
        <article key={product.id}>
          {/* Key hjälper React att känna igen varje cart-rad när cart ändras. */}
          <p>{product.name}</p>
          <p>\${product.price}</p>
${hasQuantity ? `          {/* Här visar jag quantity för just den här produkten. */}
          <p>Quantity: {product.quantity}</p>
          {/* Här ökar jag quantity på rätt produkt. */}
          <button onClick={() => increaseQuantity(product.id)}>
            +
          </button>
          {/* Här minskar jag quantity på rätt produkt. */}
          <button onClick={() => decreaseQuantity(product.id)}>
            -
          </button>
` : ""}${hasRemove ? `          {/* Här tar jag bort produkten från cart. */}
          <button onClick={() => removeFromCart(product.id)}>
            Remove
          </button>
` : ""}        </article>
      ))}

`,
            },
          ]
        : []),
      ...(hasTotal
        ? [
            {
              id: "total-ui",
              feature: "feature-sort",
              code: `${hasDiscount ? `      {/* Här visar jag priset före rabatt. */}
      <p>Subtotal: \${subtotal}</p>
      {/* Här visar jag hur mycket rabatt som dragits av. */}
      <p>Discount: \${discount}</p>
` : ""}      {/* Här visar jag slutsumman som användaren ska betala. */}
      <strong>Total: \${total}</strong>
`,
            },
          ]
        : []),
      ...(hasClear
        ? [
            {
              id: "clear-ui",
              feature: "feature-reset",
              code: `      {/* Här kan användaren tömma hela carten. */}
      <button onClick={clearCart}>Clear cart</button>

`,
            },
          ]
        : []),
      ...(hasCheckout
        ? [
            {
              id: "checkout-ui",
              feature: "feature-favorites",
              code: `      {/* Här markerar jag checkout som klar. */}
      <button onClick={() => setIsCheckedOut(true)}>
        Checkout
      </button>
      {/* Här visar jag feedback efter checkout. */}
      {isCheckedOut && <p>Thanks for your order!</p>}
`,
            },
          ]
        : []),
      {
        id: "return-end",
        code: `    </div>
  );
}`,
      },
    ];
  },
};
