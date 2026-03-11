
const CATEGORIES = [
  { name: 'color.*',            desc: 'Brand, surface, border, text, semantic states', badge: 'Must - Nodestream overrides', badgeGreen: true },
  { name: 'type.font-family.*', desc: 'Heading (Roboto Serif), Body (Inter)',           badge: 'Must - Nodestream overrides', badgeGreen: true },
  { name: 'spacing-.*',         desc: '14-step scale: 0 → 80px',                       badge: 'Inherited from Blockware',    badgeGreen: false },
  { name: 'radius-.*',          desc: '8-step scale: 0 → 32px',                        badge: 'Inherited from Blockware',    badgeGreen: false },
]

const NEW_TOKENS: { token?: string; desc: string }[] = [
  { token: 'brand.primary',           desc: 'Nodestream green (#21A143)' },
  { token: 'brand.primary-dark',      desc: 'Dark green (#0D3321)' },
  { token: 'brand.accent',            desc: 'Blockware orange (#F28C00)' },
  { token: 'type.font-family.heading', desc: 'Roboto Serif (replaces Montserrat)' },
  { token: 'type.font-family.body',    desc: 'Inter (replaces Montserrat)' },
  { desc: 'Shadow tokens (new — not in Blockware DS)' },
  { desc: 'Motion/duration tokens (new)' },
]

const INHERITED = [
  'All spacing tokens (0–80px, 14-step scale)',
  'All border radius tokens (0–32px, 8-step scale)',
  'All neutral color primitives (50–900)',
  'All semantic state colors (positive, negative, caution, info)',
  'All surface, border, text semantic tokens',
  'Button, icon, input component tokens',
  'Type scale (sizes, line heights, paragraph spacing)',
  'Token naming conventions & structure',
]

export default function Tokens() {
  return (
    <section className="section">
      <div className="eyebrow">
        <span className="eyebrow-num">08</span>
        <span className="eyebrow-tag">Reference</span>
      </div>
      <h2 className="section-title">Design Token Architecture</h2>
      <p className="section-subtitle">
        A structured, scalable token system that bridges Figma and code — extending
        Blockware's existing design system, not replacing it.
      </p>
      <div className="section-rule" />

      {/* ── Key Principle ── */}
      <div className="elevate" style={{
        background: 'var(--neutral-0)',
        borderTop: '4px solid var(--brand-primary)',
        borderRadius: '0 0 var(--r-sm) var(--r-sm)',
        boxShadow: 'var(--shadow-card)',
        padding: 'var(--sp-lg)',
        display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)',
        marginBottom: 'var(--sp-3xl)',
      }}>
        <p style={{ fontSize: 14, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--brand-primary)' }}>
          ✓ Key Principle
        </p>
        <p style={{ fontSize: 16, color: 'var(--neutral-600)', lineHeight: 1.6 }}>
          We are extending Blockware's token system — not replacing it. Blockware's Primitives (spacing, radius, neutral colors) are inherited as-is. Only brand colors, typography, and Nodestream-specific overrides are new tokens.
        </p>
      </div>

      {/* ── Token Categories At A Glance ── */}
      <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', marginBottom: 'var(--sp-lg)' }}>
        Token Categories At A Glance
      </p>
      <div className="grid-4" style={{ marginBottom: 'var(--sp-3xl)' }}>
        {CATEGORIES.map(c => (
          <div key={c.name} className="elevate" style={{
            background: 'var(--neutral-0)',
            borderLeft: '4px solid var(--brand-primary)',
            borderRadius: '0 var(--r-sm) var(--r-sm) 0',
            boxShadow: 'var(--shadow-card)',
            padding: 'var(--sp-lg)',
            display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 600, color: 'var(--neutral-600)', lineHeight: 1.2 }}>
                {c.name}
              </p>
              <p style={{ fontSize: 12, color: 'var(--neutral-600)', lineHeight: 1.5, whiteSpace: 'nowrap' }}>{c.desc}</p>
            </div>
            <span style={{
              display: 'inline-flex', alignItems: 'center', alignSelf: 'flex-start',
              padding: '4px 14px', height: 32,
              border: `1px solid ${c.badgeGreen ? 'var(--brand-primary)' : '#9e9e9e'}`,
              background: c.badgeGreen ? 'rgba(33,161,67,.08)' : 'rgba(158,158,158,.1)',
              borderRadius: '999px',
              fontSize: 13, fontWeight: 500,
              color: c.badgeGreen ? 'var(--brand-primary)' : '#9e9e9e',
              whiteSpace: 'nowrap',
            }}>
              {c.badge}
            </span>
          </div>
        ))}
      </div>

      {/* ── What Nodestream Overrides vs Inherits ── */}
      <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', marginBottom: 'var(--sp-lg)' }}>
        What Nodestream Overrides vs Inherits
      </p>
      <div className="grid-2" style={{ alignItems: 'stretch' }}>

        {/* New / Override */}
        <div className="elevate" style={{
          background: 'var(--neutral-0)',
          borderTop: '4px solid var(--brand-primary)',
          borderRadius: '0 0 var(--r-sm) var(--r-sm)',
          boxShadow: 'var(--shadow-card)',
          padding: 'var(--sp-lg)',
          display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)',
        }}>
          <p style={{ fontSize: 14, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--brand-primary)' }}>
            🆕 New / Override
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {NEW_TOKENS.map((item, i) => (
              <p key={i} style={{ fontSize: 15, color: 'var(--neutral-600)', lineHeight: 1.7 }}>
                <span style={{ color: 'var(--brand-primary)' }}>→</span>{' '}
                {item.token
                  ? <>
                      <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, color: 'var(--brand-primary)' }}>{item.token}</span>
                      {' — '}{item.desc}
                    </>
                  : item.desc
                }
              </p>
            ))}
          </div>
        </div>

        {/* Inherited from Blockware */}
        <div className="elevate" style={{
          background: 'var(--neutral-0)',
          borderTop: '4px solid var(--state-info)',
          borderRadius: '0 0 var(--r-sm) var(--r-sm)',
          boxShadow: 'var(--shadow-card)',
          padding: 'var(--sp-lg)',
          display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)',
        }}>
          <p style={{ fontSize: 14, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--state-info)' }}>
            🔵 Inherited from Blockware
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {INHERITED.map(item => (
              <p key={item} style={{ fontSize: 15, color: 'var(--neutral-600)', lineHeight: 1.7 }}>
                <span style={{ color: 'var(--neutral-400)' }}>→</span>{' '}{item}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
