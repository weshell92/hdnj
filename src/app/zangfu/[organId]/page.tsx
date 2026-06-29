import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/Badge'
import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { getOrgan, zangfu } from '@/data/zangfu'

export function generateStaticParams() {
  return zangfu.map((organ) => ({ organId: organ.id }))
}

export default function OrganPage({ params }: { params: { organId: string } }) {
  const organ = getOrgan(params.organId)
  if (!organ) notFound()
  return (
    <article className="mx-auto max-w-4xl space-y-8">
      <div className="rounded-[2rem] bg-white/60 p-8 shadow-soft">
        <p className="text-sm font-bold tracking-[0.25em] text-cinnabar">{organ.type === 'zang' ? '五脏' : '六腑'} · 五行属{organ.wuxing}</p>
        <h1 className="mt-3 font-serifCN text-5xl font-bold">{organ.name}</h1>
        <p className="mt-5 text-xl leading-9 text-ink/70">{organ.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">{[organ.season, organ.emotion, organ.senseOrgan, organ.bodyTissue].filter(Boolean).map((item) => <Badge key={item}>{item}</Badge>)}</div>
      </div>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-[2rem] bg-white/60 p-6 shadow-soft"><h2 className="font-serifCN text-2xl font-bold">古典含义</h2><p className="mt-4 leading-8 text-ink/70">{organ.classicalMeaning}</p></div>
        <div className="rounded-[2rem] bg-white/60 p-6 shadow-soft"><h2 className="font-serifCN text-2xl font-bold">古今对照</h2><p className="mt-4 leading-8 text-ink/70">{organ.modernNote}</p></div>
      </section>
      <section className="rounded-[2rem] bg-white/60 p-6 shadow-soft"><h2 className="font-serifCN text-2xl font-bold">相关经络</h2><div className="mt-4 flex flex-wrap gap-2">{organ.relatedMeridians.map((id) => <Badge key={id} href={`/meridians/${id}`}>{id}</Badge>)}</div></section>
      <MedicalDisclaimer />
    </article>
  )
}
