<template lang="pug">
  v-toolbar(color="blue darken-3" dark app clipped-left fixed)
    v-toolbar-title
      v-btn(icon)
        v-icon home
      span.hidden-xs-only Triber japanese games
    div.d-flex.align-center(style="margin-left: auto")
      v-btn(icon)
        v-icon settings
      v-btn(icon)
        v-avatar.teal(size="32px")
          span.white--text.headline U
</template>

<script>
  export default {
    data: () => ({
    })
  }
</script>