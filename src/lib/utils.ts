export function cn(...values: Array<string | undefined | false | null>) {
  return values.filter(Boolean).join(' ')
}

export function excerpt(text: string, length = 90) {
  return text.length > length ? `${text.slice(0, length)}…` : text
}
