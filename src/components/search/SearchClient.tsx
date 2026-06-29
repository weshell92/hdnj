'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import type { SearchResult } from '@/types'
import { searchAll } from '@/lib/search'

const filters: Array<{ label: string; value?: SearchResult['type'] }> = [
  { label: '全部' },
  { label: '原文', value: 'chapter' },
  { label: '概念', value: 'concept' },
  { label: '名句', value: 'quote' },
  { label: '脏腑', value: 'organ' },
  { label: '经络', value: 'meridian' },
  { label: '四季', value: 'season' }
]

export function SearchClient() {
  const [query, setQuery] = useState('')
  const [type, setType] = useState<SearchResult['type'] | undefined>()
  const results = useMemo(() => searchAll(query, type), [query, type])

  return (
    <div className="space-y-6">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="搜索：肝、阴阳、治未病、春三月、经络……"
        className="w-full rounded-2xl border border-ink/10 bg-white/70 px-5 py-4 text-lg outline-none ring-cinnabar/20 focus:ring-4"
      />
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.label}
            onClick={() => setType(filter.value)}
            className={`rounded-full px-4 py-2 text-sm ${type === filter.value ? 'bg-cinnabar text-white' : 'bg-white/70 text-ink/70'}`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="grid gap-4">
        {results.map((result) => (
          <Link key={`${result.type}-${result.id}`} href={result.url} className="rounded-3xl border border-ink/10 bg-white/60 p-5 shadow-soft transition hover:-translate-y-1">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-ocher">{result.type}</p>
            <h3 className="mt-2 font-serifCN text-2xl font-bold text-ink">{result.title}</h3>
            <p className="mt-3 leading-7 text-ink/70">{result.excerpt}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-cinnabar">{result.tags.slice(0, 6).map((tag) => <span key={tag}>#{tag}</span>)}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}
