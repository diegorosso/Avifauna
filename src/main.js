import "./assets/style.css";
import "vue-final-modal/style.css";
import { createVfm } from "vue-final-modal";
import { setupCalendar } from "v-calendar";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

createApp(App).directive("preload", {
  inserted: function (el, binding) {
    var img = new Image();
    img.src = binding.value;
    img.onload = function () {
      el.style.backgroundImage = "url(" + binding.value + ")";
    };
  },
});

const vfm = createVfm();
const app = createApp(App);
app.use(setupCalendar, {});
app.use(vfm);
app.use(router);

app.mount("#app");
