<template>
  <div id="app">
    <router-view></router-view>
    <man-tab-bar/>
  </div>
</template>

<script>
  import ManTabBar from './components/ManTabBar.vue'
  export default {
    name: 'App',
    components: {
      ManTabBar,
    },
  }
</script>

<style>
  @import url('./assets/css/baseCss.css');
</style>
