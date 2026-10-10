/**
 * 廿四·候 · App 入口
 * 云开发初始化 + 全局主题上下文
 */
const config = require('./config')

App({
  globalData: {
    // 当前节气上下文（由 home 页写入，terms/me 页读取）
    currentTerm: null,
    // 内容库是否来自云端（false = 静态降级）
    fromCloud: false
  },

  onLaunch() {
    if (!wx.cloud) {
      console.error('基础库过低，请升级至 2.2.3 以上以使用云能力')
      return
    }
    wx.cloud.init({
      env: config.CLOUD_ENV,
      traceUser: true
    })
  }
})
