import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import BaseButton from "./components/UI/BaseButton.vue";
import BaseInput from "./components/UI/BaseInput.vue";
import BaseCard from "./components/UI/BaseCard.vue";

const app = createApp(App);
app.component("base-button", BaseButton);
app.component("base-input", BaseInput);
app.component("base-card", BaseCard);
app.mount("#app");
