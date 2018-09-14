<template>
  <div id="app">
    <LeftLink :screenWidth="screenWidth" />
    <Header :screenWidth="screenWidth" />
    <RightContent :screenWidth="screenWidth" />
    <!-- <router-view/> -->
  </div>
</template>

<script>
import LeftLink from '@/components/leftLink'
import Header from '@/components/header'
import RightContent from '@/components/rightContent'
export default {
  name: 'App',
  components: {
    LeftLink: LeftLink,
    Header: Header,
    RightContent: RightContent
  },
  data () {
    return {
      screenWidth: document.body.clientWidth
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      that.screenWidth = document.body.clientWidth
    }
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
