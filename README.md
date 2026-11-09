# The Dev Bible

> An interactive frontend learning, practice, and technical interview preparation platform built with React and Vite.

The Dev Bible is designed to bridge the gap between understanding programming concepts, writing interactive code, and communicating architectural reasoning in technical developer interviews.

---

## 1. Project Overview

The Dev Bible combines curated conceptual guides, hands-on coding challenges with a live in-browser preview, and step-by-step interview simulations in one coherent single-page application. 

The application is structured to help developers progress from understanding a concept to implementing it hands-on, and finally explaining the solution under interview-like conditions.

The platform provides complete bilingual support: **English** is the default language, with a full **Swedish** translation accessible seamlessly via the language toggle in the navigation header.

---

## 2. Purpose and Philosophy

Technical interviews and production engineering require more than memorizing algorithms:
- **Conceptual Clarity**: Knowing *why* a particular pattern, hook, or data structure is chosen.
- **Implementation Skill**: Writing clean, modular code that handles edge cases, loading states, and user interactions.
- **Technical Communication**: Articulating engineering tradeoffs, performance implications, and follow-up considerations clearly.

The Dev Bible reinforces all three aspects without requiring external servers, databases, or complex local setups.

---

## 3. Learn, Practice, and Interview

The platform provides three complementary learning experiences:

### Learn (Concepts & Fundamentals)
Neutral, educational explanations and syntax reference cards covering core web technologies:
- Vanilla JavaScript patterns (event loop, closures, array methods, DOM manipulation).
- React mechanics (component lifecycles, hooks, effect cleanups, state immutability).
- Web standards, semantic HTML, and responsive CSS architectures.

### Practice (Interactive Exercises & Live Preview)
Focused coding sandboxes where learners implement solutions directly in the browser:
- **Live Preview Sandbox**: Multi-pane editors for JavaScript, HTML, and CSS with an isolated iframe rendering changes live.
- **Targeted Syntax Drills**: Guided starter code with targeted goals, progressive hints, and solution comparison.
- **State Preservation**: Retains work-in-progress code across resets and solution inspections.

### Interview (Interview Simulation & Thinking Aloud)
Realistic technical interview simulations modeling real hiring scenarios:
- **Step-by-Step Requirements**: Challenges begin with an initial problem, followed by incremental interviewer requirements (e.g., adding search &rarr; adding debouncing &rarr; handling empty states).
- **"Thinking Aloud" Commentary**: Models how an engineer verbalizes their reasoning to an interviewer while writing code.
- **Architectural Follow-Up Q&A**: Follow-up questions covering performance, error boundaries, edge cases, accessibility (a11y), and backend integration.

---

## 4. Key Features

- **Comprehensive Challenge Bank**: Over 70 step-by-step interview challenges, 70+ live lab exercises, and 90+ targeted training exercises across React, Vanilla JavaScript, state management, API integration, and styling.
- **Bilingual Interface**: Seamless switching between English (default) and Swedish across all interview dialogue, commentary, questions, answers, and code comments.
- **Isolated Iframe Sandbox**: Code executes securely inside a client-side sandboxed iframe (`sandbox="allow-scripts"`).
- **Progressive Hint Engine**: Reveal hints incrementally when stuck before viewing the reference solution.
- **Interactive Project Archetypes**: Educational blueprint projects demonstrating how to talk about APIs, dashboards, routing, and cloud architectures.
- **Zero Backend Required**: Runs 100% in the client browser with instant startup and zero server operational costs.

---

## 5. Technology Stack

- **UI Library**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Language**: JavaScript (ES6+)
- **Styling**: Modern Vanilla CSS (CSS Grid, Flexbox, CSS variables)
- **Linting**: ESLint 9 (Flat configuration)

---

## 6. Installation and Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (bundled with Node.js)

### Clone and Install
```bash
git clone https://github.com/Tivva34/The-Dev-Bible.git
cd The-Dev-Bible
npm install
```

### Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to explore the application locally.

---

## 7. Build and Production Preview

Create an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 8. Project Structure

