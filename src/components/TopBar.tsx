import { useState, useRef, useEffect } from 'react'
import { NAV } from './Navigation'

interface Props {
  onNavigate: (id: string) => void
  onMenuToggle: () => void
}

// Flat list of all navigable pages for search
const ALL_PAGES = NAV.flatMap(g => g.items.flatMap(i =>
  i.children
    ? i.children.map(c => ({ id: c.id, label: c.label, group: g.group }))
    : [{ id: i.id, label: i.label, group: g.group }]
))

export default function TopBar({ onNavigate, onMenuToggle }: Props) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const results = query.trim().length > 0
    ? ALL_PAGES.filter(p =>
        p.label.toLowerCase().includes(query.toLowerCase()) ||
        p.group.toLowerCase().includes(query.toLowerCase())
      )
    : []

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus()
  }, [searchOpen])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  const close = () => { setSearchOpen(false); setQuery('') }

  const pick = (id: string) => { onNavigate(id); close() }

  return (
    <>
      <header className="topbar">
        {/* Left: hamburger (mobile) + logo */}
        <div className="topbar-left">
          <button className="topbar-menu-btn" onClick={onMenuToggle} aria-label="Toggle navigation">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect y="2"  width="16" height="1.5" rx="1" fill="currentColor"/>
              <rect y="7"  width="16" height="1.5" rx="1" fill="currentColor"/>
              <rect y="12" width="16" height="1.5" rx="1" fill="currentColor"/>
            </svg>
          </button>
          <img src="/logo-nodestream.png" alt="Nodestream" className="topbar-logo" />
        </div>

        {/* Right: search */}
        <div className="topbar-right">
          <div className={`topbar-search ${searchOpen ? 'open' : ''}`}>
            {searchOpen && (
              <input
                ref={inputRef}
                className="topbar-search-input"
                placeholder="Search guidelines…"
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            )}
            <button
              className="topbar-search-btn"
              onClick={() => searchOpen ? close() : setSearchOpen(true)}
              aria-label="Search"
            >
              {searchOpen
                ? <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                : <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5"/><path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              }
            </button>
          </div>
        </div>
      </header>

      {/* Search results dropdown */}
      {searchOpen && results.length > 0 && (
        <div className="topbar-results">
          {results.map(r => (
            <button key={r.id} className="topbar-result-item" onClick={() => pick(r.id)}>
              <span className="topbar-result-group">{r.group}</span>
              <span className="topbar-result-label">{r.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Overlay to close search */}
      {searchOpen && <div className="topbar-overlay" onClick={close} />}
    </>
  )
}
