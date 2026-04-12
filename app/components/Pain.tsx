const points = [
    { icon: '🐌', title: 'Slow, outdated sites drive people away', desc: 'If your site takes more than 3 seconds to load, 53% of visitors leave. That\'s potential clients choosing someone else before reading a single word.' },
    { icon: '📵', title: 'Not mobile-friendly means invisible', desc: 'Over 70% of people searching for a therapist do it on their phone. A site that isn\'t mobile-first loses most of your potential clients immediately.' },
    { icon: '🔍', title: 'Google can\'t find you', desc: 'Most therapist sites are invisible to search engines. Without proper SEO, you\'re relying only on Psychology Today and word of mouth to fill your practice.' },
    { icon: '😬', title: 'A generic template undermines trust', desc: 'Clients choosing a therapist are making a deeply personal decision. A cookie-cutter template site doesn\'t convey the warmth and safety they\'re looking for.' },
]

const stats = [
    { num: '75%', label: 'of people judge credibility by website design' },
    { num: '3s', label: 'before a visitor decides to stay or leave' },
    { num: '68%', label: 'of therapy searches happen on mobile' },
]

export default function Pain() {
    return (
        <section className="pain" id="why">
            <div className="container">
                <div className="section-tag">Why it matters</div>
                <h2 className="section-title" style={{ maxWidth: '580px' }}>Most therapist websites are <em>losing clients</em> every single day.</h2>
                <div className="pain-grid">
                    <div className="pain-points reveal">
                        {points.map((p) => (
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
                            <div className="pain-quote">&ldquo;I had a Psychology Today profile for three years but barely got inquiries from it. Two weeks after my new site went live, I had more consultation requests than I could take on. I wish I&rsquo;d done it sooner.&rdquo;</div>
                            <div className="pain-quote-author">
                                <div className="pain-avatar">✦</div>
                                <div>
                                    <div className="pain-author-name">Licensed Therapist, LCSW</div>
                                    <div className="pain-author-title">Private practice, Pacific Northwest</div>
                                </div>
                            </div>
                        </div>
                        <div className="pain-stat-row">
                            {stats.map((s) => (
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
    )
}