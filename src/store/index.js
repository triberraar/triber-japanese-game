import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth from './Auth'
import settings from './Settings'

export default new Vuex.Store({
  modules: {
    auth,
    settings
  },
  strict: true
})
