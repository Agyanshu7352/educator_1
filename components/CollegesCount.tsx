'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Trophy,
  FileCheck2,
  BookOpen,
  MessageSquareHeart,
} from 'lucide-react';

export default function CollegesCount() {
  const stats = [
    { value: '500+', label: 'Colleges Listed' },
    { value: '50+', label: 'Streams Covered' },
    { value: '28+', label: 'States' },
    { value: '1M+', label: 'Student Community' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Content */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[11px] font-bold text-cyan-700 uppercase tracking-wider mb-4">
              HOW IT COMES
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
              500+ Colleges
              <br />
              <span className="text-slate-900">Across India, In One Place</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
              From top institutes to emerging universities, explore colleges,
              compare courses, check cutoffs, and find the right fit for your
              goals.
            </p>

            <Link
              href="#colleges"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 group mb-12"
            >
              <span>Explore Colleges</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-slate-100">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-slate-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Campus Showcase with Badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Handwritten Doodle Annotation */}
            <div className="hidden sm:block absolute -top-10 -right-2 lg:right-2 z-20 pointer-events-none transform rotate-6 text-right">
              <span className="font-handwritten text-xl sm:text-2xl text-cyan-600 font-bold tracking-wide">
                More Colleges
                <br />
                More Possibilities
              </span>
              <svg
                className="w-16 h-12 text-cyan-400 mt-0.5 ml-auto mr-2"
                viewBox="0 0 60 45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <path d="M55,5 C40,15 25,25 20,40" />
                <path d="M26,38 L19,41 L17,31" />
              </svg>
            </div>

            {/* Main Campus Image Frame */}
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80"
                alt="Prestigious University Campus Architecture"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

              {/* Floating Badge 1: Top-Ranked Institutes (Top-Left) */}
              <div className="absolute top-8 left-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-lg border border-slate-100 flex items-center gap-2.5 animate-float">
                <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <Trophy className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-800">
                    Top-Ranked
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    Institutes
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Detailed Comparisons (Top-Right) */}
              <div className="absolute top-14 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-lg border border-slate-100 flex items-center gap-2.5 animate-float-delayed">
                <div className="w-8 h-8 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                  <FileCheck2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-800">
                    Detailed
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    Comparisons
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: Detailed Comparisons (Bottom-Left) */}
              <div className="absolute bottom-8 left-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-lg border border-slate-100 flex items-center gap-2.5 animate-float">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-800">
                    Detailed
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    Curriculums
                  </div>
                </div>
              </div>

              {/* Floating Badge 4: Real Student Reviews (Bottom-Right) */}
              <div className="absolute bottom-10 right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-3.5 py-2.5 shadow-lg border border-slate-100 flex items-center gap-2.5 animate-float-delayed">
                <div className="w-8 h-8 rounded-xl bg-yellow-50 flex items-center justify-center text-yellow-600">
                  <MessageSquareHeart className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-800">
                    Real Student
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    Reviews
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
