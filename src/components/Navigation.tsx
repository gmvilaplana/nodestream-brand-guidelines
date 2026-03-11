
import { useState } from 'react'

interface NavChild { id: string; label: string }
interface NavItem  { id: string; label: string; children?: NavChild[] }
interface NavGroup { group: string; items: NavItem[] }

export const NAV: NavGroup[] = [
  { group: 'Overview',        items: [{ id: 'intro', label: 'Introduction' }, { id: 'foundation', label: 'Brand Foundation' }, { id: 'visual-direction', label: 'Visual Direction' }] },
  { group: 'Visual Language', items: [
    { id: 'color-brand', label: 'Color System', children: [
      { id: 'color-brand',    label: 'Brand Palette' },
      { id: 'color-neutral',  label: 'Neutral Palette' },
      { id: 'color-semantic', label: 'Semantic Colors' },
    ]},
    { id: 'typography-fonts', label: 'Typography', children: [
      { id: 'typography-fonts', label: 'Font Families' },
      { id: 'typography-scale', label: 'Type Scale' },
    ]},
    { id: 'spacing', label: 'Spacing & Layout' },
  ]},
  { group: 'Identity',  items: [
    { id: 'logo', label: 'Brand Model', children: [
      { id: 'logo', label: 'Sub Brand Model' },
      { id: 'concept-direction', label: 'Concept Direction' },
      { id: 'co-branding-rules', label: 'Co-branding Rules' },
    ]},
    { id: 'logo-system', label: 'Logo System' },
    { id: 'voice', label: 'Voice & Tone' },
  ]},
  { group: 'Reference', items: [{ id: 'tokens', label: 'Design Tokens' }] },
  { group: 'Resources', items: [{ id: 'resources', label: 'Resources' }] },
]

/** Flat list of all navigable ids — used by TopBar search */
export const NAV_FLAT = NAV.flatMap(g => g.items.flatMap(i =>
  i.children ? i.children : [i]
))

interface Props {
  open: boolean
  onClose: () => void
  activeId: string
  onNavigate: (id: string) => void
}

/** Return the parent item id for a given active child id, or null */
function parentOf(id: string): string | null {
  for (const g of NAV) {
    for (const item of g.items) {
      if (item.children?.some(c => c.id === id)) return item.id
    }
  }
  return null
}

export default function Navigation({ open, onClose, activeId, onNavigate }: Props) {
  const [expanded, setExpanded] = useState<Set<string>>(() => {
    const p = parentOf(activeId)
    return p ? new Set([p]) : new Set()
  })

  const toggle = (id: string) =>
    setExpanded(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  const go = (id: string) => {
    onNavigate(id)
    onClose()
  }

  return (
    <>
      {open && <div className="sidenav-overlay" onClick={onClose} />}
      <nav className={`sidenav ${open ? 'open' : ''}`}>
        <div className="sidenav-nav">
          {NAV.map(group => (
            <div key={group.group} className="sidenav-group">
              <span className="sidenav-group-label">{group.group}</span>
              {group.items.map(item => {
                if (item.children) {
                  const isOpen      = expanded.has(item.id)
                  const childActive = item.children.some(c => c.id === activeId)
                  return (
                    <div key={item.id}>
                      <button
                        className={`sidenav-link sidenav-link--parent ${childActive ? 'active' : ''}`}
                        onClick={() => toggle(item.id)}
                      >
                        <span>{item.label}</span>
                        <span className="sidenav-chevron">{isOpen ? '▾' : '▸'}</span>
                      </button>
                      {isOpen && (
                        <div className="sidenav-children">
                          {item.children.map(child => (
                            <button
                              key={child.id}
                              className={`sidenav-link sidenav-link--child ${activeId === child.id ? 'active' : ''}`}
                              onClick={() => go(child.id)}
                            >
                              {child.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }
                return (
                  <button
                    key={item.id}
                    className={`sidenav-link ${activeId === item.id ? 'active' : ''}`}
                    onClick={() => go(item.id)}
                  >
                    {item.label}
                  </button>
                )
              })}
            </div>
          ))}
        </div>

        <div className="sidenav-footer">
          Direction 1 — Selected<br />
          Sovereign Precision Light
        </div>
      </nav>
    </>
  )
}
