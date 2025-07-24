import '../style.css';
import { createApp } from 'vue/dist/vue.esm-bundler.js';

import i18n from './i18n/index';
import App from './App.vue';
const app = createApp(App);
app.use(i18n);
app.mount('#app');
