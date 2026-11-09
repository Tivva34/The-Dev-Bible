# Licensing & Terms of Use – The Dev Bible

Copyright (c) 2026 Tim Verlage

The Dev Bible is an educational platform designed to help software engineers learn core concepts, practice hands-on exercises, and prepare for technical interviews.

To support open developer education while preserving the integrity of the original curriculum, The Dev Bible uses a dual-licensing model:

1. **Application Source Code & Infrastructure**: Licensed under the [MIT License](LICENSE-MIT).
2. **Educational Content & Curriculum**: Licensed under the [Creative Commons Attribution-NonCommercial 4.0 International Public License (CC BY-NC 4.0)](LICENSE-CC-BY-NC-4.0).

---

## 1. Application Software Scope (MIT License)

The MIT License applies to the original software code, UI framework, build pipeline, and application runtime of The Dev Bible. 

Under the terms of the [MIT License](LICENSE-MIT) (official text available at [https://opensource.org/license/mit](https://opensource.org/license/mit)), you are free to copy, modify, distribute, merge, publish, sublicense, and sell copies of the software.

### Files and directories covered by MIT:
- **Application Shell & Mount**: `src/main.jsx`, `src/App.jsx`, `src/App.css`, `src/index.css`.
- **UI Components & Layout Logic**: `src/components/` (including `CodeBlock/`, `ExampleList/`, `FundamentalCard/`, `Hero/`, `LanguageToggle/`, `LiveLabCard/`, `QuestionCard/`, `TrainingCard/`, and the component harness of `ExampleCard/`).
- **Internationalization Engine**: `src/i18n/` (`I18nContext.jsx`, `index.js`, `useTranslation.js`, and general UI interface translations in `translations/en.js` and `translations/sv.js`).
- **Build & Technical Configuration**: `package.json`, `vite.config.js`, `index.html`, `eslint.config.js`, `.gitignore`.
- **Technical Builders & Generators**: Code generation and test harness infrastructure, such as `src/data/challenges/helpers/snippetChallengeBuilder.js`.

---

## 2. Educational Content Scope (CC BY-NC 4.0)

All original educational material, curriculum structure, interview questions, guided answers, pedagogical explanations, interview simulations, practice drills, and bilingual educational assets are licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License](LICENSE-CC-BY-NC-4.0) (official legal code available at [https://creativecommons.org/licenses/by-nc/4.0/legalcode](https://creativecommons.org/licenses/by-nc/4.0/legalcode)).

You may share, adapt, and build upon this material for non-commercial purposes, provided appropriate attribution is given to the author (**Tim Verlage**). Commercial redistribution, sale, or sublicensing of this educational content is strictly prohibited under CC BY-NC 4.0.

### Files and directories covered by CC BY-NC 4.0:
- **Curated Interview Questions & Deep Dives (Swedish & English)**:
  - `src/data/interviewQuestions.js`, `src/data/questions.sv.js`, `src/data/questions.en.js`
  - `src/data/questionFollowUps.sv.js`, `src/data/questionFollowUps.en.js`
  - `src/data/fullstackQuestions.js`
- **Core Web Fundamentals & Concept Guides**:
  - `src/data/fundamentals.js`, `src/data/fundamentals.sv.js`, `src/data/fundamentals.en.js`
- **Interactive Practice Drills & Live Labs**:
  - `src/data/trainingChallenges.js`, `src/data/trainingChallenges.sv.js`, `src/data/trainingChallenges.en.js`
  - `src/data/liveLabChallenges.js`, `src/data/liveLabChallenges.sv.js`, `src/data/liveLabChallenges.en.js`
- **Live Coding Challenges & Exercise Implementations**:
  - `src/data/challenges/javascript/` (`algorithms.js`, `domInteractions.js`, `utilityFunctions.js`)
  - `src/data/challenges/react/` (`components.js`, `formsAndInputs.js`, `hooksAndState.js`, `listsAndTables.js`, `uiWidgets.js`)
  - `src/data/challenges/vue/` (`vueComponents.js`, `vueAdvanced.js`)
  - `src/data/challenges/angular/` (`angularComponents.js`, `angularAdvanced.js`)
  - `src/data/challenges/` (`accordion.js`, `additionalChallenges.js`, `counterList.js`, `fullstackChallenges.js`, `modal.js`, `pagination.js`, `productList.js`, `shoppingCart.js`, `todoList.js`, `index.js`)
- **Curated Layouts & Architecture Guides**:
  - `src/data/examples.js`
- **Pedagogical Dictionaries & Bilingual Translation Mappings**:
  - `src/data/challenges/challengeInterviewTranslations.js` (Interviewer prompts, candidate goals, step-by-step thought processes)
  - `src/data/challenges/hardcodedChallengeCommentsMap.js` (Bilingual didactic code comments)
  - `src/data/challenges/comprehensiveFollowUpDictionary.js` (Follow-up questions and answers)
  - `src/i18n/translations/challengeTitles.js`

---

## 3. Special Permission for Individual Code Snippets (Commercial Reuse)

To ensure that learners, job seekers, and engineers can freely utilize the technical solutions they learn here:

> **Additional Copyright Holder Permission:**  
> The copyright holder (**Tim Verlage**) explicitly grants permission to all users to copy, modify, adapt, and incorporate **individual technical code snippets and code examples** found within The Dev Bible into their own software projects, including commercial applications, personal portfolios, and enterprise codebases, without requiring commercial licensing fees.

### Limitations of this special permission:
1. **Scope**: This permission applies exclusively to individual code snippets, algorithm implementations, and technical code examples.
2. **Exclusion of Surrounding Content**: This permission **does not** grant rights to commercially reproduce, resell, republish, or syndicate the surrounding educational prose, interview questions, explanatory answers, thought processes, curriculum structure, or entire challenge collections.
3. **Legal Independence**: This permission is granted directly by the copyright holder as an independent additional grant and is not an alteration or modification of the CC BY-NC 4.0 license text itself.

---

## 4. Mixed-Content Files & Boundary Demarcation

Certain repository files combine software architecture with pedagogical content. For clarity, their licensing scopes are demarcated as follows:

1. **`src/components/ExampleCard/ExampleCard.jsx`**:
   - The React component logic, state hooks, tabs, progress indicator, and modal navigation are **application software (MIT)**.
   - The embedded educational fallback styling templates (`getFallbackStylingSections`) and didactic HTML templates (`getVanillaHtmlSections`) are **educational content (CC BY-NC 4.0)**.
   - Individual code patterns within those templates remain eligible for the separate **code snippet commercial reuse permission**.

2. **`src/data/challenges/`**:
   - Technical builder functions, assembly logic, and helper factories (such as `helpers/snippetChallengeBuilder.js`) are **application software (MIT)**.
   - The specific challenge declarations, problem descriptions, interviewer scripts, solutions, and comments are **educational content (CC BY-NC 4.0)**, subject to the code snippet reuse permission.

3. **`src/i18n/`**:
   - The internationalization harness, context provider, and general application UI strings are **application software (MIT)**.
   - The educational curriculum dictionaries and interview translations (`challengeTitles.js`, `challengeInterviewTranslations.js`, `hardcodedChallengeCommentsMap.js`, `comprehensiveFollowUpDictionary.js`) are **educational content (CC BY-NC 4.0)**.

---

## 5. Third-Party Licenses

Third-party open-source software libraries, packages, and tools utilized in this repository (e.g., React, Vite, ESLint) remain subject to their respective upstream licenses (primarily MIT and Apache-2.0). Nothing in this document modifies or overrides the licenses governing those third-party components.

