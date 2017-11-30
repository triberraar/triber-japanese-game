<template lang="pug">
  div(id="firebaseui-auth-container")
</template>

<script>
import firebase from 'firebase'

import { firebaseUI } from '@/config/firebase'

const uiConfig = {
  signInSuccessUrl: '/#/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  tosUrl: '/#tos'
}

export default {
  name: 'login',
  data: () => ({ }),
  computed: {
  },
  mounted () {
    firebaseUI.start('#firebaseui-auth-container', uiConfig)
  },
  destroyed () {
    firebaseUI.reset()
  }
}
</script>

<style src="firebaseui/dist/firebaseui.css"></style>