```text
The-Dev-Bible/
├── index.html                   # HTML entry point with viewport configuration
├── package.json                 # Project dependencies and npm scripts
├── vite.config.js               # Vite build configuration
├── eslint.config.js             # Flat ESLint configuration
├── public/                      # Static assets
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Top-level state and view switcher
    ├── App.css / index.css      # Core application styling and design system
    ├── components/
    │   ├── CodeBlock/           # Syntax-formatted display with copy controls
    │   ├── ExampleCard/         # Interview simulation with step-by-step commentary
    │   ├── ExampleList/         # Catalog dashboard and category view
    │   ├── FundamentalCard/     # Educational concept and reference cards
    │   ├── Hero/                # Landing banner
    │   ├── LanguageToggle/      # Bilingual English/Swedish switch
    │   ├── LiveLabCard/         # Interactive coding sandbox with live iframe preview
    │   ├── QuestionCard/        # Expandable interview Q&A with tag filtering
    │   └── TrainingCard/        # Syntax practice drills with check feedback
    ├── data/
    │   ├── examples.js          # Navigation layout groupings
    │   ├── interview/           # Curated technical and architectural interview questions
    │   │   ├── fullstackQuestions.js
    │   │   ├── interviewQuestions.js
    │   │   ├── questions.en.js / questions.sv.js
    │   │   └── questionFollowUps.en.js / questionFollowUps.sv.js
    │   ├── practice/            # Fundamentals, LiveLab sandboxes, and training exercises
    │   │   ├── fundamentals.js (fundamentals.en.js / fundamentals.sv.js)
    │   │   ├── liveLabChallenges.js (liveLabChallenges.en.js / liveLabChallenges.sv.js)
    │   │   └── trainingChallenges.js (trainingChallenges.en.js / trainingChallenges.sv.js)
    │   └── challenges/          # Challenge catalog by category and framework
    │       ├── angular/         # Angular component and state challenges (e.g. angularComponents.js, angularAdvanced.js)
    │       ├── fullstack/       # Backend and API endpoint challenges (e.g. endpoints.js)
    │       ├── javascript/      # JS algorithms, utility functions, and DOM (e.g. algorithms.js, domInteractions.js)
    │       ├── react/           # React components, hooks, widgets, and state (e.g. components.js, hooksAndState.js)
    │       ├── vue/             # Vue composition and component challenges (e.g. vueComponents.js, vueAdvanced.js)
    │       ├── helpers/         # Builders and challenge helpers (e.g. snippetChallengeBuilder.js)
    │       └── i18n/            # Translations, comments, and follow-up dictionaries (e.g. challengeTranslations.js)
    └── i18n/                    # Localization harness, context, and UI dictionaries
```

---

## 9. Current Limitations

The Dev Bible is under active development. Current known limitations include:
- **Sandbox Transpilation**: The live preview iframe executes native HTML, CSS, and Vanilla JavaScript directly. Exercises utilizing React JSX, Vue templates, or Angular decorators in the sandbox currently display starter/solution code but require future client-side transpilation for dynamic live execution inside the preview.
- **Validation Engine**: Automated code checking in training mode uses normalized string comparison against reference solutions; alternative valid syntax variations may be flagged as differing from the solution.

---

## 10. Future Development

Planned enhancements include:
- In-browser code editing improvements (tab indentation, line numbers, syntax highlighting).
- Client-side JSX/React compilation via in-browser tooling (e.g. Babel Standalone/Sucrase) inside the live sandbox.
- Automated assertion-based test runner for practice exercises.
- Client-side progress tracking and bookmarking via `localStorage`.

---

## 11. Contributing

Contributions to The Dev Bible are welcome! You can contribute by:
- Adding new practical coding challenges.
- Refining technical interview explanations and architectural follow-up questions.
- Improving accessibility (a11y) and responsive design across viewports.
- Reporting bugs or suggesting UX improvements.

Please submit issues or pull requests via GitHub.

---

## 12. License

**The Dev Bible** is dual-licensed:

- **Application Software**: Licensed under the [MIT License](LICENSE-MIT). This covers the React application components, UI logic, styling, state management, internationalization infrastructure, and build configuration.
- **Educational Content**: Licensed under the [Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)](LICENSE-CC-BY-NC-4.0). This covers all interview questions, guided answers, explanations, challenges, hints, solutions, and educational curriculum assets.
- **Commercial Code Snippet Permission**: The copyright holder explicitly permits users to copy, modify, and reuse individual educational code snippets and technical examples in their own projects, including commercial applications. This additional permission does not extend to the surrounding educational texts, questions, explanations, or complete challenge collections.

For full details on file boundaries and license scopes, see [LICENSE.md](LICENSE.md).

