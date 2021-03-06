import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld.vue'
import Layout from '@/components/layout/Layout'
import LayoutNoLeft from '@/components/layout/LayoutNoLeft'
import First from '@/views/first.vue'

import Login from '@/views/Login'

import Trading from '@/views/trading'           // 物品交易
import Test2 from '@/views/community'           // 社团
import User from '@/views/user'                 // 用户详情
import Project from '@/views/project'           // 项目
import Tools from '@/views/tools'               // 工具
import Personal from '@/views/personal'
import Spider from '@/views/spider'             // 爬虫管理

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
      component: First,
      // children: [
      //   {
      //     path: '',
      //     component: First
      //   }
      // ]
    },

    {
      path: '/test',
      name: 'Layout_1',
      component: Layout,
      children:[
        {
          path: 'a',
          component: First
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
    // 项目模块
    {
      path: '/project',
      name: 'Prpject',
      component: Project,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: 'detail',
          component: Project.Detail
        }
      ]
    },
    // 用户详情
    {
      path: '/user',
      name: 'user',
      meta: {
        requireAuth: true,
      },
      component: User,
      children: [
        {
          path: '',
          component: User.Manage, // 默认展示所有作品，个人，点赞，收藏
        },
        {
          path: 'manage',
          component: User.Manage, // 作品管理
          // component: User.Detail.Manage,
        },
        {
          path: 'upload',
          component: User.Upload  // 文件上传
        },
        {
          path: 'userlist',
          component: User.Userlist  // 关注/粉丝
        },
        {
          path: 'collect',
          component: User.Detail // 收藏/点赞
        },
        {
          path: 'alter',
          component: User.Alter   // 资料修改
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
    // 工具模块
    {
      path: '/tools',
      name: 'tools',
      component: Tools,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: 'detail',
          component: Tools.Detail
        },
      ]
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '',
          component: Personal.ProjectList
        },
        {
          path: 'userlist',
          component: Personal.Userlist
        }
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
          component: First
        }
      ]
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    // 爬虫管理
    {
      path: '/spider',
      name: 'spider',
      component: Spider
    },
    {
      path: '/upProject',
      name: 'upProject',
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
  if(to.meta.content){
    let head = document.getElementsByTagName('head');
    let meta = document.createElement('meta');
    meta.content = to.meta.content;
    head[0].appendChild(meta)
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }

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
