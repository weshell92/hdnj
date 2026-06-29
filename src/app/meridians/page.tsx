import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { MeridianViewer } from '@/components/meridians/MeridianViewer'
import { meridians } from '@/data/meridians'

export default function MeridiansPage() {
  return (
    <div className="space-y-10">
      <SectionHeader eyebrow="MERIDIANS" title="十二经络系统" description="将《灵枢》中复杂的经络路线转化为可探索的图谱和详情页面。" />
      <MeridianViewer />
      <div className="grid gap-5 md:grid-cols-3">
        {meridians.map((meridian) => <Card key={meridian.id} title={meridian.name} description={meridian.routeDescription} href={`/meridians/${meridian.id}`} eyebrow={`${meridian.yinYang} · ${meridian.relatedOrgan}`} />)}
      </div>
    </div>
  )
}
