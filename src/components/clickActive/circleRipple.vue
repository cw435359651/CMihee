<!--
 * @Description:
 * @Version: 1.0.3
 * @Autor: chen wei
 * @Date: 2020-04-24 09:56:03
 * @LastEditors: chen wei
 * @LastEditTime: 2020-05-12 09:29:46
 -->
<template>
  <transition name="ripple">
    <div v-if="show"
      class="mu-circle-ripple"
      :style="styles"></div>
  </transition>
</template>

<script>
// 这个组件是波纹扩散组件，完成波纹扩散的效果
export default {
  props: {
    mergeStyle: {
      type: Object,
      default() {
        return {}
      }
    },
    color: {
      type: String,
      default: ''
    },
    opacity: {
      type: Number
    }
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true
  },
  computed: {
    styles() {
      return Object.assign({}, { color: this.color, opacity: this.opacity }, this.mergeStyle)
    }
  }
}
</script>

<style scoped>
.mu-circle-ripple {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  pointer-events: none;
  user-select: none;
  border-radius: 50%;
  background-color: currentColor;
  background-clip: padding-box;
  opacity: 0.1;
}

.ripple-enter-active,
.ripple-leave-active {
  transition: transform 0.3s ease-in-out, opacity 1s ease-in-out;
}

.ripple-enter {
  transform: scale(0.2);
}

.ripple-leave-active {
  opacity: 0 !important;
}
</style>
