const sites = [
  {
    slug: 'site-elena-marsh',
    color: '#C4904A',
    bg: '#F5ECD8',
    label: 'Warm & Grounded',
    name: 'Dr. Elena Marsh, LCSW',
    location: 'Trauma Therapist · Portland, OR',
    desc: 'Earthy ochres and sage communicate safety and depth. Built for a trauma specialist who wants warmth over clinical sterility.',
    tags: ['EMDR', 'Complex Trauma', 'Somatic'],
  },
  {
    slug: 'site-james-okafor',
    color: '#C8F53F',
    bg: '#0A0A0A',
    label: 'Bold & Modern',
    name: 'Dr. James Okafor, Psy.D.',
    location: 'Anxiety & Performance · New York',
    desc: 'Dark, high-contrast, and completely unlike every other therapist site. Built for a psychologist serving executives and high-achievers.',
    tags: ['CBT', 'ACT', 'Performance'],
    dark: true,
  },
  {
    slug: 'site-claire-novak',
    color: '#B5706B',
    bg: '#F7EDEC',
    label: 'Soft & Calming',
    name: 'Dr. Claire Novak, LMFT',
    location: 'Couples Therapist · Austin, TX',
    desc: 'Dusty rose, sage, and airy spacing create an approachable, gentle identity. Built for a couples counselor emphasising warmth.',
    tags: ['Gottman', 'EFT', 'Couples'],
  },
]

export default function SampleWork() {
  return (
    <section className="sample-work" id="work">
      <div className="container">
        <div className="section-tag">Sample work</div>
        <h2 className="section-title">Three designs. Three voices. <em>All built for therapists.</em></h2>
        <p className="section-sub">Each site below is a fully working sample — built to show the range of styles I can create for your practice.</p>
        <div className="work-grid">
          {sites.map((site) => (
            <div className="work-card" key={site.slug}>
              <div className="work-preview" style={{background: site.bg}}>
                <div className="work-browser-bar">
                  <div className="work-dot" style={{background:'#ff5f57'}}></div>
                  <div className="work-dot" style={{background:'#febc2e'}}></div>
                  <div className="work-dot" style={{background:'#28c840'}}></div>
                  <div className="work-url-bar"></div>
                </div>
                <div className="work-preview-inner">
                  <div className="work-preview-label" style={{color: site.color}}>{site.label}</div>
                  <div className="work-preview-name" style={{color: site.dark ? '#F5F5F0' : '#1E1C18'}}>{site.name}</div>
                  <div className="work-preview-loc" style={{color: site.dark ? 'rgba(245,245,240,0.5)' : 'rgba(30,28,24,0.5)'}}>{site.location}</div>
                  <div className="work-preview-btn" style={{background: site.color, color: site.dark ? '#0A0A0A' : 'white'}}>View site →</div>
                  <div className="work-tags-row">
                    {site.tags.map(t => (
                      <span key={t} className="work-pill" style={{
                        background: site.dark ? 'rgba(200,245,63,0.1)' : `${site.color}18`,
                        color: site.dark ? '#C8F53F' : site.color,
                      }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="work-info">
                <div>
                  <div className="work-info-label" style={{color: site.color}}>{site.label}</div>
                  <div className="work-info-name">{site.name}</div>
                  <div className="work-info-loc">{site.location}</div>
                  <div className="work-info-desc">{site.desc}</div>
                </div>
                <a href={`/${site.slug}.html`} target="_blank" className="work-link" style={{borderColor: site.color, color: site.color}}>
                  View full site →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}