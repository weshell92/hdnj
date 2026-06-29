import type { CompareItem } from '@/types'

export const compareItems: CompareItem[] = [
  {
    id: 'heart',
    title: '心',
    classical: '《黄帝内经》中的心常与神明、精神意识、血脉运行、夏季和火相联系。',
    modern: '现代医学中的心脏主要是循环系统器官，负责泵血和维持血液循环。',
    readingTip: '阅读“心主神明”时，不应简单等同于现代解剖学心脏，而应放在古典生命整体观中理解。',
    relatedConcepts: ['zangfu', 'wuxing']
  },
  {
    id: 'liver',
    title: '肝',
    classical: '古典肝系统与藏血、疏泄、情志、筋、目、春季和木相关。',
    modern: '现代肝脏主要承担代谢、解毒、胆汁生成、合成蛋白等生理功能。',
    readingTip: '不要用现代肝功能指标直接解释所有“肝”的古典表述。',
    relatedConcepts: ['zangfu', 'wuxing', 'season-spring']
  },
  {
    id: 'kidney',
    title: '肾',
    classical: '古典肾系统与藏精、生长发育、生殖、骨、耳、水液和冬季相关。',
    modern: '现代肾脏主要负责排泄代谢废物、调节水盐平衡和部分内分泌功能。',
    readingTip: '“肾藏精”属于中医理论语言，不应简单对应现代肾脏病。',
    relatedConcepts: ['zangfu', 'season-winter']
  },
  {
    id: 'qi',
    title: '气',
    classical: '气用于描述生命活动、推动、温煦、防御、固摄、气化等功能关系。',
    modern: '现代医学没有一个完全等同于“气”的单一实体概念。',
    readingTip: '可把气理解为古代医学解释生命活动的综合概念，不宜强行翻译为某种现代物质。',
    relatedConcepts: ['qi', 'yinyang']
  }
]

export function getCompareItem(id: string) {
  return compareItems.find((item) => item.id === id)
}
