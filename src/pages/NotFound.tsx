import { Link } from 'react-router-dom'
import { Phone, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main
      style={{
        paddingTop: '68px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'calc(68px + 4rem) clamp(1.25rem, 4vw, 2rem) 4rem',
      }}
    >
      <div style={{ maxWidth: '540px', textAlign: 'center' }}>
        <p style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(5rem, 20vw, 10rem)',
          lineHeight: 1,
          color: 'var(--accent)',
          opacity: 0.2,
          marginBottom: '-0.25em',
        }}>
          404
        </p>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 900,
          fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
          textTransform: 'uppercase',
          lineHeight: 0.95,
          marginBottom: '1rem',
        }}>
          Page Not Found
        </h1>
        <p style={{ color: 'var(--fg-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
          This page doesn't exist. But if you've got a plumbing problem, we definitely can help with that.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.9rem',
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: 'var(--fg)',
              textDecoration: 'none',
              padding: '0.85rem 1.5rem',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              minHeight: '48px',
            }}
          >
            <ArrowLeft size={15} /> Back to Home
          </Link>
          <a
            href="tel:4804780447"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '0.9rem',
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: 'var(--bg)',
              background: 'var(--accent)',
              textDecoration: 'none',
              padding: '0.85rem 1.5rem',
              borderRadius: '4px',
              minHeight: '48px',
            }}
          >
            <Phone size={15} /> Call Now
          </a>
        </div>
      </div>
    </main>
  )
}
