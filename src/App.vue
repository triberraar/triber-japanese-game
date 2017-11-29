<template lang="pug">
  v-app(light)
    SideMenu
    TopMenu
    v-content
      v-container(fluid fill-height)
</template>

<script>
  import SideMenu from '@/components/Layout/SideMenu'
  import TopMenu from '@/components/Layout/TopMenu'

  export default {
    name: 'triber-japanese-games',
    data: () => ({
      drawer: null
    }),
    components: {
      SideMenu,
      TopMenu
    }
  }
</script>
