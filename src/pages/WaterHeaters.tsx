import { motion, useReducedMotion } from 'framer-motion'
import { Phone, CheckCircle, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
})

const tankless = [
  'Endless hot water on demand',
  'Energy efficient — no standby heat loss',
  'Space-saving wall-mounted design',
  'Longer lifespan than tank units (20+ years)',
  'Ideal for high-demand commercial applications',
]

const traditional = [
  'Lower upfront installation cost',
  'Works well for moderate usage households',
  'Simple repair and maintenance',
  'Reliable in low-demand settings',
  'Available in a range of sizes (30–80+ gallon)',
]

export default function WaterHeaters() {
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
            Water Heaters
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            textTransform: 'uppercase',
            lineHeight: 0.95,
            marginBottom: '1.25rem',
          }}>
            Installation &amp;<br />
            <span style={{ color: 'var(--fg-muted)', fontWeight: 400 }}>Repair</span>
          </h1>
          <p style={{ color: 'var(--fg-muted)', maxWidth: '520px', lineHeight: 1.75, fontSize: '1.05rem' }}>
            Traditional tank or tankless — we install, repair, and service all types. Fast turnaround, honest assessment, and no unnecessary upsell.
          </p>
        </div>
      </section>

      {/* Hero image */}
      <section style={{ padding: 'var(--section-pad) clamp(1.25rem, 4vw, 2rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div {...mv()}>
            <div
              style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                aspectRatio: '16/6',
                marginBottom: '4rem',
              }}
            >
              {/* data-replace: tankless water heater installation photo */}
              <img
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1400&fm=webp&q=80"
                alt="Professional water heater installation"
                loading="eager"
                data-replace="tankless water heater installation photo"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'oklch(14% 0.012 55 / 0.45)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '2rem',
                  left: '2rem',
                  right: '2rem',
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                }}
              >
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.3rem, 3vw, 2rem)', textTransform: 'uppercase', color: 'var(--fg)' }}>
                    Tankless & Tank Water Heaters
                  </p>
                  <p style={{ color: 'oklch(93% 0.008 55 / 0.7)', fontSize: '0.9rem' }}>Gas & Electric · All Major Brands</p>
                </div>
                <a
                  href="tel:4804780447"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '0.9rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--bg)',
                    background: 'var(--accent)',
                    textDecoration: 'none',
                    padding: '0.75rem 1.4rem',
                    borderRadius: '4px',
                    minHeight: '44px',
                  }}
                >
                  <Phone size={15} /> Call Now
                </a>
              </div>
            </div>
          </motion.div>

          {/* Comparison grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {/* Tankless */}
            <motion.div {...mv(0.05)}
              style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--border-accent)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <div style={{
                background: 'var(--accent)',
                padding: '1.25rem 1.5rem',
              }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '1.2rem',
                  textTransform: 'uppercase',
                  color: 'var(--bg)',
                  letterSpacing: '0.03em',
                }}>
                  Tankless
                </p>
                <p style={{ fontSize: '0.8rem', color: 'oklch(14% 0.012 55 / 0.7)', marginTop: '0.2rem' }}>
                  On-demand hot water · Best for efficiency
                </p>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {tankless.map(item => (
                    <li key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <CheckCircle size={15} style={{ color: 'var(--accent)', marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ color: 'var(--fg-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Traditional */}
            <motion.div {...mv(0.1)}
              style={{
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <div style={{
                background: 'var(--bg-3)',
                padding: '1.25rem 1.5rem',
                borderBottom: '1px solid var(--border)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '1.2rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                }}>
                  Traditional Tank
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', marginTop: '0.2rem' }}>
                  Storage tank · Reliable & cost-effective
                </p>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {traditional.map(item => (
                    <li key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                      <CheckCircle size={15} style={{ color: 'var(--gold)', marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ color: 'var(--fg-muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Repair section */}
      <section
        style={{
          background: 'var(--bg-2)',
          borderTop: '1px solid var(--border)',
          padding: 'var(--section-pad) clamp(1.25rem, 4vw, 2rem)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div {...mv()} style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              textTransform: 'uppercase',
              lineHeight: 0.95,
              marginBottom: '1rem',
            }}>
              Water Heater Repair
            </h2>
            <p style={{ color: 'var(--fg-muted)', maxWidth: '540px', lineHeight: 1.75 }}>
              No hot water? Strange noises? Leaking tank? We diagnose and repair water heater problems fast. Most repairs are completed same-day.
            </p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              ['No Hot Water', 'Pilot light, thermostat, heating element — we find the cause.'],
              ['Leaking Tank', 'Valve replacement or tank replacement — we give you an honest assessment.'],
              ['Rust or Sediment', 'Flushing and anode rod replacement to extend tank life.'],
              ['Strange Noises', 'Sediment buildup causes rumbling — we clean and diagnose.'],
            ].map(([title, desc]) => (
              <motion.div
                key={title}
                {...mv()}
                style={{
                  padding: '1.5rem',
                  background: 'var(--bg-3)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                }}
              >
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1rem', marginBottom: '0.5rem' }}>
                  {title}
                </p>
                <p style={{ color: 'var(--fg-muted)', fontSize: '0.875rem', lineHeight: 1.65 }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 4vw, 2rem)',
        textAlign: 'center',
        borderTop: '1px solid var(--border)',
      }}>
        <motion.div {...mv()}>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            Get a Water Heater Quote
          </h2>
          <p style={{ color: 'var(--fg-muted)', marginBottom: '2rem' }}>
            Call us or send a message — we'll assess your needs and recommend the right system.
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
              Request a Quote <ChevronRight size={15} />
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  )
}
