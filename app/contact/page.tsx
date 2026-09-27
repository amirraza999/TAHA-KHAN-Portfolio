import { ArrowUpRight, Link2, MapPin } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteShell } from "@/components/site-shell";

export default function ContactPage(){return <SiteShell>
  <PageHero index="04" kicker="Contact" title="Let’s identify the next priority for your Amazon brand." copy="Share the challenge, the marketplace, what you've tried." signal="Marketplace · Problem · Context" />
  <section className="section-shell fit-strip" aria-label="Project fit" data-reveal>
    <span>Useful starting points</span><div><b>PPC efficiency</b><b>Listing clarity</b><b>Account health</b><b>Connected growth</b></div>
  </section>
  <section className="section-shell contact-grid" data-reveal-group>
    <div className="contact-card" data-reveal><div className="section-kicker">Direct contact</div><h2>Start the conversation on LinkedIn.</h2><p>Send a short note: your main challenge and your marketplace.</p><a className="button button-gold" href="https://www.linkedin.com/in/taha-khan-831804398/" target="_blank" rel="noreferrer"><Link2 size={17}/> Connect on LinkedIn <ArrowUpRight size={17}/></a><div className="contact-meta"><span><MapPin size={17} data-icon-pop/> Karachi, Pakistan</span><span><ArrowUpRight size={17}/> US marketplace focus</span></div></div>
    <div className="prep-card" data-reveal><span>Before you reach out</span><h2>A useful first message includes:</h2><ol><li><b>01</b><div><strong>Your marketplace</strong><p>Where the brand sells.</p></div></li><li><b>02</b><div><strong>The main problem</strong><p>PPC, listings, account health or growth.</p></div></li><li><b>03</b><div><strong>Useful context</strong><p>Current ACOS or account status — no credentials.</p></div></li></ol><p className="privacy-note">Never send passwords, one-time codes or private Seller Central access details.</p></div>
  </section>
  </SiteShell>}
