import type { ClassicChapter } from '@/types'
import { Badge } from '@/components/ui/Badge'

interface ClassicReaderProps {
  chapter: ClassicChapter
  externalOriginalText?: string
}

export function ClassicReader({ chapter, externalOriginalText }: ClassicReaderProps) {
  const original = externalOriginalText || chapter.originalText
  const originalSource = externalOriginalText ? '已从 CText 原典源读取完整原文' : '显示本地原文种子或来源提示'
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-ink/10 bg-white/60 p-6 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-serifCN text-2xl font-bold text-ink">原文</h2>
          <span className="rounded-full bg-moss/10 px-4 py-2 text-sm text-moss">{originalSource}</span>
        </div>
        <div className="mt-5 whitespace-pre-line font-serifCN text-xl leading-[2.1] text-ink">{original}</div>
        {!externalOriginalText && chapter.sourceUrl ? <p className="mt-4 text-sm leading-6 text-ink/55">当前环境未能读取远程全文，可点击页面顶部的 CText 原典来源查看完整原文。</p> : null}
      </section>
      <section className="rounded-[2rem] border border-ink/10 bg-white/60 p-6 shadow-soft">
        <h2 className="font-serifCN text-2xl font-bold text-ink">断句 / 本地整理</h2>
        <p className="mt-5 whitespace-pre-line font-serifCN text-xl leading-[2] text-ink/80">{chapter.punctuatedText}</p>
      </section>
      <section className="rounded-[2rem] border border-ink/10 bg-white/60 p-6 shadow-soft">
        <h2 className="font-serifCN text-2xl font-bold text-ink">白话导读</h2>
        <p className="mt-5 leading-8 text-ink/75">{chapter.translation}</p>
      </section>
      <section className="rounded-[2rem] border border-ink/10 bg-white/60 p-6 shadow-soft">
        <h2 className="font-serifCN text-2xl font-bold text-ink">思想解读</h2>
        <p className="mt-5 leading-8 text-ink/75">{chapter.interpretation}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {chapter.keywords.map((keyword) => <Badge key={keyword}>{keyword}</Badge>)}
        </div>
      </section>
    </div>
  )
}
