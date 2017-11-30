import firebase from 'firebase'
import firebaseui from 'firebaseui'

export const firebaseConfig = {
  apiKey: 'AIzaSyA-2y43DjwEb1fU68LlV_gJHvXYA6Evwhs',
  authDomain: 'triber-japanese-game.firebaseapp.com',
  databaseURL: 'https://triber-japanese-game.firebaseio.com',
  projectId: 'triber-japanese-game',
  storageBucket: 'triber-japanese-game.appspot.com',
  messagingSenderId: '786800886632'
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
export const firebaseUI = new firebaseui.auth.AuthUI(firebase.auth(firebaseApp))
