import Vue from 'vue'
import Router from 'vue-router'
import BaseLayout from '@/components/BaseLayout'
import LoginPage from '@/pages/Login'
import HomePage from '@/pages/Home'
import SettingsPage from '@/pages/Settings'
import HiraganaGamePage from '@/pages/Games/Hiragana'
import HiraganaGameRoundPage from '@/pages/Games/Hiragana/Round'
import HiraganaGameResultPage from '@/pages/Games/Hiragana/Result'
import KatakanaGamePage from '@/pages/Games/Katakana'
import KatakanaGameRoundPage from '@/pages/Games/Katakana/Round'
import KatakanaGameResultPage from '@/pages/Games/Katakana/Result'
import { LOGIN,
  HOME,
  SETTINGS,
  HIRAGANA_GAME,
  HIRAGANA_GAME_ROUND,
  HIRAGANA_GAME_RESULT,
  KATAKANA_GAME,
  KATAKANA_GAME_ROUND,
  KATAKANA_GAME_RESULT
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
          path: 'hiragana/config',
          name: HIRAGANA_GAME,
          component: HiraganaGamePage,
          meta: {
            requiresAuth: true
          }
        }, {
          path: 'hiragana/round',
          name: HIRAGANA_GAME_ROUND,
          component: HiraganaGameRoundPage,
          meta: {
            requiresAuth: true
          }
        }, {
          path: 'hiragana/result',
          name: HIRAGANA_GAME_RESULT,
          component: HiraganaGameResultPage,
          meta: {
            requiresAuth: true
          }
        }, {
          path: 'katakana/config',
          name: KATAKANA_GAME,
          component: KatakanaGamePage,
          meta: {
            requiresAuth: true
          }
        }, {
          path: 'katakana/round',
          name: KATAKANA_GAME_ROUND,
          component: KatakanaGameRoundPage,
          meta: {
            requiresAuth: true
          }
        }, {
          path: 'katakana/result',
          name: KATAKANA_GAME_RESULT,
          component: KatakanaGameResultPage,
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
