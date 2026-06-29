import type { FamousQuote } from '@/types'

export const quotes: FamousQuote[] = [
  { id: 'fa-yu-yin-yang', quote: '法于阴阳，和于术数', sourceBook: '素问', sourceChapter: '上古天真论', originalContext: '上古之人，其知道者，法于阴阳，和于术数。', translation: '顺应阴阳变化，配合生活规律。', keywords: ['阴阳', '术数', '养生'], interpretation: '这是《黄帝内经》养生思想的总纲之一，强调生命要与自然节律和生活法度相协调。', modernReflection: '现实中可理解为重视规律作息、节制饮食和避免长期过度消耗。', relatedConcepts: ['yinyang', 'tianren'] },
  { id: 'shi-yin-you-jie', quote: '食饮有节，起居有常', sourceBook: '素问', sourceChapter: '上古天真论', originalContext: '食饮有节，起居有常，不妄作劳。', translation: '饮食有节制，作息有规律。', keywords: ['饮食', '起居', '节律'], interpretation: '这句话体现了《黄帝内经》重视日常生活方式的思想。', modernReflection: '它不是具体疗法，而是提醒人不要把健康完全寄托在外物和补品上。', relatedConcepts: ['zhiweibing', 'qi'] },
  { id: 'tian-dan-xu-wu', quote: '恬淡虚无，真气从之', sourceBook: '素问', sourceChapter: '上古天真论', originalContext: '恬淡虚无，真气从之，精神内守，病安从来。', translation: '心境安宁少欲，真气自然顺从；精神守持于内，疾病从何而来。', keywords: ['情志', '真气', '精神'], interpretation: '强调情志安定与生命状态之间的关系。', modernReflection: '可理解为长期压力管理的重要性，但不能替代医学诊疗。', relatedConcepts: ['qi', 'zhiweibing'] },
  { id: 'yin-yang-tian-di', quote: '阴阳者，天地之道也', sourceBook: '素问', sourceChapter: '阴阳应象大论', originalContext: '阴阳者，天地之道也，万物之纲纪。', translation: '阴阳是天地运行的基本法则。', keywords: ['阴阳', '天地', '变化'], interpretation: '阴阳是贯穿全书的理论语言。', modernReflection: '学习时应把它看作古代关系模型，而非现代科学实体。', relatedConcepts: ['yinyang'] },
  { id: 'zheng-qi-cun-nei', quote: '正气存内，邪不可干', sourceBook: '素问', sourceChapter: '刺法论', originalContext: '正气存内，邪不可干。', translation: '正气充足，外邪不易侵犯。', keywords: ['正气', '邪气', '预防'], interpretation: '强调人体自身状态与疾病发生之间的关系。', modernReflection: '可作为重视体质、休息、营养和免疫状态的文化启发。', relatedConcepts: ['qi', 'disease-balance'] },
  { id: 'xie-zhi-suo-cou', quote: '邪之所凑，其气必虚', sourceBook: '素问', sourceChapter: '评热病论', originalContext: '邪之所凑，其气必虚。', translation: '邪气聚集之处，往往有正气不足。', keywords: ['正邪', '虚实', '病机'], interpretation: '体现疾病发生与身体内在状态相关。', modernReflection: '不能用来给自己诊断具体疾病。', relatedConcepts: ['disease-balance', 'qi'] },
  { id: 'chun-xia-yang-yang', quote: '春夏养阳，秋冬养阴', sourceBook: '素问', sourceChapter: '四气调神大论', originalContext: '夫四时阴阳者，万物之根本也，所以圣人春夏养阳，秋冬养阴。', translation: '四时阴阳是万物根本，所以春夏顺养阳气，秋冬顺养阴气。', keywords: ['四时', '阴阳', '养生'], interpretation: '说明养生要顺应四时阴阳变化。', modernReflection: '不能理解为单一补阳或补阴方法，应放在季节节律中理解。', relatedConcepts: ['tianren', 'yinyang'] },
  { id: 'yin-ping-yang-mi', quote: '阴平阳秘，精神乃治', sourceBook: '素问', sourceChapter: '生气通天论', originalContext: '阴平阳秘，精神乃治。', translation: '阴阳平和协调，精神状态才安定有序。', keywords: ['阴阳', '精神', '平衡'], interpretation: '体现《黄帝内经》把健康理解为动态平衡。', modernReflection: '适合作为理解身心协调的文化表达。', relatedConcepts: ['yinyang', 'qi'] },
  { id: 'shang-gong-zhi-wei-bing', quote: '上工治未病', sourceBook: '素问', sourceChapter: '四气调神大论', originalContext: '圣人不治已病治未病，不治已乱治未乱。', translation: '高明者重视疾病形成之前的预防和调整。', keywords: ['治未病', '预防', '调摄'], interpretation: '治未病是预防思想，不等于自行诊断或自行治疗。', modernReflection: '现实中可理解为体检、规律生活、风险预防和及时求医。', relatedConcepts: ['zhiweibing'] }
]

export function getQuote(id: string) {
  return quotes.find((quote) => quote.id === id)
}
