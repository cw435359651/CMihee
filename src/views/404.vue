<template>
<div class="notFind">
  <img src="../assets/img/404.png" />
  <div class="msg">404</div>
</div>
</template>

<style lang="less" scoped>
.notFind {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
  }

  .msg {
    font-size: 24px;
    font-weight: bold;
    color: #ccc;
    letter-spacing: 2px;
    margin-top: 10px;
  }
}
</style>
