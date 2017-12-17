import { SYMBOLS,
  GAME_MODES
 } from './constants'
import { KANA_GAME_CONFIG, KANA_GAME_ROUND, KANA_GAME_RESULT } from '@/router/constants'

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
  mutations: mutations(SYMBOLS, GAME_MODES, {start: KANA_GAME_CONFIG, round: KANA_GAME_ROUND, result: KANA_GAME_RESULT}),
  getters: getters(),
  strict: true,
  namespaced: true
}
