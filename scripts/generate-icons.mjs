import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const dir = path.dirname(fileURLToPath(import.meta.url))
const publicDir = path.join(dir, '..', 'public')
const source = path.join(dir, 'icon-source.svg')

const targets = [
  { file: 'icon-192.png', size: 192 },
  { file: 'icon-512.png', size: 512 },
  { file: 'icon-maskable-512.png', size: 512 },
  { file: 'apple-touch-icon.png', size: 180 },
  { file: 'favicon-32.png', size: 32 },
]

for (const { file, size } of targets) {
  await sharp(source).resize(size, size).png().toFile(path.join(publicDir, file))
  console.log('wrote', file)
}
