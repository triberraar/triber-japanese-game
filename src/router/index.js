import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/pages/Login'
import HomePage from '@/pages/Home'
import BaseLayout from '@/components/BaseLayout'
import { LOGIN, HOME } from './constants'

import store from '@/store/index'

Vue.use(Router)

const router = new Router({
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
          component: HomePage,
          meta: {
            requiresAuth: true
          }
        }
      ],
      meta: {
        requiresAuth: true
      }
    }, {
      path: '*',
      redirect: {
        name: HOME
      }
    }

  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === LOGIN) {
    if (store.getters['authenticated']) {
      next({ name: HOME })
    } else {
      next()
    }
  } else if (to.meta.requiresAuth && !store.getters['authenticated']) {
    next({ name: LOGIN })
  } else {
    next()
  }
})

export default router
