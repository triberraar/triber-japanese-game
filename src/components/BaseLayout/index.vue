<template lang="pug">
  v-content()
    TopMenu
    v-snackbar(:color="type" v-model="showSnackbar") {{message}}
      v-btn(@click="swallow" dark flat) Close
    router-view
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'

  import TopMenu from './TopMenu'
  import { SWALLOW, MESSAGE, TYPE, SHOWN } from '@/store/Snackbar/constants'

  export default {
    name: 'BaseLayout',
    data: () => ({ }),
    computed: {
      ...mapGetters({
        message: MESSAGE,
        type: TYPE,
        shown: SHOWN
      }),
      showSnackbar: {
        get () {
          return this.shown
        },
        set (v) {
          if (!v) {
            this.swallow()
          }
        }
      }
    },
    methods: {
      ...mapMutations({
        swallow: SWALLOW
      })
    },
    components: {
      TopMenu
    }
  }
</script>

