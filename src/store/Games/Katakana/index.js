import { SYMBOLS,
  GAME_MODES
 } from './constants'
import { KATAKANA_GAME_CONFIG, KATAKANA_GAME_ROUND, KATAKANA_GAME_RESULT } from '@/router/constants'

import { mutations, getters, actions } from '../mutal'

const initial = {
  enabled: true,
  settings: {
    gameMode: null,
    numberOfRounds: null
  },
  currentGame: {
    round: null,
    rounds: []
  }
}

export default {
  state: initial,
  actions: actions(),
  mutations: mutations(SYMBOLS, GAME_MODES, {start: KATAKANA_GAME_CONFIG, round: KATAKANA_GAME_ROUND, result: KATAKANA_GAME_RESULT}),
  getters: getters(),
  strict: true,
  namespaced: true
}
