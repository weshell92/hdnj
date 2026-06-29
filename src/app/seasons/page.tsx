import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { seasons } from '@/data/seasons'

export default function SeasonsPage() {
  return (
    <div>
      <SectionHeader eyebrow="SEASONS" title="四季养生" description="以春生、夏长、秋收、冬藏理解《黄帝内经》的时间生命观。" />
      <div className="grid gap-5 md:grid-cols-4">
        {seasons.map((season) => <Card key={season.id} title={season.title} description={season.translation} href={`/seasons/${season.id}`} eyebrow={season.corePrinciple} />)}
      </div>
    </div>
  )
}
