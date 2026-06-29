import type { OrganSystem } from '@/types'

export const zangfu: OrganSystem[] = [
  {
    id: 'gan', name: '肝', type: 'zang', wuxing: '木', season: '春', emotion: '怒', senseOrgan: '目', bodyTissue: '筋',
    summary: '肝在《黄帝内经》中与春、木、目、筋、情志调达等关系密切。',
    classicalMeaning: '古典语境中的肝偏向一个功能系统，与藏血、疏泄、情志、筋目和春季生发相关。',
    modernNote: '不能简单等同现代解剖学肝脏。现代肝脏主要涉及代谢、解毒、胆汁生成等功能。',
    originalReferences: [{ book: '素问', chapter: '藏气法时论', quote: '肝主春。' }],
    relatedMeridians: ['foot-jueyin-liver', 'foot-shaoyang-gallbladder'], relatedConcepts: ['wuxing', 'season-spring', 'zangfu']
  },
  {
    id: 'xin', name: '心', type: 'zang', wuxing: '火', season: '夏', emotion: '喜', senseOrgan: '舌', bodyTissue: '脉',
    summary: '心在古典中医中常与神明、血脉、夏季和火相联系。',
    classicalMeaning: '《黄帝内经》中的心不只指泵血器官，也涉及精神意识、神明活动和血脉系统。',
    modernNote: '不能简单等同现代心脏。现代心脏主要是循环系统的泵血器官。',
    originalReferences: [{ book: '素问', chapter: '藏气法时论', quote: '心主夏。' }],
    relatedMeridians: ['hand-shaoyin-heart', 'hand-taiyang-small-intestine'], relatedConcepts: ['zangfu', 'wuxing', 'season-summer']
  },
  {
    id: 'pi', name: '脾', type: 'zang', wuxing: '土', season: '长夏', emotion: '思', senseOrgan: '口', bodyTissue: '肉',
    summary: '脾与土、长夏、运化、肌肉和思虑相关。',
    classicalMeaning: '古典脾系统关注运化、升清、统血和饮食水谷转化。',
    modernNote: '不能简单等同现代脾脏。现代脾脏主要涉及免疫和血液相关功能。',
    originalReferences: [{ book: '素问', chapter: '藏气法时论', quote: '脾主长夏。' }],
    relatedMeridians: ['foot-taiyin-spleen', 'foot-yangming-stomach'], relatedConcepts: ['zangfu', 'wuxing']
  },
  {
    id: 'fei', name: '肺', type: 'zang', wuxing: '金', season: '秋', emotion: '悲', senseOrgan: '鼻', bodyTissue: '皮毛',
    summary: '肺与秋、金、气、皮毛、鼻和肃降关系密切。',
    classicalMeaning: '古典肺系统常被理解为主气、司呼吸、宣发肃降、通调水道。',
    modernNote: '不能简单等同现代肺。现代肺主要负责气体交换。',
    originalReferences: [{ book: '素问', chapter: '藏气法时论', quote: '肺主秋。' }],
    relatedMeridians: ['hand-taiyin-lung', 'hand-yangming-large-intestine'], relatedConcepts: ['zangfu', 'wuxing', 'season-autumn']
  },
  {
    id: 'shen', name: '肾', type: 'zang', wuxing: '水', season: '冬', emotion: '恐', senseOrgan: '耳', bodyTissue: '骨',
    summary: '肾与冬、水、藏精、生长发育、生殖、骨和耳相关。',
    classicalMeaning: '古典肾系统强调藏精、主水、主骨、生髓，以及生命根基。',
    modernNote: '不能简单等同现代肾脏。现代肾脏主要负责排泄代谢废物和水盐平衡。',
    originalReferences: [{ book: '素问', chapter: '藏气法时论', quote: '肾主冬。' }],
    relatedMeridians: ['foot-shaoyin-kidney', 'foot-taiyang-bladder'], relatedConcepts: ['zangfu', 'wuxing', 'season-winter']
  },
  {
    id: 'dan', name: '胆', type: 'fu', wuxing: '木', summary: '胆与肝相表里，在古典系统中与决断、少阳和木相关。', classicalMeaning: '胆属于六腑之一，与肝经关系密切。', modernNote: '现代胆囊主要储存和浓缩胆汁，二者不可简单等同。', originalReferences: [{ book: '素问', chapter: '灵兰秘典论', quote: '胆者，中正之官，决断出焉。' }], relatedMeridians: ['foot-shaoyang-gallbladder'], relatedConcepts: ['zangfu', 'wuxing']
  },
  {
    id: 'wei', name: '胃', type: 'fu', wuxing: '土', summary: '胃与受纳、腐熟水谷和足阳明胃经相关。', classicalMeaning: '胃为六腑之一，与饮食消化和气血生化来源相关。', modernNote: '现代胃主要负责食物储存、混合和初步消化。', originalReferences: [{ book: '素问', chapter: '灵兰秘典论', quote: '仓廪之官，五味出焉。' }], relatedMeridians: ['foot-yangming-stomach'], relatedConcepts: ['zangfu', 'wuxing']
  },
  {
    id: 'xiao-chang', name: '小肠', type: 'fu', wuxing: '火', summary: '小肠与心相表里，古典理论中有受盛化物、分别清浊之意。', classicalMeaning: '小肠属于六腑，强调传化与分清别浊。', modernNote: '现代小肠主要吸收营养和消化产物。', originalReferences: [{ book: '素问', chapter: '灵兰秘典论', quote: '小肠者，受盛之官，化物出焉。' }], relatedMeridians: ['hand-taiyang-small-intestine'], relatedConcepts: ['zangfu']
  },
  {
    id: 'da-chang', name: '大肠', type: 'fu', wuxing: '金', summary: '大肠与肺相表里，古典理论中与传导变化相关。', classicalMeaning: '大肠强调传导糟粕。', modernNote: '现代大肠主要吸收水分、形成和排出粪便。', originalReferences: [{ book: '素问', chapter: '灵兰秘典论', quote: '大肠者，传道之官，变化出焉。' }], relatedMeridians: ['hand-yangming-large-intestine'], relatedConcepts: ['zangfu']
  },
  {
    id: 'pang-guang', name: '膀胱', type: 'fu', wuxing: '水', summary: '膀胱与肾相表里，古典理论中与津液、水道相关。', classicalMeaning: '膀胱为州都之官，津液藏焉，气化则能出。', modernNote: '现代膀胱主要储存尿液。', originalReferences: [{ book: '素问', chapter: '灵兰秘典论', quote: '膀胱者，州都之官，津液藏焉。' }], relatedMeridians: ['foot-taiyang-bladder'], relatedConcepts: ['zangfu']
  },
  {
    id: 'san-jiao', name: '三焦', type: 'fu', wuxing: '火', summary: '三焦是古典中医中特殊的功能概念，与气化、水道和上下内外沟通相关。', classicalMeaning: '三焦不是单一现代器官，更像分区与气化运行的功能系统。', modernNote: '现代医学没有完全对应的单一器官。', originalReferences: [{ book: '素问', chapter: '灵兰秘典论', quote: '三焦者，决渎之官，水道出焉。' }], relatedMeridians: ['hand-shaoyang-triple-burner'], relatedConcepts: ['zangfu', 'qi']
  }
]

export function getOrgan(id: string) {
  return zangfu.find((item) => item.id === id)
}
