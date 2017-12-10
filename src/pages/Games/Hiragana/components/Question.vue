<template lang="pug">
  v-layout()
    v-flex(lg4 offset-lg4)
      v-layout
        v-flex(sm4 md2 offset-sm5)
          v-card.mt-1.mb-1.text-xs-center(dark)
            v-card-text
              h2 {{question}}
</template>

<script>

export default {
  name: 'HiraganaGameRoundQuestion',
  props: {
    question: {
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
