"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image"; // If not using Next.js replace with <img>
import type { LucideIcon } from "lucide-react";
import DashboardPreview from "../DashboardPreview";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  tone?: "neutral" | "muted" | "accent"; // small visual variant
};

type Props = {
  features?: Feature[];
  mockupSrc?: string; // path to right-side product image / device mockup
  className?: string;
};

export default function FeatureSection({
  features = [],
  mockupSrc = "/images/feature-mockup.png",
  className = "",
}: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Respect user motion preference
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(m.matches);
    const handler = () => setReduceMotion(m.matches);
    try {
      m.addEventListener?.("change", handler);
    } catch {
      m.addListener?.(handler);
    }
    return () => {
      try {
        m.removeEventListener?.("change", handler);
      } catch {
        m.removeListener?.(handler);
      }
    };
  }, []);

  // Intersection observer to trigger entrance animations
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setIsVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="features-heading"
      className={`bg-[#F2F1E9] py-12 lg:py-20 px-6 sm:px-12 lg:px-20 ${className}`}
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* LEFT: content */}
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="bg-[#D9F01B] text-[#111111] text-xs font-medium px-3 py-1 rounded-full border border-[#111111]">
              Our best features
            </span>
            <span className="text-sm text-[#4B5563] font-sans">— built to scale</span>
          </div>

          <h2
            id="features-heading"
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-[#111111] mb-4"
          >
            Unleash the product potential — fast, reliable, and human-friendly.
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#4B5563] font-light max-w-[56ch] mb-8 leading-relaxed">
            Predictable UX, clear demos, and production-ready pipelines so your
            team and clients can understand, trust and evaluate value quickly.
          </p>

          {/* Feature cards (grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              const delay = `${i * 80}ms`;
              return (
                <article
                  key={i}
                  tabIndex={0}
                  role="article"
                  aria-label={f.title}
                  className={`flex gap-4 items-start bg-white border border-[#111111] rounded-[12px] p-4 shadow-sm hover:shadow-[4px_4px_0px_#111111] transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D9F01B]`}
                  style={{
                    transform: isVisible && !reduceMotion ? "translateY(0)" : "translateY(12px)",
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: delay,
                  }}
                >
                  <span
                    className={`flex-none w-11 h-11 rounded-lg flex items-center justify-center border border-[#111111] ${
                      f.tone === "accent"
                        ? "bg-[#D9F01B]"
                        : "bg-[#748347]"
                    }`}
                  >
                    <Icon className="w-5 h-5 text-[#111111]" />
                  </span>

                  <div>
                    <h3 className="font-display text-sm font-semibold text-[#111111]">{f.title}</h3>
                    <p className="font-sans text-sm text-[#4B5563] font-light leading-[1.45]">{f.description}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 bg-[#D9F01B] text-[#111111] border border-[#111111] rounded-none font-display font-medium shadow hover:bg-[#111111] hover:text-white transition-colors"
            >
              Learn more
            </a>

            <button
              type="button"
              className="font-sans text-sm text-[#111111] underline-offset-4 hover:underline font-medium"
              onClick={() => {
                // small analytics hook placeholder
                if (typeof window !== "undefined") window?.console?.log?.("CTA clicked");
              }}
            >
              See demo
            </button>
          </div>
        </div>

        {/* RIGHT: mockup + metric overlays */}
        <div className="relative flex items-center justify-center">
          <div
            className="rounded-[12px] bg-white p-6 shadow-lg border border-[#111111] transform transition-all duration-700"
            style={{
              boxShadow:
                "0 10px 30px rgba(17,17,17,0.1), inset 0 1px 0 rgba(255,255,255,0.6)",
              transform: isVisible && !reduceMotion ? "translateY(0)" : "translateY(18px)",
              opacity: isVisible ? 1 : 0,
            }}
          >
            {/* Soft background blurred corner */}
            <div className="relative w-[380px] h-[300px] rounded-xl overflow-hidden bg-gradient-to-b from-[#F2F1E9] to-[#E5E3DA]">
              {/* Main mockup image - using SVG component */}
              <DashboardPreview className="w-full h-full" />
            </div>
          </div>

          {/* Floating metric cards */}
          <div
            className="absolute -left-6 -top-6 w-[220px] p-3 bg-white rounded-[12px] shadow-md border border-[#111111]"
            style={{
              transform: isVisible && !reduceMotion ? "translateY(0) scale(1)" : "translateY(12px) scale(.98)",
              opacity: isVisible ? 1 : 0,
              transitionDelay: "200ms",
            }}
          >
            <div className="font-sans text-xs text-[#4B5563]">Income analysis</div>
            <div className="flex items-baseline gap-2">
              <div className="font-display text-2xl font-semibold text-[#111111]">$8,527,224</div>
              <div className="font-sans text-sm text-[#748347] font-medium">+3.3%</div>
            </div>
            <div className="font-sans text-[13px] text-[#4B5563] mt-1">Expense increased by $2,172 this month</div>
          </div>

          <div
            className="absolute -right-4 bottom-0 w-[170px] p-3 bg-white rounded-[12px] shadow-sm border border-[#111111]"
            style={{
              transform: isVisible && !reduceMotion ? "translateY(0)" : "translateY(18px)",
              opacity: isVisible ? 1 : 0,
              transitionDelay: "320ms",
            }}
          >
            <div className="font-sans text-xs text-[#4B5563]">Expense summary</div>
            <div className="font-display text-lg font-semibold text-[#111111]">$2,056,123</div>
            <div className="font-sans text-[13px] text-[#4B5563] mt-1">Expense decreased by $1,456 this month</div>
          </div>
        </div>
      </div>
    </section>
  );
}
