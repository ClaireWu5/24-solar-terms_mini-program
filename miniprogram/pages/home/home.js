/**
 * 今日首页（P0 核心）
 * 闭环起点：触动 → 传播（分享图）→ 召回（订阅提醒）
 */
const engine = require('../../utils/term-engine')
const heritage = require('../../data/heritage')

const NAV_COLORS = {
  'theme-spring': ['#E4EADB', '#EFF2E7'],
  'theme-summer': ['#EFEBE2', '#F6F3EC'],
  'theme-autumn': ['#EDE3D8', '#F4EDE4'],
  'theme-winter': ['#DCE2DA', '#E7ECE6']
}

Page({
  data: {
    ctx: null,
    cdH: '00', cdM: '00', cdS: '00',
    sheetVisible: false,
    shareVisible: false,
    heritageShort: heritage.short
  },

  onLoad() {
    this.refresh()
  },

  onShow() {
    if (this.data.ctx) this.applyTheme()
  },

  onUnload() {
    this.stopTicker()
  },

  onPullDownRefresh() {
    this.refresh(() => wx.stopPullDownRefresh())
  },

  /** 拉取今日上下文（云端优先，静态兜底） */
  refresh(done) {
    engine.fetchCurrentContext().then(ctx => {
      if (!ctx) {
        wx.showToast({ title: '日期超出内置节气表范围', icon: 'none' })
        if (done) done()
        return
      }
      const app = getApp()
      app.globalData.currentTerm = ctx
      this.setData({ ctx }, () => this.applyTheme())
      this.startTicker()
      if (done) done()
    })
  },

  /** 按季节切换导航栏颜色 */
  applyTheme() {
    const colors = NAV_COLORS[this.data.ctx.theme] || NAV_COLORS['theme-summer']
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: colors[0]
    })
  },

  /** 每秒刷新倒计时（PRD AC2：分钟级刷新 + 走秒展示） */
  startTicker() {
    this.stopTicker()
    const tick = () => {
      const next = this.data.ctx && this.data.ctx.nextDate
      if (!next) return
      const c = engine.splitCountdown(next, new Date())
      const p = n => String(n).padStart(2, '0')
      this.setData({ cdH: p(c.hours), cdM: p(c.minutes), cdS: p(c.seconds) })
    }
    tick()
    this._ticker = setInterval(tick, 1000)
  },

  stopTicker() {
    if (this._ticker) clearInterval(this._ticker)
    this._ticker = null
  },

  /* ---- 候释义 Bottom Sheet ---- */
  openSheet() {
    this.setData({ sheetVisible: true })
  },
  closeSheet() {
    this.setData({ sheetVisible: false })
  },

  /* ---- 分享图 ---- */
  openShare() {
    this.setData({ shareVisible: true })
  },
  closeShare() {
    this.setData({ shareVisible: false })
  },

  /* ---- 订阅提醒（P1）：一次性订阅消息 ---- */
  onSubscribe() {
    // 模板 ID 需在小程序后台「订阅消息」申请后填入
    const TEMPLATE_ID = ''
    if (!TEMPLATE_ID) {
      wx.showToast({ title: '订阅模板配置后开放', icon: 'none' })
      return
    }
    wx.requestSubscribeMessage({
      tmplIds: [TEMPLATE_ID],
      success(res) {
        if (res[TEMPLATE_ID] === 'accept') {
          wx.showToast({ title: '订阅成功，节气交替前提醒你' })
        }
      },
      fail() {
        wx.showToast({ title: '未开启订阅', icon: 'none' })
      }
    })
  },

  /* ---- 转发（传播闭环） ---- */
  onShareAppMessage() {
    const ctx = this.data.ctx
    return {
      title: `今日${ctx ? ctx.term.name + ' · ' + ctx.pentad.name : '廿四·候'}`,
      path: '/pages/home/home'
    }
  }
})
