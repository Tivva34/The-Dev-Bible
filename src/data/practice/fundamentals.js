// src/data/practice/fundamentals.js
import { fundamentalsExamples as enFundamentals } from "./fundamentals.en.js";
import { fundamentalsExamples as svFundamentals } from "./fundamentals.sv.js";

export function getLocalizedFundamentals(language = "en") {
  return language === "sv" ? svFundamentals : enFundamentals;
}

// Default export bindings for direct imports (English as default)
export const fundamentalsExamples = enFundamentals;
