import { ENGLISH, JAPANESE, TEXT, SOUND, SPEAK, RANDOM } from '../constants'

export const NAMESPACE = 'counters'

export const GAME_MODES = [
  {id: 'JapaneseToEnglish', text: 'Japanese to English', question: JAPANESE, answer: ENGLISH, type: TEXT},
  {id: 'EnglishToJapanese', text: 'English to Japanese', question: ENGLISH, answer: JAPANESE, type: TEXT},
  {id: 'SoundToEnglish', text: 'Sound to English', question: JAPANESE, answer: ENGLISH, type: SOUND},
  { id: RANDOM, text: 'Random' }
]

export const GENERIC = 'Generic'
export const LONG = 'Long'
export const ROUND = 'Round'
export const FLAT = 'Flat'

export const COUNTERS = [
  {id: GENERIC, text: 'Generic objects (いくつ)', symbols: GENERIC_SYMBOLS},
  {id: LONG, text: 'Long objects (なんぼん)', symbols: LONG_SYMBOLS},
  {id: ROUND, text: 'Round objects (なんこ)', symbols: ROUND_SYMBOLS},
  {id: FLAT, text: 'Flat objects (なんまい)', symbols: FLAT_SYMBOLS}
]

export const GENERIC_SYMBOLS = [
  {JAPANESE: 'ひとつ', ENGLISH: '1 (generic)', value: 1, type: GENERIC},
  {JAPANESE: 'ふたつ', ENGLISH: '2 (generic)', value: 2, type: GENERIC},
  {JAPANESE: 'みっつ', ENGLISH: '3 (generic)', value: 3, type: GENERIC},
  {JAPANESE: 'よっつ', ENGLISH: '4 (generic)', value: 4, type: GENERIC},
  {JAPANESE: 'いつつ', ENGLISH: '5 (generic)', value: 5, type: GENERIC},
  {JAPANESE: 'むっつ', ENGLISH: '6 (generic)', value: 6, type: GENERIC},
  {JAPANESE: 'ななつ', ENGLISH: '7 (generic)', value: 7, type: GENERIC},
  {JAPANESE: 'やっつ', ENGLISH: '8 (generic)', value: 8, type: GENERIC},
  {JAPANESE: 'ここのつ', ENGLISH: '9 (generic)', value: 9, type: GENERIC},
  {JAPANESE: 'とお', ENGLISH: '10 (generic)', value: 10, type: GENERIC},
  {JAPANESE: 'じゅういっこ', ENGLISH: '11 (generic)', value: 11, type: GENERIC},
  {JAPANESE: 'じゅうにこ', ENGLISH: '12 (generic)', value: 12, type: GENERIC},
  {JAPANESE: 'じゅうさんこ', ENGLISH: '13 (generic)', value: 13, type: GENERIC},
  {JAPANESE: 'じゅうよんこ', ENGLISH: '14 (generic)', value: 14, type: GENERIC},
  {JAPANESE: 'じゅうごこ', ENGLISH: '15 (generic)', value: 15, type: GENERIC},
  {JAPANESE: 'じゅうろっこ', ENGLISH: '16 (generic)', value: 16, type: GENERIC},
  {JAPANESE: 'じゅうななこ', ENGLISH: '17 (generic)', value: 17, type: GENERIC},
  {JAPANESE: 'じゅうはちこ', ENGLISH: '18 (generic)', value: 18, type: GENERIC},
  {JAPANESE: 'じゅうきゅうこ', ENGLISH: '19 (generic)', value: 19, type: GENERIC},
  {JAPANESE: 'にじゅっこ', ENGLISH: '20 (generic)', value: 20, type: GENERIC}
]

export const ROUND_SYMBOLS = [
  {JAPANESE: 'いっこ', ENGLISH: '1 (long)', value: 1, type: LONG},
  {JAPANESE: 'にこ', ENGLISH: '2 (long)', value: 2, type: LONG},
  {JAPANESE: 'さんこ', ENGLISH: '3 (long)', value: 3, type: LONG},
  {JAPANESE: 'よんこ', ENGLISH: '4 (long)', value: 4, type: LONG},
  {JAPANESE: 'ごこ', ENGLISH: '5 (long)', value: 5, type: LONG},
  {JAPANESE: 'ろっこ', ENGLISH: '6 (long)', value: 6, type: LONG},
  {JAPANESE: 'ななこ', ENGLISH: '7 (long)', value: 7, type: LONG},
  {JAPANESE: 'はちこ', ENGLISH: '8 (long)', value: 8, type: LONG},
  {JAPANESE: 'きゅうこ', ENGLISH: '9 (long)', value: 9, type: LONG},
  {JAPANESE: 'じゅっこ', ENGLISH: '10 (long)', value: 10, type: LONG},
  {JAPANESE: 'じゅういっこ', ENGLISH: '11 (long)', value: 11, type: LONG},
  {JAPANESE: 'じゅうにこ', ENGLISH: '12 (long)', value: 12, type: LONG},
  {JAPANESE: 'じゅうさんこ', ENGLISH: '13 (long)', value: 13, type: LONG},
  {JAPANESE: 'じゅうよんこ', ENGLISH: '14 (long)', value: 14, type: LONG},
  {JAPANESE: 'じゅうごこ', ENGLISH: '15 (long)', value: 15, type: LONG},
  {JAPANESE: 'じゅうろっこ', ENGLISH: '16 (long)', value: 16, type: LONG},
  {JAPANESE: 'じゅうななこ', ENGLISH: '17 (long)', value: 17, type: LONG},
  {JAPANESE: 'じゅうはちこ', ENGLISH: '18 (long)', value: 18, type: LONG},
  {JAPANESE: 'じゅうきゅうこ', ENGLISH: '19 (long)', value: 19, type: LONG},
  {JAPANESE: 'にじゅっこ', ENGLISH: '20 (long)', value: 20, type: LONG}
]

