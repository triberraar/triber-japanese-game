<template lang="pug">
  span
    TopMenu
    v-content
      router-view
</template>

<script>
  import TopMenu from './TopMenu'

  export default {
    name: 'BaseLayout',
    data: () => ({ }),
    components: {
      TopMenu
    }
  }
</script>

