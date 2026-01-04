"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Solutions",
      href: "#solutions",
    },
    {
      label: "Our Creations",
      href: "#creations",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Security",
      href: "#security",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header
      className={`sticky top-0 left-0 z-20 transition-all duration-300 ease-in-out w-full px-6 sm:px-[3.5rem] lg:px-[4.5rem] xl:px-[7rem] h-[80px] sm:h-[100px] border-b border-black/10 bg-[#F1EFE7] ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-[88rem] mx-auto h-full flex items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="relative z-[2] flex items-center gap-3 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#D9F01B] border border-[#111111] rounded-lg rotate-0 group-hover:rotate-12 transition-transform duration-300"></div>
                <svg 
                  className="relative z-10 w-6 h-6 sm:w-7 sm:h-7 text-[#111111]" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5"
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <span className="font-display text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-[#111111] tracking-tight relative overflow-hidden">
                <span className="inline-block animate-text-shimmer bg-[length:200%_100%] bg-clip-text bg-gradient-to-r from-[#111111] via-[#748347] to-[#111111]">
                  NoDelay
                </span>
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 justify-center">
            <nav className="font-sans">
              <ul className="flex items-center gap-8">
                {navItems.map((item) => (
                  <li key={item.label} className="relative group h-[100px] flex items-center">
                    <Link
                      href={item.href}
                      className="text-[16px] font-light leading-none hover:opacity-70 transition-opacity duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="#contact"
              className="flex items-center justify-center h-[40px] px-6 border border-[#111111] bg-white text-[14px] font-medium font-sans hover:bg-[#111111] hover:text-white transition-all"
            >
              Contact Us
            </Link>

            <Link href="#contact" className="flex items-stretch group overflow-hidden border border-[#111111]">
              <div className="flex items-center px-5 py-2 min-h-[40px] bg-[#D9F01B] group-hover:bg-[#111111] transition-colors duration-200">
                <span className="font-display font-medium text-[14px] text-[#111111] group-hover:text-white">
                  Book a demo
                </span>
              </div>
              <div className="flex items-center justify-center size-[40px] border-l border-[#111111] bg-[#D9F01B] group-hover:bg-[#111111] transition-colors duration-200">
                <ArrowRight className="w-4 h-4 text-[#111111] group-hover:text-white transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-4">
            <Link href="#contact" className="flex items-stretch border border-[#111111]">
              <div className="flex items-center px-4 py-2 min-h-[40px] bg-[#D9F01B]">
                <span className="font-display font-medium text-[14px] text-[#111111]">Book a demo</span>
              </div>
              <div className="flex items-center justify-center size-[40px] border-l border-[#111111] bg-[#D9F01B]">
                <ArrowRight className="w-4 h-4 text-[#111111]" />
              </div>
            </Link>
            
            <button 
              className="w-10 h-10 border border-[#111111] flex flex-col items-center justify-center gap-1.5 bg-[#F1EFE7]"
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-[1.5px] bg-[#111111]"></div>
              <div className="w-6 h-[1.5px] bg-[#111111]"></div>
              <div className="w-6 h-[1.5px] bg-[#111111]"></div>
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#F1EFE7] border-b border-[#111111] shadow-lg">
          <nav className="px-6 py-6">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block text-[16px] font-light py-2 hover:text-[#748347] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      <style jsx>{`
        @keyframes text-shimmer {
          0% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-text-shimmer {
          animation: text-shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
