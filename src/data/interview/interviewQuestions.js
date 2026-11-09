// src/data/interview/interviewQuestions.js
import enQuestions from "./questions.en.js";
import svQuestions from "./questions.sv.js";

export function getLocalizedInterviewQuestions(language = "en") {
  const dataset = language === "sv" ? svQuestions : enQuestions;
  return dataset.interviewQuestions;
}

// Default export bindings for direct imports (English as default)
export const beforeLiveCodingQuestions = enQuestions.interviewQuestions.beforeLiveCodingQuestions;
export const afterLiveCodingQuestions = enQuestions.interviewQuestions.afterLiveCodingQuestions;
export const portfolioBackgroundQuestions = enQuestions.interviewQuestions.portfolioBackgroundQuestions;
export const portfolioProjectQuestions = enQuestions.interviewQuestions.portfolioProjectQuestions;
export const githubRepoQuestions = enQuestions.interviewQuestions.githubRepoQuestions;
