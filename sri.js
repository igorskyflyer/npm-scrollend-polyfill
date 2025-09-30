import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'

const data = readFileSync('dist/scrollend.min.js')
const hash = createHash('sha256').update(data).digest('base64')

// biome-ignore lint/suspicious/noConsole: Needed for output
console.log(`sha256-${hash}`)
