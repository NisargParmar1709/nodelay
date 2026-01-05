"use client";

import React, { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Cog,
  FileText,
  MessageSquare,
  BarChart3,
  GraduationCap,
  Puzzle,
  List,
  Grid,
  Layout,
} from "lucide-react";
import ActionPreview from "../ActionPreview"; // Update this path to the correct location of ActionPreview

type UseCase = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Props = {
  features?: UseCase[];
  initialLayout?: "mosaic" | "split" | "timeline";
  mockupSrc?: string;
};

const defaultFeatures: UseCase[] = [
  { icon: Cog, title: "Automate operations", description: "Turn repetitive tasks into reliable AI-assisted workflows." },
  { icon: FileText, title: "Document intelligence", description: "Extract, summarize, classify, and route documents into your systems." },
  { icon: MessageSquare, title: "Support & internal copilots", description: "Create assistants that answer questions and draft responses using your org context." },
  { icon: BarChart3, title: "Analytics & decision tools", description: "Build dashboards and analysis tools that convert data into decisions." },
  { icon: GraduationCap, title: "Education-focused tools", description: "Create smart assistants and scoring tools for learners and institutes." },
  { icon: Puzzle, title: "Custom intelligent systems", description: "When templates don't fit, we build tailored solutions that match your exact needs." },
];

