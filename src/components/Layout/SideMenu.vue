<template lang="pug">
  v-navigation-drawer(fixed clipped app v-model="show")
    v-list(dense)
      v-list-tile(@click="")
        v-list-tile-action
          v-icon translate
        v-list-tile-content
          v-list-tile-title Hiragana
      v-list-tile(@click="")
        v-list-tile-action
          v-icon translate
        v-list-tile-content
          v-list-tile-title Katakana
      v-divider
      v-list-tile(@click="")
        v-list-tile-action
          v-icon mdi-calculator
        v-list-tile-content
          v-list-tile-title Numbers
      v-divider
      v-list-tile(@click="")
        v-list-tile-action
          v-icon date_range
        v-list-tile-content
          v-list-tile-title Dates
      v-list-tile(@click="")
        v-list-tile-action
          v-icon access_time
        v-list-tile-content
          v-list-tile-title Times
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  import { SET_SIDE_MENU } from '@/store/Layout/constants'

  export default {
    data: () => ({
    }),
    computed: {
      ...mapGetters({
        showSideMenu: 'showSideMenu'
      }),
      show: {
        get () {
          return this.showSideMenu
        },
        set (v) {
        }
      }
    },
    methods: {
      ...mapMutations({
        setSideMenu: SET_SIDE_MENU
      })
    }
  }
</script>