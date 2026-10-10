/**
 * 七十二候数据（72 条）
 * 字段对齐 PRD 5.4 集合 pentad
 * 候名出自《月令七十二候集解》（固定）；释义为一句话简版（待校对）
 * ai_verse 候级絮语：样板节气（立春/大暑/立秋）已填，其余留空 →
 * 运行时按 PRD 降级规则回退到「节气级絮语」（见 utils/term-engine.js）
 */
module.exports = [
  // ---- 立春 ----
  { id: 1, termId: 1, ordinal: 1, name: '东风解冻', explanation: '东风送暖，大地开始解冻，冰封的河面悄悄松动。', imagery: '第一缕暖风，是春天派来的信使。', aiVerse: '东风一吹，冻了一冬的土地松软起来。走出门，感受一下风变温柔的瞬间。' },
  { id: 2, termId: 1, ordinal: 2, name: '蛰虫始振', explanation: '蛰伏在土中过冬的虫类感知到暖意，开始缓缓苏醒活动。', imagery: '沉睡的生命，被春意轻轻唤醒。', aiVerse: '连藏了一冬的小虫都醒了。睡够了就起来吧，新的一年，慢慢伸个懒腰。' },
  { id: 3, termId: 1, ordinal: 3, name: '鱼陟负冰', explanation: '河冰渐融，鱼儿游向水面，背上仿佛还驮着未化的碎冰。', imagery: '冰下涌动的，是藏不住的生机。', aiVerse: '河里的鱼开始往上游了，冰快化了。春天其实一直都在往前走，别急。' },
  // ---- 雨水 ----
  { id: 4, termId: 2, ordinal: 1, name: '獭祭鱼', explanation: '水獭捕鱼陈列岸边，如同陈设祭品，古人观之为春之信号。', imagery: '河面上的仪式感，是万物对春天的敬意。', aiVerse: '' },
  { id: 5, termId: 2, ordinal: 2, name: '候雁北', explanation: '南方越冬的大雁感知阳气回升，开始结队北归。', imagery: '天空的雁阵，是写给故乡的信。', aiVerse: '' },
  { id: 6, termId: 2, ordinal: 3, name: '草木萌动', explanation: '雨润大地，草木在泥土下悄悄萌发出嫩芽。', imagery: '看不见的地方，一切正在发生。', aiVerse: '' },
  // ---- 惊蛰 ----
  { id: 7, termId: 3, ordinal: 1, name: '桃始华', explanation: '桃花感受到春雷的召唤，开始绽放。', imagery: '一声雷，唤醒满树芳菲。', aiVerse: '' },
  { id: 8, termId: 3, ordinal: 2, name: '仓庚鸣', explanation: '黄鹂开始鸣叫，用歌声宣告春天。', imagery: '婉转的鸟鸣，是春天的第一首歌。', aiVerse: '' },
  { id: 9, termId: 3, ordinal: 3, name: '鹰化为鸠', explanation: '古人见鹰隐去、斑鸠渐多，以为鹰化身为鸠。', imagery: '天上的身影换了模样，春天来了。', aiVerse: '' },
  // ---- 春分 ----
  { id: 10, termId: 4, ordinal: 1, name: '玄鸟至', explanation: '燕子春分而来，衔泥筑巢，回到屋檐下。', imagery: '旧相识归来，屋檐下又热闹了。', aiVerse: '' },
  { id: 11, termId: 4, ordinal: 2, name: '雷乃发声', explanation: '春雨渐多，天空中开始响起雷声。', imagery: '天空开口说话，唤醒沉睡的种子。', aiVerse: '' },
  { id: 12, termId: 4, ordinal: 3, name: '始电', explanation: '雷声之后，闪电也划破春夜的天空。', imagery: '春夜的闪电，是天空的心动。', aiVerse: '' },
  // ---- 清明 ----
  { id: 13, termId: 5, ordinal: 1, name: '桐始华', explanation: '桐树开始开花，白花满枝。', imagery: '一树桐花，落满了清明。', aiVerse: '' },
  { id: 14, termId: 5, ordinal: 2, name: '田鼠化为鴽', explanation: '田鼠躲回洞穴，鹌鹑之类的小鸟多起来，古人以为互相转化。', imagery: '阴气藏，阳气升，天地换了主角。', aiVerse: '' },
  { id: 15, termId: 5, ordinal: 3, name: '虹始见', explanation: '雨后初晴，天空开始出现彩虹。', imagery: '清明的雨后，天空会开花。', aiVerse: '' },
  // ---- 谷雨 ----
  { id: 16, termId: 6, ordinal: 1, name: '萍始生', explanation: '雨水渐丰，水面浮萍开始生长。', imagery: '一池新绿，浮起了整个春天。', aiVerse: '' },
  { id: 17, termId: 6, ordinal: 2, name: '鸣鸠拂其羽', explanation: '布谷鸟梳理羽毛鸣叫，提醒人们播种。', imagery: '布谷声里，是农人最懂的语言。', aiVerse: '' },
  { id: 18, termId: 6, ordinal: 3, name: '戴胜降于桑', explanation: '戴胜鸟落在桑树上，蚕事将起。', imagery: '桑树上的鸟，衔来了养蚕的季节。', aiVerse: '' },
  // ---- 立夏 ----
  { id: 19, termId: 7, ordinal: 1, name: '蝼蝈鸣', explanation: '蝼蛄和蛙类开始在田间池畔鸣叫。', imagery: '夏天的声音，先从池塘边开始。', aiVerse: '' },
  { id: 20, termId: 7, ordinal: 2, name: '蚯蚓出', explanation: '蚯蚓钻出湿润的泥土，帮大地呼吸。', imagery: '泥土深处，也有热闹的夏天。', aiVerse: '' },
  { id: 21, termId: 7, ordinal: 3, name: '王瓜生', explanation: '王瓜的藤蔓开始快速攀长。', imagery: '藤蔓向上的样子，像极了夏天。', aiVerse: '' },
  // ---- 小满 ----
  { id: 22, termId: 8, ordinal: 1, name: '苦菜秀', explanation: '苦菜枝叶繁茂，可以采食。', imagery: '微苦的滋味，是夏天的开场。', aiVerse: '' },
  { id: 23, termId: 8, ordinal: 2, name: '靡草死', explanation: '喜阴的细软草类在渐强的阳光下枯去。', imagery: '有些告别，是为了让饱满的更饱满。', aiVerse: '' },
  { id: 24, termId: 8, ordinal: 3, name: '麦秋至', explanation: '麦子开始成熟，迎来它的「秋天」。', imagery: '风吹麦浪，是大地的丰收诗。', aiVerse: '' },
  // ---- 芒种 ----
  { id: 25, termId: 9, ordinal: 1, name: '螳螂生', explanation: '螳螂在上年深秋产的卵，此时感应初生。', imagery: '小小的身影，也懂得应时而动。', aiVerse: '' },
  { id: 26, termId: 9, ordinal: 2, name: '鵙始鸣', explanation: '伯劳鸟开始站在枝头鸣叫。', imagery: '尖锐的鸟鸣，划开了仲夏。', aiVerse: '' },
  { id: 27, termId: 9, ordinal: 3, name: '反舌无声', explanation: '善学百鸟叫声的反舌鸟，反而安静下来。', imagery: '热闹到了极处，忽然懂得沉默。', aiVerse: '' },
  // ---- 夏至 ----
  { id: 28, termId: 10, ordinal: 1, name: '鹿角解', explanation: '阳性的鹿角感阴气而脱落。', imagery: '盛极之时，已在悄悄转身。', aiVerse: '' },
  { id: 29, termId: 10, ordinal: 2, name: '蜩始鸣', explanation: '知了鼓翼而鸣，蝉声自此渐盛。', imagery: '蝉声一起，夏天就有了BGM。', aiVerse: '' },
  { id: 30, termId: 10, ordinal: 3, name: '半夏生', explanation: '喜阴的药草半夏在沼泽边生出。', imagery: '夏天过半，名字里都是时间。', aiVerse: '' },
  // ---- 小暑 ----
  { id: 31, termId: 11, ordinal: 1, name: '温风至', explanation: '风不再清凉，开始带着热浪扑面。', imagery: '风变成了热的，夏天来真的了。', aiVerse: '' },
  { id: 32, termId: 11, ordinal: 2, name: '蟋蟀居宇', explanation: '蟋蟀离开田野，躲到庭院墙角避暑。', imagery: '连虫子都知道，找地方乘凉。', aiVerse: '' },
  { id: 33, termId: 11, ordinal: 3, name: '鹰始鸷', explanation: '地面气温太高，老鹰飞向清凉的高空。', imagery: '换个高度，就是另一个季节。', aiVerse: '' },
  // ---- 大暑 ----
  { id: 34, termId: 12, ordinal: 1, name: '腐草为萤', explanation: '古人见夏夜萤火虫飞舞，以为是腐草所化，其实是萤卵孵化成虫。', imagery: '最热的夜里，也有微光在悄悄飞。', aiVerse: '夏夜闷热，但抬头也许能看见一点萤火。再热的日子，总有些小小的光。' },
  { id: 35, termId: 12, ordinal: 2, name: '土润溽暑', explanation: '天气闷热，土地潮湿，空气里满是黏腻的暑气。', imagery: '空气黏糊糊的，连风都走得很慢。', aiVerse: '这几天又闷又潮，记得给自己留一杯凉茶的时间，别让忙碌把自己烤干了。' },
  { id: 36, termId: 12, ordinal: 3, name: '大雨时行', explanation: '暑气蒸郁，常有大雨骤降，雨后暑热稍减。', imagery: '一场痛快的大雨，是夏天的温柔。', aiVerse: '最近常有大雨说来就来。下雨的时候就停一停吧，听听雨声，也是种休息。' },
  // ---- 立秋 ----
  { id: 37, termId: 13, ordinal: 1, name: '凉风至', explanation: '暑气渐退，开始刮起带着凉意的风，是秋天来临的第一个信号。', imagery: '那阵风一吹，你就知道夏天要走了。', aiVerse: '傍晚的风里，第一次有了凉意。夏天还没走远，秋天已经在路上了。' },
  { id: 38, termId: 13, ordinal: 2, name: '白露降', explanation: '昼夜温差加大，清晨草木上开始凝结起白色的露珠。', imagery: '清晨草尖的那颗露，是秋天留下的脚印。', aiVerse: '早起会看见草叶上挂着露珠了。天凉了，出门记得多带一件外套。' },
  { id: 39, termId: 13, ordinal: 3, name: '寒蝉鸣', explanation: '感知到秋凉的寒蝉开始鸣叫，蝉声里已带着几分萧瑟。', imagery: '蝉声渐稀，是夏天在轻声告别。', aiVerse: '蝉鸣声慢慢变少了。热闹总会散场，但别担心，秋天有秋天的好。' },
  // ---- 处暑 ----
  { id: 40, termId: 14, ordinal: 1, name: '鹰乃祭鸟', explanation: '老鹰捕猎后将猎物陈列，如同祭拜，秋猎自此开始。', imagery: '天空的猎手，也开始为秋天做准备。', aiVerse: '' },
  { id: 41, termId: 14, ordinal: 2, name: '天地始肃', explanation: '天地间开始有了肃杀收敛之气。', imagery: '夏天收敛了脾气，万物开始沉静。', aiVerse: '' },
  { id: 42, termId: 14, ordinal: 3, name: '禾乃登', explanation: '黍、稻、粱类农作物开始成熟。', imagery: '稻田翻金浪，是秋天最踏实的礼物。', aiVerse: '' },
  // ---- 白露 ----
  { id: 43, termId: 15, ordinal: 1, name: '鸿雁来', explanation: '鸿雁自北而来，开始南迁的旅程。', imagery: '第一批南飞的身影，捎来了秋讯。', aiVerse: '' },
  { id: 44, termId: 15, ordinal: 2, name: '玄鸟归', explanation: '燕子等候鸟辞别屋檐，返回南方。', imagery: '春天来的朋友，秋天说再见。', aiVerse: '' },
  { id: 45, termId: 15, ordinal: 3, name: '群鸟养羞', explanation: '百鸟开始储藏过冬的食物。', imagery: '动物们都懂：提前准备，冬天不慌。', aiVerse: '' },
  // ---- 秋分 ----
  { id: 46, termId: 16, ordinal: 1, name: '雷始收声', explanation: '秋分之后，雷声渐渐隐去。', imagery: '天空安静下来，秋天变得沉稳。', aiVerse: '' },
  { id: 47, termId: 16, ordinal: 2, name: '蛰虫坯户', explanation: '虫类用细土封窄洞口，准备冬眠。', imagery: '小小的门缝里，藏着过冬的智慧。', aiVerse: '' },
  { id: 48, termId: 16, ordinal: 3, name: '水始涸', explanation: '降雨减少，河湖水位开始下降。', imagery: '水退石出，秋天在做减法。', aiVerse: '' },
  // ---- 寒露 ----
  { id: 49, termId: 17, ordinal: 1, name: '鸿雁来宾', explanation: '最后一批鸿雁压队南飞，如同宾客迟到。', imagery: '天空的最后一队雁，秋意已深。', aiVerse: '' },
  { id: 50, termId: 17, ordinal: 2, name: '雀入大水为蛤', explanation: '雀鸟少见，海边蛤蜊渐多，古人以为雀入海化蛤。', imagery: '天地间的变身魔术，藏着季节更替。', aiVerse: '' },
  { id: 51, termId: 17, ordinal: 3, name: '菊有黄华', explanation: '百花凋零之时，菊花傲然盛开。', imagery: '万物收敛时，它偏偏开得热烈。', aiVerse: '' },
  // ---- 霜降 ----
  { id: 52, termId: 18, ordinal: 1, name: '豺乃祭兽', explanation: '豺狼捕获猎物陈列后再食，如同祭拜。', imagery: '深山的仪式，是生存的郑重。', aiVerse: '' },
  { id: 53, termId: 18, ordinal: 2, name: '草木黄落', explanation: '草木枯黄，叶片纷纷落下。', imagery: '每一片落叶，都是大树写的告别信。', aiVerse: '' },
  { id: 54, termId: 18, ordinal: 3, name: '蛰虫咸俯', explanation: '虫类垂头入眠，不食不动，进入冬眠。', imagery: '大地开始入睡前最后的安静。', aiVerse: '' },
  // ---- 立冬 ----
  { id: 55, termId: 19, ordinal: 1, name: '水始冰', explanation: '水面开始结出薄冰。', imagery: '水一冻，冬天就留下了签名。', aiVerse: '' },
  { id: 56, termId: 19, ordinal: 2, name: '地始冻', explanation: '土地开始上冻变硬。', imagery: '大地盖上了透明的被子。', aiVerse: '' },
  { id: 57, termId: 19, ordinal: 3, name: '雉入大水为蜃', explanation: '雉少见而海边大蛤出现，古人以为雉化为蜃。', imagery: '秋天的魔术换了个戏法，继续上演。', aiVerse: '' },
  // ---- 小雪 ----
  { id: 58, termId: 20, ordinal: 1, name: '虹藏不见', explanation: '雨季远去，彩虹隐匿不见。', imagery: '把彩虹收起来，留到明年再见。', aiVerse: '' },
  { id: 59, termId: 20, ordinal: 2, name: '天气上升地气下降', explanation: '天地之气不再交流，万物失去生机。', imagery: '天与地各自安静，冬天需要沉默。', aiVerse: '' },
  { id: 60, termId: 20, ordinal: 3, name: '闭塞而成冬', explanation: '天地闭塞，转入严寒的冬天。', imagery: '门一关上，就到了围炉的季节。', aiVerse: '' },
  // ---- 大雪 ----
  { id: 61, termId: 21, ordinal: 1, name: '鹖鴠不鸣', explanation: '感阳的寒号鸟，此时也停止了鸣叫。', imagery: '连最爱叫的鸟都安静了，冬天真的深了。', aiVerse: '' },
  { id: 62, termId: 21, ordinal: 2, name: '虎始交', explanation: '阴气最盛时，老虎开始求偶。', imagery: '至寒之中，已藏着新的生机。', aiVerse: '' },
  { id: 63, termId: 21, ordinal: 3, name: '荔挺出', explanation: '一种叫荔的兰草感阳气而萌动抽芽。', imagery: '雪下的嫩芽，从不误花期。', aiVerse: '' },
  // ---- 冬至 ----
  { id: 64, termId: 22, ordinal: 1, name: '蚯蚓结', explanation: '阴气仍盛，蚯蚓在土中蜷缩打结。', imagery: '泥土里的结，等春天解开。', aiVerse: '' },
  { id: 65, termId: 22, ordinal: 2, name: '麋角解', explanation: '麋感阳气回升，角开始脱落。', imagery: '旧的不去，新的不长。', aiVerse: '' },
  { id: 66, termId: 22, ordinal: 3, name: '水泉动', explanation: '地下的泉水开始暗暗流动。', imagery: '看不见的地方，春天已在赶路。', aiVerse: '' },
  // ---- 小寒 ----
  { id: 67, termId: 23, ordinal: 1, name: '雁北乡', explanation: '大雁感知阳气，开始酝酿北归。', imagery: '最冷的时候，归途已定。', aiVerse: '' },
  { id: 68, termId: 23, ordinal: 2, name: '鹊始巢', explanation: '喜鹊开始筑巢，为春天做准备。', imagery: '忙忙碌碌，是为了不留遗憾。', aiVerse: '' },
  { id: 69, termId: 23, ordinal: 3, name: '雉始雊', explanation: '野鸡感阳而鸣，山间有了叫声。', imagery: '一声鸟鸣，喊出了深冬的阳气。', aiVerse: '' },
  // ---- 大寒 ----
  { id: 70, termId: 24, ordinal: 1, name: '鸡始乳', explanation: '母鸡开始孵育小鸡。', imagery: '最冷的天，也有新生命在酝酿。', aiVerse: '' },
  { id: 71, termId: 24, ordinal: 2, name: '征鸟厉疾', explanation: '鹰隼类猛禽捕食凶猛，处于高度活跃状态。', imagery: '为了生存，冬天也要全力以赴。', aiVerse: '' },
  { id: 72, termId: 24, ordinal: 3, name: '水泽腹坚', explanation: '湖泊中央的冰也冻得最坚硬厚实。', imagery: '冻到最深处，离融化就不远了。', aiVerse: '' }
]
