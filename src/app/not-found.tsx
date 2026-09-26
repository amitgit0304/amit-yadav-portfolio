import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero container">
      <p className="eyebrow">404</p>
      <h1 className="title">This page is outside the pipeline.</h1>
      <p className="lede">The resource may have moved or the address may be incorrect.</p>
      <div className="actions"><Link className="button button-primary" href="/">Return home</Link><Link className="button button-secondary" href="/projects">View projects</Link></div>
    </section>
  );
}
