
const MODELS = [
  {
    name: 'House of Brands',
    eg: 'e.g. P&G → Tide, Pampers, Gillette',
    desc: "Each brand is completely independent. The parent brand is invisible to consumers. Maximum flexibility, but no shared equity.",
    verdict: "✗ Not recommended — Nodestream should leverage Blockware's equity",
    verdictColor: 'var(--state-negative)',
    selected: false,
  },
  {
    name: 'Endorsed Sub-brand',
    eg: 'e.g. Courtyard by Marriott',
    desc: 'Sub-brand has its own distinct identity and mark, but the parent brand endorses it — "Nodestream by Blockware." Best of both worlds.',
    verdict: '✓ Recommended — distinct identity + Blockware trust signal',
    verdictColor: 'var(--brand-primary)',
    selected: true,
  },
  {
    name: 'Branded House',
    eg: 'e.g. Google → Google Maps, Drive',
    desc: 'One master brand, sub-brands are purely descriptive. "Blockware Nodestream." Maximum unity, minimum sub-brand independence.',
    verdict: "~ Possible but limits Nodestream's independent positioning",
    verdictColor: 'var(--state-caution)',
    selected: false,
  },
]

const CONTEXTS = [
  { ctx: 'Product UI (app header)',  appears: 'Nodestream logo only',                                    hierarchy: 'Nodestream primary' },
  { ctx: 'Marketing website',        appears: 'Nodestream logo + "by Blockware" in header/footer',       hierarchy: 'Nodestream primary, Blockware secondary' },
  { ctx: 'Investor decks',           appears: 'Nodestream logo + "A Blockware Company" on cover',        hierarchy: 'Both visible, Nodestream leads' },
  { ctx: 'Press releases',           appears: '"Blockware Solutions launches Nodestream..."',             hierarchy: 'Blockware leads in copy, Nodestream leads visually' },
  { ctx: 'Favicon / app icon',       appears: 'Nodestream symbol only',                                  hierarchy: 'Too small for endorsement' },
]

const COL_STYLE: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
}

const CELL_STYLE: React.CSSProperties = {
  padding: '8px 16px',
  borderBottom: '1px solid #f3f3f3',
  fontSize: 14,
  color: '#595956',
  lineHeight: 1.4,
}

const HEADER_CELL_STYLE: React.CSSProperties = {
  padding: '12px 16px',
  borderBottom: '1px solid #f3f3f3',
  fontSize: 12,
  fontWeight: 700,
  color: 'var(--brand-primary)',
  letterSpacing: '.06em',
  textTransform: 'uppercase' as const,
}

import type React from 'react'

export default function LogoSection() {
  return (
    <section className="section">
      <div className="eyebrow">
        <span className="eyebrow-num">06<span style={{ fontSize: '9.5px' }}>.01</span></span>
        <span className="eyebrow-tag">Brand Model</span>
      </div>
      <h2 className="section-title">Sub Brand Model</h2>
      <p className="section-subtitle">
        There are three established models for how a sub-brand relates to its parent.
      </p>
      <div className="section-rule" />

      {/* Model cards */}
      <div className="grid-3" style={{ marginBottom: 'var(--sp-3xl)', alignItems: 'stretch' }}>
        {MODELS.map(m => (
          <div
            key={m.name}
            className="elevate"
            style={{
              background: 'var(--neutral-0)',
              borderTop: m.selected ? '4px solid var(--brand-primary)' : undefined,
              borderRadius: 0,
              boxShadow: '0 5px 20px rgba(84,84,84,.12)',
              padding: 'var(--sp-xl)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--sp-lg)',
            }}
          >
            {/* Name + example grouped */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 26, fontWeight: 400, lineHeight: 1.3, color: 'var(--neutral-900)', whiteSpace: 'nowrap' }}>
                  {m.name}
                </p>
                {m.selected && (
                  <span style={{
                    display: 'inline-flex', alignItems: 'center',
                    padding: '4px 12px', height: 26, flexShrink: 0,
                    border: '1px solid var(--brand-primary)',
                    background: 'rgba(33,161,67,.10)',
                    borderRadius: 999,
                    fontSize: 11, fontWeight: 600, color: 'var(--brand-primary)',
                  }}>
                    ✦
                  </span>
                )}
              </div>
              <p style={{ fontSize: 14, color: 'var(--neutral-400)', lineHeight: 1.4 }}>{m.eg}</p>
            </div>

            {/* Description */}
            <p style={{ fontSize: 15, color: 'var(--neutral-900)', lineHeight: 1.5, letterSpacing: '-0.01em' }}>
              {m.desc}
            </p>

            {/* Verdict */}
            <p style={{ fontSize: 14, fontWeight: 500, color: m.verdictColor, lineHeight: 1.4 }}>
              {m.verdict}
            </p>
          </div>
        ))}
      </div>

      {/* Context table */}
      <p style={{ fontSize: 14, color: '#595956', marginBottom: 'var(--sp-md)' }}>
        What Nodestream Overrides vs. Inherits
      </p>
      <div className="elevate" style={{
        background: 'var(--neutral-0)',
        boxShadow: '0 5px 20px rgba(84,84,84,.12)',
        display: 'flex',
      }}>
        {/* Context column */}
        <div style={COL_STYLE}>
          <div style={HEADER_CELL_STYLE}>Context</div>
          {CONTEXTS.map((c, i) => (
            <div key={c.ctx} style={{ ...CELL_STYLE, borderBottom: i === CONTEXTS.length - 1 ? 'none' : '1px solid #f3f3f3' }}>{c.ctx}</div>
          ))}
        </div>

        {/* What Appears column */}
        <div style={{ ...COL_STYLE, borderLeft: '1px solid #f3f3f3' }}>
          <div style={HEADER_CELL_STYLE}>What Appears</div>
          {CONTEXTS.map((c, i) => (
            <div key={c.ctx} style={{ ...CELL_STYLE, borderBottom: i === CONTEXTS.length - 1 ? 'none' : '1px solid #f3f3f3' }}>{c.appears}</div>
          ))}
        </div>

        {/* Hierarchy column */}
        <div style={{ ...COL_STYLE, borderLeft: '1px solid #f3f3f3' }}>
          <div style={HEADER_CELL_STYLE}>Hierarchy</div>
          {CONTEXTS.map((c, i) => (
            <div key={c.ctx} style={{ ...CELL_STYLE, borderBottom: i === CONTEXTS.length - 1 ? 'none' : '1px solid #f3f3f3' }}>{c.hierarchy}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
