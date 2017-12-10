<template lang="pug">
  v-container(fluid grid-list-md)
    v-layout()
      v-flex(lg4 offset-lg4)
        v-layout
          v-flex(sm4 md2 offset-sm5)
            v-card.mt-1.mb-1.text-xs-center(dark)
              v-card-text
                h2 mi
    v-layout()
      v-flex(lg4 offset-lg4)
        v-flex(xs12)
          v-layout(justify-space-around)
            v-flex(xs4 lg2)
              v-card.mb-1.text-xs-center.animated.infinite
                v-card-text
                  h3 mi
            v-flex(xs4 lg2)
              v-card.mb-1.text-xs-center.animated.infinite
                v-card-text
                  h3 mi
            v-flex(xs4 lg2)
              v-card.mb-1.text-xs-center.animated.infinite
                v-card-text
                  h3 m
</template>

<script>
import { mapGetters } from 'vuex'
import { NAMESPACE } from '@/store/Games/Hiragana/constants'
import { CURRENT_ROUND, QUESTION, POSSIBILITIES } from '@/store/Games/constants'

export default {
  name: 'HiraganaGameRoundPage',
  data: () => ({
  }),
  computed: {
    ...mapGetters(NAMESPACE, {
      currentRound: CURRENT_ROUND,
      question: QUESTION,
      possibilities: POSSIBILITIES
    })
  },
  methods: {
  }
}
</script>
