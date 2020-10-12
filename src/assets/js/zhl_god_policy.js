import sensors from 'sa-sdk-javascript'
import config from './config'
const godPolicy = config.isTest
  ? 'https://zhl-dc.zhihuiliu.com/sa?project=default'
  : 'https://zhl-dc.zhihuiliu.com/sa?project=production2'

const zhlGodPolicy = {
  /**
   * 初始化神策
   * godPolicy String 指神策的数据库
   * use_app_track Boolean 打通APP与WEB的通道
   */
  init() {
    sensors.init({
      server_url: godPolicy,
      use_app_track: true
    })
  },
  setRegisterPage(data) {
    sensors.registerPage({
      product_id: data.product_id,
      product_name: data.product_name,
      product_type: 4,
      business_id: data.business_id,
      scope_id: data.scope_id,
      scope_name: data.scope_name
    })
  },
  /**
   * 用户登录神策
   * userId String 用户ID
   */
  login(userId) {
    if (typeof userId === 'string') {
      sensors.login(userId)
    } else {
      alert('warning：神策用户ID格式错误')
    }
  },
  /**
   * 业务内发送神策运营数据
   * options Object
   * options.key String  神策事件名称
   * options.data Object 神策事件属性
   */
  sendData(options) {
    if (Object.prototype.toString.call(options.data) === '[object Object]' && typeof options.key === 'string') {
      sensors.track(options.key, options.data)
    } else {
      alert('warning：神策发送数据格式错误')
    }
  }
}
zhlGodPolicy.init()
export default zhlGodPolicy
