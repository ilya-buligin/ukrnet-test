<template>
  <MainLayout id="app">
    <template slot="header">
      <SearchForm
        title="Проверка авто по номерному знаку"
        placeholder="Номерной знак авто"
        v-bind="{ error }"
        v-model="carNumber"
        @submit="onSubmit"
      />
    </template>
    <template slot="main">
      <Hint v-if="!carNumber.length">
        Введите номерной знак автомобиля (например AA9999AI) и нажмите Enter
      </Hint>
      <Hint v-if="isLoading">Загрузка...</Hint>
      <CarReport v-if="!isLoading && !!data" v-bind="{ data }" />
    </template>
  </MainLayout>
</template>

<script>
import { mapActions } from "vuex";

import { validateCarNumber, getErrorMessage } from "./validation";

import MainLayout from "./layouts/Main";
import Hint from "./components/Hint";
import SearchForm from "./components/SearchForm";
import CarReport from "./components/CarReport";

export default {
  name: "App",
  components: {
    MainLayout,
    Hint,
    SearchForm,
    CarReport
  },
  data() {
    return {
      carNumber: "",
      error: "",
      data: null,
      isLoading: false
    };
  },
  computed: {
    normalizedCarNumber() {
      return this.carNumber.toUpperCase();
    }
  },
  watch: {
    carNumber() {
      this.error = "";
    }
  },
  methods: {
    ...mapActions(["getCarInfo"]),

    async onSubmit() {
      try {
        await validateCarNumber(this.normalizedCarNumber);
        this.isLoading = true;
        this.data = await this.getCarInfo(this.normalizedCarNumber);
      } catch (error) {
        this.error = getErrorMessage(error);
      } finally {
        this.isLoading = false;
      }
    }
  }
};
</script>
