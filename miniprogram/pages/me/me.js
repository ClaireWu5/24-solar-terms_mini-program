/**
 * 我的页（P0）
 * 关于廿四·候 + 二十四节气非遗介绍（PRD 3.6 / 7.2）
 */
const heritage = require('../../data/heritage')

Page({
  data: {
    heritage,
    heritageOpen: false,
    ctx: null
  },

  onShow() {
    const app = getApp()
    const ctx = app.globalData.currentTerm
    if (ctx) {
      this.setData({ ctx })
      const map = {
        'theme-spring': '#E4EADB',
        'theme-summer': '#EFEBE2',
        'theme-autumn': '#EDE3D8',
        'theme-winter': '#DCE2DA'
      }
      wx.setNavigationBarColor({
        frontColor: '#000000',
        backgroundColor: map[ctx.theme] || '#EFEBE2'
      })
    }
  },

  toggleHeritage() {
    this.setData({ heritageOpen: !this.data.heritageOpen })
  },

  showAbout() {
    wx.showModal({
      title: '关于「廿四·候」',
      content: '一款每日节气仪式感小程序。以太阳黄经天文算法计时，以七十二候为文化骨架，愿你把流转的时间，重新过成日常。',
      showCancel: false,
      confirmText: '知道了'
    })
  }
})
