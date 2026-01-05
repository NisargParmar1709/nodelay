import React from 'react';
import Link from "next/link";

const Footer = () => {
  const footerLinks = [
    {
      title: 'Solutions',
      links: [
        { name: 'AI Orchestration', href: '#solutions' },
        { name: 'AI Automation', href: '#solutions' },
        { name: 'Custom Systems', href: '#solutions' },
      ],
    },
    {
      title: 'Creations',
      links: [
        { name: 'IPO Analyzer', href: '#creations' },
        { name: 'DDCET Scorer', href: '#creations' },
        { name: 'GTU ExamPrepAI', href: '#creations' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', href: '#about' },
        { name: 'Security', href: '#security' },
        { name: 'Contact', href: '#contact' },
      ],
    },
  ];

  return (
    <footer className="bg-[#222222] text-[#F1EFE7] pt-20 lg:pt-28 pb-10 layout-inline--narrow">
      <div className="section-shell__inner">
        <div className="flex flex-col lg:flex-row justify-between gap-16 mb-16">
          <div className="flex flex-col max-w-md">
            <span className="font-display text-[32px] lg:text-[40px] font-semibold text-[#D9F01B] tracking-tight mb-6">
              NoDelay
            </span>
            <p className="font-sans text-[16px] font-light text-gray-400 leading-[1.7] mb-8">
              Reliable AI tools with minimal delay. We build AI automation, orchestration tools, and custom intelligent systems that solve real problems.
            </p>
            
            <a 
              href="#contact" 
              className="inline-flex group border border-[#D9F01B] hover:bg-[#D9F01B] transition-colors duration-300 w-fit"
            >
              <span className="px-6 py-3 font-display text-[#D9F01B] group-hover:text-[#222222] text-base font-medium">
                Book a demo
              </span>
              <span className="px-4 py-3 bg-[#D9F01B] border-l border-[#D9F01B] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform duration-300">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#222222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-12">
            {footerLinks.map((section) => (
              <div key={section.title} className="flex flex-col gap-4">
                <h3 className="font-sans text-sm font-semibold uppercase tracking-wider text-gray-400">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href} 
                        className="font-sans text-[15px] font-light text-gray-300 hover:text-[#D9F01B] transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center text-[13px] font-sans text-gray-400">
            <span>&copy; {new Date().getFullYear()} NoDelay - All rights reserved</span>
            <div className="flex gap-6">
              <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-sans text-sm text-gray-400">Get in touch</span>
            <a 
              href="mailto:nodelay.tech@gmail.com" 
              className="font-sans text-sm text-[#D9F01B] hover:underline transition-colors"
            >
              nodelay.tech@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
