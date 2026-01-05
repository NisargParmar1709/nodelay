"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Workflow = {
  id: string;
  icon: string;
  name: string;
  status: "Running" | "Review" | "Queued";
  description: string;
  percent: number;
  eta: string;
};

const WORKFLOWS: Workflow[] = [
  {
    id: "wf-1",
    icon: "📄",
    name: "Document QA pipeline",
    status: "Running",
    description: "Classifying 847 legal contracts",
    percent: 76,
    eta: "02:41",
  },
  {
    id: "wf-2",
    icon: "🤖",
    name: "Support Copilot",
    status: "Review",
    description: "Drafted 28 responses for approval",
    percent: 58,
    eta: "Awaiting feedback",
  },
  {
    id: "wf-3",
    icon: "📊",
    name: "Revenue anomaly guard",
    status: "Running",
    description: "Monitoring 14 live data streams",
    percent: 92,
    eta: "Live",
  },
  {
    id: "wf-4",
    icon: "🧠",
    name: "Sales enablement copilot",
    status: "Queued",
    description: "Prepping product playbook translations",
    percent: 18,
    eta: "Starts in 04m",
  },
];

const SUMMARY = [
  {
    label: "Active workflows",
    value: 8,
    detail: "+2 vs last week",
  },
  {
    label: "Avg. completion",
    value: "84%",
    detail: "Target 80%",
  },
  {
    label: "Time saved",
    value: "316h",
    detail: "This quarter",
  },
];

const STATUS_STYLES: Record<Workflow["status"], string> = {
  Running: "text-[#15803D] bg-[#ECFDF3]",
  Review: "text-[#A16207] bg-[#FFFBEB]",
  Queued: "text-[#2563EB] bg-[#DBEAFE]",
};

function Progress({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 w-full rounded-full bg-[#E5E3DA]">
        <div
          className="h-2 rounded-full bg-[#D9F01B] transition-[width] duration-700 ease-out"
          style={{ width: `${Math.min(100, value)}%` }}
        />
      </div>
      <span className="text-xs font-medium text-[#111111]">{value}%</span>
    </div>
  );
}

export default function ActionPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % WORKFLOWS.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const highlightedId = useMemo(() => WORKFLOWS[activeIndex]?.id, [activeIndex]);

  return (
    <section className="relative isolate flex flex-col gap-6 rounded-[16px] border border-[#111111] bg-white p-6 shadow-[6px_6px_0_#111111]">
      <header className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[#4B5563]">Automation control</p>
            <h3 className="text-lg font-display text-[#111111]">Workflow command center</h3>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#111111]/15 bg-[#F2F1E9] px-3 py-1">
            <span className="relative flex size-2.5">
              <span className="absolute inset-0 rounded-full bg-[#22C55E] opacity-60 animate-ping"></span>
              <span className="relative size-full rounded-full bg-[#22C55E]"></span>
            </span>
            <span className="text-xs font-medium text-[#111111]">All systems live</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {SUMMARY.map((item) => (
            <div key={item.label} className="rounded-[12px] border border-[#111111]/12 bg-white/80 px-4 py-3">
              <p className="text-xs text-[#4B5563]">{item.label}</p>
              <p className="mt-1 text-xl font-display text-[#111111]">{item.value}</p>
              <p className="text-xs text-[#9CA3AF]">{item.detail}</p>
            </div>
          ))}
        </div>
      </header>

      <div className="space-y-4">
        {WORKFLOWS.map((workflow) => {
          const isActive = workflow.id === highlightedId;
          return (
            <article
              key={workflow.id}
              className={cn(
                "flex flex-col gap-3 rounded-[14px] border border-[#111111]/15 bg-white/80 px-4 py-4 transition-all",
                isActive && "bg-[#F2F1E9] shadow-[4px_4px_0_#111111]",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex size-11 items-center justify-center rounded-xl border border-[#111111]/10 bg-[#D9F01B]/60 text-lg">
                    <span>{workflow.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-sm font-display text-[#111111]">{workflow.name}</h4>
                    <p className="text-xs text-[#4B5563]">{workflow.description}</p>
                  </div>
                </div>
                <span className={cn("rounded-full px-3 py-1 text-xs font-medium", STATUS_STYLES[workflow.status])}>
                  {workflow.status}
                </span>
              </div>
              <Progress value={workflow.percent} />
              <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-[#9CA3AF]">
                <span>{workflow.eta}</span>
                <span>NoDelay orchestration</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
