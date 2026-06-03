import { motion, useReducedMotion } from 'framer-motion'
import { Phone, ChevronRight, Shield, Clock, Award, Wrench } from 'lucide-react'
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
  { name: 'Arizona Biltmore Resort', type: 'Luxury Hotel · Phoenix, AZ' },
  { name: 'ALDI Grocery Stores', type: 'Retail Chain · Multiple Locations' },
  { name: 'White Castle', type: 'Restaurant · Scottsdale, AZ' },
  { name: 'Navy Federal Union', type: 'Financial Services · Goodyear, AZ' },
]

const testimonials = [
  {
    quote: 'Wonderful experience ALWAYS. Pasic Plumbing is an amazing company and wonderful at what they do. Duke is accommodative, friendly, and very dedicated to all of his clients. Thank you Pasic plumbing for being amazing!',
    author: 'Residential Client',
    context: 'Repeat customer',
    featured: true,
  },
  {
    quote: 'incredible and honest privately owned company! use them all the time.',
    author: 'Commercial Client',
    context: 'Ongoing relationship',
    featured: false,
  },
  {
    quote: 'Dear Dusko, Thank you for all of your help transforming our side yard. The new spigot and fountain are truly awesome.',
    author: 'Homeowner',
    context: 'Exterior project',
    featured: false,
  },
]

