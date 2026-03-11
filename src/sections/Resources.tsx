
interface Resource {
  category: string
  title: string
  desc: string
  cta: string
  status: 'available' | 'coming-soon'
  href?: string
  icon: React.ReactNode
}

const RESOURCES: Resource[] = [
  // Brand Assets
  {
    category: 'Brand Assets',
    title: 'Logo Package',
    desc: 'Full logo suite — primary, secondary, symbol-only. SVG, PNG, and EPS formats for all variants and backgrounds.',
    cta: 'Download',
    status: 'coming-soon',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M6 20c0-3.314 2.686-5 6-5s6 1.686 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    category: 'Brand Assets',
    title: 'Color Palette',
    desc: 'Official Nodestream color swatches in ASE, CLR, and CSS formats. Includes brand, neutral, and semantic tokens.',
    cta: 'Download',
    status: 'coming-soon',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="16" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    category: 'Brand Assets',
    title: 'Brand Guidelines PDF',
    desc: 'Printable reference document covering all sections of the Nodestream brand system. For internal and partner use.',
    cta: 'Download',
    status: 'coming-soon',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6z" stroke="currentColor" strokeWidth="1.5"/>
        <polyline points="14,3 14,9 20,9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="8" y1="17" x2="13" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },

  // Design
  {
    category: 'Design',
    title: 'Deliverables Discovery Document',
    desc: 'Full discovery and deliverables document covering brand strategy, visual direction moodboards, concept directions, and sub-brand model for Nodestream.',
    cta: 'Open in Figma',
    status: 'available',
    href: 'https://www.figma.com/design/GGfPphWMXZ994mmqt2DDJ5/-NodeStream--Deliverables-Discovery-Document?node-id=3312-4633',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 7h14M5 17h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    category: 'Design',
    title: 'UI Component Kit',
    desc: 'Figma component kit aligned to Sovereign Precision Light. Buttons, inputs, cards, tables, badges — ready for product work.',
    cta: 'Open in Figma',
    status: 'coming-soon',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="13" y="2" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="13" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="13" y="13" width="9" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    category: 'Design',
    title: 'Presentation Template',
    desc: 'Figma Slides deck template with Nodestream branding, typography, and layout system pre-applied. Ready to duplicate and present.',
    cta: 'Open in Figma',
    status: 'available',
    href: 'https://www.figma.com/deck/aAmvnPRoXr3WvtinAmd1oP',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="8" y1="20" x2="16" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="12" y1="18" x2="12" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="6" y="8" width="5" height="4" rx="0.5" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },

  // Code
  {
    category: 'Code',
    title: 'Design Tokens (CSS)',
    desc: 'All spacing, color, radius, shadow, and typography tokens as CSS custom properties. Drop into any web project.',
    cta: 'View on GitHub',
    status: 'coming-soon',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <polyline points="16,18 22,12 16,6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8,6 2,12 8,18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    category: 'Code',
    title: 'Tokens (JSON / Style Dictionary)',
    desc: 'Design token definitions in W3C DTCG format, compatible with Style Dictionary. Supports multi-platform output.',
    cta: 'View on GitHub',
    status: 'coming-soon',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },

  // Content
  {
    category: 'Content',
    title: 'Voice & Tone Guide',
    desc: 'Downloadable writing guide for Nodestream. Covers approved language, tone principles, do/don\'t examples for marketing and product copy.',
    cta: 'Download',
    status: 'coming-soon',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    category: 'Content',
    title: 'Email Signature Kit',
    desc: 'HTML email signatures for all Nodestream team members. Includes Nodestream + Blockware co-branding per the Endorsed Sub-brand model.',
    cta: 'Download',
    status: 'coming-soon',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <polyline points="2,5 12,13 22,5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const CATEGORIES = Array.from(new Set(RESOURCES.map(r => r.category)))

import React from 'react'

function ResourceCard({ r }: { r: Resource }) {
  const [hovered, setHovered] = React.useState(false)
  const available = r.status === 'available'
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="elevate"
      style={{
        background: 'var(--neutral-0)',
        borderTop: `4px solid ${available && hovered ? 'var(--brand-primary)' : 'var(--neutral-200)'}`,
        boxShadow: 'var(--shadow-card)',
        padding: 'var(--sp-lg)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--sp-sm)',
        transition: 'border-color var(--t-fast)',
      }}
    >
      {/* Icon + status badge on same row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 4 }}>
        <div style={{ color: 'var(--brand-primary)' }}>
          {r.icon}
        </div>
        <span style={{
          fontSize: 10, fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase',
          color: r.status === 'available' ? 'var(--brand-primary)' : 'var(--neutral-400)',
          padding: '2px 8px',
          border: `1px solid ${r.status === 'available' ? 'var(--brand-primary)' : 'var(--neutral-200)'}`,
          borderRadius: 999,
          whiteSpace: 'nowrap',
        }}>
          {r.status === 'available' ? '● Available' : 'Coming soon'}
        </span>
      </div>

      {/* Category */}
      <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)' }}>
        {r.category}
      </p>

      {/* Title */}
      <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--neutral-900)', lineHeight: 1.3 }}>
        {r.title}
      </p>

      {/* Description */}
      <p style={{ fontSize: 13, color: 'var(--neutral-600)', lineHeight: 1.6, flex: 1 }}>
        {r.desc}
      </p>

      {/* CTA */}
      {r.status === 'available' && r.href ? (
        <a
          href={r.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginTop: 'var(--sp-sm)',
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 16px',
            fontSize: 13, fontWeight: 600,
            color: 'var(--neutral-0)',
            background: 'var(--brand-primary)',
            border: 'none',
            borderRadius: 'var(--r-sm)',
            cursor: 'pointer',
            alignSelf: 'flex-start',
            textDecoration: 'none',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M5 2H2v8h8V7M7 1h4m0 0v4m0-4L5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {r.cta}
        </a>
      ) : (
        <button
          disabled
          style={{
            marginTop: 'var(--sp-sm)',
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 16px',
            fontSize: 13, fontWeight: 600,
            color: 'var(--neutral-400)',
            background: 'var(--neutral-200)',
            border: 'none',
            borderRadius: 'var(--r-sm)',
            cursor: 'not-allowed',
            alignSelf: 'flex-start',
          }}
        >
          {r.cta}
        </button>
      )}
    </div>
  )
}

export default function Resources() {
  return (
    <section className="section">
      <div className="eyebrow">
        <span className="eyebrow-num">09</span>
        <span className="eyebrow-tag">Resources</span>
      </div>
      <h2 className="section-title">Resources</h2>
      <p className="section-subtitle">
        All Nodestream brand assets, design files, and code packages in one place.
        Resources are released progressively as the brand system matures.
      </p>
      <div className="section-rule" />

      {CATEGORIES.map(cat => (
        <div key={cat} style={{ marginBottom: 'var(--sp-4xl)' }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', marginBottom: 'var(--sp-lg)' }}>
            {cat}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--sp-lg)' }}>
            {RESOURCES.filter(r => r.category === cat).map(r => (
              <ResourceCard key={r.title} r={r} />
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
