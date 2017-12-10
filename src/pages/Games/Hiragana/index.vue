<template lang="pug">
  v-container(fluid fill-height)
    v-layout
      v-flex(xs12)
        v-card()
          v-card-title(primary-title)
            h3.headline.mb-0 Hiragana Game
          v-divider
          v-alert(:value='ongoing' color='info' outline) You already have a game ongoing, 
            v-btn.ma-0(@click="continueClicked" flat color="primary") continue?
          v-card-text
            v-form(v-model="valid" ref="form" lazy-validation)
              v-layout(row wrap)
                v-flex(xs10 md5 lg4 xl3)
                  v-select(
                    :items="gameModes"
                    v-model="gameMode"
                    label="Game mode"
                    required
                    :rules="gameModeRules"
                  )
              v-layout(row wrap)
                v-flex(xs10 md5 lg4 xl3)
                 v-select(
                   :items="numberOfRoundsOptions",
                   v-model="numberOfRounds"
                   label="Number of Rounds"
                   required
                   :rules="numberOfRoundsRules"
                 )
              v-layout(row wrap)
                v-btn(color="primary" @click="play" :disabled="!valid") Play
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { NAMESPACE } from '@/store/Games/Hiragana/constants'
import { START, CONTINUE, ONGOING } from '@/store/Games/constants'
import { HIRAGANA_TO_ROMAJI, SOUND_TO_HIRAGANA, ROMAJI_TO_HIRAGANA, RANDOM } from './constants'
import { NUMBER_OF_ROUNDS } from '../constants'

export default {
  name: 'HiraganaGamePage',
  data: () => ({
    gameModes: [
      { text: 'Hiragana to Romaji', value: HIRAGANA_TO_ROMAJI },
      { text: 'Sound to Hiragana', value: SOUND_TO_HIRAGANA },
      { text: 'Romaji to Hiragana', value: ROMAJI_TO_HIRAGANA },
      { text: 'Random', value: RANDOM }
    ],
    numberOfRoundsOptions: NUMBER_OF_ROUNDS,
    gameMode: null,
    numberOfRounds: null,
    gameModeRules: [
      v => !!v || 'Game mode is required'
    ],
    numberOfRoundsRules: [
      v => !!v || 'Number of rounds is required'
    ],
    valid: true
  }),
  computed: {
    ...mapGetters(NAMESPACE, {
      ongoing: ONGOING
    })
  },
  methods: {
    ...mapMutations(NAMESPACE, {
      start: START,
      continue: CONTINUE
    }),
    play () {
      if (this.$refs.form.validate()) {
        this.start({gameMode: this.gameMode, numberOfRounds: this.numberOfRounds})
      }
    },
    continueClicked () {
      this.continue()
    }
  }
}
</script>
