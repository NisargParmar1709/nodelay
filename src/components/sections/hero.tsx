"use client";

import React, { useEffect, useRef, useState } from 'react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative z-[2] w-full bg-[#F2F1EB]">
      <div className="top-0 z-10 flex flex-col justify-between w-full h-auto lg:min-h-[65dvh] relative">
        <div className="pt-6 pb-10 lg:pt-[3.25rem] lg:pb-[5.5rem] px-8 sm:px-[3.5rem] lg:px-[4.5rem] xl:px-[7rem] lg:py-0 py-[1rem]">
          <div className="max-w-[88rem] mx-auto h-full">
            <div className="flex flex-col items-center text-center lg:text-left lg:justify-between lg:h-full lg:flex-row gap-8 lg:gap-10 xl:gap-12 2xl:gap-16">

              <div className={`flex flex-col items-center lg:items-start w-full lg:w-1/2 transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="flex relative sm:mb-5">
                  <h1 className="text-4xl text-[#111111] leading-[1.15] mt-10 lg:text-[3.25rem] lg:leading-[1.15] 2xl:text-[4rem] 2xl:leading-[1.15] lg:max-w-[30rem] 2xl:max-w-[36rem] max-w-[320px] font-display font-medium">
                    <span className="block relative z-10">Orchestrate AI that ships value fast.</span>
                  </h1>
                </div>

                <p className="text-base leading-[1.6] max-w-[28rem] font-sans mt-4 md:mt-0 lg:text-lg md:leading-[1.7] text-[#4B5563] font-light">
                  We design, automate, and launch AI workflows that your teams can trust—complete with live demos, clean handoffs, and measurable wins.
                </p>

                <div className="mb-0 md:mb-0 lg:mt-6 flex justify-center lg:justify-start w-full">
                  <div className="flex gap-4 mt-6">
                    <a
                      className="flex items-center justify-center h-[3.125rem] group w-full sm:w-auto border border-[#111111] whitespace-nowrap text-base font-medium transition-colors bg-[#D9F01B] text-[#111111] hover:bg-[#111111] hover:text-white px-8"
                      href="#contact"
                    >
                      <span className="font-display text-[14px]">Book a demo</span>
                    </a>
                    <a
                      className="flex items-center justify-center h-[3.125rem] group w-full sm:w-auto border border-[#111111] whitespace-nowrap text-base font-medium transition-colors bg-white text-[#111111] hover:bg-[#111111] hover:text-white px-8"
                      href="#contact"
                    >
                      <span className="font-display text-[14px]">Contact Us</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className={`relative mt-12 lg:mt-0 w-full lg:w-1/2 flex justify-center items-center transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '200ms' }}>
                <div className="relative w-full max-w-[560px] aspect-[4/3]">
                  <div className="absolute -inset-2 border border-[#111111] rounded-[12px] -z-10 bg-white/50 translate-x-2 translate-y-2"></div>

                  <div className="relative w-full h-full border border-[#111111] rounded-[12px] overflow-hidden bg-gradient-to-br from-[#748347] via-[#8a9a5c] to-[#D9F01B]">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                      <div className="bg-white/95 border border-[#111111] rounded-[12px] p-6 shadow-lg max-w-[320px] w-full">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 bg-[#D9F01B] border border-[#111111] rounded-full flex items-center justify-center">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2">
                              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-display font-semibold text-[#111111]">NoDelay</p>
                            <p className="font-sans text-xs text-[#4B5563]">AI Orchestration</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#22C55E]"></div>
                            <span className="text-sm font-sans text-[#111111]">Workflow Active</span>
                          </div>
                          <div className="h-2 bg-[#E5E3DA] rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-[#D9F01B] rounded-full"></div>
                          </div>
                          <p className="text-xs font-sans text-[#4B5563]">Processing: Document Analysis</p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-4 right-4">
                      <div className="w-6 h-6 flex items-center justify-center text-white/80 rotate-45">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M10 2L10 18M2 10L18 10" /></svg>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="w-5 h-5 flex items-center justify-center text-white/60 rotate-12">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 0L10.5 5.5L16 8L10.5 10.5L8 16L5.5 10.5L0 8L5.5 5.5L8 0Z" /></svg>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="size-8 rounded-full border border-[#111111] bg-white flex items-center justify-center">
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="#111111" strokeWidth="1.5"><path d="M1 5L5 9L13 1" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-4 z-20">
                    <div className="bg-[#D9F01B] border border-[#111111] p-2 rotate-[5deg]">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2"><path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
