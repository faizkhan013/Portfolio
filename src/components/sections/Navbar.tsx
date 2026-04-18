'use client'
import { useState, useEffect } from 'react'
import { useTheme } from '@/components/ui/ThemeProvider'

const NAV_LINKS = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '1rem 2rem', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        backdropFilter: 'blur(16px)',
        background: scrolled ? 'rgba(10,10,18,0.9)' : 'rgba(10,10,18,0.6)',
        borderBottom: '1px solid var(--border)',
        transition: 'background 0.3s',
        gap: '1rem',
      }}>
        <div className="grad-text" style={{ fontSize: '1.3rem', fontWeight: 900, letterSpacing: '-0.02em' }}>FK.</div>

        {/* Desktop Links */}
        <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0 }} className="hidden md:flex">
          {NAV_LINKS.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} style={{ color: 'var(--text2)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500, transition: 'color 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text2)')}
              >{l}</a>
            </li>
          ))}
        </ul>

        {/* Theme switcher */}
        <div style={{ display: 'flex', gap: '0.4rem', flexShrink: 0 }}>
          {(['dark', 'minecraft', 'minimal'] as const).map((t, i) => (
            <button key={t} onClick={() => setTheme(t)} style={{
              padding: '0.3rem 0.6rem', border: `1px solid ${theme === t ? 'var(--accent)' : 'var(--border)'}`,
              background: theme === t ? 'var(--glow)' : 'var(--surface)',
              color: theme === t ? 'var(--accent)' : 'var(--text2)',
              borderRadius: 'var(--radius)', cursor: 'pointer', fontSize: '0.72rem',
              fontFamily: 'var(--font)', transition: 'all 0.3s', whiteSpace: 'nowrap',
            }}>
              {['🌌 Dark', '🧱 Craft', '💼 Pro'][i]}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden"
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}>
          {[0, 1, 2].map(i => <span key={i} style={{ width: 22, height: 2, background: 'var(--text)', borderRadius: 2, display: 'block', transition: 'all 0.3s' }} />)}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, background: 'var(--bg)', zIndex: 999,
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem'
        }}>
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMobileOpen(false)}
              style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '1.5rem', fontWeight: 700 }}>{l}</a>
          ))}
        </div>
      )}
    </>
  )
}
