import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import find from '@/components/find'
import ShoppingCart from '@/components/ShoppingCart'
import My from '@/components/My'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      meta:{ 
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆 
       },
      component: index
    },
    {
      path: '/find',
      name: 'find',
      meta:{ 
        requireAuth: true // 配置此条，进入页面前判断是否需要登陆 
       },
      component: find
    },
    {
      path: '/ShoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
  ]
})
