<template lang="pug">
  div
    v-dialog(:value="true", persistent width="290")
      v-card(hover style="background:white")
        v-toolbar
          v-toolbar-title Login
        v-card-title
          div.grey--text Welcome to triber-japanese-game.
          div.grey--text Please login/register using one of the methods
          div(id="firebaseui-auth-container")
</template>
</template>

<script>
import firebase from 'firebase'

import { firebaseUI } from '@/config/firebase'

const uiConfig = {
  signInSuccessUrl: '/#/home',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  tosUrl: '/#tos'
}

export default {
  name: 'LoginPage',
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