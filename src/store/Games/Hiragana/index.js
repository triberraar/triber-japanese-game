import { ENABLED,
  PLAY,
  SETTINGS,
  CURRENT_GAME,
  START,
  CONTINUE,
  ONGOING,
  CURRENT_ROUND,
  QUESTION,
  POSSIBILITIES,
  ANSWER,
  ATTEMPTED_ANSWERS,
  HAS_BEEN_ATTEMPTED,
  CURRENT_ROUND_GAME_MODE,
  RESULTS,
  PROGRESS,
  FINISHED,
  FINISH
} from '../constants'
import { SYMBOLS,
  RANDOM,
  GAME_MODES
 } from './constants'
import { POP } from '@/store/Snackbar/constants'

import router from '@/router'
import { HIRAGANA_GAME, HIRAGANA_GAME_ROUND, HIRAGANA_GAME_RESULT } from '@/router/constants'
import { randomize, randomInt } from '@/utils'

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

const mutations = {
  [PLAY]: () => {
    router.push({name: HIRAGANA_GAME})
  },
  [START]: (state, settings) => {
    state.currentGame = {
      round: 1,
      rounds: []
    }
    state.settings = {...state.settings, ...settings}
    for (let i = 0; i < settings.numberOfRounds; i++) {
      const randomized = randomize(SYMBOLS)
      let gameMode = null
      if (settings.gameMode.id === RANDOM) {
        gameMode = GAME_MODES[randomInt(GAME_MODES.length - 1)]
      } else {
        gameMode = settings.gameMode
      }
      const question = randomized[0]
      const answers = randomize(randomized.slice(0, 12))
      state.currentGame.rounds.push({question, answers, gameMode, attempts: 0, attemptedAnswers: []})
    }
    router.push({name: HIRAGANA_GAME_ROUND})
  },
  [CONTINUE]: state => {
    if (state.currentGame.round > state.settings.numberOfRounds) {
      router.push({name: HIRAGANA_GAME_RESULT})
    } else {
      router.push({name: HIRAGANA_GAME_ROUND})
    }
  },
  [FINISH]: state => {
    router.push({name: HIRAGANA_GAME_RESULT})
  },
  [ANSWER]: (state, answer) => {
    const currentRound = state.currentGame.rounds[state.currentGame.round - 1]
    currentRound.attempts++
    currentRound.attemptedAnswers.push(answer)
    if (answer === currentRound.question[currentRound.gameMode.answer]) {
      state.currentGame.round++
    }
    if (state.currentGame.round > state.settings.numberOfRounds) {
      router.push({name: HIRAGANA_GAME_RESULT})
    }
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
  [ONGOING]: (state, getters) => state.currentGame.round > 0 && !getters[FINISHED],
  [CURRENT_ROUND]: state => state.currentGame.rounds[state.currentGame.round - 1],
  [QUESTION]: (state, getters) => {
    if (!getters[CURRENT_ROUND]) return
    return getters[CURRENT_ROUND].question[getters[CURRENT_ROUND].gameMode.question]
  },
  [POSSIBILITIES]: (state, getters) => {
    if (!getters[CURRENT_ROUND]) return
    return getters[CURRENT_ROUND].answers.map(it => it[getters[CURRENT_ROUND].gameMode.answer])
  },
  [ATTEMPTED_ANSWERS]: (state, getters) => {
    if (!getters[CURRENT_ROUND]) { return [] }
    return getters[CURRENT_ROUND].attemptedAnswers
  },
  [HAS_BEEN_ATTEMPTED]: (state, getters) => attempt => {
    if (getters[CURRENT_ROUND]) {
      return getters[CURRENT_ROUND].attemptedAnswers.find(it => it === attempt)
    }
    return false
  },
  [CURRENT_ROUND_GAME_MODE]: (state, getters) => {
    if (!getters[CURRENT_ROUND]) { return [] }
    return getters[CURRENT_ROUND].gameMode.type
  },
  [RESULTS]: (state, getters) => {
    return getters[CURRENT_GAME].rounds.map(it => {
      const question = it.question[it.gameMode.question]
      const answers = it.attemptedAnswers.join(', ')
      const kana = it.question.Kana
      return {question, answers, attempts: it.attempts, kana}
    })
  },
  [PROGRESS]: (state, getters) => {
    return ((getters[CURRENT_GAME].round - 1) / getters[SETTINGS].numberOfRounds) * 100
  },
  [FINISHED]: (state, getters) => {
    return getters[CURRENT_GAME].round > getters[SETTINGS].numberOfRounds
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
