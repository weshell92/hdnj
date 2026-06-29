import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ClassicReader } from '@/components/classics/ClassicReader'
import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { Badge } from '@/components/ui/Badge'
import { bookNames, classicChapters, getAdjacentChapters, getChapter } from '@/data/classics'
import type { BookId } from '@/types'

export function generateStaticParams() {
  return classicChapters.map((chapter) => ({ book: chapter.book, chapterId: chapter.id }))
}

export default function ChapterPage({ params }: { params: { book: BookId; chapterId: string } }) {
  const chapter = getChapter(params.book, params.chapterId)
  if (!chapter) notFound()
  const adjacent = getAdjacentChapters(params.book, params.chapterId)
  return (
    <article className="mx-auto max-w-4xl space-y-8">
      <div className="rounded-[2rem] bg-white/60 p-8 shadow-soft">
        <p className="text-sm font-bold tracking-[0.25em] text-cinnabar">{bookNames[chapter.book]}</p>
        <h1 className="mt-3 font-serifCN text-4xl font-bold text-ink">{chapter.title}</h1>
        <p className="mt-5 leading-8 text-ink/70">{chapter.introduction}</p>
        <div className="mt-5 flex flex-wrap gap-2">{chapter.relatedConcepts.map((id) => <Badge key={id} href={`/concepts/${id}`}>{id}</Badge>)}</div>
      </div>
      <ClassicReader chapter={chapter} />
      <div className="flex justify-between gap-4">
        {adjacent.previous ? <Link className="rounded-full bg-white/70 px-5 py-3" href={`/classics/${params.book}/${adjacent.previous.id}`}>上一篇：{adjacent.previous.title}</Link> : <span />}
        {adjacent.next ? <Link className="rounded-full bg-white/70 px-5 py-3" href={`/classics/${params.book}/${adjacent.next.id}`}>下一篇：{adjacent.next.title}</Link> : <span />}
      </div>
      <MedicalDisclaimer />
    </article>
  )
}
