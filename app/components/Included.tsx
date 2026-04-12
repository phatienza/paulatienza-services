const cards = [
  { icon:'🎨', title:'Custom design', desc:'Designed specifically for your practice — your colors, your tone, your personality. Not a template with your name swapped in.' },
  { icon:'📅', title:'Booking integration', desc:'Calendly, Jane App, or SimplePractice — clients can book a consultation directly from your site, 24/7, without calling.' },
  { icon:'🔍', title:'SEO optimization', desc:'Structured so Google can find you for "therapist in [your city]" searches. Includes meta tags, schema markup, and sitemap.' },
  { icon:'🌐', title:'Domain & hosting — fully managed', desc:'I register your domain under your name and handle all hosting. You never need to log into a control panel or talk to a hosting company.' },
  { icon:'📱', title:'Mobile-first & fast', desc:'Built with Next.js and deployed on Vercel — your site loads in under a second on any device. Fast sites rank higher and convert better.' },
  { icon:'📊', title:'Analytics setup', desc:'Google Analytics and Search Console configured from day one so you can see exactly how many people visit your site and where they come from.' },
]

export default function Included() {
  return (
    <section className="included">
      <div className="container">
        <div className="section-tag">What&apos;s included</div>
        <h2 className="section-title">Everything your practice needs. <em>Nothing you don&apos;t.</em></h2>
        <p className="section-sub">Every project includes the full package — no à la carte surprises, no hidden costs.</p>
        <div className="included-grid">
          {cards.map((c, i) => (
            <div className={`inc-card reveal${i % 3 === 1 ? ' reveal-delay-1' : i % 3 === 2 ? ' reveal-delay-2' : ''}`} key={c.title}>
              <div className="inc-icon">{c.icon}</div>
              <div className="inc-title">{c.title}</div>
              <div className="inc-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}