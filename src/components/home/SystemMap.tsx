import Link from 'next/link'

const nodes = [
  ['天人相应', '/concepts/tianren'],
  ['阴阳五行', '/concepts/yinyang'],
  ['脏腑经络', '/concepts/zangfu'],
  ['气血津液', '/concepts/qi'],
  ['病因病机', '/concepts/disease-balance'],
  ['治未病', '/concepts/zhiweibing'],
  ['四时养生', '/seasons']
]

export function SystemMap() {
  return (
    <div className="grid gap-4 md:grid-cols-7">
      {nodes.map(([label, href], index) => (
        <Link key={label} href={href} className="group relative rounded-3xl border border-ink/10 bg-white/60 p-5 text-center shadow-soft">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cinnabar/10 font-serifCN text-xl text-cinnabar">{index + 1}</span>
          <span className="mt-4 block font-semibold text-ink group-hover:text-cinnabar">{label}</span>
        </Link>
      ))}
    </div>
  )
}
