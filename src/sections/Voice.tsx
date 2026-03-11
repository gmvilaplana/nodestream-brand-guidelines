
const SIGNALS = [
  { quote: '"Louis Vuitton of HPC"', source: '— Justin Carlson', body: 'Luxury positioning explicitly requested during presales. Premium, exclusive, aspirational — not commodity.' },
  { quote: '"Sexy UI"', source: '— repeated in discovery sessions', body: 'The team and client consistently use this language. The UI must feel premium and desirable, not functional-only.' },
  { quote: 'Sovereign compute + crypto-native identity', source: '', body: 'The product is built for Web3-adjacent buyers. The aesthetic should feel trustworthy, powerful, and borderless.' },
  { quote: 'White-glove, concierge service', source: '', body: 'High-touch experience for $1M–$100M transactions. The UI must communicate trust, precision, and care.' },
  { quote: 'Investor-ready artifacts needed', source: '', body: 'Brand quality directly impacts fundraising credibility and partner perception.' },
]

const DO_SAY = [
  'Sovereign ownership of AI infrastructure',
  'High-performance compute at institutional scale',
  'Verified seller · KYC approved · Escrow secured',
  'Precision-engineered for mission-critical workloads',
  'White-glove service for enterprise buyers',
]

const DONT_SAY = [
  'Cloud-based or SaaS (Nodestream is hardware ownership)',
  'Cheap, affordable, budget (undercuts luxury positioning)',
  'Speculative, volatile, high-risk (trust destroyer)',
  'Simple, easy (patronizing for $100M buyers)',
  "Mining (conflates with Blockware's existing products)",
]

export default function Voice() {
  return (
    <section className="section">
      <div className="eyebrow">
        <span className="eyebrow-num">07</span>
        <span className="eyebrow-tag">Voice &amp; Tone</span>
      </div>
      <h2 className="section-title">Brand Voice</h2>
      <p className="section-subtitle">
        Nodestream speaks with authority, precision, and restraint.
        Every word signals trust. Emotion is earned through reliability, not enthusiasm.
      </p>
      <div className="section-rule" />

      {/* Brand keywords */}
      <div style={{ display: 'flex', gap: 'var(--sp-sm)', flexWrap: 'wrap', marginBottom: 'var(--sp-3xl)' }}>
        {['Sovereign', 'Exclusive', 'Trustworthy', 'Powerful', 'Precise', 'Durable', 'Institutional', 'Premium'].map(tag => (
          <span key={tag} className="badge badge-green">{tag}</span>
        ))}
      </div>

      {/* Discovery signals */}
      <div style={{ marginBottom: 'var(--sp-5xl)' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', marginBottom: 'var(--sp-lg)' }}>
          Existing Brand Signals (from discovery)
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)' }}>
          {SIGNALS.map(s => (
            <div key={s.quote} className="card" style={{ display: 'flex', gap: 'var(--sp-md)', alignItems: 'flex-start' }}>
              <span style={{ color: 'var(--brand-primary)', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>✓</span>
              <div>
                <p style={{ fontWeight: 600, fontSize: '15px', color: 'var(--neutral-900)', marginBottom: 2 }}>
                  {s.quote}
                  {s.source && <span style={{ fontWeight: 400, color: 'var(--neutral-400)', fontSize: '13px', marginLeft: 6 }}>{s.source}</span>}
                </p>
                <p style={{ fontSize: '13px', color: 'var(--neutral-600)', lineHeight: 1.5 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Do / Don't say */}
      <div className="grid-2">
        <div className="rule-box rule-do">
          <p className="rule-head">✓ Do Say</p>
          <ul className="rule-list">
            {DO_SAY.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>
        <div className="rule-box rule-dont">
          <p className="rule-head">✗ Don't Say</p>
          <ul className="rule-list">
            {DONT_SAY.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}
