// src/data/practice/trainingChallenges.js
import { randomTrainingChallenge as enTraining } from "./trainingChallenges.en.js";
import { randomTrainingChallenge as svTraining } from "./trainingChallenges.sv.js";

export function getLocalizedTrainingChallenges(language = "en") {
  return language === "sv" ? svTraining : enTraining;
}

// Default export bindings for direct imports (English as default)
export const randomTrainingChallenge = enTraining;
