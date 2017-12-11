<template lang="pug">
   v-flex(xs6 sm6 md6 lg4)
      v-card.mb-1.text-xs-center.animated(:class="stylings")
        v-card-text(@click="answerClicked" style="cursor:pointer;")
          h3 {{possibility}}
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import { NAMESPACE } from '@/store/Games/Hiragana/constants'
import { ANSWER, HAS_BEEN_ATTEMPTED } from '@/store/Games/constants'

export default {
  name: 'HiraganaGameRoundPossibility',
  props: {
    possibility: {
      required: true,
      type: String
    }
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters(NAMESPACE, {
      hasBeenAttempted: HAS_BEEN_ATTEMPTED
    }),
    stylings () {
      return {
        error: this.hasBeenAttempted(this.possibility),
        flash: this.hasBeenAttempted(this.possibility)
      }
    }
  },
  methods: {
    ...mapMutations(NAMESPACE, {
      answer: ANSWER
    }),
    answerClicked () {
      this.answer(this.possibility)
    }
  }
}
</script>
