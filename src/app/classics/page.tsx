import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { bookNames, getChaptersByBook } from '@/data/classics'

export default function ClassicsPage() {
  return (
    <div>
      <SectionHeader eyebrow="CLASSICS" title="原典阅读" description="《素问》偏重理论，《灵枢》偏重经络针刺。每篇提供原文、断句、白话和思想解读。" />
      <div className="grid gap-6 md:grid-cols-2">
        {(['suwen', 'lingshu'] as const).map((book) => (
          <Card key={book} title={bookNames[book]} description={`已整理完整 ${getChaptersByBook(book).length} 篇目录，支持从 CText 原典源读取全文。`} href={`/classics/${book}`} eyebrow="BOOK" />
        ))}
      </div>
    </div>
  )
}
