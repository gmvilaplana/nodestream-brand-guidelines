// Figma ref: node 3403-4064 — Brand Palette
import CopySwatch from '../components/CopySwatch'

interface ColorCardProps {
  bg: string
  name: string
  hex: string
  token: string
  border?: boolean
}

function ColorCard({ bg, name, hex, token, border }: ColorCardProps) {
  return (
    <div className="elevate" style={{
      background: 'var(--neutral-0)',
      borderRadius: 'var(--r-lg)',
      padding: 'var(--sp-lg)',
      boxShadow: 'var(--shadow-card)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--sp-sm)',
    }}>
      <CopySwatch bg={bg} hex={hex} border={border} />
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 20, fontWeight: 400, lineHeight: 1.2, color: 'var(--neutral-900)' }}>
        {name}
      </p>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 400, color: 'var(--neutral-600)' }}>
        {hex}
      </p>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: 14, fontWeight: 400, color: 'var(--neutral-600)' }}>
        {token}
      </p>
    </div>
  )
}

export default function ColorBrand() {
  return (
    <section className="section">
      <div className="eyebrow">
        <span className="eyebrow-num">03<span style={{ fontSize: '9.5px' }}>.01</span></span>
        <span className="eyebrow-tag">Color System</span>
      </div>
      <h2 className="section-title">Brand Palette</h2>
      <p className="section-subtitle">
        Nodestream's core brand colors. The green family is the primary brand signal.
      </p>
      <div className="section-rule" />

      {/* Green family + Accent */}
      <div style={{ marginBottom: 'var(--sp-5xl)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 'var(--sp-lg)' }}>
          {/* Labels row */}
          <p style={{ gridColumn: '1 / 4', fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', marginBottom: 'var(--sp-xs)' }}>
            Brand Green Family
          </p>
          <p style={{ gridColumn: '4', fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', whiteSpace: 'nowrap', marginBottom: 'var(--sp-xs)' }}>
            Blockware Accent <span style={{ fontSize: 9, fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(Sub-brand connector)</span>
          </p>
          {/* Cards row */}
          <ColorCard bg="#000000" name="Brand Black"     hex="#000000" token="brand.black"        />
          <ColorCard bg="#0D3321" name="Primary Dark"    hex="#0D3321" token="brand.primary-dark" />
          <ColorCard bg="#21A143" name="Primary"         hex="#21A143" token="brand.primary"      />
          <ColorCard bg="#F28C00" name="Accent / Orange" hex="#F28C00" token="brand.accent"       />
        </div>
      </div>

      {/* Do / Don't */}
      <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', marginBottom: 'var(--sp-lg)' }}>
        Color Usage Rules
      </p>
      <div className="grid-2">
        {/* Do */}
        <div className="elevate" style={{
          background: 'var(--neutral-0)',
          borderTop: '4px solid var(--brand-primary)',
          borderRadius: '0 0 var(--r-sm) var(--r-sm)',
          boxShadow: 'var(--shadow-card)',
          padding: 'var(--sp-lg)',
          display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)',
        }}>
          <p style={{ fontSize: 16, fontWeight: 600, letterSpacing: '.05em', textTransform: 'uppercase', color: 'var(--brand-primary)' }}>
            ✓ Do
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[
              'Use Brand Primary for CTAs, active states, links',
              'Use Brand Black for headings and key UI text',
              'Use Accent sparingly — co-branding moments only',
              'Use Primary Dark for hover states on primary elements',
            ].map(item => (
              <p key={item} style={{ fontSize: 15, color: 'var(--neutral-600)', lineHeight: 1.5 }}>→ {item}</p>
            ))}
          </div>
        </div>
        {/* Don't */}
        <div className="elevate" style={{
          background: 'var(--neutral-0)',
          borderTop: '4px solid var(--state-negative)',
          borderRadius: '0 0 var(--r-sm) var(--r-sm)',
          boxShadow: 'var(--shadow-card)',
          padding: 'var(--sp-lg)',
          display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)',
        }}>
          <p style={{ fontSize: 16, fontWeight: 600, letterSpacing: '.05em', textTransform: 'uppercase', color: 'var(--state-negative)' }}>
            ✗ Don't
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[
              "Don't use Accent (#F28C00) as a primary action color",
              "Don't use green on green (insufficient contrast)",
              "Don't use Brand Black on dark backgrounds",
              "Don't mix Accent with semantic warning colors",
            ].map(item => (
              <p key={item} style={{ fontSize: 15, color: 'var(--neutral-600)', lineHeight: 1.5 }}>→ {item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
