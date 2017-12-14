<template lang="pug">
  v-layout()
    v-flex(lg4 offset-lg4)
      v-layout
        v-flex(sm4 md2 offset-sm5)
          v-card.mt-1.mb-1.text-xs-center(dark)
            v-card-text(style="height: 67px; cursor: pointer;" v-if="type === text")
              div.headline {{question}}
            v-card-text(style="cursor:pointer;" v-if="type === sound" @click="speakClicked")
              v-icon(large) play_arrow
</template>

<script>
import { TEXT, SOUND } from '@/store/Games/constants'
import speaker from '@/mixins/speaker'
import { VOICE } from '@/store/Settings/constants'

import { mapGetters } from 'vuex'

export default {
  name: 'KatakanaGameRoundQuestion',
  mixins: [speaker],
  props: {
    question: {
      required: true,
      type: String
    },
    type: {
      required: true,
      type: String
    }
  },
  data: () => ({
    text: TEXT,
    sound: SOUND
  }),
  computed: {
    ...mapGetters({
      voice: VOICE
    })
  },
  methods: {
    speakClicked () {
      if (!this.speaking) {
        this.speak(this.voice, this.question)
      }
    }
  }
}
</script>
