<template lang="pug">
  v-container(fluid fill-height)
    v-layout
      v-flex(xs12)
        v-card()
          v-card-title(primary-title)
            h3.headline.mb-0 Counters Game
          v-divider
          v-alert(:value='ongoing' color='info' outline) You already have a game ongoing, 
            v-btn.ma-0(@click="continueClicked" flat color="primary") continue?
          v-alert(:value='finished' color='info' outline) You finished a game, 
            v-btn.ma-0(@click="finishClicked" flat color="primary") score?
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
                   :items="numberOfRoundsOptions"
                   v-model="numberOfRounds"
                   label="Number of Rounds"
                   required
                   :rules="numberOfRoundsRules"
                 )
              v-layout(row wrap)
                v-flex(xs10 md5 lg4 xl3)
                  v-select(
                    label="Counters"
                    :items="counterOptions"
                    v-model="counters"
                    multiple
                    chips
                    required
                    item-text="text"
                    item-value="id"
                    return-object
                    :rules="countersRules")
              v-layout(row wrap)
                v-btn(color="primary" @click="playClicked" :disabled="!valid") Play
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { NAMESPACE, GAME_MODES, COUNTERS } from '@/store/Games/Counters/constants'
import { START, CONTINUE, ONGOING, FINISH, FINISHED } from '@/store/Games/constants'

export default {
  name: 'CountersGameConfigPage',
  data: () => ({
    numberOfRoundsOptions: [ 5, 10, 15, 25 ],
    gameMode: null,
    numberOfRounds: null,
    counterOptions: COUNTERS,
    counters: [],
    gameModes: GAME_MODES,
    gameModeRules: [
      v => !!v || 'Game mode is required'
    ],
    numberOfRoundsRules: [
      v => !!v || 'Number of rounds is required'
    ],
    countersRules: [
      v => (!!v && v.length > 0) || 'Counters are required'
    ],
    items: [],
    valid: true
  }),
  computed: {
    ...mapGetters(NAMESPACE, {
      ongoing: ONGOING,
      finished: FINISHED
    })
  },
  methods: {
    ...mapMutations(NAMESPACE, {
      start: START,
      continue: CONTINUE,
      finish: FINISH
    }),
    playClicked () {
      if (this.$refs.form.validate()) {
        this.start({gameMode: this.gameMode, numberOfRounds: this.numberOfRounds, counters: this.counters})
      }
    },
    continueClicked () {
      this.continue()
    },
    finishClicked () {
      this.finish()
    }
  },
  components: {

  }
}
</script>
