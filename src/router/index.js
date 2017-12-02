import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/Login'
import HomePage from '@/pages/Home'
import BaseLayout from '@/components/BaseLayout'
import { LOGIN, HOME } from './constants'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: LOGIN,
      component: LoginPage
    }, {
      path: '/',
      component: BaseLayout,
      children: [
        {
          path: '/',
          name: HOME,
          component: HomePage
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
