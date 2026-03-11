const CHECKLIST = [
  {
    title: '"by Blockware" text',
    desc: 'Always smaller than the Nodestream wordmark — approximately 60–70% of the wordmark size',
  },
  {
    title: 'Spacing',
    desc: 'Minimum 4px between Nodestream wordmark and endorsement text. Increase to 8px when both appear on light backgrounds.',
  },
  {
    title: 'Color of endorsement text',
    desc: "Use BWS's primary brand color (tbd) — creates visual distinction from Nodestream's wordmark",
  },
  {
    title: "Never use Blockware's logo mark",
    desc: 'Only the Blockware wordmark/name appears in the endorsement — not their symbol/icon',
  },
  {
    title: 'Placement',
    desc: 'Below the Nodestream wordmark, left-aligned. Never above or to the side.',
  },
  {
    title: 'Minimum size for endorsed lockup',
    desc: '160px wide — below this, drop the endorsement and use primary logo only',
  },
]

type EndorsementLevel = 'always' | 'yes' | 'optional' | 'recommended' | 'no'

interface ContextRow {
  context: string
  endorsement: EndorsementLevel
  format: string
}

const CONTEXT_ROWS: ContextRow[] = [
  { context: 'Investor decks / pitch materials', endorsement: 'always',      format: '"A Blockware Company" on cover + footer' },
  { context: 'Marketing website',               endorsement: 'yes',          format: '"by Blockware" in header or footer' },
  { context: 'Press releases',                  endorsement: 'always',       format: 'In copy: "Blockware Solutions\' Nodestream platform..."' },
  { context: 'Product UI (app)',                endorsement: 'optional',     format: 'Nodestream logo only in header; Blockware in footer/about' },
  { context: 'Email signatures',                endorsement: 'recommended',  format: 'Nodestream logo + "Blockware Solutions" in small text' },
  { context: 'Social media profiles',           endorsement: 'recommended',  format: 'Mention in bio: "by @BlockwareSolutions"' },
  { context: 'Favicon / app icon',              endorsement: 'no',           format: 'Nodestream symbol only — too small for endorsement' },
  { context: 'Loading screens',                 endorsement: 'no',           format: 'Nodestream mark only' },
]

const ENDORSEMENT_LABEL: Record<EndorsementLevel, string> = {
  always:      '✓ Always',
  yes:         '✓ Yes',
  optional:    '~ Optional',
  recommended: '~ Recommended',
  no:          '✗ No',
}

const ENDORSEMENT_COLOR: Record<EndorsementLevel, string> = {
  always:      'var(--brand-primary)',
  yes:         'var(--brand-primary)',
  optional:    '#D97706',
  recommended: '#D97706',
  no:          'var(--state-negative)',
}

const COL: React.CSSProperties = { flex: 1, display: 'flex', flexDirection: 'column' }

const CELL: React.CSSProperties = {
  padding: '8px 16px',
  borderBottom: '1px solid #f3f3f3',
  fontSize: 14,
  color: '#595956',
  lineHeight: 1.4,
}

const HEADER_CELL: React.CSSProperties = {
  padding: '12px 16px',
  borderBottom: '1px solid #f3f3f3',
  fontSize: 12,
  fontWeight: 700,
  color: 'var(--brand-primary)',
  letterSpacing: '.06em',
  textTransform: 'uppercase' as const,
}

import type React from 'react'

export default function CoBrandingRules() {
  return (
    <section className="section">
      <div className="eyebrow">
        <span className="eyebrow-num">06<span style={{ fontSize: '9.5px' }}>.03</span></span>
        <span className="eyebrow-tag">Brand Model</span>
      </div>
      <h2 className="section-title">Co-branding Rules</h2>
      <p className="section-subtitle">
        Guidelines for when and how to show the Blockware endorsement alongside the Nodestream logo.
      </p>
      <div className="section-rule" />

      {/* ── Application Checklist ── */}
      <p style={{ fontSize: 14, color: 'var(--neutral-600)', marginBottom: 'var(--sp-md)' }}>
        Application Checklist per Screen
      </p>
      <div className="elevate" style={{
        background: 'var(--neutral-0)',
        borderTop: '4px solid var(--brand-primary)',
        boxShadow: '0 5px 20px rgba(84,84,84,.12)',
        marginBottom: 'var(--sp-4xl)',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 0,
        }}>
          {CHECKLIST.map((item, i) => {
            const isRight = i % 2 === 1
            const isLastRow = i >= CHECKLIST.length - 2
            return (
              <div
                key={item.title}
                style={{
                  padding: '16px var(--sp-lg)',
                  borderBottom: isLastRow ? 'none' : '1px solid #f3f3f3',
                  borderLeft: isRight ? '1px solid #f3f3f3' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--neutral-900)', lineHeight: 1.4 }}>
                  <span style={{ color: 'var(--brand-primary)', marginRight: 6 }}>✓</span>
                  {item.title}
                </p>
                <p style={{ fontSize: 14, color: 'var(--neutral-600)', lineHeight: 1.6, paddingLeft: 18 }}>
                  {item.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── When to Show the Blockware Endorsement ── */}
      <p style={{ fontSize: 14, color: 'var(--neutral-600)', marginBottom: 'var(--sp-md)' }}>
        When to Show the Blockware Endorsement
      </p>
      <div className="elevate" style={{
        background: 'var(--neutral-0)',
        boxShadow: '0 5px 20px rgba(84,84,84,.12)',
        display: 'flex',
      }}>
        {/* Context column */}
        <div style={COL}>
          <div style={HEADER_CELL}>Context</div>
          {CONTEXT_ROWS.map((r, i) => (
            <div key={r.context} style={{
              ...CELL,
              borderBottom: i === CONTEXT_ROWS.length - 1 ? 'none' : '1px solid #f3f3f3',
            }}>
              {r.context}
            </div>
          ))}
        </div>

        {/* Show Endorsement? column */}
        <div style={{ ...COL, borderLeft: '1px solid #f3f3f3', maxWidth: 220 }}>
          <div style={HEADER_CELL}>Show Endorsement?</div>
          {CONTEXT_ROWS.map((r, i) => (
            <div key={r.context} style={{
              ...CELL,
              borderBottom: i === CONTEXT_ROWS.length - 1 ? 'none' : '1px solid #f3f3f3',
              color: ENDORSEMENT_COLOR[r.endorsement],
              fontWeight: 500,
            }}>
              {ENDORSEMENT_LABEL[r.endorsement]}
            </div>
          ))}
        </div>

        {/* Format column */}
        <div style={{ ...COL, borderLeft: '1px solid #f3f3f3' }}>
          <div style={HEADER_CELL}>Format</div>
          {CONTEXT_ROWS.map((r, i) => (
            <div key={r.context} style={{
              ...CELL,
              borderBottom: i === CONTEXT_ROWS.length - 1 ? 'none' : '1px solid #f3f3f3',
            }}>
              {r.format}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
