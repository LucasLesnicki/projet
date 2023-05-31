import axios from 'axios';

// Configuração global do Axios
axios.defaults.baseURL = 'http://localhost:8081'; // URL base do JSON Server

export default axios;