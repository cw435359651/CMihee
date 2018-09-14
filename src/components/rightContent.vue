<template>
  <div id="conteneBox" ref="conteneBox"></div>
</template>

<script>
export default {
  name: 'rightContent',
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
        this.$refs.conteneBox.style.paddingLeft = '0px'
      } else {
        this.$refs.conteneBox.style.paddingLeft = '240px'
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
    #conteneBox{
        box-sizing: border-box;
        width: 100%;
        padding-left: 240px;
        height: 100%;
        background: #fafafa;
        position: relative;
        left: 0;
        top: 0;
        color: #333;
        transition: .3s ease;
    }
</style>
