<template lang="pug">
  v-flex(xs12 sm6 lg3 xl2)
    v-card
      v-card-title(primary-title)
        div
          div.headline {{title}}
          span.grey--text {{subTitle}}
      v-card-actions
        v-btn(flat color="orange" @click="playClicked") Play
        v-spacer
        v-btn(icon @click="show = !show")
          v-icon {{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
      v-slide-y-transition
        v-card-text(v-show="show") {{description}}
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import { CONFIGURED } from '@/store/Settings/constants'
import { POP } from '@/store/Snackbar/constants'

export default {
  name: 'GameCard',
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    play: {
      type: Function,
      required: true
    }
  },
  data: () => ({
    show: false
  }),
  computed: {
    ...mapGetters({
      configured: CONFIGURED
    })
  },
  methods: {
    ...mapMutations({
      popSnackbar: POP
    }),
    playClicked () {
      debugger
      if (!this.configured) {
        debugger
        this.popSnackbar({message: 'Configuration error', type: 'error'})
        return
      }
      this.play()
    }
  }
}
</script>

