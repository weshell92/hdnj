import { concepts } from '@/data/concepts'
import { quotes } from '@/data/quotes'
import { classicChapters } from '@/data/classics'

const blockedPatterns = ['是什么病', '是不是', '怎么治', '治疗', '吃什么药', '开方', '处方', '诊断', '头痛', '胸痛', '发烧', '咳嗽', '失眠怎么办', '肝火旺']

export function answerClassicQuestion(question: string) {
  const q = question.trim()
  if (!q) return '请输入你想了解的《黄帝内经》问题，例如“阴阳是什么意思？”或“上工治未病如何理解？”。'

  if (blockedPatterns.some((pattern) => q.includes(pattern))) {
    return '这个问题涉及症状判断、诊断、治疗或用药。本站 AI 读书助手只用于《黄帝内经》经典学习与传统文化理解，不能替代医生诊断或治疗建议。如有身体不适，请咨询正规医疗机构或专业医生。'
  }

  const concept = concepts.find((item) => q.includes(item.name) || item.relatedConcepts.some((id) => q.includes(id)))
  if (concept) {
    return `【${concept.name}】${concept.summary}\n\n${concept.explanation}\n\n可继续阅读：${concept.relatedChapters.join('、') || '相关篇章'}。本回答用于经典学习，不构成医疗建议。`
  }

  const quote = quotes.find((item) => q.includes(item.quote) || item.keywords.some((keyword) => q.includes(keyword)))
  if (quote) {
    return `【${quote.quote}】出自《${quote.sourceBook}·${quote.sourceChapter}》。\n\n白话：${quote.translation}\n\n解读：${quote.interpretation}\n\n现实启发：${quote.modernReflection}\n\n本回答用于经典学习，不构成医疗建议。`
  }

  const chapter = classicChapters.find((item) => q.includes(item.title.replace(/篇第.+$/, '')) || item.keywords.some((keyword) => q.includes(keyword)))
  if (chapter) {
    return `【${chapter.title}】${chapter.introduction}\n\n核心原文：${chapter.originalText}\n\n解读：${chapter.interpretation}\n\n本回答用于经典学习，不构成医疗建议。`
  }

  return '可以把这个问题放在“原文—关键词—体系关系”三层中理解。建议先搜索相关关键词，查看对应原文出处和概念页面。本站 AI 助手当前为安全规则版，主要回答经典学习问题，不做诊断、开方或治疗建议。'
}
