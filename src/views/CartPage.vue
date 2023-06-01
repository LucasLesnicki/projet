<template>
  <div>
    <h1>Carrinho</h1>
    <ul>
      <li v-for="movie in cart" :key="movie.id">
        <span>{{ movie.name }}</span>
        <button @click="removeFromCart(movie)">Remover</button>
      </li>
    </ul>
    <button @click="closeCart">Fechar Carrinho</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: []
    };
  },
  methods: {
    removeFromCart(movie) {
      const index = this.cart.indexOf(movie);
      if (index !== -1) {
        this.cart.splice(index, 1); // Remove o filme do carrinho pelo índice
      }
    },
    closeCart() {
      // Implemente a lógica para mover os filmes do carrinho para a estante e esvaziar o carrinho
      this.cart = []; // Esvazia o carrinho
    }
  }
};
</script>
