
const HEADINGS = [
  { label: 'H1', spec: '32px / 40px · SemiBold · −0.5px', sample: 'Sovereign Compute', style: { fontFamily: 'var(--font-heading)', fontSize: '32px', fontWeight: 600, lineHeight: '40px', letterSpacing: '-0.5px', color: 'var(--neutral-900)' } },
  { label: 'H2', spec: '24px / 32px · SemiBold', sample: 'AI Infrastructure Marketplace', style: { fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 600, lineHeight: '32px', color: 'var(--neutral-900)' } },
  { label: 'H3', spec: '20px / 28px · SemiBold', sample: '8x H100 80GB Cluster', style: { fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 600, lineHeight: '28px', color: 'var(--neutral-900)' } },
  { label: 'H4', spec: '18px / 26px · SemiBold', sample: 'Hardware Specifications', style: { fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 600, lineHeight: '26px', color: 'var(--neutral-900)' } },
  { label: 'H5', spec: '16px / 24px · SemiBold', sample: 'Hosting & Billing Details', style: { fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 600, lineHeight: '24px', color: 'var(--neutral-900)' } },
]

const BODY = [
  { label: 'Body XXL', spec: '32px / 40px · Regular', sample: '$130,000', style: { fontFamily: 'var(--font-body)', fontSize: '32px', fontWeight: 400, lineHeight: '40px', color: 'var(--neutral-900)' } },
  { label: 'Body XL',  spec: '24px / 32px · Regular', sample: 'Available Now · US East', style: { fontFamily: 'var(--font-body)', fontSize: '24px', fontWeight: 400, lineHeight: '32px', color: 'var(--neutral-900)' } },
  { label: 'Body LG',  spec: '16px / 24px · Regular', sample: 'Buyers acquire sovereign ownership of AI-grade servers.', style: { fontFamily: 'var(--font-body)', fontSize: '16px', fontWeight: 400, lineHeight: '24px', color: 'var(--neutral-600)' } },
  { label: 'Body MD',  spec: '14px / 20px · Regular', sample: '8x NVIDIA A100 80GB PCIe · Dual AMD EPYC 7742 · 1TB DDR4', style: { fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'var(--neutral-600)' } },
  { label: 'Body SM',  spec: '14px / 20px · Regular', sample: 'Rack-ready AI compute cluster with full hardware title.', style: { fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: 400, lineHeight: '20px', color: 'var(--neutral-400)' } },
  { label: 'Body XS',  spec: '12px / 18px · Regular', sample: 'NS-A100-8X-HW-OWN · Last Updated 2 hours ago · Verified Seller', style: { fontFamily: 'var(--font-body)', fontSize: '12px', fontWeight: 400, lineHeight: '18px', color: 'var(--neutral-400)' } },
]

