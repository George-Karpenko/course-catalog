import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import Server from "./server";
import App from "./App.vue";
import ru from "./locales/ru.json";

if (import.meta.env.NODE_ENV === "development") {
  Server;
}

const messages = {
  ru: ru,
};

const i18n = createI18n({
  locale: "ru",
  fallbackLocale: "ru",
  messages,
  pluralRules: {
    ru: function (choice: number, choicesLength: number) {
      // this === VueI18n instance, so the locale property also exists here
      if (choice === 0) {
        return 0;
      }

      const teen = choice > 10 && choice < 20;
      const endsWithOne = choice % 10 === 1;

      if (choicesLength < 4) {
        return !teen && endsWithOne ? 1 : 2;
      }
      if (!teen && endsWithOne) {
        return 1;
      }
      if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
        return 2;
      }

      return choicesLength < 4 ? 2 : 3;
    },
  },
});

import "./assets/main.css";

const app = createApp(App);
app
  .directive("click-outside", {
    beforeMount(el, binding, vnode) {
      el.clickOutsideEvent = function (event: Event) {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event, el);
        }
      };
      document.body.addEventListener("click", el.clickOutsideEvent);
    },
    unmounted(el) {
      document.body.removeEventListener("click", el.clickOutsideEvent);
    },
  })
  .use(i18n)
  .mount("#app");
