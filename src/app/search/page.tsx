import { SearchClient } from '@/components/search/SearchClient'
import { SectionHeader } from '@/components/ui/SectionHeader'

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <SectionHeader eyebrow="SEARCH" title="全站搜索" description="搜索原文、篇章、概念、名句、脏腑、经络和四季养生。" />
      <SearchClient />
    </div>
  )
}
