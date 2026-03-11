
const ATTRS = [
  { name: 'Trustworthy', desc: 'Core — foundation of every decision' },
  { name: 'Precise',     desc: 'Visual and communication tone' },
  { name: 'Professional',desc: 'Enterprise register' },
  { name: 'Sovereign',   desc: 'Strategic differentiator' },
]

const ANTI = [
  { name: 'A crypto exchange',    desc: 'Dark, aggressive, speculative' },
  { name: 'Generic SaaS product', desc: 'Standard blues, Material Design' },
  { name: 'Developer console',    desc: 'Too technical, emotionless' },
  { name: 'Bitcoin mining brand', desc: 'Direct visual overlap with Blockware' },
]

const DOT = (
  <div style={{ width: 6, height: 6, borderRadius: '50%', border: '1.5px solid var(--neutral-200)', background: 'var(--neutral-0)', flexShrink: 0 }} />
)

function LeftSep() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '20px 0' }}>
      <div style={{ flex: 0.45, height: 2, background: 'var(--brand-primary)' }} />
      <div style={{ flex: 1, height: 1, background: 'var(--neutral-200)' }} />
      {DOT}
    </div>
  )
}

function RightSep() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '20px 0' }}>
      {DOT}
      <div style={{ flex: 1, height: 1, background: 'var(--neutral-200)' }} />
      <div style={{ flex: 0.45, height: 2, background: 'var(--state-negative)' }} />
    </div>
  )
}

export default function Foundation() {
  return (
    <section className="section">
      <div className="eyebrow">
        <span className="eyebrow-num">01</span>
        <span className="eyebrow-tag">Brand Foundation</span>
      </div>
      <h2 className="section-title">Discovery &amp; Alignment</h2>
      <p className="section-subtitle">
        Align on brand direction before any visual production begins.
      </p>
      <div className="section-rule" />

      {/* Column header labels */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px 1fr', marginBottom: 'var(--sp-xl)' }}>
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)' }}>Attributes</p>
        <div />
        <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', textAlign: 'right' }}>Anti-patterns</p>
      </div>

      {/* 3-column body */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px 1fr', alignItems: 'stretch' }}>

        {/* Left: Attributes */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {ATTRS.map((a, i) => (
            <div key={a.name}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 26, fontWeight: 500, color: 'var(--brand-primary)', lineHeight: 1.2, marginBottom: 4 }}>
                {a.name}
              </p>
              <p style={{ fontSize: 14, color: 'var(--neutral-900)', lineHeight: 1.5 }}>
                {a.desc}
              </p>
              {i < ATTRS.length - 1 && <LeftSep />}
            </div>
          ))}
        </div>

        {/* Center: spacer */}
        <div />

        {/* Right: Anti-patterns */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {ANTI.map((a, i) => (
            <div key={a.name}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 26, fontWeight: 500, color: 'var(--state-negative)', lineHeight: 1.2, marginBottom: 4, textAlign: 'right' }}>
                {a.name}
              </p>
              <p style={{ fontSize: 14, color: 'var(--neutral-900)', lineHeight: 1.5, textAlign: 'right' }}>
                {a.desc}
              </p>
              {i < ANTI.length - 1 && <RightSep />}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
