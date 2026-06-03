import { motion, useReducedMotion } from 'framer-motion'
import { Phone, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
})

const services = [
  {
    name: 'Water Heater Installation & Repair',
    description: 'Expert installation, repair, and replacement of traditional tank and tankless water heaters. We handle all major brands and both gas and electric systems.',
    link: '/water-heaters',
  },
  {
    name: 'Sewer Surveillance',
    description: "High-definition camera inspections to diagnose blockages, root intrusions, and pipe damage without unnecessary excavation. Know exactly what's happening underground.",
  },
  {
    name: 'Faucet Installation & Repair',
    description: 'Installation and repair of all faucet types — kitchen, bathroom, utility, and outdoor. We work with all major brands and fix drips, leaks, and pressure issues.',
  },
  {
    name: 'Instant Hot Water Recirculating Line',
    description: 'Stop waiting for hot water. We install recirculating pump systems that deliver instant hot water to every tap, reducing water waste and improving comfort.',
  },
  {
    name: 'Toilets',
    description: 'Complete toilet installation, repair, and replacement. From running toilets to full replacements, we handle the work cleanly and efficiently.',
  },
  {
    name: 'Water Softener',
    description: 'Installation and service of water softener systems. Protect your pipes, appliances, and fixtures from hard water mineral buildup — especially important in Phoenix Valley.',
  },
  {
    name: 'Sewer Line Repair',
    description: 'Full sewer line repair and replacement, including trenchless options where possible. We diagnose the problem accurately before recommending the right solution.',
  },
  {
    name: 'Water Line Repair',
    description: 'Water main and supply line repair for both residential and commercial properties. Fast, effective, and minimally disruptive.',
  },
  {
    name: 'Sump & Sewage Pump',
    description: 'Installation and service of sump pumps and sewage ejector pumps. Keep your basement dry and your property protected.',
  },
  {
    name: 'Gas Piping',
    description: 'Licensed gas line installation and repair for residential and commercial properties. Safety-first approach to every gas system we touch.',
  },
  {
    name: 'Underslab Repairs',
    description: 'Slab leak detection and repair. We locate the problem precisely to minimize damage to your foundation and flooring during the repair process.',
  },
  {
    name: 'Garbage Disposal',
    description: 'Installation and repair of garbage disposal units. Quick turnaround — most jobs completed in a single visit.',
  },
  {
    name: 'Replace Bathtub & Shower',
    description: 'Full bathtub and shower replacement services. We handle the plumbing side of your bathroom renovation cleanly and on schedule.',
  },
]

export default function Services() {
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
            Services
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            textTransform: 'uppercase',
            lineHeight: 0.95,
            marginBottom: '1.25rem',
          }}>
            Commercial &amp;<br />
            <span style={{ color: 'var(--fg-muted)', fontWeight: 400 }}>Residential Services</span>
          </h1>
          <p style={{ color: 'var(--fg-muted)', maxWidth: '520px', lineHeight: 1.75, fontSize: '1.05rem', marginBottom: '2rem' }}>
            From routine maintenance to complex commercial installations — 13 core services backed by 35+ years of expertise.
          </p>
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
              padding: '0.8rem 1.6rem',
              borderRadius: '4px',
              minHeight: '48px',
            }}
          >
            <Phone size={16} /> Call for a Quote
          </a>
        </div>
      </section>

      {/* Services list */}
      <section style={{ padding: 'var(--section-pad) clamp(1.25rem, 4vw, 2rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {services.map((service, i) => (
              <motion.div
                key={service.name}
                {...(reduced ? {} : {
                  initial: { opacity: 0, x: -16 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true, margin: '-40px' },
                  transition: { duration: 0.45, delay: 0, ease: [0.22, 1, 0.36, 1] },
                })}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'auto 1fr auto',
                  gap: '1.5rem',
                  alignItems: 'start',
                  padding: '1.75rem 0',
                  borderBottom: '1px solid var(--border)',
                  transition: 'background 0.2s',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 900,
                    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
                    color: 'var(--accent)',
                    opacity: 0.5,
                    minWidth: '2.5rem',
                    paddingTop: '2px',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                    letterSpacing: '0.02em',
                    marginBottom: '0.5rem',
                  }}>
                    {service.name}
                  </h2>
                  <p style={{ color: 'var(--fg-muted)', lineHeight: 1.7, fontSize: '0.92rem', maxWidth: '600px' }}>
                    {service.description}
                  </p>
                </div>
                {service.link ? (
                  <Link
                    to={service.link}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--accent)',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      paddingTop: '4px',
                    }}
                  >
                    Details <ChevronRight size={13} />
                  </Link>
                ) : (
                  <div style={{ minWidth: '60px' }} />
                )}
              </motion.div>
            ))}
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
            Don't see what you need?
          </h2>
          <p style={{ color: 'var(--fg-muted)', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem' }}>
            Call us — chances are we handle it. 35 years of experience covers a lot of ground.
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
