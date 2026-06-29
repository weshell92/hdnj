import { Card } from '@/components/ui/Card'
import { ConceptMap } from '@/components/concepts/ConceptMap'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { concepts } from '@/data/concepts'

export default function ConceptsPage() {
  return (
    <div className="space-y-10">
      <SectionHeader eyebrow="KNOWLEDGE" title="知识体系地图" description="把阴阳五行、脏腑经络、气血津液、病因病机、诊法治则连接起来。" />
      <ConceptMap />
      <div className="grid gap-5 md:grid-cols-3">
        {concepts.map((concept) => <Card key={concept.id} title={concept.name} description={concept.summary} href={`/concepts/${concept.id}`} eyebrow={concept.category} />)}
      </div>
    </div>
  )
}
