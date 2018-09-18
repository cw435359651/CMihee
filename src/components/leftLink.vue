<template>
  <div class="leftCon" ref="leftCon">
    <div class="leftHeader">
      <div class="userName">{{ userName }}</div>
    </div>
    <div class="itemBox" ref="scrollWap">
      <div class="list">
        <a class="item" :target="val.target" :href="val.href" v-for="(val,key) in linkArr" :key="key" :title="val.title">
          <i class="iconfont" :class="val.icon"></i>
          <span>{{ val.name }}</span>
        </a>
      </div>
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
      userName: 'CMihee',
      linkArr: [
        {icon: 'icon-wenzhang2', name: 'Blog', title: '博客', href: 'javascript:;'},
        {icon: 'icon-biaoqian', name: 'Mark', title: '标签', href: 'javascript:;'},
        {icon: 'icon-pachong-', name: 'Road', title: '爬坑之路', href: 'javascript:;'},
        {icon: 'icon-github', name: 'Github', title: 'github', href: 'https://github.com/cw435359651', target: '_blanck'},
        {icon: 'icon-liuyan', name: 'BBS', title: '留言', href: 'javascript:;'}
      ]
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
  .list .item{
    display: block;
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
  .list .item:hover{
    background: #ddd;
  }
  .list .item:hover i{
    transition: .3s ease;
    transform: rotateY(180deg);
  }
  .list .item:active{
    background: #ccc;
  }
  .list .item i{
    display: block;
    width: 15%;
    text-align: center;
    float: left;
    font-size: 22px;
    transition: 1s ease;
  }
  .list .item span{
    display: block;
    float: left;
    padding-left: 12px;
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
