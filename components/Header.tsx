"use client";
import Link from "next/link";
import { useState } from "react";
const links = [["Home", "/"], ["About", "/about"], ["Treatments", "/services"], ["Contact", "/contact"]];
export default function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="nav-wrap"><Link href="/" className="brand" aria-label="Alina Dental Clinic home"><span className="brand-mark">a<span>✳</span></span><span className="brand-name">alina<span>dental clinic</span></span></Link><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? "×" : "☰"}</button><nav className={open ? "nav-links is-open" : "nav-links"}>{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<a className="nav-phone" href="tel:03111248888">0311 124 8888</a><a href="/contact#book" className="button button-dark nav-cta">Book a visit <span>↗</span></a></nav></div></header>;
}
