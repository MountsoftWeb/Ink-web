import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Layout from '@/components/layout/Layout'
import Test from '@/views/test.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children:[
        {
          path: 'hello',
          component: HelloWorld
        }
      ]
    },

    {
        path: '/hellos',
        component: HelloWorld
    },

    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
