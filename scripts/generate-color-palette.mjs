/**
 * Generates NodeStream color palette files:
 *   - NodeStream-Colors.css  (CSS custom properties)
 *   - NodeStream-Colors.ase  (Adobe Swatch Exchange)
 *   - NodeStream-Colors.clr  (Apple Color List via Python/AppKit)
 * Then zips them into public/NodeStream-Color-Palette.zip
 */

import { writeFileSync, mkdirSync } from 'fs'
import { execSync } from 'child_process'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '../tmp-palette')
mkdirSync(OUT, { recursive: true })

// ─── Color data ──────────────────────────────────────────────────────────────

const BRAND = [
  { name: 'Brand Black',     hex: '#000000', token: '--brand-black' },
  { name: 'Primary Dark',    hex: '#0D3321', token: '--brand-primary-dark' },
  { name: 'Primary',         hex: '#21A143', token: '--brand-primary' },
  { name: 'Accent / Orange', hex: '#F28C00', token: '--brand-accent' },
]

const NEUTRAL = [
  { name: 'Pure Black', hex: '#000000', token: '--neutral-1000' },
  { name: 'Near Black', hex: '#121212', token: '--neutral-900' },
  { name: 'Charcoal',   hex: '#2B2B2B', token: '--neutral-700' },
  { name: 'Mid Gray',   hex: '#525252', token: '--neutral-600' },
  { name: 'Disabled',   hex: '#808080', token: '--neutral-400' },
  { name: 'Light Gray', hex: '#E8E8E8', token: '--neutral-200' },
  { name: 'Surface',    hex: '#F5F5F5', token: '--neutral-100' },
  { name: 'Near White', hex: '#FAFAFA', token: '--neutral-50' },
  { name: 'White',      hex: '#FFFFFF', token: '--neutral-0' },
]

