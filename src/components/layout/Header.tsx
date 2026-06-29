import Link from 'next/link'

const nav = [
  ['原典', '/classics'],
  ['知识体系', '/concepts'],
  ['脏腑', '/zangfu'],
  ['经络', '/meridians'],
  ['四季养生', '/seasons'],
  ['名句', '/quotes'],
  ['学习路径', '/learning'],
  ['搜索', '/search']
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-serifCN text-xl font-bold text-ink">黄帝内经</Link>
        <nav className="hidden items-center gap-5 text-sm text-ink/70 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-cinnabar">{label}</Link>
          ))}
        </nav>
        <Link href="/ai-reader" className="rounded-full bg-ink px-4 py-2 text-sm text-paper hover:bg-cinnabar">AI 读书助手</Link>
      </div>
    </header>
  )
}
