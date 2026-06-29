import type { Metadata } from 'next'

export function siteMetadata(title?: string, description?: string): Metadata {
  const baseTitle = '黄帝内经 · 生命经典知识系统'
  return {
    title: title ? `${title} | ${baseTitle}` : baseTitle,
    description: description ?? '从原文阅读到知识图谱，从阴阳五行到四时养生，系统理解《黄帝内经》的生命观。',
    keywords: ['黄帝内经', '素问', '灵枢', '阴阳五行', '五脏六腑', '经络', '四季养生', '治未病', '中医经典'],
    openGraph: {
      title: title ?? baseTitle,
      description: description ?? '系统阅读《黄帝内经》，理解生命、自然与调养。',
      type: 'website'
    }
  }
}
