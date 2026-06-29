import Link from 'next/link'
import { cn } from '@/lib/utils'

interface CardProps {
  title: string
  description: string
  href?: string
  eyebrow?: string
  children?: React.ReactNode
  className?: string
}

export function Card({ title, description, href, eyebrow, children, className }: CardProps) {
  const body = (
    <article className={cn('h-full rounded-3xl border border-ink/10 bg-white/60 p-6 shadow-soft transition hover:-translate-y-1 hover:bg-white/80', className)}>
      {eyebrow ? <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-ocher">{eyebrow}</p> : null}
      <h3 className="font-serifCN text-2xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 leading-7 text-ink/70">{description}</p>
      {children ? <div className="mt-4">{children}</div> : null}
    </article>
  )

  if (href) return <Link href={href}>{body}</Link>
  return body
}
