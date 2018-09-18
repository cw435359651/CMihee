<template>
  <div id="header" ref="header">
      <div class="icon iconfont  icon-923caidan_SCMliucheng" @click="hideShowLeft" title="菜单"></div>
      <div class="userNameBox">
        <div class="userName" :title= "userName">{{ userName }}</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: ['screenWidth'],
  data () {
    return {
      userName: 'CMihee'
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      if (this.screenWidth < 1100) {
        this.$refs.header.style.paddingLeft = '0px'
      } else {
        this.$refs.header.style.paddingLeft = '240px'
      }
    },
    hideShowLeft () {
      alert(1)
    }
  },
  watch: {
    screenWidth () {
      this.init()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #header{
        width: 100%;
        height: 60px;
        background: #4e6cf0;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 2;
        color: #fff;
        transition: .3s ease;
        overflow: hidden;
        opacity: 1;
        padding-left: 240px;
        box-sizing: border-box;
    }
    #header:after{
      content: "";
      display: block;
      clear: both;
    }
    .icon{
      height: 60px;
      width: 60px;
      border-radius: 60px;
      line-height: 60px;
      text-align: center;
      color: #fff;
      cursor: pointer;
      font-size: 24px;
      transition: 0.3s ease;
      float: left;
    }
    .icon:hover{
      transform: rotate(180deg);
      /* transform: rotateY(180deg) */
    }
    .userNameBox{
      position: relative;
      height: 60px;
      text-align: center;
      z-index: -1;
      top: 0;
      left: 0;
    }
    .userName{
      height: 60px;
      line-height: 60px;
      font-weight: 400;
      font-size: 24px;
      position: absolute;
      left: 0;
      right: 0;
    }
</style>
