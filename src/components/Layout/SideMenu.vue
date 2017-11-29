<template lang="pug">
  v-navigation-drawer(fixed clipped app permanent)
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
  import { mapGetters } from 'vuex'

  export default {
    data: () => ({
    }),
    computed: {
      ...mapGetters({
        showSideMenu: 'showSideMenu'
      })
    }
  }
</script>