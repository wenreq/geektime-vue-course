/*
  手写迷你 Vuex
  1. 我们需要创建一个变量 store 用来存储数据。
  2. 把这个 store 的数据包转成响应式的数据， 并且提供给 Vue 组件使用。

  在 Vue 中有 provide / inject 这两个函数专门用来做数据共享， provide 注册了数据后， 所有的子组件都可以通过 inject 获取数据。
*/

// 我们使用一个 Store 类来管理数据，类的内部使用 _state 存储数据，使用 mutations 来存储数据修改的函数，注意这里的 state 已经使用 reactive 包裹成响应式数据了。
import { inject, reactive } from "vue"

const STORE_KEY = '__store__'
function useStore() { 
  return inject(STORE_KEY)
}
function createStore(options) { 
  return new Store(options)
}
class Store { 
  constructor(options) {
    this._state = reactive({
      data: options.state()
    })
    this._mutations = options.mutations
  }
  get state() { 
    return this._state.data
  }
  commit = (type, payload) => { 
    const entry = this._mutations[type]
    entry && entry(this.state, payload)
  }
  // main.js 入口处 app.use(myStore) 的时候，会执行这个函数
  install(app) { 
    app.provide(STORE_KEY, this)
  }
}

export {
  createStore,
  useStore
}