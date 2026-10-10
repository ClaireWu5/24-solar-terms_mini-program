/**
 * 二十四节气数据（24 条）
 * 字段对齐 PRD 5.4 集合 solar_term
 * ai_verse 为节气级「今日絮语」初稿（温暖生活型，待人工校对）
 * ai_image_url 留空 = 兜底降级为季节材质底色（PRD AC3）
 */
module.exports = [
  {
    id: 1, name: '立春', eclipticLong: 315, season: '春', styleKey: 'D',
    themeColor: '#FFF2C5', dipperDir: '艮（东北偏北）',
    aiImage: '', aiVerse: '立春了，风里还带着凉意，但阳光已经悄悄长了一点。给自己一个舒展的早晨吧。'
  },
  {
    id: 2, name: '雨水', eclipticLong: 330, season: '春', styleKey: 'D',
    themeColor: '#F9D8D6', dipperDir: '寅（东北）',
    aiImage: '', aiVerse: '雨水到了，天开始变得温柔，落在地上的也软软的。等待本身就是一件好事。'
  },
  {
    id: 3, name: '惊蛰', eclipticLong: 345, season: '春', styleKey: 'D',
    themeColor: '#F0ABA0', dipperDir: '甲（东偏北）',
    aiImage: '', aiVerse: '一声春雷，把沉睡的都叫醒了。如果你也刚想通什么事，就趁今天开始吧。'
  },
  {
    id: 4, name: '春分', eclipticLong: 0, season: '春', styleKey: 'D',
    themeColor: '#8BA88A', dipperDir: '卯（正东）',
    aiImage: '', aiVerse: '春分这天，白天和黑夜一样长。生活也是这样，给出去多少，就收回来多少。'
  },
  {
    id: 5, name: '清明', eclipticLong: 15, season: '春', styleKey: 'D',
    themeColor: '#AFCD9A', dipperDir: '乙（东偏南）',
    aiImage: '', aiVerse: '清明时节，天清地明。去看看想念的人，也去吹吹春天的风。'
  },
  {
    id: 6, name: '谷雨', eclipticLong: 30, season: '春', styleKey: 'D',
    themeColor: '#5B8C85', dipperDir: '辰（东南偏东）',
    aiImage: '', aiVerse: '谷雨是春天最后的温柔。雨生百谷，那些你悄悄种下的，都会慢慢发芽。'
  },
  {
    id: 7, name: '立夏', eclipticLong: 45, season: '夏', styleKey: 'A',
    themeColor: '#E85D3F', dipperDir: '巽（东南）',
    aiImage: '', aiVerse: '立夏了，日子开始变得明晃晃的。傍晚记得抬头，晚霞会很好看。'
  },
  {
    id: 8, name: '小满', eclipticLong: 60, season: '夏', styleKey: 'A',
    themeColor: '#E8B44B', dipperDir: '巳（东南偏南）',
    aiImage: '', aiVerse: '小满，是将满未满的刚刚好。不必事事圆满，留一点余地，日子才有滋味。'
  },
  {
    id: 9, name: '芒种', eclipticLong: 75, season: '夏', styleKey: 'A',
    themeColor: '#6B9B70', dipperDir: '丙（南偏东）',
    aiImage: '', aiVerse: '芒种，有芒的麦子快收，有芒的稻子可种。忙碌的日子，别忘了照顾好自己。'
  },
  {
    id: 10, name: '夏至', eclipticLong: 90, season: '夏', styleKey: 'A',
    themeColor: '#C43A31', dipperDir: '午（正南）',
    aiImage: '', aiVerse: '夏至这天白昼最长，好像时间也格外眷恋这个夏天。愿你的日子亮堂堂的。'
  },
  {
    id: 11, name: '小暑', eclipticLong: 105, season: '夏', styleKey: 'A',
    themeColor: '#D6E4F0', dipperDir: '丁（南偏西）',
    aiImage: '', aiVerse: '小暑到了，风都变得温热。把西瓜切好，把风扇调慢，夏天可以慢慢过。'
  },
  {
    id: 12, name: '大暑', eclipticLong: 120, season: '夏', styleKey: 'A',
    themeColor: '#C47A3A', dipperDir: '未（西南偏南）',
    aiImage: '', aiVerse: '一年里最热的几天到了。别硬扛，午后找个阴凉处歇一歇，心静了，风就来了。'
  },
  {
    id: 13, name: '立秋', eclipticLong: 135, season: '秋', styleKey: 'C',
    themeColor: '#88ABDA', dipperDir: '坤（西南）',
    aiImage: '', aiVerse: '立秋了，暑气还没散尽，但风里多了一丝清爽。这是夏天写给秋天的第一封信。'
  },
  {
    id: 14, name: '处暑', eclipticLong: 150, season: '秋', styleKey: 'C',
    themeColor: '#B5695C', dipperDir: '申（西南偏西）',
    aiImage: '', aiVerse: '处暑，暑气到此为止。那些煎熬的日子也一样，总有到头的时候。'
  },
  {
    id: 15, name: '白露', eclipticLong: 165, season: '秋', styleKey: 'C',
    themeColor: '#F5F2E9', dipperDir: '庚（西偏南）',
    aiImage: '', aiVerse: '白露之后，早晚就凉了。记得添衣，也记得给牵挂的人发条消息。'
  },
  {
    id: 16, name: '秋分', eclipticLong: 180, season: '秋', styleKey: 'C',
    themeColor: '#D4953A', dipperDir: '酉（正西）',
    aiImage: '', aiVerse: '秋分这天，昼夜再次等长。秋天走到一半了，年初的心愿，别忘了回头看一眼。'
  },
  {
    id: 17, name: '寒露', eclipticLong: 195, season: '秋', styleKey: 'C',
    themeColor: '#5B7F6E', dipperDir: '辛（西偏北）',
    aiImage: '', aiVerse: '寒露至，露水更凉了。桂花的香气还在，秋天的美好正当时。'
  },
  {
    id: 18, name: '霜降', eclipticLong: 210, season: '秋', styleKey: 'C',
    themeColor: '#9B5E4A', dipperDir: '戌（西北偏西）',
    aiImage: '', aiVerse: '霜降是秋天最后的节气。红叶正艳，趁天还没太冷，去看一眼吧。'
  },
  {
    id: 19, name: '立冬', eclipticLong: 225, season: '冬', styleKey: 'B',
    themeColor: '#3D4F5F', dipperDir: '乾（西北）',
    aiImage: '', aiVerse: '立冬了，冬天正式登场。热汤、暖灯、厚被子，把日子过得暖一点。'
  },
  {
    id: 20, name: '小雪', eclipticLong: 240, season: '冬', styleKey: 'B',
    themeColor: '#D6E4F0', dipperDir: '亥（西北偏北）',
    aiImage: '', aiVerse: '小雪时节，天地开始安静下来。安静不是冷清，是留给自己的时间。'
  },
  {
    id: 21, name: '大雪', eclipticLong: 255, season: '冬', styleKey: 'B',
    themeColor: '#C45A52', dipperDir: '壬（北偏东）',
    aiImage: '', aiVerse: '大雪到了，愿你在的城市落一场雪。如果没下，就早点回家，家里是暖的。'
  },
  {
    id: 22, name: '冬至', eclipticLong: 270, season: '冬', styleKey: 'B',
    themeColor: '#3A4E7A', dipperDir: '子（正北）',
    aiImage: '', aiVerse: '冬至这天黑夜最长，但从今天起，白天会一天天变长。最冷的时节，也藏着转机。'
  },
  {
    id: 23, name: '小寒', eclipticLong: 285, season: '冬', styleKey: 'B',
    themeColor: '#5C5C5C', dipperDir: '癸（北偏西）',
    aiImage: '', aiVerse: '小寒虽冷，梅花却开了。再难的日子里，也总有先开的花。'
  },
  {
    id: 24, name: '大寒', eclipticLong: 300, season: '冬', styleKey: 'B',
    themeColor: '#2B2B2B', dipperDir: '丑（东北偏北）',
    aiImage: '', aiVerse: '大寒是最后一个节气，过了它，又是新的春天。坚持一下，快熬过去了。'
  }
]
