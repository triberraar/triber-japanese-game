<template lang="pug">
  v-container.pt-0.px-0(fluid grid-list-md)
    v-progress-linear.mt-0(v-model="progress" color="info")
    v-layout
      v-flex(xs12 md8 offset-md2 lg6 offset-lg3 )
        v-card()
          v-card-title(primary-title)
            div.headline Your results
          v-divider
          v-list(two-line)
            v-list-tile(avatar v-for="(result, index) in results" :key="index")
              v-list-tile-avatar
                v-icon.red(v-if="result.attempts > 1") clear
                v-icon.success(v-else) check
              v-list-tile-content
                v-list-tile-title {{result.question}}
                v-list-tile-sub-title Number of attempts: {{result.attempts}} ({{result.answers}})
              v-list-tile-action
                v-btn(icon ripple @click="speakClicked(result.kana)")
                  v-icon play_arrow

              
</template>

<script>
import { mapGetters } from 'vuex'
import { VOICE } from '@/store/Settings/constants'
import speaker from '@/mixins/speaker'

export default {
  name: 'GameResultPage',
  mixins: [speaker],
  props: {
    results: {
      required: true,
      type: Array
    },
    progress: {
      required: true,
      type: Number
    }
  },
  computed: {
    ...mapGetters({
      voice: VOICE
    })
  },
  methods: {
    speakClicked (message) {
      if (!this.speaking) {
        this.speak(this.voice, message)
      }
    }
  }
}
</script>
