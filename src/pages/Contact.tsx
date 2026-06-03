import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'

const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
})

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const reduced = useReducedMotion()
  const mv = (delay = 0) => reduced ? {} : fadeUp(delay)

  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' })

  const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!FORMSPREE_ID) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--bg-3)',
    border: '1px solid var(--border)',
    borderRadius: '4px',
    color: 'var(--fg)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    padding: '0.8rem 1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    minHeight: '44px',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    fontSize: '0.78rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--fg-muted)',
    marginBottom: '0.5rem',
  }

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
            Get In Touch
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 900,
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            textTransform: 'uppercase',
            lineHeight: 0.95,
            marginBottom: '1.25rem',
          }}>
            Contact<br />
            <span style={{ color: 'var(--fg-muted)', fontWeight: 400 }}>Pasic Plumbing</span>
          </h1>
          <p style={{ color: 'var(--fg-muted)', maxWidth: '420px', lineHeight: 1.75, fontSize: '1.05rem' }}>
            Call for the fastest response. For non-urgent inquiries, use the form below — we reply within one business day.
          </p>
        </div>
      </section>

      <section style={{ padding: 'var(--section-pad) clamp(1.25rem, 4vw, 2rem)' }}>
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(2.5rem, 6vw, 5rem)',
            alignItems: 'start',
          }}
        >
          {/* Contact details */}
          <motion.div {...mv()}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              textTransform: 'uppercase',
              lineHeight: 0.95,
              marginBottom: '2rem',
            }}>
              Reach Us Directly
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{
                display: 'flex',
                gap: '1rem',
                padding: '1.25rem',
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
              }}>
                <Phone size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: '0.4rem' }}>
                    Arizona (Phoenix Valley)
                  </p>
                  <a
                    href="tel:4804780447"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--fg)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg)' }}
                  >
                    480-478-0447
                  </a>
                </div>
              </div>
              <div style={{
                display: 'flex',
                gap: '1rem',
                padding: '1.25rem',
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
              }}>
                <Phone size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: '0.4rem' }}>
                    Illinois (Chicagoland)
                  </p>
                  <a
                    href="tel:3123755548"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', color: 'var(--fg)', textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg)' }}
                  >
                    312-375-5548
                  </a>
                </div>
              </div>
              <div style={{
                display: 'flex',
                gap: '1rem',
                padding: '1.25rem',
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
              }}>
                <MapPin size={20} style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--fg-muted)', marginBottom: '0.4rem' }}>
                    Based In
                  </p>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem' }}>
                    Scottsdale, AZ<br />
                    <span style={{ color: 'var(--fg-muted)', fontWeight: 400, fontSize: '0.85rem' }}>LIC #ROC200219 K-37</span>
                  </p>
                </div>
              </div>
            </div>

            <p style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '0.78rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--fg-muted)',
              marginBottom: '1rem',
            }}>
              Follow Us
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { href: 'https://facebook.com/pasicplumbing', icon: <FacebookIcon />, label: 'Facebook' },
                { href: 'https://linkedin.com/company/pasicplumbing', icon: <LinkedInIcon />, label: 'LinkedIn' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '44px',
                    height: '44px',
                    background: 'var(--bg-2)',
                    border: '1px solid var(--border)',
                    borderRadius: '4px',
                    color: 'var(--fg-muted)',
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.borderColor = 'var(--border-accent)'
                    el.style.color = 'var(--accent)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.borderColor = 'var(--border)'
                    el.style.color = 'var(--fg-muted)'
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div {...mv(0.1)}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 900,
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              textTransform: 'uppercase',
              lineHeight: 0.95,
              marginBottom: '2rem',
            }}>
              Send a Message
            </h2>

            {status === 'sent' ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                padding: '3rem 2rem',
                background: 'var(--bg-2)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                textAlign: 'center',
              }}>
                <CheckCircle size={40} style={{ color: 'var(--accent)' }} />
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.3rem', textTransform: 'uppercase' }}>
                  Message Sent
                </p>
                <p style={{ color: 'var(--fg-muted)', lineHeight: 1.7 }}>
                  We'll be in touch soon. For urgent needs, call 480-478-0447.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <label htmlFor="name" style={labelStyle}>Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    style={inputStyle}
                    onFocus={e => { (e.target as HTMLInputElement).style.borderColor = 'var(--border-accent)' }}
                    onBlur={e => { (e.target as HTMLInputElement).style.borderColor = 'var(--border)' }}
                  />
                </div>
                <div>
                  <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="480-555-0100"
                    style={inputStyle}
                    onFocus={e => { (e.target as HTMLInputElement).style.borderColor = 'var(--border-accent)' }}
                    onBlur={e => { (e.target as HTMLInputElement).style.borderColor = 'var(--border)' }}
                  />
                </div>
                <div>
                  <label htmlFor="service" style={labelStyle}>Service Needed</label>
                  <div style={{ position: 'relative' }}>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer', appearance: 'none', paddingRight: '2.5rem' }}
                      onFocus={e => { (e.target as HTMLSelectElement).style.borderColor = 'var(--border-accent)' }}
                      onBlur={e => { (e.target as HTMLSelectElement).style.borderColor = 'var(--border)' }}
                    >
                      <option value="">Select a service…</option>
                      <option>Water Heater Installation & Repair</option>
                      <option>Sewer Surveillance</option>
                      <option>Faucet Installation & Repair</option>
                      <option>Sewer Line Repair</option>
                      <option>Water Line Repair</option>
                      <option>Gas Piping</option>
                      <option>Underslab Repairs</option>
                      <option>Other</option>
                    </select>
                    {/* Custom dropdown arrow */}
                    <span style={{
                      position: 'absolute',
                      right: '0.85rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      pointerEvents: 'none',
                      color: 'var(--fg-muted)',
                      fontSize: '0.7rem',
                    }} aria-hidden="true">▼</span>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" style={labelStyle}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe what you need…"
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                    onFocus={e => { (e.target as HTMLTextAreaElement).style.borderColor = 'var(--border-accent)' }}
                    onBlur={e => { (e.target as HTMLTextAreaElement).style.borderColor = 'var(--border)' }}
                  />
                </div>

                {status === 'error' && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    padding: '0.85rem 1rem',
                    background: 'oklch(30% 0.09 42 / 0.3)',
                    border: '1px solid var(--border-accent)',
                    borderRadius: '4px',
                    fontSize: '0.88rem',
                    color: 'var(--fg)',
                  }}>
                    <AlertCircle size={16} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                    <span>
                      {!import.meta.env.VITE_FORMSPREE_ID
                        ? 'The contact form isn\'t set up yet. Please call us directly at '
                        : 'Something went wrong. Please call us at '}
                      <a href="tel:4804780447" style={{ color: 'var(--accent)', fontWeight: 600 }}>480-478-0447</a>
                      {' '}or{' '}
                      <a href="tel:3123755548" style={{ color: 'var(--accent)', fontWeight: 600 }}>312-375-5548</a>.
                    </span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 800,
                    fontSize: '1rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--bg)',
                    background: status === 'sending' ? 'var(--fg-muted)' : 'var(--accent)',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '1rem 2rem',
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                    transition: 'background 0.2s',
                    minHeight: '52px',
                  }}
                >
                  <Send size={16} />
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

    </main>
  )
}