const SEMANTIC = [
  { name: 'Positive / Success', hex: '#21A143', token: '--state-positive' },
  { name: 'Negative / Error',   hex: '#CC0018', token: '--state-negative' },
  { name: 'Caution / Warning',  hex: '#F28C00', token: '--state-caution' },
  { name: 'Info',               hex: '#1368D8', token: '--state-info' },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

function hexToRgb01(hex) {
  const h = hex.replace('#', '')
  return [
    parseInt(h.slice(0, 2), 16) / 255,
    parseInt(h.slice(2, 4), 16) / 255,
    parseInt(h.slice(4, 6), 16) / 255,
  ]
}

// ─── CSS ─────────────────────────────────────────────────────────────────────

function generateCSS() {
  const lines = [
    '/* NodeStream Color Palette',
    ' * Generated: ' + new Date().toISOString().split('T')[0],
    ' * Usage: copy into your project\'s CSS root or design token file',
    ' */',
    '',
    ':root {',
    '  /* ── Brand ── */',
  ]
  BRAND.forEach(c => lines.push(`  ${c.token}: ${c.hex}; /* ${c.name} */`))
  lines.push('', '  /* ── Neutral ── */')
  NEUTRAL.forEach(c => lines.push(`  ${c.token}: ${c.hex}; /* ${c.name} */`))
  lines.push('', '  /* ── Semantic ── */')
  SEMANTIC.forEach(c => lines.push(`  ${c.token}: ${c.hex}; /* ${c.name} */`))
  lines.push('}')
  writeFileSync(join(OUT, 'NodeStream-Colors.css'), lines.join('\n'))
  console.log('✓ CSS generated')
}

// ─── ASE (Adobe Swatch Exchange) ─────────────────────────────────────────────

function utf16BE(str) {
  // Returns Buffer of UTF-16 BE encoded string + null terminator
  const buf = Buffer.alloc((str.length + 1) * 2)
  for (let i = 0; i < str.length; i++) {
    buf.writeUInt16BE(str.charCodeAt(i), i * 2)
  }
  buf.writeUInt16BE(0, str.length * 2)
  return buf
}

function aseColorBlock(name, hex) {
  const nameBuf = utf16BE(name)
  const [r, g, b] = hexToRgb01(hex)
  const model = Buffer.from('RGB ')
  // Data: nameLen(2) + name + model(4) + r(4) + g(4) + b(4) + type(2)
  const data = Buffer.alloc(2 + nameBuf.length + 4 + 4 + 4 + 4 + 2)
  let offset = 0
  data.writeUInt16BE(name.length + 1, offset); offset += 2 // name length (incl null)
  nameBuf.copy(data, offset); offset += nameBuf.length
  model.copy(data, offset); offset += 4
  data.writeFloatBE(r, offset); offset += 4
  data.writeFloatBE(g, offset); offset += 4
  data.writeFloatBE(b, offset); offset += 4
  data.writeUInt16BE(2, offset) // 2 = normal
  const block = Buffer.alloc(2 + 4 + data.length)
  block.writeUInt16BE(0x0001, 0)     // color entry
  block.writeUInt32BE(data.length, 2)
  data.copy(block, 6)
  return block
}

function aseGroupBlock(name) {
  const nameBuf = utf16BE(name)
  const data = Buffer.alloc(2 + nameBuf.length)
  data.writeUInt16BE(name.length + 1, 0)
  nameBuf.copy(data, 2)
  const block = Buffer.alloc(2 + 4 + data.length)
  block.writeUInt16BE(0xC001, 0)     // group start
  block.writeUInt32BE(data.length, 2)
  data.copy(block, 6)
  return block
}

function aseGroupEnd() {
  const block = Buffer.alloc(6)
  block.writeUInt16BE(0xC002, 0)     // group end
  block.writeUInt32BE(0, 2)
  return block
}

function generateASE() {
  const groups = [
    { name: 'Brand',    colors: BRAND },
    { name: 'Neutral',  colors: NEUTRAL },
    { name: 'Semantic', colors: SEMANTIC },
  ]

  const blocks = []
  let blockCount = 0
  for (const g of groups) {
    blocks.push(aseGroupBlock(g.name)); blockCount++
    for (const c of g.colors) {
      blocks.push(aseColorBlock(c.name, c.hex)); blockCount++
    }
    blocks.push(aseGroupEnd()); blockCount++
  }

  const header = Buffer.alloc(12)
  header.write('ASEF', 0, 'ascii')
  header.writeUInt32BE(0x00010000, 4) // version 1.0
  header.writeUInt32BE(blockCount, 8)

  writeFileSync(join(OUT, 'NodeStream-Colors.ase'), Buffer.concat([header, ...blocks]))
  console.log('✓ ASE generated')
}

// ─── CLR (Apple Color List via Python/AppKit) ─────────────────────────────────

function generateCLR() {
  const allColors = [
    ...BRAND.map(c => ({ ...c, group: 'Brand' })),
    ...NEUTRAL.map(c => ({ ...c, group: 'Neutral' })),
    ...SEMANTIC.map(c => ({ ...c, group: 'Semantic' })),
  ]

  const entries = allColors.map(c => {
    const [r, g, b] = hexToRgb01(c.hex)
    return `cl.setColor_forKey_(NSColor.colorWithSRGBRed_green_blue_alpha_(${r}, ${g}, ${b}, 1.0), "${c.group} / ${c.name}")`
  }).join('\n')

  const pythonScript = `
from AppKit import NSColorList, NSColor
import sys
cl = NSColorList.alloc().initWithName_("NodeStream Colors")
${entries}
ok = cl.writeToFile_("${join(OUT, 'NodeStream-Colors.clr')}")
sys.exit(0 if ok else 1)
`
  const pyFile = join(OUT, 'gen_clr.py')
  writeFileSync(pyFile, pythonScript)
  execSync(`python3 "${pyFile}"`)
  console.log('✓ CLR generated')
}

// ─── ZIP ─────────────────────────────────────────────────────────────────────

function generateZip() {
  const dest = join(__dirname, '../public/NodeStream-Color-Palette.zip')
  execSync(`cd "${OUT}" && zip -j "${dest}" NodeStream-Colors.css NodeStream-Colors.ase NodeStream-Colors.clr`)
  console.log('✓ ZIP created → public/NodeStream-Color-Palette.zip')
}

// ─── Run ─────────────────────────────────────────────────────────────────────

generateCSS()
generateASE()
generateCLR()
generateZip()
console.log('\nDone.')
