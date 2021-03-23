// https://next.vuex.vuejs.org/
import { createStore } from "vuex";

export default createStore({
  state: {
    list: [
      {
        id: 1,
        text: "First",
        done: true,
      },
      {
        id: 2,
        text: "Two",
        done: false,
      },
    ],
  },
  getters: {
    doneList(state) {
      return state.list.filter((item) => item.done);
    },
  },
  mutations: {
    addItem(state, payload) {
      state.list.push(payload);
    },
  },
  actions: {
    syncAddItem(context) {
      setTimeout(() => {
        context.commit("addItem", {
          id: Math.random(),
          text: Math.random(),
          done: true,
        });
      }, 1000);
    },
  },
  modules: {},
});
