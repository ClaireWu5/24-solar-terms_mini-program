/**
 * 廿四节气页（P2 简版）
 * 七十二候时间轴 + 四季网格；当前节气/候高亮
 */
const engine = require('../../utils/term-engine')

const ORDINAL_TEXT = ['第一候', '第二候', '第三候']

Page({
  data: {
    pentads: [],
    seasonGroups: [],
    currentTermId: 0,
    currentPentadId: 0,
    scrollInto: '',
    sheetVisible: false,
    sheetTerm: {},
    sheetPentad: {},
    sheetOrdinal: '',
    ctx: null
  },

  onLoad() {
    const pentads = engine.getAllPentads()
    const terms = engine.getAllTerms()
    const seasons = ['春', '夏', '秋', '冬']
    const seasonGroups = seasons.map(s => ({
      season: s,
      terms: terms.filter(t => t.season === s)
    }))

    this.setData({ pentads, seasonGroups })

    // 从首页全局上下文取当前高亮（无则本地计算）
    const app = getApp()
    let ctx = app.globalData.currentTerm
    if (!ctx) {
      const local = engine.fetchCurrentContext()
      // fetchCurrentContext 返回 Promise，简单处理：先渲染，回来再更新
      local.then(c => {
        if (c) this.applyCurrent(c)
      })
    } else {
      this.applyCurrent(ctx)
    }
  },

  applyCurrent(ctx) {
    this.setData({
      ctx,
      currentTermId: ctx.term.id,
      currentPentadId: ctx.pentad.id,
      scrollInto: `node-${ctx.pentad.id}`
    })
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: this.navColor(ctx.theme)
    })
  },

  navColor(theme) {
    const map = {
      'theme-spring': '#E4EADB',
      'theme-summer': '#EFEBE2',
      'theme-autumn': '#EDE3D8',
      'theme-winter': '#DCE2DA'
    }
    return map[theme] || '#EFEBE2'
  },

  onPentadTap(e) {
    const item = e.currentTarget.dataset.item
    this.setData({
      sheetVisible: true,
      sheetTerm: engine.getTermById(item.termId),
      sheetPentad: item,
      sheetOrdinal: ORDINAL_TEXT[item.ordinal - 1]
    })
  },

  onTermTap(e) {
    const item = e.currentTarget.dataset.item
    wx.showToast({
      title: `${item.name} · 黄经${item.eclipticLong}°`,
      icon: 'none'
    })
  },

  closeSheet() {
    this.setData({ sheetVisible: false })
  }
})
