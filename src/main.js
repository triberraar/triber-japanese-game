// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'
import { HOME, LOGIN } from './router/constants'
import store from './store'
import { SET_USER } from '@/store/Auth/constants'
import { firebaseApp } from '@/config/firebase'

Vue.use(Vuetify)
Vue.config.productionTip = false

firebaseApp.auth().onAuthStateChanged(user => {
  debugger
  if (user) {
    store.commit(SET_USER, {
      userName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      id: user.uid
    })
  } else {
    store.commit(SET_USER, null)
  }
  if (router.currentRoute.name === LOGIN && store.getters['authenticated']) {
    router.push({ name: HOME })
  }
  if (router.currentRoute.meta.requiresAuth && !store.getters['authenticated']) {
    router.push({ name: LOGIN })
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
