import Vue from "vue";
import Vuex from "vuex";

import { getCarInfo } from "./api";

Vue.use(Vuex);

const state = {};

const mutations = {};

const actions = {
  getCarInfo(_, carNumber) {
    return getCarInfo(carNumber)
      .then(({ data }) => data.result)
      .catch(({ response: res }) => {
        throw res.data.error;
      });
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
