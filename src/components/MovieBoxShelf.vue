<template>
    <div class="movie-box">
      <img :src="getImageUrl(movie.image)" :alt="movie.name" />
      <p>{{ movie.name }}</p>
      <button @click="removeFromShelf">Remover</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      movie: {
        type: Object,
        required: true,
      },
    },
    methods: {
      getImageUrl(image) {
        if (image.startsWith('@/assets/')) {
          return require(`@/${image.substring(2)}`);
        }
        return image;
      },
      removeFromShelf() {
        this.$emit('remove-from-shelf', this.movie);
      },
    },
  };
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
  