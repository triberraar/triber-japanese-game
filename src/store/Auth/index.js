import { SET_USER, USER, AUTHENTICATED } from './constants'

const initial = {
  user: null
}

const mutations = {
  [SET_USER]: (state, user) => {
    state.user = user
  }
}

const getters = {
  [USER]: state => state.user,
  [AUTHENTICATED]: state => state.user !== null
}

export default {
  state: initial,
  mutations,
  getters,
  strict: true
}
