'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  School,
  Sparkles,
  Compass,
  Bell,
  CheckCircle2,
  TrendingUp,
  Globe2,
} from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Explore Colleges',
      description: 'Compare top colleges across India',
      icon: <School className="w-5 h-5 text-cyan-600" />,
      bg: 'bg-cyan-50/70 border-cyan-100/80 hover:border-cyan-200',
      iconBg: 'bg-cyan-100',
    },
    {
      title: 'Personalized Guidance',
      description: 'Get recommendations based on your interests',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-600" />,
      bg: 'bg-emerald-50/70 border-emerald-100/80 hover:border-emerald-200',
      iconBg: 'bg-emerald-100',
    },
    {
      title: 'Career Insights',
      description: 'Know the right career path with expert advice',
      icon: <Sparkles className="w-5 h-5 text-pink-600" />,
      bg: 'bg-pink-50/70 border-pink-100/80 hover:border-pink-200',
      iconBg: 'bg-pink-100',
    },
    {
      title: 'Latest Updates',
      description: 'Stay informed about admissions, exams & more',
      icon: <Bell className="w-5 h-5 text-purple-600" />,
      bg: 'bg-purple-50/70 border-purple-100/80 hover:border-purple-200',
      iconBg: 'bg-purple-100',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Two-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16 lg:mb-20">
          {/* Left Text Column */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200/80 text-[11px] font-bold text-cyan-700 uppercase tracking-wider mb-4">
              WHY CHOOSE EDUCATOR
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
              More Than Admission{' '}
              <span className="text-cyan-500 block sm:inline">
                A Clearer Tomorrow
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
              We simplify your college search, provide expert guidance, and help
              you make informed decisions for a brighter future.
            </p>

            <Link
              href="#get-started"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-all duration-200 shadow-md hover:shadow-lg active:scale-95 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Right Visual Image Column with Badges */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* Handwritten Top Right Annotation */}
            <div className="hidden sm:block absolute -top-8 -right-2 lg:right-4 z-20 pointer-events-none transform rotate-12 text-center">
              <span className="font-handwritten text-xl sm:text-2xl text-cyan-600 font-bold tracking-wide">
                Guiding Students
                <br />
                Every Step!
              </span>
              <svg
                className="w-14 h-12 text-cyan-400 mx-auto -mt-1"
                viewBox="0 0 60 45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <path d="M45,5 C35,20 22,25 15,35" />
                <path d="M12,27 L15,36 L24,33" />
              </svg>
            </div>

            {/* Central Student Cutout Card */}
            <div className="relative w-72 sm:w-80 md:w-96 aspect-square rounded-full p-3 bg-gradient-to-tr from-cyan-100 via-sky-50 to-teal-100 shadow-xl border border-white">
              <div className="w-full h-full rounded-full overflow-hidden relative shadow-inner bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                  alt="Student with books on university campus"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating Badge 1: Your Potential Our Priority */}
              <div className="absolute -left-4 sm:-left-8 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-3 sm:px-4 sm:py-3 shadow-lg border border-slate-100 flex items-center gap-2.5 animate-float">
                <div className="text-left">
                  <div className="text-[11px] font-bold text-slate-800">
                    Your Potential
                  </div>
                  <div className="text-[10px] text-cyan-600 font-semibold">
                    Our Priority
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Find the Right College */}
              <div className="absolute -right-3 sm:-right-6 top-10 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:px-3.5 sm:py-2.5 shadow-lg border border-slate-100 flex items-center gap-2.5 animate-float-delayed">
                <div className="w-8 h-8 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-slate-800">
                    Find the
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    Right College
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: Explore Learn Grow */}
              <div className="absolute -right-2 sm:-right-4 bottom-10 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 sm:px-3.5 sm:py-2.5 shadow-lg border border-slate-100 flex items-center gap-2.5 animate-float">
                <div className="w-8 h-8 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                  <Globe2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-slate-800">
                    Explore
                  </div>
                  <div className="text-[10px] text-slate-500 font-medium">
                    Learn & Grow
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((card, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${card.bg}`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${card.iconBg}`}
              >
                {card.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1.5">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
