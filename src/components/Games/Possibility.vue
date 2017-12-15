<template lang="pug">
   v-flex(xs6 sm6 md6 lg4)
      v-card.mb-1.text-xs-center.animated(:class="stylings")
        v-card-text(@click="answerClicked" style="cursor:pointer;")
          h3 {{possibility}}
</template>

<script>
export default {
  name: 'HiraganaGameRoundPossibility',
  props: {
    possibility: {
      required: true,
      type: String
    },
    answer: {
      required: true,
      type: Function
    },
    hasBeenAttempted: {
      required: true,
      type: Function
    }
  },
  data: () => ({
  }),
  computed: {
    stylings () {
      return {
        error: this.hasBeenAttempted(this.possibility),
        flash: this.hasBeenAttempted(this.possibility)
      }
    }
  },
  methods: {
    answerClicked () {
      this.answer(this.possibility)
    }
  }
}
</script>
