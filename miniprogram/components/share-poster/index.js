/**
 * 一键生成分享图（P0 · 传播主力）
 *
 * 预览态：WXML 卡片直接展示（有 AI 图用图，无图画 Canvas 意境）
 * 保存态：Canvas 2D 全量绘制 → wx.canvasToTempFilePath → 存相册
 * 构成：意境图 + 节气/候名 + 絮语 + 非遗背书 + 品牌脚注（PRD 3.4）
 */
const heritage = require('../../data/heritage')

Component({
  properties: {
    visible: { type: Boolean, value: false },
    ctx: { type: Object, value: {} }
  },

  data: {
    heritageShort: heritage.short
  },

  observers: {
    visible(v) {
      if (v && !this.data.ctx.image) {
        // 无 AI 图时，用 Canvas 画兜底意境图
        wx.nextTick(() => this.drawPreview())
      }
    }
  },

  methods: {
    onClose() {
      this.triggerEvent('close')
    },

    /** 预览态兜底意境：山峦 + 落日 */
    drawPreview() {
      const query = this.createSelectorQuery()
      query.select('#posterCanvas').fields({ node: true, size: true }).exec(res => {
        if (!res[0]) return
        const { node: canvas } = res[0]
        const dpr = wx.getSystemInfoSync().pixelRatio || 2
        const w = res[0].width
        const h = res[0].height
        canvas.width = w * dpr
        canvas.height = h * dpr
        const ctx = canvas.getContext('2d')
        ctx.scale(dpr, dpr)
        this.paintScene(ctx, w, h, this.data.ctx)
      })
    },

    /** 兜底意境绘制（与首页 art-fallback 同风格） */
    paintScene(ctx, w, h, data) {
      const paperA = '#F3EFE6'
      const paperB = '#E7DFCF'
      const g = ctx.createLinearGradient(0, 0, 0, h)
      g.addColorStop(0, paperA)
      g.addColorStop(1, paperB)
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      // 落日
      ctx.beginPath()
      ctx.arc(w * 0.72, h * 0.25, w * 0.13, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(201,162,75,0.8)'
      ctx.lineWidth = 1.2
      ctx.stroke()
      ctx.fillStyle = 'rgba(232,200,120,0.12)'
      ctx.fill()

      // 三层山
      const mountains = [
        { y: 0.66, c: 'rgba(201,203,186,0.5)' },
        { y: 0.77, c: 'rgba(156,165,147,0.55)' },
        { y: 0.88, c: 'rgba(110,122,106,0.5)' }
      ]
      mountains.forEach(m => {
        ctx.beginPath()
        ctx.moveTo(0, h)
        ctx.lineTo(0, h * m.y + 20)
        ctx.quadraticCurveTo(w * 0.25, h * m.y - 26, w * 0.5, h * m.y)
        ctx.quadraticCurveTo(w * 0.75, h * m.y + 22, w, h * m.y - 10)
        ctx.lineTo(w, h)
        ctx.closePath()
        ctx.fillStyle = m.c
        ctx.fill()
      })

      // 节气名水印
      ctx.fillStyle = 'rgba(44,36,32,0.5)'
      ctx.font = '22px "Songti SC", serif'
      ctx.textAlign = 'center'
      ctx.fillText(data.term.name, w / 2, h - 18)
    },

    /** 保存：Canvas 2D 绘制完整分享长图 → 相册 */
    onSave() {
      if (!this.data.ctx) return
      wx.getSetting({
        success: res => {
          if (res.authSetting['scope.writePhotosAlbum'] === false) {
            wx.showToast({ title: '请在设置中允许保存到相册', icon: 'none' })
            return
          }
          this.renderPoster()
        }
      })
    },

    renderPoster() {
      wx.showLoading({ title: '生成中' })
      const query = this.createSelectorQuery()
      query.select('#posterCanvas').fields({ node: true, size: true }).exec(res => {
        // 无兜底画布时新建离屏画布（有 AI 图的场景）
        const data = this.data.ctx
        const W = 540
        const H = 960

        const draw = canvas => {
          const ctx = canvas.getContext('2d')
          const dpr = 1
          canvas.width = W
          canvas.height = H
          this.paintPoster(ctx, W, H, data)
          wx.canvasToTempFilePath({
            canvas,
            success: r => {
              wx.hideLoading()
              wx.saveImageToPhotosAlbum({
                filePath: r.tempFilePath,
                success: () => wx.showToast({ title: '已保存到相册' }),
                fail: () => wx.showToast({ title: '保存取消', icon: 'none' })
              })
            },
            fail: () => {
              wx.hideLoading()
              wx.showToast({ title: '生成失败，请重试', icon: 'none' })
            }
          })
        }

        if (res && res[0] && res[0].node) {
          draw(res[0].node)
        } else {
          // 有 AI 图路径：直接绘制（含图片）
          const canvas = wx.createOffscreenCanvas({ type: '2d', width: W, height: H })
          const img = canvas.createImage()
          img.onload = () => {
            const ctx = canvas.getContext('2d')
            canvas.width = W
            canvas.height = H
            this.paintPoster(ctx, W, H, data, img)
            wx.canvasToTempFilePath({
              canvas,
              success: r => {
                wx.hideLoading()
                wx.saveImageToPhotosAlbum({
                  filePath: r.tempFilePath,
                  success: () => wx.showToast({ title: '已保存到相册' }),
                  fail: () => wx.showToast({ title: '保存取消', icon: 'none' })
                })
              },
              fail: () => {
                wx.hideLoading()
                wx.showToast({ title: '生成失败，请重试', icon: 'none' })
              }
            })
          }
          img.onerror = () => {
            const ctx = canvas.getContext('2d')
            canvas.width = W
            canvas.height = H
            this.paintPoster(ctx, W, H, data)
            wx.hideLoading()
            wx.showToast({ title: '意境图加载失败，已用兜底', icon: 'none' })
          }
          img.src = data.image
        }
      })
    },

    /** 完整分享长图绘制（540×960） */
    paintPoster(ctx, W, H, data, img) {
      // 底
      ctx.fillStyle = '#F6F3EC'
      ctx.fillRect(0, 0, W, H)

      // 顶部意境区（有图画图，无图画兜底场景）
      const artH = 540
      if (img) {
        // cover 模式裁切
        const iw = img.width
        const ih = img.height
        const scale = Math.max(W / iw, artH / ih)
        const sw = W / scale
        const sh = artH / scale
        const sx = (iw - sw) / 2
        const sy = (ih - sh) / 2
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, W, artH)
      } else {
        this.paintScene(ctx, W, artH, data)
      }

      // 主信息
      ctx.textAlign = 'center'
      ctx.fillStyle = '#2B2A26'
      ctx.font = '52px "Songti SC", serif'
      ctx.fillText(data.term.name, W / 2, artH + 88)

      ctx.fillStyle = '#C47A3A'
      ctx.font = '24px sans-serif'
      ctx.fillText(`${data.ordinalText} · ${data.pentad.name}`, W / 2, artH + 132)

      // 絮语（自动换行）
      ctx.fillStyle = '#5C574C'
      ctx.font = '26px "Songti SC", serif'
      this.wrapText(ctx, `「${data.verse}」`, W / 2, artH + 196, W - 120, 44)

      // 分割线
      ctx.strokeStyle = 'rgba(80,75,60,0.2)'
      ctx.beginPath()
      ctx.moveTo(W / 2 - 30, H - 178)
      ctx.lineTo(W / 2 + 30, H - 178)
      ctx.stroke()

      // 非遗背书（PRD 7.2 精简版）
      ctx.fillStyle = '#A39C8B'
      ctx.font = '19px sans-serif'
      ctx.fillText('二十四节气 · 联合国教科文组织', W / 2, H - 140)
      ctx.fillText('人类非物质文化遗产 · 2016', W / 2, H - 112)

      // 脚注
      ctx.fillStyle = '#2B2A26'
      ctx.font = '26px "Songti SC", serif'
      ctx.fillText('廿四·候', 40, H - 48)
      ctx.textAlign = 'right'
      ctx.fillStyle = '#A39C8B'
      ctx.font = '18px sans-serif'
      ctx.fillText('扫码 · 每天一眼节气', W - 40, H - 48)
    },

    /** 简易换行 */
    wrapText(ctx, text, cx, y, maxWidth, lineHeight) {
      let line = ''
      let yy = y
      for (const ch of text) {
        if (ctx.measureText(line + ch).width > maxWidth) {
          ctx.fillText(line, cx, yy)
          line = ch
          yy += lineHeight
        } else {
          line += ch
        }
      }
      if (line) ctx.fillText(line, cx, yy)
    }
  }
})
