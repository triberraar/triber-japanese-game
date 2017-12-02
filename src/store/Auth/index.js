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
  user: state => state.user,
  authenticated: state => state.user !== null
}

export default {
  state: initial,
  mutations,
  getters,
  strict: true
}
