import { AiReaderClient } from '@/components/ai/AiReaderClient'
import { MedicalDisclaimer } from '@/components/MedicalDisclaimer'
import { SectionHeader } from '@/components/ui/SectionHeader'

export default function AiReaderPage() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <SectionHeader eyebrow="AI READER" title="AI 读书助手" description="帮助理解原文、名句和概念；不做诊断、开方或治疗建议。" />
      <AiReaderClient />
      <MedicalDisclaimer />
    </div>
  )
}
