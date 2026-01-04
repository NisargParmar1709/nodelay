import React from 'react';
import Image from 'next/image';

const LOGOS = [
  {
    name: 'Blueground',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/blueground_02c354fcfd_ead34b4ee7-2.svg',
    alt: 'Blueground Alternate Text',
  },
  {
    name: 'Coinbase',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/Coinbase_matched_to_Door_Dash_height_0a9ac01045-3.svg',
    alt: 'Coinbase',
  },
  {
    name: 'Doordash',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/Door_Dash_Logo_black_2a4c4bddb8-4.svg',
    alt: 'Doordash',
  },
  {
    name: 'Gametime',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/Gametime_matched_to_Door_Dash_height_689759743d-5.svg',
    alt: 'Gametime',
  },
  {
    name: 'Guidewire',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/Guidewire_black_e34ba46f03-6.svg',
    alt: 'Guidewire',
  },
  {
    name: 'MSCI',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/MSCI_0eadf1532a-7.svg',
    alt: 'MSCI',
  },
  {
    name: 'Rappi',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/Rappi_logo_2f27b3fd5a-8.svg',
    alt: 'Rappi',
  },
  {
    name: 'Toast',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/Toast_logo_black_719f819004-9.svg',
    alt: 'Toast',
  },
  {
    name: 'Tubi',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/Tubi_logo_754009129f-10.svg',
    alt: 'Tubi',
  },
  {
    name: 'Uni',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/Uni_logo_1663e14070-11.svg',
    alt: 'Uni',
  },
  {
    name: 'Zscaler',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/zscaler_logo_small_788f8bc193-12.svg',
    alt: 'Zscaler',
  },
];

const LogoMarquee = () => {
  return (
    <section className="bg-background py-8 md:py-12 overflow-hidden">
      <div className="container mx-auto px-6 sm:px-14 lg:px-28">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          {/* Header */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Custom Icon mimicking the one in screenshots */}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-0.5"
            >
              <path
                d="M9 0L11.25 6.75L18 9L11.25 11.25L9 18L6.75 11.25L0 9L6.75 6.75L9 0Z"
                fill="#111111"
              />
            </svg>
            <h2 className="text-base font-medium font-display tracking-tight text-foreground whitespace-nowrap">
              Some of our customers
            </h2>
          </div>

          {/* Infinite Marquee Container */}
          <div className="relative flex-1 overflow-hidden">
            {/* Gradient Overlays for Fade Effect */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="group flex overflow-hidden [--gap:4rem] [--duration:40s]">
              <div 
                className="flex shrink-0 items-center justify-around gap-[var(--gap)] min-w-full animate-marquee animate-infinite-scroll group-hover:[animation-play-state:paused]"
                style={{
                  animation: 'marquee var(--duration) linear infinite',
                }}
              >
                {/* First set of logos */}
                {LOGOS.map((logo, idx) => (
                  <div key={`${logo.name}-${idx}`} className="flex items-center justify-center h-8 shrink-0">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={32}
                      className="object-contain h-full w-auto filter grayscale opacity-80"
                    />
                  </div>
                ))}
                {/* Duplicated for seamless loop */}
                {LOGOS.map((logo, idx) => (
                  <div key={`${logo.name}-clone-${idx}`} className="flex items-center justify-center h-8 shrink-0">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={32}
                      className="object-contain h-full w-auto filter grayscale opacity-80"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - var(--gap)));
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LogoMarquee;