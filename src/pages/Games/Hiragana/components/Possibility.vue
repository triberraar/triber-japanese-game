<template lang="pug">
   v-flex(xs6 sm6 md6 lg4)
      v-card.mb-1.text-xs-center.animated.infinite
        v-card-text
          h3 {{possibility}}
</template>

<script>

export default {
  name: 'HiraganaGameRoundPossibility',
  props: {
    possibility: {
      required: true,
      type: String
    }
  },
  data: () => ({
  }),
  computed: {
  },
  methods: {
  }
}
</script>
