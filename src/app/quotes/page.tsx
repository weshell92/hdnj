import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { quotes } from '@/data/quotes'

export default function QuotesPage() {
  return (
    <div>
      <SectionHeader eyebrow="QUOTES" title="名句精读" description="用一句话作为入口，进入原文、关键词、思想解读和现实启发。" />
      <div className="grid gap-5 md:grid-cols-3">
        {quotes.map((quote) => <Card key={quote.id} title={quote.quote} description={quote.translation} href={`/quotes/${quote.id}`} eyebrow={`${quote.sourceBook} · ${quote.sourceChapter}`} />)}
      </div>
    </div>
  )
}
