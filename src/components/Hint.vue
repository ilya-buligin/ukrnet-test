<template>
  <div class="hint">
    <h1 class="hint__description">
      <slot />
    </h1>
  </div>
</template>

<script>
export default {
  name: "Hint"
};
</script>

<style>
.hint {
  overflow: hidden;
}

.hint__description {
  text-align: center;
  margin: 100px 0;
  font-size: 18px;
  color: var(--secondary-text-color);
  font-weight: 400;
}
</style>
