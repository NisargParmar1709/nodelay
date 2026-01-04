import React from 'react';
import Image from 'next/image';

/**
 * AnnouncementBar Component
 * 
 * A sticky announcement bar at the top of the page.
 * Uses the brand's chartreuse (lime green) color and modern industrial serif aesthetic.
 * 
 * Design Details:
 * - Background: #22c55e (approximate from original, mapping to Tailwind's green-500)
 * - Height: 48px (md:h-12)
 * - Font: Paralucent (mapped to font-sans) and New Spirit (mapped to font-display)
 * - Behavior: Sticky top
 */
const AnnouncementBar = () => {
  return (
    <a 
      href="https://luma.com/nodely-orchestration" 
      className="sticky top-0 left-0 z-[50] w-full h-auto md:h-12 bg-[#22C55E] hover:bg-[#16a34a] flex items-center justify-center px-4 py-2 md:py-0 cursor-pointer transition-colors duration-200 border-b border-black/10"
    >
      <div className="flex items-center justify-center max-w-[1408px] w-full">
        {/* Star Icon - Rotated 45 degrees as per original design */}
        <div className="hidden md:block mr-2 lg:mr-4 shrink-0">
          <Image 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/black-star-14.svg"
            alt="Star"
            width={18}
            height={19}
            className="rotate-45 scale-110"
          />
        </div>

        {/* Announcement Text */}
        <div className="text-center md:text-left">
          <p className="text-sm lg:text-base font-light font-sans text-black leading-tight tracking-tight">
            Seamlessly scale with{' '}
            <strong className="font-semibold text-black-900">
              NoDelay&apos;s AI orchestration for autonomous infrastructure
            </strong>
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="flex items-center ml-2 md:ml-4 group">
          {/* Arrow Icon - Using path data logic from structure */}
          <div className="flex items-center justify-center w-6 md:w-8 h-6 md:h-8">
            <svg 
              width="24" 
              height="25" 
              viewBox="0 0 24 25" 
              fill="none" 
              className="fill-current text-black"
            >
              <path d="M7 17.5L17 7.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 7.5H17V17.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <span className="text-sm lg:text-base font-display font-bold underline underline-offset-4 decoration-1 decoration-black/30 group-hover:decoration-black transition-all">
            Register
          </span>
        </div>
      </div>

      <style jsx global>{`
        /* Ensuring font consistency with the provided high level design */
        .font-paralucent {
          font-family: var(--font-sans);
          font-weight: 300;
        }
        .font-new-spirit {
          font-family: var(--font-display);
          font-weight: 500;
        }
      `}</style>
    </a>
  );
};

export default AnnouncementBar;