import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import auth from './Auth'
import settings from './Settings'
import snackbar from './Snackbar'
import hiragana from './Games/Hiragana'
import katakana from './Games/Katakana'
import dates from './Games/Dates'
import counters from './Games/Counters'
import numbers from './Games/Numbers'
import time from './Games/Time'
import kana from './Games/Kana'

export default new Vuex.Store({
  modules: {
    auth,
    settings,
    snackbar,
    hiragana,
    katakana,
    dates,
    counters,
    numbers,
    time,
    kana
  },
  strict: true
})
