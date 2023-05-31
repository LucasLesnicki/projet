<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Senha:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        // Enviar solicitação de login para o JSON Server
        axios.post('/login', {
          email: this.email,
          password: this.password
        })
        .then(response => {
          // Tratar a resposta do servidor, redirecionar para página de sucesso de login, por exemplo
          console.log(response.data);
        })
        .catch(error => {
          // Tratar o erro do servidor, exibir mensagem de erro, por exemplo
          console.error(error);
        });
      }
    }
  }
  </script>
  
  <style scoped>
  /* Adicione aqui os estilos personalizados para a página de login */
  </style>
  