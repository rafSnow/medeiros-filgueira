import { useState, useEffect } from 'react'

const WA = '5562999999999'
const NAV_ITEMS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        style={{
          backgroundColor: scrolled ? 'rgba(13,31,22,0.97)' : 'var(--green)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: '1px solid rgba(201,168,76,0.18)',
          transition: 'background-color 0.4s, backdrop-filter 0.4s',
        }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 h-17.5 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" aria-label="Medeiros Filgueira - Início">
            <div
              style={{
                width: 42, height: 42,
                border: '1.5px solid var(--gold)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.25s',
              }}
              className="group-hover:bg-gold/10"
            >
              <span
                style={{ fontFamily: 'Cormorant Garamond, serif', color: 'var(--gold)', fontSize: 16, fontWeight: 400, letterSpacing: 2 }}
              >MF</span>
            </div>
            <div>
              <p style={{ color: '#fff', fontSize: 12, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', lineHeight: 1.3 }}>
                Medeiros Filgueira
              </p>
              <p style={{ color: 'var(--gold)', fontSize: 9, letterSpacing: '0.38em', textTransform: 'uppercase', fontWeight: 300 }}>
                Construtora
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map(({ label, href }) => (
              <a key={label} href={href} className="nav-link">{label}</a>
            ))}
            <a
              href={`https://wa.me/${WA}?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.`}
              target="_blank" rel="noopener noreferrer"
              style={{
                backgroundColor: 'var(--gold)',
                color: 'var(--green-dark)',
                fontSize: 13,
                fontWeight: 500,
                padding: '9px 22px',
                borderRadius: 3,
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Falar com especialista
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            {[0,1,2].map(i => (
              <span key={i} style={{ display: 'block', width: 22, height: 1.5, backgroundColor: 'rgba(255,255,255,0.75)' }} />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          style={{
            maxHeight: mobileOpen ? 320 : 0,
            overflow: 'hidden',
            transition: 'max-height 0.45s cubic-bezier(0.25,0.46,0.45,0.94)',
            backgroundColor: 'var(--green-dark)',
            borderTop: mobileOpen ? '1px solid rgba(201,168,76,0.15)' : 'none',
          }}
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                style={{ color: 'rgba(255,255,255,0.7)', fontSize: 15, textDecoration: 'none' }}
              >{label}</a>
            ))}
            <a
              href={`https://wa.me/${WA}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                backgroundColor: 'var(--gold)', color: 'var(--green-dark)',
                padding: '11px 0', borderRadius: 3, textAlign: 'center',
                fontSize: 14, fontWeight: 500, textDecoration: 'none',
              }}
            >Solicitar orçamento</a>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: 70 }} />
    </>
  )
}