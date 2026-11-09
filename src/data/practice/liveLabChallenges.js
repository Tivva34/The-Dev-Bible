import { liveLabChallenge as liveLabChallengeEn, liveLabExercises as liveLabExercisesEn } from "./liveLabChallenges.en.js";
import { liveLabChallenge as liveLabChallengeSv, liveLabExercises as liveLabExercisesSv } from "./liveLabChallenges.sv.js";

export function getLocalizedLiveLab(lang = "en") {
  return lang === "sv" ? liveLabChallengeSv : liveLabChallengeEn;
}

export function getLocalizedLiveLabExercises(lang = "en") {
  return lang === "sv" ? liveLabExercisesSv : liveLabExercisesEn;
}

export const liveLabChallenge = liveLabChallengeEn;
export const liveLabExercises = liveLabExercisesEn;
