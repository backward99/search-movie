<script setup lang="ts">
import { MovieDetail } from "~/store/movie";

const movieInfoTopics = {
  Year: "개봉일",
  Runtime: "영화 길이",
  Genre: "장르",
  Director: "감독",
  Writer: "작가",
  Actors: "배우",
  Language: "언어",
  Country: "국가",
  Awards: "수상 경력",
  Type: "유형",
};

defineProps<{ selectedMovie: MovieDetail }>();
</script>

<template>
  <article class="c-detail">
    <img
      class="c-detail__poster"
      :src="
        selectedMovie?.Poster === 'N/A'
          ? 'https://picsum.photos/200/300'
          : selectedMovie?.Poster
      "
      alt="" />
    <section class="l-detail">
      <h2 class="c-detail__title">{{ selectedMovie?.Title }}</h2>
      <p class="c-detail__plot">{{ selectedMovie?.Plot }}</p>
      <section class="l-detail">
        <template
          v-for="(value, key) in movieInfoTopics"
          :key="key">
          <span class="c-detail__info">{{ value }}</span>
          <span class="c-detail__info">{{ selectedMovie[key] }}</span>
        </template>
      </section>
    </section>
  </article>
</template>

<style lang="scss">
.c-detail {
  padding: 0 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto 2rem auto;
  &__poster {
    margin-bottom: 0.5rem;
    aspect-ratio: 1/1.4;
    object-fit: cover;
    margin-right: 1rem;
    border-radius: 0.5rem;
  }
  &__title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  &__plot {
    box-sizing: border-box;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    margin-bottom: 2rem;
  }
  &__info {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    position: relative;
    overflow: hidden;
    width: 25%;
    padding: 0.4rem 1rem;
  }
}

.l-detail {
  display: flex;
  flex-wrap: wrap;
}
</style>
