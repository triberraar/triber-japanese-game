<template lang="pug">
  span
    TopMenu
    v-content
      v-container(fluid grid-list-md)
        router-view
</template>

<script>
  import TopMenu from '@/components/Layout/TopMenu'

  export default {
    name: 'layout',
    data: () => ({ }),
    components: {
      TopMenu
    }
  }
</script>

