const items = [
  { icon:'🌐', title:'Domain registration — done for you', desc:'I register your domain using your name and email. It\'s 100% yours. A small one-time setup fee covers my time — no markup on the domain itself.' },
  { icon:'🖥️', title:'Hosting — fully managed, always on', desc:'Your site lives on enterprise-grade infrastructure. I monitor uptime, handle renewals, and make sure you\'re never "down." You never log into a hosting panel.' },
  { icon:'🔒', title:'SSL certificate — automatic & free', desc:'That padlock in the browser bar that clients look for before trusting a site. Set up automatically, renewed automatically. You never think about it.' },
  { icon:'📬', title:'Updates & changes on retainer', desc:'Add a new service, update your bio, change your rates. Just email me. On the monthly care plan, minor updates are done within 48 hours.' },
]

const timeline = [
  { icon:'📞', title:'Free discovery call', desc:'30 minutes. Tell me about your practice.', day:'Day 1' },
  { icon:'📋', title:'You receive a clear proposal', desc:'Scope, price, timeline. No jargon.', day:'Day 2–3' },
  { icon:'🌐', title:'I register your domain', desc:'Under your name. You own it completely.', day:'Day 3' },
  { icon:'🎨', title:'Design & build sprint', desc:'Preview link ready within 1 week.', day:'Day 4–18' },
  { icon:'✅', title:'Review, revise, go live', desc:'Your site is live. Analytics running.', day:'Day 19–21' },
  { icon:'🔧', title:'Ongoing support', desc:'Updates, monitoring, care plan available.', day:'Month 2+' },
]

export default function Handled() {
  return (
    <section className="handled">
      <div className="container">
        <div className="handled-inner">
          <div className="reveal">
            <div className="section-tag">The full-service difference</div>
            <div className="handled-title">You focus on your clients. I handle <em>everything else.</em></div>
            <div className="handled-desc">Most developers hand you a site and leave you to figure out domains, hosting, analytics, and updates yourself. Not here.</div>
            <div className="handled-list">
              {items.map((item) => (
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
                {timeline.map((t) => (
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
  )
}