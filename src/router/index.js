import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Layout from '@/components/Layout'
import { LOGIN, HOME } from './constants'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: LOGIN,
      component: Login
    }, {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: HOME,
          component: Home
        }
      ]
    }, {
      path: '*',
      redirect: {
        name: HOME
      }
    }

  ]
})
