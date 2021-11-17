import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foodState: []
  },
  mutations: {
    setFood(state, data) {
      state.foodState = data
    }
  },
  actions: {

  },
  getters: {
    getFoodState: state => {
      return state.foodState
    }
  }
})
