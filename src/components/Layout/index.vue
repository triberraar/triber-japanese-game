<template lang="pug">
  span
    SideMenu
    TopMenu
    v-content
      v-container(fluid fill-height)
        router-view
</template>

<script>
  import SideMenu from '@/components/Layout/SideMenu'
  import TopMenu from '@/components/Layout/TopMenu'

  export default {
    name: 'layout',
    data: () => ({ }),
    components: {
      SideMenu,
      TopMenu
    }
  }
</script>

