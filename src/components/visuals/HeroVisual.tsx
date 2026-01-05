"use client";

import { useEffect, useState } from "react";

// --- Theme Configuration ---
const THEME = {
  accent: "#D9F01B",       // Brand Chartreuse
  secondary: "#4F5E0B",    // Brand Olive
  success: "#22C55E",      // Green for "Good" stats
  grid: "rgba(79, 94, 11, 0.08)", // Subtle Olive-Grey for the grid lines
  pathBase: "rgba(17, 17, 17, 0.06)",
  nodeFill: "#FFFFFF",
  nodeStroke: "rgba(17, 17, 17, 0.15)"
};

const SNAPSHOTS = [
  { throughput: 8.5, latency: 0.82, active: "Contract QA", status: "Optimizing" },
  { throughput: 9.1, latency: 0.76, active: "Claims Triage", status: "Processing" },
  { throughput: 7.9, latency: 0.91, active: "Rev. Anomaly", status: "Scanning" },
];

export default function HeroVisual() {
  const [step, setStep] = useState(0);
  const [packetProgress, setPacketProgress] = useState(0);
  
  // Cycle through data snapshots
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % SNAPSHOTS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Animation Loop for Data Packet
  useEffect(() => {
    let start = performance.now();
    const duration = 4000;
    
    const loop = (time: number) => {
      const elapsed = time - start;
      const progress = (elapsed % duration) / duration;
      setPacketProgress(progress);
      requestAnimationFrame(loop);
    };
    
    const raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const currentData = SNAPSHOTS[step];
  
  // The path the data travels: Left -> Curve -> Top Node -> Curve -> Right Node
  const pathD = "M 10 50 C 40 50, 40 20, 70 20 C 100 20, 100 50, 130 50";

  return (
    <div className="relative w-full select-none group">
      
      {/* 1. THE GRID BACKGROUND 
           - Uses mask-image to create the radial gradient fade 
           - Blends perfectly into the beige background
      */}
      <div className="absolute -inset-[20%] z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(90deg, ${THEME.grid} 1px, transparent 1px),
            linear-gradient(${THEME.grid} 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          // The "Gradient into the grid" effect:
          maskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 70%)",
        }}
      />

      <div className="relative w-full aspect-[16/10] md:aspect-[2/1] overflow-visible z-10">
        
        {/* 2. THE SVG NETWORK LAYER */}
        <svg viewBox="0 0 140 90" className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="xMidYMid meet">
          <defs>
            <linearGradient id="trace-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={THEME.accent} stopOpacity="0" />
              <stop offset="50%" stopColor={THEME.accent} stopOpacity="1" />
              <stop offset="100%" stopColor={THEME.accent} stopOpacity="0" />
            </linearGradient>
            
            <filter id="glow-soft">
              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Base Path (Grey) */}
          <path d={pathD} fill="none" stroke={THEME.pathBase} strokeWidth="1.5" />

          {/* Animated Flow Beam (Chartreuse) */}
          <path 
            d={pathD} 
            fill="none" 
            stroke="url(#trace-grad)" 
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#glow-soft)"
            style={{
              strokeDasharray: 35,
              strokeDashoffset: 35 - (packetProgress * 200),
              opacity: 1
            }}
          />

          {/* Node 1 (Start) */}
          <g transform="translate(10, 50)">
            <circle r="4" fill={THEME.nodeFill} stroke={THEME.nodeStroke} strokeWidth="1" />
            <circle r={packetProgress < 0.2 ? 12 : 0} fill={THEME.accent} opacity="0.2" className="transition-all duration-300" />
          </g>

          {/* Node 2 (Processing - Top Center) */}
          <g transform="translate(70, 20)">
            <rect x="-8" y="-8" width="16" height="16" rx="4" fill="#FFFFFF" stroke={THEME.nodeStroke} strokeWidth="1" />
            {/* The "Box Icon" inside the node */}
            <rect x="-3" y="-3" width="6" height="6" rx="1" fill={packetProgress > 0.4 && packetProgress < 0.6 ? THEME.accent : "#E5E7EB"} className="transition-colors duration-200" />
          </g>

          {/* Node 3 (End) */}
          <g transform="translate(130, 50)">
             <circle r="4" fill={THEME.nodeFill} stroke={packetProgress > 0.8 ? THEME.success : THEME.nodeStroke} strokeWidth="1" />
          </g>
        </svg>

        {/* 3. THE FLOATING CARD */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-[340px]">
          <div className="bg-white rounded-2xl p-5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col gap-4 transition-all duration-500 hover:-translate-y-1">
            
            {/* Card Header with Icon Box */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                 {/* The Requested Icon Box */}
                 <div className="w-8 h-8 rounded-lg bg-[#D9F01B] flex items-center justify-center text-[#111]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                 </div>
                 <div>
                    <div className="text-[10px] font-bold tracking-wider text-gray-400 uppercase">Live Orchestration</div>
                    <div className="text-xs font-semibold text-gray-900">{currentData.active}</div>
                 </div>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                 <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                 <span className="text-[10px] font-mono text-gray-500">ID: 882f</span>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-50">
              <div>
                <div className="text-[11px] text-gray-400 mb-0.5 font-medium">Throughput</div>
                <div className="text-2xl font-bold text-gray-900 tracking-tight">
                   ${currentData.throughput.toFixed(1)}M
                </div>
              </div>
              <div className="text-right">
                <div className="text-[11px] text-gray-400 mb-0.5 font-medium">Latency</div>
                <div className="text-xl font-mono font-semibold text-gray-700">{currentData.latency}s</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
               <div 
                 className="absolute top-0 left-0 h-full bg-[#111] rounded-full transition-all duration-100 ease-linear"
                 style={{ width: `${Math.max(5, packetProgress * 100)}%` }} 
               />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}