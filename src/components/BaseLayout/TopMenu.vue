<template lang="pug">
  v-toolbar(color="blue darken-3" dark app clipped-left fixed)
    v-toolbar-title
      v-btn(icon :to="routes.home")
        v-icon home
      span Triber japanese games
    div.d-flex.align-center(style="margin-left: auto")
      v-btn(icon :to="routes.settings")
        v-icon settings
      v-menu(offset-y)
        v-btn(icon slot="activator")
          v-avatar.teal(size="32px")
            img(v-if="user.photoURL" :src="user.photoURL")
            span.white--text.headline(v-if="!user.photoURL") {{avatarText}}
        v-list
          v-list-tile(@click="logout")
            v-list-tile-title Logout
</template>

<script>
  import { firebaseApp } from '@/config/firebase'
  import { HOME, SETTINGS } from '@/router/constants'

  import { mapGetters } from 'vuex'
  import { USER } from '@/store/Auth/constants'

  export default {
    name: 'TopMenu',
    data: () => ({
      routes: {
        home: {
          name: HOME
        },
        settings: {
          name: SETTINGS
        }
      }
    }),
    computed: {
      ...mapGetters({
        user: USER
      }),
      avatarText: function () {
        return this.user.userName.charAt(0)
      }
    },
    methods: {
      logout () {
        firebaseApp.auth().signOut()
      }
    }
  }
</script>