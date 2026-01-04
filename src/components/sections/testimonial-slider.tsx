import React from 'react';
import Image from 'next/image';
import { ArrowUp, ArrowDown } from 'lucide-react';

const TestimonialSlider = () => {
  return (
    <section className="bg-[#F1EFE7] pt-[4rem] pb-[4rem] px-6 sm:px-[3.5rem] lg:px-[4.5rem] xl:px-[7rem]">
      <div className="max-w-[88rem] mx-auto">
        <h2 className="font-display text-[2.5rem] md:text-[3rem] font-medium leading-[1.15] mb-12 max-w-[30rem]">
          Trusted by engineers building what&apos;s next
        </h2>

        <div className="relative flex flex-col md:flex-row border border-[#111111] rounded-[12px] overflow-hidden bg-white shadow-none">
          {/* Left Panel: Profile */}
          <div className="md:w-[30%] bg-[#222222] p-8 md:p-10 flex flex-col justify-end min-h-[300px] md:min-h-auto border-b md:border-b-0 md:border-r border-[#111111]">
            <div className="relative w-[120px] h-[120px] mb-8 border border-[#4B5563] p-1 rounded-sm bg-[#333333]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/images/images_1.png"
                alt="Angelo Marletta"
                fill
                className="object-cover grayscale"
              />
            </div>
            <div>
              <h3 className="text-white font-display text-[1.5rem] font-medium mb-1">
                Angelo Marletta
              </h3>
              <p className="text-[#D9F01B] font-sans text-[0.875rem] font-light">
                Software Engineer, Coinbase
              </p>
            </div>
          </div>

          {/* Middle Panel: Metric */}
          <div className="md:w-[25%] p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-[#111111]">
            <div className="flex flex-col">
              <span className="font-sans text-[4.5rem] leading-[1] font-normal text-[#111111]">
                73%
              </span>
              <span className="font-sans text-[1.125rem] leading-[1.2] font-light text-[#111111] mt-2 max-w-[120px]">
                faster time to root cause
              </span>
            </div>
          </div>

          {/* Right Panel: Quote & Logo */}
          <div className="md:w-[45%] p-10 md:p-12 flex flex-col bg-white">
            <div className="mb-10">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/svgs/Coinbase_testimonial_3b51156bbd-15.svg"
                alt="Coinbase Logo"
                width={140}
                height={28}
                className="h-[28px] w-auto"
              />
            </div>
            <p className="font-display italic text-[1.25rem] md:text-[1.375rem] leading-[1.5] text-[#111111] font-normal">
              &ldquo;Resolve AI proved it could deliver real results in production. It identified dependencies, surfaced accurate root causes 73% faster than our teams, all while integrating cleanly into our existing stack.&rdquo;
            </p>
          </div>

          {/* Navigation Buttons (Static mockup as requested by the UI design) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col z-10 translate-x-[50%] md:translate-x-0 md:right-[-20px] lg:right-[-20px]">
            <button className="bg-[#111111] border border-[#111111] p-2.5 text-white hover:bg-[#333333] transition-colors mb-[-1px]">
              <ArrowUp size={18} className="text-[#D9F01B]" />
            </button>
            <button className="bg-[#111111] border border-[#111111] p-2.5 text-white hover:bg-[#333333] transition-colors">
              <ArrowDown size={18} className="text-[#D9F01B]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;