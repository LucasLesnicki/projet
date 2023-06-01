import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// eslint-disable-next-line no-unused-vars
const app = createApp(App)
  .use(router)
  .use(store)
  .mount('#app');
