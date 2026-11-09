export default {
  "interviewQuestions": {
    "beforeLiveCodingQuestions": {
      "id": "before-live-coding",
      "type": "questions",
      "title": "Before live coding",
      "difficulty": "Interview",
      "estimatedTime": "10 min",
      "intro": "Questions commonly asked before the live coding portion begins. The objective is to demonstrate how you reason and approach problems, rather than reciting documentation.",
      "questions": [
        {
          "question": "How do you build a React component?",
          "answer": "I start by clarifying what data the component needs and what it is responsible for rendering. First, I build the simplest static markup, and introduce state or event handlers only when interactivity is required.",
          "followUps": [
            {
              "question": "Can you provide a concrete example?",
              "answer": "When building a product list, I start with a products array and render each product with map. That immediately confirms the layout works without premature state or complex logic."
            },
            {
              "question": "When do you extract smaller subcomponents?",
              "answer": "When a piece takes on dedicated responsibility—for example, extracting a ProductCard when pricing, badges, or item actions clutter the parent component."
            },
            {
              "question": "What do you say when starting with hardcoded data?",
              "answer": "I mention that I'm using lightweight mock data to establish component structure first, making it effortless to switch the source to props or an API fetch later without touching the rendering layout."
            }
          ]
        },
        {
          "question": "Before coding",
          "answer": "I start by articulating what I plan to build first. If the requirement is a product list, I confirm the essential fields, state that I'll start with mock data and map out the items, and ask about sorting or filtering requirements before diving in.",
          "followUps": [
            {
              "question": "Can you elaborate?",
              "answer": "I start with a products array and map each product directly into JSX. I choose this because the base task only requires the list to display, so I don't need additional state yet."
            },
            {
              "question": "Why not build all the logic upfront?",
              "answer": "I want to confirm I understood the requirements accurately. If I build search, sort, and cart state immediately, it becomes harder to test the fundamentals and verify edge cases."
            },
            {
              "question": "What do you do if a requirement is ambiguous?",
              "answer": "I ask directly about the details that impact the architectural solution: whether the list is static, if items need clickable actions, or if data is expected to arrive asynchronously from an API."
            }
          ]
        },
        {
          "question": "When to use useState?",
          "answer": "I use useState when the UI needs to retain data that changes based on user interactions—such as input values, selected filters, open/close toggles, or tab indexes.",
          "followUps": [
            {
              "question": "What should NOT be stored in state?",
              "answer": "Anything that can be derived directly from existing props or state during render, such as filtered lists, total counts, or formatted strings."
            },
            {
              "question": "Why is that important?",
              "answer": "Less redundant state prevents desynchronization bugs and eliminates unnecessary re-renders."
            },
            {
              "question": "How do you name state variables?",
              "answer": "I name state after what it represents in the UI—such as searchQuery, selectedCategory, or isModalOpen—and use set[Name] for updater functions."
            }
          ]
        },
        {
          "question": "Lists in React",
          "answer": "I use map to transform data arrays into JSX elements. Each rendered item receives a unique, stable key from the dataset so React can reconcile elements efficiently across renders.",
          "followUps": [
            {
              "question": "Why not use array index as key?",
              "answer": "Indices work only for completely static lists. If items are reordered, filtered, or deleted, index keys can cause rendering glitches and stale input state."
            },
            {
              "question": "What happens when the list updates?",
              "answer": "A stable ID key ensures React accurately matches DOM nodes with data items, preserving state and optimizing DOM mutations."
            },
            {
              "question": "Where do you define static list data?",
              "answer": "If mock data is static, I define it outside the component function so it isn't re-instantiated on every render."
            }
          ]
        },
        {
          "question": "Props vs state",
          "answer": "Props are read-only data passed down from a parent component. State is mutable data managed locally by the component itself that triggers re-renders upon updates.",
          "followUps": [
            {
              "question": "When do you lift state up?",
              "answer": "When two or more sibling components need access to or modify the same piece of data, I lift state to their closest common parent."
            },
            {
              "question": "How do you explain callback props?",
              "answer": "A parent passes down a callback function as a prop, allowing child components to communicate events or data back up without directly modifying parent state."
            },
            {
              "question": "How do you identify misplaced state?",
              "answer": "When state is drilled through multiple intermediate layers that don't use it, or when state duplicated in multiple places becomes out of sync."
            }
          ]
        },
        {
          "question": "When to use useEffect?",
          "answer": "I use useEffect when a component needs to synchronize with external systems outside the React render cycle—such as fetching API data, setting up event listeners, or managing timers.",
          "followUps": [
            {
              "question": "What is a common useEffect mistake?",
              "answer": "Using useEffect to compute derived state or synchronize props to local state when standard render-time calculations would suffice."
            },
            {
              "question": "When is a cleanup function needed?",
              "answer": "When an effect initiates persistent operations like intervals, event listeners, or WebSocket subscriptions, preventing memory leaks on unmount."
            },
            {
              "question": "What belongs in the dependency array?",
              "answer": "Every reactive value (props, state, or functions derived from them) referenced inside the effect."
            }
          ]
        },
        {
          "question": "Controlled inputs",
          "answer": "A controlled input binds its value to React state and updates that state via an onChange handler. React acts as the single source of truth for the input's current value.",
          "followUps": [
            {
              "question": "When is this particularly useful?",
              "answer": "In search inputs, dynamic filters, form validation, and instant field formatting where the UI must respond immediately to typed input."
            },
            {
              "question": "What is the trade-off?",
              "answer": "It requires boilerplate handlers and causes re-renders on every keystroke, which might warrant debouncing for heavy computations."
            },
            {
              "question": "How do you clear a controlled input?",
              "answer": "Since value is bound to state, resetting state to an empty string immediately clears the rendered input field."
            }
          ]
        },
        {
          "question": "Extracting components",
          "answer": "I extract a subcomponent when a section of JSX gains distinct responsibility, starts cluttering readability, or is reused across multiple places.",
          "followUps": [
            {
              "question": "What is a good example?",
              "answer": "In a product list, extracting ProductCard when card-specific styling, image fallbacks, and action buttons make the parent list file difficult to navigate."
            },
            {
              "question": "When do you hold off on extracting?",
              "answer": "When the markup is concise and used only once; extracting prematurely can create needless abstraction and file-hopping."
            },
            {
              "question": "What do you pass as props?",
              "answer": "Only the specific data and callback handlers the child component requires to perform its job."
            }
          ]
        },
        {
          "question": "CSS and layout",
          "answer": "I prefer structured class naming, responsive CSS layouts (Flexbox/Grid), and styling that enhances usability without coupling too tightly to DOM hierarchy.",
          "followUps": [
            {
              "question": "What accessibility considerations do you include?",
              "answer": "Using semantic elements (buttons for clicks, anchors for navigation), ensuring visible focus outlines, and maintaining legible contrast ratios."
            },
            {
              "question": "How do you start on small tasks?",
              "answer": "With straightforward layout, clean spacing, readable typography, and accessible interactive elements before adding visual flair."
            },
            {
              "question": "How do you address tablet and mobile screens?",
              "answer": "Designing fluid layouts with percentage or minmax tracks, and applying targeted media queries where layout columns naturally need to stack."
            }
          ]
        },
        {
          "question": "When you get stuck",
          "answer": "I explain out loud what I know works, what I expect to happen, and where expectations deviate. I isolate the problem with console logs or simpler inputs to pinpoint the breakdown.",
          "followUps": [
            {
              "question": "How do you explain your debugging process?",
              "answer": "I verify that the event triggers first, then inspect whether state updates accurately. If state is correct, the issue resides in render logic."
            },
            {
              "question": "When do you ask for clarification?",
              "answer": "If business rules or expected outputs are ambiguous, I ask right away; if it's an algorithmic bug, I walk through the data step by step."
            },
            {
              "question": "How do you stay calm under pressure?",
              "answer": "I fall back on solid fundamentals: break the problem down into smaller verifiable steps and avoid changing multiple variables at once."
            }
          ]
        }
      ]
    },
    "afterLiveCodingQuestions": {
      "id": "after-live-coding",
      "type": "questions",
      "title": "After live coding",
      "difficulty": "Interview",
      "estimatedTime": "10 min",
      "intro": "Questions commonly asked after completing the solution. Interviewers want to observe how you discuss architectural improvements, edge cases, and engineering trade-offs.",
      "questions": [
        {
          "question": "Improving the solution",
          "answer": "I would first protect core workflows with automated tests, review edge cases, and inspect whether state naming and component boundaries can be clarified.",
          "followUps": [
            {
              "question": "What would you prioritize first?",
              "answer": "I would start with what minimizes operational risk: automated tests for critical paths and handling empty or failing data states."
            },
            {
              "question": "What would you avoid changing?",
              "answer": "I would avoid introducing heavy libraries or complex state management patterns unless real application scale demands them."
            },
            {
              "question": "How would you make the code more readable?",
              "answer": "By ensuring variable, function, and state names communicate intent clearly, and extracting complex conditional JSX into descriptive helpers."
            }
          ]
        },
        {
          "question": "Edge cases",
          "answer": "I consider empty arrays, lengthy text strings, duplicate IDs, missing property values, slow networks, and rapid repeated user clicks.",
          "followUps": [
            {
              "question": "Can you provide an example?",
              "answer": "In a product list, testing an empty array to show a helpful empty-state message rather than a blank screen or a broken UI."
            },
            {
              "question": "How do you select the most critical edge cases?",
              "answer": "I prioritize cases that directly impact user trust or could crash the application—such as null pointer exceptions in rendering."
            },
            {
              "question": "How do you handle invalid user input?",
              "answer": "By validating close to the input, providing contextual error messages, and preventing form submission until requirements are satisfied."
            }
          ]
        },
        {
          "question": "Performance",
          "answer": "For standard datasets, keeping code straightforward is best. As datasets expand, I evaluate debounced searches, memoized calculations, and windowing/virtualization for long lists.",
          "followUps": [
            {
              "question": "When do you use useMemo?",
              "answer": "When a calculation is computationally expensive and runs frequently with identical inputs during re-renders."
            },
            {
              "question": "How do you determine when optimization is needed?",
              "answer": "By looking for measurable bottlenecks—such as input lag, dropped animation frames, or profiler recordings showing unnecessary work."
            },
            {
              "question": "What is an effective first step?",
              "answer": "Debouncing rapid search inputs to avoid re-filtering large datasets on every single key stroke."
            }
          ]
        },
        {
          "question": "Reusability",
          "answer": "I foster reusability by separating data fetching and business logic from presentation, and accepting props for configurable content, labels, and event handlers.",
          "followUps": [
            {
              "question": "What do you try to avoid?",
              "answer": "Creating overly generic components configured with dozens of obscure boolean flags before multiple real use cases exist."
            },
            {
              "question": "How do you avoid over-engineering?",
              "answer": "Keep the initial version tailored to its immediate need. Abstract common patterns only when three distinct parts of the app require the same functionality."
            },
            {
              "question": "When is a custom hook appropriate?",
              "answer": "When stateful logic—such as localStorage sync, media query detection, or fetching lifecycle—needs to be shared across multiple components."
            }
          ]
        },
        {
          "question": "Testing",
          "answer": "I test what the user actually experiences: verifying that elements render, that interactions update the UI, and that error/loading messages appear when expected.",
          "followUps": [
            {
              "question": "Unit or integration tests?",
              "answer": "Pure utility functions get fast unit tests. For React components, integration tests using React Testing Library provide higher confidence."
            },
            {
              "question": "What do you avoid testing first?",
              "answer": "Internal implementation details, private function state, or exact styling values that are prone to brittle test failures."
            },
            {
              "question": "How do you test an empty list?",
              "answer": "Pass an empty array or simulate a search yielding zero matches, and assert that the fallback empty-state element is rendered."
            }
          ]
        },
        {
          "question": "Given more time",
          "answer": "I would strengthen the implementation with automated integration tests, richer error and loading states, keyboard accessibility, and refined responsive design.",
          "followUps": [
            {
              "question": "How do you prioritize your time?",
              "answer": "First, address anything that could cause user errors or silent failures; second, improve accessibility; third, polish styling and animations."
            },
            {
              "question": "What would you say if time ran out?",
              "answer": "Summarize clearly what is working, outline conscious trade-offs made due to time limits, and state the exact next steps I would implement."
            },
            {
              "question": "What would you document?",
              "answer": "Key architectural decisions, setup prerequisites, and known limitations or future improvement areas in the README."
            }
          ]
        },
        {
          "question": "Loading and error states",
          "answer": "I structure data fetching around three distinct states: loading, error, and data success, ensuring the user is never stranded with an uncommunicative blank view.",
          "followUps": [
            {
              "question": "How would you structure state variables?",
              "answer": "Using a status enum ('idle' | 'loading' | 'error' | 'success') or dedicated loading (boolean) and error (string | null) state variables."
            },
            {
              "question": "What do you render for empty data?",
              "answer": "An empty dataset is a valid result, not an error. I display a clear message indicating no items match the criteria."
            },
            {
              "question": "How do you prevent UI flickering?",
              "answer": "Avoid showing brief loading spinners for near-instant responses, or use skeleton placeholders that preserve layout dimensions."
            }
          ]
        },
        {
          "question": "Accessibility",
          "answer": "I start with semantic HTML: inputs have associated labels, interactive elements use buttons or links, and focus outlines are maintained for keyboard users.",
          "followUps": [
            {
              "question": "What is a quick accessibility check?",
              "answer": "Navigate through the entire component using only the Tab and Enter/Space keys to confirm all actions can be reached and activated."
            },
            {
              "question": "What is an impactful quick win?",
              "answer": "Ensuring all input elements have proper label associations or aria-label attributes, and validating that button text describes its action."
            },
            {
              "question": "What special care does a modal need?",
              "answer": "role='dialog', aria-modal='true', an accessible heading reference, keyboard focus trapping, and closing on Escape key press."
            }
          ]
        },
        {
          "question": "Debugging a bug",
          "answer": "I reproduce the issue reliably, trace data flow from trigger to state to render, verify assumptions with logging, and resolve the root cause rather than patching symptoms.",
          "followUps": [
            {
              "question": "What do you articulate while debugging?",
              "answer": "I state clearly what event just fired, verify whether state received the expected value, and check if the render function read that state correctly."
            },
            {
              "question": "How do you avoid guessing?",
              "answer": "Change one variable at a time, verify hypothesis with logs or breakpoints, and formulate a clear reason before applying any fix."
            },
            {
              "question": "What do you do after applying a fix?",
              "answer": "Retest the original reproduction path, verify adjacent edge cases, and consider writing a regression test to prevent recurrence."
            }
          ]
        },
        {
          "question": "Engineering trade-offs",
          "answer": "I chose a lean, direct solution because the requirements were tightly defined. If requirements expand, I would introduce modular subcomponents or custom hooks.",
          "followUps": [
            {
              "question": "When do you make a solution more advanced?",
              "answer": "When real requirements demand it—such as when multiple views share synchronized state or when list size necessitates virtualization."
            },
            {
              "question": "How do you express trade-offs confidently?",
              "answer": "I explain the reasoning clearly: 'I chose the simpler approach to minimize complexity. If we need pagination or caching later, here is how I would extend it.'"
            },
            {
              "question": "How do you justify keeping it simple?",
              "answer": "A simple solution delivers value faster, has fewer moving parts to break, and is easier for the entire engineering team to read and maintain."
            }
          ]
        }
      ]
    },
    "portfolioBackgroundQuestions": {
      "id": "portfolio-background",
      "type": "questions",
      "title": "Background and profile",
      "difficulty": "Personal",
      "estimatedTime": "10 min",
      "intro": "Educational interview response frameworks illustrating how to structure and present your background, strengths, and engineering workflow during a technical developer interview.",
      "questions": [
        {
          "question": "Can you briefly describe your background?",
          "answer": "An effective way to answer uses a three-step structure: 1) Describe what you specialize in today (e.g. modern frontend development with React), 2) Briefly share what led you into programming (logical reasoning, problem-solving, or related creative work), and 3) Summarize what you build and the types of web applications you enjoy delivering."
        },
        {
          "question": "How did you get started in web development?",
          "answer": "Focus on what originally ignited your passion: talk about the drive to build tangible, interactive digital products that real people use, and how much you enjoy combining logical state architecture, component design, and seamless user experiences."
        },
        {
          "question": "What motivates you as a developer?",
          "answer": "Highlight the satisfaction of taking an idea from initial design all the way to robust, production-ready code. Emphasize that you are driven by solving practical user problems, writing clean and maintainable code, and continuously expanding your engineering toolkit."
        },
        {
          "question": "Which technologies are you most comfortable with?",
          "answer": "Structure your response into two tiers: your solid core foundation (such as HTML, CSS, JavaScript, React, routing, and Git) followed by technologies where you have hands-on project experience and continue to deepen your skills (e.g. TypeScript, REST APIs, Node.js, and automated testing)."
        },
        {
          "question": "How do you work in projects and teams?",
          "answer": "Emphasize a disciplined, iterative workflow: breaking complex goals down into manageable tasks, writing legible self-documenting code, participating proactively in code reviews, and maintaining open, clear communication across the team."
        },
        {
          "question": "What defines a great web user experience for you?",
          "answer": "Take a holistic view: modern applications must be fast, accessible, and intuitive. Discuss semantic HTML, accessibility (WCAG), solid rendering performance, effortless navigation, and responsive design across all devices."
        },
        {
          "question": "What are you looking for in your next role?",
          "answer": "Explain that you are looking for an environment that values engineering quality, user experience, and a supportive team culture—where you can contribute enthusiastically while learning from and collaborating with experienced colleagues."
        },
        {
          "question": "What technologies are you exploring right now?",
          "answer": "Provide examples of technologies you are actively mastering (e.g. TypeScript for stronger type guarantees, fullstack API integration, or end-to-end testing) to illustrate your intellectual curiosity and commitment to continuous learning."
        }
      ]
    },
    "portfolioProjectQuestions": {
      "id": "portfolio-projects",
      "type": "questions",
      "title": "Projects and architecture",
      "difficulty": "Architecture",
      "estimatedTime": "15 min",
      "intro": "",
      "questions": [
        {
          "question": "Fullstack project (Example: Order API)",
          "answer": "As an example of fullstack and backend foundations, I highlight an order API and resource API. I walk through a complete REST API managing menu items, carts, orders, and statuses, demonstrating hands-on experience with CRUD, data modeling, authentication, and protected endpoints.",
          "followUps": [
            {
              "question": "What makes an order API compelling to discuss?",
              "answer": "It makes backend workflows tangible. I can explain how routes are structured, how data models represent entities, and how frontend requests create orders and receive predictable HTTP responses."
            },
            {
              "question": "What was your key takeaway from authentication?",
              "answer": "That endpoint security must strictly reside on the backend. Frontend controls UI appearance, but backend must independently verify token validity and permissions for every request."
            },
            {
              "question": "How does backend knowledge benefit frontend work?",
              "answer": "It gives me a clear appreciation for what frontend needs from an API: standardized status codes, consistent JSON payload contracts, and actionable error messages."
            }
          ]
        },
        {
          "question": "Client and business website",
          "answer": "When discussing a client or business project, I highlight a modern corporate website built with React, Vite, and Framer Motion—focusing on responsive design, clear content hierarchy, contact flows, SEO, accessibility, and production deployment under a custom domain.",
          "followUps": [
            {
              "question": "What was most critical in this project?",
              "answer": "Ensuring visitors immediately grasp the services offered and can contact the business seamlessly. I prioritized clear content structure, legible typography, and straightforward call-to-actions."
            },
            {
              "question": "What makes this different from simple coding exercises?",
              "answer": "It must be genuinely trustworthy and functional in production. I think holistically about initial impressions, mobile usability, contact forms, performance, and maintainability."
            },
            {
              "question": "What technical details can you discuss?",
              "answer": "Component architecture, responsive CSS, fluid animations with Framer Motion, SEO fundamentals, accessibility best practices, and automated deployment pipelines."
            }
          ]
        },
        {
          "question": "React project (Example: Routing, API, and State)",
          "answer": "To demonstrate React proficiency, I highlight projects featuring component architecture, client-side routing, external REST API consumption, multi-view state management, and interfaces built around dynamic datasets.",
          "followUps": [
            {
              "question": "Which type of React project do you choose first?",
              "answer": "An API-driven project when discussing asynchronous data fetching, loading indicators, and error resilience; a routed app when discussing multi-page navigation, authentication gates, and persistent state."
            },
            {
              "question": "What do routing projects demonstrate?",
              "answer": "They demonstrate the ability to structure complex user journeys across multiple views while maintaining clean state transitions from list views to detailed records."
            },
            {
              "question": "What reflects your component mindset?",
              "answer": "Decomposing user interfaces into modular building blocks—such as cards, lists, detail panels, and reusable buttons—to keep code maintainable and testable."
            }
          ]
        },
        {
          "question": "Portfolio website",
          "answer": "My portfolio showcases how I present projects, technical abilities, and contact information with clarity. I place special emphasis on responsive design, accessibility, SEO, load performance, and making project highlights quick to scan.",
          "followUps": [
            {
              "question": "What do you want the portfolio to convey?",
              "answer": "A clear trajectory of growth: proficiency in HTML/CSS, modern React, asynchronous APIs, backend fundamentals, and the ability to articulate what I have built."
            },
            {
              "question": "What have you improved over time?",
              "answer": "Layout structure, clarity of copy, mobile responsiveness, and project storytelling—ensuring reviewers can instantly understand the problem, tech stack, and outcome."
            },
            {
              "question": "How do you approach project descriptions?",
              "answer": "I keep them concrete: what was built, what technical decisions were made, and what specific engineering competencies the project developed."
            }
          ]
        },
        {
          "question": "Custom tools and prototypes",
          "answer": "I build prototypes and utility tools to experiment with new technologies, such as real-time chat translation tools and stream utilities. These explore API integrations, JSON streaming, polling, text processing, automation, and workflow enhancements.",
          "followUps": [
            {
              "question": "Why do you build personal tools?",
              "answer": "I learn rapidly when solving real problems. It forces me to think deeply about data flow, user interaction, and what truly makes software practical."
            },
            {
              "question": "What do these projects demonstrate to employers?",
              "answer": "Intellectual curiosity, technical initiative, and the drive to experiment practically. They demonstrate comfort with APIs, automation, and decomposing ideas into working software."
            },
            {
              "question": "How do you decide what to build?",
              "answer": "I look for repetitive friction points in my own workflows. Having an immediate personal use case makes it easy to validate whether the solution actually helps."
            }
          ]
        },
        {
          "question": "Role in group projects",
          "answer": "In team projects, I contribute both technically and practically: breaking down user stories, implementing features, testing flows, assisting with UI polish, and communicating transparently when requirements change.",
          "followUps": [
            {
              "question": "How do you collaborate when requirements are ambiguous?",
              "answer": "I articulate where the uncertainty lies and propose concrete next steps—such as agreeing on data contracts or breaking down a larger feature into smaller milestones."
            },
            {
              "question": "How do you manage changes that affect teammates?",
              "answer": "I communicate proactively before making breaking modifications to shared data structures, route configurations, API contracts, or core shared components."
            },
            {
              "question": "What do you bring to a team culture?",
              "answer": "Energy, structured problem-solving, and a pragmatic determination to make features work smoothly, paired with a focus on code clarity that benefits the whole team."
            }
          ]
        },
        {
          "question": "Improving projects forward",
          "answer": "Looking ahead, I want to continuously refine testing coverage, accessibility compliance, code structure, and runtime performance, while advancing my depth in TypeScript, Next.js, Docker, WebSockets, and backend architecture.",
          "followUps": [
            {
              "question": "What would you prioritize improving first?",
              "answer": "Automated testing and accessibility, because they directly ensure application reliability and inclusivity. From there, I optimize structural modularity and runtime speed."
            },
            {
              "question": "Why focus on TypeScript?",
              "answer": "TypeScript catches type mismatches during development and makes larger codebases substantially easier to navigate as props, API payloads, and state models grow."
            },
            {
              "question": "What does better backend integration mean to you?",
              "answer": "Mastering the end-to-end data lifecycle: validation, secure authentication, clean error propagation, and responsive UI feedback across the full network boundary."
            }
          ]
        }
      ]
    },
    "githubRepoQuestions": {
      "id": "github-repos",
      "type": "questions",
      "title": "GitHub project archetypes",
      "difficulty": "Personal",
      "estimatedTime": "15 min",
      "intro": "Educational archetypes illustrating how developers present GitHub repositories during technical interviews to showcase specific strengths (such as React state, API handling, backend patterns, and deployment).",
      "projects": [
        {
          "id": "fullstack-api",
          "name": "E-Commerce REST API (Example)",
          "type": "Fullstack / API",
          "technologies": [
            "Node.js",
            "Express",
            "MongoDB",
            "Mongoose",
            "Swagger"
          ],
          "about": "Educational REST API example featuring product catalog, shopping cart, JWT authentication, and checkout flow. Illustrates routing structure, data modeling, and API documentation.",
          "interviewAngle": "In an API project like this, I discuss how the backend validates input, secures private routes with tokens, and communicates standard HTTP status codes back to the frontend."
        },
        {
          "id": "react-dashboard",
          "name": "Data Explorer & Dashboard (Example)",
          "type": "Frontend / Data",
          "technologies": [
            "React",
            "Vite",
            "REST API",
            "Framer Motion"
          ],
          "about": "Educational React application consuming external REST APIs with live search, filtering, loading skeletons, and responsive data visualization.",
          "interviewAngle": "In an API-driven frontend project, I emphasize asynchronous data lifecycle, error resilience, loading feedback, and building modular interfaces around dynamic data."
        },
        {
          "id": "store-routing",
          "name": "Multi-View Store App (Example)",
          "type": "Frontend / Routing",
          "technologies": [
            "React",
            "React Router",
            "Custom Hooks",
            "localStorage"
          ],
          "about": "Multi-view web application featuring catalog browsing, cart flows, and persistent state synchronized with browser localStorage.",
          "interviewAngle": "Here I explain how client-side navigation and URL parameters are managed with React Router, and how custom hooks encapsulate localStorage synchronization."
        },
        {
          "id": "serverless-board",
          "name": "Cloud Message Board (Example)",
          "type": "Serverless / Cloud",
          "technologies": [
            "React",
            "AWS API Gateway",
            "Lambda",
            "DynamoDB"
          ],
          "about": "Serverless architecture example where a React frontend communicates with cloud functions and a NoSQL database without managing traditional web servers.",
          "interviewAngle": "In a serverless architecture, I discuss how requests route through API Gateway, how functions execute on demand, and how data is persisted in a managed cloud database."
        },
        {
          "id": "vanilla-engine",
          "name": "Logic & DOM Game Engine (Example)",
          "type": "JavaScript Fundamentals",
          "technologies": [
            "JavaScript",
            "HTML5",
            "CSS Grid",
            "State Management"
          ],
          "about": "Pure JavaScript application demonstrating DOM manipulation, turn-based game loop logic, and timer-driven state management without third-party frameworks.",
          "interviewAngle": "A project like this is great for proving deep fluency with JavaScript fundamentals: DOM events, event loop execution, pure logic, and predictable state transitions."
        }
      ],
      "questions": [
        {
          "question": "What types of repositories best demonstrate fullstack or backend capability?",
          "answer": "Projects that combine clear API design with database persistence: for instance, a Node.js/Express REST API with CRUD operations, JWT authentication, and MongoDB/SQL modeling, or a serverless setup using AWS Lambda and DynamoDB. Emphasize protected routes and API documentation."
        },
        {
          "question": "Which projects best demonstrate working with external APIs?",
          "answer": "Projects consuming public or third-party REST APIs. They demonstrate how you manage asynchronous requests, error and loading states, pagination, search filtering, and responsive rendering of external data."
        },
        {
          "question": "Which projects highlight React Router and multi-page state?",
          "answer": "Projects with multiple connected views (e.g. catalog list, item details, cart, and checkout). They prove proficiency with dynamic routes, URL parameters, and preserving state across navigation, often backed by localStorage."
        },
        {
          "question": "Which project best reflects business and product awareness?",
          "answer": "A complete business or client website. It allows you to speak to the complete product: first impressions, fast load times, responsive layouts, functional contact forms, accessibility compliance, and production deployment under a custom domain."
        },
        {
          "question": "How can you discuss earlier or simpler projects without sounding weak?",
          "answer": "Focus on what they taught you and the progression they illustrate. A vanilla JavaScript game demonstrates DOM events and logic; a static HTML/CSS page shows semantic markup and responsiveness. They prove you built strong foundations before adopting large frameworks."
        },
        {
          "question": "How do you choose which GitHub projects to discuss in an interview?",
          "answer": "Align your selection with the specific role. For frontend positions, highlight React apps emphasizing state, accessibility, and component design. For fullstack roles, highlight backend architecture, API routing, and databases. Always tailor to the employer's needs."
        }
      ]
    }
  },
  "fullstackQuestions": {
    "fullstackBeforeQuestions": {
      "id": "fullstack-before",
      "type": "questions",
      "title": "Before fullstack",
      "difficulty": "Fullstack",
      "estimatedTime": "10 min",
      "intro": "Questions commonly asked when an interview covers both frontend and backend concepts.",
      "questions": [
        {
          "question": "How do you conceptualize frontend versus backend responsibilities?",
          "answer": "I maintain a clear separation of concerns: the frontend is responsible for an intuitive user experience and sending well-structured requests; the backend is responsible for validating business rules, securing data, and responding with standard HTTP status codes."
        },
        {
          "question": "How do you approach API design?",
          "answer": "I start by identifying core domain resources, such as users, products, or orders. Then I define intuitive REST endpoints, appropriate HTTP verbs (GET, POST, PUT, DELETE), and predictable response payloads that the client can easily consume."
        },
        {
          "question": "Where should validation take place?",
          "answer": "I validate on the frontend for immediate user feedback and UX, but the backend must always validate independently because client-sent data can never be inherently trusted."
        },
        {
          "question": "How do you approach authentication?",
          "answer": "The frontend maintains user session state and attaches credentials/tokens, but the backend must verify authentication tokens and enforce authorization rules before executing any action."
        }
      ]
    },
    "fullstackAfterQuestions": {
      "id": "fullstack-after",
      "type": "questions",
      "title": "After fullstack",
      "difficulty": "Fullstack",
      "estimatedTime": "10 min",
      "intro": "Questions discussing security, status codes, error handling, and how fullstack architectures scale in real applications.",
      "questions": [
        {
          "question": "How would you make the solution more secure?",
          "answer": "Ensure backend validates all incoming input, protect endpoints with authenticated sessions or JWTs in HTTP-only cookies, avoid exposing sensitive data in response payloads, and manage secrets strictly through environment variables."
        },
        {
          "question": "Which HTTP status codes do you commonly use?",
          "answer": "200 for successful retrieval, 201 for resource creation, 400 for invalid client input, 401 for unauthenticated requests, 403 for unauthorized permissions, 404 for missing resources, and 500 for internal server errors."
        },
        {
          "question": "How do you handle backend API errors in the frontend?",
          "answer": "I manage loading, error, and success states explicitly. If the backend provides structured field-level validation errors, I map and display them directly next to the corresponding input fields."
        },
        {
          "question": "How would you test this end-to-end flow?",
          "answer": "I write API tests verifying successful requests and expected error codes, and frontend integration tests ensuring that loading indicators, error banners, empty lists, and successful submissions render accurately."
        }
      ]
    },
    "fullstackProjectQuestions": {
      "id": "fullstack-project-angle",
      "type": "questions",
      "title": "Fullstack architecture",
      "difficulty": "Personal",
      "estimatedTime": "12 min",
      "intro": "Ways to discuss projects connecting frontend interfaces, API routing, and persistent database storage.",
      "questions": [
        {
          "question": "How do you explain a serverless cloud architecture?",
          "answer": "A serverless pattern pairs a frontend (such as React) with cloud services like AWS API Gateway, Lambda functions, and DynamoDB. I explain how the frontend issues requests, how on-demand functions execute business logic without traditional servers, and how data persists in a cloud database."
        },
        {
          "question": "How do you present an order or shopping cart API?",
          "answer": "An order API demonstrates a realistic e-commerce workflow: menus, carts, and order checkout. I discuss REST endpoints, database schemas, HTTP status codes, and how the API supports a cohesive user purchase journey."
        },
        {
          "question": "How do you present a Todo API or MongoDB project?",
          "answer": "They demonstrate foundational CRUD operations, JWT authentication, protected routes, and database modeling in MongoDB. It shows an interviewer that I understand full data flow beyond the UI layer."
        },
        {
          "question": "What is your key strength as a junior frontend/fullstack developer?",
          "answer": "I understand the complete user and data journey from UI components to API routing and database persistence. While frontend is my strongest passion, I can comfortably build, integrate, and reason about the backend services needed for complete applications."
        }
      ]
    }
  }
};
