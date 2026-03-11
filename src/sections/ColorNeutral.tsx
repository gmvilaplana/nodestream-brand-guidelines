// Figma ref: node 3403-4123 — Neutral Palette
import CopySwatch from '../components/CopySwatch'

interface ColorCardProps {
  bg: string; name: string; hex: string; token: string; border?: boolean
}

function ColorCard({ bg, name, hex, token, border }: ColorCardProps) {
  return (
    <div className="elevate" style={{
      background: 'var(--neutral-0)',
      borderRadius: 'var(--r-lg)',
      padding: 'var(--sp-lg)',
      boxShadow: 'var(--shadow-card)',
      display: 'flex', flexDirection: 'column', gap: 'var(--sp-sm)',
    }}>
      <CopySwatch bg={bg} hex={hex} border={border} />
      <p style={{ fontSize: 20, fontWeight: 400, lineHeight: 1.2, color: 'var(--neutral-900)' }}>{name}</p>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--neutral-600)' }}>{hex}</p>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: 14, color: 'var(--neutral-600)' }}>{token}</p>
    </div>
  )
}

export default function ColorNeutral() {
  return (
    <section className="section">
      <div className="eyebrow">
        <span className="eyebrow-num">03<span style={{ fontSize: '9.5px' }}>.02</span></span>
        <span className="eyebrow-tag">Color System</span>
      </div>
      <h2 className="section-title">Neutral Palette</h2>
      <p className="section-subtitle">
        Neutral colors for backgrounds, surfaces, borders, and text. Light theme primary.
      </p>
      <div className="section-rule" />

      {/* Dark Neutrals */}
      <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', marginBottom: 'var(--sp-lg)' }}>
        Dark Neutrals — Text &amp; Dark Surfaces
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--sp-md)', marginBottom: 'var(--sp-3xl)' }}>
        <ColorCard bg="#000000" name="Pure Black" hex="#000000" token="neutral/1000"    />
        <ColorCard bg="#121212" name="Near Black" hex="#121212" token="neutral/900 (P)" />
        <ColorCard bg="#2B2B2B" name="Charcoal"   hex="#2B2B2B" token="neutral.black"   />
        <ColorCard bg="#525252" name="Mid Gray"   hex="#525252" token="neutral/600"     />
        <ColorCard bg="#808080" name="Disabled"   hex="#808080" token="neutral/400"     />
      </div>

      {/* Light Neutrals */}
      <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', marginBottom: 'var(--sp-lg)' }}>
        Light Neutrals — Backgrounds &amp; Surfaces
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--sp-md)' }}>
        <ColorCard bg="#E8E8E8" name="Light Gray" hex="#E8E8E8" token="neutral.primary-dark" border />
        <ColorCard bg="#F5F5F5" name="Surface"    hex="#F5F5F5" token="neutral.primary"      border />
        <ColorCard bg="#FAFAFA" name="Near White" hex="#FAFAFA" token="neutral/50"           border />
        <ColorCard bg="#FFFFFF" name="White"      hex="#FFFFFF" token="neutral/0"            border />
      </div>
    </section>
  )
}
