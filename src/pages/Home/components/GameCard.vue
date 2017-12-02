<template lang="pug">
  v-flex(xs12 sm6 lg3 xl2)
    v-card
      v-card-title(primary-title)
        div
          div.headline {{title}}
          span.grey--text {{subTitle}}
      v-card-actions
        v-spacer
        v-btn(icon @click="show = !show")
          v-icon {{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
      v-slide-y-transition
        v-card-text(v-show="show") {{description}}
</template>

<script>
export default {
  name: 'gameCard',
  props: {
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  data: () => ({
    show: false
  })
}
</script>

