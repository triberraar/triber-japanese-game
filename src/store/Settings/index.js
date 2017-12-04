import { SET_SETTINGS } from './constants'

const initial = () => {
  const empty = {
    voice: null,
    speechRecognitionEnabled: null,
    voiceSupported: null,
    speechRecognitionSupported: null
  }
  return JSON.parse(localStorage.getItem('settings')) || empty
}

const mutations = {
  [SET_SETTINGS]: (state, { voice, speechRecognitionEnabled, voiceSupported, speechRecognitionSupported }) => {
    if (voice !== undefined) state.voice = voice
    if (speechRecognitionEnabled !== undefined) state.speechRecognitionEnabled = speechRecognitionEnabled
    if (voiceSupported !== undefined) state.voiceSupported = voiceSupported
    if (speechRecognitionSupported !== undefined) state.speechRecognitionSupported = speechRecognitionSupported
    localStorage.setItem('settings', JSON.stringify(state))
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
