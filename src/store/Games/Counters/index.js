import { ENABLED,
  PLAY,
  START,
  CONTINUE,
  FINISH,
  ANSWER,
  ONGOING,
  FINISHED,
  RANDOM,
  SETTINGS,
  CURRENT_GAME
} from '../constants'
import { GAME_MODES } from './constants'
import { POP } from '@/store/Snackbar/constants'
import router from '@/router'
import { COUNTERS_GAME_CONFIG, COUNTERS_GAME_ROUND, COUNTERS_GAME_RESULT } from '@/router/constants'
import { randomize, randomInt } from '@/utils'

const initial = {
  enabled: true,
  settings: {
    gameMode: null,
    numberOfRounds: null,
    counters: []
  },
  currentGame: {
    round: null,
    rounds: []
  }
}

const mutations = {
  [PLAY]: () => {
    router.push({name: COUNTERS_GAME_CONFIG})
  },
  [START]: (state, settings) => {
    state.settings = {...state.settings, ...settings}
    state.currentGame = {
      round: 1,
      rounds: []
    }
    for (let i = 0; i < settings.numberOfRounds; i++) {
      const SYMBOLS = settings.counters.reduce((prev, curr) => {
        return prev.concat(curr.symbols)
      }, [])
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
    router.push({name: COUNTERS_GAME_ROUND})
  },
  [CONTINUE]: state => {
    if (state.currentGame.round > state.settings.numberOfRounds) {
      router.push({name: COUNTERS_GAME_RESULT})
    } else {
      router.push({name: COUNTERS_GAME_ROUND})
    }
  },
  [FINISH]: state => {
    router.push({name: COUNTERS_GAME_RESULT})
  },
  [ANSWER]: () => {

  }
}

const actions = {
  [PLAY]: ({ commit, state }) => {
    if (state.enabled) {
      commit(PLAY)
    } else {
      commit(POP, {message: 'Counters game not enabled yet', type: 'error'}, {root: true})
    }
  }
}

const getters = {
  [ENABLED]: state => state.enabled,
  [SETTINGS]: state => state.settings,
  [CURRENT_GAME]: state => state.currentGame,
  [ONGOING]: (state, getters) => state.currentGame.round > 0 && !getters[FINISHED],
  [FINISHED]: (state, getters) => getters[CURRENT_GAME].round > getters[SETTINGS].numberOfRounds
}

export default {
  state: initial,
  actions,
  mutations,
  getters,
  strict: true,
  namespaced: true
}
