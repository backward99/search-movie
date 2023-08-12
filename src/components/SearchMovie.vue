<script setup lang="ts">
import TheIcon from "~/components/TheIcon.vue";
import { ref } from "vue";
import { useMovieStore } from "~/store/movie";
import { useRouter } from "vue-router";

const movieStore = useMovieStore();
const router = useRouter();
const title = ref("");

const searchMovies = () => {
  movieStore.fetchMovies(`&s=${title.value}`);
};

const resetMovies = () => {
  title.value = "";
  movieStore.$reset();
  router.push("/");
};
</script>

<template>
  <article class="c-search-bar">
    <div class="l-search-bar">
      <TheIcon
        class="c-search-bar__icon c-search-bar__icon--shape-home"
        shape="round"
        @click="resetMovies">
        home
      </TheIcon>
      <input
        v-model="title"
        class="c-search-bar__input"
        placeholder="검색하고 싶은 영화의 정보를 입력하세요"
        type="search"
        @keydown.enter="searchMovies" />
      <TheIcon
        class="c-search-bar__icon c-search-bar__icon--shape-search"
        shape="round"
        @click="searchMovies">
        search
      </TheIcon>
    </div>
  </article>
</template>

<style scoped lang="scss">
.c-search-bar {
  display: flex;
  justify-content: center;
  margin: 3rem 0;
  &__input {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    border: none;
    outline: none;
    text-overflow: ellipsis;
  }
  &__icon {
    :hover {
      cursor: pointer;
    }
    &--shape-search {
      margin-left: auto;
    }
  }
}

.l-search-bar {
  width: 50%;
  display: flex;
  margin: 0 auto;
  border: 1px solid #bbbbbb;
  border-radius: 5rem;
  padding: 0.2rem 1rem;
}
</style>
