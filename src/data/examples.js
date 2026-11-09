import { productListChallenge } from "./challenges/react/productList";
import { todoListChallenge } from "./challenges/react/todoList";
import { counterListChallenge } from "./challenges/react/counterList";
import { shoppingCartChallenge } from "./challenges/react/shoppingCart";
import { modalChallenge } from "./challenges/react/modal";
import { accordionChallenge } from "./challenges/react/accordion";
import { paginationChallenge } from "./challenges/react/pagination";
import {
  authUiChallenge,
  angularComponentChallenge,
  angularAutocompleteChallenge,
  angularCounterChallenge,
  angularDirectiveChallenge,
  angularFormValidationChallenge,
  angularGuardChallenge,
  angularHttpFormsChallenge,
  angularImageGalleryChallenge,
  angularPipeChallenge,
  angularShoppingTableChallenge,
  angularServiceStateChallenge,
  angularTodoChallenge,
  angularUiComponentsChallenge,
  angularUtilityFunctionsChallenge,
  autocompleteChallenge,
  componentBasicsChallenge,
  darkModeChallenge,
  debouncedSearchChallenge,
  dropdownMenuChallenge,
  editableItemChallenge,
  fetchApiListChallenge,
  fizzBuzzChallenge,
  formValidationChallenge,
  imageGalleryChallenge,
  infiniteScrollChallenge,
  multiStepFormChallenge,
  reusableTableChallenge,
  reactCounterChallenge,
  reactReducerChallenge,
  reactUtilityFunctionsChallenge,
  searchHighlightChallenge,
  tabsChallenge,
  toastChallenge,
  useLocalStorageChallenge,
  utilityFunctionsChallenge,
  javascriptDeepCloneChallenge,
  javascriptEventEmitterChallenge,
  javascriptPromiseAllChallenge,
  javascriptThrottleChallenge,
  vanillaCounterChallenge,
  vanillaAutocompleteChallenge,
  vanillaFormValidationChallenge,
  vanillaImageGalleryChallenge,
  vanillaShoppingCartChallenge,
  vanillaFetchSortChallenge,
  vanillaTodoCrudChallenge,
  vanillaUiComponentsChallenge,
  vueComponentChallenge,
  vueAutocompleteChallenge,
  vueCustomDirectiveChallenge,
  vueCounterChallenge,
  vueComposableChallenge,
  vueDynamicTableChallenge,
  vueFormValidationChallenge,
  vueFetchCartChallenge,
  vueImageGalleryChallenge,
  vueProvideInjectChallenge,
  vueWatchSearchChallenge,
  vueTodoChallenge,
  vueUiComponentsChallenge,
  vueUtilityFunctionsChallenge,
} from "./challenges/additionalChallenges";
import {
  backendEndpointChallenge,
  crudApiChallenge,
  protectedRouteChallenge,
  serverValidationChallenge,
} from "./challenges/fullstack/endpoints.js";
import {
  afterLiveCodingQuestions,
  beforeLiveCodingQuestions,
  githubRepoQuestions,
  portfolioBackgroundQuestions,
  portfolioProjectQuestions,
} from "./interview/interviewQuestions";
import {
  fullstackAfterQuestions,
  fullstackBeforeQuestions,
  fullstackProjectQuestions,
} from "./interview/fullstackQuestions";
import { fundamentalsExamples } from "./practice/fundamentals";
import { liveLabChallenge, liveLabExercises } from "./practice/liveLabChallenges";
import { randomTrainingChallenge } from "./practice/trainingChallenges";

