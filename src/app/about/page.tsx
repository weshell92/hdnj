import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { SectionHeader } from '@/components/ui/SectionHeader'

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <SectionHeader eyebrow="ABOUT" title="关于本站" description="一个面向《黄帝内经》的原典阅读与知识系统网站。" />
      <section className="rounded-[2rem] bg-white/60 p-8 shadow-soft">
        <p className="leading-8 text-ink/75">本站试图把《黄帝内经》从难读的古籍转化为可阅读、可探索、可检索、可学习的知识系统。它不是医疗服务平台，而是经典阅读、传统文化学习和中医思想理解工具。</p>
      </section>
      <MedicalDisclaimer />
    </div>
  )
}
