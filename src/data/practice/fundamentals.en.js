export const fundamentalsExamples = [
  {
    "id": "fundamentals-loops",
    "type": "fundamental",
    "title": "Loop patterns",
    "difficulty": "JavaScript",
    "estimatedTime": "5 min",
    "intro": "Loops are used when the same logic needs to execute repeatedly. The choice depends on whether index, values, or a newly mapped array is required.",
    "keyPoints": [
      "for-loop is suitable when you have an index or need full control.",
      "for..of is cleanest for iterating directly over array elements.",
      "while is suitable when an unknown condition determines when to stop.",
      "Avoid infinite loops by ensuring the loop condition eventually turns false."
    ],
    "followUps": [
      {
        "question": "When do you use map instead of a for-loop?",
        "answer": "When I want to create a new array from an existing one without mutating the original dataset."
      },
      {
        "question": "When is a traditional for-loop better?",
        "answer": "When I need explicit indices, need to abort iteration early with break, or need fine-grained control over step sizing."
      }
    ],
    "codeSections": [
      {
        "id": "for-loop",
        "feature": "feature-search",
        "code": "// forLoop.js\n// Here I use for when I need the index.\nconst numbers = [1, 2, 3];\n\n// Here I start at index 0 and continue until the list ends.\nfor (let index = 0; index < numbers.length; index += 1) {\n// Here I can use both the index and the value at that position.\n  console.log(index, numbers[index]);\n}"
      },
      {
        "id": "for-of-loop",
        "feature": "feature-category",
        "code": "// forOfLoop.js\n// Here I use for...of when I only need the value.\nconst names = [\"Alice\", \"Alex\", \"Sam\"];\n\n// Here the loop goes through one name at a time.\nfor (const name of names) {\n// Here I don't need to track the index.\n  console.log(name);\n}"
      },
      {
        "id": "while-loop",
        "feature": "feature-sort",
        "code": "// whileLoop.js\n// Here I use while when a condition dictates how long the loop runs.\nlet attempts = 0;\n\n// Here the loop continues as long as the condition remains true.\nwhile (attempts < 3) {\n// Here I update the value so the loop doesn't run forever.\n  attempts += 1;\n  console.log(attempts);\n}"
      },
      {
        "id": "map-loop",
        "feature": "feature-empty",
        "code": "// mapExample.js\n// Here I use map when I want to create a new array.\nconst prices = [100, 200, 300];\n\n// Here each iteration returns a new transformed value to the new array.\nconst pricesWithVat = prices.map((price) => price * 1.25);\n\nconsole.log(pricesWithVat);"
      }
    ]
  },
  {
    "id": "fundamentals-if-statements",
    "type": "fundamental",
    "title": "Conditionals & branching",
    "difficulty": "JavaScript",
    "estimatedTime": "5 min",
    "intro": "Conditionals control what code executes based on whether a condition evaluates to true or false.",
    "keyPoints": [
      "if / else if handles multiple conditional branches in sequence.",
      "Ternary operator is suitable for simple inline expressions.",
      "Early return makes functions easier to read by exiting early on error cases.",
      "Keep conditions clear and avoid deeply nested if statements."
    ],
    "followUps": [
      {
        "question": "When do you use a ternary over if/else?",
        "answer": "When I need to choose between two values directly in an expression, for example setting a class name or in JSX."
      },
      {
        "question": "Why use early returns?",
        "answer": "It handles edge cases early so the rest of the function can run cleanly without extra nesting."
      }
    ],
    "codeSections": [
      {
        "id": "guard-clause",
        "feature": "feature-search",
        "code": "// guardClause.js\n// Here I handle edge cases and early exits first.\nfunction getStatusMessage(isLoading, error, users) {\n// Here I exit early if the data is still loading.\n  if (isLoading) return \"Loading...\";\n\n// Here I exit early if something went wrong.\n  if (error) return \"Something went wrong\";\n\n// Here I handle empty list before the success case.\n  if (users.length === 0) return \"No users found\";\n\n// Here I only arrive if everything succeeded.\n  return \"Users loaded\";\n}"
      },
      {
        "id": "if-else",
        "feature": "feature-category",
        "code": "// ifElse.js\n// Here I use if/else when there are two distinct paths.\nfunction getButtonText(isSaving) {\n// Here text is shown while the save is in progress.\n  if (isSaving) {\n    return \"Saving...\";\n  }\n\n// Here standard text is shown otherwise.\n  return \"Save\";\n}"
      },
      {
        "id": "switch-status",
        "feature": "feature-sort",
        "code": "// switchStatus.js\n// Here I use switch when status can have several distinct predefined values.\nfunction getMessage(status) {\n  switch (status) {\n    case \"loading\":\n      return \"Loading...\";\n    case \"error\":\n      return \"Something went wrong\";\n    case \"success\":\n      return \"Done\";\n    default:\n      return \"Unknown status\";\n  }\n}"
      }
    ]
  },
  {
    "id": "fundamentals-array-methods",
    "type": "fundamental",
    "title": "Array methods",
    "difficulty": "JavaScript",
    "estimatedTime": "5 min",
    "intro": "Array methods let you transform, filter, and summarize datasets cleanly without manual loops.",
    "keyPoints": [
      "filter creates a list of items that match the condition.",
      "map creates a new list where each item is transformed.",
      "reduce computes a single value from the entire list."
    ],
    "followUps": [
      {
        "question": "What is the difference between find and filter?",
        "answer": "find returns the first matching element, while filter returns an array of all matching elements."
      },
      {
        "question": "When is reduce the right choice?",
        "answer": "When you need to compute a total, group items, or transform an array into an object."
      }
    ],
    "codeSections": [
      {
        "id": "filter-method",
        "feature": "feature-search",
        "code": "// filterExample.js\n// Here I use filter to keep only elements matching the condition.\nconst products = [\n  { name: \"Laptop\", inStock: true },\n  { name: \"Keyboard\", inStock: false },\n];\n\n// Here a new array of in-stock products is created.\nconst inStockProducts = products.filter((product) => product.inStock);\n\nconsole.log(inStockProducts);"
      },
      {
        "id": "map-method",
        "feature": "feature-category",
        "code": "// mapExample.js\n// Here I use map to transform each item.\nconst products = [\n  { name: \"Laptop\", price: 1200 },\n  { name: \"Keyboard\", price: 150 },\n];\n\n// Here a new list containing only the product names is created.\nconst productNames = products.map((product) => product.name);\n\nconsole.log(productNames);"
      },
      {
        "id": "reduce-method",
        "feature": "feature-sort",
        "code": "// reduceExample.js\n// Here I use reduce to compute an accumulated total.\nconst products = [\n  { name: \"Laptop\", price: 1200 },\n  { name: \"Keyboard\", price: 150 },\n];\n\n// Here the sum starts at 0 and increments with each product price.\nconst totalPrice = products.reduce((sum, product) => {\n  return sum + product.price;\n}, 0);\n\nconsole.log(totalPrice);"
      }
    ]
  },
  {
    "id": "fundamentals-usestate",
    "type": "fundamental",
    "title": "useState",
    "difficulty": "React",
    "estimatedTime": "5 min",
    "intro": "useState lets React components preserve state that re-renders the UI when updated.",
    "keyPoints": [
      "State is suitable for input, toggle, active tab, and selected data.",
      "Values that can be computed usually do not need their own state.",
      "The setter function is used to update the value."
    ],
    "followUps": [
      {
        "question": "Why use functional updates with setState?",
        "answer": "When the new state depends on the previous state, it prevents race condition bugs from queued updates."
      },
      {
        "question": "Why shouldn't you mutate state directly?",
        "answer": "React compares references to detect changes; direct mutation skips re-rendering."
      }
    ],
    "codeSections": [
      {
        "id": "counter-state",
        "feature": "feature-search",
        "code": "// Counter.jsx\n// Here I need useState because the user can change the value.\nimport { useState } from \"react\";\n\nexport default function Counter() {\n// Here I store the value displayed inside the button.\n  const [count, setCount] = useState(0);\n\n// Here I render the button and update state on click.\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Count: {count}\n    </button>\n  );\n}"
      },
      {
        "id": "input-state",
        "feature": "feature-category",
        "code": "// NamePreview.jsx\n// Here I need state because the input field is changed by the user.\nimport { useState } from \"react\";\n\nexport default function NamePreview() {\n// Here I store the text typed by the user.\n  const [name, setName] = useState(\"\");\n\n// Here I bind the input field to that same state.\n  return (\n    <section>\n      <input\n        value={name}\n        onChange={(event) => setName(event.target.value)}\n      />\n      <p>{name}</p>\n    </section>\n  );\n}"
      }
    ]
  },
  {
    "id": "fundamentals-useeffect",
    "type": "fundamental",
    "title": "useEffect",
    "difficulty": "React",
    "estimatedTime": "5 min",
    "intro": "useEffect handles side effects such as data fetching, event subscriptions, and DOM synchronization.",
    "keyPoints": [
      "Effects run after render.",
      "The dependency array controls when the effect runs again.",
      "Cleanup is needed for timers and event listeners."
    ],
    "followUps": [
      {
        "question": "What happens if you omit the dependency array?",
        "answer": "The effect executes after every single render, which often leads to performance issues or infinite loops."
      },
      {
        "question": "When is a cleanup function necessary?",
        "answer": "When setting up event listeners, intervals, timeouts, or WebSocket connections that must be cleared when unmounting."
      }
    ],
    "codeSections": [
      {
        "id": "fetch-effect",
        "feature": "feature-search",
        "code": "// Users.jsx\n// Here I need useEffect because the component fetches data.\nimport { useEffect, useState } from \"react\";\n\nexport default function Users() {\n// Here I store the data received from the API.\n  const [users, setUsers] = useState([]);\n\n// Here fetch runs once when the component mounts.\n  useEffect(() => {\n    async function loadUsers() {\n      const response = await fetch(\"/api/users\");\n      const data = await response.json();\n      setUsers(data);\n    }\n\n    loadUsers();\n  }, []);\n\n// Here I render the data once it exists in state.\n  return users.map((user) => <p key={user.id}>{user.name}</p>);\n}"
      },
      {
        "id": "cleanup-effect",
        "feature": "feature-category",
        "code": "// WindowSize.jsx\n// Here I use cleanup because the event listener outlives individual renders.\nimport { useEffect, useState } from \"react\";\n\nexport default function WindowSize() {\n// Here I store the window width from the browser.\n  const [width, setWidth] = useState(window.innerWidth);\n\n  useEffect(() => {\n// Here I update state whenever the window is resized.\n    function handleResize() {\n      setWidth(window.innerWidth);\n    }\n\n    window.addEventListener(\"resize\", handleResize);\n\n// Here I remove the listener when the component unmounts.\n    return () => window.removeEventListener(\"resize\", handleResize);\n  }, []);\n\n  return <p>{width}px</p>;\n}"
      }
    ]
  },
  {
    "id": "fundamentals-props-callback",
    "type": "fundamental",
    "title": "Props & callbacks",
    "difficulty": "React",
    "estimatedTime": "5 min",
    "intro": "Props pass data down to children, while callback functions communicate events and user actions back up to parents.",
    "keyPoints": [
      "Props flow from parent to child.",
      "Callbacks are passed down when a child needs to trigger something in the parent.",
      "The parent often owns the data and the decision."
    ],
    "followUps": [
      {
        "question": "What is prop drilling and how do you avoid it?",
        "answer": "Passing props through layers that don't need them. Avoid it with component composition, Context, or state management."
      },
      {
        "question": "Why should callbacks be passed as props?",
        "answer": "It keeps children presentationally focused while parent components own state and business logic."
      }
    ],
    "codeSections": [
      {
        "id": "props-example",
        "feature": "feature-search",
        "code": "// ProductCard.jsx\n// Here the child component receives data via props.\nfunction ProductCard({ product }) {\n// Here I render the product's data.\n  return (\n    <article>\n      <h2>{product.name}</h2>\n      <p>{product.price}</p>\n    </article>\n  );\n}"
      },
      {
        "id": "callback-example",
        "feature": "feature-category",
        "code": "// ProductCardWithCallback.jsx\n// Here the child component receives a callback from the parent.\nfunction ProductCard({ product, onSelect }) {\n// Here I invoke the callback when the user clicks the button.\n  return (\n    <article>\n      <h2>{product.name}</h2>\n      <button onClick={() => onSelect(product.id)}>\n        Select\n      </button>\n    </article>\n  );\n}"
      }
    ]
  },
  {
    "id": "fundamentals-fetch",
    "type": "fundamental",
    "title": "Fetch async/await",
    "difficulty": "JavaScript",
    "estimatedTime": "5 min",
    "intro": "async/await provides clean, readable syntax for handling asynchronous operations and network requests.",
    "keyPoints": [
      "await waits for a Promise.",
      "try/catch catches errors in the asynchronous flow.",
      "response.ok should be checked in real API flows."
    ],
    "followUps": [
      {
        "question": "Why check res.ok with fetch?",
        "answer": "fetch does not reject on HTTP error codes like 404 or 500; it only rejects on network failures."
      },
      {
        "question": "How do you handle multiple parallel requests?",
        "answer": "Use Promise.all([fetch1, fetch2]) to execute them concurrently instead of awaiting sequentially."
      }
    ],
    "codeSections": [
      {
        "id": "basic-fetch",
        "feature": "feature-search",
        "code": "// loadProducts.js\n// Here I declare the function async because fetch is asynchronous.\nasync function loadProducts() {\n// Here I catch network or JSON parsing errors.\n  try {\n    const response = await fetch(\"/api/products\");\n    const products = await response.json();\n\n    return products;\n  } catch {\n// Here I return a safe fallback value.\n    return [];\n  }\n}"
      },
      {
        "id": "response-ok",
        "feature": "feature-category",
        "code": "// loadProductsWithStatus.js\n// Here I also verify whether the server returned an error status.\nasync function loadProducts() {\n  const response = await fetch(\"/api/products\");\n\n// Here I throw an error if the response status is not successful.\n  if (!response.ok) {\n    throw new Error(\"Could not load products\");\n  }\n\n// Here I parse the data when the response is OK.\n  return response.json();\n}"
      }
    ]
  }
];
