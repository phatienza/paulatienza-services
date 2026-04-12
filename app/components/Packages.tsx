const packages = [
  {
    name: 'Starter', price: '$1,200', featured: false,
    features: ['Up to 5 pages','Mobile-first responsive design','Contact form integration','Google Analytics setup','Domain registered under your name','Hosting fully managed','1 round of revisions','Delivered in ~3 weeks'],
  },
  {
    name: 'Professional', price: '$1,950', featured: true,
    features: ['Up to 10 pages','Custom design tailored to your brand','Booking integration (Calendly, Jane, etc.)','Full SEO setup (meta, schema, sitemap)','Google Analytics + Search Console','Domain registered under your name','Hosting fully managed','2 rounds of revisions','1 month post-launch support'],
  },
  {
    name: 'Premium', price: '$2,800', featured: false,
    features: ['Unlimited pages','Bespoke premium design','Blog / resources section','Email list capture integration','Full SEO strategy + copywriting guidance','Booking + payment integration','Domain registered under your name','Hosting fully managed','3 rounds of revisions','3 months post-launch support'],
  },
]

export default function Packages() {
  return (
    <section id="packages">
      <div className="container">
        <div className="section-tag">Pricing</div>
        <h2 className="section-title">Simple packages. <em>No surprises.</em></h2>
        <p className="section-sub">Domain registration, hosting setup, and deployment are included in every package. You own everything — I just handle it all for you.</p>
        <div className="packages-grid">
          {packages.map((pkg, i) => (
            <div className={`pkg reveal${pkg.featured ? ' featured' : ''}${i === 1 ? ' reveal-delay-1' : i === 2 ? ' reveal-delay-2' : ''}`} key={pkg.name}>
              {pkg.featured && <div className="pkg-badge">Most popular</div>}
              <div className="pkg-name">{pkg.name}</div>
              <div className="pkg-price">{pkg.price}</div>
              <div className="pkg-from">starting from · includes domain &amp; hosting setup</div>
              <div className="pkg-divider"></div>
              <ul className="pkg-features">
                {pkg.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <a href="#contact" className={`pkg-cta ${pkg.featured ? 'pkg-cta-filled' : 'pkg-cta-outline'}`}>Get started</a>
            </div>
          ))}
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
  )
}