<template lang="pug">
  v-content()
    TopMenu
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

