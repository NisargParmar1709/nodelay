import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: "Participates in every on call rotation",
    description: "Autonomously investigates incidents and builds initial theories before you start",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/images/images_6.png",
    alignment: "right"
  },
  {
    title: "Gets you to root cause",
    description: "Pursues multiple hypotheses in parallel and validates each against real evidence",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/images/images_7.png",
    alignment: "left"
  },
  {
    title: "Fixes and recommends",
    description: "Creates code snippets, drafts PRs, generates post-mortems, or more",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/images/images_8.png",
    alignment: "right"
  },
  {
    title: "Onboard new teammates quickly",
    description: "Get instant answers about your code, services, infra, or processes instead of hunting through docs",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/images/images_9.png",
    alignment: "left"
  },
  {
    title: "Debug any production issue",
    description: "Anyone can ask questions during incidents or development and get precise answers about your production",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/images/images_10.png",
    alignment: "right"
  },
  {
    title: "Execute remediation actions",
    description: "Generates Git PRs, kubectl commands, code fixes, or scripts that work with your setup",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/22b5be26-7567-49ca-a1c4-50f3894dab35-resolve-ai/assets/images/images_11.png",
    alignment: "left"
  }
];

const FeaturesStack = () => {
  return (
    <section className="bg-[#F1EFE7] pt-[8.5rem] pb-[8.5rem]">
      {/* Section Header */}
      <div className="container mx-auto px-6 lg:px-[7rem] mb-24 text-center">
        <h2 className="font-display text-[3rem] font-medium leading-[1.15] mb-4">
          Resolve AI in action
        </h2>
        <p className="font-sans font-light text-[1.125rem] text-[#4B5563]">
          Helps you resolve incidents, optimize costs, and build on existing systems
        </p>
      </div>

      {/* Alternating Features */}
      <div className="container mx-auto px-6 lg:px-[7rem] space-y-32">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
              feature.alignment === 'left' ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Card */}
            <div className="w-full lg:w-3/5">
              <div className="relative bg-white border border-[#111111] rounded-[12px] overflow-hidden shadow-none">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-2/5 flex flex-col justify-center">
              <h3 className="font-display text-[2rem] font-medium leading-[1.1] text-[#111111] mb-6">
                {feature.title}
              </h3>
              <p className="font-sans font-light text-[1.125rem] leading-[1.6] text-[#4B5563] max-w-md">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesStack;