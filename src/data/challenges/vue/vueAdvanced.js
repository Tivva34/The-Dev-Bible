import { createSnippetChallenge } from "../helpers/snippetChallengeBuilder.js";



export const vueComposableChallenge = createSnippetChallenge({
  id: "vue-composable",
  title: "Vue composable",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg en composable som hanterar en counter.",
  currentGoal: "Flytta återanvändbar state-logik till en composable.",
  baseWhatToSay:
    "Okej, jag lägger counter-logiken i en useCounter-funktion så komponenten bara använder API:t.",
  autoLineComments: false,
  baseCode: `// useCounter.js
import { ref } from "vue";

export function useCounter() {
  const count = ref(0);

  function increase() {
    count.value += 1;
  }

  return { count, increase };
}

// Counter.vue
import { useCounter } from "./useCounter";

export default {
  setup() {
    return useCounter();
  },
};

<template>
  <section>
    <p>Count: {{ count }}</p>
    <button @click="increase">Increase</button>
  </section>
</template>

`,
  features: [
    {
      id: "decrease",
      label: "Minska",
      colorClass: "feature-category",
      interviewer: "Lägg till decrease i composablen.",
      goal: "Exponera fler funktioner från composablen.",
      getWhatToSay() {
        return "Okej, decrease hör hemma i composablen eftersom den ändrar samma count-state.";
      },
      code: `function decrease() {
  count.value -= 1;
}

return { count, increase, decrease };

<button @click="decrease">Decrease</button>

`,
    },
    {
      id: "reset",
      label: "Reset",
      colorClass: "feature-empty",
      interviewer: "Lägg till reset.",
      goal: "Återställa count från composablen.",
      getWhatToSay() {
        return "Okej, reset blir en liten funktion som sätter ref-värdet till noll.";
      },
      code: `function reset() {
  count.value = 0;
}

return { count, increase, reset };

<button @click="reset">Reset</button>

`,
    },
  ],
});

export const vueWatchSearchChallenge = createSnippetChallenge({
  id: "vue-watch-search",
  title: "Vue watch search",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg en Vue-sökning där watch reagerar på input.",
  currentGoal: "Uppdatera resultat när search ändras.",
  baseWhatToSay:
    "Okej, jag låter watch reagera på search och hålla results separat.",
  autoLineComments: false,
  baseCode: `// WatchSearch.vue
export default {
  data() {
    return {
      search: "",
      results: [],
      users: ["Alice", "Sara", "Alex"],
    };
  },
  watch: {
    search(value) {
      this.results = this.users.filter((user) =>
        user.toLowerCase().includes(value.toLowerCase())
      );
    },
  },
};

<template>
  <input v-model="search" placeholder="Search users" />
  <p v-for="user in results" :key="user">{{ user }}</p>
</template>

`,
  features: [
    {
      id: "immediate",
      label: "Immediate",
      colorClass: "feature-search",
      interviewer: "Kör sökningen direkt när komponenten startar.",
      goal: "Initiera results från start.",
      getWhatToSay() {
        return "Okej, immediate gör att watchern körs direkt med startvärdet.";
      },
      code: `watch: {
  search: {
    immediate: true,
    handler(value) {
      this.results = this.users.filter((user) =>
        user.toLowerCase().includes(value.toLowerCase())
      );
    },
  },
},

`,
    },
    {
      id: "debounce",
      label: "Debounce",
      colorClass: "feature-category",
      interviewer: "Debounca sökningen.",
      goal: "Vänta kort innan results uppdateras.",
      getWhatToSay() {
        return "Okej, jag sparar timeoutId och rensar tidigare timeout innan jag filtrerar.";
      },
      code: `clearTimeout(this.timeoutId);
this.timeoutId = setTimeout(() => {
  this.results = this.users.filter((user) =>
    user.toLowerCase().includes(value.toLowerCase())
  );
}, 300);

`,
    },
    {
      id: "loading",
      label: "Loading",
      colorClass: "feature-empty",
      interviewer: "Visa loading medan debounce väntar.",
      goal: "Ge feedback under väntan.",
      getWhatToSay() {
        return "Okej, loading sätts till true innan timeout och false när resultaten uppdateras.";
      },
      code: `this.isLoading = true;

// I templaten:
<p v-if="isLoading">Searching...</p>

`,
    },
  ],
});

