<template>
  <div class="home">
    <h1>Unilocadora</h1>
    <img alt="Vue logo" src="../assets/Fita.png">
    <div class="buttons">
      <router-link to="/login">Login</router-link> |
      <router-link to="/cadastro">Cadastro</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.buttons {
  margin-top: 20px;
}
.buttons router-link {
  margin-right: 10px;
}
</style>
