import { useTranslation } from "../../i18n/index.js";
import "./LanguageToggle.css";

export default function LanguageToggle() {
  const { language, setLanguage } = useTranslation();

  // If active language is "en", target is "sv". Button displays "SV".
  // If active language is "sv", target is "en". Button displays "EN".
  const targetLanguage = language === "sv" ? "en" : "sv";
  const label = targetLanguage.toUpperCase();
  const ariaLabel =
    targetLanguage === "sv"
      ? "Switch language to Swedish"
      : "Switch language to English";

  return (
    <button
      type="button"
      className="language-toggle-btn"
      onClick={() => setLanguage(targetLanguage)}
      aria-label={ariaLabel}
      title={ariaLabel}
    >
      <span className="language-toggle-label">{label}</span>
    </button>
  );
}

