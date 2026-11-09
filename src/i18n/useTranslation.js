import { useContext } from "react";
import { I18nContext } from "./context.js";
import en from "./translations/en.js";

export function useTranslation() {
  const context = useContext(I18nContext);
  if (!context) {
    return {
      language: "en",
      setLanguage: () => {},
      t: (key, fallback = "") => en[key] || fallback || key,
    };
  }
  return context;
}

export default useTranslation;

