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
            :key="game.title" 
            :title="game.title" 
            :subTitle="game.subTitle"
            :description="game.description")
</template>

<script>
import { mapGetters } from 'vuex'

import { SETTINGS } from '@/router/constants'
import { CONFIGURED, FULLY_SUPPORTED } from '@/store/Settings/constants'
import GameCard from './components/GameCard'

export default {
  name: 'HomePage',
  data: () => ({
    games: [
      {
        title: 'Hiragana',
        subTitle: 'Learn the characters',
        description: 'Learn the ひらがな characters by playing this game. From english to japanese, by using sound or character.'
      }, {
        title: 'Katakana',
        subTitle: 'Learn the characters',
        description: 'Learn the カタカナ characters by playing this game. From english to japanese or visa versa, by using sound or character.'
      }, {
        title: 'Numbers',
        subTitle: 'Learn the numbers',
        description: 'Learn to count in japanese. From english to japanese, by using characters or speech.'
      }, {
        title: 'Dates',
        subTitle: 'Learn the calendar',
        description: 'Learn to say the date in japanese. From english to japanese, by using characters or speech.'
      }, {
        title: 'Time',
        subTitle: 'Learn to tell time',
        description: 'Learn to tell the time in japanese. From english to japanese, by using characters or speech.'
      }, {
        title: 'Counters',
        subTitle: 'Learn to count stuff',
        description: 'Learn to count things in japanese. From english to japanese, by using characters or speech.'
      }
    ],
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
    })
  },
  components: {
    GameCard
  }
}
</script>

