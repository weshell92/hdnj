import Link from 'next/link'

interface BadgeProps {
  children: React.ReactNode
  href?: string
}

export function Badge({ children, href }: BadgeProps) {
  const className = 'inline-flex rounded-full border border-cinnabar/20 bg-cinnabar/5 px-3 py-1 text-xs font-medium text-cinnabar'
  if (href) {
    return <Link href={href} className={className}>{children}</Link>
  }
  return <span className={className}>{children}</span>
}
