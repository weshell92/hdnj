import type { SearchResult } from '@/types'
import { classicChapters, bookNames } from '@/data/classics'
import { concepts } from '@/data/concepts'
import { zangfu } from '@/data/zangfu'
import { meridians } from '@/data/meridians'
import { seasons } from '@/data/seasons'
import { quotes } from '@/data/quotes'
import { compareItems } from '@/data/compare'
import { excerpt } from '@/lib/utils'

export const searchIndex: SearchResult[] = [
  ...classicChapters.map((chapter) => ({
    id: chapter.id,
    type: 'chapter' as const,
    title: `${bookNames[chapter.book]} · ${chapter.title}`,
    excerpt: excerpt(`${chapter.introduction} ${chapter.originalText} ${chapter.translation}`),
    url: `/classics/${chapter.book}/${chapter.id}`,
    tags: chapter.keywords
  })),
  ...concepts.map((concept) => ({
    id: concept.id,
    type: 'concept' as const,
    title: concept.name,
    excerpt: excerpt(`${concept.summary} ${concept.explanation}`),
    url: `/concepts/${concept.id}`,
    tags: [concept.category, ...concept.relatedConcepts]
  })),
  ...zangfu.map((organ) => ({
    id: organ.id,
    type: 'organ' as const,
    title: organ.name,
    excerpt: excerpt(`${organ.summary} ${organ.classicalMeaning}`),
    url: `/zangfu/${organ.id}`,
    tags: [organ.type, organ.wuxing, organ.season ?? '', organ.emotion ?? ''].filter(Boolean)
  })),
  ...meridians.map((meridian) => ({
    id: meridian.id,
    type: 'meridian' as const,
    title: meridian.name,
    excerpt: excerpt(`${meridian.routeDescription} ${meridian.relatedOrgan}`),
    url: `/meridians/${meridian.id}`,
    tags: [meridian.yinYang, meridian.relatedOrgan, ...meridian.mainAcupoints]
  })),
  ...seasons.map((season) => ({
    id: season.id,
    type: 'season' as const,
    title: season.title,
    excerpt: excerpt(`${season.originalText} ${season.translation}`),
    url: `/seasons/${season.id}`,
    tags: [season.seasonName, season.corePrinciple, ...season.relatedConcepts]
  })),
  ...quotes.map((quote) => ({
    id: quote.id,
    type: 'quote' as const,
    title: quote.quote,
    excerpt: excerpt(`${quote.translation} ${quote.interpretation}`),
    url: `/quotes/${quote.id}`,
    tags: quote.keywords
  })),
  ...compareItems.map((item) => ({
    id: item.id,
    type: 'compare' as const,
    title: `古今对照：${item.title}`,
    excerpt: excerpt(`${item.classical} ${item.modern} ${item.readingTip}`),
    url: `/compare#${item.id}`,
    tags: item.relatedConcepts
  }))
]

export function searchAll(query: string, type?: SearchResult['type']) {
  const q = query.trim().toLowerCase()
  const source = type ? searchIndex.filter((item) => item.type === type) : searchIndex
  if (!q) return source.slice(0, 12)

  return source
    .map((item) => {
      const haystack = `${item.title} ${item.excerpt} ${item.tags.join(' ')}`.toLowerCase()
      const score = [item.title, item.tags.join(' '), item.excerpt]
        .map((field, index) => field.toLowerCase().includes(q) ? 3 - index : 0)
        .reduce((sum, value) => sum + value, 0)
      return { item, score: haystack.includes(q) ? score || 1 : 0 }
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ item }) => item)
}
