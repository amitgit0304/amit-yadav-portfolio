import { NextRequest, NextResponse } from "next/server";

const requests = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const recent = (requests.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    return NextResponse.json({ message: "Too many requests. Please try again later." }, { status: 429 });
  }
  requests.set(ip, [...recent, now]);

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
  if (body.website) return NextResponse.json({ message: "Message received." });

  const name = clean(body.name, 100);
  const email = clean(body.email, 254);
  const company = clean(body.company, 150);
  const timeline = clean(body.timeline, 100);
  const budget = clean(body.budget, 100);
  const message = clean(body.message, 5000);
  if (!name || !message || message.length < 20 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ message: "Please provide a valid name, email, and message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return NextResponse.json({ message: "The contact service is not configured yet. Please use the direct email link." }, { status: 503 });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
      to: [to],
      reply_to: email,
      subject: `Portfolio inquiry from ${name}`,
      text: [`Name: ${name}`, `Email: ${email}`, `Company: ${company || "—"}`, `Timeline: ${timeline || "—"}`, `Budget: ${budget || "—"}`, "", message].join("\n"),
    }),
  });
  if (!response.ok) {
    console.error("Contact email provider returned:", response.status);
    return NextResponse.json({ message: "The message could not be sent. Please email me directly." }, { status: 502 });
  }
  return NextResponse.json({ message: "Message sent." });
}

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}