export default function Typography() {
  return (
    <section className="section">
      <div className="eyebrow">
        <span className="eyebrow-num">04</span>
        <span className="eyebrow-tag">Typography</span>
      </div>
      <h2 className="section-title">Font Families</h2>
      <p className="section-subtitle">
        Two typefaces — a serif for headings (authority, precision) and a sans-serif
        for body (clarity, readability at dense UI scale).
      </p>
      <div className="section-rule" />

      {/* Font family showcase */}
      <div className="grid-2" style={{ marginBottom: 'var(--sp-5xl)' }}>
        <div className="card card-top-accent">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-sm)' }}>
            <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--brand-primary)', letterSpacing: '.08em', textTransform: 'uppercase' }}>Heading Typeface</span>
            <span className="badge badge-green">Roboto Serif</span>
          </div>
          <div style={{ marginBottom: 'var(--sp-lg)' }}>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 600, lineHeight: 1.2, color: 'var(--neutral-900)', marginBottom: 4 }}>
              Sovereign Compute
            </p>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 600, color: 'var(--neutral-600)', marginBottom: 4 }}>
              AI Infrastructure Marketplace
            </p>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 400, fontStyle: 'italic', color: 'var(--neutral-400)' }}>
              "Own the means of AI production."
            </p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--sp-sm)', flexWrap: 'wrap', marginBottom: 'var(--sp-md)' }}>
            <span className="badge badge-gray">Weight: 400 Regular</span>
            <span className="badge badge-gray">Weight: 600 SemiBold</span>
            <span className="badge badge-gray">Weight: 700 Bold</span>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--neutral-400)' }}>Used for: H1–H5, display text, section titles</p>
        </div>

        <div className="card card-top-accent">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-sm)' }}>
            <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--brand-primary)', letterSpacing: '.08em', textTransform: 'uppercase' }}>Body Typeface</span>
            <span className="badge badge-green">Inter</span>
          </div>
          <div style={{ marginBottom: 'var(--sp-lg)' }}>
            <p style={{ fontSize: '16px', fontWeight: 400, lineHeight: 1.5, color: 'var(--neutral-600)', marginBottom: 4 }}>
              Buyers acquire sovereign ownership of AI-grade servers hosted in professional data centers.
            </p>
            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--neutral-900)', marginBottom: 4 }}>
              Hardware listing · Verified Seller · KYC Approved · $130,000 USDC
            </p>
            <p style={{ fontSize: '12px', color: 'var(--neutral-400)' }}>
              8× A100 80GB Cluster · US East Tier 3 · Available Now
            </p>
          </div>
          <div style={{ display: 'flex', gap: 'var(--sp-sm)', flexWrap: 'wrap', marginBottom: 'var(--sp-md)' }}>
            <span className="badge badge-gray">Weight: 400 Regular</span>
            <span className="badge badge-gray">Weight: 600 SemiBold</span>
            <span className="badge badge-gray">Weight: 700 Bold</span>
          </div>
          <p style={{ fontSize: '12px', color: 'var(--neutral-400)' }}>Used for: body text, labels, UI copy, data</p>
        </div>
      </div>

      {/* Type scale */}
      <div className="grid-2" style={{ alignItems: 'start' }}>
        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--brand-primary)', marginBottom: 'var(--sp-md)' }}>
            Headings — Roboto Serif
          </p>
          <div className="card" style={{ padding: 0 }}>
            {HEADINGS.map(h => (
              <div key={h.label} className="type-row" style={{ padding: 'var(--sp-md) var(--sp-lg)' }}>
                <div className="type-meta">
                  <span className="type-label">{h.label}</span>
                  <span className="type-spec">{h.spec}</span>
                </div>
                <p style={h.style}>{h.sample}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--brand-primary)', marginBottom: 'var(--sp-md)' }}>
            Body — Inter
          </p>
          <div className="card" style={{ padding: 0 }}>
            {BODY.map(b => (
              <div key={b.label} className="type-row" style={{ padding: 'var(--sp-md) var(--sp-lg)' }}>
                <div className="type-meta">
                  <span className="type-label">{b.label}</span>
                  <span className="type-spec">{b.spec}</span>
                </div>
                <p style={b.style}>{b.sample}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pairing rationale */}
      <div className="grid-2" style={{ marginTop: 'var(--sp-3xl)' }}>
        <div className="callout">
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 400, marginBottom: 'var(--sp-sm)', color: 'var(--neutral-900)' }}>Roboto Serif</p>
          <p>Brings authority and editorial weight to headings — signaling Nodestream is a serious, trustworthy platform for high-value transactions. The serif detail communicates precision and permanence, aligned with hardware ownership, not ephemeral cloud rental.</p>
        </div>
        <div className="callout">
          <p style={{ fontSize: '20px', fontWeight: 400, marginBottom: 'var(--sp-sm)', color: 'var(--neutral-900)' }}>Inter</p>
          <p>Provides maximum legibility for dense UI content — prices, specs, status labels, and form fields. Its neutrality lets the serif headings lead visually while keeping body text highly readable at small sizes.</p>
        </div>
      </div>
    </section>
  )
}
