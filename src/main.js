import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';

// Configurar o axios
axios.defaults.baseURL = 'http://localhost:8080';

createApp(App)
  .use(router)
  .mount('#app');
