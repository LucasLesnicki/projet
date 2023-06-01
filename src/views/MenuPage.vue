<template>
  <div>
    <h1>Menu</h1>
    <div class="movie-container movie-grid">
      <MovieBox v-for="movie in movies" :key="movie.id" :movie="movie" class="col-5"></MovieBox>
    </div>
    <button @click="goToCart">Carrinho</button>
  </div>
</template>

<script>
import MovieBox from '@/components/MovieBox.vue';
import moviesData from '../../db.json';

export default {
  components: {
    MovieBox,
  },
  data() {
    return {
      movies: moviesData.movies,
    };
  },
  methods: {
    goToCart() {
      this.$router.push('/Cart');
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
