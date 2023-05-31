<template>
    <div>
      <h2>Cadastro</h2>
      <form @submit.prevent="register">
        <div>
          <label for="name">Nome:</label>
          <input type="text" id="name" v-model="name" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Senha:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'CadastroPage',
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    methods: {
      register() {
        // Enviar solicitação de cadastro para o JSON Server
        axios.post('/users', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(response => {
          // Tratar a resposta do servidor, redirecionar para página de sucesso de cadastro, por exemplo
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
  /* Adicione aqui os estilos personalizados para a página de cadastro */
  </style>
  