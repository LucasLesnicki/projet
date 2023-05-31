<template>
  <div>
    <h1>Menu</h1>
    <div class="movie-container">
      <movie-box v-for="movie in movies" :key="movie.id" :movie="movie"></movie-box>
    </div>
    <button @click="goToCart">Carrinho</button>
  </div>
</template>

<script>
import MovieBox from '@/components/MovieBox.vue'
import axios from '@/components/axios';

export default {
  components: {
    MovieBox
  },
  data() {
    return {
      movies: []
    }
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    fetchMovies() {
      axios.get('/movies')
        .then(response => {
          this.movies = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    goToCart() {
      this.$router.push('/Cart');
    }
  }
}
</script>

<style scoped>
.movie-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
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
