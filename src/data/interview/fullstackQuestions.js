// src/data/interview/fullstackQuestions.js
import enQuestions from "./questions.en.js";
import svQuestions from "./questions.sv.js";

export function getLocalizedFullstackQuestions(language = "en") {
  const dataset = language === "sv" ? svQuestions : enQuestions;
  return dataset.fullstackQuestions;
}

// Default export bindings for direct imports (English as default)
export const fullstackBeforeQuestions = enQuestions.fullstackQuestions.fullstackBeforeQuestions;
export const fullstackAfterQuestions = enQuestions.fullstackQuestions.fullstackAfterQuestions;
export const fullstackProjectQuestions = enQuestions.fullstackQuestions.fullstackProjectQuestions;
