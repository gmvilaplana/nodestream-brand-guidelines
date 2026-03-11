
import { useState } from 'react'

const DIRECTIONS = [
  {
    num: 'Direction 1',
    name: 'Sovereign Precision Light',
    tone: 'Professional · Trustworthy · Precise · Clean · Enterprise-aligned',
    driver: 'Reliability',
    selected: true,
    image: '/direction-1.png',
  },
  {
    num: 'Direction 2',
    name: 'Crypto-Modern Modular',
    tone: 'Crypto-native · Modern SaaS · Energetic but controlled',
    driver: 'Autonomy + Control',
    selected: false,
    image: '/direction-2.png',
  },
  {
    num: 'Direction 3',
    name: 'Technical Dark Intelligence',
    tone: 'Deep-tech · Data-dense · Engineered · Crypto-infrastructure',
    driver: 'Power & Intelligence',
    selected: false,
    image: '/direction-3.png',
  },
]

interface ModalProps {
  direction: typeof DIRECTIONS[0]
  onClose: () => void
}

function Modal({ direction, onClose }: ModalProps) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,.6)',
        backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'var(--sp-xl)',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--neutral-0)',
          borderRadius: 'var(--r-lg)',
          boxShadow: 'var(--shadow-lg)',
          width: '100%', maxWidth: 1100,
          display: 'flex', flexDirection: 'column',
          maxHeight: '90vh',
          overflow: 'hidden',
        }}
      >
        {/* Modal header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: 'var(--sp-md) var(--sp-xl)',
          borderBottom: '1px solid var(--neutral-200)',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-md)' }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)' }}>
              Visual Reference
            </p>
            <span style={{ color: 'var(--neutral-200)' }}>·</span>
            <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--neutral-900)' }}>
              {direction.num} — {direction.name}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: 32, height: 32,
              background: 'none', border: '1px solid var(--neutral-200)',
              borderRadius: 'var(--r-sm)', cursor: 'pointer',
              color: 'var(--neutral-600)', fontSize: 16, lineHeight: 1,
            }}
          >
            ✕
          </button>
        </div>

        {/* Image */}
        <div style={{ overflow: 'auto', flex: 1, padding: 'var(--sp-md) var(--sp-xl)' }}>
          <img
            src={direction.image}
            alt={`${direction.num} — ${direction.name}`}
            style={{ width: '100%', display: 'block', borderRadius: 'var(--r-sm)' }}
          />
        </div>
      </div>
    </div>
  )
}

export default function VisualDirection() {
  const [activeModal, setActiveModal] = useState<typeof DIRECTIONS[0] | null>(null)

  return (
    <section className="section">
      <div className="eyebrow">
        <span className="eyebrow-num">02</span>
        <span className="eyebrow-tag">Visual Direction</span>
      </div>
      <h2 className="section-title">Visual Direction Moodboards</h2>
      <p className="section-subtitle">
        Three visual directions presented to the client for selection.
      </p>
      <div className="section-rule" />

      {/* Direction cards */}
      <div className="grid-3" style={{ marginBottom: 'var(--sp-3xl)', alignItems: 'stretch' }}>
        {DIRECTIONS.map(d => (
          <div
            key={d.num}
            className="elevate"
            style={{
              background: 'var(--neutral-0)',
              borderTop: d.selected ? '4px solid var(--brand-primary)' : undefined,
              borderRadius: 0,
              boxShadow: '0 5px 20px rgba(84,84,84,.12)',
              padding: 'var(--sp-lg)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--sp-md-soft)',
            }}
          >
            {/* Number + name grouped */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 26 }}>
                <p style={{
                  fontSize: 12, fontWeight: 600, letterSpacing: '.08em',
                  textTransform: 'uppercase',
                  color: d.selected ? 'var(--brand-primary)' : 'var(--neutral-900)',
                }}>
                  {d.num}
                </p>
                {d.selected && (
                  <span style={{
                    display: 'inline-flex', alignItems: 'center',
                    padding: '4px 12px', height: 26,
                    border: '1px solid var(--brand-primary)',
                    background: 'rgba(33,161,67,.10)',
                    borderRadius: 999,
                    fontSize: 11, fontWeight: 600, color: 'var(--brand-primary)',
                    whiteSpace: 'nowrap',
                  }}>
                    ✦ Selected
                  </span>
                )}
              </div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 26, fontWeight: 400, lineHeight: 1.3, color: 'var(--neutral-900)' }}>
                {d.name}
              </p>
            </div>

            {/* Tone */}
            <p style={{ fontSize: 15, color: 'var(--neutral-900)', lineHeight: 1.5, letterSpacing: '-0.01em' }}>
              Tone → {d.tone}
            </p>

            {/* Driver + eye icon */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flex: 1 }}>
              <p style={{ fontSize: 15, color: 'var(--neutral-900)', lineHeight: 1.5, letterSpacing: '-0.01em' }}>
                Emotional Driver → {d.driver}
              </p>
              <button
                className="eye-btn"
                data-tooltip="View visual reference"
                onClick={() => setActiveModal(d)}
              >
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <path d="M7.5 3C4 3 1.5 7.5 1.5 7.5s2.5 4.5 6 4.5 6-4.5 6-4.5S11 3 7.5 3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
                  <circle cx="7.5" cy="7.5" r="1.75" stroke="currentColor" strokeWidth="1.3"/>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Approved callout */}
      <div style={{ position: 'relative', paddingLeft: 'var(--sp-xl)' }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: '#DEE0D9' }} />
        <div style={{ position: 'absolute', left: 0, top: 0, height: 32, width: 3, background: 'var(--brand-primary)' }} />

        <p style={{ fontSize: 17, fontWeight: 400, color: 'var(--neutral-900)', lineHeight: 1.3, marginBottom: 'var(--sp-sm)' }}>
          Approved Visual Direction —{' '}
          <span style={{ color: 'var(--brand-primary)', fontWeight: 500 }}>✦ Direction 1</span>
          {' '}— "Sovereign Precision Light"
        </p>
        <p style={{ fontSize: 14, color: 'var(--neutral-900)', lineHeight: 1.6, marginBottom: 'var(--sp-sm)' }}>
          This direction ensures users feel safe, confident, and informed during high-value transactions.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          <p style={{ fontSize: 14, color: 'var(--neutral-900)', lineHeight: 1.8 }}>
            <strong>Tone:</strong> Professional · Trustworthy · Precise · Clean · Enterprise-aligned
          </p>
          <p style={{ fontSize: 14, color: 'var(--neutral-900)', lineHeight: 1.8 }}>
            <strong>Primary Emotional Driver:</strong> Reliability
          </p>
          <p style={{ fontSize: 14, color: 'var(--neutral-900)', lineHeight: 1.8 }}>
            <strong>Design implication:</strong> Light-first UI, high contrast, restrained color use, precision in spacing and layout.{' '}
            <em style={{ color: 'var(--neutral-600)' }}>Trust signals are the primary design currency.</em>
          </p>
        </div>
      </div>

      {/* Modal */}
      {activeModal && <Modal direction={activeModal} onClose={() => setActiveModal(null)} />}
    </section>
  )
}
