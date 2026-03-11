export default function Hero() {
  return (
    <section className="section hero" style={{ minHeight: '100vh' }}>
      <div className="hero-grid" />
      <div className="hero-gradient" />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <p className="hero-eyebrow">Nodestream by Blockware — v1.0 2026</p>
        <h1 className="hero-title">
          Sovereign<br />
          <em>Precision</em><br />
          Light.
        </h1>
        <p className="hero-desc">
          The complete visual language for Nodestream — a premium AI infrastructure marketplace
          built for high-value, high-trust transactions. Own the means of AI production.
        </p>

        <div className="hero-meta">
          {[
            { k: 'Visual Direction', v: 'Direction 1 — Selected' },
            { k: 'Heading Typeface', v: 'Roboto Serif' },
            { k: 'Body Typeface',    v: 'Inter' },
            { k: 'Primary Color',    v: '#21A143', color: 'var(--brand-primary)' },
            { k: 'Version',          v: '1.0 — Initial Release' },
          ].map(m => (
            <div key={m.k} className="hero-meta-item">
              <span className="hero-meta-key">{m.k}</span>
              <span className="hero-meta-val" style={m.color ? { color: m.color } : undefined}>{m.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
