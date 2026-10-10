/**
 * 节气引擎（客户端）
 *
 * 职责：
 *   1. 优先调用云函数 getCurrentTerm（lunar-javascript 天文算法，权威数据）
 *   2. 云函数不可用时，降级到内置静态节气表计算（PRD 2.6 / AC9）
 *   3. 统一做内容组装：候级絮语缺失 → 回退节气级絮语（PRD 3.2 兜底规则）
 */
const TERMS = require('../data/terms')
const PENTADS = require('../data/pentads')
const config = require('../config')

/**
 * 静态节气交节日表（日级精度，仅作云函数不可用时的降级兜底）
 * 键 = 交节日期 'YYYY-MM-DD'，值 = 节气 id
 * 覆盖 2026-2027；过期后由云函数权威数据接管
 */
const TERM_DATE_TABLE = {
  // 2026
  '2026-01-05': 23, '2026-01-20': 24, '2026-02-04': 1, '2026-02-18': 2,
  '2026-03-05': 3, '2026-03-20': 4, '2026-04-05': 5, '2026-04-20': 6,
  '2026-05-05': 7, '2026-05-21': 8, '2026-06-05': 9, '2026-06-21': 10,
  '2026-07-07': 11, '2026-07-23': 12, '2026-08-07': 13, '2026-08-23': 14,
  '2026-09-07': 15, '2026-09-23': 16, '2026-10-08': 17, '2026-10-23': 18,
  '2026-11-07': 19, '2026-11-22': 20, '2026-12-07': 21, '2026-12-21': 22,
  // 2027
  '2027-01-05': 23, '2027-01-20': 24, '2027-02-04': 1, '2027-02-19': 2,
  '2027-03-06': 3, '2027-03-21': 4, '2027-04-05': 5, '2027-04-20': 6,
  '2027-05-06': 7, '2027-05-21': 8, '2027-06-06': 9, '2027-06-21': 10,
  '2027-07-07': 11, '2027-07-23': 12, '2027-08-08': 13, '2027-08-23': 14,
  '2027-09-08': 15, '2027-09-23': 16, '2027-10-08': 17, '2027-10-24': 18,
  '2027-11-07': 19, '2027-11-22': 20, '2027-12-07': 21, '2027-12-22': 22
}

const DAY_MS = 24 * 60 * 60 * 1000
const PENTAD_MS = 5 * DAY_MS // 每候约 5 天

/** 获取全部节气（供 terms 页使用） */
function getAllTerms() {
  return TERMS
}

/** 按 id 取节气 */
function getTermById(id) {
  return TERMS.find(t => t.id === id) || null
}

/** 按节气取三候 */
function getPentadsByTerm(termId) {
  return PENTADS.filter(p => p.termId === termId)
}

/** 取全部候（供时间轴使用） */
function getAllPentads() {
  return PENTADS
}

/** date → 'YYYY-MM-DD' */
function dateKey(d) {
  const p = n => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`
}

/**
 * 静态表降级计算：返回 { termId, ordinal, nextTerm, nextDate }
 */
function computeFromStaticTable(now) {
  const keys = Object.keys(TERM_DATE_TABLE).sort()
  const today = dateKey(now)
  let curKey = null
  for (const k of keys) {
    if (k <= today) curKey = k
    else break
  }
  if (!curKey) return null
  const termId = TERM_DATE_TABLE[curKey]
  const startDate = new Date(curKey + 'T00:00:00+08:00')
  const elapsed = now - startDate
  // 每候 5 天，第 15 天起已属下一节气（静态表粒度下不会出现）
  const ordinal = Math.min(3, Math.floor(elapsed / PENTAD_MS) + 1)
  const nextIdx = keys.findIndex(k => k === curKey) + 1
  const nextKey = keys[nextIdx] || keys[0]
  return {
    termId,
    ordinal,
    nextTerm: getTermById(TERM_DATE_TABLE[nextKey]),
    nextDate: new Date(nextKey + 'T00:00:00+08:00')
  }
}

/** 倒计时拆解 */
function splitCountdown(target, now) {
  let ms = Math.max(0, target - now)
  const days = Math.floor(ms / DAY_MS)
  ms -= days * DAY_MS
  const hours = Math.floor(ms / (60 * 60 * 1000))
  ms -= hours * 60 * 60 * 1000
  const minutes = Math.floor(ms / (60 * 1000))
  const seconds = Math.floor((ms - minutes * 60 * 1000) / 1000)
  return { days, hours, minutes, seconds }
}

/**
 * 组装完整的「今日上下文」（数据源无关）
 * cloudData: 云函数返回（可为 null）
 */
function buildContext(cloudData, now) {
  now = now || new Date()
  let termId, ordinal, nextTerm, nextDate, fromCloud = false

  if (cloudData && cloudData.current_term) {
    termId = cloudData.current_term.id
    ordinal = cloudData.current_pentad.ordinal
    nextTerm = cloudData.next_term
    nextDate = new Date(cloudData.next_term.datetime)
    fromCloud = true
  } else {
    const local = computeFromStaticTable(now)
    if (!local) return null
    termId = local.termId
    ordinal = local.ordinal
    nextTerm = local.nextTerm
    nextDate = local.nextDate
  }

  const term = getTermById(termId)
  const pentads = getPentadsByTerm(termId)
  const pentad = pentads.find(p => p.ordinal === ordinal) || pentads[0]

  // 絮语降级链：候级 → 节气级 → 候释义首句（PRD 3.2）
  const verse =
    (fromCloud && cloudData.current_pentad && cloudData.ai_verse_pentad) ||
    pentad.aiVerse ||
    term.aiVerse ||
    pentad.explanation.split('，')[0] + '。'

  // 图：云端 URL 优先，缺失走视觉兜底（首页 CSS 材质底色）
  const image = (fromCloud && cloudData.ai_image_url) || term.aiImage || ''

  return {
    fromCloud,
    term,
    pentad,
    verse,
    image,
    ordinalText: ['第一候', '第二候', '第三候'][ordinal - 1],
    seasonText: term.season,
    termIndexText: `第${['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '二十一', '二十二', '二十三', '二十四'][termId - 1]}节气`,
    theme: `theme-${{ '春': 'spring', '夏': 'summer', '秋': 'autumn', '冬': 'winter' }[term.season]}`,
    nextTerm,
    countdown: splitCountdown(nextDate, now),
    nextDate
  }
}

/**
 * 对外主接口：拉取今日上下文（云端优先，静态兜底）
 */
function fetchCurrentContext() {
  return new Promise(resolve => {
    let settled = false
    const fallback = () => {
      if (settled) return
      settled = true
      resolve(buildContext(null, new Date()))
    }
    if (!wx.cloud) return fallback()
    wx.cloud
      .callFunction({ name: config.FN_CURRENT_TERM, data: {} })
      .then(res => {
        if (settled) return
        settled = true
        resolve(buildContext(res.result, new Date()))
      })
      .catch(err => {
        console.warn('[term-engine] 云函数调用失败，降级静态表：', err)
        fallback()
      })
    // 云函数 3s 超时保护
    setTimeout(fallback, 3000)
  })
}

module.exports = {
  getAllTerms,
  getTermById,
  getPentadsByTerm,
  getAllPentads,
  fetchCurrentContext,
  splitCountdown
}
