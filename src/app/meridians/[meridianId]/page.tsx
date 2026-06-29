import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/Badge'
import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { MeridianViewer } from '@/components/meridians/MeridianViewer'
import { getMeridian, meridians } from '@/data/meridians'

export function generateStaticParams() {
  return meridians.map((meridian) => ({ meridianId: meridian.id }))
}

export default function MeridianPage({ params }: { params: { meridianId: string } }) {
  const meridian = getMeridian(params.meridianId)
  if (!meridian) notFound()
  return (
    <article className="mx-auto max-w-5xl space-y-8">
      <div className="rounded-[2rem] bg-white/60 p-8 shadow-soft">
        <p className="text-sm font-bold tracking-[0.25em] text-ocher">{meridian.yinYang} · {meridian.relatedOrgan}</p>
        <h1 className="mt-3 font-serifCN text-5xl font-bold">{meridian.name}</h1>
        <p className="mt-5 text-xl leading-9 text-ink/70">{meridian.routeDescription}</p>
      </div>
      <MeridianViewer meridian={meridian} />
      <section className="rounded-[2rem] bg-white/60 p-6 shadow-soft"><h2 className="font-serifCN text-2xl font-bold">主要穴位</h2><div className="mt-4 flex flex-wrap gap-2">{meridian.mainAcupoints.map((point) => <Badge key={point}>{point}</Badge>)}</div></section>
      <section className="rounded-[2rem] bg-white/60 p-6 shadow-soft"><h2 className="font-serifCN text-2xl font-bold">相关病候学习</h2><p className="mt-4 leading-8 text-ink/70">{meridian.relatedSymptoms.join('、')}。这些内容仅用于原典学习，不用于自我诊断。</p></section>
      <MedicalDisclaimer />
    </article>
  )
}
