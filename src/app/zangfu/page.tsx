import { Card } from '@/components/ui/Card'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { zangfu } from '@/data/zangfu'

export default function ZangfuPage() {
  return (
    <div>
      <SectionHeader eyebrow="ZANGFU" title="五脏六腑系统" description="在《黄帝内经》中，脏腑是功能、情志、经络、五行和时间关系的综合系统。" />
      <div className="grid gap-5 md:grid-cols-3">
        {zangfu.map((organ) => <Card key={organ.id} title={organ.name} description={organ.summary} href={`/zangfu/${organ.id}`} eyebrow={`${organ.type === 'zang' ? '五脏' : '六腑'} · ${organ.wuxing}`} />)}
      </div>
    </div>
  )
}
