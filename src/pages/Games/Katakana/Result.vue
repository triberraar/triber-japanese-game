<template lang="pug">
  Result(
    :results="results"
    :progress="progress"
  )

</template>

<script>
import { mapGetters } from 'vuex'
import { RESULTS, PROGRESS } from '@/store/Games/constants'
import { NAMESPACE } from '@/store/Games/Katakana/constants'
import Result from '@/components/Games/Result'

export default {
  name: 'KatakananaGameResultPage',
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
