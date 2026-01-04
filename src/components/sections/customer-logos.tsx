import React from 'react';
import Image from 'next/image';

const logos = [
  {
    name: "Blueground",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/blueground_02c354fcfd_ead34b4ee7-2.svg",
    width: 137,
    height: 20,
  },
  {
    name: "Coinbase",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/Coinbase_matched_to_Door_Dash_height_0a9ac01045-3.svg",
    width: 101,
    height: 18,
  },
  {
    name: "DoorDash",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/Door_Dash_Logo_black_2a4c4bddb8-4.svg",
    width: 100,
    height: 30,
  },
  {
    name: "Gametime",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/Gametime_matched_to_Door_Dash_height_689759743d-5.svg",
    width: 110,
    height: 18,
  },
  {
    name: "Guidewire",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/Guidewire_black_e34ba46f03-6.svg",
    width: 100,
    height: 30,
  },
  {
    name: "MSCI",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/MSCI_0eadf1532a-7.svg",
    width: 112,
    height: 30,
  },
  {
    name: "Rappi",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/Rappi_logo_2f27b3fd-8.svg",
    width: 66,
    height: 28,
  },
  {
    name: "Toast",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/Toast_logo_black_719f819004-9.svg",
    width: 100,
    height: 30,
  },
  {
    name: "Tubi",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/Tubi_logo_754009129f-10.svg",
    width: 83,
    height: 24,
  },
  {
    name: "Uni",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/Uni_logo_1663e14070-11.svg",
    width: 57,
    height: 20,
  },
  {
    name: "Zscaler",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/zscaler_logo_small_788f8bc193-12.svg",
    width: 100,
    height: 21,
  }
];

export default function CustomerLogos() {
  return (
    <section className="w-full bg-[#F2F1E9] py-8 md:py-14 overflow-hidden border-b border-[#1A1A1A]/10">
      <div className="container mx-auto px-6 mb-12 flex items-center justify-center space-x-2">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#1A1A1A] w-4 h-4">
          <path d="M12 0L14.7 9.3L24 12L14.7 14.7L12 24L9.3 14.7L0 12L9.3 9.3L12 0Z" fill="currentColor" />
        </svg>
        <h2 className="text-[14px] font-sans font-semibold tracking-tight uppercase text-[#1A1A1A]">
          Some of our customers
        </h2>
      </div>

      <div className="relative flex w-full">
        {/* Grayscale container with marquee animation */}
        <div className="flex animate-marquee whitespace-nowrap items-center grayscale opacity-80 gap-16 md:gap-24 px-12">
          {logos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex-shrink-0 flex items-center justify-center">
              <Image
                src={logo.url}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-[30px] w-auto object-contain"
              />
            </div>
          ))}
          {/* Duplicate for seamless infinite loop */}
          {logos.map((logo, index) => (
            <div key={`${logo.name}-dup-${index}`} className="flex-shrink-0 flex items-center justify-center">
              <Image
                src={logo.url}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-[30px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}