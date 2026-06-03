import { motion, useReducedMotion } from 'framer-motion'
import { Shield, Users, MapPin, ChevronRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
})

export default function About() {
  const reduced = useReducedMotion()
  const mv = (delay = 0) => reduced ? {} : fadeUp(delay)

  return (
    <main id="main-content" style={{ paddingTop: '68px' }}>

      {/* Page header */}
      <section
        style={{
          padding: 'clamp(3.5rem, 8vw, 6rem) clamp(1.25rem, 4vw, 2rem) clamp(2rem, 4vw, 3rem)',
          borderBottom: '1px solid var(--border)',
          background: 'var(--bg-2)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: '0.75rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '0.75rem',
          }}>
            About Us
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            textTransform: 'uppercase',
            lineHeight: 0.95,
            marginBottom: '1.25rem',
          }}>
            35+ Years.<br />
            <span style={{ color: 'var(--fg-muted)', fontWeight: 400 }}>One Family.</span>
          </h1>
          <p style={{ color: 'var(--fg-muted)', maxWidth: '540px', lineHeight: 1.75, fontSize: '1.05rem' }}>
            Pasic Plumbing Contractors is a local, family-owned and operated plumbing contractor located in Scottsdale, AZ, providing services to the Phoenix Valley and Chicagoland areas.
          </p>
        </div>
      </section>

      {/* Story + image */}
      <section style={{ padding: 'var(--section-pad) clamp(1.25rem, 4vw, 2rem)' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 6vw, 5rem)',
            alignItems: 'start',
          }}
        >
          <motion.div {...mv()}>
            <div style={{ position: 'relative', borderRadius: '6px', overflow: 'hidden', aspectRatio: '3/4' }}>
              {/* data-replace: Duke/Dusko Pasic portrait */}
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&fm=webp&q=80"
                alt="Pasic Plumbing — professional plumber"
                loading="lazy"
                data-replace="Duke (Dusko) Pasic portrait or team photo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, oklch(12% 0.015 55 / 0.7) 0%, transparent 50%)',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
              }}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.1rem', color: 'var(--fg)' }}>
                  Duke (Dusko) Pasic
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                  Owner & Master Plumber
                </p>
              </div>
            </div>
          </motion.div>

          <div>
            <motion.div {...mv(0.1)}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                textTransform: 'uppercase',
                lineHeight: 0.95,
                marginBottom: '1.5rem',
              }}>
                The Pasic Story
              </h2>
              <p style={{ color: 'var(--fg-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                What started as a commitment to honest, quality craftsmanship has grown into more than three decades of trusted service across two states. Pasic Plumbing was built on a simple principle: treat every client's home or business like your own.
              </p>
              <p style={{ color: 'var(--fg-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                Owner Duke (Dusko) Pasic brings decades of hands-on experience to every project. His team of trained plumbers handles everything from residential maintenance to large-scale commercial installations — delivering the same care and precision regardless of scope.
              </p>
              <p style={{ color: 'var(--fg-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                From luxury resorts to family kitchens, our reputation is built one job at a time. That's why our clients keep calling back.
              </p>
            </motion.div>

            {/* Credential badges */}
            <motion.div
              {...mv(0.2)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {[
                { icon: <Shield size={18} />, label: 'Fully Licensed & Insured', sub: 'Arizona License ROC200219 K-37' },
                { icon: <Users size={18} />, label: 'Family-Owned & Operated', sub: 'Local business, personal service' },
                { icon: <MapPin size={18} />, label: 'Two-State Coverage', sub: 'Phoenix Valley, AZ · Chicagoland, IL' },
              ].map(({ icon, label, sub }) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    padding: '1rem 1.25rem',
                    background: 'var(--bg-2)',
                    border: '1px solid var(--border)',
                    borderRadius: '6px',
                  }}
                >
                  <span style={{ color: 'var(--accent)', marginTop: '2px', flexShrink: 0 }}>{icon}</span>
                  <div>
                    <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem' }}>{label}</p>
                    <p style={{ color: 'var(--fg-muted)', fontSize: '0.83rem', marginTop: '0.2rem' }}>{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: 'var(--bg-2)',
          borderTop: '1px solid var(--border)',
          padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 4vw, 2rem)',
          textAlign: 'center',
        }}
      >
        <motion.div {...mv()}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Ready to Work Together?
          </h2>
          <p style={{ color: 'var(--fg-muted)', marginBottom: '2rem' }}>
            Get in touch — we respond quickly and always give honest estimates.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="tel:4804780447"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--bg)',
                background: 'var(--accent)',
                textDecoration: 'none',
                padding: '0.9rem 1.8rem',
                borderRadius: '4px',
                minHeight: '48px',
              }}
            >
              <Phone size={16} /> 480-478-0447
            </a>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--fg)',
                textDecoration: 'none',
                padding: '0.9rem 1.8rem',
                borderRadius: '4px',
                border: '1px solid var(--border)',
                minHeight: '48px',
              }}
            >
              Send a Message <ChevronRight size={15} />
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  )
}