export const vueCustomDirectiveChallenge = createSnippetChallenge({
  id: "vue-custom-directive",
  title: "Vue custom directive",
  estimatedTime: "25 min",
  interviewPrompt: "Bygg ett inputfält med en egen focus-directive.",
  currentGoal: "Fokusera input när komponenten mountas.",
  baseWhatToSay:
    "Okej, en custom directive passar när DOM-beteendet ska återanvändas utan att ligga i komponenten.",
  autoLineComments: false,
  baseCode: `// AutoFocusInput.vue
export default {
  directives: {
    focus: {
      mounted(element) {
        element.focus();
      },
    },
  },
};

<template>
  <input v-focus placeholder="Name" />
</template>

`,
  features: [
    {
      id: "select-text",
      label: "Select text",
      colorClass: "feature-search",
      interviewer: "Markera även texten i inputfältet.",
      goal: "Utöka direktivets DOM-beteende.",
      getWhatToSay() {
        return "Okej, efter focus kan jag anropa select om elementet stödjer det.";
      },
      code: `mounted(element) {
  element.focus();
  element.select();
}

`,
    },
    {
      id: "modifier",
      label: "Modifier",
      colorClass: "feature-category",
      interviewer: "Gör select valbart med en modifier.",
      goal: "Styra direktivet från templaten.",
      getWhatToSay() {
        return "Okej, modifiers gör att samma directive kan användas på två sätt.";
      },
      code: `mounted(element, binding) {
  element.focus();

  if (binding.modifiers.select) {
    element.select();
  }
}

<input v-focus.select placeholder="Name" />

`,
    },
    {
      id: "delay",
      label: "Delay",
      colorClass: "feature-sort",
      interviewer: "Lägg till delay innan focus.",
      goal: "Fokusera efter animation eller render.",
      getWhatToSay() {
        return "Okej, binding.value kan styra hur länge direktivet väntar.";
      },
      code: `mounted(element, binding) {
  setTimeout(() => {
    element.focus();
  }, binding.value || 0);
}

<input v-focus="300" placeholder="Name" />

`,
    },
  ],
});

export const vueProvideInjectChallenge = createSnippetChallenge({
  id: "vue-provide-inject",
  title: "Vue provide/inject",
  estimatedTime: "25 min",
  interviewPrompt: "Dela theme-state med provide och inject.",
  currentGoal: "Låta en child-komponent läsa theme utan props.",
  baseWhatToSay:
    "Okej, provide/inject passar när flera nivåer behöver samma värde utan prop drilling.",
  autoLineComments: false,
  baseCode: `// Parent.vue
export default {
  provide() {
    return {
      theme: "light",
    };
  },
};

// Child.vue
export default {
  inject: ["theme"],
};

<template>
  <p>Theme: {{ theme }}</p>
</template>

`,
  features: [
    {
      id: "reactive",
      label: "Reaktivt",
      colorClass: "feature-search",
      interviewer: "Gör theme reaktivt.",
      goal: "Uppdatera child när theme ändras.",
      getWhatToSay() {
        return "Okej, jag behöver provide:a ett reaktivt värde istället för en statisk sträng.";
      },
      code: `import { ref } from "vue";

setup() {
  const theme = ref("light");
  provide("theme", theme);
}

`,
    },
    {
      id: "toggle",
      label: "Toggle",
      colorClass: "feature-category",
      interviewer: "Låt child toggla theme.",
      goal: "Dela både värde och action.",
      getWhatToSay() {
        return "Okej, då skickar jag med en funktion tillsammans med värdet.";
      },
      code: `provide("themeContext", {
  theme,
  toggleTheme: () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  },
});

`,
    },
    {
      id: "fallback",
      label: "Fallback",
      colorClass: "feature-empty",
      interviewer: "Lägg till fallback om provider saknas.",
      goal: "Undvika att child kraschar.",
      getWhatToSay() {
        return "Okej, inject kan få ett defaultvärde om komponenten används utan provider.";
      },
      code: `const theme = inject("theme", "light");

`,
    },
  ],
});

