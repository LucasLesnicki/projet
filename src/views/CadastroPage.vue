<template>
  <div>
    <h2>Cadastro</h2>
    <form @submit.prevent="register">
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
        email: this.email,
        password: this.password,
        cart: [],
        shelf: []
      };

      axios.post('/users', newUser)
        .then(response => {
          const user = response.data;
          this.$store.dispatch('updateUser', { user }); // Atualizar a sessão do usuário no Vuex

          // Redirecionar para a página do login após o cadastro
          this.$router.push('/Login');
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
