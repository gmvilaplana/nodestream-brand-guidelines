import { useState } from 'react'

interface Props {
  bg: string
  hex: string
  height?: number
  radius?: string | number
  border?: boolean
}

export default function CopySwatch({ bg, hex, height = 108, radius = 'var(--r-md)', border = false }: Props) {
  const [hovered, setHovered] = useState(false)
  const [copied,  setCopied]  = useState(false)

  const copy = async (e: React.MouseEvent) => {
    e.stopPropagation()
    await navigator.clipboard.writeText(hex)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div
      style={{
        position: 'relative',
        height,
        borderRadius: radius,
        background: bg,
        flexShrink: 0,
        border: border ? '1px solid var(--neutral-200)' : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Copy button — visible on hover */}
      <button
        onClick={copy}
        title={`Copy ${hex}`}
        style={{
          position: 'absolute',
          top: 8, right: 8,
          display: 'flex', alignItems: 'center', gap: 4,
          padding: '3px 8px',
          background: 'rgba(255,255,255,.88)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(0,0,0,.10)',
          borderRadius: 'var(--r-sm)',
          fontSize: 11, fontWeight: 600,
          color: copied ? 'var(--brand-primary)' : 'var(--neutral-900)',
          cursor: 'pointer',
          opacity: hovered || copied ? 1 : 0,
          transform: hovered || copied ? 'scale(1)' : 'scale(.88)',
          transition: 'opacity .15s ease, transform .15s ease',
          pointerEvents: hovered ? 'auto' : 'none',
          whiteSpace: 'nowrap',
          lineHeight: 1,
        }}
      >
        {copied
          ? <>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <path d="M2 6.5L5 9.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Copied
            </>
          : <>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                <rect x="4" y="1" width="7" height="8" rx="1" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M1 4h2M1 4v7h7v-2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              Copy color
            </>
        }
      </button>
    </div>
  )
}
