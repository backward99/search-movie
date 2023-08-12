<script setup lang="ts">
import { ref, computed } from "vue";

const count = ref(0);

function increase() {
  count.value += 1;
}

function assign() {
  double.value = 8;
}

const double = computed({
  get() {
    return count.value * 2;
  },
  set(newValue) {
    count.value = newValue / 2;
  },
});
</script>

<template>
  <button @click="increase">클릭 해봐</button>
  <button @click="assign">클릭 해봐</button>

  <h1>{{ count }}</h1>
  <h1>{{ double }}</h1>
</template>
