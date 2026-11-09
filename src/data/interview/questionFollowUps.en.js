// src/data/interview/questionFollowUps.en.js
export const followUpTemplatesEn = {
  React: [
    {
      question: "Why did you choose that component structure?",
      answer:
        "I wanted to keep responsibilities distinct: one part for state/logic and another for rendered markup. If the component grows, I can easily extract smaller subcomponents.",
    },
    {
      question: "When would you extract this into its own component?",
      answer:
        "When the JSX becomes difficult to scan, or when the exact same UI pattern is needed in multiple places.",
    },
  ],
  State: [
    {
      question: "Why does this need to be stored in state?",
      answer:
        "Because its value changes based on user interactions and the UI needs to re-render to reflect the updated value.",
    },
    {
      question: "Could this have been passed as props instead?",
      answer:
        "Yes, if the value were owned by a parent component. Local state is appropriate when the component itself manages the lifecycle of the change.",
    },
  ],
  API: [
    {
      question: "How do you handle API request failures?",
      answer:
        "I maintain separate loading, error, and success states so the user receives clear feedback instead of an unresponsive blank screen.",
    },
    {
      question: "Why do you fetch data at this specific location?",
      answer:
        "I fetch data close to where it is consumed. If multiple components require the same data, I lift the request or use a shared query cache.",
    },
  ],
  Form: [
    {
      question: "Why are you using controlled inputs?",
      answer:
        "It ties the input value directly to React state, allowing me to validate, format, reset, or submit the form predictably.",
    },
    {
      question: "Where should validation logic reside?",
      answer:
        "Frontend validation offers immediate user guidance and better UX, but backend validation is always mandatory because client data cannot be trusted.",
    },
  ],
  CSS: [
    {
      question: "How do you make this layout responsive?",
      answer:
        "I use Flexbox and CSS Grid with reasonable min/max track sizing, and adjust styles at breakpoints where the content naturally requires it.",
    },
    {
      question: "How do you prevent CSS from becoming brittle?",
      answer:
        "I keep selector specificity low, use descriptive class names, and align styling with the component's logical structure.",
    },
  ],
  Test: [
    {
      question: "What do you test first?",
      answer:
        "I test the primary user journey first: ensuring key elements render and user actions produce the expected UI changes.",
    },
    {
      question: "Which edge cases are most critical?",
      answer:
        "Empty datasets, network failures, lengthy text strings, rapid duplicate clicks, and combinations of active filters.",
    },
  ],
  A11y: [
    {
      question: "What is most important for accessibility here?",
      answer:
        "Semantic HTML elements, descriptive labels, keyboard focus visibility, and using native buttons or links for interactions.",
    },
    {
      question: "How would you test accessibility quickly?",
      answer:
        "I tab through the entire UI with a keyboard, verify visible focus outlines, and ensure all actions can be executed without a mouse.",
    },
  ],
  Debug: [
    {
      question: "What do you inspect first when debugging?",
      answer:
        "I reproduce the bug consistently and check whether props, state, or event listeners are receiving the expected values.",
    },
    {
      question: "How do you confirm you resolved the root cause?",
      answer:
        "I re-test the exact reproduction steps plus adjacent edge cases to verify that I resolved the underlying cause rather than masking symptoms.",
    },
  ],
  Prestanda: [
    {
      question: "When does performance become a concern?",
      answer:
        "Typically with large datasets, expensive computations, or excessive re-renders. Pagination, memoization, or virtualization can address those.",
    },
    {
      question: "Would you optimize immediately?",
      answer:
        "No, I start with a clean, straightforward implementation and optimize once profiling shows a measurable bottleneck.",
    },
  ],
  Backend: [
    {
      question: "What must the backend always verify?",
      answer:
        "The backend must validate incoming data formats, verify authentication tokens, and authorize user permissions before executing mutations.",
    },
    {
      question: "Which status codes would you return?",
      answer:
        "200 for OK, 201 for Created, 400 for Bad Request, 401 for Unauthorized, 403 for Forbidden, and 500 for Internal Server Error.",
    },
  ],
  Projekt: [
    {
      question: "What was your role in the project?",
      answer:
        "I describe the specific modules I implemented, technical decisions made, and lessons learned from challenges encountered along the way.",
    },
    {
      question: "What would you improve today?",
      answer:
        "I would strengthen automated tests, improve accessibility, refine code modularity, and evaluate areas for better reusability.",
    },
  ],
  Personligt: [
    {
      question: "How do you connect this to the role?",
      answer:
        "I show how my practical experience aligns with the job: structured problem-solving, React fundamentals, API design, and collaborative learning.",
    },
    {
      question: "Can you provide a concrete example?",
      answer:
        "Yes, I relate the answer to a specific project where I implemented a similar feature and describe the technical outcome.",
    },
  ],
  General: [
    {
      question: "Can you elaborate on your approach?",
      answer:
        "A concrete example is building a list, form, or API call. I start with the simplest working solution that fulfills the requirement cleanly, holding off on extra logic until explicitly needed.",
    },
  ],
  Allmänt: [
    {
      question: "Can you elaborate on your approach?",
      answer:
        "A concrete example is building a list, form, or API call. I start with the simplest working solution that fulfills the requirement cleanly, holding off on extra logic until explicitly needed.",
    },
  ],
};

