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
    <section ref={sectionRef} className="bg-[#F2F1E9] section-shell section-shell--compact">
      <div className={`section-shell__inner text-center transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h2 className="heading-section text-[#1A1A1A] mb-5">
          AI for real business workflows
        </h2>
        <p className="body-lead text-[#4B5563] max-w-[40rem] mx-auto">
          We deliver AI orchestration and automation that integrates with your current tools and proves value through working demos.
        </p>
      </div>
    </section>
  );
}
