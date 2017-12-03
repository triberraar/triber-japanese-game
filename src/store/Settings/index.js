import { SET_SETTINGS } from './constants'

const initial = {
  voice: null,
  speechRecognitionEnabled: null
}

const mutations = {
  [SET_SETTINGS]: (state, { voice, speechRecognitionEnabled }) => {
    if (voice !== undefined) state.voice = voice
    if (speechRecognitionEnabled !== undefined) state.speechRecognitionEnabled = speechRecognitionEnabled
  }
}

const getters = {
  settings: state => state,
  configured: state => state.voice !== null && state.speechRecognitionEnabled !== null
}

export default {
  state: initial,
  mutations,
  getters,
  strict: true
}
