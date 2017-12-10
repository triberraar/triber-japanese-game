import { ENABLED,
  PLAY,
  SETTINGS,
  CURRENT_GAME,
  START,
  CONTINUE,
  ONGOING,
  CURRENT_ROUND,
  QUESTION,
  POSSIBILITIES
} from '../constants'
import { SYMBOLS,
  HIRAGANA_TO_ROMAJI,
  SOUND_TO_HIRAGANA,
  ROMAJI_TO_HIRAGANA,
  RANDOM
 } from './constants'
import { POP } from '@/store/Snackbar/constants'

import router from '@/router'
import { HIRAGANA_GAME, HIRAGANA_GAME_ROUND } from '@/router/constants'
import { randomize, randomInt } from '@/utils'

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
      let gameMode = null
      if (settings.gameMode === RANDOM) {
        const mode = randomInt(3)
        if (mode === 0) {
          gameMode = HIRAGANA_TO_ROMAJI
        } else if (mode === 1) {
          gameMode = SOUND_TO_HIRAGANA
        } else if (mode === 2) {
          gameMode = ROMAJI_TO_HIRAGANA
        }
      } else {
        gameMode = settings.gameMode
      }
      state.currentGame.rounds.push({question: randomized[0], answers: randomized.slice(0, 12), gameMode})
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
  [ONGOING]: state => state.currentGame.ongoing,
  [CURRENT_ROUND]: state => state.currentGame.rounds[state.currentGame.round - 1],
  [QUESTION]: (state, getters) => {
    if (!getters[CURRENT_ROUND]) return
    if (getters[CURRENT_ROUND].gameMode === HIRAGANA_TO_ROMAJI || getters[CURRENT_ROUND].gameMode === SOUND_TO_HIRAGANA) {
      return getters[CURRENT_ROUND].question.kana
    } else {
      return getters[CURRENT_ROUND].question.romaji
    }
  },
  [POSSIBILITIES]: (state, getters) => {
    if (!getters[CURRENT_ROUND]) return
    return getters[CURRENT_ROUND].answers.map(it => {
      if (getters[CURRENT_ROUND].gameMode === HIRAGANA_TO_ROMAJI) {
        return it.romaji
      } else {
        return it.kana
      }
    })
  }
}

export default {
  state: initial,
  actions,
  mutations,
  getters,
  strict: true,
  namespaced: true
}
