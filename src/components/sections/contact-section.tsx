"use client";

import React, { useState } from 'react';

type FormStatus = "idle" | "submitting" | "success" | "error";

type FormFields = {
  name: string;
  email: string;
  company: string;
  whatToBuild: string;
  timeline: string;
  notes: string;
  botField: string;
};

const initialFormData: FormFields = {
  name: '',
  email: '',
  company: '',
  whatToBuild: '',
  timeline: '',
  notes: '',
  botField: '',
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormFields>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const { botField, ...fields } = formData;
    const payload = new URLSearchParams({
      "form-name": "contact",
      ...fields,
    });
    payload.set("bot-field", botField);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const field = (name === "bot-field" ? "botField" : name) as keyof FormFields;

    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="bg-white section-shell section-shell--compact">
      <div className="section-shell__inner">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr]">
          <aside className="space-y-6 rounded-[16px] border border-[#111111] bg-[#F2F1E9] px-6 py-8 shadow-[6px_6px_0_#111111]">
            <h2 className="heading-section text-left text-[#111111]">Book a demo</h2>
            <p className="body-lead text-[#4B5563]">
              Tell us what you want to build - NoDelay replies within 24 hours with a demo plan, integration notes, and next steps.
            </p>
            <ul className="space-y-3 text-sm text-[#4B5563]">
              <li className="flex items-start gap-2">
                <span className="mt-1 size-2 rounded-full bg-[#D9F01B]"></span>
                <span>Discovery call + scoped milestones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 size-2 rounded-full bg-[#D9F01B]"></span>
                <span>Hands-on demo or working prototype</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 size-2 rounded-full bg-[#D9F01B]"></span>
                <span>Security + delivery readiness checklist</span>
              </li>
            </ul>
            <div className="rounded-[12px] border border-[#111111]/15 bg-white px-5 py-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[#748347]">Prefer email?</p>
              <a href="mailto:nodelay.tech@gmail.com" className="mt-1 block text-base font-display text-[#111111] underline">
                nodelay.tech@gmail.com
              </a>
            </div>
          </aside>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="hidden" aria-hidden="true">
              <label>
                Don't fill this out:
                <input
                  name="bot-field"
                  value={formData.botField}
                  onChange={handleChange}
                />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block font-sans text-[14px] font-medium text-[#111111] mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-[10px] border border-[#111111] bg-white px-4 py-3 font-sans text-[15px] focus:outline-none focus:ring-2 focus:ring-[#D9F01B] focus:ring-offset-2 transition-all"
                  placeholder="Your name"
                  autoComplete="name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-sans text-[14px] font-medium text-[#111111] mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-[10px] border border-[#111111] bg-white px-4 py-3 font-sans text-[15px] focus:outline-none focus:ring-2 focus:ring-[#D9F01B] focus:ring-offset-2 transition-all"
                  placeholder="you@company.com"
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block font-sans text-[14px] font-medium text-[#111111] mb-2">
                Company / Project
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full rounded-[10px] border border-[#111111] bg-white px-4 py-3 font-sans text-[15px] focus:outline-none focus:ring-2 focus:ring-[#D9F01B] focus:ring-offset-2 transition-all"
                placeholder="Your company or project name"
                autoComplete="organization"
              />
            </div>

            <div>
              <label htmlFor="whatToBuild" className="block font-sans text-[14px] font-medium text-[#111111] mb-2">
                What you want to build <span className="text-red-500">*</span>
              </label>
              <textarea
                id="whatToBuild"
                name="whatToBuild"
                required
                rows={4}
                value={formData.whatToBuild}
                onChange={handleChange}
                className="w-full rounded-[12px] border border-[#111111] bg-white px-4 py-3 font-sans text-[15px] leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#D9F01B] focus:ring-offset-2 transition-all"
                placeholder="Describe what you're looking to build or automate..."
              />
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="timeline" className="block font-sans text-[14px] font-medium text-[#111111] mb-2">
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full rounded-[10px] border border-[#111111] bg-white px-4 py-3 font-sans text-[15px] focus:outline-none focus:ring-2 focus:ring-[#D9F01B] focus:ring-offset-2 transition-all"
                >
                  <option value="">Select a timeline</option>
                  <option value="1-2 weeks">1-2 weeks</option>
                  <option value="3-6 weeks">3-6 weeks</option>
                  <option value="6+ weeks">6+ weeks</option>
                </select>
              </div>

              <div>
                <label htmlFor="notes" className="block font-sans text-[14px] font-medium text-[#111111] mb-2">
                  Additional notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full rounded-[12px] border border-[#111111] bg-white px-4 py-3 font-sans text-[15px] leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#D9F01B] focus:ring-offset-2 transition-all"
                  placeholder="Any other context or links..."
                />
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full md:w-auto flex items-center justify-center gap-2 rounded-[10px] border border-[#111111] bg-[#D9F01B] px-8 py-4 font-display text-[16px] text-[#111111] transition-colors duration-200 hover:bg-[#111111] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Submitting..." : "Submit request"}
              </button>
              <div aria-live="polite" className="text-sm text-[#4B5563]">
                {status === "success" && "Thanks! We received your request and will respond shortly."}
                {status === "error" && "Something went wrong. Please retry or email us directly."}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
