// Figma ref: node 3403-4267 — Font Families
import { useState } from 'react'

interface WeightBadgeProps { label: string }
function WeightBadge({ label }: WeightBadgeProps) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '4px 12px', height: 28,
      border: '1px solid var(--brand-primary)',
      background: 'rgba(33,161,67,.08)',
      borderRadius: '999px',
      fontSize: 12, color: 'var(--brand-primary)',
      whiteSpace: 'nowrap',
    }}>
      {label}
    </span>
  )
}

// ── Embed Modal ───────────────────────────────────────────
interface EmbedModalProps {
  fontName: string
  htmlSnippet: string
  cssSnippet: string
  onClose: () => void
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    })
  }
  return (
    <button
      onClick={copy}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 5,
        padding: '5px 12px', fontSize: 11, fontWeight: 600,
        letterSpacing: '.04em', textTransform: 'uppercase',
        color: copied ? 'var(--brand-primary)' : 'var(--neutral-600)',
        background: 'none',
        border: `1px solid ${copied ? 'var(--brand-primary)' : 'var(--neutral-200)'}`,
        borderRadius: 'var(--r-xs)',
        cursor: 'pointer',
        transition: 'color var(--t-fast), border-color var(--t-fast)',
        flexShrink: 0,
      }}
    >
      {copied ? (
        <>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path d="M1.5 5.5L4.5 8.5L9.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <rect x="1" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M3 3V2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          Copy
        </>
      )}
    </button>
  )
}

function CodeBlock({ label, code }: { label: string; code: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)' }}>
          {label}
        </p>
        <CopyButton text={code} />
      </div>
      <pre style={{
        background: 'var(--neutral-50)',
        border: '1px solid var(--neutral-200)',
        borderRadius: 'var(--r-sm)',
        padding: '14px 16px',
        fontSize: 12,
        fontFamily: 'var(--font-mono)',
        color: 'var(--neutral-900)',
        lineHeight: 1.7,
        overflowX: 'auto',
        margin: 0,
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-all',
      }}>
        {code}
      </pre>
    </div>
  )
}

