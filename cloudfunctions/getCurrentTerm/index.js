/**
 * 云函数 getCurrentTerm
 * 用 lunar-javascript 天文算法实时计算当前节气 / 候 / 下一节气时刻
 * 并从云数据库读取 AI 意境图与絮语（PRD 3.1 接口契约）
 *
 * 部署：右键本目录 →「上传并部署：云端安装依赖」
 */
const cloud = require('wx-server-sdk')
const Lunar = require('lunar-javascript').Lunar

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })
const db = cloud.database()

/** 节气名 → 节气 id（立春=1 … 大寒=24，按黄经升序） */
const TERM_NAME_TO_ID = {
  立春: 1, 雨水: 2, 惊蛰: 3, 春分: 4, 清明: 5, 谷雨: 6,
  立夏: 7, 小满: 8, 芒种: 9, 夏至: 10, 小暑: 11, 大暑: 12,
  立秋: 13, 处暑: 14, 白露: 15, 秋分: 16, 寒露: 17, 霜降: 18,
  立冬: 19, 小雪: 20, 大雪: 21, 冬至: 22, 小寒: 23, 大寒: 24
}

/**
 * 取某日期所在的节气名与交节时刻。
 * lunar-javascript 的 JieQiTable 给出当年前后各节气精确交节时刻。
 */
function getTermInfo(date) {
  const lunar = Lunar.fromDate(date)
  const table = lunar.getJieQiTable()
  // getPrevJieQi / getNextJieQi 返回 JieQi 对象（含 getName/getSolar）
  const prev = lunar.getPrevJieQi()
  const next = lunar.getNextJieQi()
  return { prev, next, table }
}

exports.main = async () => {
  const now = new Date()
  const { prev, next } = getTermInfo(now)

  const termId = TERM_NAME_TO_ID[prev.getName()]
  const nextTermId = TERM_NAME_TO_ID[next.getName()]

  // 每候约 5 天：按当前时间距交节的天数推算第几候
  const elapsedDays = (now - prev.getSolar().getCalendar().getTime()) / 86400000
  const ordinal = Math.min(3, Math.floor(elapsedDays / 5) + 1)

  // 读云数据库补充内容（失败不阻断，返回空由客户端兜底）
  let aiImage = ''
  let aiVerse = ''
  let aiVersePentad = ''
  try {
    const termDoc = await db.collection('solar_term').doc(String(termId)).get()
    aiImage = termDoc.data.ai_image_url || ''
    aiVerse = termDoc.data.ai_verse || ''
  } catch (e) {
    console.warn('solar_term 读取失败：', e)
  }
  try {
    const pentadId = (termId - 1) * 3 + ordinal
    const pDoc = await db.collection('pentad').doc(String(pentadId)).get()
    aiVersePentad = pDoc.data.ai_verse || ''
  } catch (e) {
    console.warn('pentad 读取失败：', e)
  }

  const nextSolar = next.getSolar()
  const nextDate = new Date(
    nextSolar.getYear(), nextSolar.getMonth() - 1, nextSolar.getDay(),
    nextSolar.getHour(), nextSolar.getMinute(), nextSolar.getSecond()
  )

  return {
    current_term: {
      id: termId,
      name: prev.getName(),
      datetime: prev.getSolar().toYmdHms()
    },
    current_pentad: { ordinal },
    ai_image_url: aiImage,
    ai_verse: aiVerse,
    ai_verse_pentad: aiVersePentad,
    next_term: {
      id: nextTermId,
      name: next.getName(),
      datetime: nextDate.toISOString()
    },
    computed_at: now.toISOString()
  }
}
