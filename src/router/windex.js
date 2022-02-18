/*
  前后端开发模式的演变

  在 jQuery 时代， 对于大部分 Web 项目而言， 前端都是不能控制路由的， 而是需要依赖后端项目的路由系统。 这种开发方式也有很多缺点， 比如前后端项目无法分离、 页面跳转由于需要重新刷新整个页面、 等待时间较长等等， 所以也会让交互体验下降。

  前端的开发模式发生了变化， 项目的结构也发生了变化。 用户访问路由后， 无论是什么 URL 地址， 都直接渲染一个前端的入口文件 index.html， 然后就会在 index.html 文件中加载 JS 和 CSS。 之后， JavaScript 获取当前的页面地址， 以及当前路由匹配的组件， 再去动态渲染当前页面即可。 用户在页面上进行点击操作时， 也不需要刷新页面， 而是直接通过 JS 重新计算出匹配的路由渲染即可。 这种所有路由都渲染一个前端入口文件的方式， 是单页面应用程序（ SPA， single page application） 应用的雏形。
*/

/*
  前端路由的实现原理

  hash 模式。 通过 URL 中# 后面的内容做区分， 我们称之为 hash - router。
  history 模式。 在这种方式下， 路由看起来和正常的 URL 完全一致。

  hash 模式： 在进行页面跳转的操作时， hash 值的变化并不会导致浏览器页面的刷新， 只是会触发 hashchange 事件。
  history 模式： 浏览器多了两个 API： pushState 和 replaceState。 监听popstate事件， pushState修改路由时会触发。
*/

/**
 * 手写mini vue-router
 * 1. 用 Router 类去管理路由
 * 2. 用 createWebHashHistory 来返回 hash 模式相关的监听代码，以及返回当前 URL 和监听 hashchange 事件方法。
 * 3. 通过 Router 类的 install 方法注册了 Router 的实例。
 * 4. 并暴露 createRouter 方法去创建 Router 实例。
 * 5. 最后暴露 useRouter 方法去获取路由实例。
*/

import { ref, inject } from 'vue'

import RouterLink from './RouterLink.vue'
import RouterView from './RouterView.vue'

// provide 和 inject 的标识
const ROUTER_KEY = '__router__'

// 创建一个路由实例
function createRouter(options) { 
  return new Router(options)
}

// 在组件中引入路由 
function useRouter() { 
  return inject(ROUTER_KEY)
}

// 当前 URL 和监听 hashchange 事件方法。
function createWebHashHistory() { 
  function bindEvents(fn) { 
    window.addEventListener('hashchange', fn)
  }
  return {
    bindEvents,
    url: window.location.hash.slice(1) || '/'
  }
}

// Router 类
class Router { 
  constructor(options) { 
    this.history = options.history
    this.routes = options.routes
    this.current = ref(this.history.url)

    this.history.bindEvents(() => { 
      this.current.value = window.location.hash.slice(1)
    })
  }
  install(app) { 
    app.provide(ROUTER_KEY, this)
    app.component("router-link", RouterLink)
    app.component("router-view", RouterView)
  }
}

export { createRouter, createWebHashHistory, useRouter }
