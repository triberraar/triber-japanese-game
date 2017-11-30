import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import layout from './Layout'
import auth from './Auth'

export default new Vuex.Store({
  modules: {
    layout,
    auth
  },
  strict: false
})
