<script setup lang="ts">
defineProps<{ active?: boolean; shape?: string }>();
</script>

<template>
  <div
    class="the-icon"
    :class="[{ active }, shape]">
    <span class="material-symbols-outlined">
      <slot></slot>
    </span>
  </div>
</template>

<style scoped lang="scss">
.the-icon {
  width: 5rem;
  border: 1px solid var(--border-color);
  border-radius: 0.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  .material-symbols-outlined {
    opacity: 0;
  }
  &.active {
    background-color: royalblue;
    border: 1px solid royalblue;
    .material-symbols-outlined {
      opacity: 1;
      color: #fff;
    }
  }
  &.box {
    aspect-ratio: 3;
  }
  &.round {
    width: 2rem;
    aspect-ratio: 1;
    border: none;
    .material-symbols-outlined {
      opacity: 1;
      color: #000000;
    }
  }
}
</style>
