import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    COUNT: state => {
      return state.count;
    },
  },
  modules: {
  }
})
