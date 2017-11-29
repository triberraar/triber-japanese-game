import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import layout from './Layout'

export default new Vuex.Store({
  modules: {
    layout
  },
  strict: true
})
