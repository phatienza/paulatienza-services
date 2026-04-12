'use client'

import { useState, useEffect } from 'react'

const samples = [
  {
    color: '#C4904A',
    bg: '#F5ECD8',
    textColor: '#1E1C18',
    mutedColor: 'rgba(30,28,24,0.5)',
    label: 'Warm & Grounded',
    name: 'Dr. Elena Marsh, LCSW',
    location: 'Trauma Therapist · Portland, OR',
    tags: ['EMDR', 'Complex Trauma', 'Somatic'],
    slug: 'site-elena-marsh',
  },
  {
    color: '#C8F53F',
    bg: '#0A0A0A',
    textColor: '#F5F5F0',
    mutedColor: 'rgba(245,245,240,0.45)',
    label: 'Bold & Modern',
    name: 'Dr. James Okafor, Psy.D.',
    location: 'Anxiety & Performance · New York',
    tags: ['CBT', 'ACT', 'Performance'],
    slug: 'site-james-okafor',
    dark: true,
  },
  {
    color: '#B5706B',
    bg: '#F7EDEC',
    textColor: '#2A2520',
    mutedColor: 'rgba(42,37,32,0.5)',
    label: 'Soft & Calming',
    name: 'Dr. Claire Novak, LMFT',
    location: 'Couples Therapist · Austin, TX',
    tags: ['Gottman', 'EFT', 'Couples'],
    slug: 'site-claire-novak',
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  // Auto-rotate every 3.5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % samples.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const site = samples[active]

  return (
    <section className="hero">
      <div className="hero-blob"></div>
      <div className="hero-blob2"></div>

      {/* LEFT */}
      <div className="hero-left">
        <div className="hero-tag">
          <div className="hero-tag-dot"></div>
          Websites for therapists &amp; counselors
        </div>
        <h1>Your clients need to <em>trust you</em> before they ever reach out.</h1>
        <p className="hero-sub">
          I build warm, professional websites for therapists and mental health professionals
          that turn visitors into clients — without you touching a single line of code,
          buying a domain, or figuring out hosting.
        </p>
        <div className="hero-actions">
          <a className="btn-primary" href="#contact">
            Get a free quote
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a className="btn-ghost" href="#work">See the work →</a>
        </div>
        <div className="hero-trust">
          <div className="trust-item">
            <div className="trust-num">3 wks</div>
            <div className="trust-label">Average delivery</div>
          </div>
          <div className="trust-item">
            <div className="trust-num">100%</div>
            <div className="trust-label">Done for you</div>
          </div>
          <div className="trust-item">
            <div className="trust-num">$0</div>
            <div className="trust-label">Tech stress for you</div>
          </div>
        </div>
      </div>

      {/* RIGHT — live sample preview */}
      <div className="hero-right reveal">
        <div className="floating-badge">🎨 3 design styles available</div>

        <div className="hero-card" style={{padding: 0, overflow: 'hidden'}}>

          {/* Browser chrome */}
          <div className="mock-bar" style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            padding: '0.6rem 1rem',
            background: 'rgba(255,255,255,0.9)',
            borderBottom: '1px solid rgba(0,0,0,0.06)',
          }}>
            <div className="mock-dot" style={{background:'#ff5f57'}}></div>
            <div className="mock-dot" style={{background:'#febc2e'}}></div>
            <div className="mock-dot" style={{background:'#28c840'}}></div>
            <div className="mock-url" style={{flex:1, marginLeft:'0.5rem'}}></div>
          </div>

          {/* Animated preview panel */}
          <div
            className="hero-sample-preview"
            style={{
              background: site.bg,
              padding: '2rem',
              minHeight: '240px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              transition: 'background 0.4s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* subtle grid for James dark theme */}
            {site.dark && (
              <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }} />
            )}

            <div style={{position: 'relative', zIndex: 1}}>
              <div style={{
                fontSize: '0.65rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: site.color,
                marginBottom: '0.5rem',
                fontWeight: 500,
              }}>
                {site.label}
              </div>
              <div style={{
                fontFamily: 'var(--serif)',
                fontSize: '1.25rem',
                fontWeight: 400,
                color: site.textColor,
                lineHeight: 1.25,
                marginBottom: '0.3rem',
              }}>
                {site.name}
              </div>
              <div style={{
                fontSize: '0.78rem',
                color: site.mutedColor,
                marginBottom: '1rem',
              }}>
                {site.location}
              </div>
              <div style={{
                display: 'inline-block',
                background: site.color,
                color: site.dark ? '#0A0A0A' : 'white',
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                padding: '0.4rem 0.9rem',
                borderRadius: site.dark ? '0' : '6px',
                marginBottom: '1rem',
              }}>
                View site →
              </div>
              <div style={{display: 'flex', gap: '0.4rem', flexWrap: 'wrap'}}>
                {site.tags.map(t => (
                  <span key={t} style={{
                    fontSize: '0.62rem',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '50px',
                    background: site.dark ? 'rgba(200,245,63,0.1)' : `${site.color}22`,
                    color: site.dark ? '#C8F53F' : site.color,
                    letterSpacing: '0.04em',
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Dot indicators + label */}
          <div style={{
            background: 'white',
            padding: '0.85rem 1.25rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(0,0,0,0.06)',
          }}>
            <div style={{display: 'flex', gap: '6px', alignItems: 'center'}}>
              {samples.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    width: i === active ? '20px' : '7px',
                    height: '7px',
                    borderRadius: '50px',
                    background: i === active ? samples[i].color : 'rgba(0,0,0,0.15)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
            <a
              href={`/${site.slug}.html`}
              target="_blank"
              style={{
                fontSize: '0.72rem',
                color: site.color,
                textDecoration: 'none',
                fontWeight: 500,
                letterSpacing: '0.04em',
                borderBottom: `1px solid ${site.color}`,
                paddingBottom: '1px',
                transition: 'opacity 0.2s',
              }}
            >
              Open full site →
            </a>
          </div>
        </div>

        {/* Feature checklist below card */}
        <div className="hero-card-features" style={{marginTop: '1rem'}}>
          {[
            'Domain registered & set up for you',
            'Hosting fully managed, always on',
            'Online booking & contact form included',
            'SEO-ready from day one',
          ].map((f) => (
            <div className="hero-feat" key={f}>
              <div className="hero-feat-check">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1.5 5l2.5 2.5 4.5-4" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              {f}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}