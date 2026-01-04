"use client";

import React, { useEffect, useRef, useState } from 'react';

const PerformanceCards = () => {
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

  const cards = [
    {
      title: "Resolve incidents",
      subtitle: "AI SRE",
      description: "Triages every alert, identifies the root cause, and provides a remediation plan",
    },
    {
      title: "Optimize costs",
      subtitle: "AI for cost optimization",
      description: "Delivers cost savings and performance improvements across infra and observability",
    },
    {
      title: "Ship faster",
      subtitle: "Code with production context",
      description: "Provides the right architectural recommendations and code to build new features for existing systems.",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-[#F1EFE7] py-12 lg:py-16 px-6 sm:px-14 lg:px-[4.5rem] xl:px-[7rem]">
      <div className="max-w-[88rem] mx-auto">
        <h2 className={`font-display text-[2.5rem] md:text-[3rem] font-medium leading-[1.1] tracking-tight text-[#111111] max-w-[40rem] mb-10 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>  
          Drives up to 5x faster MTTR and 75% higher productivity
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`flex flex-col border border-[#111111] rounded-[12px] bg-white overflow-hidden h-full transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}>
            
              {/* Card Header (Green Section) */}
              <div className="bg-[#748347] px-6 py-6 border-b border-[#111111]">
                <h3 className="font-display text-[1.5rem] font-semibold text-white leading-tight mb-2">
                  {card.title}
                </h3>
                <p className="font-sans text-[0.75rem] uppercase tracking-wider text-white opacity-80 font-medium">
                  {card.subtitle}
                </p>
              </div>

              {/* Card Body (White Section) */}
              <div className="px-6 py-8 flex-grow">
                <p className="font-sans text-[1rem] leading-[1.6] text-[#111111] font-light">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceCards;