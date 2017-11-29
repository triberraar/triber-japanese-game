<template lang="pug">
  v-toolbar(color="blue darken-3" dark app clipped-left fixed)
    v-toolbar-side-icon(@click="toggleSideMenu")
    v-toolbar-title
      v-btn(icon)
        v-icon home
      span Triber japanese games
    div.d-flex.align-center(style="margin-left: auto")
      v-btn(icon)
        v-icon settings
      v-btn(icon)
        v-avatar.teal(size="32px")
          span.white--text.headline U
</template>

<script>
  import { mapMutations } from 'vuex'

  import { TOGGLE_SIDE_MENU } from '@/store/Layout/constants'

  export default {
    data: () => ({
    }),
    methods: {
      ...mapMutations({
        toggleSideMenu: TOGGLE_SIDE_MENU
      })
    }
  }
</script>