import { SET_SETTINGS,
  SETTINGS,
  CONFIGURED,
  VOICE_CONFIGURED,
  SPEECH_RECOGNITION_CONFIGURED,
  FULLY_SUPPORTED
} from './constants'

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
  [SETTINGS]: state => state,
  [VOICE_CONFIGURED]: state => (state.voiceSupported === false) || (state.voiceSupported === true && state.voice),
  [SPEECH_RECOGNITION_CONFIGURED]: state => (state.speechRecognitionSupported === false) || (state.speechRecognitionSupported === true && state.speechRecognitionEnabled !== null),
  [CONFIGURED]: (state, getters) => getters[VOICE_CONFIGURED] && getters[SPEECH_RECOGNITION_CONFIGURED],
  [FULLY_SUPPORTED]: state => state.speechRecognitionSupported && state.voiceSupported
}

export default {
  state: initial,
  mutations,
  getters,
  strict: true
}
