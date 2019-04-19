import axios from 'axios'
import store from '../store/index'
// import * as types from './store/types'
import router from '../router/index'


// axios 配置
axios.defaults.timeout = 5000

// 默认 json 格式
axios.defaults.headers.post["Content-Type"] = "application/json;charset=UTF-8";
// axios.defaults.baseURL = 'https://api.github.com'
// axios.defaults.headers.common['Authorization'] = store.state.token

// http request 拦截器
axios.interceptors.request.use(
  config => {
    if (store.state.token) {
      config.headers.Authorization = `Bearer ${store.state.token}`
      // config.headers.Authorization = `token ${store.state.token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  },
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if(response.data.code == "404"){
      router.replace({
        path: "/",
      });
    }
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          store.commit(types.LOGOUT)
          
          // 只有在当前路由不是登录页面才跳转
          router.currentRoute.path !== 'login' &&
            router.replace({
              path: '/login',
              query: { redirect: router.currentRoute.path },
            })
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  },
)

export default axios
