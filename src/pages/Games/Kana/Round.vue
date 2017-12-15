<template lang="pug">
  v-container.pt-0.px-0(fluid grid-list-md)
    v-progress-linear.mt-0(v-model="progress" color="info")
    Question(:question="question" :type="currentRoundGameMode")
    v-layout(row wrap)
      v-flex(lg4 offset-lg4)
        v-layout()
          v-flex(xs12)
            v-layout(row wrap)
              Possibility(v-for="(item, index) in possibilities" 
                :key="index" 
                :possibility="item" 
                :answer="answer" 
                :hasBeenAttempted="hasBeenAttempted")
              
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { NAMESPACE } from '@/store/Games/Kana/constants'
import { QUESTION, POSSIBILITIES, CURRENT_ROUND_GAME_MODE, PROGRESS, HAS_BEEN_ATTEMPTED, ANSWER } from '@/store/Games/constants'
import Question from '@/components/Games/Question'
import Possibility from '@/components/Games/Possibility'

export default {
  name: 'KanaGameRoundPage',
  data: () => ({
  }),
  computed: {
    ...mapGetters(NAMESPACE, {
      question: QUESTION,
      possibilities: POSSIBILITIES,
      currentRoundGameMode: CURRENT_ROUND_GAME_MODE,
      progress: PROGRESS,
      hasBeenAttempted: HAS_BEEN_ATTEMPTED
    })
  },
  methods: {
    ...mapMutations(NAMESPACE, {
      answer: ANSWER
    })
  },
  components: {
    Question,
    Possibility
  }
}
</script>
