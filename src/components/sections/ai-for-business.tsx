"use client";

import React, { useEffect, useRef, useState } from 'react';

export default function AIForBusiness() {
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
        rootMargin: '0px 0px -100px 0px'
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
    <section ref={sectionRef} className="bg-[#F2F1E9] py-12 lg:py-16 px-6 sm:px-14 lg:px-[4.5rem] xl:px-[7rem]">
      <div className={`max-w-[88rem] mx-auto text-center transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h2 className="font-display text-[32px] md:text-[48px] font-medium leading-[1.15] tracking-[-0.01em] text-[#1A1A1A] mb-6">
          AI for real business workflows
        </h2>
        <p className="font-sans font-light text-[18px] leading-[1.6] text-[#4B5563] max-w-[640px] mx-auto">
          We deliver AI orchestration and automation that integrates with your current tools and proves value through working demos.
        </p>
      </div>
    </section>
  );
}
