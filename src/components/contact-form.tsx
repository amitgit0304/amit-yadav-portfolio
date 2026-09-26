"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body),
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Unable to send your message.");
      form.reset();
      setStatus("sent");
      setMessage("Thanks—your message has been sent. I’ll respond as soon as possible.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send your message.");
    }
  }

  return (
    <form className="card" onSubmit={submit}>
      <div className="form-grid">
        <Field id="name" label="Name" required />
        <Field id="email" label="Email" type="email" required />
        <Field id="company" label="Company" />
        <Field id="timeline" label="Timeline" placeholder="e.g. This quarter" />
      </div>
      <div className="field" style={{ marginTop: "1rem" }}>
        <label htmlFor="budget">Budget (optional)</label>
        <select className="input" id="budget" name="budget" defaultValue="">
          <option value="">Prefer not to say</option><option>Under $5k</option><option>$5k–$15k</option>
          <option>$15k–$50k</option><option>$50k+</option>
        </select>
      </div>
      <div className="field" style={{ marginTop: "1rem" }}>
        <label htmlFor="message">How can I help?</label>
        <textarea className="input" id="message" name="message" required minLength={20} maxLength={5000} />
      </div>
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <button className="button button-primary" style={{ marginTop: "1rem" }} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p role="status" aria-live="polite" className={status === "error" ? "" : "muted"}>{message}</p>
    </form>
  );
}

function Field({ id, label, type = "text", required = false, placeholder }: {
  id: string; label: string; type?: string; required?: boolean; placeholder?: string;
}) {
  return <div className="field"><label htmlFor={id}>{label}</label><input className="input" id={id} name={id} type={type} required={required} placeholder={placeholder} /></div>;
}
