<script setup lang="ts">
import { Movie, MovieDetail } from "~/store/movie";
import { ref } from "vue";
import { Movies } from "~/store/movie";

const hasTitle = ref(false);
const emit = defineEmits<{
  (e: "selecte", title: string, imdbID: string): void;
}>();

defineProps<{
  movies: Movies;
  selectedMovie: MovieDetail | null;
}>();

const selectMovie = ({ Title, imdbID }: Movie) => {
  hasTitle.value = true;
  emit("selecte", Title, imdbID);
};
</script>

<template>
  <article class="c-movie">
    <span
      v-if="selectedMovie"
      class="c-movie__hr" />
    <h1
      v-if="selectedMovie"
      class="c-movie__similar-movies">
      비슷한 영화
    </h1>
    <ul class="c-movie__list">
      <li
        v-for="movie in movies"
        :key="movie.imdbID"
        class="c-movie__item"
        @click="selectMovie(movie)">
        <img
          class="c-movie__poster"
          :src="
            movie?.Poster === 'N/A'
              ? 'https://picsum.photos/200/300'
              : movie?.Poster
          "
          :alt="movie?.Title" />
        <strong class="c-movie__title">{{ movie?.Title }}</strong>
        <span class="c-movie__year">{{ movie?.Year }}</span>
        <span class="c-movie__type">{{ movie?.Type }}</span>
      </li>
    </ul>
  </article>
</template>

<style lang="scss">
.c-movie {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  &__hr {
    width: 90%;
    margin-bottom: 2rem;
    border-top: 1px solid rgb(188, 188, 188, 0.5);
  }
  &__similar-movies {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: black;
    font-weight: bold;
  }
  &__list {
    width: 100%;
    max-width: 1300px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    :hover {
      cursor: pointer;
      text-decoration: underline;
      transform: translateY(-0.5rem);
      transition: all 0.2s;
    }
  }
  &__item {
    width: calc(20% - 1rem);
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin: 0.5rem;
  }
  &__poster {
    border-radius: 1rem;
    margin-bottom: 0.5rem;
    aspect-ratio: 1/1.4;
    object-fit: cover;
  }
  &__title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  &__year {
    margin-bottom: 0.5rem;
  }
  &__more {
    width: 5rem;
    border: none;
  }
}
</style>
