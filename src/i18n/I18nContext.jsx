import { useState, useMemo } from "react";
import { I18nContext } from "./context.js";
import en from "./translations/en.js";
import sv from "./translations/sv.js";

const STORAGE_KEY = "developer_bible_lang";

const translations = {
  en,
  sv,
};

export function I18nProvider({ children, initialLanguage = "en" }) {
  const [language, setLanguageState] = useState(() => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored === "sv" || stored === "en") {
          return stored;
        }
      }
    } catch {
      // LocalStorage access may fail in some environments
    }
    return initialLanguage;
  });

  const setLanguage = (newLang) => {
    const lang = newLang === "sv" ? "sv" : "en";
    setLanguageState(lang);
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.setItem(STORAGE_KEY, lang);
      }
    } catch {
      // Ignore localStorage errors
    }
  };

  const t = useMemo(() => {
    return (key, fallback = "") => {
      const currentDict = translations[language] || translations.en;
      if (currentDict && currentDict[key] !== undefined) {
        return currentDict[key];
      }
      if (translations.en && translations.en[key] !== undefined) {
        return translations.en[key];
      }
      return fallback || key;
    };
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t,
    }),
    [language, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
