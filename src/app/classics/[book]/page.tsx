import { notFound } from 'next/navigation'
import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { bookNames, getChaptersByBook } from '@/data/classics'
import type { BookId } from '@/types'

const books: BookId[] = ['suwen', 'lingshu']

export function generateStaticParams() {
  return books.map((book) => ({ book }))
}

export default function BookPage({ params }: { params: { book: BookId } }) {
  if (!books.includes(params.book)) notFound()
  const chapters = getChaptersByBook(params.book)
  return (
    <div>
      <SectionHeader eyebrow="BOOK" title={bookNames[params.book]} description="按篇章阅读原文，逐步理解关键词与体系关系。" />
      <div className="grid gap-5 md:grid-cols-2">
        {chapters.map((chapter) => (
          <Card key={chapter.id} title={`${chapter.chapterNumber}. ${chapter.title}`} description={chapter.introduction} href={`/classics/${params.book}/${chapter.id}`} eyebrow={bookNames[chapter.book]} />
        ))}
      </div>
    </div>
  )
}
