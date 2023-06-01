// store.js

import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    updateUser({ commit }, user) {
      commit('SET_USER', user);
    }
  },
  getters: {
    getUser(state) {
      return state.user;
    }
  }
});

export default store;
