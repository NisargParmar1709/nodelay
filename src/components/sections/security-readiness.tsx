"use client";

import React, { useEffect, useRef, useState } from 'react';

const SecurityReadiness = () => {
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

  const securityFeatures = [
    "Clear data handling: only what's needed for the solution.",
    "Access controls aligned with your tools and environments.",
    "Redaction options for sensitive content in demos.",
    "Your project data stays isolated per engagement.",
    "We do not use your private data to train models for other clients."
  ];

  return (
    <section ref={sectionRef} id="security" className="bg-[#F1EFE7] section-shell section-shell--compact overflow-hidden">
      <div className="section-shell__inner">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          <div className={`w-full lg:w-1/2 flex flex-col items-start transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <h2 className="heading-section text-[#111111] mb-10">
              Security and<br />
              delivery readiness
            </h2>
            
            <ul className="space-y-6">
              {securityFeatures.map((feature, index) => (
                <li 
                  key={index} 
                  className={`flex items-start gap-4 transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="mt-1 flex-shrink-0">
                    <div className="bg-[#D9F01B] rounded-full p-1 border border-[#111111] flex items-center justify-center w-6 h-6">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L5 9L10 3" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg font-light font-sans text-[#111111] leading-tight pt-0.5">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <a 
                href="#contact" 
                className="btn-split group"
              >
                <div className="btn-split-text group-hover:bg-[#111111] group-hover:text-white transition-colors duration-200">
                  Contact us
                </div>
                <div className="btn-split-icon group-hover:bg-[#111111] transition-colors duration-200">
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 25 25" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="group-hover:text-white transition-colors duration-200"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative h-[360px] sm:h-[420px] lg:h-[480px] flex items-center justify-center">
            <div className="relative w-full h-full max-w-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-dashed border-[#111111]/20 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-2 border-dashed border-[#111111]/10 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-dashed border-[#111111]/5 rounded-full"></div>
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-20 h-20 bg-[#D9F01B] border-2 border-[#111111] rounded-full flex items-center justify-center shadow-lg">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#111111" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                    </div>
                  </div>

                  <div className="absolute top-8 left-1/4 bg-white border border-[#111111] rounded-lg p-3 shadow-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#748347" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  
                  <div className="absolute bottom-12 right-8 bg-white border border-[#111111] rounded-lg p-3 shadow-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#748347" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  
                  <div className="absolute top-1/3 right-4 bg-white border border-[#111111] rounded-lg p-3 shadow-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#748347" strokeWidth="2">
                      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
                    </svg>
                  </div>
                  
                  <div className="absolute bottom-1/4 left-4 bg-white border border-[#111111] rounded-lg p-3 shadow-sm">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#748347" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                    </svg>
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

export default SecurityReadiness;
