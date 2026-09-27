import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BarChart3, CheckCircle2, Gauge, Layers3, ListOrdered, Rocket, Search, SearchCheck, ShieldCheck, Target, TrendingUp, Wrench } from "lucide-react";
import { SiteShell } from "@/components/site-shell";

const services = [
  { icon: Target, title: "Amazon PPC Management", copy: "Structure, bids and budget — built to convert." },
  { icon: Layers3, title: "Brand Management", copy: "Ads, listings and priorities — one system." },
  { icon: Search, title: "Listing Optimization", copy: "Content that gets shoppers to convert." },
  { icon: ShieldCheck, title: "Account Health", copy: "Violations handled before they escalate." },
];

const process = [
  { num: "01", icon: SearchCheck, title: "Diagnose", copy: "PPC, listings, account health — audited." },
  { num: "02", icon: ListOrdered, title: "Prioritize", copy: "Urgent risks first, biggest wins next." },
  { num: "03", icon: Wrench, title: "Optimize", copy: "Campaigns rebuilt. Friction removed." },
  { num: "04", icon: Rocket, title: "Scale", copy: "Double down on what's working." },
];

const expertise = ["Amazon PPC", "Brand Management", "Listing Optimization", "Account Health", "Growth Strategy", "US Marketplace"];

export default function Home() {
  return (
    <SiteShell>
      <section className="hero section-shell">
        <div className="hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span /> Amazon brand growth · US marketplace</div>
            <h1>I turn complex Amazon problems into <em>scalable growth.</em></h1>
            <p className="hero-lede">I take Amazon accounts from crisis to profitable — PPC, listings and account health working as one system instead of three separate fires.</p>
            <div className="hero-actions">
              <Link className="button button-gold" href="/contact">Discuss your brand <ArrowUpRight size={17} /></Link>
              <Link className="button button-ghost" href="/case-studies">View case studies</Link>
            </div>
            <div className="hero-note"><span className="status-dot" /> Available for selected Amazon growth projects</div>
          </div>

          <div className="hero-visual reveal reveal-delay">
            <div className="hero-portrait">
              <Image
                src="/taha-khan-hero.png"
                alt="Taha Khan, Amazon Brand Manager and PPC Specialist"
                width={1086}
                height={1448}
                sizes="(max-width: 700px) 82vw, (max-width: 980px) 440px, 520px"
                priority
              />
            </div>
            <div className="metric-card metric-acos">
              <span>ACOS starting point</span><strong>71%</strong><small><TrendingUp size={14} data-icon-pop /> Optimization led</small>
            </div>
            <div className="metric-card metric-health">
              <span>Account health</span><strong>90+</strong><small><CheckCircle2 size={14} data-icon-pop /> Violations addressed</small>
            </div>
          </div>
        </div>
        <div className="hero-proof-rail" aria-label="Verified experience highlights">
          <div><span>01 · PPC signal</span><strong>71% ACOS</strong><small>Documented starting point</small></div>
          <div><span>02 · Recovery work</span><strong>90+ issues</strong><small>Account violations addressed</small></div>
          <div><span>03 · Operating scope</span><strong>Connected</strong><small>PPC · Listings · Account health</small></div>
        </div>
        <div className="ticker" aria-label="Areas of expertise">
          <div className="ticker-track">
            {[0, 1].map((group) => (
              <div className="ticker-group" key={group} aria-hidden={group === 1}>
                {expertise.map((item) => <span key={item}>{item}<i aria-hidden="true" /></span>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell section-pad intro-grid">
        <div data-reveal><div className="section-kicker">The growth system</div><h2>It's rarely just one problem.</h2></div>
        <div data-reveal><p className="large-copy">I fix what's underneath the product — before small mistakes compound.</p><Link href="/services" className="text-link">Explore the full service mix <ArrowUpRight size={16} /></Link></div>
      </section>

      <figure className="section-shell editorial-visual editorial-visual-home screenshot-card" data-reveal>
        <Image src="/seller-central-inventory.png" alt="Real Amazon Seller Central 'Manage All Inventory' screen from a 1,300+ SKU catalog Taha manages" width={480} height={229} sizes="(max-width: 700px) calc(100vw - 32px), 1180px" />
        <figcaption className="visual-caption"><span>Connected growth system</span><strong>PPC, listing quality and account health move together.</strong></figcaption>
      </figure>

      <section className="section-shell services-grid" data-reveal-group>
        {services.map(({ icon: Icon, title, copy }, i) => (
          <article className="service-card" key={title} data-reveal><div className="service-top"><span>0{i + 1}</span><span className="icon-badge" data-icon-pop><Icon size={20} /></span></div><h3>{title}</h3><p>{copy}</p><Link href="/services">What’s included <ArrowUpRight size={15} /></Link></article>
        ))}
      </section>

      <section className="pull-quote-band" data-reveal>
        <div className="section-shell pull-quote">
          <blockquote>This business rewards problem solvers, not guessers.</blockquote>
          <cite>— Taha, on what actually moves an Amazon account forward</cite>
        </div>
      </section>

      <section className="case-band">
        <div className="section-shell case-grid">
          <div className="case-copy" data-reveal><div className="section-kicker gold">Selected result</div><h2>From violations to a healthier account.</h2><p>Structured triage, clear priorities, coordinated action — 90+ violations resolved.</p><Link className="button button-light" href="/case-studies">Read the case study <ArrowUpRight size={17} /></Link></div>
          <div className="performance-panel" aria-label="Account health result summary" data-reveal>
            <div className="panel-header"><span>Account recovery</span><small>Verified headline result</small></div><div className="big-stat"><span data-count-to="90">90</span><span>+</span></div><p>account violations addressed</p><div className="health-bar"><span data-fill="90" /></div>
            <div className="panel-row"><span><ShieldCheck size={17} data-icon-pop /> Issue triage</span><b>Structured</b></div><div className="panel-row"><span><BarChart3 size={17} data-icon-pop /> Corrective actions</span><b>Prioritized</b></div><div className="panel-row"><span><Gauge size={17} data-icon-pop /> Monitoring</span><b>Ongoing</b></div>
          </div>
        </div>
      </section>

      <section className="section-shell section-pad"><div className="section-heading-row" data-reveal><div><div className="section-kicker">How I work</div><h2>A clear path from audit to growth.</h2></div><p>Less guesswork. Better priorities. Every action connected to a reason.</p></div><div className="process-grid" data-reveal-group>{process.map(({ num, icon: Icon, title, copy }) => <article key={num} data-reveal><div className="process-top"><span>{num}</span><span className="icon-badge" data-icon-pop><Icon size={20} /></span></div><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
      <section className="section-shell cta-panel" data-reveal><div><div className="section-kicker gold">Ready when you are</div><h2>What's holding your brand back?</h2></div><Link className="button button-gold" href="/contact">Start a conversation <ArrowUpRight size={17} /></Link></section>
    </SiteShell>
  );
}
