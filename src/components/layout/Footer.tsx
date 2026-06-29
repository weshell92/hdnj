import Link from 'next/link'

export function Footer() {
  return (
    <footer className="mt-20 border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <h2 className="font-serifCN text-2xl font-bold">黄帝内经</h2>
          <p className="mt-3 text-sm leading-7 text-paper/70">原典阅读、知识图谱、四时养生与古今对照。</p>
        </div>
        <div className="text-sm leading-8 text-paper/70">
          <Link href="/about" className="block hover:text-white">关于本站</Link>
          <Link href="/compare" className="block hover:text-white">古今对照</Link>
          <Link href="/search" className="block hover:text-white">全站搜索</Link>
        </div>
        <p className="text-sm leading-7 text-paper/70">本站用于传统文化学习，不提供诊断、治疗、处方或用药建议。</p>
      </div>
    </footer>
  )
}
