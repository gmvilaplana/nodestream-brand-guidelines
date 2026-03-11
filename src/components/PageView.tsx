import { useEffect, useRef, type ReactNode } from 'react'

interface Props { children: ReactNode; pageKey: string }

export default function PageView({ children, pageKey }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  // Reset scroll and trigger fade-in every time the page changes
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.scrollTop = 0
    el.classList.remove('page-visible')
    // tiny rAF so the class removal is painted first
    requestAnimationFrame(() => {
      requestAnimationFrame(() => el.classList.add('page-visible'))
    })
  }, [pageKey])

  return (
    <div ref={ref} className="page-view">
      {children}
    </div>
  )
}
