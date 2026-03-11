// Figma ref: node 3403-6708 — Logo System

const SYMBOL_SRC = 'https://www.figma.com/api/mcp/asset/b142b762-d889-4a29-a29f-f6ac92caef47'

type Priority = 'must' | 'should'

interface LogoVariant {
  variant: string
  description: string
  useCase: string
  priority: Priority
}

const VARIANTS: LogoVariant[] = [
  { variant: 'Primary Logo',           description: 'Symbol + "Nodestream" wordmark, horizontal',      useCase: 'Product UI header, standalone contexts',           priority: 'must' },
  { variant: 'Endorsed lockup',        description: 'Primary logo + "by Blockware" in secondary type', useCase: 'Marketing site, investor decks, press materials',  priority: 'must' },
  { variant: 'Stacked logo',           description: 'Symbol above wordmark, vertical',                 useCase: 'Square formats, social profile images',            priority: 'must' },
  { variant: 'Dark version',           description: 'For dark backgrounds',                            useCase: 'Product UI, dark marketing pages',                 priority: 'must' },
  { variant: 'Light version',          description: 'For light backgrounds (primary)',                  useCase: 'Print, documents, light pages',                   priority: 'must' },
  { variant: 'Monochrome (white + black)', description: 'Single color versions',                       useCase: 'Overlays, embossing, single-color print',          priority: 'must' },
  { variant: 'Favicon (16–256px)',     description: 'Pixel-optimized icon mark',                       useCase: 'Browser tab, bookmarks',                           priority: 'should' },
]

const PRIORITY_COLOR: Record<Priority, string> = {
  must:   'var(--state-negative)',
  should: '#D97706',
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

function LogoMock({ endorsed }: { endorsed: boolean }) {
  return (
    <div style={{
      background: '#171717',
      border: '1px solid #262626',
      borderRadius: 4,
      padding: '32px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={SYMBOL_SRC} alt="Nodestream symbol" style={{ height: 30, width: 25, flexShrink: 0 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <p style={{ fontSize: 16, fontWeight: 700, color: '#e8e8f0', lineHeight: 1, whiteSpace: 'nowrap', margin: 0 }}>
            Nodestream
          </p>
          {endorsed && (
            <p style={{ fontSize: 10, fontWeight: 400, color: '#fb923c', lineHeight: 1, whiteSpace: 'nowrap', margin: 0 }}>
              by Blockware
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

import type React from 'react'

export default function LogoSystem() {
  return (
    <section className="section">
      <div className="eyebrow">
        <span className="eyebrow-num">07</span>
        <span className="eyebrow-tag">Identity</span>
      </div>
      <h2 className="section-title">Logo System</h2>
      <p className="section-subtitle">
        The Nodestream logo system, with the addition of co-branding variants that include the Blockware endorsement.
      </p>
      <div className="section-rule" />

      {/* ── Logo System Components ── */}
      <p style={{ fontSize: 14, color: 'var(--neutral-600)', marginBottom: 'var(--sp-md)' }}>
        Logo System Components
      </p>
      <div className="elevate" style={{
        background: 'var(--neutral-0)',
        boxShadow: '0 5px 20px rgba(84,84,84,.12)',
        display: 'flex',
        marginBottom: 'var(--sp-4xl)',
      }}>
        {/* Variant */}
        <div style={COL}>
          <div style={HEADER_CELL}>Variant</div>
          {VARIANTS.map((v, i) => (
            <div key={v.variant} style={{ ...CELL, borderBottom: i === VARIANTS.length - 1 ? 'none' : '1px solid #f3f3f3' }}>
              {v.variant}
            </div>
          ))}
        </div>

        {/* Description */}
        <div style={{ ...COL, borderLeft: '1px solid #f3f3f3' }}>
          <div style={HEADER_CELL}>Description</div>
          {VARIANTS.map((v, i) => (
            <div key={v.variant} style={{ ...CELL, borderBottom: i === VARIANTS.length - 1 ? 'none' : '1px solid #f3f3f3' }}>
              {v.description}
            </div>
          ))}
        </div>

        {/* Use Case */}
        <div style={{ ...COL, borderLeft: '1px solid #f3f3f3' }}>
          <div style={HEADER_CELL}>Use Case</div>
          {VARIANTS.map((v, i) => (
            <div key={v.variant} style={{ ...CELL, borderBottom: i === VARIANTS.length - 1 ? 'none' : '1px solid #f3f3f3' }}>
              {v.useCase}
            </div>
          ))}
        </div>

        {/* Priority */}
        <div style={{ ...COL, borderLeft: '1px solid #f3f3f3', maxWidth: 100 }}>
          <div style={HEADER_CELL}>Priority</div>
          {VARIANTS.map((v, i) => (
            <div key={v.variant} style={{
              ...CELL,
              borderBottom: i === VARIANTS.length - 1 ? 'none' : '1px solid #f3f3f3',
              color: PRIORITY_COLOR[v.priority],
              fontWeight: 600,
            }}>
              {v.priority === 'must' ? 'Must' : 'Should'}
            </div>
          ))}
        </div>
      </div>

      {/* ── Endorsed Lockup Preview ── */}
      <p style={{ fontSize: 14, color: 'var(--neutral-600)', marginBottom: 'var(--sp-md)' }}>
        Endorsed Lockup Preview — Placeholder
      </p>
      <div className="grid-2" style={{ marginBottom: 'var(--sp-sm)' }}>
        {/* Primary */}
        <div className="elevate" style={{
          background: 'var(--neutral-0)',
          boxShadow: '0 5px 20px rgba(84,84,84,.12)',
          padding: 'var(--sp-lg)',
          display: 'flex', flexDirection: 'column', gap: 'var(--sp-sm)',
        }}>
          <LogoMock endorsed={false} />
          <p style={{ fontSize: 22, fontWeight: 400, color: 'var(--neutral-900)', lineHeight: 1.2 }}>
            Primary — No endorsement (product UI)
          </p>
        </div>

        {/* Endorsed */}
        <div className="elevate" style={{
          background: 'var(--neutral-0)',
          boxShadow: '0 5px 20px rgba(84,84,84,.12)',
          padding: 'var(--sp-lg)',
          display: 'flex', flexDirection: 'column', gap: 'var(--sp-sm)',
        }}>
          <LogoMock endorsed={true} />
          <p style={{ fontSize: 22, fontWeight: 400, color: 'var(--neutral-900)', lineHeight: 1.2 }}>
            Endorsed lockup (marketing / investor)
          </p>
        </div>
      </div>

      <p style={{ fontSize: 13, color: 'var(--neutral-400)', textAlign: 'right', fontStyle: 'italic' }}>
        ⚠️ Placeholder concepts only — not final designs.
      </p>

      {/* ── Variants Examples ── */}
      <div style={{ marginTop: 'var(--sp-5xl)' }}>
        <p style={{ fontSize: 14, color: 'var(--neutral-600)', marginBottom: 'var(--sp-md)' }}>
          Variants Examples
        </p>
        <div style={{
          background: 'var(--neutral-0)',
          boxShadow: '0 5px 20px rgba(84,84,84,.12)',
          borderTop: '4px solid var(--neutral-200)',
          padding: 'var(--sp-5xl) var(--sp-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 240,
        }}>
          <p style={{ fontSize: 13, color: 'var(--neutral-300)', letterSpacing: '.06em', textTransform: 'uppercase', fontWeight: 600 }}>
            Coming soon
          </p>
        </div>
      </div>
    </section>
  )
}
