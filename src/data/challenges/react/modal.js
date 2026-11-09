export const modalChallenge = {
  id: "modal",
  title: "Modal",
  difficulty: "Junior",
  estimatedTime: "20 min",
  interviewPrompt: "Bygg en komponent som kan visa en modal.",
  currentGoal: "Visa en knapp och modalens markup.",
  baseWhatToSay:
    "Okej, jag börjar med knappen och själva modalstrukturen så dialogen syns tydligt.",
  baseFollowUpQuestions: [
    {
      question: "Varför delar du upp overlay och modal-innehåll?",
      answer:
        "För att overlay hanterar bakgrunden och modal-innehållet är själva dialogen.",
    },
  ],
  followUpQuestions: [
    {
      featureIds: ["open"],
      question: "Varför använder du boolean state?",
      answer:
        "Modalen är antingen öppen eller stängd, så en boolean passar bra.",
    },
    {
      featureIds: ["escape", "backdrop"],
      question: "Varför stänger du på flera sätt?",
      answer:
        "Det är ett vanligt UX-krav att användaren kan stänga med knapp, Escape eller overlay.",
    },
    {
      featureIds: ["content", "confirm"],
      question: "Hur gör du modalen återanvändbar?",
      answer:
        "Jag låter innehåll och action styras av data istället för att hårdkoda allt i markupen.",
    },
    {
      featureIds: ["aria"],
      question: "Vad är viktigast för tillgänglighet här?",
      answer:
        "Att dialogen får rätt roll, aria-modal och tydliga labels så hjälpmedel förstår vad som öppnats.",
    },
  ],
  features: [
    {
      id: "open",
      label: "Öppna/stäng",
      colorClass: "feature-search",
      interviewer: "Gör så att modalen kan öppnas och stängas.",
      goal: "Styra modalens synlighet med state.",
      getWhatToSay() {
        return "Okej, då behöver jag ett boolean-state och renderar modalen bara när den är öppen.";
      },
    },
    {
      id: "backdrop",
      label: "Overlay-klick",
      colorClass: "feature-category",
      interviewer: "Stäng modalen när användaren klickar på bakgrunden.",
      goal: "Låt overlay-klick stänga modalen.",
      getWhatToSay() {
        return "Okej, jag lägger klicket på overlayn men stoppar klick inne i själva dialogen.";
      },
    },
    {
      id: "escape",
      label: "Escape",
      colorClass: "feature-sort",
      interviewer: "Stäng modalen när användaren trycker Escape.",
      goal: "Lyssna på Escape när modalen är öppen.",
      getWhatToSay() {
        return "Okej, då använder jag useEffect för att lägga till och städa bort en keydown-listener.";
      },
    },
    {
      id: "content",
      label: "Dynamiskt innehåll",
      colorClass: "feature-price",
      interviewer: "Låt knappen bestämma vilken rubrik och text som visas i modalen.",
      goal: "Styra modalens innehåll med state.",
      getWhatToSay() {
        return "Okej, jag sparar vilket modal-innehåll som är valt och renderar rubrik och text från det.";
      },
    },
    {
      id: "confirm",
      label: "Confirm",
      colorClass: "feature-favorites",
      interviewer: "Lägg till en confirm-knapp som visar att åtgärden är klar.",
      goal: "Hantera en bekräftande action.",
      getWhatToSay() {
        return "Okej, jag lägger en handler för confirm som uppdaterar status och stänger modalen.";
      },
    },
    {
      id: "aria",
      label: "A11y",
      colorClass: "feature-count",
      interviewer: "Gör modalen mer tillgänglig med dialog-roll och aria-attribut.",
      goal: "Lägga till grundläggande modal-a11y.",
      getWhatToSay() {
        return "Okej, jag ger dialogen role, aria-modal och kopplar rubriken med aria-labelledby.";
      },
    },
    {
      id: "styling",
      label: "Styling",
      colorClass: "feature-styling",
      interviewer: "Lägg till styling för overlay och modalruta.",
      goal: "Ge modalen tydlig position, bakgrund och spacing.",
      getWhatToSay() {
        return "Okej, jag importerar en CSS-fil och stylar overlayn och dialogrutan separat.";
      },
    },
  ],
  getCodeSections(selected) {
    const hasOpen = selected.includes("open");
    const hasBackdrop = selected.includes("backdrop");
    const hasEscape = selected.includes("escape");
    const hasContent = selected.includes("content");
    const hasConfirm = selected.includes("confirm");
    const hasAria = selected.includes("aria");
    const hasStyling = selected.includes("styling");
    const needsState =
      hasOpen || hasBackdrop || hasEscape || hasContent || hasConfirm;
    const titleExpression = hasContent ? "{modalContent.title}" : "Confirm action";
    const textExpression = hasContent
      ? "{modalContent.description}"
      : "Are you sure you want to continue?";

    return [
      ...(needsState
        ? [
            {
              id: "import",
              feature: "feature-shared",
              code: `// Här behöver jag state för synligheten${hasEscape ? " och effect för Escape-tangenten" : ""}.
import { ${hasEscape ? "useEffect, " : ""}useState } from "react";

`,
            },
          ]
        : []),
      ...(hasStyling
        ? [
            {
              id: "styling-import",
              feature: "feature-styling",
              code: `// Här importerar jag CSS-filen för modalens utseende.
import "./ModalExample.css";

`,
            },
          ]
        : []),
      {
        id: "component-start",
        code: `${hasContent ? `// Jag lägger modalens text i ett objekt så den kan bytas senare.
const deleteModal = {
  title: "Delete item",
  description: "This action cannot be undone.",
};

` : ""}// Här bygger jag själva modal-exemplet.
export default function ModalExample() {
`,
      },
      ...(needsState
        ? [
            {
              id: "state",
              feature: "feature-search",
              code: `  // Modalens läge är antingen öppet eller stängt.
  const [isOpen, setIsOpen] = useState(false);

`,
            },
          ]
        : []),
      ...(hasContent
        ? [
            {
              id: "content-state",
              feature: "feature-price",
              code: `  // Här sparar jag vilket innehåll modalen ska visa.
  const [modalContent, setModalContent] = useState(deleteModal);

  function openModal(content) {
    setModalContent(content);
    setIsOpen(true);
  }

`,
            },
          ]
        : []),
      ...(hasConfirm
        ? [
            {
              id: "confirm-state",
              feature: "feature-favorites",
              code: `  // Jag sparar en enkel status så användaren får feedback efter confirm.
  const [message, setMessage] = useState("");

  function confirmAction() {
    setMessage("Action confirmed");
    setIsOpen(false);
  }

`,
            },
          ]
        : []),
      ...(hasEscape
        ? [
            {
              id: "escape",
              feature: "feature-sort",
              code: `  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event) {
      // Escape är ett vanligt sätt att stänga en modal.
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

`,
            },
          ]
        : []),
      {
        id: "return-start",
        code: `  // Här returnerar jag knappen och modalens markup.
  return (
    <div>
      <h1>Modal</h1>
`,
      },
      {
        id: "button",
        code: hasOpen
          ? `      {/* Här har jag knappen som öppnar modalen. */}
      <button onClick={() => ${hasContent ? "openModal(deleteModal)" : "setIsOpen(true)"}}>Open modal</button>

`
          : `      {/* Här börjar jag med en vanlig knapp innan den får beteende. */}
      <button>Open modal</button>

`,
      },
      ...(hasConfirm
        ? [
            {
              id: "message",
              feature: "feature-favorites",
              code: `      {/* Här visar jag feedback när användaren har bekräftat. */}
      {message && <p>{message}</p>}

`,
            },
          ]
        : []),
      {
        id: "modal",
        feature: needsState ? "feature-search" : undefined,
        code: `${hasOpen ? "      {/* Modalen ska bara synas när isOpen är true. */}\n      {isOpen && (\n" : ""}      {/* Här är overlayn som ligger bakom dialogen. */}
      <div${hasBackdrop ? ' onClick={() => setIsOpen(false)}' : ""} className="overlay">
        {/* Här är själva dialogrutan. */}
        <section${hasAria ? ' role="dialog" aria-modal="true" aria-labelledby="modal-title"' : ""}${hasBackdrop ? ' onClick={(event) => event.stopPropagation()}' : ""} className="modal">
          <h2${hasAria ? ' id="modal-title"' : ""}>${titleExpression}</h2>
          <p>${textExpression}</p>
${hasConfirm ? `          {/* Här kör jag confirm-logiken och stänger modalen. */}
          <button onClick={confirmAction}>Confirm</button>
` : ""}${hasOpen ? `          {/* Här kan användaren stänga modalen manuellt. */}
          <button onClick={() => setIsOpen(false)}>Close</button>
` : "          {/* Här finns stäng-knappen innan den får beteende. */}\n          <button>Close</button>\n"}        </section>
      </div>${hasOpen ? "\n      )}" : ""}
    </div>
  );
}`,
      },
      ...(hasStyling
        ? [
            {
              id: "styling-css",
              feature: "feature-styling",
              code: `// ModalExample.css
/* Här gör jag overlayn till en mörk bakgrund över sidan. */
.overlay {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(15, 23, 42, 0.55);
}

/* Här ger jag dialogrutan en tydlig vit yta. */
.modal {
  width: min(92vw, 420px);
  padding: 1rem;
  border-radius: 8px;
  background: #ffffff;
}

/* Här håller jag knapparna lätta att klicka. */
.modal button {
  margin-right: 0.5rem;
}
`,
            },
          ]
        : []),
    ];
  },
};

