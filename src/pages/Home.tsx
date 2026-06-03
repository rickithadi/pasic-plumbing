import { motion, useReducedMotion } from 'framer-motion'
import { Phone, ChevronRight, Shield } from 'lucide-react'
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

const WX = 'https://static.wixstatic.com/media'
const wx = (hash: string, file: string, w = 400, h = 300) =>
  `${WX}/${hash}/v1/fill/w_${w},h_${h},al_c,q_85,usm_0.66_1.00_0.01,enc_auto,quality_auto/${file}`

const clients = [
  {
    name: 'Arizona Biltmore Resort',
    type: 'Luxury Hotel · Phoenix, AZ',
    img: wx('8358d6_9807e46cff3049cbbc23a8a8f0474790~mv2.jpg', 'project.jpg'),
  },
  {
    name: 'ALDI Grocery Stores',
    type: 'Retail Chain · Multiple Locations',
    img: wx('8358d6_aba3d9d35faa4dd6abdf3932f2adef76~mv2.jpg', 'azplumber.jpg'),
  },
  {
    name: 'White Castle',
    type: 'Restaurant · Scottsdale, AZ',
    img: null,
    videoId: 'OBwn9n_8n4g',
    videoStart: 89,
  },
  {
    name: 'Navy Federal Union',
    type: 'Financial Services · Goodyear, AZ',
    img: wx('8358d6_78a584bd980f4d789fc19a3aec6e50d9~mv2.jpg', 'arizona-plumber.jpg'),
  },
]

