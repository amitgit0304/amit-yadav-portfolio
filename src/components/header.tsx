"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Amit Yadav, home">
          <span aria-hidden="true">AY</span>
          <strong>Amit Yadav</strong>
        </Link>
        <button
          className="menu-button button button-secondary"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="primary-navigation"
          className={`nav ${open ? "nav-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a className="button button-secondary" href={site.resume} download>
            Resume
          </a>
          <a className="button button-primary" href={site.calendly} target="_blank" rel="noreferrer">
            Book a call
          </a>
        </nav>
      </div>
      <style jsx>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid rgba(34, 48, 74, 0.8);
          background: rgba(7, 11, 20, 0.82);
          backdrop-filter: blur(16px);
        }
        .header-inner { min-height: 72px; display: flex; align-items: center; justify-content: space-between; }
        .brand { display: flex; align-items: center; gap: 0.7rem; }
        .brand span {
          display: grid; place-items: center; width: 2.15rem; height: 2.15rem; border-radius: 0.6rem;
          color: #04100e; background: #5eead4; font: 900 0.78rem monospace;
        }
        .nav { display: flex; align-items: center; gap: 1rem; }
        .nav > a:not(.button) { color: #aebbd0; font-size: 0.92rem; }
        .nav > a:hover, .nav > a[aria-current="page"] { color: white; }
        .menu-button { display: none; }
        @media (max-width: 900px) {
          .menu-button { display: inline-flex; }
          .nav {
            display: none; position: absolute; top: 72px; left: 1rem; right: 1rem; padding: 1rem;
            flex-direction: column; align-items: stretch; border: 1px solid #22304a;
            border-radius: 0.9rem; background: #0d1422; box-shadow: 0 20px 40px rgba(0,0,0,.35);
          }
          .nav-open { display: flex; }
          .nav > a:not(.button) { padding: 0.65rem; }
        }
      `}</style>
    </header>
  );
}
