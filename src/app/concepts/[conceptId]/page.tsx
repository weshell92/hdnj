import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/Badge'
import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { concepts, getConcept } from '@/data/concepts'

export function generateStaticParams() {
  return concepts.map((concept) => ({ conceptId: concept.id }))
}

export default function ConceptPage({ params }: { params: { conceptId: string } }) {
  const concept = getConcept(params.conceptId)
  if (!concept) notFound()
  return (
    <article className="mx-auto max-w-4xl space-y-8">
      <div className="rounded-[2rem] bg-white/60 p-8 shadow-soft">
        <p className="text-sm font-bold tracking-[0.25em] text-ocher">{concept.category}</p>
        <h1 className="mt-3 font-serifCN text-5xl font-bold text-ink">{concept.name}</h1>
        <p className="mt-5 text-xl leading-9 text-ink/70">{concept.summary}</p>
      </div>
      <section className="rounded-[2rem] bg-white/60 p-8 shadow-soft">
        <h2 className="font-serifCN text-3xl font-bold">概念解释</h2>
        <p className="mt-5 leading-8 text-ink/75">{concept.explanation}</p>
      </section>
      <section className="rounded-[2rem] bg-white/60 p-8 shadow-soft">
        <h2 className="font-serifCN text-3xl font-bold">原文出处</h2>
        <div className="mt-5 space-y-4">
          {concept.originalReferences.map((ref) => <blockquote key={`${ref.book}-${ref.chapter}`} className="border-l-4 border-cinnabar pl-4 font-serifCN text-xl leading-9">《{ref.book}·{ref.chapter}》：{ref.quote}</blockquote>)}
        </div>
      </section>
      <section className="rounded-[2rem] bg-white/60 p-8 shadow-soft">
        <h2 className="font-serifCN text-3xl font-bold">相关概念</h2>
        <div className="mt-5 flex flex-wrap gap-2">{concept.relatedConcepts.map((id) => <Badge key={id} href={`/concepts/${id}`}>{id}</Badge>)}</div>
        <div className="mt-5 flex flex-wrap gap-3">{concept.relatedChapters.map((id) => <Link key={id} className="rounded-full bg-paper px-4 py-2 text-sm" href={`/search?keyword=${id}`}>{id}</Link>)}</div>
      </section>
      <MedicalDisclaimer />
    </article>
  )
}
