// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import axios from 'axios'
// import VueAxios from 'vue-axios'
import axios from './http'
import store from './store/index'

// 注册全局组件
import MyPlugin from './assets/js/plugin'

import './assets/css/body.css'

Vue.config.productionTip = false

Vue.use(MyPlugin)

Vue.prototype.axios = axios;
// Vue.use(VueAxios,axios)
// axios.defaults.baseURL = 'https://localhost:8090/api'
// // 将API方法绑定到全局
// Vue.prototype.$axios = axios
// Vue.config.productionTip = false
// axios.defaults.withCredentials=false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  store,
  router,
  render: h => h(App),
  
})
