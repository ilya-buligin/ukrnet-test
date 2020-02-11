<template>
  <div>
    <header class="header">
      <slot name="header" />
    </header>
    <main class="main">
      <slot name="main" />
    </main>
  </div>
</template>

<script>
export default {
  name: "MainLayout"
};
</script>

<style>
.header {
  background: #3f51b5;
}

.main {
  max-width: 800px;
  padding: 32px 8px;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
