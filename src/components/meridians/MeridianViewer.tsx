import type { Meridian } from '@/types'

interface MeridianViewerProps {
  meridian?: Meridian
}

export function MeridianViewer({ meridian }: MeridianViewerProps) {
  return (
    <div className="rounded-[2rem] border border-ink/10 bg-white/60 p-6 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-sm font-bold tracking-[0.25em] text-ocher">MERIDIAN MAP</p>
          <h3 className="font-serifCN text-2xl font-bold text-ink">{meridian?.name ?? '十二经络图谱'}</h3>
        </div>
        <span className="rounded-full bg-moss/10 px-4 py-2 text-sm text-moss">示意图</span>
      </div>
      <svg viewBox="0 0 360 520" className="mx-auto h-[420px] w-full max-w-sm">
        <path d="M180 45c32 0 58 26 58 58s-26 58-58 58-58-26-58-58 26-58 58-58Z" fill="none" stroke="currentColor" className="text-ink/25" strokeWidth="5" />
        <path d="M180 160v160M110 205c-40 60-48 120-35 190M250 205c40 60 48 120 35 190M130 320l-35 165M230 320l35 165" fill="none" stroke="currentColor" className="text-ink/25" strokeWidth="8" strokeLinecap="round" />
        <path d="M180 170C145 210 130 250 136 310c5 48-10 86-34 126" fill="none" stroke="currentColor" className="text-cinnabar" strokeWidth="6" strokeLinecap="round" strokeDasharray="10 12" />
        <circle cx="180" cy="170" r="8" className="fill-cinnabar" />
        <circle cx="136" cy="310" r="8" className="fill-cinnabar" />
        <circle cx="102" cy="436" r="8" className="fill-cinnabar" />
        <text x="180" y="505" textAnchor="middle" className="fill-ink text-sm">经络路线为学习示意，非医学诊断图</text>
      </svg>
      {meridian ? <p className="mt-4 leading-7 text-ink/70">{meridian.routeDescription}</p> : null}
    </div>
  )
}
