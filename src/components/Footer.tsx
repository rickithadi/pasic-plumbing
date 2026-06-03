import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Footer() {
  return (
    <footer
      style={{
        background: 'oklch(10% 0.01 55)',
        borderTop: '1px solid var(--border)',
        padding: '3.5rem clamp(1.25rem, 4vw, 2rem) 2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <img src="/logo.jpg" alt="Pasic Plumbing logo" width={36} height={36} style={{ borderRadius: '4px', flexShrink: 0 }} />
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.3rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                <span style={{ color: 'var(--accent)' }}>Pasic</span> Plumbing
              </p>
            </div>
            <p style={{ color: 'var(--fg-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
              Family-owned plumbing contractors with 35+ years of trusted commercial &amp; residential service.
            </p>
            <p style={{ color: 'var(--fg-muted)', fontSize: '0.8rem' }}>
              LIC #ROC200219 K-37
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--fg-muted)',
                marginBottom: '1rem',
              }}
            >
              Quick Links
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[['About', '/about'], ['Services', '/services'], ['Water Heaters', '/water-heaters'], ['Contact', '/contact']].map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  style={{
                    color: 'var(--fg-muted)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg-muted)' }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--fg-muted)',
                marginBottom: '1rem',
              }}
            >
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a
                href="tel:4804780447"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--fg)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg)' }}
              >
                <Phone size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                480-478-0447 (AZ)
              </a>
              <a
                href="tel:3123755548"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--fg)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg)' }}
              >
                <Phone size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                312-375-5548 (IL)
              </a>
              <p style={{ color: 'var(--fg-muted)', fontSize: '0.85rem' }}>
                Scottsdale, AZ<br />
                Phoenix Valley &amp; Chicagoland
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p style={{ color: 'var(--fg-muted)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Pasic Plumbing Contractors, LLC. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href="https://facebook.com/pasicplumbing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              style={{ color: 'var(--fg-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg-muted)' }}
            >
              <FacebookIcon />
            </a>
            <a
              href="https://linkedin.com/company/pasicplumbing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: 'var(--fg-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg-muted)' }}
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
