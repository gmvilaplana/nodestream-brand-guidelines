import { useEffect, useRef, type ReactNode } from 'react'

interface Props { id: string; children: ReactNode; className?: string }

export default function SectionReveal({ id, children, className = '' }: Props) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add('visible') },
      { threshold: 0.04 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} id={id} className={`section ${className}`}>
      {children}
    </section>
  )
}
