<template lang="pug">
  v-container(fluid grid-list-md)
    Question(:question="question" :type="currentRoundGameMode")
    v-layout(row wrap)
      v-flex(lg4 offset-lg4)
        v-layout()
          v-flex(xs12)
            v-layout(row wrap)
              Possibility(v-for="(item, index) in possibilities" :key="index" :possibility="item")
              
</template>

<script>
import { mapGetters } from 'vuex'
import { NAMESPACE } from '@/store/Games/Hiragana/constants'
import { CURRENT_ROUND, QUESTION, POSSIBILITIES, CURRENT_ROUND_GAME_MODE } from '@/store/Games/constants'
import Question from './components/Question'
import Possibility from './components/Possibility'

export default {
  name: 'HiraganaGameRoundPage',
  data: () => ({
  }),
  computed: {
    ...mapGetters(NAMESPACE, {
      currentRound: CURRENT_ROUND,
      question: QUESTION,
      possibilities: POSSIBILITIES,
      currentRoundGameMode: CURRENT_ROUND_GAME_MODE
    })
  },
  methods: {
  },
  components: {
    Question,
    Possibility
  }
}
</script>
