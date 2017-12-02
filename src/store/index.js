import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth from './Auth'

export default new Vuex.Store({
  modules: {
    auth
  },
  strict: true
})
