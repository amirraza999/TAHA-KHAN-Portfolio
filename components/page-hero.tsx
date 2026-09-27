export function PageHero({ kicker, title, copy, index, signal }: { kicker: string; title: string; copy: string; index: string; signal: string }) {
  return <section className="page-hero section-shell">
    <div className="page-hero-grid">
      <div className="page-hero-copy reveal">
        <div className="section-kicker gold">{kicker}</div>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
      <aside className="page-brief" aria-label={`${kicker} page focus`}>
        <span>{index}</span>
        <div><small>Page focus</small><strong>{signal}</strong></div>
      </aside>
    </div>
  </section>;
}
