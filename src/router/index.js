import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import lin1 from '@/components/lin1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/lin1',
      name: 'lin1',
      component: lin1
    },

    {
      path: '/lin2',
      name: 'lin2',
      component: () => import('@/components/lin2'),
    },

    {
      path: '/lin3',
      name: 'lin3',
      component: () => import('@/views/lin3'),
    },

  ]
})
