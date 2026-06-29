interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? <p className="mb-3 text-sm font-bold tracking-[0.3em] text-cinnabar">{eyebrow}</p> : null}
      <h2 className="font-serifCN text-3xl font-bold text-ink md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-lg leading-8 text-ink/70">{description}</p> : null}
    </div>
  )
}
