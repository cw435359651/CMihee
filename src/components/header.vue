<template>
  <div class="header">
    <div class="logo">
      <a href="/">
        <img src="../assets/img/index_logo.png"
             alt="北京智慧流" />
      </a>
    </div>
    <div class="menu">
      <a href="/"
         :class="getCur() == 'Index' ? 'cur':''">首页</a>
      <a href="/intelligentDigitalTeaching"
         :class="getCur() == 'IntelligentDigitalTeaching' ? 'cur':''">智能数字教辅</a>
      <a href="/"
         class="disabled">产品下载</a>
      <a href="/cooperation"
         :class="getCur() == 'Cooperation' ? 'cur':''">出版社合作</a>
      <a href="/"
         class="disabled">版飞跃数字出版云</a>
      <a href="/"
         class="disabled">教师服务</a>
      <a href="/"
         class="disabled">关于我们</a>
    </div>
    <div class="subMenu">
      <span>|</span>
      <a href="/"
         class="disabled">教育公益</a>
      <span>|</span>
      <a href="/"
         class="disabled">党建专栏</a>
      <span>|</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {

    }
  },
  created() {
  },
  methods: {
    getCur() {
      return this.$route.name
    }
  }
}
</script>
<style lang="less" scoped>
.header {
  padding: 0 40px;
  box-sizing: border-box;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  .logo {
    margin-top: -10px;
    img {
      height: 40px;
    }
  }
  .menu {
    margin-left: 50px;
    flex: 1;
    overflow: hidden;
    a {
      font-size: 16px;
      color: #fff;
      margin-right: 25px;
      transition: transform 0.3s ease-in-out;
      &:last-child {
        margin-right: 0;
      }
      &.cur {
        font-size: 18px;
        font-weight: bold;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
      }
      &:hover {
        color: yellow;
      }
    }
  }
  .subMenu {
    color: #fff;
    a {
      font-size: 16px;
      color: #fff;
      padding: 0 10px;
      &.cur {
        font-weight: bold;
      }
      &:hover {
        color: yellow;
      }
    }
  }
  a.disabled {
    opacity: 0.8 !important;
    pointer-events: none;
  }
}
</style>
