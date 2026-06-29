import type { BookId, ClassicChapter } from '@/types'

export const bookNames: Record<BookId, string> = {
  suwen: '素问',
  lingshu: '灵枢'
}

export const classicChapters: ClassicChapter[] = [
  {
    id: 'suwen-shang-gu-tian-zhen-lun',
    book: 'suwen',
    chapterNumber: 1,
    title: '上古天真论篇第一',
    introduction: '本篇讨论上古之人的养生方式、生命节律、衰老规律与“治未病”的基础思想，是理解《黄帝内经》生命观的入口。',
    originalText: '上古之人，其知道者，法于阴阳，和于术数，食饮有节，起居有常，不妄作劳，故能形与神俱，而尽终其天年。',
    punctuatedText: '上古之人，其知道者，法于阴阳，和于术数。食饮有节，起居有常，不妄作劳，故能形与神俱，而尽终其天年。',
    translation: '古代懂得养生之道的人，会顺应阴阳变化，遵循生活规律；饮食有节制，作息有常度，不过度劳作，所以形体与精神能够协调，尽享自然寿命。',
    interpretation: '这一段不是简单劝人早睡早起，而是建立了《黄帝内经》的基本生命观：人的身体、精神与自然节律应保持协调。养生的关键不是补药，而是节律、节制与不妄耗。',
    keywords: ['道', '阴阳', '术数', '食饮有节', '起居有常', '形与神俱'],
    famousQuotes: ['法于阴阳，和于术数', '食饮有节，起居有常', '形与神俱'],
    relatedConcepts: ['tianren', 'yinyang', 'zhiweibing', 'qi']
  },
  {
    id: 'suwen-si-qi-tiao-shen-da-lun',
    book: 'suwen',
    chapterNumber: 2,
    title: '四气调神大论篇第二',
    introduction: '本篇以春夏秋冬为纲，说明人体精神、作息、行为应如何顺应四时，是四季养生模块的主要经典依据。',
    originalText: '春三月，此谓发陈，天地俱生，万物以荣。夏三月，此谓蕃秀，天地气交，万物华实。秋三月，此谓容平，天气以急，地气以明。冬三月，此谓闭藏，水冰地坼，无扰乎阳。',
    punctuatedText: '春三月，此谓发陈，天地俱生，万物以荣。夏三月，此谓蕃秀，天地气交，万物华实。秋三月，此谓容平，天气以急，地气以明。冬三月，此谓闭藏，水冰地坼，无扰乎阳。',
    translation: '春季万物生发，夏季万物繁盛，秋季万物收敛而平定，冬季万物闭藏。人的生活也应顺应这种节律变化。',
    interpretation: '四时养生的核心不是固定食谱，而是理解“生、长、收、藏”的节律。人的作息、情绪和活动强度，都应随着自然时间变化而调整。',
    keywords: ['春三月', '夏三月', '秋三月', '冬三月', '生长收藏', '调神'],
    famousQuotes: ['春三月，此谓发陈', '冬三月，此谓闭藏'],
    relatedConcepts: ['tianren', 'season-spring', 'season-summer', 'season-autumn', 'season-winter']
  },
  {
    id: 'suwen-yin-yang-ying-xiang-da-lun',
    book: 'suwen',
    chapterNumber: 5,
    title: '阴阳应象大论篇第五',
    introduction: '本篇集中讨论阴阳与天地、人体、疾病、治法之间的关系，是理解《黄帝内经》理论语言的关键篇章。',
    originalText: '阴阳者，天地之道也，万物之纲纪，变化之父母，生杀之本始，神明之府也。',
    punctuatedText: '阴阳者，天地之道也，万物之纲纪，变化之父母，生杀之本始，神明之府也。',
    translation: '阴阳是天地运行的基本法则，是万物变化的纲领，是生长与消亡的根本。',
    interpretation: '阴阳不是两个固定物体，而是一种关系模型，用来说明明暗、动静、寒热、升降、内外等变化。理解阴阳，才能理解后续脏腑、疾病和治则。',
    keywords: ['阴阳', '天地之道', '变化', '寒热', '升降'],
    famousQuotes: ['阴阳者，天地之道也'],
    relatedConcepts: ['yinyang', 'wuxing', 'disease-balance']
  },
  {
    id: 'suwen-cang-qi-fa-shi-lun',
    book: 'suwen',
    chapterNumber: 22,
    title: '藏气法时论篇第二十二',
    introduction: '本篇从五脏、五行、四时的角度讨论脏气与时间的关系，是理解脏腑和季节对应的重要篇章。',
    originalText: '肝主春，足厥阴少阳主治，其日甲乙。心主夏，手少阴太阳主治，其日丙丁。脾主长夏，足太阴阳明主治，其日戊己。肺主秋，手太阴阳明主治，其日庚辛。肾主冬，足少阴太阳主治，其日壬癸。',
    punctuatedText: '肝主春，足厥阴、少阳主治，其日甲乙。心主夏，手少阴、太阳主治，其日丙丁。脾主长夏，足太阴、阳明主治，其日戊己。肺主秋，手太阴、阳明主治，其日庚辛。肾主冬，足少阴、太阳主治，其日壬癸。',
    translation: '肝与春相应，心与夏相应，脾与长夏相应，肺与秋相应，肾与冬相应。',
    interpretation: '这体现出《黄帝内经》的“时间中的身体”观念：脏腑并非孤立存在，而与四时、五行、经络构成关联网络。',
    keywords: ['五脏', '四时', '五行', '肝主春', '肺主秋'],
    famousQuotes: ['肝主春', '肺主秋', '肾主冬'],
    relatedConcepts: ['zangfu', 'wuxing', 'jingluo', 'tianren']
  },
  {
    id: 'lingshu-jiu-zhen-shi-er-yuan',
    book: 'lingshu',
    chapterNumber: 1,
    title: '九针十二原第一',
    introduction: '本篇是《灵枢》的开篇，讨论针具、原穴与经脉治疗思想，是理解经络针刺体系的入口。',
    originalText: '粗守形，上守神。神乎神，客在门。未睹其疾，恶知其原？',
    punctuatedText: '粗守形，上守神。神乎神，客在门。未睹其疾，恶知其原？',
    translation: '浅层的医者只守形体，高明者重视神气变化。如果没有观察疾病表现，怎能知道病的根源？',
    interpretation: '《灵枢》强调经络、针刺与神气关系。这里提醒学习者不能只看局部形体，还要理解整体状态。',
    keywords: ['九针', '十二原', '守神', '经络', '针刺'],
    famousQuotes: ['粗守形，上守神'],
    relatedConcepts: ['jingluo', 'qi', 'diagnosis']
  },
  {
    id: 'lingshu-jing-mai',
    book: 'lingshu',
    chapterNumber: 10,
    title: '经脉第十',
    introduction: '本篇集中记载十二经脉循行、病候与关系，是经络系统可视化的核心依据。',
    originalText: '经脉者，所以能决死生，处百病，调虚实，不可不通。',
    punctuatedText: '经脉者，所以能决死生，处百病，调虚实，不可不通。',
    translation: '经脉对于判断生命状态、处理疾病、调节虚实具有重要意义，因此不可不通晓。',
    interpretation: '“经脉”在《灵枢》中是连接脏腑、气血、体表和病候的关键网络。网站将其图形化，是为了让文字路线变成可理解的空间关系。',
    keywords: ['经脉', '十二经脉', '虚实', '病候'],
    famousQuotes: ['经脉者，所以能决死生'],
    relatedConcepts: ['jingluo', 'zangfu', 'qi']
  }
]

export function getChaptersByBook(book: BookId) {
  return classicChapters.filter((chapter) => chapter.book === book).sort((a, b) => a.chapterNumber - b.chapterNumber)
}

export function getChapter(book: BookId, chapterId: string) {
  return classicChapters.find((chapter) => chapter.book === book && chapter.id === chapterId)
}

export function getAdjacentChapters(book: BookId, chapterId: string) {
  const list = getChaptersByBook(book)
  const index = list.findIndex((chapter) => chapter.id === chapterId)
  return {
    previous: index > 0 ? list[index - 1] : undefined,
    next: index >= 0 && index < list.length - 1 ? list[index + 1] : undefined
  }
}
