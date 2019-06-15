import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/index'
import Login from '@/page/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
