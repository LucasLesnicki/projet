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
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    login() {
      axios.get('/users')
        .then(response => {
          const users = response.data;
          const user = users.find(u => u.email === this.email && u.password === this.password);
          if (user) {
            // Defina o usuário logado no armazenamento local ou em um estado global, se necessário
            this.$router.push('/Menu');
          } else {
            this.errorMessage = 'Dados incorretos. Por favor, tente novamente.';
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
/* Adicione aqui os estilos personalizados para a página de login */
</style>
