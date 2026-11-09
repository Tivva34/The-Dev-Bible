export const randomTrainingChallenge = {
  "id": "random-training",
  "type": "training",
  "title": "Random challenge",
  "difficulty": "Practice",
  "estimatedTime": "5-15 min",
  "description": "Random coding drills with hints and solutions.",
  "challenges": [
    {
      "id": "filter-active-products",
      "category": "JavaScript",
      "prompt": "Write a function that takes a list of products and returns only the products that are in stock.",
      "starterCode": "const products = [\n  { id: 1, name: \"Coffee\", inStock: true },\n  { id: 2, name: \"Tea\", inStock: false },\n  { id: 3, name: \"Water\", inStock: true },\n];\n\nfunction getInStockProducts(items) {\n  // Write your solution here.\n}",
      "hints": [
        "Use an array method that filters down elements.",
        "filter returns a new array with matching items.",
        "Check item.inStock inside the callback.",
        "Example: items.filter((item) => item.inStock);"
      ],
      "solution": "const products = [\n  { id: 1, name: \"Coffee\", inStock: true },\n  { id: 2, name: \"Tea\", inStock: false },\n  { id: 3, name: \"Water\", inStock: true },\n];\n\nfunction getInStockProducts(items) {\n  return items.filter((item) => item.inStock);\n}",
      "followUps": [
        {
          "question": "Why use filter instead of a for-loop?",
          "answer": "filter returns a new array directly without mutating the original or requiring manual array pushing."
        },
        {
          "question": "What does item.inStock evaluate to?",
          "answer": "It is already a boolean, so no extra comparison like === true is needed."
        }
      ]
    },
    {
      "id": "search-by-name",
      "category": "JavaScript",
      "prompt": "Write a function that searches products by name case-insensitively.",
      "starterCode": "const products = [\n  { id: 1, name: \"Laptop\" },\n  { id: 2, name: \"Phone\" },\n  { id: 3, name: \"Tablet\" },\n];\n\nfunction searchProducts(items, query) {\n  // Write your solution here.\n}",
      "hints": [
        "Use filter together with includes.",
        "Convert both strings to lowercase for case-insensitivity.",
        "toLowerCase() converts a string to lowercase.",
        "Example: item.name.toLowerCase().includes(query.toLowerCase());"
      ],
      "solution": "const products = [\n  { id: 1, name: \"Laptop\" },\n  { id: 2, name: \"Phone\" },\n  { id: 3, name: \"Tablet\" },\n];\n\nfunction searchProducts(items, query) {\n  const normalizedQuery = query.toLowerCase();\n  return items.filter((item) =>\n    item.name.toLowerCase().includes(normalizedQuery),\n  );\n}",
      "followUps": [
        {
          "question": "Why convert query to lowercase outside the loop?",
          "answer": "So toLowerCase() is evaluated once instead of recalculating on every iteration."
        },
        {
          "question": "What happens if query is an empty string?",
          "answer": "includes('') returns true for all strings, returning the complete list as expected."
        }
      ]
    },
    {
      "id": "sort-products-by-price",
      "category": "JavaScript",
      "prompt": "Write a function that sorts products from lowest to highest price without mutating the original array.",
      "starterCode": "const products = [\n  { id: 1, name: \"Book\", price: 120 },\n  { id: 2, name: \"Pen\", price: 20 },\n  { id: 3, name: \"Bag\", price: 350 },\n];\n\nfunction sortByPrice(items) {\n  // Write your solution here.\n}",
      "hints": [
        "sort() mutates the array in place, so copy it first.",
        "You can copy with [...items] or items.slice().",
        "Use a compare function: (a, b) => a.price - b.price.",
        "Example: [...items].sort((a, b) => a.price - b.price);"
      ],
      "solution": "const products = [\n  { id: 1, name: \"Book\", price: 120 },\n  { id: 2, name: \"Pen\", price: 20 },\n  { id: 3, name: \"Bag\", price: 350 },\n];\n\nfunction sortByPrice(items) {\n  return [...items].sort((a, b) => a.price - b.price);\n}",
      "followUps": [
        {
          "question": "Why copy before sort?",
          "answer": "sort mutates the source array; copying keeps the function pure without side effects."
        },
        {
          "question": "How do you sort highest to lowest instead?",
          "answer": "Reverse the subtraction in the compare function: (a, b) => b.price - a.price."
        }
      ]
    },
    {
      "id": "count-completed-todos",
      "category": "JavaScript",
      "prompt": "Count how many todos are completed and return the count.",
      "starterCode": "const todos = [\n  { id: 1, text: \"Buy milk\", done: true },\n  { id: 2, text: \"Clean room\", done: false },\n  { id: 3, text: \"Work out\", done: true },\n];\n\nfunction countDone(items) {\n  // Write your solution here.\n}",
      "hints": [
        "You can filter out completed items and check .length.",
        "Or use reduce to accumulate matching items.",
        "filter((item) => item.done).length is clear and concise.",
        "Example: return items.filter((item) => item.done).length;"
      ],
      "solution": "const todos = [\n  { id: 1, text: \"Buy milk\", done: true },\n  { id: 2, text: \"Clean room\", done: false },\n  { id: 3, text: \"Work out\", done: true },\n];\n\nfunction countDone(items) {\n  return items.filter((item) => item.done).length;\n}",
      "followUps": [
        {
          "question": "When is reduce preferable to filter + length?",
          "answer": "On very large datasets, reduce avoids allocating an intermediate array."
        },
        {
          "question": "What does countDone return for an empty array?",
          "answer": "It returns 0 because an empty array has a length of 0."
        }
      ]
    },
    {
      "id": "sum-cart-total",
      "category": "JavaScript",
      "prompt": "Write a function that calculates total price for a cart where each item has price and quantity.",
      "starterCode": "const cart = [\n  { id: 1, name: \"Coffee\", price: 40, quantity: 2 },\n  { id: 2, name: \"Sandwich\", price: 65, quantity: 1 },\n];\n\nfunction getCartTotal(items) {\n  // Write your solution here.\n}",
      "hints": [
        "Use reduce to fold all items into a single sum.",
        "Remember to provide 0 as the initial value.",
        "Multiply price by quantity for each item.",
        "Example: items.reduce((total, item) => total + item.price * item.quantity, 0);"
      ],
      "solution": "const cart = [\n  { id: 1, name: \"Coffee\", price: 40, quantity: 2 },\n  { id: 2, name: \"Sandwich\", price: 65, quantity: 1 },\n];\n\nfunction getCartTotal(items) {\n  return items.reduce(\n    (total, item) => total + item.price * item.quantity,\n    0,\n  );\n}",
      "followUps": [
        {
          "question": "Why provide 0 as the initial reduce value?",
          "answer": "Without 0, reduce uses the first item object as the initial accumulator value."
        },
        {
          "question": "How do you handle items with missing quantity?",
          "answer": "Use a fallback: (item.quantity || 1) to prevent NaN computations."
        }
      ]
    },
    {
      "id": "toggle-favorite",
      "category": "JavaScript",
      "prompt": "Write a function that toggles whether an ID exists in an array of favorite IDs.",
      "starterCode": "const favoriteIds = [1, 4, 8];\n\nfunction toggleFavorite(ids, idToToggle) {\n  // Write your solution here.\n}",
      "hints": [
        "Check if idToToggle already exists using includes.",
        "If present, filter it out.",
        "If missing, return a new array with the ID added.",
        "Example: ids.includes(idToToggle) ? ids.filter((id) => id !== idToToggle) : [...ids, idToToggle];"
      ],
      "solution": "const favoriteIds = [1, 4, 8];\n\nfunction toggleFavorite(ids, idToToggle) {\n  if (ids.includes(idToToggle)) {\n    return ids.filter((id) => id !== idToToggle);\n  }\n\n  return [...ids, idToToggle];\n}",
      "followUps": [
        {
          "question": "Why return a new array instead of using push/splice?",
          "answer": "Pure functions and immutable array updates ensure reliable React state reconciliation."
        },
        {
          "question": "Can this be written as a one-liner?",
          "answer": "Yes, using a ternary expression with includes, filter, and spread."
        }
      ]
    },
    {
      "id": "update-object-in-array",
      "category": "JavaScript",
      "prompt": "Write a function that updates the text of a todo without mutating the original array.",
      "starterCode": "const todos = [\n  { id: 1, text: \"Buy milk\" },\n  { id: 2, text: \"Clean room\" },\n];\n\nfunction updateTodoText(items, idToUpdate, nextText) {\n  // Write your solution here.\n}",
      "hints": [
        "Use map to iterate through the array.",
        "Check if item.id matches idToUpdate.",
        "Copy the matching item with spread and update text.",
        "Example: items.map((item) => item.id === idToUpdate ? { ...item, text: nextText } : item);"
      ],
      "solution": "const todos = [\n  { id: 1, text: \"Buy milk\" },\n  { id: 2, text: \"Clean room\" },\n];\n\nfunction updateTodoText(items, idToUpdate, nextText) {\n  return items.map((item) => {\n    if (item.id === idToUpdate) {\n      return { ...item, text: nextText };\n    }\n\n    return item;\n  });\n}",
      "followUps": [
        {
          "question": "Why use map for updating an item?",
          "answer": "It returns a new array with only the targeted object replaced, keeping all other objects by reference."
        },
        {
          "question": "What happens if no ID matches?",
          "answer": "map returns a new array containing all original items unchanged."
        }
      ]
    },
    {
      "id": "group-by-category",
      "category": "JavaScript",
      "prompt": "Write a function that groups products by category.",
      "starterCode": "const products = [\n  { id: 1, name: \"Apple\", category: \"fruit\" },\n  { id: 2, name: \"Carrot\", category: \"vegetable\" },\n  { id: 3, name: \"Banana\", category: \"fruit\" },\n];\n\nfunction groupByCategory(items) {\n  // Write your solution here.\n}",
      "hints": [
        "Use reduce with an empty object {} as starting value.",
        "Check if acc[category] already exists.",
        "Initialize it to [] if undefined, then push or spread the item.",
        "Return the accumulator object at the end of each iteration."
      ],
      "solution": "const products = [\n  { id: 1, name: \"Apple\", category: \"fruit\" },\n  { id: 2, name: \"Carrot\", category: \"vegetable\" },\n  { id: 3, name: \"Banana\", category: \"fruit\" },\n];\n\nfunction groupByCategory(items) {\n  return items.reduce((groups, item) => {\n    const category = item.category;\n\n    if (!groups[category]) {\n      groups[category] = [];\n    }\n\n    groups[category].push(item);\n    return groups;\n  }, {});\n}",
      "followUps": [
        {
          "question": "What does the resulting object look like?",
          "answer": "It has category keys (e.g. fruit, vegetable) whose values are arrays of matching products."
        },
        {
          "question": "Can modern JavaScript do this natively?",
          "answer": "Yes, modern environments support Object.groupBy(items, (item) => item.category)."
        }
      ]
    },
    {
      "id": "flatten-array",
      "category": "JavaScript",
      "prompt": "Write a function that flattens a nested array by one level.",
      "starterCode": "const nested = [1, [2, 3], [4, [5]]];\n\nfunction flattenOneLevel(items) {\n  // Write your solution here.\n}",
      "hints": [
        "flat(1) is the standard method for one-level flattening.",
        "Or use reduce together with concat.",
        "flat() with no arguments defaults to depth 1.",
        "Example: return items.flat();"
      ],
      "solution": "const nested = [1, [2, 3], [4, [5]]];\n\nfunction flattenOneLevel(items) {\n  return items.flat();\n}",
      "followUps": [
        {
          "question": "What does flat() do with [4, [5]]?",
          "answer": "It flattens one level so [4, [5]] becomes 4 and [5]."
        },
        {
          "question": "How would you flatten all nested levels?",
          "answer": "By passing Infinity: items.flat(Infinity)."
        }
      ]
    },
    {
      "id": "find-first-duplicate",
      "category": "JavaScript",
      "prompt": "Write a function that finds the first duplicate value in an array.",
      "starterCode": "const numbers = [2, 5, 8, 3, 5, 9, 2];\n\nfunction findFirstDuplicate(items) {\n  // Write your solution here.\n}",
      "hints": [
        "Use a Set to track numbers you have already visited.",
        "Iterate through the array with a for-loop.",
        "If the Set has(item), return that item immediately.",
        "Add seen items using set.add(item). Return null if no duplicate is found."
      ],
      "solution": "const numbers = [2, 5, 8, 3, 5, 9, 2];\n\nfunction findFirstDuplicate(items) {\n  const seen = new Set();\n\n  for (const item of items) {\n    if (seen.has(item)) {\n      return item;\n    }\n\n    seen.add(item);\n  }\n\n  return null;\n}",
      "followUps": [
        {
          "question": "Why is Set better than array includes here?",
          "answer": "Set.has() runs in O(1) constant time, while array.includes() runs in O(n) linear time."
        },
        {
          "question": "What does this return if all items are unique?",
          "answer": "It runs through the loop and returns null."
        }
      ]
    },
    {
      "id": "debounce-search",
      "category": "JavaScript",
      "prompt": "Write a debounce function that waits before executing its callback.",
      "starterCode": "function debounce(fn, delay) {\n  // Write your solution here.\n}",
      "hints": [
        "Return a new wrapper function.",
        "Track a timer variable inside the closure.",
        "Clear any existing timer with clearTimeout(timer) on each call.",
        "Start a new setTimeout(fn, delay)."
      ],
      "solution": "function debounce(fn, delay) {\n  let timer = null;\n\n  return function (...args) {\n    clearTimeout(timer);\n    timer = setTimeout(() => {\n      fn(...args);\n    }, delay);\n  };\n}",
      "followUps": [
        {
          "question": "Why is a closure necessary here?",
          "answer": "The inner function needs to remember and update the timer across repeated invocations."
        },
        {
          "question": "Where is debounce commonly applied?",
          "answer": "In search inputs, window resize handlers, and auto-save fields to avoid excessive calls."
        }
      ]
    },
    {
      "id": "promise-all-lite",
      "category": "JavaScript",
      "prompt": "Write an async function that fetches users and posts concurrently and returns both.",
      "starterCode": "async function loadDashboardData() {\n  // Write your solution here.\n}",
      "hints": [
        "Use Promise.all to fetch both endpoints concurrently.",
        "Fetch both URLs inside an array.",
        "Parse both JSON responses.",
        "Return an object or tuple containing { users, posts }."
      ],
      "solution": "async function loadDashboardData() {\n  const [usersResponse, postsResponse] = await Promise.all([\n    fetch(\"/api/users\"),\n    fetch(\"/api/posts\"),\n  ]);\n\n  const [users, posts] = await Promise.all([\n    usersResponse.json(),\n    postsResponse.json(),\n  ]);\n\n  return { users, posts };\n}",
      "followUps": [
        {
          "question": "Why run requests with Promise.all?",
          "answer": "It executes them concurrently rather than sequentially, significantly reducing total network wait time."
        },
        {
          "question": "What happens if one of the requests fails?",
          "answer": "Promise.all rejects immediately with the first error that occurs."
        }
      ]
    },
    {
      "id": "react-controlled-input",
      "category": "React",
      "prompt": "Build a simple React component with an input field that displays whatever text the user types.",
      "starterCode": "import { useState } from \"react\";\n\nexport default function NamePreview() {\n  // Write your solution here.\n  return null;\n}",
      "hints": [
        "Create text state with useState(\"\").",
        "Attach value={text} to the input.",
        "Update state with onChange={(e) => setText(e.target.value)}.",
        "Render text in a <p> element below the input."
      ],
      "solution": "import { useState } from \"react\";\n\nexport default function NamePreview() {\n  const [name, setName] = useState(\"\");\n\n  return (\n    <div>\n      <input\n        value={name}\n        onChange={(event) => setName(event.target.value)}\n        placeholder=\"Type a name\"\n      />\n      <p>Preview: {name}</p>\n    </div>\n  );\n}",
      "followUps": [
        {
          "question": "What makes this input 'controlled'?",
          "answer": "React state acts as the single source of truth for the input's displayed value."
        },
        {
          "question": "Why use event.target.value?",
          "answer": "target is the DOM input element and value contains the current typed string."
        }
      ]
    },
    {
      "id": "react-filter-list",
      "category": "React",
      "prompt": "Build a React component that renders a list and filters it using a search input.",
      "starterCode": "import { useState } from \"react\";\n\nconst users = [\n  { id: 1, name: \"Alice\" },\n  { id: 2, name: \"Alex\" },\n  { id: 3, name: \"Sara\" },\n];\n\nexport default function UserSearch() {\n  // Write your solution here.\n  return null;\n}",
      "hints": [
        "Manage search text in state: const [search, setSearch] = useState(\"\").",
        "Filter the array directly during render.",
        "toLowerCase() makes the search case-insensitive.",
        "Map out the filtered users as <p> or <li> elements with keys."
      ],
      "solution": "import { useState } from \"react\";\n\nconst users = [\n  { id: 1, name: \"Alice\" },\n  { id: 2, name: \"Alex\" },\n  { id: 3, name: \"Sara\" },\n];\n\nexport default function UserSearch() {\n  const [search, setSearch] = useState(\"\");\n\n  const visibleUsers = users.filter((user) =>\n    user.name.toLowerCase().includes(search.toLowerCase()),\n  );\n\n  return (\n    <div>\n      <input\n        value={search}\n        onChange={(event) => setSearch(event.target.value)}\n        placeholder=\"Search users\"\n      />\n      {visibleUsers.map((user) => (\n        <p key={user.id}>{user.name}</p>\n      ))}\n    </div>\n  );\n}",
      "followUps": [
        {
          "question": "Why calculate visibleUsers during render instead of in state?",
          "answer": "It derives directly from search and users, eliminating redundant state and sync issues."
        },
        {
          "question": "Why is key={user.id} necessary?",
          "answer": "React uses stable keys to identify elements and reconcile DOM changes efficiently."
        }
      ]
    },
    {
      "id": "react-modal-toggle",
      "category": "React",
      "prompt": "Build a component that can open and close a modal dialog.",
      "starterCode": "import { useState } from \"react\";\n\nexport default function ModalExample() {\n  // Write your solution here.\n  return null;\n}",
      "hints": [
        "Create boolean state: const [isOpen, setIsOpen] = useState(false).",
        "Render a button that sets isOpen to true.",
        "Use conditional rendering: {isOpen && (...)}.",
        "Include a button inside the modal that sets isOpen to false."
      ],
      "solution": "import { useState } from \"react\";\n\nexport default function ModalExample() {\n  const [isOpen, setIsOpen] = useState(false);\n\n  return (\n    <div>\n      <button onClick={() => setIsOpen(true)}>Open modal</button>\n\n      {isOpen && (\n        <div className=\"modal\">\n          <p>This is a modal</p>\n          <button onClick={() => setIsOpen(false)}>Close</button>\n        </div>\n      )}\n    </div>\n  );\n}",
      "followUps": [
        {
          "question": "What does {isOpen && (...)} do?",
          "answer": "If isOpen is true, React evaluates and renders the JSX block; if false, it renders nothing."
        },
        {
          "question": "How would you let the user close it with the Escape key?",
          "answer": "Add a keydown event listener inside a useEffect that calls setIsOpen(false) when event.key === 'Escape'."
        }
      ]
    },
    {
      "id": "react-list-key",
      "category": "React",
      "prompt": "Render a list of products and assign a stable key to each item.",
      "starterCode": "const products = [\n  { id: 101, name: \"Keyboard\" },\n  { id: 102, name: \"Mouse\" },\n  { id: 103, name: \"Screen\" },\n];\n\nexport default function ProductList() {\n  // Write your solution here.\n  return null;\n}",
      "hints": [
        "Use products.map((product) => ...).",
        "Attach key={product.id} to the top element inside map.",
        "Render product.name inside each element.",
        "Example: <li key={product.id}>{product.name}</li>"
      ],
      "solution": "const products = [\n  { id: 101, name: \"Keyboard\" },\n  { id: 102, name: \"Mouse\" },\n  { id: 103, name: \"Screen\" },\n];\n\nexport default function ProductList() {\n  return (\n    <ul>\n      {products.map((product) => (\n        <li key={product.id}>{product.name}</li>\n      ))}\n    </ul>\n  );\n}",
      "followUps": [
        {
          "question": "Why should keys come from data IDs?",
          "answer": "Data IDs remain stable even when list items are sorted, inserted, or removed."
        },
        {
          "question": "What happens if keys are missing?",
          "answer": "React prints a console warning and defaults to using array indices, which can cause UI glitches."
        }
      ]
    },
    {
      "id": "react-form-validation",
      "category": "React",
      "prompt": "Build a form that displays an error message if the entered email does not contain @.",
      "starterCode": "import { useState } from \"react\";\n\nexport default function EmailForm() {\n  // Write your solution here.\n  return null;\n}",
      "hints": [
        "Manage email text in state with useState(\"\").",
        "Calculate isInvalid = email.length > 0 && !email.includes(\"@\").",
        "Render a <p> error message when isInvalid is true.",
        "Attach value and onChange to the input element."
      ],
      "solution": "import { useState } from \"react\";\n\nexport default function EmailForm() {\n  const [email, setEmail] = useState(\"\");\n\n  const isInvalid = email.length > 0 && !email.includes(\"@\");\n\n  return (\n    <form onSubmit={(event) => event.preventDefault()}>\n      <input\n        value={email}\n        onChange={(event) => setEmail(event.target.value)}\n        placeholder=\"Email\"\n      />\n      {isInvalid && <p>Email must include @.</p>}\n    </form>\n  );\n}",
      "followUps": [
        {
          "question": "Why check email.length > 0?",
          "answer": "So the error message doesn't appear before the user has even started typing."
        },
        {
          "question": "Why call event.preventDefault()?",
          "answer": "It prevents standard HTML form submission from triggering a full page reload."
        }
      ]
    },
    {
      "id": "react-toggle-item",
      "category": "React",
      "prompt": "Build a React component that toggles whether a todo item is completed upon clicking.",
      "starterCode": "import { useState } from \"react\";\n\nconst initialTodos = [\n  { id: 1, text: \"Buy coffee\", done: false },\n  { id: 2, text: \"Code React\", done: true },\n];\n\nexport default function TodoToggleList() {\n  // Write your solution here.\n  return null;\n}",
      "hints": [
        "Initialize state with initialTodos.",
        "In the toggle function, use map over current todos.",
        "If item.id matches, return { ...item, done: !item.done }.",
        "Attach onClick={() => toggleTodo(todo.id)} to the item element."
      ],
      "solution": "import { useState } from \"react\";\n\nconst initialTodos = [\n  { id: 1, text: \"Buy coffee\", done: false },\n  { id: 2, text: \"Code React\", done: true },\n];\n\nexport default function TodoToggleList() {\n  const [todos, setTodos] = useState(initialTodos);\n\n  function toggleTodo(id) {\n    setTodos((currentTodos) =>\n      currentTodos.map((todo) =>\n        todo.id === id ? { ...todo, done: !todo.done } : todo,\n      ),\n    );\n  }\n\n  return (\n    <ul>\n      {todos.map((todo) => (\n        <li key={todo.id} onClick={() => toggleTodo(todo.id)}>\n          {todo.text} {todo.done ? \"✓\" : \"○\"}\n        </li>\n      ))}\n    </ul>\n  );\n}",
      "followUps": [
        {
          "question": "Why use functional updates in setTodos?",
          "answer": "It guarantees access to the freshest state value, even with asynchronous queued updates."
        },
        {
          "question": "What does { ...todo, done: !todo.done } do?",
          "answer": "It shallow-copies the todo object while flipping its done boolean property immutably."
        }
      ]
    },
    {
      "id": "react-useeffect-fetch",
      "category": "React",
      "prompt": "Build a React component that fetches users on mount and displays a loading indicator.",
      "starterCode": "import { useState } from \"react\";\n// Import useEffect here.\n\nexport default function UsersLoader() {\n  // Write your solution here.\n  return null;\n}",
      "hints": [
        "Create [users, setUsers] and [isLoading, setIsLoading] state variables.",
        "Use useEffect with an empty dependency array [] to run once on mount.",
        "Fetch data, call setUsers(data), then setIsLoading(false).",
        "Display <p>Loading...</p> when isLoading is true."
      ],
      "solution": "import { useEffect, useState } from \"react\";\n\nexport default function UsersLoader() {\n  const [users, setUsers] = useState([]);\n  const [isLoading, setIsLoading] = useState(true);\n\n  useEffect(() => {\n    fetch(\"/api/users\")\n      .then((response) => response.json())\n      .then((data) => {\n        setUsers(data);\n        setIsLoading(false);\n      });\n  }, []);\n\n  if (isLoading) {\n    return <p>Loading...</p>;\n  }\n\n  return (\n    <ul>\n      {users.map((user) => (\n        <li key={user.id}>{user.name}</li>\n      ))}\n    </ul>\n  );\n}",
      "followUps": [
        {
          "question": "Why is the dependency array empty []?",
          "answer": "An empty array instructs React to execute the effect only once after the initial mount."
        },
        {
          "question": "What should happen if the fetch fails?",
          "answer": "Add a .catch() handler, save error state, and render a helpful error message to the user."
        }
      ]
    },
    {
      "id": "vue-counter-ref",
      "category": "Vue",
      "prompt": "Build a Vue component with a counter that increments when the user clicks.",
      "starterCode": "// counter.js\n// Create count and increment here.\n\n// counter.html\n<button>\n  Count: {{ count }}\n</button>",
      "hints": [
        "In Vue 3, ref creates reactive state.",
        "Initialize count = ref(0).",
        "Create function increment() { count.value += 1; }.",
        "In the template, reference count directly without .value."
      ],
      "solution": "// counter.js\nimport { ref } from \"vue\";\n\nexport const count = ref(0);\n\nexport function increment() {\n  count.value += 1;\n}\n\n// counter.html\n<button @click=\"increment\">\n  Count: {{ count }}\n</button>",
      "followUps": [
        {
          "question": "Why write count.value in JavaScript but just {{ count }} in templates?",
          "answer": "Vue's template compiler automatically unwraps refs, so .value is only required in JS code."
        },
        {
          "question": "What is @click short for?",
          "answer": "It is shorthand syntax for v-on:click."
        }
      ]
    },
    {
      "id": "vue-search-computed",
      "category": "Vue",
      "prompt": "Build a Vue component that filters a user list using a search input.",
      "starterCode": "// user-search.js\n// Import computed and ref here.\n\nconst users = [\n  { id: 1, name: \"Alice\" },\n  { id: 2, name: \"Alex\" },\n  { id: 3, name: \"Sara\" },\n];\n\n// user-search.html\n<input placeholder=\"Search users\" />\n\n<!-- Render visibleUsers here. -->",
      "hints": [
        "Create search state with search = ref(\"\").",
        "Use computed(() => ...) for visibleUsers.",
        "Filter users using user.name.toLowerCase().includes(search.value.toLowerCase()).",
        "Use v-model=\"search\" on the input and v-for=\"user in visibleUsers\" on items."
      ],
      "solution": "// user-search.js\nimport { computed, ref } from \"vue\";\n\nconst search = ref(\"\");\nconst users = [\n  { id: 1, name: \"Alice\" },\n  { id: 2, name: \"Alex\" },\n  { id: 3, name: \"Sara\" },\n];\n\nconst visibleUsers = computed(() =>\n  users.filter((user) =>\n    user.name.toLowerCase().includes(search.value.toLowerCase()),\n  ),\n);\n\n// user-search.html\n<input v-model=\"search\" placeholder=\"Search users\" />\n\n<p v-for=\"user in visibleUsers\" :key=\"user.id\">\n  {{ user.name }}\n</p>",
      "followUps": [
        {
          "question": "Why use computed instead of a regular function?",
          "answer": "computed caches its return value and only recalculates when dependencies change."
        },
        {
          "question": "What does v-model accomplish?",
          "answer": "It provides two-way data binding, synchronizing input value and ref state automatically."
        }
      ]
    },
    {
      "id": "vue-form-validation",
      "category": "Vue",
      "prompt": "Build a Vue form that displays an error message if email lacks @.",
      "starterCode": "// email-form.js\n// Create email and isInvalid here.\n\n// email-form.html\n<form>\n  <input placeholder=\"Email\" />\n  <!-- Show error text here when email is invalid. -->\n</form>",
      "hints": [
        "email = ref(\"\").",
        "isInvalid = computed(() => email.value.length > 0 && !email.value.includes(\"@\")).",
        "v-model=\"email\" binds the input field.",
        "v-if=\"isInvalid\" displays the error message conditionally."
      ],
      "solution": "// email-form.js\nimport { computed, ref } from \"vue\";\n\nexport const email = ref(\"\");\n\nexport const isInvalid = computed(\n  () => email.value.length > 0 && !email.value.includes(\"@\"),\n);\n\n// email-form.html\n<form>\n  <input v-model=\"email\" placeholder=\"Email\" />\n  <p v-if=\"isInvalid\">Email must include @.</p>\n</form>",
      "followUps": [
        {
          "question": "Why v-model?",
          "answer": "v-model binds the input element directly to email, keeping state and UI synchronized."
        },
        {
          "question": "Why compute isInvalid?",
          "answer": "It depends directly on email, so computing it on demand avoids redundant state."
        }
      ]
    },
    {
      "id": "angular-counter",
      "category": "Angular",
      "prompt": "Build an Angular component with a counter that increments when the user clicks.",
      "starterCode": "// counter.component.ts\nexport class CounterComponent {\n  // Create count and increment here.\n}\n\n// counter.component.html\n<button>\n  Count: {{ count }}\n</button>",
      "hints": [
        "In Angular, the component class holds state as properties.",
        "Declare property count = 0.",
        "Create method increment() { this.count += 1; }.",
        "In template, use (click) for event binding and {{ }} for interpolation."
      ],
      "solution": "// counter.component.ts\nexport class CounterComponent {\n  count = 0;\n\n  increment() {\n    this.count += 1;\n  }\n}\n\n// counter.component.html\n<button (click)=\"increment()\">\n  Count: {{ count }}\n</button>",
      "followUps": [
        {
          "question": "Why is count stored in the component class?",
          "answer": "The class represents component state and the template accesses its properties directly."
        },
        {
          "question": "What does (click) denote?",
          "answer": "It is Angular's event-binding syntax, connecting user clicks to component methods."
        }
      ]
    },
    {
      "id": "angular-search-list",
      "category": "Angular",
      "prompt": "Build an Angular component that filters users via a search input.",
      "starterCode": "// user-search.component.ts\nexport class UserSearchComponent {\n  search = \"\";\n  users = [\n    { id: 1, name: \"Alice\" },\n    { id: 2, name: \"Alex\" },\n    { id: 3, name: \"Sara\" },\n  ];\n\n  // Create visibleUsers getter here.\n}\n\n// user-search.component.html\n<input placeholder=\"Search users\" />\n\n<!-- Render visibleUsers here. -->",
      "hints": [
        "search can be a class property.",
        "users is an array property on the component.",
        "A getter get visibleUsers() calculates the filtered subset.",
        "[(ngModel)] binds the input to the search property."
      ],
      "solution": "// user-search.component.ts\nexport class UserSearchComponent {\n  search = \"\";\n  users = [\n    { id: 1, name: \"Alice\" },\n    { id: 2, name: \"Alex\" },\n    { id: 3, name: \"Sara\" },\n  ];\n\n  get visibleUsers() {\n    return this.users.filter((user) =>\n      user.name.toLowerCase().includes(this.search.toLowerCase()),\n    );\n  }\n}\n\n// user-search.component.html\n<input [(ngModel)]=\"search\" placeholder=\"Search users\" />\n\n<p *ngFor=\"let user of visibleUsers\">\n  {{ user.name }}\n</p>",
      "followUps": [
        {
          "question": "Why use a getter for visibleUsers?",
          "answer": "It evaluates on demand whenever the template references it during change detection."
        },
        {
          "question": "What does [(ngModel)] require?",
          "answer": "The Angular module or standalone component must import FormsModule."
        }
      ]
    },
    {
      "id": "angular-form-validation",
      "category": "Angular",
      "prompt": "Build an Angular form that displays an error message if email lacks @.",
      "starterCode": "// email-form.component.ts\nexport class EmailFormComponent {\n  email = \"\";\n\n  // Create isInvalid getter here.\n}\n\n// email-form.component.html\n<form>\n  <input placeholder=\"Email\" />\n  <!-- Show error text here when email is invalid. -->\n</form>",
      "hints": [
        "email is a property on the component class.",
        "A getter get isInvalid() computes whether email is invalid.",
        "[(ngModel)] binds input value to email.",
        "*ngIf renders the error message when isInvalid is true."
      ],
      "solution": "// email-form.component.ts\nexport class EmailFormComponent {\n  email = \"\";\n\n  get isInvalid() {\n    return this.email.length > 0 && !this.email.includes(\"@\");\n  }\n}\n\n// email-form.component.html\n<form>\n  <input [(ngModel)]=\"email\" placeholder=\"Email\" />\n  <p *ngIf=\"isInvalid\">Email must include @.</p>\n</form>",
      "followUps": [
        {
          "question": "Why use a getter for isInvalid?",
          "answer": "It computes directly from current email value without storing duplicate state."
        },
        {
          "question": "Why use *ngIf?",
          "answer": "It ensures the error element is only added to the DOM when the condition evaluates to true."
        }
      ]
    }
  ]
};