const testimonials = [
  {
    quote: 'Wonderful experience ALWAYS. Pasic Plumbing is an amazing company and wonderful at what they do. Duke is accommodative, friendly, and very dedicated to all of his clients. Thank you Pasic plumbing for being amazing!',
    author: 'Phoenix Valley',
    context: 'Residential · Repeat customer',
  },
  {
    quote: 'incredible and honest privately owned company! use them all the time.',
    author: 'Scottsdale',
    context: 'Commercial · Ongoing',
  },
  {
    quote: 'Dear Dusko, Thank you for all of your help transforming our side yard. The new spigot and fountain are truly awesome.',
    author: 'Homeowner',
    context: 'Exterior project',
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
            backgroundImage: `url(https://static.wixstatic.com/media/8358d6_f282cfe7cdca463aaa9e88f0e157ff6f~mv2.jpg/v1/fill/w_1600,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_auto,quality_auto/4B7A0780_JPG.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        />
        {/* Overlay — left heavy to ensure text legibility, right opens up to show the photo */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(100deg, oklch(12% 0.015 55 / 0.93) 0%, oklch(13% 0.013 55 / 0.78) 50%, oklch(14% 0.012 55 / 0.40) 100%)',
          }}
        />
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
              background: 'oklch(0% 0 0 / 0.35)',
              border: '1px solid oklch(100% 0 0 / 0.2)',
              borderRadius: '4px',
              padding: '0.35rem 0.85rem',
              marginBottom: '1.75rem',
            }}
          >
            <Shield size={13} style={{ color: 'oklch(80% 0.12 234)' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'oklch(90% 0.005 55)' }}>
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
              color: 'oklch(82% 0.008 55)',
              maxWidth: '480px',
              lineHeight: 1.65,
              marginBottom: '2.5rem',
            }}
          >
            35+ years of trusted commercial &amp; residential plumbing across Phoenix Valley and Chicagoland. Family-owned, fully licensed.
          </motion.p>

          <motion.div {...mv(0.25)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            <a
              href="tel:4804780447"
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '0.1rem',
                fontFamily: 'var(--font-display)',
                color: 'var(--bg)',
                background: 'var(--accent)',
                textDecoration: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                transition: 'background 0.2s, transform 0.15s',
                minHeight: '52px',
                justifyContent: 'center',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'var(--accent-hover)'; el.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.background = 'var(--accent)'; el.style.transform = 'translateY(0)' }}
            >
              <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.75 }}>Phoenix Valley</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 900, fontSize: 'clamp(0.95rem, 2.2vw, 1.1rem)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                <Phone size={14} />480-478-0447
              </span>
            </a>
            <a
              href="tel:3123755548"
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '0.1rem',
                fontFamily: 'var(--font-display)',
                color: 'oklch(96% 0.005 55)',
                textDecoration: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                border: '1px solid oklch(100% 0 0 / 0.25)',
                transition: 'border-color 0.2s',
                minHeight: '52px',
                justifyContent: 'center',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'oklch(100% 0 0 / 0.55)' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'oklch(100% 0 0 / 0.25)' }}
            >
              <span style={{ fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'oklch(80% 0.008 55)' }}>Chicagoland</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800, fontSize: 'clamp(0.85rem, 2vw, 1rem)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                <Phone size={13} />312-375-5548
              </span>
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
                color: 'oklch(78% 0.008 55)',
                textDecoration: 'none',
                padding: '0.75rem 1.4rem',
                borderRadius: '4px',
                transition: 'color 0.2s',
                minHeight: '52px',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = 'white' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = 'oklch(78% 0.008 55)' }}
            >
              View Services
              <ChevronRight size={15} />
            </Link>
          </motion.div>

          {/* Credential strip */}
          <motion.div {...mv(0.32)}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.6rem 0',
              borderTop: '1px solid oklch(32% 0.01 55)',
              paddingTop: '1.5rem',
            }}
          >
            {[
              '35+ Years in Business',
              'Commercial & Residential',
              'Phoenix Valley · Chicagoland',
              'LIC #ROC200219 K-37',
            ].map((cred, i, arr) => (
              <span
                key={cred}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  fontSize: '0.77rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'oklch(68% 0.01 55)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.9rem',
                }}
              >
                {cred}
                {i < arr.length - 1 && (
                  <span style={{ display: 'inline-block', width: '1px', height: '0.85em', background: 'oklch(35% 0.01 55)', verticalAlign: 'middle' }} aria-hidden="true" />
                )}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────── */}
      <section style={{ padding: 'var(--section-pad) clamp(1.25rem, 4vw, 2rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
              Every Plumbing<br />
              <span style={{ color: 'var(--accent)' }}>Need</span><br />
              <span style={{ color: 'var(--fg-muted)', fontWeight: 400 }}>Covered</span>
            </h2>
            <div>
              <p style={{ color: 'var(--fg-muted)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                From emergency repairs to full commercial installations — three decades of expertise on every job, regardless of scope.
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
                Request a Quote <ChevronRight size={14} />
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
                src="https://static.wixstatic.com/media/8358d6_994044ca969245d690de3a0496ec95ce~mv2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto,quality_auto/arizona%20commercial%20plumber.jpg"
                alt="Pasic Plumbing — commercial work in Arizona"
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', background: 'var(--accent)', color: 'var(--bg)', fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.4rem 0.85rem', borderRadius: '3px' }}>
                Since 1989
              </div>
            </div>
          </motion.div>

          <motion.div {...mv(0.1)}>
            <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.75rem' }}>
              Who We Are
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', textTransform: 'uppercase', lineHeight: 0.95, marginBottom: '1.5rem' }}>
              Local.<br />
              <span style={{ color: 'var(--fg-muted)', fontWeight: 400 }}>Experienced. Honest.</span>
            </h2>
            <p style={{ color: 'var(--fg-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Pasic Plumbing Contractors is a family-owned plumbing contractor based in Scottsdale, AZ. For over 35 years, Duke Pasic and his team have delivered reliable work to homeowners and commercial clients across Phoenix Valley and Chicagoland.
            </p>
            <p style={{ color: 'var(--fg-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
              From a leaky faucet to a full commercial build-out, every job gets the same attention. Our clients include the Arizona Biltmore Resort, ALDI, and Navy Federal Union — and they keep calling back.
            </p>
            <Link
              to="/about"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.07em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none' }}
            >
              Our Story <ChevronRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Commercial Portfolio ─────────────────────────────── */}
      <section style={{ padding: 'var(--section-pad) clamp(1.25rem, 4vw, 2rem)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div {...mv()}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 900,
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                textTransform: 'uppercase',
                lineHeight: 0.95,
                flex: '0 0 auto',
              }}>
                Commercial<br />
                <span style={{ color: 'var(--accent)' }}>Clients</span>
              </h2>
              <p style={{ color: 'var(--fg-muted)', fontSize: '0.9rem', lineHeight: 1.7, maxWidth: '360px' }}>
                Large-scale commercial work demands accuracy and reliability. These clients chose Pasic — and call back.
              </p>
            </div>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {clients.map((c, i) => (
              <motion.div
                key={c.name}
                {...(reduced ? {} : {
                  initial: { opacity: 0, y: 14 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true, margin: '-40px' },
                  transition: { duration: 0.45, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
                })}
                style={{
                  borderBottom: '1px solid var(--border)',
                  padding: '1.75rem 0',
                }}
              >
                {/* Client row header */}
                <div style={{ display: 'grid', gridTemplateColumns: '3rem 1fr', gap: '1.25rem', alignItems: 'center', marginBottom: c.img || c.videoId ? '1.25rem' : '0' }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.1rem', color: 'var(--accent)', opacity: 0.45, lineHeight: 1 }}>
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
                </div>

                {/* Tied asset — photo or video from source site */}
                {c.img && (
                  <div style={{ marginLeft: '4.25rem' }}>
                    <div style={{ borderRadius: '5px', overflow: 'hidden', aspectRatio: '16/7', maxWidth: '640px' }}>
                      <img
                        src={c.img}
                        alt={`${c.name} — Pasic Plumbing commercial work`}
                        loading="lazy"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      />
                    </div>
                  </div>
                )}

                {c.videoId && (
                  <div style={{ marginLeft: '4.25rem' }}>
                    <div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: '5px', overflow: 'hidden', background: 'var(--bg-3)', maxWidth: '640px' }}>
                      <iframe
                        src={`https://www.youtube.com/embed/${c.videoId}?start=${c.videoStart}&rel=0&modestbranding=1`}
                        title={`${c.name} — Pasic Plumbing commercial project`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                      />
                    </div>
                    <p style={{ color: 'var(--fg-muted)', fontSize: '0.78rem', marginTop: '0.6rem', letterSpacing: '0.03em' }}>
                      Time-lapse — Scottsdale, AZ installation
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section
        style={{
          background: 'var(--bg-2)',
          borderTop: '1px solid var(--border)',
          padding: 'var(--section-pad) clamp(1.25rem, 4vw, 2rem)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div {...mv()} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', textTransform: 'uppercase', lineHeight: 0.95 }}>
              In Their Words
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
                <p style={{ color: 'var(--fg-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-display)', fontWeight: 500, letterSpacing: '0.04em' }}>
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
                  <p style={{ fontSize: '0.75rem', color: 'var(--fg-muted)', fontFamily: 'var(--font-display)', fontWeight: 500, letterSpacing: '0.05em' }}>{t.context}</p>
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
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 3rem)', textTransform: 'uppercase', lineHeight: 0.95, color: 'white', marginBottom: '0.5rem' }}>
              Ready to Get<br />the Job Done?
            </h2>
            <p style={{ color: 'oklch(100% 0 0 / 0.72)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Call now or send a message — we respond fast.
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
                background: 'white',
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
              480-478-0447
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
                color: 'white',
                textDecoration: 'none',
                padding: '0.9rem 1.8rem',
                borderRadius: '4px',
                border: '2px solid oklch(100% 0 0 / 0.4)',
                transition: 'border-color 0.2s',
                minHeight: '48px',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'oklch(100% 0 0 / 0.75)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = 'oklch(100% 0 0 / 0.4)' }}
            >
              Send a Message
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
