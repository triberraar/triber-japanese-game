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
import Question from './Question'
import Possibility from './Possibility'

export default {
  name: 'GameRoundPage',
  props: {
    question: {
      required: true,
      type: String
    },
    possibilities: {
      required: true,
      type: Array
    },
    currentRoundGameMode: {
      required: true,
      type: String
    },
    progress: {
      required: true,
      type: Number
    },
    hasBeenAttempted: {
      required: true,
      type: Function
    },
    answer: {
      required: true,
      type: Function
    }
  },
  components: {
    Question,
    Possibility
  }
}
</script>
