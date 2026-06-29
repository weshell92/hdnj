import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/Badge'
import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { getQuote, quotes } from '@/data/quotes'

export function generateStaticParams() {
  return quotes.map((quote) => ({ quoteId: quote.id }))
}

export default function QuotePage({ params }: { params: { quoteId: string } }) {
  const quote = getQuote(params.quoteId)
  if (!quote) notFound()
  return (
    <article className="mx-auto max-w-4xl space-y-8">
      <div className="rounded-[2rem] bg-white/60 p-8 shadow-soft">
        <p className="text-sm font-bold tracking-[0.25em] text-ocher">《{quote.sourceBook}·{quote.sourceChapter}》</p>
        <h1 className="mt-3 font-serifCN text-5xl font-bold leading-tight">{quote.quote}</h1>
        <p className="mt-5 text-xl leading-9 text-ink/70">{quote.translation}</p>
      </div>
      <section className="rounded-[2rem] bg-white/60 p-6 shadow-soft"><h2 className="font-serifCN text-2xl font-bold">原文上下文</h2><p className="mt-4 font-serifCN text-2xl leading-10 text-ink/80">{quote.originalContext}</p></section>
      <section className="rounded-[2rem] bg-white/60 p-6 shadow-soft"><h2 className="font-serifCN text-2xl font-bold">思想解读</h2><p className="mt-4 leading-8 text-ink/70">{quote.interpretation}</p></section>
      <section className="rounded-[2rem] bg-white/60 p-6 shadow-soft"><h2 className="font-serifCN text-2xl font-bold">现实启发</h2><p className="mt-4 leading-8 text-ink/70">{quote.modernReflection}</p><div className="mt-4 flex flex-wrap gap-2">{quote.keywords.map((keyword) => <Badge key={keyword}>{keyword}</Badge>)}</div></section>
      <MedicalDisclaimer />
    </article>
  )
}