export const frontendExamples = [
  {
    category: "Common Interview Questions",
    description: "Questions commonly asked before or after the live coding session.",
    items: [beforeLiveCodingQuestions, afterLiveCodingQuestions],
  },
  {
    category: "Background & Project Presentation",
    description:
      "Structured templates for presenting background, technical choices, and project architecture.",
    items: [
      portfolioBackgroundQuestions,
      portfolioProjectQuestions,
      githubRepoQuestions,
    ],
  },
  {
    category: "Live Coding Challenges",
    description: "Coding exercises where the interviewer introduces requirements incrementally.",
    items: [
      productListChallenge,
      componentBasicsChallenge,
      fizzBuzzChallenge,
      utilityFunctionsChallenge,
      javascriptPromiseAllChallenge,
      javascriptEventEmitterChallenge,
      javascriptDeepCloneChallenge,
      javascriptThrottleChallenge,
      reactUtilityFunctionsChallenge,
      reactReducerChallenge,
      reactCounterChallenge,
      vanillaCounterChallenge,
      vanillaAutocompleteChallenge,
      vanillaTodoCrudChallenge,
      vanillaFormValidationChallenge,
      vanillaShoppingCartChallenge,
      vanillaImageGalleryChallenge,
      vanillaUiComponentsChallenge,
      vanillaFetchSortChallenge,
      todoListChallenge,
      editableItemChallenge,
      searchHighlightChallenge,
      formValidationChallenge,
      fetchApiListChallenge,
      infiniteScrollChallenge,
      shoppingCartChallenge,
      counterListChallenge,
      reusableTableChallenge,
      modalChallenge,
      dropdownMenuChallenge,
      vueComponentChallenge,
      vueComposableChallenge,
      vueWatchSearchChallenge,
      vueCustomDirectiveChallenge,
      vueProvideInjectChallenge,
      vueAutocompleteChallenge,
      vueCounterChallenge,
      vueTodoChallenge,
      vueFormValidationChallenge,
      vueUiComponentsChallenge,
      vueFetchCartChallenge,
      vueImageGalleryChallenge,
      vueDynamicTableChallenge,
      vueUtilityFunctionsChallenge,
      angularComponentChallenge,
      angularServiceStateChallenge,
      angularPipeChallenge,
      angularDirectiveChallenge,
      angularGuardChallenge,
      angularAutocompleteChallenge,
      angularCounterChallenge,
      angularTodoChallenge,
      angularFormValidationChallenge,
      angularUiComponentsChallenge,
      angularHttpFormsChallenge,
      angularImageGalleryChallenge,
      angularShoppingTableChallenge,
      angularUtilityFunctionsChallenge,
      tabsChallenge,
      accordionChallenge,
      paginationChallenge,
      autocompleteChallenge,
      debouncedSearchChallenge,
      multiStepFormChallenge,
      imageGalleryChallenge,
      darkModeChallenge,
      authUiChallenge,
      toastChallenge,
      useLocalStorageChallenge,
    ],
  },
];

export const fullstackExamples = [
  {
    category: "Fullstack Interview Questions",
    description:
      "Questions on APIs, auth, validation, status codes, and frontend-to-backend communication.",
    items: [
      fullstackBeforeQuestions,
      fullstackAfterQuestions,
      fullstackProjectQuestions,
    ],
  },
  {
    category: "Fullstack Live Coding",
    description:
      "Challenges connecting frontend, API logic, and backend patterns step by step.",
    items: [
      crudApiChallenge,
      protectedRouteChallenge,
      serverValidationChallenge,
      backendEndpointChallenge,
      fetchApiListChallenge,
      authUiChallenge,
      shoppingCartChallenge,
      formValidationChallenge,
    ],
  },
  {
    category: "Architecture & System Design",
    description:
      "Frameworks and discussion templates tailored for fullstack developer roles.",
    items: [portfolioProjectQuestions, githubRepoQuestions],
  },
];

export const trainingExamples = [
  {
    category: "Common Interview Questions",
    description: "Questions to practice before and after the live coding challenge.",
    items: [beforeLiveCodingQuestions, afterLiveCodingQuestions],
  },
  {
    category: "Practice Mode",
    description: "Write code independently, unlock hints, and validate against the solution.",
    items: [randomTrainingChallenge],
  },
  {
    category: "Code Fundamentals",
    description:
      "Concise code drills covering syntax, JavaScript, and React core patterns.",
    items: fundamentalsExamples,
  },
];

export const liveLabExamples = [
  {
    category: "Random Exercise",
    description:
      "Randomize logic or styling exercises and inspect changes immediately in the live preview.",
    items: [liveLabChallenge],
  },
  {
    category: "Live Tab Exercises",
    description:
      "Select specific exercises with an interactive sandbox preview for JavaScript, React, Vue, or Angular.",
    items: liveLabExercises,
  },
];

export const exampleLayouts = {
  frontend: {
    label: "Frontend",
    description: "React, UI, state, live coding, and technical interview questions.",
    sections: frontendExamples,
  },
  fullstack: {
    label: "Backend",
    description:
      "APIs, auth, CRUD, backend patterns, and server-connected frontends.",
    sections: fullstackExamples,
  },
  training: {
    label: "Practice",
    description: "Random challenges, fundamentals, and syntax training.",
    sections: trainingExamples,
  },
  liveLab: {
    label: "Live Lab",
    description: "Practice logic and styling drills with embedded interactive preview.",
    sections: liveLabExamples,
  },
};

export const examples = frontendExamples;
