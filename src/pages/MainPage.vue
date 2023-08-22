<script setup lang="ts">
import { MovieList, SearchBar } from "~/components";
import { useMovieStore } from "~/store/movie";
import { useRouter } from "vue-router";

const router = useRouter();
const movieStore = useMovieStore();

const searchMovies = (title: string) => {
  movieStore.$reset();
  movieStore.fetchMovies(title);

  router.push({ name: "MovieList", params: { title } });
};

const resetMovie = () => {
  movieStore.$reset();
  router.push({ name: "Home" });
};

const selecteMovie = (title: string, imdbID: string) => {
  searchMovies(title);
  movieStore.fetchMoviesDetail(imdbID);
  router.push({ name: "MovieDetail", params: { id: imdbID } });
};
</script>

<!-- 라우터가 필요한가...? -->
<template>
  <SearchBar
    @search="searchMovies"
    @reset="resetMovie" />
  <RouterView
    v-if="movieStore.selectedMovie"
    :selected-movie="movieStore.selectedMovie" />
  <!-- <MovieDetail v-if="movieStore.selectedMovie" /> -->
  <MovieList
    :selected-movie="movieStore.selectedMovie"
    :movies="movieStore.movies"
    @selecte="selecteMovie" />
</template>
