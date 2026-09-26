import Link from "next/link";
import { navigation, site } from "@/lib/site";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", paddingBlock: "2.5rem" }}>
      <div className="container grid-3">
        <div>
          <strong>{site.name}</strong>
          <p className="muted">{site.role}</p>
        </div>
        <nav aria-label="Footer navigation" className="chips">
          {navigation.slice(1).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
        </nav>
        <div>
          <div className="chips">
            <a href={site.social.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={site.social.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <p className="muted">© {new Date().getFullYear()} Amit Yadav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
