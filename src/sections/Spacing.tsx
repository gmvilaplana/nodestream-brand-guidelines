
const SPACING = [
  { token: 'spacing-none',    val: '0px',  px: 0 },
  { token: 'spacing-xxs',     val: '2px',  px: 2 },
  { token: 'spacing-xs',      val: '4px',  px: 4 },
  { token: 'spacing-xs-soft', val: '6px',  px: 6 },
  { token: 'spacing-sm',      val: '8px',  px: 8 },
  { token: 'spacing-md-soft', val: '12px', px: 12 },
  { token: 'spacing-md',      val: '16px', px: 16 },
  { token: 'spacing-lg',      val: '24px', px: 24 },
  { token: 'spacing-xl',      val: '32px', px: 32 },
  { token: 'spacing-2xl',     val: '40px', px: 40 },
  { token: 'spacing-3xl',     val: '48px', px: 48 },
  { token: 'spacing-4xl',     val: '56px', px: 56 },
  { token: 'spacing-5xl',     val: '64px', px: 64 },
  { token: 'spacing-6xl',     val: '72px', px: 72 },
  { token: 'spacing-7xl',     val: '80px', px: 80 },
]

const RADIUS = [
  { label: 'None', token: 'radius-none', val: '0px',  r: 0 },
  { label: 'XS',   token: 'radius-xs',   val: '2px',  r: 2 },
  { label: 'SM',   token: 'radius-sm',   val: '4px',  r: 4 },
  { label: 'MD',   token: 'radius-md',   val: '6px',  r: 6 },
  { label: 'LG',   token: 'radius-lg',   val: '8px',  r: 8 },
  { label: 'XL',   token: 'radius-xl',   val: '16px', r: 16 },
  { label: '2XL',  token: 'radius-2xl',  val: '24px', r: 24 },
  { label: '3XL',  token: 'radius-3xl',  val: '32px', r: 32 },
]

const CARD_STYLE: React.CSSProperties = {
  background: 'var(--neutral-0)',
  borderTop: '4px solid var(--brand-primary)',
  borderRadius: '0 0 var(--r-sm) var(--r-sm)',
  boxShadow: 'var(--shadow-card)',
  padding: 'var(--sp-lg)',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--sp-lg)',
}

const CARD_HEADER_STYLE: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
}

function Badge({ label }: { label: string }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '4px 14px', height: 32,
      border: '1px solid var(--brand-primary)',
      background: 'rgba(33,161,67,.08)',
      borderRadius: '999px',
      fontSize: 13, fontWeight: 500, color: 'var(--brand-primary)',
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  )
}

import type React from 'react'

export default function Spacing() {
  return (
    <section className="section">
      <div className="eyebrow">
        <span className="eyebrow-num">05</span>
        <span className="eyebrow-tag">Spacing &amp; Layout</span>
      </div>
      <h2 className="section-title">Spacing Scale &amp; Border Radius</h2>
      <p className="section-subtitle">
        14-step spacing scale and 8-step radius scale — both inherited from Blockware's design system.
        Prefer radius-sm to radius-lg for Sovereign Precision Light's enterprise tone.
      </p>
      <div className="section-rule" />

      <div className="grid-2" style={{ alignItems: 'stretch' }}>

        {/* ── Spacing Tokens card ── */}
        <div className="elevate" style={CARD_STYLE}>
          <div style={CARD_HEADER_STYLE}>
            <p style={{ fontSize: 14, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--brand-primary)' }}>
              Spacing Tokens
            </p>
            <Badge label="Inherited from Blockware DS" />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {SPACING.map(s => (
              <div key={s.token} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span className="token-name" style={{
                  background: 'rgba(33,161,67,.12)',
                  borderRadius: 'var(--r-xs)',
                  padding: '1px 6px',
                  flexShrink: 0,
                }}>{s.token}</span>
                <span className="sp-bar" style={{
                  width: s.px > 0 ? s.px : 1,
                  height: 8,
                  borderRadius: 2,
                  flexShrink: 0,
                }} />
                <span className="token-val" style={{ fontWeight: 700 }}>{s.val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Border Radius card ── */}
        <div className="elevate" style={CARD_STYLE}>
          <div style={CARD_HEADER_STYLE}>
            <p style={{ fontSize: 14, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--brand-primary)' }}>
              Border Radius
            </p>
            <Badge label="Inherited from Blockware DS" />
          </div>

          {/* Rows container — flex:1 so it fills the card height */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)' }}>
            {[RADIUS.slice(0, 4), RADIUS.slice(4)].map((row, i) => (
              <div key={i} style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--sp-md)' }}>
                {row.map(r => (
                  <div key={r.token} style={{
                    background: 'var(--neutral-0)',
                    borderRadius: 12,
                    boxShadow: '0 2px 8px rgba(0,0,0,.06)',
                    padding: 14,
                    display: 'flex', flexDirection: 'column', gap: 8,
                  }}>
                    <div style={{
                      flex: 1,
                      borderRadius: r.r,
                      background: 'rgba(33,161,67,.1)',
                    }} />
                    <p style={{ fontSize: 17, fontWeight: 600, color: 'var(--neutral-900)', lineHeight: 1.2, flexShrink: 0 }}>{r.label}</p>
                    <p style={{ fontSize: 14, color: 'var(--neutral-600)', lineHeight: 1.5, flexShrink: 0 }}>
                      {r.token}<br />{r.val}
                    </p>
                  </div>
                ))}
              </div>
            ))}</div>

          {/* Guidance note */}
          <p style={{ fontSize: 13, color: 'var(--neutral-600)', lineHeight: 1.6 }}>
            <strong>Nodestream guidance:</strong> For "Sovereign Precision Light" direction, prefer{' '}
            <strong style={{ color: 'var(--brand-primary)', fontFamily: 'var(--font-heading)' }}>radius-sm (4px)</strong>{' '}
            to{' '}
            <strong style={{ color: 'var(--brand-primary)', fontFamily: 'var(--font-heading)' }}>radius-lg (8px)</strong>{' '}
            for most UI elements. Avoid overly rounded corners — precision and sharpness reinforce the trustworthy, enterprise tone.
          </p>
        </div>

      </div>
    </section>
  )
}
