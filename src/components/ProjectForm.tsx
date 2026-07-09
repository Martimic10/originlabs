"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, type FormEvent } from "react";
import type { ProjectPlan } from "@/lib/project-inquiry";
import { CAL_COM_URL } from "@/lib/site";

const planOptions: { value: ProjectPlan; label: string }[] = [
  { value: "landing", label: "Landing Page — starting at $995" },
  { value: "business", label: "Business Website — starting at $2,000" },
  { value: "ai", label: "AI Applications — starting at $5,000" },
  { value: "native", label: "Native Apps — starting at $3,000" },
  { value: "not-sure", label: "Not sure yet" },
];

const timelineOptions = [
  "2–3 weeks",
  "4–6 weeks",
  "Flexible",
  "Not sure yet",
];

const planTimelineMap: Record<ProjectPlan, string> = {
  landing: "2–3 weeks",
  business: "2–3 weeks",
  ai: "4–6 weeks",
  native: "4–6 weeks",
  "not-sure": "",
};

function defaultTimelineForPlan(plan: ProjectPlan): string {
  return planTimelineMap[plan];
}

const budgetOptions = [
  "Under $5,000",
  "$5,000 – $10,000",
  "$10,000 – $25,000",
  "$25,000+",
  "Not sure yet",
];

const inputClassName =
  "w-full rounded-2xl border border-white/[0.1] bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-white/25 focus:bg-white/[0.06]";

function normalizePlan(value: string | null): ProjectPlan {
  if (
    value === "landing" ||
    value === "business" ||
    value === "ai" ||
    value === "native"
  ) {
    return value;
  }
  return "not-sure";
}

export default function ProjectForm() {
  const searchParams = useSearchParams();
  const [plan, setPlan] = useState<ProjectPlan>(
    normalizePlan(searchParams.get("plan")),
  );
  const [timeline, setTimeline] = useState(() =>
    defaultTimelineForPlan(normalizePlan(searchParams.get("plan"))),
  );
  const [budget, setBudget] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      plan,
      timeline,
      budget,
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/project-inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto max-w-lg rounded-2xl border border-white/[0.1] bg-white/[0.03] p-8 text-center sm:rounded-3xl sm:p-10"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-400">
          <svg
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>
        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
          Message sent
        </h2>
        <p className="mt-3 text-base leading-relaxed text-zinc-400">
          Thanks for reaching out. We&apos;ll review your project details and
          get back to you within 1–2 business days.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href={CAL_COM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200"
          >
            Book a Call
            <span aria-hidden>↗</span>
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto max-w-2xl"
    >
      <div className="mb-10 text-center">
        <p className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
          Start a Project
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Tell us about your project
        </h1>
        <p className="mt-4 text-base text-zinc-400 sm:text-lg">
          Share a few details and we&apos;ll follow up with next steps. No
          commitment required.
        </p>
        <a
          href={CAL_COM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:border-white/30 hover:bg-white/5"
        >
          Book a Call
          <span aria-hidden>↗</span>
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-6 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 sm:rounded-3xl sm:p-8"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm text-zinc-400">
              Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={inputClassName}
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm text-zinc-400">
              Email *
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className={inputClassName}
              placeholder="you@company.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm text-zinc-400">
            Company
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClassName}
            placeholder="Optional"
          />
        </div>

        <div>
          <label htmlFor="plan" className="mb-2 block text-sm text-zinc-400">
            Project type *
          </label>
          <select
            id="plan"
            name="plan"
            required
            value={plan}
            onChange={(event) => {
              const nextPlan = event.target.value as ProjectPlan;
              setPlan(nextPlan);
              setTimeline(defaultTimelineForPlan(nextPlan));
            }}
            className={`${inputClassName} appearance-none`}
          >
            {planOptions.map((option) => (
              <option key={option.value} value={option.value} className="bg-[#0A0A0A]">
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="timeline" className="mb-2 block text-sm text-zinc-400">
              Timeline
            </label>
            <select
              id="timeline"
              name="timeline"
              value={timeline}
              onChange={(event) => setTimeline(event.target.value)}
              className={`${inputClassName} appearance-none`}
            >
              <option value="" className="bg-[#0A0A0A]">
                Select a timeline
              </option>
              {timelineOptions.map((option) => (
                <option key={option} value={option} className="bg-[#0A0A0A]">
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="budget" className="mb-2 block text-sm text-zinc-400">
              Budget
            </label>
            <select
              id="budget"
              name="budget"
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
              className={`${inputClassName} appearance-none`}
            >
              <option value="" className="bg-[#0A0A0A]">
                Select a range
              </option>
              {budgetOptions.map((option) => (
                <option key={option} value={option} className="bg-[#0A0A0A]">
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm text-zinc-400">
            Project details *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className={`${inputClassName} resize-y min-h-[140px]`}
            placeholder="What are you building? Who is it for? Any must-have features?"
          />
        </div>

        {error && (
          <p className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center rounded-2xl bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Submit Project Inquiry"}
        </button>
      </form>
    </motion.div>
  );
}