export const portfolioBackgroundFollowUpsEn = {
  "Can you briefly describe your background?": [
    {
      question: "What made you choose web development?",
      answer:
        "I was drawn to the combination of logical problem-solving, creativity, and the ability to build functional digital products that people interact with.",
    },
    {
      question: "How does your technical foundation shape your work today?",
      answer:
        "It instilled a habit of thinking through logic, state transitions, and user experience, which translates naturally to modern frontend engineering.",
    },
  ],
  "How did you get started in web development?": [
    {
      question: "What aspects of development do you enjoy most?",
      answer:
        "I enjoy building user-facing features: crafting clean UI, managing predictable state, and solving practical real-world problems.",
    },
    {
      question: "What key lessons did you carry over from earlier projects?",
      answer:
        "Patience, systematic debugging, and an appreciation for how subtle interactive details elevate the overall user experience.",
    },
  ],
  "What motivates you as a developer?": [
    {
      question: "What drives you when facing difficult challenges?",
      answer:
        "I enjoy decomposing complex issues into manageable pieces, testing hypotheses systematically, and seeing each component fall into place.",
    },
    {
      question: "How do you learn new tools and patterns?",
      answer:
        "I learn best by building practical projects, studying official documentation when blocked, and incrementally improving the code.",
    },
  ],
  "Which technologies are you most comfortable with?": [
    {
      question: "Which technology are you eager to deepen your skills in?",
      answer:
        "I want to become even stronger in TypeScript, fullstack API integration, automated testing, and scalable React architectures.",
    },
    {
      question: "How do you keep your skills up to date?",
      answer:
        "I build personal projects, explore technical documentation, and focus on understanding why tools are designed the way they are.",
    },
  ],
  "How do you work in projects and teams?": [
    {
      question: "How do you collaborate in a team setting?",
      answer:
        "I communicate proactively, ask for clarification when requirements are ambiguous, and contribute both clean code and organized workflows.",
    },
    {
      question: "How do you handle feedback during code reviews?",
      answer:
        "I view code reviews as opportunities for growth. I seek to understand the rationale behind suggestions and adapt the implementation accordingly.",
    },
  ],
  "What defines a great web user experience for you?": [
    {
      question: "What do you prioritize first in a web interface?",
      answer:
        "First, ensuring users clearly understand what actions are available and that core workflows function reliably; then responsiveness, accessibility, and visual polish.",
    },
    {
      question: "How do you view the relationship between design and code?",
      answer:
        "They are closely intertwined. Clean code powers a fast, dependable experience, and thoughtful UI design makes complex logic intuitive for the user.",
    },
  ],
  "What are you looking for in your next role?": [
    {
      question: "What kind of team environment suits you best?",
      answer:
        "A collaborative team that prioritizes engineering quality, shares constructive feedback, and where I can both contribute and learn from seasoned developers.",
    },
    {
      question: "What value do you bring as a junior developer?",
      answer:
        "Curiosity, positive momentum, eager receptiveness to mentorship, and hands-on experience building web projects from concept to working software.",
    },
  ],
  "What technologies are you exploring right now?": [
    {
      question: "Why did you choose those specific technologies?",
      answer:
        "They help me deliver more complete applications: TypeScript for type safety, backend APIs for full architecture, and testing for long-term stability.",
    },
    {
      question: "How does that align with your career trajectory?",
      answer:
        "It demonstrates my dedication to growing as a fullstack-capable engineer who understands the end-to-end journey from UI to database.",
    },
  ],
};

