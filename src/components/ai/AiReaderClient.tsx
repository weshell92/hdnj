'use client'

import { useState } from 'react'
import { answerClassicQuestion } from '@/lib/assistant'

const examples = ['阴阳是什么意思？', '上工治未病如何理解？', '春三月此谓发陈是什么意思？', '经脉为什么重要？']

export function AiReaderClient() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  function ask(value = question) {
    setQuestion(value)
    setAnswer(answerClassicQuestion(value))
  }

  return (
    <div className="rounded-[2rem] border border-ink/10 bg-white/60 p-6 shadow-soft">
      <div className="flex flex-wrap gap-2">
        {examples.map((item) => (
          <button key={item} onClick={() => ask(item)} className="rounded-full bg-cinnabar/10 px-4 py-2 text-sm text-cinnabar hover:bg-cinnabar hover:text-white">{item}</button>
        ))}
      </div>
      <textarea
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        rows={5}
        placeholder="请输入经典学习问题。示例：阴阳在《黄帝内经》中是什么意思？"
        className="mt-6 w-full rounded-2xl border border-ink/10 bg-paper/60 p-4 leading-7 outline-none ring-cinnabar/20 focus:ring-4"
      />
      <button onClick={() => ask()} className="mt-4 rounded-full bg-ink px-6 py-3 text-paper hover:bg-cinnabar">生成解读</button>
      {answer ? <pre className="mt-6 whitespace-pre-wrap rounded-2xl bg-ink p-5 leading-8 text-paper">{answer}</pre> : null}
    </div>
  )
}