export const LONG_SYMBOLS = [
  {JAPANESE: 'いっぽん', ENGLISH: '1 (round)', value: 1, type: ROUND},
  {JAPANESE: 'にほん', ENGLISH: '2 (round)', value: 2, type: ROUND},
  {JAPANESE: 'さんぼん', ENGLISH: '3 (round)', value: 3, type: ROUND},
  {JAPANESE: 'よんほん', ENGLISH: '4 (round)', value: 4, type: ROUND},
  {JAPANESE: 'ごほん', ENGLISH: '5 (round)', value: 5, type: ROUND},
  {JAPANESE: 'ろっぽん', ENGLISH: '6 (round)', value: 6, type: ROUND},
  {JAPANESE: 'ななほん', ENGLISH: '7 (round)', value: 7, type: ROUND},
  {JAPANESE: 'はっぽん', ENGLISH: '8 (round)', value: 8, type: ROUND},
  {JAPANESE: 'きゅうほん', ENGLISH: '9 (round)', value: 9, type: ROUND},
  {JAPANESE: 'じゅっぽん', ENGLISH: '10 (round)', value: 10, type: ROUND},
  {JAPANESE: 'じゅういっぽん', ENGLISH: '11 (round)', value: 11, type: ROUND},
  {JAPANESE: 'じゅうにほん', ENGLISH: '12 (round)', value: 12, type: ROUND},
  {JAPANESE: 'じゅうさんぼん', ENGLISH: '13 (round)', value: 13, type: ROUND},
  {JAPANESE: 'じゅうよんほん', ENGLISH: '14 (round)', value: 14, type: ROUND},
  {JAPANESE: 'じゅうごほん', ENGLISH: '15 (round)', value: 15, type: ROUND},
  {JAPANESE: 'じゅうろっぽん', ENGLISH: '16 (round)', value: 16, type: ROUND},
  {JAPANESE: 'じゅうななほん', ENGLISH: '17 (round)', value: 17, type: ROUND},
  {JAPANESE: 'じゅうはっぽん', ENGLISH: '18 (round)', value: 18, type: ROUND},
  {JAPANESE: 'じゅうきゅうほん', ENGLISH: '19 (round)', value: 19, type: ROUND},
  {JAPANESE: 'にじゅっぽん', ENGLISH: '20 (round)', value: 20, type: ROUND}
]

export const FLAT_SYMBOLS = [
  {JAPANESE: 'いちまい', ENGLISH: '1 (flat)', value: 1, type: FLAT},
  {JAPANESE: 'にまい', ENGLISH: '2 (flat)', value: 2, type: FLAT},
  {JAPANESE: 'さんまい', ENGLISH: '3 (flat)', value: 3, type: FLAT},
  {JAPANESE: 'よんまい', ENGLISH: '4 (flat)', value: 4, type: FLAT},
  {JAPANESE: 'ごまい', ENGLISH: '5 (flat)', value: 5, type: FLAT},
  {JAPANESE: 'ろくまい', ENGLISH: '6 (flat)', value: 6, type: FLAT},
  {JAPANESE: 'ななまい', ENGLISH: '7 (flat)', value: 7, type: FLAT},
  {JAPANESE: 'はちまい', ENGLISH: '8 (flat)', value: 8, type: FLAT},
  {JAPANESE: 'きゅうまい', ENGLISH: '9 (flat)', value: 9, type: FLAT},
  {JAPANESE: 'じゅうまい', ENGLISH: '10 (flat)', value: 10, type: FLAT},
  {JAPANESE: 'じゅういちまい', ENGLISH: '11 (flat)', value: 11, type: FLAT},
  {JAPANESE: 'じゅうにまい', ENGLISH: '12 (flat)', value: 12, type: FLAT},
  {JAPANESE: 'じゅうさんまい', ENGLISH: '13 (flat)', value: 13, type: FLAT},
  {JAPANESE: 'じゅうよんまい', ENGLISH: '14 (flat)', value: 14, type: FLAT},
  {JAPANESE: 'じゅうごまい', ENGLISH: '15 (flat)', value: 15, type: FLAT},
  {JAPANESE: 'じゅうろくまい', ENGLISH: '16 (flat)', value: 16, type: FLAT},
  {JAPANESE: 'じゅうななまい', ENGLISH: '17 (flat)', value: 17, type: FLAT},
  {JAPANESE: 'じゅうはちまい', ENGLISH: '18 (flat)', value: 18, type: FLAT},
  {JAPANESE: 'じゅうきゅうまい', ENGLISH: '19 (flat)', value: 19, type: FLAT},
  {JAPANESE: 'にじゅうまい', ENGLISH: '20 (flat)', value: 20, type: FLAT}
]
