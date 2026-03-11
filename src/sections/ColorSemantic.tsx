// Figma ref: node 3403-4212 — Semantic Colors
import CopySwatch from '../components/CopySwatch'

interface SemanticCardProps {
  bg: string; name: string; label: string; hex: string; token: string; usage: string
}

function SemanticCard({ bg, name, label, hex, token, usage }: SemanticCardProps) {
  return (
    <div className="elevate" style={{
      background: 'var(--neutral-0)',
      borderRadius: 'var(--r-lg)',
      padding: 'var(--sp-lg)',
      boxShadow: 'var(--shadow-card)',
      display: 'flex', flexDirection: 'column', gap: 'var(--sp-sm)',
    }}>
      <CopySwatch bg={bg} hex={hex} />
      <p style={{ fontSize: 20, fontWeight: 400, lineHeight: 1.2, color: 'var(--neutral-900)' }}>
        {name} <span style={{ fontSize: 15, color: 'var(--neutral-600)' }}>({label})</span>
      </p>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--neutral-600)' }}>
        {hex} · <span style={{ fontFamily: 'var(--font-heading)' }}>{token}</span>
      </p>
      <p style={{ fontSize: 11, color: 'var(--neutral-400)', lineHeight: 1.4, whiteSpace: 'nowrap' }}>{usage}</p>
    </div>
  )
}

export default function ColorSemantic() {
  return (
    <section className="section">
      <div className="eyebrow">
        <span className="eyebrow-num">03<span style={{ fontSize: '9.5px' }}>.03</span></span>
        <span className="eyebrow-tag">Color System</span>
      </div>
      <h2 className="section-title">Semantic Colors</h2>
      <p className="section-subtitle">
        State colors inherited directly from Blockware's design system.
      </p>
      <div className="section-rule" />

      <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', marginBottom: 'var(--sp-lg)' }}>
        State Colors <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0 }}>(Inherited from Blockware DS)</span>
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--sp-lg)', marginBottom: 'var(--sp-3xl)' }}>
        <SemanticCard
          bg="#21A143" name="Positive" label="Success"
          hex="#21A143" token="state.positive-primary"
          usage="Confirm., success states, verified badges"
        />
        <SemanticCard
          bg="#CC0018" name="Negative" label="Error"
          hex="#CC0018" token="state.negative-primary"
          usage="Errors, destructive actions, validation failures"
        />
        <SemanticCard
          bg="#F28C00" name="Caution" label="Warning"
          hex="#F28C00" token="state.caution-primary"
          usage="Warnings, pending states, attention needed"
        />
        <SemanticCard
          bg="#1368D8" name="Info" label="Info"
          hex="#1368D8" token="state.info-primary"
          usage="Informational messages, tooltips, help text"
        />
      </div>

      {/* Note callout */}
      <div style={{ position: 'relative', paddingLeft: 'var(--sp-xl)' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: '#DEE0D9' }} />
        <div style={{ position: 'absolute', left: 0, top: 0, height: 32, width: 3, background: 'var(--brand-primary)' }} />
        <p style={{ fontSize: 17, fontWeight: 400, color: 'var(--neutral-900)', lineHeight: 1.3, marginBottom: 'var(--sp-sm)' }}>
          Note
        </p>
        <p style={{ fontSize: 14, color: 'var(--neutral-900)', lineHeight: 1.8 }}>
          The Caution color (#F28C00) is the same as the Brand Accent. This is intentional — it reinforces
          the Blockware sub-brand connection while serving a semantic purpose. Always pair it with a supporting
          label or icon to clearly distinguish caution states from accent or promotional usage across UI components.
        </p>
      </div>
    </section>
  )
}
