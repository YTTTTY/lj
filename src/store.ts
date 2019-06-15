import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navigation: 1,
  },
  mutations: {
    navigat(state, data) {
      state.navigation = data;
    },
  },
  actions: {

  },
});
