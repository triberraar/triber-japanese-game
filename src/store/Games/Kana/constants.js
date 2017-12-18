export const NAMESPACE = 'kana'
import { KANA, ROMAJI, TEXT, SOUND, RANDOM } from '../constants'
import { SYMBOLS as HIRAGANA_SYMBOLS } from '../Hiragana/constants'
import { SYMBOLS as KATAKANA_SYMBOLS } from '../Katakana/constants'

export const GAME_MODES = [
  { id: 'KanaToRomaji', text: 'Kana to Romaji', question: KANA, answer: ROMAJI, type: TEXT },
  { id: 'SoundToKana', text: 'Sound to Kana', question: KANA, answer: KANA, type: SOUND },
  { id: 'RomajiToKana', text: 'Romaji to Kana', question: ROMAJI, answer: KANA, type: TEXT },
  { id: RANDOM, text: 'Random' }
]

export const SYMBOLS = [
  ...HIRAGANA_SYMBOLS, ...KATAKANA_SYMBOLS
]
