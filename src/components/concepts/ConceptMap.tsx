import Link from 'next/link'
import { concepts } from '@/data/concepts'

export function ConceptMap() {
  const important = concepts.slice(0, 9)
  return (
    <div className="rounded-[2rem] border border-ink/10 bg-white/50 p-6 shadow-soft">
      <div className="grid gap-4 md:grid-cols-3">
        {important.map((concept) => (
          <Link key={concept.id} href={`/concepts/${concept.id}`} className="rounded-2xl border border-ink/10 bg-paper/60 p-5 transition hover:-translate-y-1 hover:border-cinnabar/40">
            <p className="font-serifCN text-2xl font-semibold text-ink">{concept.name}</p>
            <p className="mt-3 text-sm leading-6 text-ink/65">{concept.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
