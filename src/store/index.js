import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth from './Auth'
import settings from './Settings'
import snackbar from './Snackbar'
import hiragana from './Games/Hiragana'

export default new Vuex.Store({
  modules: {
    auth,
    settings,
    snackbar,
    hiragana
  },
  strict: true
})
