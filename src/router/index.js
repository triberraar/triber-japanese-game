import Vue from 'vue'
import Router from 'vue-router'
import BaseLayout from '@/components/BaseLayout'
import LoginPage from '@/pages/Login'
import HomePage from '@/pages/Home'
import SettingsPage from '@/pages/Settings'
import HiraganaGamePage from '@/pages/Games/Hiragana'
import { LOGIN,
  HOME,
  SETTINGS,
  HIRAGANA_GAME
 } from './constants'

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
          path: 'home',
          name: HOME,
          component: HomePage,
          meta: {
            requiresAuth: true
          }
        }, {
          path: 'settings',
          name: SETTINGS,
          component: SettingsPage,
          meta: {
            requiresAuth: true
          }
        }, {
          path: 'hiragana',
          name: HIRAGANA_GAME,
          component: HiraganaGamePage,
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
