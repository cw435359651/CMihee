<template>
  <div id="header">
      <div class="userName">{{ userName }}</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      userName: 'CMihee'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #header{
        width: 100%;
        height: 260px;
        background: #4e6cf0;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 2;
        color: #fff;
        transition: .3s ease;
        overflow: hidden;
        opacity: 1;
    }
</style>
