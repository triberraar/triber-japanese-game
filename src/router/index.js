import Vue from 'vue'
import Router from 'vue-router'
import BaseLayout from '@/components/BaseLayout'
import LoginPage from '@/pages/Login'
import HomePage from '@/pages/Home'
import SettingsPage from '@/pages/Settings'
import HiraganaGameConfigPage from '@/pages/Games/Hiragana/Config'
import HiraganaGameRoundPage from '@/pages/Games/Hiragana/Round'
import HiraganaGameResultPage from '@/pages/Games/Hiragana/Result'
import KatakanaGameConfigPage from '@/pages/Games/Katakana/Config'
import KatakanaGameRoundPage from '@/pages/Games/Katakana/Round'
import KatakanaGameResultPage from '@/pages/Games/Katakana/Result'
import KanaGameConfigPage from '@/pages/Games/Kana/Config'
import KanaGameRoundPage from '@/pages/Games/Kana/Round'
import KanaGameResultPage from '@/pages/Games/Kana/Result'
import { LOGIN,
  HOME,
  SETTINGS,
  HIRAGANA_GAME_CONFIG,
  HIRAGANA_GAME_ROUND,
  HIRAGANA_GAME_RESULT,
  KATAKANA_GAME_CONFIG,
  KATAKANA_GAME_ROUND,
  KATAKANA_GAME_RESULT,
  KANA_GAME_CONFIG,
  KANA_GAME_ROUND,
  KANA_GAME_RESULT
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
          name: HIRAGANA_GAME_CONFIG,
          component: HiraganaGameConfigPage,
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
          name: KATAKANA_GAME_CONFIG,
          component: KatakanaGameConfigPage,
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
        }, {
          path: 'kana/config',
          name: KANA_GAME_CONFIG,
          component: KanaGameConfigPage,
          meta: {
            requiresAuth: true
          }
        }, {
          path: 'kana/round',
          name: KANA_GAME_ROUND,
          component: KanaGameRoundPage,
          meta: {
            requiresAuth: true
          }
        }, {
          path: 'kana/result',
          name: KANA_GAME_RESULT,
          component: KanaGameResultPage,
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
