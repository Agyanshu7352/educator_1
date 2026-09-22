'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const [activePage, setActivePage] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        'Educator helped me find the perfect college. The guidance was clear and truly helpful.',
      name: 'Riya Sharma',
      course: 'B.Tech, VIT',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 2,
      quote:
        'I was confused about my career path, but Educator made it simple. Highly recommended!',
      name: 'Arjun Mehta',
      course: 'B.Sc, Manipal',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 3,
      quote:
        'I saved months of research time. The suggestions were accurate and personalized.',
      name: 'Sneha Patel',
      course: 'BBA, NMIMS',
      avatar:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 4,
      quote:
        'The cutoff predictions and personalized counsel gave me the clarity I needed to choose IIT Delhi with total peace of mind.',
      name: 'Aditya Verma',
      course: 'B.Tech CSE, IIT Delhi',
      avatar:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80',
    },
  ];

  const handleNext = () => {
    setActivePage((prev) =>
      prev + 1 >= testimonials.length - 2 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setActivePage((prev) =>
      prev - 1 < 0 ? testimonials.length - 3 : prev - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-[#F8FBFF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="text-left">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[11px] font-bold text-cyan-700 uppercase tracking-wider mb-3">
              REAL PEOPLE, REAL JOURNEYS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              Success Looks Better Here
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-normal max-w-xl">
              Hear from students who found the right colleges, made confident
              choices, and are now building the future they dreamed of.
            </p>
          </div>

          <div className="flex items-center gap-4 self-start md:self-end">
            <Link
              href="#stories"
              className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-cyan-600 inline-flex items-center gap-1.5 transition-colors group"
            >
              <span>See More Stories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Slider Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 flex items-center justify-center transition-colors shadow-xs"
                aria-label="Previous story"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 flex items-center justify-center transition-colors shadow-xs"
                aria-label="Next story"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(activePage, activePage + 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed mb-8 italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-cyan-100 shadow-xs"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {item.course}
                    </p>
                  </div>
                </div>

                <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                  <Quote className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
