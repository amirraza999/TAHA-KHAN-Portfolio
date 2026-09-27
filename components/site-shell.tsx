"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Link2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [["/", "Home"], ["/about", "About"], ["/services", "Services"], ["/case-studies", "Case Studies"], ["/contact", "Contact"]];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.removeEventListener("keydown", closeOnEscape); document.body.style.overflow = ""; };
  }, [open]);
  return <>
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Taha Khan home"><span>TK</span><div><strong>Taha Khan</strong><small>Amazon growth specialist</small></div></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{links.map(([href, label]) => <Link key={href} aria-current={pathname === href ? "page" : undefined} className={pathname === href ? "active" : ""} href={href}>{label}</Link>)}</nav>
      <div className="header-actions">
        <ThemeToggle />
        <Link className="nav-cta" href="/contact">Let’s talk <ArrowUpRight size={16} /></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
    {open && <><button className="menu-scrim" aria-label="Close menu" onClick={() => setOpen(false)} /><nav className="mobile-nav" aria-label="Mobile navigation">{links.map(([href, label]) => <Link key={href} aria-current={pathname === href ? "page" : undefined} className={pathname === href ? "active" : ""} href={href}>{label}<ArrowUpRight size={18} /></Link>)}</nav></>}
    <main id="main-content">{children}</main>
    <footer className="site-footer"><div className="footer-main section-shell"><div><div className="brand footer-brand"><span>TK</span><div><strong>Taha Khan</strong><small>Amazon brand growth</small></div></div><p>Helping Amazon brands improve advertising efficiency, account health and marketplace execution.</p></div><div className="footer-links"><strong>Navigate</strong>{links.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}</div><div className="footer-links"><strong>Connect</strong><a href="https://www.linkedin.com/in/taha-khan-831804398/" target="_blank" rel="noreferrer"><Link2 size={15} /> LinkedIn</a><Link href="/contact">Project enquiry</Link></div></div><div className="footer-bottom section-shell"><span>© {new Date().getFullYear()} Taha Khan</span><span>Karachi · Working across the US marketplace</span></div></footer>
  </>;
}
