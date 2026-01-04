"use client";

import React, { useEffect, useRef, useState } from "react";

export default function SolutionsShowcase() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#F2F1E9] py-16 px-6 sm:px-[3.5rem] lg:px-[4.5rem] xl:px-[7rem]"
    >
      <div className="max-w-[88rem] mx-auto">
        {/* Heading */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-olive mb-4">
            What we deliver
          </p>
          <h2 className="text-3xl md:text-5xl font-medium text-[#1A1A1A] font-display leading-tight">
            Practical AI systems with measurable results
          </h2>
          <p className="mt-4 text-lg text-[#4B5563]">
            We ship automation, orchestration, and custom AI products with clear demos
            so value is visible early.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT — Cards */}
          <div className="space-y-6">
            {[
              {
                title: "AI Orchestration",
                subtitle: "Workflow design",
                description:
                  "Design and run reliable multi-step AI workflows across tools and data.",
                accent: "#E9F6EC",
              },
              {
                title: "AI Automation",
                subtitle: "Process efficiency",
                description:
                  "Automate business processes with measurable time savings and consistent outcomes.",
                accent: "#FFFBEA",
              },
              {
                title: "Custom Intelligent Systems",
                subtitle: "Bespoke solutions",
                description:
                  "Build bespoke AI-driven products that solve real problems with stability.",
                accent: "#EEF4F6",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`group bg-white rounded-2xl border border-black/10 p-6 transition-all duration-700 hover:shadow-lg ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: item.accent }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 7h16M4 12h12M4 17h8"
                        stroke="#5F8C6A"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#111111]">
                      {item.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wide text-brand-olive mt-1">
                      {item.subtitle}
                    </p>

                    <p className="mt-3 text-[#4B5563] leading-relaxed">
                      {item.description}
                    </p>

                    {/* Proof */}
                    <div className="mt-4 flex gap-4 text-sm text-[#374151]">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#6EA05F]" />
                        Reliable
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#CBD5E1]" />
                        Demo-first
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F6D85F]" />
                        Production-ready
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="shrink-0 px-4 py-2 text-sm border rounded-md hover:bg-black hover:text-white transition">
                    Get demo →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — Product Preview */}
          <div className="relative">
            {/* Floating stats */}
            <div className="absolute -top-6 right-6 bg-white rounded-xl border px-4 py-3 shadow-sm">
              <p className="text-xs text-gray-500">Monthly throughput</p>
              <p className="text-lg font-semibold">$8.5M</p>
              <p className="text-xs text-green-600">+3.3%</p>
            </div>

            <div className="absolute -bottom-6 left-6 bg-white rounded-xl border px-4 py-3 shadow-sm">
              <p className="text-xs text-gray-500">Avg latency</p>
              <p className="text-sm font-semibold">820ms</p>
            </div>

            {/* SVG Preview */}
            <div className="bg-white rounded-2xl border border-black/10 p-6">
              <svg viewBox="0 0 520 340" className="w-full h-auto">
                <text x="16" y="24" fontSize="14" fill="#6B7280">
                  Product preview
                </text>

                {/* Workflow */}
                <g transform="translate(16,40)">
                  <rect width="140" height="50" rx="10" fill="#F1FAF2" />
                  <text x="16" y="30" fontSize="13" fontWeight="600">
                    Input
                  </text>

                  <rect x="180" width="140" height="50" rx="10" fill="#FFFBEA" />
                  <text x="196" y="30" fontSize="13" fontWeight="600">
                    AI Model
                  </text>

                  <rect x="360" width="140" height="50" rx="10" fill="#EEF4F6" />
                  <text x="376" y="30" fontSize="13" fontWeight="600">
                    Output
                  </text>

                  <path
                    d="M140 25h40M320 25h40"
                    stroke="#94A3B8"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </g>

                {/* Progress bar (with gradient) */}
                <g transform="translate(16,132)">
                  <rect x="0" y="0" width="360" height="12" rx="6" fill="#E5E7EB" />
                  <rect x="0" y="0" width="260" height="12" rx="6" fill="url(#gProgress)" />
                  <rect x="268" y="-8" width="58" height="28" rx="8" fill="#FFFFFF" stroke="#E6E9EC" filter="url(#shadow)" />
                  <text x="297" y="11" fontSize="12" fill="#0F1724" textAnchor="middle" fontWeight="700">72%</text>
                  <text x="372" y="9" fontSize="11" fill="#6B7280">Workflow completion</text>
                </g>

                {/* Sparkline chart area with grid / area fill */}
                <g transform="translate(16,160)">
                  {/* Grid */}
                  <g stroke="#F1F5F9" strokeWidth="1">
                    <line x1="0" y1="0" x2="420" y2="0" />
                    <line x1="0" y1="32" x2="420" y2="32" />
                    <line x1="0" y1="64" x2="420" y2="64" />
                  </g>

                  {/* area under curve */}
                  <path d="M0,96 L40,72 L80,80 L120,60 L160,68 L200,48 L240,56 L280,38 L320,46 L360,30 L420,36 L420,96 Z"
                    fill="url(#gArea)" stroke="none" />

                  {/* line */}
                  <polyline points="0,96 40,72 80,80 120,60 160,68 200,48 240,56 280,38 320,46 360,30 420,36"
                    fill="none" stroke="#6EA05F" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

                  {/* points with highlight */}
                  <g fill="#FFF">
                    <circle cx="360" cy="30" r="5.5" stroke="#F6D85F" strokeWidth="2" />
                    <circle cx="200" cy="48" r="4.5" stroke="#6EA05F" strokeWidth="2" />
                    <circle cx="120" cy="60" r="4.5" stroke="#6EA05F" strokeWidth="2" />
                  </g>

                  {/* axis labels */}
                  <text x="0" y="116" fontSize="11" fill="#94A3B8">Jan</text>
                  <text x="80" y="116" fontSize="11" fill="#94A3B8">Feb</text>
                  <text x="160" y="116" fontSize="11" fill="#94A3B8">Mar</text>
                  <text x="240" y="116" fontSize="11" fill="#94A3B8">Apr</text>
                  <text x="320" y="116" fontSize="11" fill="#94A3B8">May</text>
                  <text x="400" y="116" fontSize="11" fill="#94A3B8">Jun</text>

                  {/* chart annotation */}
                  <rect x="368" y=" -36" width="128" height="48" rx="8" fill="#FFFFFF" stroke="#E6E9EC" filter="url(#shadow)" />
                  <text x="384" y="-16" fontSize="11" fill="#6B7280">Efficiency</text>
                  <text x="384" y="2" fontSize="16" fontWeight="700" fill="#0F1724">$8.5M</text>
                  <text x="482" y="2" fontSize="12" fill="#10B981">+3.3%</text>
                </g>

                {/* legend */}
                <g transform="translate(16,280)" fontFamily="system-ui">
                  <rect x="0" y="0" width="110" height="36" rx="8" fill="#FFFFFF" stroke="#E6E9EC" />
                  <rect x="8" y="8" width="10" height="10" rx="2" fill="#6EA05F" />
                  <text x="24" y="16" fontSize="11" fill="#374151">Throughput</text>

                  <rect x="130" y="0" width="110" height="36" rx="8" fill="#FFFFFF" stroke="#E6E9EC" />
                  <rect x="138" y="8" width="10" height="10" rx="2" fill="#F6D85F" />
                  <text x="154" y="16" fontSize="11" fill="#374151">Peak</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
