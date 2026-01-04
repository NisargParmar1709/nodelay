"use client";

import React, { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    whatToBuild: '',
    timeline: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="bg-white py-12 lg:py-16 px-6 sm:px-[3.5rem] lg:px-[4.5rem] xl:px-[7rem]">
      <div className="max-w-[88rem] mx-auto">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-[40px] md:text-[48px] font-medium leading-[1.15] text-[#111111] mb-4">
              Book a demo
            </h2>
            <p className="font-sans font-light text-[18px] text-[#4B5563] leading-[1.6]">
              Tell us what you want to build—NoDelay will respond with a demo plan and timeline.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block font-sans text-[14px] font-medium text-[#111111] mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#111111] bg-white font-sans text-[15px] focus:outline-none focus:ring-2 focus:ring-[#D9F01B] transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block font-sans text-[14px] font-medium text-[#111111] mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#111111] bg-white font-sans text-[15px] focus:outline-none focus:ring-2 focus:ring-[#D9F01B] transition-all"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block font-sans text-[14px] font-medium text-[#111111] mb-2">
                Company / Project
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#111111] bg-white font-sans text-[15px] focus:outline-none focus:ring-2 focus:ring-[#D9F01B] transition-all"
                placeholder="Your company or project name"
              />
            </div>

            <div>
              <label htmlFor="whatToBuild" className="block font-sans text-[14px] font-medium text-[#111111] mb-2">
                What you want to build <span className="text-red-500">*</span>
              </label>
              <textarea
                id="whatToBuild"
                name="whatToBuild"
                required
                rows={4}
                value={formData.whatToBuild}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#111111] bg-white font-sans text-[15px] focus:outline-none focus:ring-2 focus:ring-[#D9F01B] transition-all resize-none"
                placeholder="Describe what you're looking to build or automate..."
              />
            </div>

            <div>
              <label htmlFor="timeline" className="block font-sans text-[14px] font-medium text-[#111111] mb-2">
                Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#111111] bg-white font-sans text-[15px] focus:outline-none focus:ring-2 focus:ring-[#D9F01B] transition-all appearance-none cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23111111'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '20px' }}
              >
                <option value="">Select a timeline</option>
                <option value="1-2 weeks">1–2 weeks</option>
                <option value="3-6 weeks">3–6 weeks</option>
                <option value="6+ weeks">6+ weeks</option>
              </select>
            </div>

            <div>
              <label htmlFor="notes" className="block font-sans text-[14px] font-medium text-[#111111] mb-2">
                Additional notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-[#111111] bg-white font-sans text-[15px] focus:outline-none focus:ring-2 focus:ring-[#D9F01B] transition-all resize-none"
                placeholder="Any other details or questions..."
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="w-full md:w-auto flex items-center justify-center px-10 py-4 bg-[#D9F01B] border border-[#111111] font-display font-medium text-[16px] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors duration-200"
              >
                Submit request
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
