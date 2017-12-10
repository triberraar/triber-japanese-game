import { ENABLED,
  PLAY,
  SETTINGS,
  CURRENT_GAME,
  START,
  CONTINUE,
  ONGOING
} from '../constants'
import { POP } from '@/store/Snackbar/constants'

import router from '@/router'
import { HIRAGANA_GAME } from '@/router/constants'

const initial = {
  enabled: true,
  settings: {
    gameMode: null,
    numberOfRounds: null
  },
  currentGame: {
    ongoing: false,
    round: null
  }
}

const mutations = {
  [PLAY]: () => {
    router.push({name: HIRAGANA_GAME})
  },
  [START]: (state, settings) => {
    state.settings = {...state.settings, ...settings}
    state.currentGame.ongoing = true
    state.currentGame.round = 1
    // go to rounds
  },
  [CONTINUE]: state => {
    // go to rounds
  }
}

const actions = {
  [PLAY]: ({ commit, state }) => {
    if (state.enabled) {
      commit(PLAY)
    } else {
      commit(POP, {message: 'Hiragana game not enabled yet', type: 'error'}, {root: true})
    }
  }
}

const getters = {
  [ENABLED]: state => state.enabled,
  [SETTINGS]: state => state.settings,
  [CURRENT_GAME]: state => state.currentGame,
  [ONGOING]: state => state.currentGame.ongoing
}

export default {
  state: initial,
  actions,
  mutations,
  getters,
  strict: true,
  namespaced: true
}
