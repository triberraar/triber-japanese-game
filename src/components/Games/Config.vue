<template lang="pug">
  v-container(fluid fill-height)
    v-layout
      v-flex(xs12)
        v-card()
          v-card-title(primary-title)
            h3.headline.mb-0 {{title}}
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
export default {
  name: 'ConfigGamePage',
  props: {
    title: {
      required: true,
      type: String
    },
    gameModes: {
      required: true,
      type: Array
    },
    ongoing: {
      required: true,
      type: Boolean
    },
    finished: {
      required: true,
      type: Boolean
    },
    start: {
      required: true,
      type: Function
    },
    continue: {
      required: true,
      type: Function
    },
    finish: {
      required: true,
      type: Function
    }
  },
  data: () => ({
    numberOfRoundsOptions: [ 5, 10, 15, 25 ],
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
  methods: {
    play () {
      if (this.$refs.form.validate()) {
        this.start({gameMode: this.gameMode, numberOfRounds: this.numberOfRounds})
      }
    },
    continueClicked () {
      this.continue()
    },
    finishClicked () {
      this.finish()
    }
  }
}
</script>
