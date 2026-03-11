interface LogoProps {
  variant?: 'dark' | 'light' | 'icon'
  height?: number
}

export default function Logo({ variant = 'dark', height = 40 }: LogoProps) {
  const isDark = variant === 'dark'
  const isIcon = variant === 'icon'

  if (isIcon) {
    return (
      <svg height={height} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Nodestream">
        <rect width="36" height="36" rx="6" fill="#21A143"/>
        <path d="M10 26V16l8 8V16l8 10" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }

  const wordmarkColor = isDark ? '#000000' : '#FFFFFF'
  const streamColor   = isDark ? '#21A143' : 'rgba(255,255,255,0.85)'
  const subtextColor  = isDark ? '#808080' : 'rgba(255,255,255,0.5)'

  return (
    <svg
      height={height}
      viewBox="0 0 280 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Nodestream by Blockware"
      style={{ display: 'block' }}
    >
      {/* Icon mark */}
      <rect x="0" y="4" width="36" height="36" rx="5" fill="#21A143"/>
      <path d="M9 31.5V20l8.5 8.5V20l8.5 11.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>

      {/* NODE */}
      <text x="48" y="30" fontFamily="'Inter', sans-serif" fontSize="20" fontWeight="800" fill={wordmarkColor} letterSpacing="1">NODE</text>
      {/* STREAM */}
      <text x="108" y="30" fontFamily="'Inter', sans-serif" fontSize="20" fontWeight="300" fill={streamColor} letterSpacing="1">STREAM</text>

      {/* by Blockware */}
      <text x="48" y="43" fontFamily="'Inter', sans-serif" fontSize="9" fontWeight="500" fill={subtextColor} letterSpacing="1.5">BY BLOCKWARE</text>
    </svg>
  )
}
