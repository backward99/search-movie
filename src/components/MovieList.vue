<script setup lang="ts">
import { useMovieStore } from "~/store/movie";
import { useRouter } from "vue-router";
import { ref } from "vue";

const hasTitle = ref(false);
const movieStore = useMovieStore();
const router = useRouter();
const selectMovie = (event: Event) => {
  const selectMovieEl = (event.target as HTMLElement).closest("li");

  if (selectMovieEl && selectMovieEl.dataset.movie !== undefined) {
    const selectedMovieInfo = JSON.parse(selectMovieEl.dataset.movie);
    const { Title, imdbID } = selectedMovieInfo;

    hasTitle.value = true;
    movieStore.fetchMovies(`&s=${Title}`);
    movieStore.fetchMoviesDetail(`&i=${imdbID}&plot=full`);
    router.push(`/${imdbID}`);
  }
};
</script>

<template>
  <article class="c-movie">
    <ul class="c-movie__list">
      <li
        v-for="movie in movieStore.movies"
        :key="movie.imdbID"
        :data-movie="JSON.stringify(movie)"
        class="c-movie__item"
        @click="selectMovie">
        <img
          class="c-movie__poster"
          :src="movie?.Poster"
          alt="" />
        <strong class="c-movie__title">{{ movie?.Title }}</strong>
        <span class="c-movie__year">{{ movie?.Year }}</span>
        <span class="c-movie__type">{{ movie?.Type }}</span>
      </li>
    </ul>
    <button
      v-if="hasTitle"
      class="c-movie__more">
      더 보기
    </button>
  </article>
</template>

<style lang="scss">
.c-movie {
  display: flex;
  flex-direction: column;
  align-items: center;
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
