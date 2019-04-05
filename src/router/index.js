import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld.vue'
import Layout from '@/components/layout/Layout'
import LayoutNoLeft from '@/components/layout/LayoutNoLeft'
import Test from '@/views/test.vue'

import Trading from '@/views/trading'       // 物品交易
import Test2 from '@/views/community/Community'   // 社团

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: LayoutNoLeft,
      // children:[
      //   {
      //     path: 'test',
      //     component: HelloWorld
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
          component: Test
        },
        {
          path: 'b',
          component: HelloWorld
        }
      ]
    },

    // 交易物品模块
    {
      path: '/test1',
      name: 'test1',
      component: Trading,
      children: [
        {
          path: 'digital',
          component: Trading.Digital
        },
        {
          path: 'life',
          component: Trading.Life
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
          component: Test
        }
      ]
    }
    // {
    //   path: '/mes',
    //   component: Test
    // }

    
  ]
})
