import { motion, useReducedMotion } from 'framer-motion'
import { Phone, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
})

const WX = 'https://static.wixstatic.com/media'
const img = (hash: string, file: string, w = 460, h = 340) =>
  `${WX}/${hash}/v1/fill/w_${w},h_${h},al_c,q_85,usm_0.66_1.00_0.01,enc_auto,quality_auto/${file}`

const services = [
  {
    name: 'Water Heater Installation & Repair',
    description: 'Expert installation, repair, and replacement of traditional tank and tankless water heaters. All major brands, gas and electric.',
    link: '/water-heaters',
    img: img('8358d6_cfeaac2065fc4bbf859062bfd5fd7761~mv2.jpg', 'rheem-tankless-water-heater_edited.jpg'),
  },
  {
    name: 'Sewer Surveillance',
    description: "Camera inspections to diagnose blockages, root intrusions, and pipe damage — no unnecessary excavation.",
    img: img('8358d6_6af6e30f327d442d8a0aafab3abc7f5a~mv2.jpg', 'drain_line_sewer_inspection_edited.jpg'),
  },
  {
    name: 'Faucet Installation & Repair',
    description: 'Kitchen, bathroom, utility, and outdoor faucets. We fix drips, leaks, and pressure issues on all major brands.',
    img: img('8358d6_49d087c512584845bf2e7d57dc734821~mv2.jpg', 'Leaky-Faucet.jpg'),
  },
  {
    name: 'Instant Hot Water Recirculating Line',
    description: 'Recirculating pump systems for instant hot water at every tap — reduces water waste and wait time.',
    img: img('672c31391dfd4a759a58b154cffd85a9.jpg', 'Pipe%20Testing.jpg'),
  },
  {
    name: 'Toilets',
    description: 'Installation, repair, and full replacement. From running toilets to complete unit swaps, done cleanly and efficiently.',
    img: img('8358d6_f4526840bfb647f0b8080e2d312b1acc~mv2.jpg', 'toilets.jpg'),
  },
  {
    name: 'Water Softener',
    description: 'System installation and service. Protect pipes, appliances, and fixtures from hard water buildup — especially important in Phoenix Valley.',
    img: img('8358d6_e307b3db5c1146af8e953aa3845e2d88~mv2.jpg', 'Water-Softeners.jpg'),
  },
  {
    name: 'Sewer Line Repair',
    description: 'Full sewer line repair and replacement including trenchless options. Accurate diagnosis before we recommend anything.',
    img: img('8358d6_ea9483a24aee4de2a09f7fad0b80d48c~mv2.jpg', 'Water-Sewer-Repiping.jpg'),
  },
  {
    name: 'Water Line Repair',
    description: 'Water main and supply line repair for residential and commercial. Fast, effective, and minimally disruptive.',
    img: img('8358d6_9b2b3c7c978a4226a6f39a19d703ecfc~mv2.jpg', 'Water-Leak.jpg'),
  },
  {
    name: 'Sump & Sewage Pump',
    description: 'Sump pump and sewage ejector pump installation and service. Keep your basement dry and your property protected.',
    img: img('8358d6_33e7c19da807455eb6f98b2d431f31ee~mv2.jpg', 'Sump-Sewage-Pumps.jpg'),
  },
  {
    name: 'Gas Piping',
    description: 'Licensed gas line installation and repair for residential and commercial. Safety-first on every gas system.',
    img: img('8358d6_a9a5dc97a5644001a5e5fb72adb6328c~mv2.jpg', 'gas-leaks.jpg'),
  },
  {
    name: 'Underslab Repairs',
    description: 'Slab leak detection and repair. We locate the source precisely to minimize damage to your foundation and flooring.',
    img: img('8358d6_9248b926a6b64785a0255a54605df265~mv2.jpg', 'slab-leaks.jpg'),
  },
  {
    name: 'Garbage Disposal',
    description: 'Installation and repair of garbage disposal units. Most jobs completed in a single visit.',
    img: img('8358d6_de908dbbaf7943abaa7931af7c7ff2fc~mv2.jpg', 'Garbage-disposal.jpg'),
  },
  {
    name: 'Replace Bathtub & Shower',
    description: 'Full bathtub and shower replacement. We handle the plumbing side of your renovation cleanly and on schedule.',
    img: img('8358d6_3de244245b474110816bc829e8556253~mv2.jpg', 'signature-hardware_edited.jpg'),
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
            What We Offer
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
            Routine maintenance, emergency repairs, and full commercial installations — backed by 35+ years of hands-on expertise.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href="tel:4804780447"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '0.95rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--bg)',
                background: 'var(--accent)',
                textDecoration: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                minHeight: '48px',
              }}
            >
              <Phone size={15} /> Phoenix Valley
            </a>
            <a
              href="tel:3123755548"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--fg)',
                textDecoration: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                border: '1px solid var(--border)',
                minHeight: '48px',
              }}
            >
              <Phone size={15} /> Chicagoland
            </a>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section style={{ padding: 'var(--section-pad) clamp(1.25rem, 4vw, 2rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {services.map((service) => (
              <motion.div
                key={service.name}
                {...(reduced ? {} : {
                  initial: { opacity: 0, y: 12 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: '-40px' },
                  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                })}
                className="service-row"
                style={{ display: 'grid' }}
              >
                {/* Real thumbnail from Pasic Plumbing source site */}
                <div style={{ borderRadius: '4px', overflow: 'hidden', width: '88px', height: '66px', flexShrink: 0 }}>
                  <img
                    src={service.img}
                    alt={service.name}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div>
                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                    letterSpacing: '0.02em',
                    marginBottom: '0.35rem',
                  }}>
                    {service.name}
                  </h2>
                  <p style={{ color: 'var(--fg-muted)', lineHeight: 1.6, fontSize: '0.875rem', maxWidth: '600px' }}>
                    {service.description}
                  </p>
                </div>
                {service.link ? (
                  <Link
                    to={service.link}
                    className="service-link"
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
                  <div className="service-link" style={{ minWidth: '60px' }} />
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
