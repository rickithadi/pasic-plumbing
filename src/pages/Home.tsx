import { motion, useReducedMotion } from 'framer-motion'
import { Phone, ChevronRight, Shield, Clock, Award, Wrench, Quote } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
})

const services = [
  'Water Heater Installation & Repair',
  'Sewer Surveillance',
  'Faucet Installation & Repair',
  'Instant Hot Water Recirculating Line',
  'Toilets',
  'Water Softener',
  'Sewer Line Repair',
  'Water Line Repair',
  'Sump & Sewage Pump',
  'Gas Piping',
  'Underslab Repairs',
  'Garbage Disposal',
  'Replace Bathtub & Shower',
]

const clients = [
  { name: 'Arizona Biltmore Resort', type: 'Luxury Hotel', icon: '🏨' },
  { name: 'ALDI Grocery Stores', type: 'Retail Chain', icon: '🛒' },
  { name: 'White Castle', type: 'Restaurant — Scottsdale, AZ', icon: '🍔' },
  { name: 'Navy Federal Union', type: 'Financial — Goodyear, AZ', icon: '🏦' },
]

const testimonials = [
  {
    quote: 'Wonderful experience ALWAYS. Pasic Plumbing is an amazing company and wonderful at what they do. Duke is accommodative, friendly, and very dedicated to all of his clients. Thank you Pasic plumbing for being amazing!',
    author: 'Satisfied Client',
    context: 'Residential',
  },
  {
    quote: 'incredible and honest privately owned company! use them all the time.',
    author: 'Repeat Customer',
    context: 'Commercial',
  },
  {
    quote: 'Dear Dusko, Thank you for all of your help transforming our side yard. The new spigot and fountain are truly awesome.',
    author: 'Homeowner',
    context: 'Exterior Project',
  },
]

