/**
 * In-place image compression under public/resources.
 * Keeps filenames and paths; overwrites originals.
 */
import { readdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const ROOT = path.join(process.cwd(), 'public', 'resources')
const MAX_EDGE = 2200
const JPEG_QUALITY = 83

async function walkFiles (dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const out = []
  for (const e of entries) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) {
      out.push(...await walkFiles(p))
    } else {
      out.push(p)
    }
  }
  return out
}

async function compressJpeg (filePath) {
  const fs = await import('node:fs/promises')
  const before = (await fs.stat(filePath)).size
  const buf = await sharp(filePath)
    .rotate()
    .resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: 'inside',
      withoutEnlargement: true
    })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toBuffer()

  await fs.writeFile(filePath, buf)
  return { before, after: buf.length }
}

async function compressPng (filePath) {
  const fs = await import('node:fs/promises')
  const before = (await fs.stat(filePath)).size
  const meta = await sharp(filePath).metadata()
  let pipeline = sharp(filePath).rotate()

  if (meta.width && meta.height && (meta.width > MAX_EDGE || meta.height > MAX_EDGE)) {
    pipeline = pipeline.resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: 'inside',
      withoutEnlargement: true
    })
  }

  const buf = await pipeline
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toBuffer()

  if (buf.length >= before) {
    return { before, after: before, skipped: true }
  }

  await fs.writeFile(filePath, buf)
  return { before, after: buf.length }
}

async function main () {
  const files = await walkFiles(ROOT)
  const imageFiles = files.filter(f => /\.(jpe?g|png)$/i.test(f))

  let totalBefore = 0
  let totalAfter = 0

  for (const file of imageFiles) {
    const ext = path.extname(file).toLowerCase()
    try {
      let result
      if (ext === '.jpg' || ext === '.jpeg') {
        result = await compressJpeg(file)
      } else if (ext === '.png') {
        result = await compressPng(file)
      } else {
        continue
      }
      totalBefore += result.before
      totalAfter += result.after
      const rel = path.relative(process.cwd(), file)
      if (result.skipped) {
        console.log(`${rel}: skipped (already optimal, ${(result.before / 1024 / 1024).toFixed(2)}MB)`)
        continue
      }
      const saved = ((1 - result.after / result.before) * 100).toFixed(1)
      console.log(`${rel}: ${(result.before / 1024 / 1024).toFixed(2)}MB → ${(result.after / 1024 / 1024).toFixed(2)}MB (${saved}% smaller)`)
    } catch (err) {
      console.error(`Failed: ${file}`, err.message)
      process.exitCode = 1
    }
  }

  console.log('')
  console.log(`Total: ${(totalBefore / 1024 / 1024).toFixed(2)}MB → ${(totalAfter / 1024 / 1024).toFixed(2)}MB`)
}

main()
