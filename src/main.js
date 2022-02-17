import { createApp } from 'vue'
import App from './App.vue'

import router from './router/index'

import store from './store/index'
import myStore from './store/windex'

createApp(App)
  .use(store)
  .use(myStore)
  .use(router)
  .mount('#app')