export default function Home() {
  const reduced = useReducedMotion()
  const mv = (delay = 0) => reduced ? {} : fadeUp(delay)

  return (
    <main id="main-content" style={{ paddingTop: '68px' }}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: 'clamp(560px, 90vh, 860px)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&fm=webp&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(105deg, oklch(12% 0.015 55 / 0.97) 0%, oklch(14% 0.012 55 / 0.88) 60%, oklch(14% 0.012 55 / 0.55) 100%)',
          }}
        />
        {/* Left copper accent bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'linear-gradient(to bottom, var(--accent), transparent)' }} />

        <div
          style={{
            position: 'relative',
            maxWidth: '1200px',
            width: '100%',
            margin: '0 auto',
            padding: 'clamp(3rem, 8vw, 5rem) clamp(1.25rem, 4vw, 2rem)',
          }}
        >
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
              fontSize: 'clamp(1rem, 2vw, 1.15rem)',
              color: 'oklch(80% 0.008 55)',
              maxWidth: '480px',
              lineHeight: 1.65,
              marginBottom: '2.5rem',
            }}
          >
            35+ years of trusted commercial &amp; residential plumbing across Phoenix Valley and Chicagoland. Family-owned, fully licensed.
          </motion.p>

          <motion.div {...mv(0.25)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3.5rem' }}>
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
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'var(--accent-hover)'; el.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'var(--accent)'; el.style.transform = 'translateY(0)' }}
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
                border: '1px solid oklch(40% 0.01 55)',
                transition: 'border-color 0.2s, color 0.2s',
                minHeight: '52px',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'var(--border-accent)'; el.style.color = 'var(--accent)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'oklch(40% 0.01 55)'; el.style.color = 'var(--fg)' }}
            >
              See All Services
              <ChevronRight size={16} />
            </Link>
          </motion.div>

          {/* Credential strip — replaces hero metric grid */}
          <motion.div {...mv(0.32)}
            style={{
              display: 'flex',
              gap: '0',
              flexWrap: 'wrap',
              borderTop: '1px solid oklch(35% 0.01 55)',
              paddingTop: '1.5rem',
            }}
          >
            {[
              '35+ Years in Business',
              'Commercial & Residential',
              'Phoenix Valley · Chicagoland',
              'LIC #ROC200219 K-37',
            ].map((cred, i) => (
              <span
                key={cred}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.78rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'oklch(70% 0.01 55)',
                  paddingRight: '1.25rem',
                  marginRight: '1.25rem',
                  borderRight: i < 3 ? '1px solid oklch(35% 0.01 55)' : 'none',
                  lineHeight: 2,
                }}
              >
                {cred}
              </span>
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
          padding: '1.25rem clamp(1.25rem, 4vw, 2rem)',
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
            { icon: <Shield size={15} />, text: 'Licensed & Insured' },
            { icon: <Clock size={15} />, text: 'Commercial & Residential' },
            { icon: <Award size={15} />, text: '35+ Years Experience' },
            { icon: <Wrench size={15} />, text: 'Phoenix Valley & Chicagoland' },
          ].map(({ icon, text }) => (
            <div
              key={text}
              style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', color: 'var(--fg-muted)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em', fontFamily: 'var(--font-display)', textTransform: 'uppercase' }}
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

          {/* Asymmetric heading — breaks the eyebrow→title→body pattern */}
          <motion.div {...mv()}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem',
              alignItems: 'end',
            }}
          >
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              textTransform: 'uppercase',
              lineHeight: 0.95,
            }}>
              Complete<br />
              <span style={{ color: 'var(--accent)' }}>Plumbing</span><br />
              <span style={{ color: 'var(--fg-muted)', fontWeight: 300, fontSize: '0.65em', letterSpacing: '0.08em', display: 'block', marginTop: '0.5rem' }}>
                SERVICES
              </span>
            </h2>
            <div>
              <p style={{ color: 'var(--fg-muted)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                From emergency repairs to full commercial installations — we bring three decades of expertise to every job, big or small.
              </p>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  textDecoration: 'none',
                  padding: '0.75rem 1.4rem',
                  border: '1px solid var(--border-accent)',
                  borderRadius: '4px',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'var(--accent-dim)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent' }}
              >
                Get a Free Estimate <ChevronRight size={14} />
              </Link>
            </div>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: '1px',
              background: 'var(--border)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
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
                  transition: { duration: 0.35, delay: i * 0.035 },
                })}
                style={{
                  background: 'var(--bg-2)',
                  padding: '1.1rem 1.4rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  transition: 'background 0.2s',
                }}
                whileHover={reduced ? {} : { backgroundColor: 'var(--bg-3)' }}
              >
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.92rem', letterSpacing: '0.02em' }}>
                  {service}
                </span>
                {service === 'Water Heater Installation & Repair' && (
                  <Link
                    to="/water-heaters"
                    style={{ marginLeft: 'auto', color: 'var(--accent)', fontSize: '0.72rem', fontFamily: 'var(--font-display)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}
                  >
                    Details →
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
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
          <motion.div {...mv()}>
            <div style={{ position: 'relative', borderRadius: '6px', overflow: 'hidden', aspectRatio: '4/3' }}>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&fm=webp&q=80"
                alt="Professional plumber at work"
                loading="lazy"
                data-replace="owner Duke Pasic portrait or job site photo"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', background: 'var(--accent)', color: 'var(--bg)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.4rem 0.85rem', borderRadius: '3px' }}>
                35+ Years
              </div>
            </div>
          </motion.div>

          <motion.div {...mv(0.1)}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>
              Our Story
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', textTransform: 'uppercase', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              Family-Owned<br />
              <span style={{ color: 'var(--fg-muted)', fontWeight: 400 }}>Built on Trust</span>
            </h2>
            <p style={{ color: 'var(--fg-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Pasic Plumbing Contractors is a local, family-owned and operated plumbing contractor headquartered in Scottsdale, AZ. For over 35 years, we've provided reliable plumbing solutions to homeowners and commercial operators across Phoenix Valley and Chicagoland.
            </p>
            <p style={{ color: 'var(--fg-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Every job — whether it's a leaky faucet or a full commercial rough-in — receives the same level of care and expertise. Our clients keep calling back because the work is done right the first time.
            </p>
            <Link
              to="/about"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none' }}
            >
              Learn More <ChevronRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Commercial Portfolio — editorial list, not emoji cards ── */}
      <section style={{ padding: 'var(--section-pad) clamp(1.25rem, 4vw, 2rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div {...mv()}>
            {/* Full-width editorial treatment */}
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: '2rem',
              marginBottom: '3rem',
              flexWrap: 'wrap',
            }}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                textTransform: 'uppercase',
                lineHeight: 0.95,
                flex: '0 0 auto',
              }}>
                Trusted by<br />
                <span style={{ color: 'var(--accent)' }}>Major Brands</span>
              </h2>
              <p style={{ color: 'var(--fg-muted)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '360px' }}>
                Commercial-scale work demands precision and reliability. These clients chose Pasic — and keep coming back.
              </p>
            </div>
          </motion.div>

          {/* Numbered list, not emoji cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {clients.map((c, i) => (
              <motion.div
                key={c.name}
                {...(reduced ? {} : {
                  initial: { opacity: 0, x: -12 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true, margin: '-40px' },
                  transition: { duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
                })}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '3rem 1fr auto',
                  gap: '1.5rem',
                  alignItems: 'center',
                  padding: '1.5rem 0',
                  borderBottom: '1px solid var(--border)',
                  transition: 'padding-left 0.2s',
                }}
                whileHover={reduced ? {} : { paddingLeft: '0.5rem' }}
              >
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 900,
                  fontSize: '1.1rem',
                  color: 'var(--accent)',
                  opacity: 0.45,
                  lineHeight: 1,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(1rem, 2.5vw, 1.3rem)', letterSpacing: '0.02em' }}>
                    {c.name}
                  </p>
                  <p style={{ color: 'var(--fg-muted)', fontSize: '0.82rem', marginTop: '0.2rem', letterSpacing: '0.04em' }}>
                    {c.type}
                  </p>
                </div>
                <div style={{ width: '24px', height: '1px', background: 'var(--border-accent)', flexShrink: 0 }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials — featured large + two secondary ─────── */}
      <section
        style={{
          background: 'var(--bg-2)',
          borderTop: '1px solid var(--border)',
          padding: 'var(--section-pad) clamp(1.25rem, 4vw, 2rem)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div {...mv()} style={{ marginBottom: '3rem' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>
              What Clients Say
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', textTransform: 'uppercase', lineHeight: 0.95 }}>
              Real Reviews
            </h2>
          </motion.div>

          {/* Featured large testimonial */}
          <motion.div {...mv(0.08)}
            style={{
              borderLeft: '3px solid var(--accent)',
              paddingLeft: 'clamp(1.5rem, 4vw, 3rem)',
              marginBottom: '2.5rem',
            }}
          >
            <p style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: 'clamp(1.1rem, 2.5vw, 1.55rem)',
              lineHeight: 1.5,
              fontStyle: 'italic',
              color: 'var(--fg)',
              marginBottom: '1.25rem',
              maxWidth: '800px',
            }}>
              "{testimonials[0].quote}"
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '32px', height: '1px', background: 'var(--accent)' }} />
              <div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem' }}>
                  {testimonials[0].author}
                </p>
                <p style={{ color: 'var(--accent)', fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  {testimonials[0].context}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Secondary testimonials */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {testimonials.slice(1).map((t, i) => (
              <motion.div
                key={i}
                {...(reduced ? {} : {
                  initial: { opacity: 0, y: 16 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: '-40px' },
                  transition: { duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
                })}
                style={{
                  background: 'var(--bg-3)',
                  border: '1px solid var(--border)',
                  borderRadius: '6px',
                  padding: '1.75rem',
                }}
              >
                <p style={{ color: 'var(--fg)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                  "{t.quote}"
                </p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem' }}>{t.author}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase' }}>{t.context}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section style={{ background: 'var(--accent)', padding: 'clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 2rem)' }}>
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
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', textTransform: 'uppercase', lineHeight: 0.95, color: 'var(--bg)', marginBottom: '0.5rem' }}>
              Need a Plumber?
            </h2>
            <p style={{ color: 'oklch(14% 0.012 55 / 0.65)', fontSize: '0.95rem' }}>
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
                border: '2px solid oklch(14% 0.012 55 / 0.35)',
                transition: 'border-color 0.2s',
                minHeight: '48px',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'oklch(14% 0.012 55 / 0.75)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'oklch(14% 0.012 55 / 0.35)' }}
            >
              Send a Message
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
