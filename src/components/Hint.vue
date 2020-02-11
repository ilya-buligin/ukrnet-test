<template>
  <div class="hint">
    <h1 class="hint__description">
      <slot />
    </h1>
  </div>
</template>

<style>
.hint {
  overflow: hidden;
}

.hint__description {
  text-align: center;
  margin: 100px 0;
  font-size: 18px;
  color: #777;
  font-weight: 400;
}
</style>
