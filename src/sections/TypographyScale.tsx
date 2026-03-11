// Figma ref: node 3403-4339 — Type Scale

interface ScaleRowProps {
  token: string
  size: string
  lineHeight: string
  weight: string
  fontFamily?: string
  sample: string
  fontSize: number
  fontWeight: number
  lh: string | number
}

function ScaleRow({ token, size, lineHeight, weight, fontFamily, sample, fontSize, fontWeight, lh }: ScaleRowProps) {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <p style={{ fontSize: 12, fontWeight: 500, color: 'var(--neutral-600)', fontFamily: "'Inter', system-ui, sans-serif" }}>{token} · {size} / {lineHeight}</p>
        <p style={{ fontSize: 11, color: 'var(--neutral-400)' }}>{weight}</p>
      </div>
      <p style={{ fontFamily, fontSize, fontWeight, lineHeight: lh, color: 'var(--neutral-900)', letterSpacing: fontSize >= 24 ? '-0.3px' : undefined }}>
        {sample}
      </p>
      <div style={{ gridColumn: '1 / -1', height: 1, background: 'var(--neutral-200)' }} />
    </>
  )
}

export default function TypographyScale() {
  return (
    <section className="section">
      <div className="eyebrow">
        <span className="eyebrow-num">04<span style={{ fontSize: '9.5px' }}>.02</span></span>
        <span className="eyebrow-tag">Typography</span>
      </div>
      <h2 className="section-title">Type Scale</h2>
      <p className="section-subtitle">
        Complete type scale inherited from Blockware's design system, applied with Nodestream's typefaces. Desktop scale shown.
      </p>
      <div className="section-rule" />

      <div className="grid-2" style={{ gap: 'var(--sp-xl)' }}>

        {/* Headings — Roboto Serif */}
        <div className="elevate" style={{
          background: 'var(--neutral-0)',
          borderTop: '4px solid var(--brand-primary)',
          borderRadius: '0 0 var(--r-sm) var(--r-sm)',
          boxShadow: 'var(--shadow-card)',
          padding: 'var(--sp-lg)',
          display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)',
        }}>
          {/* Card header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--brand-primary)' }}>
              Headings — Roboto Serif
            </p>
            <span style={{
              padding: '4px 14px', display: 'inline-flex', alignItems: 'center',
              border: '1px solid var(--brand-primary)', background: 'rgba(33,161,67,.08)',
              borderRadius: '999px', fontSize: 12, fontWeight: 500, color: 'var(--brand-primary)',
              whiteSpace: 'nowrap',
            }}>
              Scale from Blockware DS
            </span>
          </div>

          {/* Scale rows */}
          <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '16px 24px', alignItems: 'center' }}>
            <ScaleRow token="H1" size="32px" lineHeight="40px" weight="SemiBold · −0.5px"
              fontFamily="'Roboto Serif', Georgia, serif"
              fontSize={32} fontWeight={600} lh="40px"
              sample="Sovereign Compute" />
            <ScaleRow token="H2" size="24px" lineHeight="32px" weight="SemiBold"
              fontFamily="'Roboto Serif', Georgia, serif"
              fontSize={24} fontWeight={600} lh="32px"
              sample="AI Infrastructure Marketplace" />
            <ScaleRow token="H3" size="20px" lineHeight="28px" weight="SemiBold"
              fontFamily="'Roboto Serif', Georgia, serif"
              fontSize={20} fontWeight={600} lh="28px"
              sample="8x H100 80GB Cluster" />
            <ScaleRow token="H4" size="18px" lineHeight="26px" weight="SemiBold"
              fontFamily="'Roboto Serif', Georgia, serif"
              fontSize={18} fontWeight={600} lh="26px"
              sample="Hardware Specifications" />
            <ScaleRow token="H5" size="16px" lineHeight="24px" weight="SemiBold"
              fontFamily="'Roboto Serif', Georgia, serif"
              fontSize={16} fontWeight={600} lh="24px"
              sample="Hosting & Billing Details" />
          </div>
        </div>

        {/* Body — Inter */}
        <div className="elevate" style={{
          background: 'var(--neutral-0)',
          borderTop: '4px solid var(--brand-primary)',
          borderRadius: '0 0 var(--r-sm) var(--r-sm)',
          boxShadow: 'var(--shadow-card)',
          padding: 'var(--sp-lg)',
          display: 'flex', flexDirection: 'column', gap: 'var(--sp-lg)',
        }}>
          {/* Card header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--brand-primary)' }}>
              Body — Inter
            </p>
            <span style={{
              padding: '4px 14px', display: 'inline-flex', alignItems: 'center',
              border: '1px solid var(--brand-primary)', background: 'rgba(33,161,67,.08)',
              borderRadius: '999px', fontSize: 12, fontWeight: 500, color: 'var(--brand-primary)',
              whiteSpace: 'nowrap',
            }}>
              Scale from Blockware DS
            </span>
          </div>

          {/* Scale rows */}
          <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', gap: '16px 24px', alignItems: 'center' }}>
            <ScaleRow token="body-xxl" size="32px" lineHeight="40px" weight="Regular"
              fontSize={32} fontWeight={400} lh="40px"
              sample="$130,000" />
            <ScaleRow token="body-xl" size="24px" lineHeight="32px" weight="Regular"
              fontSize={24} fontWeight={400} lh="32px"
              sample="Available Now · US East" />
            <ScaleRow token="body-lg" size="16px" lineHeight="24px" weight="Regular"
              fontSize={16} fontWeight={400} lh="24px"
              sample="Buyers acquire sovereign ownership of AI-grade servers hosted in professional data centers." />
            <ScaleRow token="body-md" size="14px" lineHeight="20px" weight="Regular · Title Case"
              fontSize={14} fontWeight={400} lh="20px"
              sample="8x NVIDIA A100 80GB PCIe · Dual AMD EPYC 7742 · 1TB DDR4 ECC · 30TB NVMe" />
            <ScaleRow token="body-sm" size="14px" lineHeight="20px" weight="Regular"
              fontSize={14} fontWeight={400} lh="20px"
              sample="Rack-ready AI compute cluster with full hardware title and optional co-location in Tier 3 facility." />
            <ScaleRow token="body-xs" size="12px" lineHeight="18px" weight="Regular"
              fontSize={12} fontWeight={400} lh="18px"
              sample="NS-A100-8X-HW-OWN · Last Updated 2 hours ago · Verified Seller" />
          </div>
        </div>

      </div>
    </section>
  )
}
