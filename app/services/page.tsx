import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BarChart3, Check, Gauge, Layers3, Search, ShieldCheck, Target } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";

const items = [
  { icon:Target, title:"Amazon PPC Management", intro:"Tighter campaign control. Clearer link between spend and growth.", bullets:["Campaign and portfolio audit","Search-term and keyword analysis","Bid, budget and placement refinement","Negative targeting and waste control"] },
  { icon:Layers3, title:"Brand Management", intro:"One connected view across ads, listings and performance.", bullets:["Weekly priority planning","Product-level performance review","Cross-functional coordination","Growth opportunity mapping"] },
  { icon:Search, title:"Listing Optimization", intro:"Sharper content. Clearer for shoppers. Built to convert.", bullets:["Keyword-informed content review","Title and bullet recommendations","Image-sequence guidance","Conversion issue diagnosis"] },
  { icon:ShieldCheck, title:"Account Health Support", intro:"Violations understood, ranked, and resolved.", bullets:["Violation review and triage","Corrective-action coordination","Documentation organization","Preventive monitoring process"] },
  { icon:BarChart3, title:"Growth Strategy", intro:"A roadmap for the next stage of growth.", bullets:["Marketplace and competitor review","Product opportunity assessment","Advertising growth roadmap","Execution priorities"] },
  { icon:Gauge, title:"Performance Audit", intro:"Scattered data, turned into an action plan.", bullets:["PPC efficiency review","Listing and conversion review","Account-health risk scan","Prioritized action plan"] },
];

export default function ServicesPage(){ return <SiteShell>
  <PageHero index="02" kicker="Services" title="Focused support for the parts of Amazon that drive—or restrict—growth." copy="A focused audit, or an ongoing engagement — your call." signal="Audit · Manage · Optimize" />
  <section className="section-shell engagement-map" aria-label="Engagement options" data-reveal-group>
    <article data-reveal><span>Focused diagnostic</span><strong>Performance Audit</strong><p>Scattered signals, turned into a clear action plan.</p><b>Best starting point</b></article>
    <article data-reveal><span>Connected execution</span><strong>Ongoing Management</strong><p>Ads, listings and priorities — run as one system.</p><b>For continuous improvement</b></article>
  </section>
  <section className="section-shell visual-explainer" data-reveal>
    <div className="visual-explainer-media screenshot-card"><Image src="/sales-snapshot-report.png" alt="Real Amazon Business Reports sales snapshot Taha used to diagnose a client's order and revenue trends" width={480} height={167} sizes="(max-width: 700px) calc(100vw - 32px), 720px" /></div>
    <div className="visual-explainer-copy"><div className="section-kicker">How the audit works</div><h2>From scattered signals to a clear order of action.</h2><p>Same report format I used to analyze 3,200+ orders and find the real root cause — not just the symptom.</p><div className="visual-steps"><span>Collect</span><span>Diagnose</span><span>Prioritize</span></div></div>
  </section>
  <section className="section-shell service-list" data-reveal-group>{items.map(({icon:Icon,title,intro,bullets},i)=><article key={title} className="service-detail" data-reveal><div className="service-number">0{i+1}</div><div className="service-icon" data-icon-pop><Icon/></div><div><h2>{title}</h2><p>{intro}</p></div><ul>{bullets.map(x=><li key={x}><Check size={16} data-icon-pop/>{x}</li>)}</ul></article>)}</section>
  <section className="section-shell cta-panel" data-reveal><div><div className="section-kicker gold">Not sure where to start?</div><h2>Start with the highest-impact problem.</h2></div><Link className="button button-gold" href="/contact">Discuss your account <ArrowUpRight size={17}/></Link></section>
  </SiteShell> }
