import { SET_USER } from './constants'

const initial = {
  user: null
}

const mutations = {
  [SET_USER]: (state, user) => {
    state.user = user
  }
}

const getters = {
  user: state => state.user
}

export default {
  state: initial,
  mutations,
  getters,
  strict: false
}
