<template lang="pug">
  Result(
    :results="results"
    :progress="progress"
  )

              
</template>

<script>
import { mapGetters } from 'vuex'
import { RESULTS, PROGRESS } from '@/store/Games/constants'
import { NAMESPACE } from '@/store/Games/Kana/constants'
import Result from '@/components/Games/Result'

export default {
  name: 'KanaGameResultPage',
  computed: {
    ...mapGetters(NAMESPACE, {
      results: RESULTS,
      progress: PROGRESS
    })
  },
  components: {
    Result
  }
}
</script>
