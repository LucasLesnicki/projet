<template>
  <div>
    <h2>Cadastro</h2>
    <form @submit.prevent="register">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" autocomplete="username" required>
      </div>
      <div>
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" autocomplete="current-password" required>
      </div>
      <button type="submit">Cadastrar</button>
    </form>

    <div v-if="showSuccessMessage">
      Cadastro realizado com sucesso! Você pode fazer login agora.
      <router-link to="/Login">Ir para a página de login</router-link>
    </div>
  </div>
</template>

<script>
import axios from '@/components/axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      showSuccessMessage: false
    };
  },
  methods: {
    register() {
      const newUser = {
        email: this.email,
        password: this.password,
        cart: [],
        shelf: []
      };

      axios.post('/users', newUser)
        .then(() => {
          // Exibir a mensagem de sucesso
          this.showSuccessMessage = true;
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>

<style scoped>
</style>
