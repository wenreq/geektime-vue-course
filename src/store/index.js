import { createStore } from "vuex"

const store = createStore({
  state() { 
    return {
      count: 7,
    }
  },
  mutations: {
    add(state) { 
      state.count++
    }
  },
  // getters 配置和 Vue 中的 computed 是一样的写法和功能。
  getters: {
    double(state) { 
      return state.count * 2
    }
  },
  // actions 配置，这个配置中所有的函数，可以通过解构获得 commit 函数。内部的异步任务完成后，就随时可以调用 commit 来执行 mutations 去更新数据。
  // action 并不是直接修改数据，而是通过 mutations 去修改
  actions: {
    asyncAdd({ commit }) { 
      setTimeout(() => { 
        commit('add')
      }, 1000)
    }
  }
})

export default store