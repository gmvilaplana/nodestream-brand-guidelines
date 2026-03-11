
const CONCEPTS = [
  {
    id: 'A',
    title: 'A- Inherited Mark',
    desc: "Nodestream's mark is a direct visual evolution of Blockware's. Same geometric family, evolved for HPC/AI. Strongest parent-child connection.",
    recommended: false,
    preview: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12, padding: '40px 24px' }}>
        {/* Blockware → Nodestream evolution */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {/* Blockware mark */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <svg width="32" height="36" viewBox="0 0 32 36" fill="none">
              <polygon points="16,2 30,10 30,26 16,34 2,26 2,10" stroke="#fb923c" strokeWidth="1.5" fill="none"/>
              <polygon points="16,9 23,13 23,21 16,25 9,21 9,13" fill="#fb923c" fillOpacity="0.3" stroke="#fb923c" strokeWidth="1"/>
            </svg>
            <p style={{ fontSize: 9, color: '#fb923c', fontFamily: 'var(--font-body)', whiteSpace: 'nowrap' }}>Blockware</p>
          </div>
          {/* Arrow */}
          <p style={{ fontSize: 14, color: '#5a5a72', marginBottom: 16 }}>→</p>
          {/* Nodestream mark (evolved) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <svg width="32" height="36" viewBox="0 0 32 36" fill="none">
              <polygon points="16,2 30,10 30,26 16,34 2,26 2,10" stroke="#a78bfa" strokeWidth="1.5" fill="none"/>
              <circle cx="16" cy="18" r="6" fill="#a78bfa" fillOpacity="0.35" stroke="#a78bfa" strokeWidth="1"/>
              <line x1="10" y1="18" x2="22" y2="18" stroke="#a78bfa" strokeWidth="1" opacity="0.6"/>
            </svg>
            <p style={{ fontSize: 9, color: '#a78bfa', fontFamily: 'var(--font-body)', whiteSpace: 'nowrap' }}>Nodestream</p>
          </div>
        </div>
        {/* Wordmark */}
        <div style={{ marginTop: 4, textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#e8e8f0', fontFamily: 'var(--font-body)', letterSpacing: '0.02em' }}>Nodestream</p>
          <p style={{ fontSize: 9, color: '#fb923c', fontFamily: 'var(--font-body)', marginTop: 2 }}>by Blockware</p>
        </div>
      </div>
    ),
  },
  {
    id: 'B',
    title: 'B- Shared Geometry',
    desc: "Own distinct mark, built on the same geometric grid and construction principles as Blockware. Siblings, not twins.",
    recommended: true,
    preview: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '40px 24px' }}>
        {/* Mark with grid lines */}
        <div style={{ position: 'relative', width: 44, height: 44 }}>
          {/* Grid construction lines */}
          <svg width="44" height="44" viewBox="0 0 44 44" style={{ position: 'absolute', inset: 0 }}>
            <line x1="22" y1="0" x2="22" y2="44" stroke="#5a5a72" strokeWidth="0.5" strokeDasharray="2,2"/>
            <line x1="0" y1="22" x2="44" y2="22" stroke="#5a5a72" strokeWidth="0.5" strokeDasharray="2,2"/>
            <circle cx="22" cy="22" r="18" stroke="#5a5a72" strokeWidth="0.5" strokeDasharray="2,2" fill="none"/>
          </svg>
          {/* Mark */}
          <svg width="44" height="44" viewBox="0 0 44 44" style={{ position: 'absolute', inset: 0 }}>
            <polygon points="22,4 38,13 38,31 22,40 6,31 6,13" stroke="#a78bfa" strokeWidth="1.5" fill="none"/>
            <rect x="15" y="15" width="14" height="14" rx="2" fill="#a78bfa" fillOpacity="0.3" stroke="#a78bfa" strokeWidth="1"/>
            <circle cx="22" cy="22" r="3" fill="#a78bfa"/>
          </svg>
        </div>
        <div style={{ marginTop: 4, textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#e8e8f0', fontFamily: 'var(--font-body)', letterSpacing: '0.02em' }}>Nodestream</p>
          <p style={{ fontSize: 8, color: '#5a5a72', fontFamily: 'var(--font-body)', marginTop: 4, whiteSpace: 'nowrap' }}>Same grid · Different mark · Shared DNA</p>
          <p style={{ fontSize: 9, color: '#fb923c', fontFamily: 'var(--font-body)', marginTop: 4 }}>by Blockware</p>
        </div>
      </div>
    ),
  },
  {
    id: 'C',
    title: 'C- Color Family Bridge',
    desc: "Nodestream's palette is a deliberate evolution of Blockware's color. The color relationship is the primary brand connector.",
    recommended: false,
    preview: (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '40px 24px' }}>
        {/* Color bar gradient */}
        <div style={{ position: 'relative', width: '70%' }}>
          <div style={{ height: 5, borderRadius: 999, background: 'linear-gradient(to right, #fb923c, #a78bfa 50%, #21A143)' }} />
          {/* Dot */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 10, height: 10, borderRadius: '50%', background: '#a78bfa', border: '2px solid #171717' }} />
        </div>
        <div style={{ marginTop: 8, textAlign: 'center' }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#e8e8f0', fontFamily: 'var(--font-body)', letterSpacing: '0.02em' }}>Nodestream</p>
          <p style={{ fontSize: 8, color: '#5a5a72', fontFamily: 'var(--font-body)', marginTop: 4, whiteSpace: 'nowrap' }}>Color family · Distinct mark</p>
          <p style={{ fontSize: 9, color: '#fb923c', fontFamily: 'var(--font-body)', marginTop: 4 }}>by Blockware</p>
        </div>
      </div>
    ),
  },
]

