import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SystemMap } from '@/components/home/SystemMap'
import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { quotes } from '@/data/quotes'

export default function HomePage() {
  return (
    <div className="space-y-20">
      <section className="grid items-center gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-4 text-sm font-bold tracking-[0.35em] text-cinnabar">HUANGDI NEIJING</p>
          <h1 className="font-serifCN text-5xl font-black leading-tight text-ink md:text-7xl">黄帝内经<br />生命经典知识系统</h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-ink/70">完整整理《素问》《灵枢》162篇目录，从原文阅读到知识图谱，从十二经络到四时养生，系统理解《黄帝内经》的生命观。</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/classics" className="rounded-full bg-ink px-6 py-3 text-paper hover:bg-cinnabar">开始阅读</Link>
            <Link href="/concepts" className="rounded-full border border-ink/20 px-6 py-3 text-ink hover:border-cinnabar hover:text-cinnabar">查看知识地图</Link>
          </div>
        </div>
        <div className="rounded-[2.5rem] border border-ink/10 bg-white/60 p-8 shadow-soft">
          <p className="font-serifCN text-3xl font-bold text-ink">今日入口</p>
          <p className="mt-4 leading-8 text-ink/70">先从一句名言、一个季节、一个脏腑进入经典，再逐步看到天、地、人、时、气、血、脏腑、经络之间的关系。</p>
          <div className="mt-6 grid gap-3">
            <Link className="rounded-2xl bg-paper p-4 hover:bg-cloud" href="/quotes/shang-gong-zhi-wei-bing">上工治未病</Link>
            <Link className="rounded-2xl bg-paper p-4 hover:bg-cloud" href="/seasons/spring">春三月，此谓发陈</Link>
            <Link className="rounded-2xl bg-paper p-4 hover:bg-cloud" href="/zangfu/gan">肝与春、木、目、筋</Link>
          </div>
        </div>
      </section>

      <section>
        <SectionHeader eyebrow="SYSTEM" title="一张图理解《黄帝内经》" description="把散落在原文中的概念重新组织成可探索的知识系统。" />
        <SystemMap />
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Card title="原典阅读" eyebrow="CLASSICS" description="完整整理《素问》《灵枢》162篇目录，支持原典源全文读取、断句、白话、关键词和思想解读。" href="/classics" />
        <Card title="知识体系" eyebrow="KNOWLEDGE" description="从阴阳五行、脏腑经络、气血津液、病因病机建立整体框架。" href="/concepts" />
        <Card title="AI 读书助手" eyebrow="AI READER" description="只回答经典学习问题，拒绝诊断、开方和治疗类请求。" href="/ai-reader" />
      </section>

      <section>
        <SectionHeader eyebrow="QUOTES" title="名句精读" description="从低门槛名句进入原文与体系。" />
        <div className="grid gap-5 md:grid-cols-3">
          {quotes.slice(0, 6).map((quote) => <Card key={quote.id} title={quote.quote} description={quote.translation} href={`/quotes/${quote.id}`} eyebrow={quote.sourceChapter} />)}
        </div>
      </section>
      <MedicalDisclaimer />
    </div>
  )
}
