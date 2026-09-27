import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BarChart3, BrainCircuit, ListOrdered, MessageSquareText, PlayCircle, SearchCheck, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";

const experience = [
  { role: "Brand Manager & PPC Specialist", company: "Amzoner Consulting", dates: "Apr 2026 – Present", tags: ["PPC strategy", "Product launches", "Account health"] },
  { role: "Account Manager", company: "TAG", dates: "Aug 2025 – Apr 2026", tags: ["Account management", "Business analysis"] },
  { role: "Amazon Brand Manager", company: "Stomach Bloom", dates: "Jan 2024 – Aug 2025", tags: ["Supplements", "PPC", "SEO", "A+ Content"] },
  { role: "Amazon Brand Manager", company: "Akshar Ayurved", dates: "Jan 2024 – Jul 2025", tags: ["Supplements", "PPC", "SEO"] },
];

export default function AboutPage() {
  const values = [
    { icon: BarChart3, title: "Evidence over assumptions", copy: "Signals decide what gets attention." },
    { icon: BrainCircuit, title: "Strategy that can be executed", copy: "Clear enough for a team to run with." },
    { icon: ShieldCheck, title: "Healthy growth", copy: "Growth that doesn't risk the account." },
    { icon: MessageSquareText, title: "Direct communication", copy: "What changed, why, and what's next." },
  ];
  const operator = [
    { icon: SearchCheck, step: "01 / Read", title: "Read the account", copy: "Campaigns, listings, account health — reviewed together." },
    { icon: ListOrdered, step: "02 / Sequence", title: "Set the order", copy: "Risks ranked. Opportunities prioritized." },
    { icon: PlayCircle, step: "03 / Execute", title: "Run the work", copy: "Priorities turned into action, and monitored." },
  ];
  return <SiteShell>
    <PageHero index="01" kicker="About Taha" title="Performance thinking with an operator’s perspective." copy="Advertising, listings, account health — one system, not three separate jobs." signal="PPC · Listings · Account health" />
    <section className="section-shell about-story">
      <div className="about-portrait" data-reveal><Image src="/taha-khan.png" alt="Taha Khan" width={820} height={820} /></div>
      <div className="story-copy" data-reveal><div className="section-kicker">Profile</div><h2>Amazon Brand Manager & PPC Specialist</h2><p>I take Amazon accounts from crisis to profitable — 90+ violations resolved, ACoS cut from a critical 71%. Full-cycle: PPC, listings, A+ Content, account health.</p><div className="inline-facts"><span><strong>Karachi</strong>Pakistan</span><span><strong>US</strong>Marketplace focus</span><span><strong><b data-count-to="90" style={{ fontWeight: "inherit" }}>90</b>+</strong>Violations addressed</span></div></div>
    </section>
    <section className="section-shell section-pad">
      <div className="section-heading-row" data-reveal><div><div className="section-kicker">Experience</div><h2>Where this comes from.</h2></div><p>Real accounts, real employers — from Karachi to US-based Amazon brands.</p></div>
      <div className="career-grid" data-reveal-group>
        {experience.map(({ role, company, dates, tags }) => (
          <article className="career-card" key={role + company} data-reveal>
            <span className="career-dates">{dates}</span>
            <strong>{company}</strong>
            <p>{role}</p>
            <div className="career-tags">{tags.map((t) => <span key={t}>{t}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
    <section className="operator-band">
      <div className="section-shell">
        <div className="section-heading-row" data-reveal><div><div className="section-kicker gold">The operator lens</div><h2>Three layers. One decision system.</h2></div><p>Performance improves when diagnosis, sequencing and execution stay connected.</p></div>
        <div className="operator-grid" data-reveal-group>
          {operator.map(({ icon: Icon, step, title, copy }) => (
            <article key={step} data-reveal><div className="process-top"><span>{step}</span><span className="icon-badge" data-icon-pop><Icon size={20} /></span></div><h3>{title}</h3><p>{copy}</p></article>
          ))}
        </div>
      </div>
    </section>
    <section className="section-shell section-pad"><div className="section-heading-row" data-reveal><div><div className="section-kicker">Working principles</div><h2>What guides the work.</h2></div></div><div className="value-grid" data-reveal-group>{values.map(({ icon: Icon, title, copy }) => <article key={title} data-reveal><span className="icon-badge" data-icon-pop><Icon size={20} /></span><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="section-shell cta-panel" data-reveal><div><div className="section-kicker gold">Your next step</div><h2>Bring the account. We’ll find the priority.</h2></div><Link className="button button-gold" href="/contact">Start a conversation <ArrowUpRight size={17}/></Link></section>
  </SiteShell>;
}
