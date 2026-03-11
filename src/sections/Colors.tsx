
const BRAND = [
  { name: 'Brand Black',   hex: '#000000', token: 'brand.black',        bg: '#000000', text: '#fff' },
  { name: 'Primary Dark',  hex: '#0D3321', token: 'brand.primary-dark', bg: '#0D3321', text: '#fff' },
  { name: 'Primary',       hex: '#21A143', token: 'brand.primary',      bg: '#21A143', text: '#fff' },
  { name: 'Accent / Orange',hex: '#F28C00',token: 'brand.accent',       bg: '#F28C00', text: '#fff' },
]

const NEUTRALS_DARK = [
  { name: 'Pure Black', hex: '#000000', token: 'neutral/1000', bg: '#000000', text: '#fff' },
  { name: 'Near Black', hex: '#121212', token: 'neutral/900 (P)', bg: '#121212', text: '#fff' },
  { name: 'Charcoal',   hex: '#2B2B2B', token: 'neutral.black', bg: '#2B2B2B', text: '#fff' },
  { name: 'Mid Gray',   hex: '#525252', token: 'neutral/600',   bg: '#525252', text: '#fff' },
  { name: 'Disabled',   hex: '#808080', token: 'neutral/400',   bg: '#808080', text: '#fff' },
]

const NEUTRALS_LIGHT = [
  { name: 'Light Gray', hex: '#E8E8E8', token: 'neutral.primary-dark', bg: '#E8E8E8', text: '#000' },
  { name: 'Surface',    hex: '#F5F5F5', token: 'neutral.primary',      bg: '#F5F5F5', text: '#000' },
  { name: 'Near White', hex: '#FAFAFA', token: 'neutral/50',           bg: '#FAFAFA', text: '#000', border: '#E8E8E8' },
  { name: 'White',      hex: '#FFFFFF', token: 'neutral/0',            bg: '#FFFFFF', text: '#000', border: '#E8E8E8' },
]

const SEMANTIC = [
  { name: 'Positive (Success)', hex: '#21A143', token: 'state.positive-primary', desc: 'Confirm, success, verified badges', bg: '#21A143', text: '#fff' },
  { name: 'Negative (Error)',   hex: '#CC0018', token: 'state.negative-primary', desc: 'Errors, destructive actions, failures', bg: '#CC0018', text: '#fff' },
  { name: 'Caution (Warning)',  hex: '#F28C00', token: 'state.caution-primary',  desc: 'Warnings, pending, attention needed', bg: '#F28C00', text: '#fff' },
  { name: 'Info',               hex: '#1368D8', token: 'state.info-primary',     desc: 'Informational, tooltips, help text', bg: '#1368D8', text: '#fff' },
]

interface Sw { name: string; hex: string; token: string; bg: string; text: string; border?: string }

function Swatch({ s }: { s: Sw }) {
  return (
    <div className="swatch-wrap">
      <div className="swatch" style={{ background: s.bg, border: s.border ? `1px solid ${s.border}` : undefined }} />
      <p className="swatch-name">{s.name}</p>
      <p className="swatch-hex">{s.hex}</p>
      <p className="swatch-token">{s.token}</p>
    </div>
  )
}

export default function Colors() {
  return (
    <section className="section">
      <div className="eyebrow">
        <span className="eyebrow-num">03</span>
        <span className="eyebrow-tag">Color System</span>
      </div>
      <h2 className="section-title">Brand Palette</h2>
      <p className="section-subtitle">
        Nodestream's core brand colors. The green family is the primary brand signal —
        trustworthy, sovereign, and unmistakably premium.
      </p>
      <div className="section-rule" />

      {/* Brand green family */}
      <div style={{ marginBottom: 'var(--sp-5xl)' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', marginBottom: 'var(--sp-lg)' }}>
          Brand Green Family &amp; Accent
        </p>
        <div className="grid-4">
          {BRAND.map(s => <Swatch key={s.hex} s={s} />)}
        </div>
      </div>

      {/* Color usage rules */}
      <div className="grid-2" style={{ marginBottom: 'var(--sp-5xl)' }}>
        <div className="rule-box rule-do">
          <p className="rule-head">✓ Do</p>
          <ul className="rule-list">
            <li>Use Brand Primary (#21A143) for CTAs, active states, links</li>
            <li>Use Brand Black for headings and key UI text</li>
            <li>Use Accent sparingly — co-branding moments only</li>
            <li>Use Primary Dark for hover states on primary elements</li>
          </ul>
        </div>
        <div className="rule-box rule-dont">
          <p className="rule-head">✗ Don't</p>
          <ul className="rule-list">
            <li>Don't use Accent (#F28C00) as a primary action color</li>
            <li>Don't use green on green (insufficient contrast)</li>
            <li>Don't use Brand Black on dark backgrounds</li>
            <li>Don't mix Accent with semantic warning colors</li>
          </ul>
        </div>
      </div>

      {/* Neutrals */}
      <div style={{ marginBottom: 'var(--sp-5xl)' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', marginBottom: 'var(--sp-lg)' }}>
          Dark Neutrals — Text &amp; Dark Surfaces
        </p>
        <div className="grid-5" style={{ marginBottom: 'var(--sp-lg)' }}>
          {NEUTRALS_DARK.map(s => <Swatch key={s.hex} s={s} />)}
        </div>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', marginBottom: 'var(--sp-lg)', marginTop: 'var(--sp-xl)' }}>
          Light Neutrals — Backgrounds &amp; Surfaces
        </p>
        <div className="grid-4">
          {NEUTRALS_LIGHT.map(s => <Swatch key={s.hex} s={s} />)}
        </div>
      </div>

      {/* Semantic */}
      <div>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', marginBottom: 'var(--sp-lg)' }}>
          Semantic Colors — Inherited from Blockware DS
        </p>
        <div className="grid-4" style={{ marginBottom: 'var(--sp-lg)' }}>
          {SEMANTIC.map(s => (
            <div key={s.hex} className="swatch-wrap">
              <div className="swatch" style={{ background: s.bg }} />
              <p className="swatch-name">{s.name}</p>
              <p className="swatch-hex">{s.hex}</p>
              <p className="swatch-token">{s.token}</p>
              <p className="swatch-token" style={{ marginTop: 2 }}>{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="callout">
          <p>
            <strong>Note:</strong> The Caution color (#F28C00) is the same as Brand Accent. This is intentional —
            it reinforces the Blockware sub-brand connection while serving a semantic purpose.
            Use context (icon + label) to distinguish caution from accent usage.
          </p>
        </div>
      </div>
    </section>
  )
}
