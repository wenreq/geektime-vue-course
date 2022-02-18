import {
  createStore
} from "./wvuex"

const store = createStore({
  state() {
    return {
      count: 6,
    }
  },
  mutations: {
    add(state) { 
      state.count++
    }
  }
})

export default store
