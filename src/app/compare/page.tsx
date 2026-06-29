import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { compareItems } from '@/data/compare'

export default function ComparePage() {
  return (
    <div className="space-y-8">
      <SectionHeader eyebrow="COMPARE" title="古今对照" description="帮助用户区分古典医学概念和现代医学概念，避免神化或误读。" />
      <div className="grid gap-6">
        {compareItems.map((item) => (
          <section key={item.id} id={item.id} className="rounded-[2rem] bg-white/60 p-6 shadow-soft">
            <h2 className="font-serifCN text-3xl font-bold">{item.title}</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-paper/70 p-5"><h3 className="font-bold text-cinnabar">古典概念</h3><p className="mt-3 leading-7 text-ink/70">{item.classical}</p></div>
              <div className="rounded-2xl bg-paper/70 p-5"><h3 className="font-bold text-cinnabar">现代理解</h3><p className="mt-3 leading-7 text-ink/70">{item.modern}</p></div>
              <div className="rounded-2xl bg-paper/70 p-5"><h3 className="font-bold text-cinnabar">阅读提示</h3><p className="mt-3 leading-7 text-ink/70">{item.readingTip}</p></div>
            </div>
          </section>
        ))}
      </div>
      <MedicalDisclaimer />
    </div>
  )
}
