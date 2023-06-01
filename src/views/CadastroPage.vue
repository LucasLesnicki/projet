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
import axios from '@/components/axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    register() {
      const newUser = {
        name: this.name,
        email: this.email,
        password: this.password,
        cart: [],
        shelf: []
      };

      axios.post('/users', newUser)
        .then(response => {
          const user = response.data;
          this.$store.dispatch('updateUser', { user }); // Atualizar a sessão do usuário no Vuex

          // Redirecionar para a página do menu após o cadastro
          this.$router.push('/Menu');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>

<style scoped>
/* Adicione aqui os estilos personalizados para a página de cadastro */
</style>
