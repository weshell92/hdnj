import type { ClassicChapter } from '@/types'
import { Badge } from '@/components/ui/Badge'

export function ClassicReader({ chapter }: { chapter: ClassicChapter }) {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-ink/10 bg-white/60 p-6 shadow-soft">
        <h2 className="font-serifCN text-2xl font-bold text-ink">原文</h2>
        <p className="mt-5 font-serifCN text-2xl leading-[2.2] text-ink">{chapter.originalText}</p>
      </section>
      <section className="rounded-[2rem] border border-ink/10 bg-white/60 p-6 shadow-soft">
        <h2 className="font-serifCN text-2xl font-bold text-ink">断句</h2>
        <p className="mt-5 font-serifCN text-xl leading-[2] text-ink/80">{chapter.punctuatedText}</p>
      </section>
      <section className="rounded-[2rem] border border-ink/10 bg-white/60 p-6 shadow-soft">
        <h2 className="font-serifCN text-2xl font-bold text-ink">白话</h2>
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
