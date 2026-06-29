import type { Meridian } from '@/types'

interface MeridianViewerProps {
  meridian?: Meridian
}

function buildPath(points: NonNullable<Meridian['pathPoints']>) {
  if (!points.length) return ''
  return points.map((point, index) => `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`).join(' ')
}

export function MeridianViewer({ meridian }: MeridianViewerProps) {
  const points = meridian?.pathPoints ?? [
    { x: 180, y: 120, label: '头面' }, { x: 160, y: 205, label: '胸腹' }, { x: 140, y: 320, label: '下肢' }, { x: 130, y: 465, label: '足端' }
  ]
  const path = buildPath(points)
  return (
    <div className="rounded-[2rem] border border-ink/10 bg-white/60 p-6 shadow-soft">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-bold tracking-[0.25em] text-ocher">MERIDIAN MAP</p>
          <h3 className="font-serifCN text-2xl font-bold text-ink">{meridian?.name ?? '十二经络图谱'}</h3>
        </div>
        <div className="flex gap-2">
          {meridian?.flowTime ? <span className="rounded-full bg-ocher/10 px-4 py-2 text-sm text-ocher">{meridian.flowTime}</span> : null}
          <span className="rounded-full bg-moss/10 px-4 py-2 text-sm text-moss">{meridian?.chartSide === 'back' ? '背面示意' : meridian?.chartSide === 'side' ? '侧面示意' : '正面示意'}</span>
        </div>
      </div>
      <svg viewBox="0 0 360 520" className="mx-auto h-[460px] w-full max-w-md" role="img" aria-label={`${meridian?.name ?? '十二经络'}示意图`}>
        <path d="M180 45c32 0 58 26 58 58s-26 58-58 58-58-26-58-58 26-58 58-58Z" fill="none" stroke="currentColor" className="text-ink/20" strokeWidth="5" />
        <path d="M180 160v160M110 205c-40 60-48 120-35 190M250 205c40 60 48 120 35 190M130 320l-35 165M230 320l35 165" fill="none" stroke="currentColor" className="text-ink/20" strokeWidth="8" strokeLinecap="round" />
        <path d={path} fill="none" stroke="currentColor" className="text-cinnabar" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="10 10" />
        {points.map((point, index) => (
          <g key={`${point.x}-${point.y}-${index}`}>
            <circle cx={point.x} cy={point.y} r="7" className="fill-cinnabar" />
            {point.label ? <text x={point.x + 10} y={point.y - 8} className="fill-ink text-xs">{point.label}</text> : null}
          </g>
        ))}
        <text x="180" y="505" textAnchor="middle" className="fill-ink text-xs">经络路线为学习示意，非医学诊断或取穴图</text>
      </svg>
      {meridian ? (
        <div className="mt-4 space-y-4 leading-7 text-ink/70">
          <p>{meridian.routeDescription}</p>
          {meridian.pairedMeridian ? <p><strong className="text-ink">表里经：</strong>{meridian.pairedMeridian}</p> : null}
        </div>
      ) : null}
    </div>
  )
}
