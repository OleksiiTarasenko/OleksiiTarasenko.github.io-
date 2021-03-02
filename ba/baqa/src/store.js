import Vue from "vue";
import Vuex from "vuex";

import db from "./main";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      data: null,
    },
    topics: null,
  },
  getters: {
    user(state) {
      return state.user;
    },
    GET_TOPICS: (state) => {
      return state.topics;
    },
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
    SET_TOPICS: (state) => {
      let items = [];

      db.collection("topics")
        .orderBy("time")
        .onSnapshot((snapshot) => {
          items = [];
          snapshot.forEach((doc) => {
            items.push({
              id: doc.id,
              time: doc.data().time,
              name: doc.data().name,
              author: doc.data().author,
            });
          });

          state.topics = items;
        });
    },
  },
  actions: {
    fetchUser({ commit }, user) {
      commit("SET_LOGGED_IN", user !== null);
      if (user) {
        commit("SET_USER", {
          displayName: user.displayName,
          email: user.email,
        });
      } else {
        commit("SET_USER", null);
      }
    },
    setTopics: (context) => {
      context.commit("SET_TOPICS");
    },
  },
});
