// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import App from './App'
import router from './router'
import store from './store'
import { SET_USER } from '@/store/Auth/constants'
import { firebaseApp } from '@/config/firebase'

Vue.use(Vuetify)
Vue.config.productionTip = false

firebaseApp.auth().onAuthStateChanged(user => store.commit(SET_USER, user))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
})
