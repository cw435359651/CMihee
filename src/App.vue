<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  metaInfo() {
    return {
      meta: this.metas
    }
  },
  data() {
    return {
      terminalType: 0, // 0 ios 1 安卓 2 pc
      isWx: false,
      metas: []
    }
  },
  created() {
    this.icoCreate(require('./assets/img/logoS.png'))
    this.metas = [{
      name: 'keyWords',
      content: ''
    }, {
      name: 'description',
      content: ''
    }]
  },
  methods: {
    icoCreate(icoUrl) {
      var link = document.createElement('link')
      link.type = 'image/x-icon'
      link.rel = 'shortcut icon'
      link.href = icoUrl
      document.getElementsByTagName('head')[0].appendChild(link)
    },
    isWeixin() {
      var ua = window.navigator.userAgent.toLowerCase()
      if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        this.isWx = true
      } else {
        this.isWx = false
      }
    },
    getTerminal() {
      var ua = navigator.userAgent.toLowerCase()
      if (/iphone|ipad|ipod|macintosh|mac os x/.test(ua)) {
        this.terminalType = 0
      } else if (/android/.test(ua)) {
        this.terminalType = 1
      } else {
        this.terminalType = 2
      }
    }
  }
}
</script>
<style lang="less">
@import url('assets/css/reset.less');
</style>
