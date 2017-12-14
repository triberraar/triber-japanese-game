<template lang="pug">
  v-container.pt-0.px-0(fluid grid-list-md)
    v-progress-linear.mt-0(v-model="progress" color="info")
    KQuestion(:question="question" :type="currentRoundGameMode")
    v-layout(row wrap)
      v-flex(lg4 offset-lg4)
        v-layout()
          v-flex(xs12)
            v-layout(row wrap)
              KPossibility(v-for="(item, index) in possibilities" :key="index" :possibility="item")
              
</template>

<script>
import { mapGetters } from 'vuex'
import { NAMESPACE } from '@/store/Games/Katakana/constants'
import { QUESTION, POSSIBILITIES, CURRENT_ROUND_GAME_MODE, PROGRESS } from '@/store/Games/constants'
import KQuestion from './components/Question'
import KPossibility from './components/Possibility'

export default {
  name: 'KatakanaGameRoundPage',
  data: () => ({
  }),
  computed: {
    ...mapGetters(NAMESPACE, {
      question: QUESTION,
      possibilities: POSSIBILITIES,
      currentRoundGameMode: CURRENT_ROUND_GAME_MODE,
      progress: PROGRESS
    })
  },
  methods: {
  },
  components: {
    KQuestion,
    KPossibility
  }
}
</script>
