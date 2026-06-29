import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="rounded-[2rem] bg-white/60 p-10 text-center shadow-soft">
      <h1 className="font-serifCN text-4xl font-bold">未找到页面</h1>
      <p className="mt-4 text-ink/70">可以返回首页或使用搜索继续探索。</p>
      <Link href="/" className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-paper">返回首页</Link>
    </div>
  )
}