export default function UseCasesSection({
  features = defaultFeatures,
  initialLayout = "split",
  mockupSrc = "/images/feature-mockup.png",
}: Props) {
  const [layout, setLayout] = useState<Props["initialLayout"]>(initialLayout);
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const listener = () => setReduceMotion(mq.matches);
    try {
      mq.addEventListener?.("change", listener);
    } catch {
      mq.addListener?.(listener);
    }
    return () => {
      try {
        mq.removeEventListener?.("change", listener);
      } catch {
        mq.removeListener?.(listener);
      }
    };
  }, []);

  useEffect(() => {
    if (!ref.current) return;
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
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  function UseCaseCard({ useCase, index }: { useCase: UseCase; index: number }) {
    const Icon = useCase.icon;
    const delay = `${index * 90}ms`;

    return (
      <article
        tabIndex={0}
        aria-label={useCase.title}
        className="group bg-white border border-[#111111] rounded-[12px] p-5 shadow-sm hover:shadow-[4px_4px_0px_#111111] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D9F01B] transition-all duration-500 ease-out"
        style={{
          transform: isVisible && !reduceMotion ? "translateY(0)" : "translateY(10px)",
          opacity: isVisible ? 1 : 0,
          transitionDelay: delay,
        }}
      >
        <div className="flex items-start gap-4">
          <div className="flex-none w-12 h-12 rounded-[8px] bg-[#D9F01B] border border-[#111111] p-2 flex items-center justify-center">
            <Icon className="w-6 h-6 text-[#111111]" strokeWidth={2.5} />
          </div>

          <div>
            <h3 className="text-base font-display font-semibold text-[#111111]">{useCase.title}</h3>
            <p className="mt-1 text-sm text-[#4B5563] leading-[1.5]">{useCase.description}</p>
          </div>
        </div>
      </article>
    );
  }

  return (
    <section ref={ref} className="bg-[#F2F1E9] section-shell section-shell--compact" aria-labelledby="usecases-title">
      <div className="section-shell__inner">
        {/* Header + layout switcher */}
        <div className={`flex flex-col sm:flex-row sm:items-start sm:justify-between mb-10 gap-4`}>
          <div className="flex-1">
            <h2 id="usecases-title" className="heading-section text-[#111111]">
              NoDelay in action
            </h2>
            <p className="mt-3 body-lead text-[#4B5563] max-w-[60ch]">
              Helping you automate, analyze, and build intelligent systems that drive real business value
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3">
            <div className="text-sm text-[#4B5563] hidden sm:block font-sans">Layout</div>
            <div className="inline-flex items-center gap-2 bg-white border border-[#111111] rounded-[8px] p-1 shadow-sm">
              <button
                onClick={() => setLayout("mosaic")}
                aria-pressed={layout === "mosaic"}
                className={`p-2 rounded-[6px] transition-all ${layout === "mosaic" ? "bg-[#D9F01B] border border-[#111111]" : "hover:bg-[#F2F1E9]"}`}
                title="Mosaic"
              >
                <Grid className="w-4 h-4 text-[#111111]" />
              </button>

              <button
                onClick={() => setLayout("split")}
                aria-pressed={layout === "split"}
                className={`p-2 rounded-[6px] transition-all ${layout === "split" ? "bg-[#D9F01B] border border-[#111111]" : "hover:bg-[#F2F1E9]"}`}
                title="Split (visual + list)"
              >
                <Layout className="w-4 h-4 text-[#111111]" />
              </button>

              <button
                onClick={() => setLayout("timeline")}
                aria-pressed={layout === "timeline"}
                className={`p-2 rounded-[6px] transition-all ${layout === "timeline" ? "bg-[#D9F01B] border border-[#111111]" : "hover:bg-[#F2F1E9]"}`}
                title="Timeline"
              >
                <List className="w-4 h-4 text-[#111111]" />
              </button>
            </div>
          </div>
        </div>

        {/* Layout variants */}
        {layout === "mosaic" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <UseCaseCard key={i} useCase={f} index={i} />
            ))}
          </div>
        )}

        {layout === "split" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="space-y-4">
              {features.slice(0, 3).map((f, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start p-4 bg-white border border-[#111111] rounded-[12px] shadow-sm hover:shadow-[4px_4px_0px_#111111] transition-all duration-300"
                  style={{
                    transform: isVisible && !reduceMotion ? "translateY(0)" : "translateY(10px)",
                    opacity: isVisible ? 1 : 0,
                    transitionDelay: `${i * 90}ms`,
                  }}
                >
                  <div className="flex-none w-10 h-10 rounded-[8px] bg-[#D9F01B] border border-[#111111] p-2 flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-5 h-5 text-[#111111]" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-base font-display font-semibold text-[#111111]">{f.title}</h4>
                    <p className="text-sm text-[#4B5563] font-sans font-light">{f.description}</p>
                  </div>
                </div>
              ))}

              <div className="mt-6 space-y-3">
                {features.slice(3).map((f, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-start p-3 bg-white border border-[#111111] rounded-[10px] shadow-sm hover:shadow-[2px_2px_0px_#111111] transition-all duration-300"
                    style={{
                      transform: isVisible && !reduceMotion ? "translateY(0)" : "translateY(10px)",
                      opacity: isVisible ? 1 : 0,
                      transitionDelay: `${(i + 3) * 90}ms`,
                    }}
                  >
                    <div className="flex-none w-8 h-8 rounded-[6px] bg-[#748347] p-1.5 flex items-center justify-center flex-shrink-0">
                      <f.icon className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h5 className="text-sm font-display font-semibold text-[#111111]">{f.title}</h5>
                      <p className="text-xs text-[#4B5563] font-sans font-light">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a href="#contact" className="inline-flex items-center justify-center px-5 py-2.5 bg-[#111111] text-[#D9F01B] font-display font-semibold rounded-[8px] shadow-sm hover:shadow-[2px_2px_0px_#748347] transition-all w-full sm:w-auto">Get a demo</a>
                <button className="text-sm text-[#111111] font-display font-medium underline hover:text-[#748347] transition-colors text-left sm:text-center">See case studies</button>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="rounded-[16px] overflow-hidden shadow-sm max-w-[520px] w-full bg-white border border-[#111111]">
                <ActionPreview />
              </div>

              {/* floating card */}
              <div
                className="absolute -top-8 right-4 sm:right-6 bg-white border border-[#111111] rounded-[12px] p-4 shadow-sm"
                style={{
                  transform: isVisible && !reduceMotion ? "translateY(0)" : "translateY(20px)",
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: "300ms",
                }}
              >
                <div className="text-xs text-[#4B5563] font-sans font-light">Automated Tasks</div>
                <div className="text-lg font-display font-semibold text-[#111111]">2,847 <span className="text-[#748347] text-sm font-medium">+18.3%</span></div>
              </div>
            </div>
          </div>
        )}

        {layout === "timeline" && (
          <div className="space-y-4 max-w-3xl">
            {features.map((f, i) => (
              <div
                key={i}
                className="flex gap-6 items-start p-4 bg-white border border-[#111111] rounded-[12px] shadow-sm hover:shadow-[4px_4px_0px_#111111] transition-all duration-300"
                style={{
                  transform: isVisible && !reduceMotion ? "translateX(0)" : "translateX(-20px)",
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-4 h-4 rounded-full bg-[#D9F01B] border border-[#111111]" />
                  {i !== features.length - 1 && <div className="w-0.5 h-16 bg-[#748347] mt-2" />}
                </div>

                <div className="flex-1 pt-0.5">
                  <h4 className="text-base font-display font-semibold text-[#111111]">{f.title}</h4>
                  <p className="text-sm text-[#4B5563] font-sans font-light mt-1">{f.description}</p>
                </div>

                <div className="hidden sm:block text-sm font-display font-medium text-[#748347] flex-shrink-0">{String(i + 1).padStart(2, '0')}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}