function EmbedModal({ fontName, htmlSnippet, cssSnippet, onClose }: EmbedModalProps) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,.5)',
        backdropFilter: 'blur(4px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'var(--sp-xl)',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--neutral-0)',
          width: '100%', maxWidth: 620,
          display: 'flex', flexDirection: 'column',
          maxHeight: '85vh',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: 'var(--sp-md) var(--sp-xl)',
          borderBottom: '1px solid var(--neutral-200)',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)' }}>
              Embed Code
            </p>
            <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--neutral-900)' }}>
              {fontName}
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

        {/* Body */}
        <div style={{ overflow: 'auto', flex: 1, padding: 'var(--sp-xl)', display: 'flex', flexDirection: 'column', gap: 'var(--sp-xl)' }}>
          {/* Step 1 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 22, height: 22, borderRadius: '50%',
                background: 'var(--brand-primary)', color: '#fff',
                fontSize: 11, fontWeight: 700, flexShrink: 0,
              }}>1</span>
              <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--neutral-900)' }}>
                Add to your <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13, background: 'rgba(33,161,67,.08)', padding: '1px 5px', borderRadius: 2 }}>&lt;head&gt;</code>
              </p>
            </div>
            <CodeBlock label="HTML" code={htmlSnippet} />
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'var(--neutral-200)' }} />

          {/* Step 2 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-md)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 22, height: 22, borderRadius: '50%',
                background: 'var(--brand-primary)', color: '#fff',
                fontSize: 11, fontWeight: 700, flexShrink: 0,
              }}>2</span>
              <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--neutral-900)' }}>
                Apply in your CSS
              </p>
            </div>
            <CodeBlock label="CSS" code={cssSnippet} />
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Font Card ─────────────────────────────────────────────
interface FontCardProps {
  role: string
  fontName: string
  fontFamily: string
  sampleHeading?: string
  sampleSubheading?: string
  sampleQuote?: string
  sampleBody?: string
  sampleBold?: string
  sampleMedium?: string
  weights: string[]
  usage: string
  downloadHref: string
  embedHtml: string
  embedCss: string
}

function FontCard({ role, fontName, fontFamily, sampleHeading, sampleSubheading, sampleQuote, sampleBody, sampleBold, sampleMedium, weights, usage, downloadHref, embedHtml, embedCss }: FontCardProps) {
  const [showEmbed, setShowEmbed] = useState(false)
  return (
    <>
      <div className="elevate" style={{
        background: 'var(--neutral-0)',
        borderTop: '4px solid var(--brand-primary)',
        borderRadius: '0 0 var(--r-sm) var(--r-sm)',
        boxShadow: 'var(--shadow-card)',
        padding: 'var(--sp-lg)',
        display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)',
      }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--brand-primary)' }}>
            {role}
          </p>
          <span style={{
            padding: '4px 14px', height: 28, display: 'inline-flex', alignItems: 'center',
            border: '1px solid var(--brand-primary)', background: 'rgba(33,161,67,.08)',
            borderRadius: '999px', fontSize: 13, fontWeight: 500, color: 'var(--brand-primary)',
          }}>
            {fontName}
          </span>
        </div>

        {/* Type specimen */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
          {sampleHeading && (
            <p style={{ fontFamily, fontSize: 32, fontWeight: 700, lineHeight: 1.2, color: 'var(--neutral-900)', letterSpacing: '-0.5px' }}>
              {sampleHeading}
            </p>
          )}
          {sampleSubheading && (
            <p style={{ fontSize: 20, fontWeight: 600, lineHeight: 1.3, color: 'var(--neutral-900)' }}>
              {sampleSubheading}
            </p>
          )}
          {sampleQuote && (
            <p style={{ fontFamily, fontStyle: 'italic', fontSize: 18, lineHeight: 1.5, color: 'var(--neutral-600)' }}>
              {sampleQuote}
            </p>
          )}
          {sampleBold && (
            <p style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.4, color: 'var(--neutral-900)' }}>
              {sampleBold}
            </p>
          )}
          {sampleMedium && (
            <p style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.4, color: 'var(--neutral-400)' }}>
              {sampleMedium}
            </p>
          )}
          {sampleBody && (
            <p style={{ fontSize: 15, fontWeight: 400, lineHeight: 1.6, color: 'var(--neutral-600)' }}>
              {sampleBody}
            </p>
          )}
        </div>

        {/* Weight badges */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {weights.map(w => <WeightBadge key={w} label={w} />)}
        </div>

        {/* Usage note + actions */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
          <p style={{ fontSize: 13, color: 'var(--neutral-400)' }}>{usage}</p>
          <div style={{ display: 'flex', flexShrink: 0 }}>
            <button
              className="eye-btn"
              data-tooltip="Get embed code"
              onClick={() => setShowEmbed(true)}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M5 11L1.5 7.5 5 4M10 4l3.5 3.5L10 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <a
              href={downloadHref}
              download
              className="eye-btn"
              data-tooltip="Download font"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M7.5 1v9M4 7l3.5 3.5L11 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 13h11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {showEmbed && (
        <EmbedModal
          fontName={fontName}
          htmlSnippet={embedHtml}
          cssSnippet={embedCss}
          onClose={() => setShowEmbed(false)}
        />
      )}
    </>
  )
}

