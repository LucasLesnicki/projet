<template>
  <div class="movie-box">
    <img :src="movie.image" alt="Movie Poster" />
    <p>{{ movie.title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.movie-box {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  background-color: red;
  border: 2px solid #ff0000;
  border-radius: 5px;
  color: white;
  font-family: "Comic Sans MS", cursive;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.movie-box img {
  width: 80%;
  max-height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
}

.movie-box p {
  margin: 0;
}
</style>
