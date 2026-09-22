import React from 'react';
import Link from 'next/link';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section id="get-started" className="py-12 lg:py-16 bg-[#FDFDFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl py-14 sm:py-20 px-6 sm:px-12 lg:px-16">
          {/* Panoramic Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85"
              alt="Mountain Vista with morning glow"
              className="w-full h-full object-cover object-center opacity-30 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
          </div>

          {/* Content Overlays */}
          <div className="relative z-10 max-w-2xl text-left">
            {/* Pill Tag */}
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-[11px] font-bold text-cyan-300 uppercase tracking-wider mb-4">
              READY TO TAKE THE NEXT STEP?
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Let&apos;s Build Your{' '}
              <span className="text-cyan-400">Brighter Tomorrow</span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed mb-8 max-w-lg">
              Get expert guidance, explore the best colleges, and make the right
              choice for your future.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#register"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95 group"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link
                href="#talk-expert"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all duration-200 backdrop-blur-md active:scale-95 group"
              >
                <div className="w-6 h-6 rounded-full bg-slate-700/80 flex items-center justify-center text-slate-200 group-hover:text-white">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <span>Talk to an Expert</span>
              </Link>
            </div>
          </div>

          {/* Handwritten Annotation on Right */}
          <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 z-10 pointer-events-none transform rotate-3 text-right">
            <span className="font-handwritten text-3xl text-white/90 font-bold tracking-wide drop-shadow-md">
              Better Students,
              <br />
              Brighter Futures
            </span>
            <svg
              className="w-28 h-6 text-white/80 mt-1 ml-auto"
              viewBox="0 0 120 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              <path d="M5,12 C40,4 80,18 115,8" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
