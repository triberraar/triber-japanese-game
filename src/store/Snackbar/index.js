import { POP, SWALLOW, MESSAGE, TYPE, SHOWN } from './constants'

const initial = {
  message: null,
  type: null,
  shown: false
}

const mutations = {
  [POP]: (state, {message, type}) => {
    state.message = message
    state.type = type
    state.shown = true
  },
  [SWALLOW]: (state) => {
    state.shown = false
    state.message = null
    state.type = null
  }
}

const getters = {
  [MESSAGE]: state => state.message,
  [TYPE]: state => state.type,
  [SHOWN]: state => state.shown
}

export default {
  state: initial,
  mutations,
  getters,
  strict: true
}
