import type { Concept } from '@/types'

export const concepts: Concept[] = [
  {
    id: 'tianren',
    name: '天人相应',
    category: 'philosophy',
    summary: '人体生命活动与自然时间、气候、昼夜、地域存在对应关系。',
    explanation: '《黄帝内经》常把人放在天地四时之中理解。天人相应不是简单迷信，而是一种古代整体生命观：身体、情志、作息与外部环境互相影响。',
    originalReferences: [{ book: '素问', chapter: '四气调神大论', quote: '春三月，此谓发陈，天地俱生，万物以荣。' }],
    relatedConcepts: ['yinyang', 'wuxing', 'season-spring', 'zhiweibing'],
    relatedChapters: ['suwen-si-qi-tiao-shen-da-lun']
  },
  {
    id: 'yinyang',
    name: '阴阳',
    category: 'yinyang',
    summary: '用于解释天地、人体、疾病和治法变化的基础关系模型。',
    explanation: '阴阳不是两个固定实体，而是相对关系：动静、寒热、内外、升降、明暗、虚实等都可用阴阳描述。',
    originalReferences: [{ book: '素问', chapter: '阴阳应象大论', quote: '阴阳者，天地之道也，万物之纲纪。' }],
    relatedConcepts: ['wuxing', 'disease-balance', 'qi'],
    relatedChapters: ['suwen-yin-yang-ying-xiang-da-lun']
  },
  {
    id: 'wuxing',
    name: '五行',
    category: 'wuxing',
    summary: '木、火、土、金、水构成古代分类与关系模型。',
    explanation: '五行在《黄帝内经》中用于组织五脏、五志、五官、五体、五味和四时关系。它更像一种关联分类系统，而不是现代化学元素。',
    originalReferences: [{ book: '素问', chapter: '藏气法时论', quote: '肝主春，心主夏，脾主长夏，肺主秋，肾主冬。' }],
    relatedConcepts: ['zangfu', 'tianren', 'season-spring'],
    relatedChapters: ['suwen-cang-qi-fa-shi-lun']
  },
  {
    id: 'zangfu',
    name: '脏腑',
    category: 'zangfu',
    summary: '中医用以理解人体功能系统的核心框架。',
    explanation: '脏腑不是现代解剖器官的简单对应，而是功能、情志、气血、经络和时间关系的综合概念。',
    originalReferences: [{ book: '素问', chapter: '五脏别论', quote: '五脏者，藏精气而不泻也。' }],
    relatedConcepts: ['wuxing', 'jingluo', 'qi'],
    relatedChapters: ['suwen-cang-qi-fa-shi-lun']
  },
  {
    id: 'jingluo',
    name: '经络',
    category: 'jingluo',
    summary: '连接脏腑、体表、气血与病候的网络体系。',
    explanation: '经络在《灵枢》中非常关键。它将人体不同部位、脏腑功能和病候表现联系起来，适合用图形化方式学习。',
    originalReferences: [{ book: '灵枢', chapter: '经脉', quote: '经脉者，所以能决死生，处百病，调虚实，不可不通。' }],
    relatedConcepts: ['zangfu', 'qi', 'diagnosis'],
    relatedChapters: ['lingshu-jing-mai']
  },
  {
    id: 'qi',
    name: '气血津液',
    category: 'qi-blood',
    summary: '描述生命活动、濡养、运行和身体状态的基础概念群。',
    explanation: '气、血、津液共同构成《黄帝内经》理解生命活动的重要语言。学习时应放在整体功能关系中理解。',
    originalReferences: [{ book: '素问', chapter: '上古天真论', quote: '恬淡虚无，真气从之。' }],
    relatedConcepts: ['yinyang', 'zangfu', 'jingluo'],
    relatedChapters: ['suwen-shang-gu-tian-zhen-lun']
  },
  {
    id: 'disease-balance',
    name: '病因病机',
    category: 'disease',
    summary: '疾病被理解为正邪、阴阳、气血、脏腑等关系失衡。',
    explanation: '《黄帝内经》不只看局部病变，也关注外感、情志、饮食、劳倦、体质和正气状态。',
    originalReferences: [{ book: '素问', chapter: '评热病论', quote: '邪之所凑，其气必虚。' }],
    relatedConcepts: ['qi', 'yinyang', 'zhiweibing'],
    relatedChapters: ['suwen-yin-yang-ying-xiang-da-lun']
  },
  {
    id: 'diagnosis',
    name: '诊法',
    category: 'diagnosis',
    summary: '望、闻、问、切等方法用于观察整体状态。',
    explanation: '诊法的核心是通过外在表现理解身体内部关系变化。本站只做文化学习，不提供具体诊断服务。',
    originalReferences: [{ book: '灵枢', chapter: '九针十二原', quote: '未睹其疾，恶知其原？' }],
    relatedConcepts: ['jingluo', 'disease-balance', 'qi'],
    relatedChapters: ['lingshu-jiu-zhen-shi-er-yuan']
  },
  {
    id: 'zhiweibing',
    name: '治未病',
    category: 'treatment',
    summary: '重视未病先防、既病防变和日常调摄。',
    explanation: '治未病强调在明显疾病形成之前调整生活、情志和节律。这里是预防思想，不等于自行诊断或自行治疗。',
    originalReferences: [{ book: '素问', chapter: '四气调神大论', quote: '圣人不治已病治未病，不治已乱治未乱。' }],
    relatedConcepts: ['tianren', 'qi', 'disease-balance'],
    relatedChapters: ['suwen-si-qi-tiao-shen-da-lun']
  },
  {
    id: 'season-spring',
    name: '春生',
    category: 'season',
    summary: '春季重在生发、舒展、调畅。',
    explanation: '春季对应生发之气。学习时应理解为顺应节律，而不是固定疗法。',
    originalReferences: [{ book: '素问', chapter: '四气调神大论', quote: '春三月，此谓发陈。' }],
    relatedConcepts: ['tianren', 'wuxing', 'zangfu'],
    relatedChapters: ['suwen-si-qi-tiao-shen-da-lun']
  },
  {
    id: 'season-summer',
    name: '夏长',
    category: 'season',
    summary: '夏季重在长养、外达、不过度耗散。',
    explanation: '夏季阳气盛，强调顺应长养，但仍要避免过度耗伤。',
    originalReferences: [{ book: '素问', chapter: '四气调神大论', quote: '夏三月，此谓蕃秀。' }],
    relatedConcepts: ['tianren', 'wuxing'],
    relatedChapters: ['suwen-si-qi-tiao-shen-da-lun']
  },
  {
    id: 'season-autumn',
    name: '秋收',
    category: 'season',
    summary: '秋季重在收敛、平定、减少过度发散。',
    explanation: '秋季对应收敛。适合从生活节律上减少过度外耗，保持安定。',
    originalReferences: [{ book: '素问', chapter: '四气调神大论', quote: '秋三月，此谓容平。' }],
    relatedConcepts: ['tianren', 'wuxing'],
    relatedChapters: ['suwen-si-qi-tiao-shen-da-lun']
  },
  {
    id: 'season-winter',
    name: '冬藏',
    category: 'season',
    summary: '冬季重在闭藏、养藏、减少扰动。',
    explanation: '冬季强调闭藏，不是完全不活动，而是减少过度消耗，保持内在蓄养。',
    originalReferences: [{ book: '素问', chapter: '四气调神大论', quote: '冬三月，此谓闭藏。' }],
    relatedConcepts: ['tianren', 'wuxing'],
    relatedChapters: ['suwen-si-qi-tiao-shen-da-lun']
  }
]

export function getConcept(id: string) {
  return concepts.find((concept) => concept.id === id)
}