export default function ConceptDirection() {
  return (
    <section className="section">
      <div className="eyebrow">
        <span className="eyebrow-num">06<span style={{ fontSize: '9.5px' }}>.02</span></span>
        <span className="eyebrow-tag">Brand Model</span>
      </div>
      <h2 className="section-title">Concept Direction</h2>
      <p className="section-subtitle">
        Three concept directions, each with a different strategy for inheriting Blockware's visual DNA while establishing Nodestream's distinct premium identity.
      </p>
      <div className="section-rule" />

      {/* Note card */}
      <div className="elevate" style={{
        background: 'var(--neutral-0)',
        borderTop: '4px solid var(--brand-primary)',
        boxShadow: '0 5px 20px rgba(84,84,84,.12)',
        padding: 'var(--sp-lg)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--sp-sm)',
        marginBottom: 'var(--sp-3xl)',
      }}>
        <p style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--brand-primary)' }}>
          𝒊 Note
        </p>
        <p style={{ fontSize: 15, color: '#595956', lineHeight: 1.6 }}>
          All three directions assume the Blockware brand audit has been completed. The specific geometric language, colors, and typography will be informed by what the audit reveals about Blockware's existing visual system.
        </p>
      </div>

      {/* Concept cards */}
      <div className="grid-3" style={{ alignItems: 'stretch', marginBottom: 'var(--sp-md)' }}>
        {CONCEPTS.map(c => (
          <div
            key={c.id}
            className="elevate"
            style={{
              background: 'var(--neutral-0)',
              borderRadius: 0,
              borderTop: c.recommended ? '4px solid var(--brand-primary)' : undefined,
              boxShadow: '0 5px 20px rgba(84,84,84,.12)',
              padding: 'var(--sp-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--sp-sm)',
            }}
          >
            {/* Dark preview area */}
            <div style={{
              background: '#171717',
              border: '1px solid #262626',
              borderRadius: 'var(--r-sm)',
              flex: 1,
              minHeight: 160,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {c.preview}
            </div>

            {/* Title row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, marginTop: 4 }}>
              <p style={{ fontSize: 22, fontWeight: 400, lineHeight: 1.2, color: 'var(--neutral-900)', whiteSpace: 'nowrap' }}>
                {c.title}
              </p>
              {c.recommended && (
                <span style={{
                  display: 'inline-flex', alignItems: 'center',
                  padding: '4px 12px', height: 26, flexShrink: 0,
                  border: '1px solid var(--brand-primary)',
                  background: 'rgba(33,161,67,.10)',
                  borderRadius: 999,
                  fontSize: 11, fontWeight: 600, color: 'var(--brand-primary)',
                  whiteSpace: 'nowrap',
                }}>
                  ✦ Recommended
                </span>
              )}
            </div>

            {/* Description */}
            <p style={{ fontSize: 14, color: '#595956', lineHeight: 1.6 }}>
              {c.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Footnote */}
      <p style={{ fontSize: 12, color: 'var(--neutral-400)', textAlign: 'right', fontStyle: 'italic' }}>
        *Visuals are illustrative and used only to explain the concept. They are not brand designs
      </p>
    </section>
  )
}