export default function TypographyFonts() {
  return (
    <section className="section">
      <div className="eyebrow">
        <span className="eyebrow-num">04<span style={{ fontSize: '9.5px' }}>.01</span></span>
        <span className="eyebrow-tag">Typography</span>
      </div>
      <h2 className="section-title">Font Families</h2>
      <p className="section-subtitle">
        Two typefaces — a serif for headings (authority, precision) and a sans-serif for body (clarity, readability).
      </p>
      <div className="section-rule" />

      {/* Font cards */}
      <div className="grid-2" style={{ marginBottom: 'var(--sp-5xl)' }}>
        <FontCard
          role="Heading Typeface"
          fontName="Roboto Serif"
          fontFamily="'Roboto Serif', Georgia, serif"
          sampleHeading="Sovereign Compute"
          sampleSubheading="AI Infrastructure Marketplace"
          sampleQuote='"Own the means of AI production."'
          weights={['Weight: 400 Regular', 'Weight: 600 SemiBold', 'Weight: 700 Bold']}
          usage="Used for: H1–H5, display text, section titles"
          downloadHref="/fonts/Roboto_Serif.zip"
          embedHtml={`<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap" rel="stylesheet">`}
          embedCss={`font-family: "Roboto Serif", serif;`}
        />
        <FontCard
          role="Body Typeface"
          fontName="Inter"
          fontFamily="'Inter', system-ui, sans-serif"
          sampleBody="Buyers acquire sovereign ownership of AI-grade servers hosted in professional data centers. Hosting providers earn immediate liquidity and recurring revenue through the exchange."
          sampleBold="Hardware listing · Verified Seller · KYC Approved · $130,000 USDC"
          sampleMedium="8× A100 80GB Cluster · US East Tier 3 · Available Now"
          weights={['Weight: 400 Regular', 'Weight: 600 SemiBold', 'Weight: 700 Bold']}
          usage="Used for: body text, labels, UI copy, data"
          downloadHref="/fonts/Inter.zip"
          embedHtml={`<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">`}
          embedCss={`font-family: "Inter", sans-serif;`}
        />
      </div>

      {/* Type Pairing Rationale */}
      <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--neutral-400)', marginBottom: 'var(--sp-xl)' }}>
        Type Pairing Rationale
      </p>
      <div className="grid-2">
        {/* Roboto Serif */}
        <div style={{ display: 'grid', gridTemplateColumns: '3px 1fr', gridTemplateRows: 'auto auto', columnGap: 'var(--sp-lg)' }}>
          <div style={{ gridRow: 1, background: 'var(--brand-primary)' }} />
          <p style={{
            gridRow: 1,
            fontFamily: "'Roboto Serif', Georgia, serif",
            fontSize: 36, fontWeight: 500, lineHeight: 1.1,
            color: 'var(--neutral-900)', paddingBottom: 'var(--sp-md)',
          }}>
            Roboto Serif
          </p>
          <div style={{ gridRow: 2, background: 'var(--neutral-200)' }} />
          <p style={{ gridRow: 2, fontSize: 16, color: 'var(--neutral-900)', lineHeight: 1.6 }}>
            Brings authority and editorial weight to headings — signaling that Nodestream is a serious, trustworthy platform for high-value transactions. The serif detail communicates precision and permanence (aligned with hardware ownership, not ephemeral cloud rental).
          </p>
        </div>
        {/* Inter */}
        <div style={{ display: 'grid', gridTemplateColumns: '3px 1fr', gridTemplateRows: 'auto auto', columnGap: 'var(--sp-lg)' }}>
          <div style={{ gridRow: 1, background: 'var(--brand-primary)' }} />
          <p style={{
            gridRow: 1,
            fontSize: 36, fontWeight: 500, lineHeight: 1.1,
            color: 'var(--neutral-900)', paddingBottom: 'var(--sp-md)',
          }}>
            Inter
          </p>
          <div style={{ gridRow: 2, background: 'var(--neutral-200)' }} />
          <p style={{ gridRow: 2, fontSize: 16, color: 'var(--neutral-900)', lineHeight: 1.6 }}>
            Provides maximum legibility for dense UI content — prices, specs, status labels, and form fields. Its neutrality lets the serif headings lead visually while keeping body text highly readable at small sizes.
          </p>
        </div>
      </div>
    </section>
  )
}
