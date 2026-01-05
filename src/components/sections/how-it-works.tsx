"use client";

import React, { useEffect, useRef, useState } from 'react';
import { User, TrendingUp, BarChart3, Settings, Code2, Globe, AlertCircle, FolderOpen, FileText, Database, Cpu, GitBranch, CheckCircle, Cloud, Activity } from 'lucide-react';

const HowItWorks = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const entryCards = [
    { icon: Globe, label: "Discovered us", tooltip: "Quick intro + goals" },
    { icon: AlertCircle, label: "Shared a problem", tooltip: "Pain points + constraints" },
    { icon: FolderOpen, label: "Existing project", tooltip: "Current stack + gaps" },
  ];

  const personas = [
    { icon: User, label: "Founders / Owners" },
    { icon: Settings, label: "Operations" },
    { icon: TrendingUp, label: "Sales & Support" },
    { icon: BarChart3, label: "Analysts" },
    { icon: Code2, label: "Product / Engineering" },
  ];

  const stages = [
    { 
      num: "1", 
      title: "Research & Scoping", 
      micro: "Understand process + success metrics",
      badges: [{ icon: FileText, label: "Docs" }, { icon: FileText, label: "Notion" }, { icon: FileText, label: "Sheets" }]
    },
    { 
      num: "2", 
      title: "Architecture & Plan", 
      micro: "Decide approach + workflow design",
      badges: [{ icon: Cpu, label: "API" }, { icon: Database, label: "DB" }, { icon: Cpu, label: "LLM" }]
    },
    { 
      num: "3", 
      title: "Build & Test", 
      micro: "Implement + QA for stability",
      badges: [{ icon: GitBranch, label: "Git" }, { icon: CheckCircle, label: "CI" }, { icon: CheckCircle, label: "Test" }]
    },
    { 
      num: "4", 
      title: "Deploy & Support", 
      micro: "Launch + monitor + iterate",
      badges: [{ icon: Cloud, label: "AWS" }, { icon: Cloud, label: "Docker" }, { icon: Activity, label: "Monitor" }]
    },
  ];

  const whatWeDo = [
    "Understand success metrics",
    "Map workflow + edge cases",
    "Demo fast (prove capability)",
    "Build stable & reliable",
    "Deploy + iterate",
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="bg-[#F1EFE7] section-shell section-shell--compact border-t border-[#111111]/10 overflow-hidden">
      <style jsx>{`
        @keyframes dash-flow {
          to { stroke-dashoffset: -20; }
        }
        .animate-dash {
          animation: dash-flow 1s linear infinite;
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-left {
          animation: slide-in-left 0.6s ease-out forwards;
        }
        .animate-slide-right {
          animation: slide-in-right 0.6s ease-out forwards;
        }
      `}</style>

      <div className="section-shell__inner">
        <div className={`flex flex-col items-center text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="heading-section text-[#111111] mb-6">
            How NoDelay works
          </h2>
          <p className="body-lead text-[#4B5563] max-w-[640px] mb-10">
            From discovery to deployment—demo-first delivery with quality & stability.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <a 
              href="#creations" 
              className="inline-flex items-center justify-center px-8 py-3 bg-[#D9F01B] border border-[#111111] font-display font-medium text-[14px] hover:bg-[#111111] hover:text-white transition-colors duration-200 w-full sm:w-auto"
            >
              See our creations
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 bg-white border border-[#111111] font-display font-medium text-[14px] hover:bg-[#111111] hover:text-white transition-colors duration-200 w-full sm:w-auto"
            >
              Book a demo
            </a>
          </div>
        </div>

        <div className="relative">
          {/* Discovery Entry Cards */}
          <div className={`flex flex-wrap justify-center gap-4 mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>
            {entryCards.map((card, idx) => (
              <div 
                key={idx} 
                className="group relative flex items-center gap-3 px-5 py-3 bg-white border border-[#111111]/20 rounded-xl hover:border-[#748347] hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-default"
              >
                <div className="w-9 h-9 bg-[#748347]/10 rounded-lg flex items-center justify-center group-hover:bg-[#748347]/20 transition-colors">
                  <card.icon className="w-5 h-5 text-[#748347]" />
                </div>
                <span className="font-sans text-[14px] font-medium text-[#111111]">{card.label}</span>
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#111111] text-white text-[11px] font-sans rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {card.tooltip}
                </div>
              </div>
            ))}
          </div>

          {/* BD Team Connection */}
          <div className={`flex justify-center mb-2 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center gap-2 px-3 py-1 bg-[#748347]/10 rounded-full">
              <span className="font-sans text-[11px] text-[#748347]">Sanghavi & Milan — Business Development</span>
            </div>
          </div>

          {/* Animated Arrow Down */}
          <div className={`flex justify-center mb-4 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" className="hidden md:block">
              <path d="M30 0 L30 30 M20 22 L30 32 L40 22" stroke="#748347" strokeWidth="2" strokeDasharray="5,5" className="animate-dash" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Personas Row */}
          <div className={`flex flex-wrap justify-center gap-3 md:gap-4 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            {personas.map((persona, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white border border-[#111111]/15 rounded-full">
                <persona.icon className="w-4 h-4 text-[#4B5563]" />
                <span className="font-sans text-[12px] text-[#111111]">{persona.label}</span>
              </div>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="flex flex-col gap-6 items-center justify-center">
            {/* Core System */}
            <div className="w-full max-w-6xl">
              {/* Input Labels */}
              <div className={`flex justify-center gap-8 mb-3 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '500ms' }}>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/80 border border-dashed border-[#748347] rounded-lg">
                  <span className="font-sans text-[12px] text-[#4B5563]">Problem / Requirements</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/80 border border-dashed border-[#748347] rounded-lg">
                  <span className="font-sans text-[12px] text-[#4B5563]">Existing project context</span>
                </div>
              </div>

              {/* Arrow lines into core */}
              <div className={`flex justify-center mb-2 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
                <svg width="200" height="30" viewBox="0 0 200 30" fill="none" className="hidden md:block">
                  <path d="M50 0 L50 20 L100 20" stroke="#748347" strokeWidth="1.5" strokeDasharray="4,4" className="animate-dash" strokeLinecap="round"/>
                  <path d="M150 0 L150 20 L100 20" stroke="#748347" strokeWidth="1.5" strokeDasharray="4,4" className="animate-dash" strokeLinecap="round"/>
                  <path d="M100 20 L100 30" stroke="#748347" strokeWidth="1.5" strokeDasharray="4,4" className="animate-dash" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Workflow Engine Box - Bigger with left/right animations */}
              <div className={`relative bg-[#E8E6D9] border-2 border-[#111111] rounded-[20px] p-8 md:p-10 lg:p-12 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '700ms' }}>
                <div className="absolute -top-3.5 left-8 bg-[#F1EFE7] px-4">
                  <span className="font-sans text-[12px] text-[#4B5563] uppercase tracking-wider font-medium">Workflow Engine</span>
                </div>
                
                {/* NoDelay Logo Center */}
                <div className="text-center mb-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#D9F01B] border-2 border-[#111111] rounded-full shadow-md">
                    <svg className="w-10 h-10 text-[#111111]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                </div>

                {/* Delivery Stages with alternating left/right animations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-8">
                  {stages.map((stage, idx) => (
                    <div 
                      key={idx} 
                      className={`relative bg-white border border-[#111111]/25 rounded-xl p-5 shadow-sm ${isVisible ? (idx % 2 === 0 ? 'animate-slide-left' : 'animate-slide-right') : 'opacity-0'}`}
                      style={{ animationDelay: `${800 + idx * 150}ms`, animationFillMode: 'backwards' }}
                    >
                      {/* Connector line between stages */}
                      {idx < 3 && (
                        <div className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 w-5 h-[2px] border-t-2 border-dashed border-[#748347]"></div>
                      )}
                      
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="w-7 h-7 bg-[#748347] text-white text-[13px] font-bold rounded-full flex items-center justify-center">{stage.num}</span>
                        <span className="font-display text-[15px] font-semibold text-[#111111]">{stage.title}</span>
                      </div>
                      <p className="font-sans text-[12px] text-[#4B5563] mb-4">{stage.micro}</p>
                      <div className="flex flex-wrap gap-2">
                        {stage.badges.map((badge, bidx) => (
                          <span key={bidx} className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F1EFE7] border border-[#111111]/10 rounded text-[11px] text-[#4B5563]">
                            <badge.icon className="w-3.5 h-3.5" />
                            {badge.label}
                          </span>
                        ))}
                      </div>


                    </div>
                  ))}
                </div>

                {/* Team Layer */}
                <div className={`flex flex-wrap justify-center gap-4 pt-6 border-t border-[#111111]/10 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1400ms' }}>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/70 rounded-lg border border-[#111111]/10">
                    <div className="flex -space-x-1">
                      <div className="w-6 h-6 bg-[#748347] rounded-full flex items-center justify-center text-[10px] text-white font-bold border-2 border-white">J</div>
                      <div className="w-6 h-6 bg-[#748347] rounded-full flex items-center justify-center text-[10px] text-white font-bold border-2 border-white">N</div>
                    </div>
                    <span className="font-sans text-[12px] text-[#4B5563]">Jay & Nisarg — Dev & Innovation</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/70 rounded-lg border border-[#111111]/10">
                    <div className="w-6 h-6 bg-[#D9F01B] border-2 border-[#111111] rounded-full flex items-center justify-center text-[10px] text-[#111111] font-bold">R</div>
                    <span className="font-sans text-[12px] text-[#4B5563]">Ram — Founder approvals</span>
                  </div>
                </div>
              </div>

              {/* Arrow to Outputs */}
              <div className={`flex justify-center my-5 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1600ms' }}>
                <svg width="200" height="40" viewBox="0 0 200 40" fill="none" className="hidden md:block">
                  <path d="M100 0 L100 15 M50 25 L100 15 L150 25" stroke="#748347" strokeWidth="2" strokeDasharray="5,5" className="animate-dash" strokeLinecap="round"/>
                  <path d="M50 25 L50 35" stroke="#748347" strokeWidth="2" strokeDasharray="5,5" className="animate-dash" strokeLinecap="round"/>
                  <path d="M150 25 L150 35" stroke="#748347" strokeWidth="2" strokeDasharray="5,5" className="animate-dash" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Outputs */}
              <div className={`flex justify-center gap-6 md:gap-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '1800ms' }}>
                <div className="relative px-8 py-4 bg-[#D9F01B] border-2 border-[#111111] rounded-xl shadow-md">
                  <span className="font-display font-semibold text-[15px] text-[#111111]">Working demo</span>
                </div>
                <div className="relative px-8 py-4 bg-[#D9F01B] border-2 border-[#111111] rounded-xl shadow-md">
                  <span className="font-display font-semibold text-[15px] text-[#111111]">Deployed tool</span>
                </div>
              </div>

              {/* Iteration Loop */}
              <div className={`flex justify-center mt-5 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '2000ms' }}>
                <div className="flex items-center gap-2 px-4 py-1.5 bg-white/50 border border-dashed border-[#748347] rounded-full">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8a6 6 0 0111.3-2.9M14 8a6 6 0 01-11.3 2.9" stroke="#748347" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M13 2v3h-3M3 14v-3h3" stroke="#748347" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-sans text-[12px] text-[#748347] italic">Iteration</span>
                </div>
              </div>
            </div>

              {/* Sticky Note - What NoDelay does */}
              <div className={`w-full max-w-lg mt-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '2200ms' }}>
                <div className="relative bg-[#FFFDE7] border border-[#E8E4B8] rounded-lg p-6 shadow-sm transform rotate-[-0.5deg]">
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-10 h-5 bg-[#D9F01B]/60 rounded-sm"></div>
                  <h4 className="font-display text-[14px] font-semibold text-[#111111] mb-4 text-center">
                    What NoDelay does
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {whatWeDo.map((item, idx) => (
                      <span key={idx} className="inline-flex items-center px-3 py-1.5 bg-white/70 border border-[#111111]/10 rounded-full text-[12px] text-[#4B5563]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proven by real projects strip */}
        <div className={`mt-20 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '2400ms' }}>
          <div className="relative overflow-hidden py-4 bg-[#111111]">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, setIdx) => (
                <div key={setIdx} className="flex items-center">
                  {["Proven by real projects", "Demo-first delivery", "Built for stability", "Trusted by teams", "Fast iterations", "Enterprise ready"].map((text, idx) => (
                    <span key={idx} className="mx-8 font-display text-[14px] text-white/90 flex items-center gap-3">
                      <span className="w-2 h-2 bg-[#D9F01B] rounded-full"></span>
                      {text}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        `}</style>
      </section>
  );
};

export default HowItWorks;
