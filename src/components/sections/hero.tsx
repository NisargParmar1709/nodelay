"use client";

import React, { useEffect, useRef, useState } from "react";
import RealtimeDashboard from "@/components/visuals/HeroVisual";
import HeroVisual from "@/components/visuals/HeroVisual";

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
        rootMargin: "0px",
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
    <section
      ref={sectionRef}
      className="relative z-[2] w-full bg-[#F2F1EB] section-shell section-shell--compact"
    >
      <div className="relative z-10 flex flex-col justify-between w-full h-auto lg:min-h-[65dvh]">
        <div className="section-shell__inner">
          <div className="flex flex-col items-center text-center lg:text-left lg:justify-between lg:h-full lg:flex-row gap-8 xl:gap-10 2xl:gap-12">
            <div
              className={`flex flex-col items-center lg:items-start w-full lg:w-1/2 transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex relative sm:mb-5">
                <h1 className="heading-hero text-[#111111] mt-8 sm:mt-10 lg:mt-0 max-w-[min(28rem,100%)] lg:max-w-[30rem] 2xl:max-w-[36rem]">
                  <span className="block relative z-10">
                    Orchestrate AI that ships value fast.
                  </span>
                </h1>
              </div>

              <p className="body-lead text-[#4B5563] max-w-[32rem] mt-4 md:mt-3">
                We design, automate, and launch AI workflows that your teams can
                trust—complete with live demos, clean handoffs, and measurable
                wins.
              </p>

              <div className="flex justify-center lg:justify-start w-full mt-6">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                  <a
                    className="flex items-center justify-center h-12 sm:h-[3.125rem] group w-full sm:w-auto border border-[#111111] whitespace-nowrap text-base font-medium transition-colors bg-[#D9F01B] text-[#111111] hover:bg-[#111111] hover:text-white px-6 sm:px-8"
                    href="#contact"
                  >
                    <span className="font-display text-[14px]">
                      Book a demo
                    </span>
                  </a>
                  <a
                    className="flex items-center justify-center h-12 sm:h-[3.125rem] group w-full sm:w-auto border border-[#111111] whitespace-nowrap text-base font-medium transition-colors bg-white text-[#111111] hover:bg-[#111111] hover:text-white px-6 sm:px-8"
                    href="#contact"
                  >
                    <span className="font-display text-[14px]">Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`relative mt-10 lg:mt-0 w-full lg:w-1/2 flex justify-center lg:justify-end items-center transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {/* Controlled width wrapper so the visual is large but balanced */}
              <div className="w-full max-w-[720px] lg:max-w-[820px]">
                <HeroVisual />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
