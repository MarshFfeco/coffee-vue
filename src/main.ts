import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { CoCoffeescript, BiGithub, BiLinkedin } from "oh-vue-icons/icons";

addIcons(CoCoffeescript, BiGithub, BiLinkedin);

const app = createApp(App);


app.component("v-icon", OhVueIcon).mount('#app');
