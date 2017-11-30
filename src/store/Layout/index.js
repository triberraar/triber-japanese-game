import { TOGGLE_SIDE_MENU, SET_SIDE_MENU } from './constants'

const initial = {
  showSideMenu: false
}

const mutations = {
  [TOGGLE_SIDE_MENU]: (state) => {
    state.showSideMenu = !state.showSideMenu
  },
  [SET_SIDE_MENU]: (state, payload) => {
    state.showSideMenu = payload
  }
}

const getters = {
  showSideMenu: state => state.showSideMenu
}

export default {
  state: initial,
  mutations,
  getters,
  strict: true
}
