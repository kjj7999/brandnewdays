import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  linkActiveClass: 'open active',
  routes: [
    {
      path: '/',
      redirect: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
