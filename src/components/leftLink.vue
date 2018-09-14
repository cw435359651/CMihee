<template>
  <div class="leftCon" ref="leftCon">
    <div class="leftHeader">
      <div class="userName">{{ userName }}</div>
    </div>
    <div class="itemBox" ref="scrollWap">
      <ul class="list">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'leftLink',
  props: ['screenWidth'],
  data () {
    return {
      userName: 'CMihee'
    }
  },
  mounted () {
    this.init()
    this.initBScroll()
  },
  methods: {
    init () {
      if (this.screenWidth < 1100) {
        this.$refs.leftCon.style.left = '-240px'
      } else {
        this.$refs.leftCon.style.left = '0px'
      }
    },
    initBScroll () {
      if (!this.scroll) {
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.scrollWap, {})
        })
      } else {
        this.scroll.refresh()
      }
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
  .leftCon{
    width: 240px;
    z-index: 3;
    position: fixed;
    box-shadow: 0 1px 6px rgba(0,0,0,0.117647), 0 1px 4px rgba(0,0,0,0.117647);
    top: 0;
    bottom: 0;
    transition: .3s ease;
    background: #fafafa;
    overflow: hidden;
    padding-top: 260px;
    padding-bottom: 50px;
  }
  .leftHeader{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 260px;
    background: #4e6cf0;
  }
  .itemBox{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .list{
    position: relative;
  }
  .list li{
    width: 100%;
    color: #333;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    padding-left: 12px;
    box-sizing: border-box;
    font-weight: bold;
    cursor: pointer;
    transition: .3s ease;
  }
  .list li:hover{
    background: #ddd;
  }
  .list li:active{
    background: #ccc;
  }
  .footer{
    width: 100%;
    height: 50px;
    background: yellow;
    position: absolute;
    left: 0;
    bottom: 0;
  }

</style>
