import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Water Heaters', to: '/water-heaters' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => { document.body.classList.remove('nav-open') }
  }, [open])

  return (
    <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s, border-color 0.3s',
        background: scrolled ? 'oklch(14% 0.012 55 / 0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid oklch(28% 0.01 55)' : '1px solid transparent',
      }}
    >
      <nav
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 clamp(1.25rem, 4vw, 2rem)',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        {/* Wordmark */}
        <Link
          to="/"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--fg)',
            textDecoration: 'none',
            lineHeight: 1,
          }}
        >
          <span style={{ color: 'var(--accent)' }}>Pasic</span>
          {' '}Plumbing
        </Link>

        {/* Desktop links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
          }}
          className="desktop-nav"
        >
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '0.9rem',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: location.pathname === l.to ? 'var(--accent)' : 'var(--fg-muted)',
                textDecoration: 'none',
                padding: '0.35rem 0.7rem',
                borderRadius: '4px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg)' }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  location.pathname === l.to ? 'var(--accent)' : 'var(--fg-muted)'
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:4804780447"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              marginLeft: '1rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.05em',
              color: 'var(--bg)',
              background: 'var(--accent)',
              textDecoration: 'none',
              padding: '0.45rem 1rem',
              borderRadius: '4px',
              transition: 'background 0.2s',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent-hover)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent)' }}
          >
            <Phone size={14} />
            480-478-0447
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--fg)',
            cursor: 'pointer',
            padding: '0.4rem',
          }}
          className="mobile-menu-btn"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'oklch(0% 0 0 / 0.6)',
                zIndex: -1,
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              style={{
                background: 'var(--bg-2)',
                borderBottom: '1px solid var(--border)',
                padding: '1rem clamp(1.25rem, 4vw, 2rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.25rem',
              }}
            >
              {links.map(l => (
                <Link
                  key={l.to}
                  to={l.to}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '1.1rem',
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    color: location.pathname === l.to ? 'var(--accent)' : 'var(--fg)',
                    textDecoration: 'none',
                    padding: '0.75rem 0',
                    borderBottom: '1px solid var(--border)',
                  }}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="tel:4804780447"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '0.75rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--bg)',
                  background: 'var(--accent)',
                  textDecoration: 'none',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '4px',
                  justifyContent: 'center',
                }}
              >
                <Phone size={16} />
                Call 480-478-0447
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
    </>
  )
}
