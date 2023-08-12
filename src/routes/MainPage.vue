<script setup lang="ts">
import SearchMovie from "~/components/SearchMovie.vue";
import MovieList from "~/components/MovieList.vue";

// (async () => {
//   const res = await fetch("/api/movie-search", {
//     method: "POST",
//   });

//   const json = await res.json();

//   console.log(json);
// })();
</script>

<template>
  <SearchMovie />
  <MovieList />
</template>
