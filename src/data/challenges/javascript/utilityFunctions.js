import { createSnippetChallenge } from "../helpers/snippetChallengeBuilder.js";



export const utilityFunctionsChallenge = createSnippetChallenge({
  id: "utility-functions",
  title: "Utility functions",
  estimatedTime: "25 min",
  interviewPrompt:
    "Skriv en liten utility-funktion i JavaScript.",
  currentGoal: "Implementera funktionen tydligt och testa med ett exempel.",
  baseWhatToSay:
    "Okej, jag börjar med en ren funktion och ett litet exempel så jag kan se att resultatet blir rätt.",
  baseCode: `function doubleNumbers(numbers) {
  return numbers.map((number) => number * 2);
}

console.log(doubleNumbers([1, 2, 3]));

`,
  baseFollowUpQuestions: [
    {
      question: "Varför börjar du med ett litet exempel?",
      answer:
        "Det gör det lätt att se input, output och om funktionen gör exakt det den ska.",
    },
  ],
  features: [
    {
      id: "custom-map",
      label: "Egen mappning",
      colorClass: "feature-search",
      interviewer: "Skriv en egen version av Array.prototype.map.",
      goal: "Förstå callback och array-iteration.",
      getWhatToSay() {
        return "Okej, jag loopar över arrayen, anropar callbacken och bygger en ny array med resultatet.";
      },
      code: `function customMap(array, callback) {
  const result = [];

  for (let index = 0; index < array.length; index += 1) {
    result.push(callback(array[index], index, array));
  }

  return result;
}

console.log(customMap([1, 2, 3], (number) => number * 2));

`,
    },
    {
      id: "debounce",
      label: "Debounce",
      colorClass: "feature-category",
      interviewer: "Implementera en debounce-funktion.",
      goal: "Fördröja en funktion tills anropen lugnat sig.",
      getWhatToSay() {
        return "Okej, jag använder closure för att komma ihåg timeoutId mellan anrop.";
      },
      code: `function debounce(callback, delay) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const search = debounce((query) => console.log(query), 300);
search("react");

`,
    },
    {
      id: "flatten",
      label: "Flatten",
      colorClass: "feature-sort",
      interviewer: "Platta till en nästlad array.",
      goal: "Hantera recursion eller stack.",
      getWhatToSay() {
        return "Okej, jag går igenom varje item och plattar till om itemet också är en array.";
      },
      code: `function flattenArray(items) {
  const result = [];

  items.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
      return;
    }

    result.push(item);
  });

  return result;
}

console.log(flattenArray([1, [2, [3]], 4]));

`,
    },
  ],
});

export const vanillaFetchSortChallenge = createSnippetChallenge({
  id: "vanilla-fetch-sort",
  title: "JS Fetch & sort",
  estimatedTime: "25 min",
  interviewPrompt:
    "Hämta data med vanlig JavaScript och visa den i en lista.",
  currentGoal: "Hämta, hantera loading och rendera resultatet.",
  baseWhatToSay:
    "Okej, jag visar loading först och byter sedan till listan när fetch är klar.",
  baseCode: `const list = document.querySelector("#users");
const status = document.querySelector("#status");

let users = [];

async function loadUsers() {
  status.textContent = "Loading...";

  const response = await fetch("/api/users");
  users = await response.json();

  status.textContent = "";
  renderUsers();
}

function renderUsers() {
  list.innerHTML = users
    .map((user) => "<li>" + user.name + "</li>")
    .join("");
}

loadUsers();

`,
  baseFollowUpQuestions: [
    {
      question: "Varför visar du loading?",
      answer:
        "Fetch tar tid, så användaren behöver se att något händer medan datan hämtas.",
    },
  ],
  features: [
    {
      id: "error",
      label: "Error",
      colorClass: "feature-empty",
      interviewer: "Lägg till felhantering om API:t misslyckas.",
      goal: "Visa ett tydligt felmeddelande.",
      getWhatToSay() {
        return "Okej, jag fångar felet och visar ett state som går att förstå.";
      },
      code: `async function loadUsers() {
  try {
    status.textContent = "Loading...";

    const response = await fetch("/api/users");
    users = await response.json();

    renderUsers();
  } catch (error) {
    status.textContent = "Could not load users.";
  }
}

`,
    },
    {
      id: "search",
      label: "Sök",
      colorClass: "feature-search",
      interviewer: "Lägg till sök i listan.",
      goal: "Filtrera listan innan rendering.",
      getWhatToSay() {
        return "Okej, jag låter söktexten påverka vilken lista renderUsers visar.";
      },
      code: `const searchInput = document.querySelector("#search");

function getVisibleUsers() {
  return users.filter((user) =>
    user.name.toLowerCase().includes(searchInput.value.toLowerCase())
  );
}

searchInput.addEventListener("input", renderUsers);

`,
    },
    {
      id: "sort",
      label: "Sortering",
      colorClass: "feature-sort",
      interviewer: "Lägg till sortering på namn.",
      goal: "Sortera kopia av listan.",
      getWhatToSay() {
        return "Okej, jag sorterar en kopia så originaldatan finns kvar.";
      },
      code: `function getSortedUsers() {
  return [...getVisibleUsers()].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
}

`,
    },
    {
      id: "pagination",
      label: "Pagination",
      colorClass: "feature-category",
      interviewer: "Visa bara fem användare per sida.",
      goal: "Räkna ut slice för aktiv sida.",
      getWhatToSay() {
        return "Okej, page och pageSize räcker för att räkna ut vilka rader som ska synas.";
      },
      code: `let page = 1;
const pageSize = 5;

function getPageItems() {
  const start = (page - 1) * pageSize;
  return getSortedUsers().slice(start, start + pageSize);
}

`,
    },
  ],
});

