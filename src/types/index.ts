export type BookId = 'suwen' | 'lingshu'

export interface Reference {
  book: '素问' | '灵枢'
  chapter: string
  quote: string
  explanation?: string
}

export interface ClassicChapter {
  id: string
  book: BookId
  chapterNumber: number
  title: string
  baseTitle?: string
  sourceUrl?: string
  introduction: string
  originalText: string
  punctuatedText: string
  translation: string
  interpretation: string
  keywords: string[]
  famousQuotes: string[]
  relatedConcepts: string[]
}

export interface Concept {
  id: string
  name: string
  category: 'yinyang' | 'wuxing' | 'zangfu' | 'jingluo' | 'qi-blood' | 'disease' | 'diagnosis' | 'treatment' | 'season' | 'philosophy'
  summary: string
  explanation: string
  originalReferences: Reference[]
  relatedConcepts: string[]
  relatedChapters: string[]
}

export interface FamousQuote {
  id: string
  quote: string
  sourceBook: '素问' | '灵枢'
  sourceChapter: string
  originalContext: string
  translation: string
  keywords: string[]
  interpretation: string
  modernReflection: string
  relatedConcepts: string[]
}

export interface OrganSystem {
  id: string
  name: string
  type: 'zang' | 'fu'
  wuxing: '木' | '火' | '土' | '金' | '水'
  season?: string
  emotion?: string
  senseOrgan?: string
  bodyTissue?: string
  summary: string
  classicalMeaning: string
  modernNote: string
  originalReferences: Reference[]
  relatedMeridians: string[]
  relatedConcepts: string[]
}

export interface Meridian {
  id: string
  name: string
  type: 'hand' | 'foot'
  yinYang: '太阴' | '少阴' | '厥阴' | '阳明' | '太阳' | '少阳'
  relatedOrgan: string
  routeDescription: string
  mainAcupoints: string[]
  relatedSymptoms: string[]
  originalReferences: Reference[]
  sourceText?: string
  pairedMeridian?: string
  flowTime?: string
  chartSide?: 'front' | 'back' | 'side'
  pathPoints?: Array<{ x: number; y: number; label?: string }>
  branchRoutes?: string[]
  clinicalKeywords?: string[]
}

export interface SeasonalCare {
  id: 'spring' | 'summer' | 'autumn' | 'winter'
  seasonName: string
  title: string
  corePrinciple: string
  originalText: string
  translation: string
  lifestyleAdvice: string[]
  emotionAdvice: string[]
  dietDirection: string[]
  exerciseDirection: string[]
  cautions: string[]
  relatedConcepts: string[]
}

export interface CompareItem {
  id: string
  title: string
  classical: string
  modern: string
  readingTip: string
  relatedConcepts: string[]
}

export interface SearchResult {
  id: string
  type: 'chapter' | 'concept' | 'quote' | 'organ' | 'meridian' | 'season' | 'compare'
  title: string
  excerpt: string
  url: string
  tags: string[]
}
