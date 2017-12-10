import { ENABLED,
  PLAY,
  SETTINGS,
  CURRENT_GAME,
  START,
  CONTINUE,
  ONGOING
} from '../constants'
import { SYMBOLS } from './constants'
import { POP } from '@/store/Snackbar/constants'

import router from '@/router'
import { HIRAGANA_GAME, HIRAGANA_GAME_ROUND } from '@/router/constants'
import { randomize } from '@/utils'

const initial = {
  enabled: true,
  settings: {
    gameMode: null,
    numberOfRounds: null
  },
  currentGame: {
    ongoing: false,
    round: null,
    rounds: []
  }
}

const mutations = {
  [PLAY]: () => {
    router.push({name: HIRAGANA_GAME})
  },
  [START]: (state, settings) => {
    state.currentGame = {
      ongoing: true,
      round: 1,
      rounds: []
    }
    state.settings = {...state.settings, ...settings}
    for (let i = 0; i < settings.numberOfRounds; i++) {
      const randomized = randomize(SYMBOLS)
      state.currentGame.rounds.push({question: randomized[0], answers: randomized.slice(0, 12)})
    }
    router.push({name: HIRAGANA_GAME_ROUND})
  },
  [CONTINUE]: state => {
    router.push({name: HIRAGANA_GAME_ROUND})
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
