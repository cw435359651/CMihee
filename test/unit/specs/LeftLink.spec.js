/* eslint-disable */

import Vue from 'vue'
import LeftLink from '@/components/leftLink'

describe('leftLink.vue', () => {
  // 检查mounted
  it('has a mounted hook', () => {
    expect(typeof LeftLink.mounted).to.eql('function')
  })
  //组件实例
  const Constructor = Vue.extend(LeftLink)
  // 检查msg
  it('checked userName', () => {
    expect(LeftLink.userName).to.eql('CMihee')
  })
  //挂载组件
  const vm = new Constructor().$mount()
  it('userName should in page', () => {
    expect(vm.$el.querySelector('.userName').textContent)
      .toEqual('CMihee')
  })
})
