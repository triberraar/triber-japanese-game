<template lang="pug">
  Config(title="Katakana Game"
    :gameModes="gameModes" 
    :ongoing="ongoing"
    :finished="finished"
    :start="start"
    :continue="continueGame"
    :finish="finish")
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { NAMESPACE, GAME_MODES } from '@/store/Games/Katakana/constants'
import { START, CONTINUE, ONGOING, FINISH, FINISHED } from '@/store/Games/constants'
import Config from '@/components/Games/Config'

export default {
  name: 'KatakanaGameConfigPage',
  data: () => ({
    gameModes: GAME_MODES
  }),
  computed: {
    ...mapGetters(NAMESPACE, {
      ongoing: ONGOING,
      finished: FINISHED
    })
  },
  methods: {
    ...mapMutations(NAMESPACE, {
      start: START,
      continueGame: CONTINUE,
      finish: FINISH
    })
  },
  components: {
    Config
  }
}
</script>
