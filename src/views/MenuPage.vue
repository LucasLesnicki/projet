<template>
  <div>
    <h1>Menu</h1>
    <div class="movie-container movie-grid">
      <MovieBox v-for="movie in movies" :key="movie.id" :movie="movie" class="col-5" @add-to-cart="addToCart"></MovieBox>
    </div>
    <button @click="goToCart">Carrinho</button>
  </div>
</template>

<script>
import MovieBox from '@/components/MovieBox.vue';
import axios from 'axios';

export default {
  components: {
    MovieBox,
  },
  data() {
    return {
      movies: [],
      user: null, // Adiciona uma propriedade para armazenar os dados do usuário logado
    };
  },
  created() {
    this.fetchMovies(); // Chama a função para buscar a lista de filmes
    this.fetchUser(); // Chama a função para buscar os dados do usuário logado
  },
  methods: {
    fetchMovies() {
      axios.get('http://localhost:3000/movies')
        .then(response => {
          this.movies = response.data;
        })
        .catch(error => {
          console.error('Erro ao recuperar a lista de filmes:', error);
        });
    },
    fetchUser() {
      const userId = 1; // ID do usuário (substitua pelo ID correto)
      axios.get(`http://localhost:3000/users/${userId}`)
        .then(response => {
          this.user = response.data;
          if (!this.user.cart) {
            this.user.cart = []; // Cria um carrinho vazio caso não exista
          }
          if (!this.user.shelf) {
            this.user.shelf = []; // Cria uma estante vazia caso não exista
          }
        })
        .catch(error => {
          console.error('Erro ao recuperar os dados do usuário:', error);
        });
    },
    goToCart() {
      this.$router.push('/Cart');
    },
    addToCart(movie) {
      this.user.cart.push(movie); // Adiciona o filme ao carrinho do usuário
      this.updateUser(); // Chama a função para atualizar os dados do usuário no db.json
    },
    updateUser() {
      const userId = this.user.id; // ID do usuário logado
      axios.put(`http://localhost:3000/users/${userId}`, this.user)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.movie-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.col-5 {
  flex-basis: 20%;
}

.movie-box {
  width: 250px;
  height: 400px;
  padding: 20px;
  box-sizing: border-box;
  background-color: red;
  border: 2px solid #ff0000;
  border-radius: 5px;
  color: white;
  font-family: "Comic Sans MS", cursive;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.movie-box img {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  margin-bottom: 10px;
}

.movie-box p {
  margin: 0;
}
</style>
