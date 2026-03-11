import { useState, type ReactElement } from 'react'
import TopBar from './components/TopBar'
import Navigation from './components/Navigation'
import PageView from './components/PageView'
import Hero from './sections/Hero'
import Foundation from './sections/Foundation'
import VisualDirection from './sections/VisualDirection'
import ColorBrand from './sections/ColorBrand'
import ColorNeutral from './sections/ColorNeutral'
import ColorSemantic from './sections/ColorSemantic'
import TypographyFonts from './sections/TypographyFonts'
import TypographyScale from './sections/TypographyScale'
import Spacing from './sections/Spacing'
import LogoSection from './sections/LogoSection'
import ConceptDirection from './sections/ConceptDirection'
import CoBrandingRules from './sections/CoBrandingRules'
import LogoSystem from './sections/LogoSystem'
import Voice from './sections/Voice'
import Tokens from './sections/Tokens'
import Resources from './sections/Resources'

const PAGES: Record<string, ReactElement> = {
  intro:          <Hero />,
  foundation:         <Foundation />,
  'visual-direction': <VisualDirection />,
  'color-brand':    <ColorBrand />,
  'color-neutral':  <ColorNeutral />,
  'color-semantic':     <ColorSemantic />,
  'typography-fonts':   <TypographyFonts />,
  'typography-scale':   <TypographyScale />,
  spacing:        <Spacing />,
  logo:                 <LogoSection />,
  'concept-direction':  <ConceptDirection />,
  'co-branding-rules':  <CoBrandingRules />,
  'logo-system':        <LogoSystem />,
  voice:          <Voice />,
  tokens:         <Tokens />,
  resources:      <Resources />,
}

export default function App() {
  const [navOpen, setNavOpen]  = useState(false)
  const [currentPage, setPage] = useState('intro')

  return (
    <div className="app">
      <TopBar
        onNavigate={setPage}
        onMenuToggle={() => setNavOpen(v => !v)}
      />

      <Navigation
        open={navOpen}
        onClose={() => setNavOpen(false)}
        activeId={currentPage}
        onNavigate={setPage}
      />

      <main className="main">
        <PageView pageKey={currentPage}>
          {PAGES[currentPage] ?? PAGES['intro']}

          <footer style={{
            padding: 'var(--sp-3xl) var(--sp-7xl)',
            borderTop: '1px solid var(--neutral-200)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--neutral-50)',
            flexWrap: 'wrap',
            gap: 'var(--sp-md)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--neutral-900)' }}>
                Nodestream Brand Guidelines
              </p>
              <p style={{ fontSize: '12px', color: 'var(--neutral-400)' }}>
                v1.0 — 2026 · Sovereign Precision Light · Confidential
              </p>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--neutral-400)' }}>
              A Blockware Company
            </p>
          </footer>
        </PageView>
      </main>
    </div>
  )
}
