import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, TrendingDown } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";

export default function CasesPage(){return <SiteShell>
  <PageHero index="03" kicker="Case studies" title="The strategy matters. The evidence matters more." copy="Selected challenges, honest logic, only verified results." signal="Challenge · Action · Evidence" />
  <section className="section-shell evidence-bar" data-reveal>
    <div><span>Evidence standard</span><strong>Published numbers stay tied to what is verified.</strong></div>
    <p><b>90+</b> is a documented result. <b>71%</b> is shown only as the PPC starting point—not a claimed final outcome.</p>
  </section>
  <section className="section-shell evidence-visual" data-reveal>
    <div className="evidence-visual-copy"><div className="section-kicker">Evidence before claims</div><h2>Every metric needs a clear role.</h2><p>A starting number shows the problem. A verified number shows the result. I never mix the two.</p></div>
    <div className="evidence-visual-media screenshot-card"><Image src="/ppc-performance-chart.png" alt="Real Amazon Advertising console chart showing spend, clicks, sales and ACOS trends from one of Taha's PPC accounts" width={480} height={114} sizes="(max-width: 700px) calc(100vw - 32px), 720px" /></div>
  </section>
  <section className="section-shell cases-stack" data-reveal-group>
    <article className="case-large" data-reveal><div className="case-label">01 · Account health</div><div className="case-large-grid"><div><h2>Turning a backlog of violations into a healthier operating position.</h2><p>Violations don't get fixed by reacting to each one. I mapped the full issue set, ranked it by risk, and worked it in order.</p><div className="case-steps"><span>Audit the issue set</span><span>Prioritize by risk</span><span>Coordinate action</span><span>Monitor status</span></div></div><div className="result-tile"><CheckCircle2 data-icon-pop/><strong><span data-count-to="90">90</span><span>+</span></strong><p>account violations addressed</p><small>Headline result shown on Taha’s professional profile.</small></div></div></article>
    <article className="case-large light" data-reveal><div className="case-label">02 · PPC efficiency</div><div className="case-large-grid"><div><h2>Rebuilding campaign control from a 71% ACOS starting point.</h2><p>Before cutting or shifting a single dollar of spend, I mapped campaign structure, search terms, targeting and bids end to end.</p><div className="case-steps"><span>Search-term analysis</span><span>Campaign restructuring</span><span>Negative targeting</span><span>Bid refinement</span></div></div><div className="result-tile dark"><TrendingDown data-icon-pop/><strong><span data-count-to="71">71</span><span>%</span></strong><p>starting ACOS</p><small>The final verified ACOS and timeframe will be added when approved.</small></div></div></article>
  </section>
  <section className="section-shell cta-panel" data-reveal><div><div className="section-kicker gold">Your account</div><h2>Every good case study starts with an honest diagnosis.</h2></div><Link className="button button-gold" href="/contact">Request a review <ArrowUpRight size={17}/></Link></section>
  </SiteShell>}
