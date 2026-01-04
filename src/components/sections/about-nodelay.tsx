"use client";

import React, { useEffect, useRef, useState } from 'react';
import { User, Code2, Briefcase } from 'lucide-react';

const team = [
  {
    icon: User,
    name: "Ram",
    role: "Founder & Operations",
    description: "Direction, decisions/approvals, client communication, alignment."
  },
  {
    icon: Code2,
    name: "Jay & Nisarg",
    role: "Product Development & Innovation",
    description: "Build functional solutions, micro-products, demos, quality/stability, continuous innovation."
  },
  {
    icon: Briefcase,
    name: "Sanghavi & Milan",
    role: "Business Development",
    description: "Outreach, discovery, relationships, market needs collection, groundwork."
  }
];

export default function AboutNoDelay() {
  return (
    <section id="about" className="bg-[#F2F1E9] py-12 sm:py-16 px-6 sm:px-[3.5rem] lg:px-[4.5rem] xl:px-[7rem]">
      <div className="max-w-[88rem] mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-display text-[40px] md:text-[48px] font-medium leading-[1.15] text-[#1A1A1A] mb-6">
            About NoDelay
          </h2>
          <p className="font-sans font-light text-[18px] text-[#4B5563] leading-[1.7]">
            NoDelay is a service-based technology company delivering reliable, high-value digital solutions. 
            We specialize in AI automation, AI-driven tools, and custom intelligent systems that solve real problems. 
            Our identity is built on practical, usable AI products, stable high-quality solutions, and trust through working demonstrations—not just marketing.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="font-display text-[28px] font-medium text-center text-[#1A1A1A] mb-12">
            Our Team
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white border border-[#1A1A1A] rounded-[12px] p-8 text-center hover:shadow-[4px_4px_0px_#1A1A1A] transition-shadow duration-200"
              >
                <div className="w-16 h-16 bg-[#748347] border border-[#1A1A1A] rounded-full flex items-center justify-center mx-auto mb-6">
                  <member.icon className="w-8 h-8 text-white" />
                </div>
                
                <h4 className="font-display text-[20px] font-semibold text-[#1A1A1A] mb-2">
                  {member.name}
                </h4>
                
                <span className="font-sans text-[13px] font-medium text-[#748347] border border-[#748347] rounded-full px-4 py-1 inline-block mb-4">
                  {member.role}
                </span>
                
                <p className="font-sans font-light text-[15px] text-[#4B5563] leading-[1.6]">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
