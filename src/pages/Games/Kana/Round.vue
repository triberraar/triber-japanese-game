<template lang="pug">
  Round(
    :question="question"
    :possibilities="possibilities"
    :currentRoundGameMode="currentRoundGameMode"
    :progress="progress"
    :hasBeenAttempted="hasBeenAttempted"
    :answer="answer"
  )
              
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { NAMESPACE } from '@/store/Games/Kana/constants'
import { QUESTION, POSSIBILITIES, CURRENT_ROUND_GAME_MODE, PROGRESS, HAS_BEEN_ATTEMPTED, ANSWER } from '@/store/Games/constants'
import Round from '@/components/Games/Round'

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
    Round
  }
}
</script>
