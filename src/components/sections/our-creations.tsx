import React from 'react';
import { TrendingUp, Calculator, BookOpen } from 'lucide-react';

const creations = [
  {
    icon: TrendingUp,
    title: "IPO Analyzer",
    problem: "IPO decisions are hard without clear performance and risk signals.",
    solution: "Analyzes IPO performance, risk, and expected listing outcomes using data + AI analysis.",
  },
  {
    icon: Calculator,
    title: "DDCET Scorer",
    problem: "Aspirants need quick, reliable score estimation.",
    solution: "Helps users calculate expected results with a scoring and evaluation tool.",
  },
  {
    icon: BookOpen,
    title: "GTU ExamPrepAI",
    problem: "Students need faster exam prep and doubt solving.",
    solution: "AI study assistant for GTU students focused on exam preparation, doubt solving, and subject guidance.",
  },
];

export default function OurCreations() {
  return (
    <section id="creations" className="bg-white py-24 sm:py-32 px-6 sm:px-[3.5rem] lg:px-[4.5rem] xl:px-[7rem]">
      <div className="max-w-[88rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-[40px] md:text-[48px] font-medium leading-[1.15] text-[#1A1A1A] mb-4">
            Our Creations
          </h2>
          <p className="font-sans font-light text-[18px] text-[#4B5563] max-w-[640px] mx-auto">
            These working tools demonstrate NoDelay's capability and build trust through real products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {creations.map((creation, index) => (
            <div 
              key={index} 
              className="bg-[#F2F1E9] border border-[#1A1A1A] rounded-[16px] overflow-hidden hover:shadow-[6px_6px_0px_#1A1A1A] transition-all duration-300 flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="w-14 h-14 bg-brand-lime border border-[#1A1A1A] rounded-lg flex items-center justify-center mb-6">
                  <creation.icon className="w-7 h-7 text-[#1A1A1A]" />
                </div>
                
                <h3 className="font-display text-[24px] font-semibold text-[#1A1A1A] mb-4">
                  {creation.title}
                </h3>
                
                <div className="mb-4">
                  <p className="font-sans text-[13px] font-semibold text-brand-olive uppercase tracking-wide mb-1">
                    Problem
                  </p>
                  <p className="font-sans font-light text-[15px] text-[#4B5563] leading-[1.5]">
                    {creation.problem}
                  </p>
                </div>
                
                <div>
                  <p className="font-sans text-[13px] font-semibold text-brand-olive uppercase tracking-wide mb-1">
                    What it does
                  </p>
                  <p className="font-sans font-light text-[15px] text-[#4B5563] leading-[1.5]">
                    {creation.solution}
                  </p>
                </div>
              </div>
              
              <div className="px-8 pb-8">
                <a 
                  href="#contact"
                  className="inline-flex items-center justify-center w-full h-[48px] bg-[#1A1A1A] text-white font-sans font-medium text-[14px] hover:bg-brand-lime hover:text-[#1A1A1A] border border-[#1A1A1A] transition-colors duration-200"
                >
                  Request a demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