export default function Home() {
  const reduced = useReducedMotion()
  const mv = (delay = 0) => reduced ? {} : fadeUp(delay)

  return (
    <main style={{ paddingTop: '68px' }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: 'clamp(520px, 88vh, 820px)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&fm=webp&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(105deg, oklch(12% 0.015 55 / 0.97) 0%, oklch(14% 0.012 55 / 0.85) 55%, oklch(14% 0.012 55 / 0.55) 100%)',
          }}
        />
        {/* Copper accent stripe */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '4px',
            height: '100%',
            background: 'linear-gradient(to bottom, var(--accent), transparent)',
          }}
        />

        <div
          style={{
            position: 'relative',
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            padding: 'clamp(3rem, 8vw, 5rem) clamp(1.25rem, 4vw, 2rem)',
          }}
        >
          {/* License badge */}
          <motion.div {...mv(0.05)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--accent-dim)',
              border: '1px solid var(--border-accent)',
              borderRadius: '4px',
              padding: '0.35rem 0.85rem',
              marginBottom: '1.75rem',
            }}
          >
            <Shield size={13} style={{ color: 'var(--accent)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)' }}>
              Licensed · ROC200219 K-37
            </span>
          </motion.div>

          <motion.h1 {...mv(0.1)}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2.8rem, 8vw, 6.5rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
              maxWidth: '820px',
            }}
          >
            Call for a{' '}
            <span style={{ color: 'var(--accent)', display: 'block' }}>licensed</span>
            plumber.
          </motion.h1>

          <motion.p {...mv(0.18)}
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'var(--fg-muted)',
              maxWidth: '480px',
              lineHeight: 1.65,
              marginBottom: '2.5rem',
            }}
          >
            35+ years of trusted commercial &amp; residential plumbing across Phoenix Valley and Chicagoland. Family-owned, fully licensed.
          </motion.p>

          <motion.div {...mv(0.25)}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a
              href="tel:4804780447"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                color: 'var(--bg)',
                background: 'var(--accent)',
                textDecoration: 'none',
                padding: '0.9rem 1.8rem',
                borderRadius: '4px',
                transition: 'background 0.2s, transform 0.15s',
                minHeight: '52px',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = 'var(--accent-hover)'
                el.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = 'var(--accent)'
                el.style.transform = 'translateY(0)'
              }}
            >
              <Phone size={18} />
              480-478-0447
            </a>
            <Link
              to="/services"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: 'var(--fg)',
                textDecoration: 'none',
                padding: '0.9rem 1.6rem',
                borderRadius: '4px',
                border: '1px solid var(--border)',
                transition: 'border-color 0.2s, color 0.2s',
                minHeight: '52px',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'var(--border-accent)'
                el.style.color = 'var(--accent)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'var(--border)'
                el.style.color = 'var(--fg)'
              }}
            >
              See All Services
              <ChevronRight size={16} />
            </Link>
          </motion.div>

          {/* Trust stats */}
          <motion.div {...mv(0.32)}
            style={{
              display: 'flex',
              gap: 'clamp(1.5rem, 4vw, 3rem)',
              marginTop: '3.5rem',
              flexWrap: 'wrap',
            }}
          >
            {[['35+', 'Years Experience'], ['2', 'States Served'], ['13+', 'Services Offered']].map(([num, label]) => (
              <div key={label}>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: 'var(--accent)', lineHeight: 1 }}>
                  {num}
                </p>
                <p style={{ fontSize: '0.8rem', color: 'var(--fg-muted)', fontWeight: 500, marginTop: '0.25rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  {label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Trust Bar ────────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--bg-2)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          padding: '1.5rem clamp(1.25rem, 4vw, 2rem)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(1.5rem, 5vw, 4rem)',
            flexWrap: 'wrap',
          }}
        >
          {[
            { icon: <Shield size={16} />, text: 'Licensed & Insured' },
            { icon: <Clock size={16} />, text: 'Commercial & Residential' },
            { icon: <Award size={16} />, text: '35+ Years Experience' },
            { icon: <Wrench size={16} />, text: 'Phoenix Valley & Chicagoland' },
          ].map(({ icon, text }) => (
            <div
              key={text}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--fg-muted)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                fontFamily: 'var(--font-display)',
                textTransform: 'uppercase',
              }}
            >
              <span style={{ color: 'var(--accent)' }}>{icon}</span>
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────── */}
      <section style={{ padding: 'var(--section-pad) clamp(1.25rem, 4vw, 2rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div {...mv()}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}>
              What We Do
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              textTransform: 'uppercase',
              lineHeight: 0.95,
              marginBottom: '0.75rem',
            }}>
              Complete Plumbing<br />
              <span style={{ color: 'var(--fg-muted)', fontWeight: 400 }}>Services</span>
            </h2>
            <p style={{ color: 'var(--fg-muted)', maxWidth: '480px', marginBottom: '3rem', lineHeight: 1.7 }}>
              From emergency repairs to full commercial installations — we bring three decades of expertise to every job, big or small.
            </p>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '1px',
              background: 'var(--border)',
              border: '1px solid var(--border)',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            {services.map((service, i) => (
              <motion.div
                key={service}
                {...(reduced ? {} : {
                  initial: { opacity: 0 },
                  whileInView: { opacity: 1 },
                  viewport: { once: true, margin: '-40px' },
                  transition: { duration: 0.4, delay: i * 0.04 },
                })}
                style={{
                  background: 'var(--bg-2)',
                  padding: '1.25rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  transition: 'background 0.2s',
                  cursor: 'default',
                }}
                whileHover={reduced ? {} : { backgroundColor: 'var(--bg-3)' }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    flexShrink: 0,
                  }}
                />
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  letterSpacing: '0.03em',
                }}>
                  {service}
                </span>
                {service === 'Water Heater Installation & Repair' && (
                  <Link
                    to="/water-heaters"
                    style={{
                      marginLeft: 'auto',
                      color: 'var(--accent)',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Details →
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div {...mv()} style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                textDecoration: 'none',
                padding: '0.8rem 1.6rem',
                border: '1px solid var(--border-accent)',
                borderRadius: '4px',
                transition: 'background 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = 'var(--accent-dim)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.background = 'transparent'
              }}
            >
              Get a Free Estimate
              <ChevronRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── About Strip ───────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--bg-2)',
          borderTop: '1px solid var(--border)',
          borderBottom: '1px solid var(--border)',
          padding: 'var(--section-pad) clamp(1.25rem, 4vw, 2rem)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'center',
          }}
        >
          {/* Image side */}
          <motion.div {...mv()}>
            <div
              style={{
                position: 'relative',
                borderRadius: '6px',
                overflow: 'hidden',
                aspectRatio: '4/3',
              }}
            >
              {/* data-replace: owner/team portrait or job site photo */}
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&fm=webp&q=80"
                alt="Professional plumber at work"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                data-replace="owner Duke Pasic portrait or job site photo"
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.4rem 0.85rem',
                  borderRadius: '3px',
                }}
              >
                35+ Years
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div {...mv(0.1)}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}>
              Our Story
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              textTransform: 'uppercase',
              lineHeight: 0.95,
              marginBottom: '1.5rem',
            }}>
              Family-Owned<br />
              <span style={{ color: 'var(--fg-muted)', fontWeight: 400 }}>Built on Trust</span>
            </h2>
            <p style={{ color: 'var(--fg-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Pasic Plumbing Contractors is a local, family-owned and operated plumbing contractor headquartered in Scottsdale, AZ. For over 35 years, we've provided reliable plumbing solutions to homeowners and commercial operators across Phoenix Valley and Chicagoland.
            </p>
            <p style={{ color: 'var(--fg-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Every job — whether it's a leaky faucet or a full commercial rough-in — receives the same level of care and expertise. Our clients keep calling back because the work is done right the first time.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                to="/about"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  transition: 'gap 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.gap = '0.7rem' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.gap = '0.4rem' }}
              >
                Learn More <ChevronRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Commercial Portfolio ─────────────────────────────── */}
      <section style={{ padding: 'var(--section-pad) clamp(1.25rem, 4vw, 2rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div {...mv()} style={{ marginBottom: '3rem' }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}>
              Commercial Work
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              textTransform: 'uppercase',
              lineHeight: 0.95,
            }}>
              Trusted by<br />
              <span style={{ color: 'var(--fg-muted)', fontWeight: 400 }}>Major Brands</span>
            </h2>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {clients.map((c, i) => (
              <motion.div
                key={c.name}
                {...(reduced ? {} : {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: '-40px' },
                  transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
                })}
                style={{
                  background: 'var(--bg-2)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  padding: '2rem 1.75rem',
                  transition: 'border-color 0.2s, transform 0.2s',
                }}
                whileHover={reduced ? {} : { y: -3, borderColor: 'var(--border-accent)' }}
              >
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '1rem' }}>
                  {c.icon}
                </span>
                <p style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  letterSpacing: '0.02em',
                  marginBottom: '0.4rem',
                }}>
                  {c.name}
                </p>
                <p style={{ color: 'var(--fg-muted)', fontSize: '0.82rem', letterSpacing: '0.03em' }}>
                  {c.type}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--bg-2)',
          borderTop: '1px solid var(--border)',
          padding: 'var(--section-pad) clamp(1.25rem, 4vw, 2rem)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div {...mv()} style={{ marginBottom: '3rem' }}>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.75rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '0.75rem',
            }}>
              What Clients Say
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              textTransform: 'uppercase',
              lineHeight: 0.95,
            }}>
              Real Reviews
            </h2>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                {...(reduced ? {} : {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: '-40px' },
                  transition: { duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
                })}
                style={{
                  background: 'var(--bg-3)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <Quote size={22} style={{ color: 'var(--accent)', opacity: 0.8 }} />
                <p style={{
                  color: 'var(--fg)',
                  lineHeight: 1.75,
                  fontStyle: 'italic',
                  flex: 1,
                }}>
                  "{t.quote}"
                </p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                  }}>
                    {t.author}
                  </p>
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'var(--accent)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                  }}>
                    {t.context}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--accent)',
          padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 2rem)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
          }}
        >
          <motion.div {...mv()}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              textTransform: 'uppercase',
              lineHeight: 0.95,
              color: 'var(--bg)',
              marginBottom: '0.5rem',
            }}>
              Need a Plumber?
            </h2>
            <p style={{ color: 'oklch(14% 0.012 55 / 0.7)', fontSize: '1rem' }}>
              Phoenix Valley: 480-478-0447 · Chicagoland: 312-375-5548
            </p>
          </motion.div>
          <motion.div {...mv(0.1)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
                color: 'var(--accent)',
                background: 'var(--bg)',
                textDecoration: 'none',
                padding: '0.9rem 1.8rem',
                borderRadius: '4px',
                transition: 'opacity 0.2s',
                minHeight: '48px',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '0.9' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = '1' }}
            >
              <Phone size={16} />
              Call Now
            </a>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--bg)',
                textDecoration: 'none',
                padding: '0.9rem 1.8rem',
                borderRadius: '4px',
                border: '2px solid oklch(14% 0.012 55 / 0.4)',
                transition: 'border-color 0.2s',
                minHeight: '48px',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'oklch(14% 0.012 55 / 0.8)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'oklch(14% 0.012 55 / 0.4)' }}
            >
              Send a Message
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
