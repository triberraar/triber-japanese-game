<template lang="pug">
  v-container(fluid grid-list-md)
    v-layout(row wrap)
      v-flex(offset-lg1 lg10 sm12)
        v-layout(row)
          v-flex(xs12)
            v-alert(color="error" icon="warning" :value="!configured" outline)
              span
                | The settings are not configured. Go to 
                router-link(:to="routes.settings") settings
                | 
                | to fix this.
            v-alert(color="warning" icon="priority_high" :value="configured && !fullySupported") Your browser doesn't support everything, time to upgrade? Also safari ain't no browser

        v-layout(row wrap)
          GameCard(v-for="game in games" 
            :id="game.id"
            :key="game.id" 
            :title="game.title" 
            :subTitle="game.subTitle"
            :description="game.description"
            :play="game.play")
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import { SETTINGS } from '@/router/constants'
import { HIRAGANA,
KATAKANA,
NUMBERS,
TIME,
DATES,
COUNTERS,
PLAY
} from '@/store/Games/constants'
import { CONFIGURED, FULLY_SUPPORTED } from '@/store/Settings/constants'
import { NAMESPACE as HIRAGANA_NAMESPACE } from '@/store/Games/Hiragana/constants'
import { NAMESPACE as KATKANA_NAMESPACE } from '@/store/Games/Katakana/constants'
import { NAMESPACE as DATES_NAMESPACE } from '@/store/Games/Dates/constants'
import { NAMESPACE as TIME_NAMESPACE } from '@/store/Games/Time/constants'
import { NAMESPACE as COUNTERS_NAMESPACE } from '@/store/Games/Counters/constants'
import { NAMESPACE as NUMBERS_NAMESPACE } from '@/store/Games/Numbers/constants'
import GameCard from './components/GameCard'

export default {
  name: 'HomePage',
  data: () => ({
    routes: {
      settings: {
        name: SETTINGS
      }
    }
  }),
  computed: {
    ...mapGetters({
      configured: CONFIGURED,
      fullySupported: FULLY_SUPPORTED
    }),
    games () {
      return [
        {
          id: KATAKANA,
          title: 'Hiragana',
          subTitle: 'Learn the characters',
          description: 'Learn the ひらがな characters by playing this game. From english to japanese, by using sound or character.',
          play: this.playHiragana
        }, {
          id: HIRAGANA,
          title: 'Katakana',
          subTitle: 'Learn the characters',
          description: 'Learn the カタカナ characters by playing this game. From english to japanese or visa versa, by using sound or character.',
          play: this.playKatakana
        }, {
          id: NUMBERS,
          title: 'Numbers',
          subTitle: 'Learn the numbers',
          description: 'Learn to count in japanese. From english to japanese, by using characters or speech.',
          play: this.playNumbers
        }, {
          id: DATES,
          title: 'Dates',
          subTitle: 'Learn the calendar',
          description: 'Learn to say the date in japanese. From english to japanese, by using characters or speech.',
          play: this.playDates
        }, {
          id: TIME,
          title: 'Time',
          subTitle: 'Learn to tell time',
          description: 'Learn to tell the time in japanese. From english to japanese, by using characters or speech.',
          play: this.playTime
        }, {
          id: COUNTERS,
          title: 'Counters',
          subTitle: 'Learn to count stuff',
          description: 'Learn to count things in japanese. From english to japanese, by using characters or speech.',
          play: this.playCounters
        }
      ]
    }
  },
  methods: {
    ...mapActions(HIRAGANA_NAMESPACE, {
      playHiragana: PLAY
    }),
    ...mapActions(KATKANA_NAMESPACE, {
      playKatakana: PLAY
    }),
    ...mapActions(DATES_NAMESPACE, {
      playDates: PLAY
    }),
    ...mapActions(TIME_NAMESPACE, {
      playTime: PLAY
    }),
    ...mapActions(COUNTERS_NAMESPACE, {
      playCounters: PLAY
    }),
    ...mapActions(NUMBERS_NAMESPACE, {
      playNumbers: PLAY
    })
  },
  components: {
    GameCard
  }
}
</script>

