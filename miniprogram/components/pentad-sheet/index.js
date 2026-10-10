/**
 * 候释义 Bottom Sheet（P0）
 * 点击首页候名/节气名弹出，即看即走（PRD 3.3）
 */
Component({
  properties: {
    visible: { type: Boolean, value: false },
    term: { type: Object, value: {} },
    pentad: { type: Object, value: {} },
    ordinalText: { type: String, value: '' }
  },
  methods: {
    onClose() {
      this.triggerEvent('close')
    }
  }
})
