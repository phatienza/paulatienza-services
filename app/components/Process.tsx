const steps = [
  { n:'1', title:'Discovery call', desc:'We talk about your practice, your ideal clients, and what you want your site to feel like. Free, no commitment.', time:'Day 1', active:false },
  { n:'2', title:'Proposal & kickoff', desc:'You get a written proposal. Once approved, I register your domain and set up hosting immediately.', time:'Day 2–3', active:true },
  { n:'3', title:'Design & build', desc:'I design and build your site in a focused sprint. You review a live preview and give feedback.', time:'Day 4–18', active:false },
  { n:'4', title:'Launch & handoff', desc:'Your site goes live. Analytics configured. I walk you through everything and stay available for support.', time:'Day 19–21', active:false },
]

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="section-tag">How it works</div>
        <h2 className="section-title">From first call to <em>fully live</em> in 3 weeks.</h2>
        <div className="process-grid">
          {steps.map((s) => (
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
  )
}