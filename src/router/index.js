import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld.vue'
import Layout from '@/components/layout/Layout'
import LayoutNoLeft from '@/components/layout/LayoutNoLeft'
import Test from '@/views/test.vue'

import Login from '@/views/Login'

import Trading from '@/views/trading'             // 物品交易
import Test2 from '@/views/community'   // 社团
import User from '@/views/user'                 // 用户详情
import Project from '@/views/project'           // 项目

import store from '@/store/index'

import tets2 from '@/views/test2'


Vue.use(Router)

let router = new Router({
  // mode: 'history',//去掉#，mode
  // base: '/dist/',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Project,
      children:[
        {
          path: '',
          component: Project.Build,
        },
        {
          path: '/build',
          name: 'build',
          component: Project.Build
        },
    
      ]
    },
    
    {
      path: '/test',
      name: 'Layout_1',
      component: Layout,
      children:[
        {
          path: 'a',
          component: Test
        },
        {
          path: 'b',
          component: HelloWorld
        }
      ]
    },

    {
      path: '/aaa',
      name: 'aaa',
      component: User,
      children: [
        {
          path: 'a',
          component: User.Detail,
        }
      ]
    },
    // 用户详情
    {
      path: '/user',
      name: 'user',
      // meta: {
      //   requireAuth: true,
      // },
      component: User,
      children: [
        {
          path: '',
          component: User.Detail, // 默认展示所有作品，个人，点赞，收藏
        },
        {
          path: 'manage',
          component: User.Manage,
          // component: User.Detail.Manage,
        }
      ]

    },
    // 交易物品模块
    {
      path: '/trading',
      name: 'trading',
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
      component: Trading,
      
      children: [
        {
          path: 'life',
          component: Trading.Life
        },
        {
          path: 'digital',
          component: Trading.Digital
        },

        // {
        //   path: 'life',
        //   component: HelloWorld
        // }
      ]
    },

    // 社团活动模块
    {
      path: '/test2',
      name: 'test2',
      
      component: Test2,
      children: [
        {
          path: 'v',
          component: HelloWorld
        },
        {
          path: 'b',
          component: Test
        }
      ]
    },
    
    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/a',
      name: 'a',
      component: tets2
    }
    // {
    //   path: '/mes',
    //   component: Test
    // }
  ]
})
// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('token')) {
//   store.commit(types.LOGIN, window.localStorage.getItem('token'))
// }


// 路由配置
// const router = new VueRouter({
//   routes: routes
// });

// 拦截请求，用户权限判断
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
      // if (store.state.token == '1') {
      if(localStorage.getItem('token') == '' || localStorage.getItem('token') == null){
          next({
              
            path: '/login',
            query: {redirect: to.fullPath}
        });
        return
      }
      else {
          next();
          return
      }
  }
  else {
      next();
  }
})
export default router;
