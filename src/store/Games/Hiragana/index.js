import { SYMBOLS,
  GAME_MODES
 } from './constants'
import { HIRAGANA_GAME_CONFIG, HIRAGANA_GAME_ROUND, HIRAGANA_GAME_RESULT } from '@/router/constants'

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
  mutations: mutations(SYMBOLS, GAME_MODES, {start: HIRAGANA_GAME_CONFIG, round: HIRAGANA_GAME_ROUND, result: HIRAGANA_GAME_RESULT}),
  getters: getters(),
  strict: true,
  namespaced: true
}
