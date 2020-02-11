<template>
  <form class="search" @submit.prevent="$emit('submit', $event)">
    <h1 class="search__title">{{ title }}</h1>
    <input
      class="search__input"
      v-bind="{ placeholder }"
      v-model="valueModel"
    />
    <p class="search__error">{{ error }}</p>
  </form>
</template>

<script>
export default {
  name: "SearchForm",
  props: {
    value: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    error: {
      type: String,
      default: ""
    }
  },
  computed: {
    valueModel: {
      get() {
        return this.value;
      },
      set(v) {
        this.$emit("input", v);
      }
    }
  }
};
</script>

<style>
.search {
  overflow: hidden;
  max-width: 800px;
  padding: 0 8px;
  margin: 0 auto;
  box-sizing: border-box;
}

.search__title {
  font-size: 18px;
  margin: 16px 0 8px;
  color: #fff;
}

.search__input {
  height: 40px;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  border: #ccc 1px solid;
  border-radius: 2px;
  background: #fff;
  font-size: 14px;
}

.search__error {
  height: 16px;
  margin: 8px 0 8px;
  font-size: 12px;
  color: #f44336;
}
</style>
