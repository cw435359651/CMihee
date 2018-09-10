<template>
  <div class="leftCon">
    <div class="leftHeader">
      <div class="userName">{{ userName }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'leftLink',
  data () {
    return {
      userName: 'CMihee'
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
  }
  .leftHeader{
    height: 260px;
    background: #4e6cf0;
  }

</style>
