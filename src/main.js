// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 注册全局组件
import MyPlugin from './assets/js/plugin'

import './assets/css/body.css'

Vue.config.productionTip = false

Vue.use(MyPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  
})
