<template>
  <div id="app">
    <LeftLink />
    <Header />
    <!-- <router-view/> -->
  </div>
</template>

<script>
import LeftLink from '@/components/leftLink'
import Header from '@/components/header'
export default {
  name: 'App',
  components: {
    LeftLink: LeftLink,
    Header: Header
  }
}
</script>

<style>
#app {
  font-family: "Microsoft YaHei";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
