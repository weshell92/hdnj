import type { ClassicChapter } from '@/types'

const UI_STOP_WORDS = [
  '中國哲學書電子化計劃', '中国哲学书电子化计划', '高級檢索', '高级检索', '書名檢索', '书名检索',
  '顯示', '显示', '打開字典', '打开字典', '相關討論', '相关讨论', '電子圖書館', '电子图书馆',
  '英文翻譯', 'English', 'Facebook', 'Twitter', '豆瓣', '簡體', '简体', '首頁', '首页', '登入', '登录'
]

function decodeEntities(input: string) {
  return input
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

function stripHtml(html: string) {
  return decodeEntities(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, '\n')
      .replace(/<style[\s\S]*?<\/style>/gi, '\n')
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/(p|div|td|tr|li|h1|h2|h3|h4|section)>/gi, '\n')
      .replace(/<[^>]+>/g, '')
  )
}

function looksLikeOriginalLine(line: string, chapterTitle: string) {
  const text = line.trim()
  if (!text) return false
  if (!/[\u3400-\u9fff]/.test(text)) return false
  if (UI_STOP_WORDS.some((word) => text.includes(word))) return false
  if (/^[0-9]+$/.test(text)) return false
  if (text.includes('->')) return false
  if (text.length < 8) return false
  if (text.includes('中檢索') || text.includes('中检索')) return false
  const titleHead = chapterTitle.slice(0, Math.min(2, chapterTitle.length))
  if (text === chapterTitle || text === `《${chapterTitle}》`) return false
  if (text.includes(`${titleHead}... :`) || text.includes(`${chapterTitle}:`) || text.includes(`${chapterTitle}：`)) return false
  return true
}

export function parseCtextOriginal(html: string, chapterTitle: string) {
  const plain = stripHtml(html)
  const lines = plain.split('\n').map((line) => line.replace(/\s+/g, ' ').trim()).filter(Boolean)
  const h2Index = lines.findIndex((line) => line.includes(`《${chapterTitle}》`) || line === chapterTitle)
  const after = h2Index >= 0 ? lines.slice(h2Index + 1) : lines
  const collected: string[] = []
  let started = false
  for (const line of after) {
    if (!started) {
      if (line.includes(`${chapterTitle.slice(0, 2)}`) && line.includes(':')) {
        started = true
        continue
      }
      if (/^[一二三四五六七八九十百千萬余黃帝歧岐伯雷公少師伯高臣]/.test(line) && looksLikeOriginalLine(line, chapterTitle)) {
        started = true
      } else {
        continue
      }
    }
    if (started) {
      if (line.includes('全文檢索') || line.includes('全文检索') || line.includes('相關原典') || line.includes('相关原典')) break
      if (looksLikeOriginalLine(line, chapterTitle)) collected.push(line)
    }
  }
  const text = collected.join('\n\n').replace(/\n{3,}/g, '\n\n').trim()
  return text.length >= 20 ? text : ''
}

export async function getCtextOriginalText(chapter: ClassicChapter) {
  if (!chapter.sourceUrl) return ''
  try {
    const response = await fetch(chapter.sourceUrl, {
      next: { revalidate: 60 * 60 * 24 * 7 },
      headers: { 'user-agent': 'Mozilla/5.0 hdnj-classics-reader' }
    })
    if (!response.ok) return ''
    const html = await response.text()
    return parseCtextOriginal(html, chapter.baseTitle ?? chapter.title.replace(/篇第\d+|第\d+$/g, ''))
  } catch {
    return ''
  }
}
