import 'moment/locale/ru'
import moment from 'moment'

export function distinct(value: any, index: any, self: any) {
  return self.indexOf(value) === index
}

export function createPreview(content: any, length: any) {
  let body = extractBody(content, length).substring(0, length)
  return body.length < length ? body : body.concat('...')
}

export function extractBody(content: any, length: any) {
  let body = ''
  if (content != null && content.blocks != null) {
    for (let i = 0; i < content.blocks.length; i++) {
      body += content.blocks[i].text + ' '
      if (body.length >= length) break
    }
  }
  return body
}

export function formatDate(timestamp: any) {
  return moment(timestamp).format('DD MMM YYYY')
}

export function formatDateTime(timestamp: any) {
  return moment(timestamp).local().format('DD MMM YYYY HH:MM')
}

export function fromNow(timestamp: any) {
  return moment(timestamp).fromNow()
}

export function wordEnd(num: any, words: any) {
  return words[((num = Math.abs(num % 100)) > 10 && num < 15) || (num %= 10) > 4 || num === 0 ? 2 : num === 1 ? 0 : 1]
}
