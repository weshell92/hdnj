import { notFound } from 'next/navigation'
import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { getSeason, seasons } from '@/data/seasons'

export function generateStaticParams() {
  return seasons.map((season) => ({ seasonId: season.id }))
}

function List({ title, items }: { title: string; items: string[] }) {
  return <section className="rounded-[2rem] bg-white/60 p-6 shadow-soft"><h2 className="font-serifCN text-2xl font-bold">{title}</h2><ul className="mt-4 list-inside list-disc space-y-2 leading-7 text-ink/70">{items.map((item) => <li key={item}>{item}</li>)}</ul></section>
}

export default function SeasonPage({ params }: { params: { seasonId: string } }) {
  const season = getSeason(params.seasonId)
  if (!season) notFound()
  return (
    <article className="mx-auto max-w-4xl space-y-8">
      <div className="rounded-[2rem] bg-white/60 p-8 shadow-soft">
        <p className="text-sm font-bold tracking-[0.25em] text-cinnabar">{season.seasonName} · {season.corePrinciple}</p>
        <h1 className="mt-3 font-serifCN text-5xl font-bold">{season.title}</h1>
        <blockquote className="mt-6 border-l-4 border-cinnabar pl-4 font-serifCN text-2xl leading-10">{season.originalText}</blockquote>
        <p className="mt-5 leading-8 text-ink/70">{season.translation}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <List title="作息建议" items={season.lifestyleAdvice} />
        <List title="情志建议" items={season.emotionAdvice} />
        <List title="饮食方向" items={season.dietDirection} />
        <List title="运动方向" items={season.exerciseDirection} />
      </div>
      <List title="注意事项" items={season.cautions} />
      <MedicalDisclaimer />
    </article>
  )
}
