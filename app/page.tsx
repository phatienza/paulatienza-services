'use client'

import { useEffect } from 'react'

export default function ServicesPage() {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function handleSubmit() {
    const success = document.getElementById('form-success')
    const btn = document.getElementById('form-btn')
    if (success) success.style.display = 'block'
    if (btn) btn.style.display = 'none'
  }

  return (
    <>
      {/* NAV */}
      <nav>
        <a className="nav-logo" href="https://paulatienza.dev">paulatienza<span>.</span>dev</a>
        <ul className="nav-links">
          <li><a href="#why">Why this matters</a></li>
          <li><a href="#packages">Pricing</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#contact">Get a quote</a></li>
        </ul>
        <a className="nav-cta" href="#contact">Book a free call</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-blob"></div>
        <div className="hero-blob2"></div>
        <div className="hero-left">
          <div className="hero-tag">
            <div className="hero-tag-dot"></div>
            Websites for therapists &amp; counselors
          </div>
          <h1>Your clients need to <em>trust you</em> before they ever reach out.</h1>
          <p className="hero-sub">I build warm, professional websites for therapists and mental health professionals that turn visitors into clients — without you touching a single line of code, buying a domain, or figuring out hosting.</p>
          <div className="hero-actions">
            <a className="btn-primary" href="#contact">
              Get a free quote
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a className="btn-ghost" href="#packages">See pricing →</a>
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
        <div className="hero-right reveal">
          <div className="floating-badge">🚀 Live in 3 weeks</div>
          <div className="hero-card">
            <div className="hero-card-tag">Sample site — Anxiety &amp; Trauma Therapy</div>
            <div className="hero-card-title">Dr. Sarah M. — Licensed Therapist, NYC</div>
            <div className="hero-card-desc">Custom site built in 18 days. Fully booked within 6 weeks of launch.</div>
            <div className="hero-card-img">
              <div className="mock-browser">
                <div className="mock-bar">
                  <div className="mock-dot" style={{background:'#ff5f57'}}></div>
                  <div className="mock-dot" style={{background:'#febc2e'}}></div>
                  <div className="mock-dot" style={{background:'#28c840'}}></div>
                  <div className="mock-url"></div>
                </div>
                <div className="mock-body">
                  <div className="mock-line" style={{width:'70%',height:'12px',background:'var(--sage-ll)'}}></div>
                  <div className="mock-line short" style={{marginTop:'8px'}}></div>
                  <div className="mock-line med"></div>
                  <div className="mock-line short"></div>
                  <div className="mock-btn"></div>
                </div>
              </div>
            </div>
            <div className="hero-card-features">
              {['Domain registered & set up for you','Hosting fully managed, always on','Online booking & contact form included','SEO-ready from day one'].map((f) => (
                <div className="hero-feat" key={f}>
                  <div className="hero-feat-check">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 4.5-4" stroke="var(--sage)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="pain" id="why">
        <div className="container">
          <div className="section-tag">Why it matters</div>
          <h2 className="section-title" style={{maxWidth:'580px'}}>Most therapist websites are <em>losing clients</em> every single day.</h2>
          <div className="pain-grid">
            <div className="pain-points reveal">
              {[
                { icon:'🐌', title:'Slow, outdated sites drive people away', desc:'If your site takes more than 3 seconds to load, 53% of visitors leave. That\'s potential clients choosing someone else before reading a single word.' },
                { icon:'📵', title:'Not mobile-friendly means invisible', desc:'Over 70% of people searching for a therapist do it on their phone. A site that isn\'t mobile-first loses most of your potential clients immediately.' },
                { icon:'🔍', title:'Google can\'t find you', desc:'Most therapist sites are invisible to search engines. Without proper SEO, you\'re relying only on Psychology Today and word of mouth to fill your practice.' },
                { icon:'😬', title:'A generic template undermines trust', desc:'Clients choosing a therapist are making a deeply personal decision. A cookie-cutter template site doesn\'t convey the warmth and safety they\'re looking for.' },
              ].map((p) => (
                <div className="pain-point" key={p.title}>
                  <div className="pain-icon">{p.icon}</div>
                  <div>
                    <div className="pain-text-title">{p.title}</div>
                    <div className="pain-text-desc">{p.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal reveal-delay-1">
              <div className="pain-right-card">
                <div className="pain-quote">&ldquo;I had a Psychology Today profile for two years. Within a month of launching my new site, I had more inbound enquiries than I&rsquo;d ever had before.&rdquo;</div>
                <div className="pain-quote-author">
                  <div className="pain-avatar">J</div>
                  <div>
                    <div className="pain-author-name">Jessica R., LCSW</div>
                    <div className="pain-author-title">Private practice, Austin TX</div>
                  </div>
                </div>
              </div>
              <div className="pain-stat-row">
                {[{num:'75%',label:'of people judge credibility by website design'},{num:'3s',label:'before a visitor decides to stay or leave'},{num:'68%',label:'of therapy searches happen on mobile'}].map((s) => (
                  <div className="pain-stat" key={s.num}>
                    <div className="pain-stat-num">{s.num}</div>
                    <div className="pain-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="included">
        <div className="container">
          <div className="section-tag">What&apos;s included</div>
          <h2 className="section-title">Everything your practice needs. <em>Nothing you don&apos;t.</em></h2>
          <p className="section-sub">Every project includes the full package — no à la carte surprises, no hidden costs.</p>
          <div className="included-grid">
            {[
              { icon:'🎨', title:'Custom design', desc:'Designed specifically for your practice — your colors, your tone, your personality. Not a template with your name swapped in.' },
              { icon:'📅', title:'Booking integration', desc:'Calendly, Jane App, or SimplePractice — clients can book a consultation directly from your site, 24/7, without calling.' },
              { icon:'🔍', title:'SEO optimization', desc:'Structured so Google can find you for "therapist in [your city]" searches. Includes meta tags, schema markup, and sitemap.' },
              { icon:'🌐', title:'Domain & hosting — fully managed', desc:'I register your domain under your name and handle all hosting. You never need to log into a control panel or talk to a hosting company.' },
              { icon:'📱', title:'Mobile-first & fast', desc:'Built with Next.js and deployed on Vercel — your site loads in under a second on any device. Fast sites rank higher and convert better.' },
              { icon:'📊', title:'Analytics setup', desc:'Google Analytics and Search Console configured from day one so you can see exactly how many people visit your site and where they come from.' },
            ].map((c, i) => (
              <div className={`inc-card reveal${i % 3 === 1 ? ' reveal-delay-1' : i % 3 === 2 ? ' reveal-delay-2' : ''}`} key={c.title}>
                <div className="inc-icon">{c.icon}</div>
                <div className="inc-title">{c.title}</div>
                <div className="inc-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages">
        <div className="container">
          <div className="section-tag">Pricing</div>
          <h2 className="section-title">Simple packages. <em>No surprises.</em></h2>
          <p className="section-sub">Domain registration, hosting setup, and deployment are included in every package. You own everything — I just handle it all for you.</p>
          <div className="packages-grid">
            <div className="pkg reveal">
              <div className="pkg-name">Starter</div>
              <div className="pkg-price">$800</div>
              <div className="pkg-from">starting from · includes domain &amp; hosting setup</div>
              <div className="pkg-divider"></div>
              <ul className="pkg-features">
                {['Up to 5 pages','Mobile-first responsive design','Contact form integration','Google Analytics setup','Domain registered under your name','Hosting fully managed','1 round of revisions','Delivered in ~3 weeks'].map(f => <li key={f}>{f}</li>)}
              </ul>
              <a href="#contact" className="pkg-cta pkg-cta-outline">Get started</a>
            </div>
            <div className="pkg featured reveal reveal-delay-1">
              <div className="pkg-badge">Most popular</div>
              <div className="pkg-name">Professional</div>
              <div className="pkg-price">$1,500</div>
              <div className="pkg-from">starting from · includes domain &amp; hosting setup</div>
              <div className="pkg-divider"></div>
              <ul className="pkg-features">
                {['Up to 10 pages','Custom design tailored to your brand','Booking integration (Calendly, Jane, etc.)','Full SEO setup (meta, schema, sitemap)','Google Analytics + Search Console','Domain registered under your name','Hosting fully managed','2 rounds of revisions','1 month post-launch support'].map(f => <li key={f}>{f}</li>)}
              </ul>
              <a href="#contact" className="pkg-cta pkg-cta-filled">Get started</a>
            </div>
            <div className="pkg reveal reveal-delay-2">
              <div className="pkg-name">Premium</div>
              <div className="pkg-price">$2,500</div>
              <div className="pkg-from">starting from · includes domain &amp; hosting setup</div>
              <div className="pkg-divider"></div>
              <ul className="pkg-features">
                {['Unlimited pages','Bespoke premium design','Blog / resources section','Email list capture integration','Full SEO strategy + copywriting guidance','Booking + payment integration','Domain registered under your name','Hosting fully managed','3 rounds of revisions','3 months post-launch support'].map(f => <li key={f}>{f}</li>)}
              </ul>
              <a href="#contact" className="pkg-cta pkg-cta-outline">Get started</a>
            </div>
          </div>
          <div className="retainer-block reveal">
            <div>
              <div className="retainer-tag">Monthly add-on</div>
              <div className="retainer-title">Website Care Plan</div>
              <div className="retainer-desc">Content updates, performance monitoring, security checks, and priority support. Your site stays fast, secure, and current — without you lifting a finger. Cancel any time.</div>
            </div>
            <div className="retainer-price-block">
              <div className="retainer-price">$150<span style={{fontFamily:'var(--sans)',fontSize:'16px',color:'var(--ink3)'}}>/mo</span></div>
              <div className="retainer-per">per month · cancel anytime</div>
              <a className="retainer-cta" href="#contact">Add to any package →</a>
            </div>
          </div>
        </div>
      </section>

      {/* HANDLED */}
      <section className="handled">
        <div className="container">
          <div className="handled-inner">
            <div className="reveal">
              <div className="section-tag">The full-service difference</div>
              <div className="handled-title">You focus on your clients. I handle <em>everything else.</em></div>
              <div className="handled-desc">Most developers hand you a site and leave you to figure out domains, hosting, analytics, and updates yourself. Not here. From the moment you sign on to long after your site goes live, I handle all of it.</div>
              <div className="handled-list">
                {[
                  { icon:'🌐', title:'Domain registration — done for you', desc:'I register your domain using your name and email. It\'s 100% yours. A small one-time setup fee covers my time — no markup on the domain itself.' },
                  { icon:'🖥️', title:'Hosting — fully managed, always on', desc:'Your site lives on enterprise-grade infrastructure. I monitor uptime, handle renewals, and make sure you\'re never "down." You never log into a hosting panel.' },
                  { icon:'🔒', title:'SSL certificate — automatic & free', desc:'That padlock in the browser bar that clients look for before trusting a site. Set up automatically, renewed automatically. You never think about it.' },
                  { icon:'📬', title:'Updates & changes on retainer', desc:'Add a new service, update your bio, change your rates. Just email me. On the monthly care plan, minor updates are done within 48 hours.' },
                ].map((item) => (
                  <div className="handled-item" key={item.title}>
                    <div className="handled-item-icon">{item.icon}</div>
                    <div>
                      <div className="handled-item-title">{item.title}</div>
                      <div className="handled-item-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <div className="handled-visual">
                <div className="handled-visual-title">What your onboarding looks like</div>
                <div className="timeline">
                  {[
                    { icon:'📞', title:'Free discovery call', desc:'30 minutes. Tell me about your practice.', day:'Day 1' },
                    { icon:'📋', title:'You receive a clear proposal', desc:'Scope, price, timeline. No jargon.', day:'Day 2–3' },
                    { icon:'🌐', title:'I register your domain', desc:'Under your name. You own it completely.', day:'Day 3' },
                    { icon:'🎨', title:'Design & build sprint', desc:'Preview link ready within 1 week.', day:'Day 4–18' },
                    { icon:'✅', title:'Review, revise, go live', desc:'Your site is live. Analytics running.', day:'Day 19–21' },
                    { icon:'🔧', title:'Ongoing support', desc:'Updates, monitoring, care plan available.', day:'Month 2+' },
                  ].map((t) => (
                    <div className="tl-item" key={t.title}>
                      <div className="tl-icon">{t.icon}</div>
                      <div>
                        <div className="tl-content-title">{t.title}</div>
                        <div className="tl-content-desc">{t.desc}</div>
                      </div>
                      <div className="tl-arrow">{t.day}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
        <div className="container">
          <div className="section-tag">How it works</div>
          <h2 className="section-title">From first call to <em>fully live</em> in 3 weeks.</h2>
          <div className="process-grid">
            {[
              { n:'1', title:'Discovery call', desc:'We talk about your practice, your ideal clients, and what you want your site to feel like. Free, no commitment.', time:'Day 1', active:false },
              { n:'2', title:'Proposal & kickoff', desc:'You get a written proposal. Once approved, I register your domain and set up hosting immediately.', time:'Day 2–3', active:true },
              { n:'3', title:'Design & build', desc:'I design and build your site in a focused sprint. You review a live preview and give feedback.', time:'Day 4–18', active:false },
              { n:'4', title:'Launch & handoff', desc:'Your site goes live. Analytics configured. I walk you through everything and stay available for support.', time:'Day 19–21', active:false },
            ].map((s) => (
              <div className={`process-step reveal${s.active ? ' active' : ''}`} key={s.n}>
                <div className="process-num">{s.n}</div>
                <div className="process-step-title">{s.title}</div>
                <div className="process-step-desc">{s.desc}</div>
                <div className="process-time">{s.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-inner">
            <div className="contact-left reveal">
              <div className="section-tag">Get in touch</div>
              <h2 className="section-title">Let&apos;s build your <em>practice&apos;s</em> online home.</h2>
              <p className="section-sub">Fill in the form and I&apos;ll get back to you within 24 hours with a free, no-obligation quote tailored to your practice.</p>
              <div className="contact-detail">
                <div>
                  <div className="detail-label">Email</div>
                  <div className="detail-value"><a href="mailto:atienzapaulhenry@gmail.com">atienzapaulhenry@gmail.com</a></div>
                </div>
                <div>
                  <div className="detail-label">Response time</div>
                  <div className="detail-value">Within 24 hours</div>
                </div>
                <div>
                  <div className="detail-label">Timezone</div>
                  <div className="detail-value">JST (Tokyo) — async-friendly for US clients</div>
                </div>
              </div>
              <div className="guarantee">
                <div className="guarantee-title">My guarantee</div>
                <div className="guarantee-text">If you&apos;re not happy with the first design concept, I&apos;ll revise it completely at no extra charge. I don&apos;t consider the project done until you genuinely love your site.</div>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <div className="contact-form">
                <div className="form-title">Tell me about your practice</div>
                <div className="form-subtitle">No commitment required. You&apos;ll receive a clear, itemized quote within 24 hours.</div>
                <div className="form-fields">
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="name">Your name</label>
                      <input type="text" id="name" placeholder="Dr. Sarah Miller" required />
                    </div>
                    <div className="field">
                      <label htmlFor="credentials">Credentials / license</label>
                      <input type="text" id="credentials" placeholder="LCSW, LPC, PhD..." />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="field">
                      <label htmlFor="email">Email address</label>
                      <input type="email" id="email" placeholder="sarah@mytherapypractice.com" required />
                    </div>
                    <div className="field">
                      <label htmlFor="location">City &amp; state</label>
                      <input type="text" id="location" placeholder="Austin, TX" />
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="package">Package you&apos;re interested in</label>
                    <select id="package">
                      <option value="">Select one</option>
                      <option>Starter — $800</option>
                      <option>Professional — $1,500 (most popular)</option>
                      <option>Premium — $2,500</option>
                      <option>Not sure yet — help me decide</option>
                    </select>
                  </div>
                  <div className="field">
                    <label htmlFor="message">Tell me about your practice &amp; what you need</label>
                    <textarea id="message" placeholder="I'm a licensed therapist specializing in anxiety and trauma. I currently have no website and rely on Psychology Today. I'd love a warm, professional site with an online booking form..."></textarea>
                  </div>
                  <div>
                    <button id="form-btn" type="button" className="form-submit" onClick={handleSubmit}>Send my enquiry →</button>
                    <div className="form-note">No spam, ever. I&apos;ll reply with a personalized quote — not a sales script.</div>
                    <div id="form-success" className="form-success">✓ Message received! I&apos;ll be in touch within 24 hours with your quote.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <span className="footer-left">Paul Henry Atienza</span>
        <a className="footer-back" href="https://paulatienza.dev">← Back to portfolio</a>
        <span className="footer-right">©2026 · Tokyo, Japan</span>
      </footer>
    </>
  )
}