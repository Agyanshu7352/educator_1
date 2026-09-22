'use client';

import React, { useState, useEffect } from 'react';
import {
  Search,
  ArrowRight,
  Play,
  TrendingUp,
  ShieldCheck,
  Layers,
  Target,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  BookOpen,
  Compass,
} from 'lucide-react';
import VideoModal from './VideoModal';

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const quickSearches = [
    'IIT Bombay',
    'Computer Science B.Tech',
    'VIT Vellore',
    'MBA Admissions 2026',
    'BITS Pilani',
  ];

  // Multi-card showcase data (like the Squarespace reference in Image 2)
  const showcaseCards = [
    {
      id: 'engineering',
      tag: 'ENGINEERING & TECH',
      established: 'EST. TOP 100 TIER',
      title: 'FUTURE INNOVATORS',
      tagline: 'NEXT-GEN B.TECH, AI & ROBOTICS LABS',
      badge: 'NIRF #1 - #10 RANKED',
      badgeColor: 'bg-cyan-500 text-white',
      ctaText: 'EXPLORE ENGINEERING',
      heroImg:
        'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      secondaryImg:
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=400&q=80',
      stats: [
        { label: 'Avg Package', value: '₹24.8 LPA' },
        { label: 'Top Colleges', value: '120+ Campuses' },
        { label: 'Placements', value: '98.4%' },
      ],
      theme: {
        cardBg: 'bg-[#F5F2EB]',
        textColor: 'text-[#1C1A17]',
        mutedColor: 'text-[#736E65]',
        accentBg: 'bg-[#1C1A17]',
        accentText: 'text-white',
        border: 'border-[#E5DFD3]',
      },
    },
    {
      id: 'management',
      tag: 'MANAGEMENT & B-SCHOOLS',
      established: 'EST. GLOBAL STANDARDS',
      title: 'EXECUTIVE LEADERSHIP',
      tagline: 'STRATEGIC MBA & GLOBAL COMMERCE',
      badge: 'AACSB ACCREDITED',
      badgeColor: 'bg-amber-500 text-white',
      ctaText: 'EXPLORE MANAGEMENT',
      heroImg:
        'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
      secondaryImg:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      stats: [
        { label: 'Avg CTC', value: '₹28.5 LPA' },
        { label: 'B-Schools', value: '85+ Institutes' },
        { label: 'Global Alumni', value: '50,000+' },
      ],
      theme: {
        cardBg: 'bg-[#141416]',
        textColor: 'text-[#F5F5F7]',
        mutedColor: 'text-[#9E9EA7]',
        accentBg: 'bg-white',
        accentText: 'text-slate-950',
        border: 'border-slate-800',
      },
    },
    {
      id: 'design',
      tag: 'DESIGN & ARCHITECTURE',
      established: 'EST. CREATIVE HUBS',
      title: 'CREATIVE HORIZONS',
      tagline: 'UI/UX, VISUAL ARTS & BUILT SPACES',
      badge: 'PORTFOLIO FIRST',
      badgeColor: 'bg-emerald-500 text-white',
      ctaText: 'EXPLORE DESIGN',
      heroImg:
        'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80',
      secondaryImg:
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
      stats: [
        { label: 'Design Studios', value: '200+ Tie-ups' },
        { label: 'Institutes', value: '45+ Design Hubs' },
        { label: 'Annual Expositions', value: '100%' },
      ],
      theme: {
        cardBg: 'bg-[#EFEAE2]',
        textColor: 'text-[#1E1B18]',
        mutedColor: 'text-[#6E685F]',
        accentBg: 'bg-[#1E1B18]',
        accentText: 'text-white',
        border: 'border-[#DFD7CC]',
      },
    },
    {
      id: 'medical',
      tag: 'MEDICAL & SCIENCES',
      established: 'EST. CLINICAL HUBS',
      title: 'CLINICAL RESEARCH',
      tagline: 'MBBS, BIOTECH & SURGICAL INNOVATION',
      badge: 'NMC & WHO APPROVED',
      badgeColor: 'bg-teal-500 text-white',
      ctaText: 'EXPLORE MEDICAL',
      heroImg:
        'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80',
      secondaryImg:
        'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=400&q=80',
      stats: [
        { label: 'Hospital Beds', value: '1,500+ Avg' },
        { label: 'Medical Seats', value: '15,000+ Tracked' },
        { label: 'Research Grants', value: '₹50Cr+' },
      ],
      theme: {
        cardBg: 'bg-[#F3F4F6]',
        textColor: 'text-[#111827]',
        mutedColor: 'text-[#6B7280]',
        accentBg: 'bg-[#111827]',
        accentText: 'text-white',
        border: 'border-[#E5E7EB]',
      },
    },
  ];

  const handleNextCard = () => {
    setActiveCardIndex((prev) => (prev + 1) % showcaseCards.length);
  };

  const handlePrevCard = () => {
    setActiveCardIndex((prev) =>
      prev === 0 ? showcaseCards.length - 1 : prev - 1
    );
  };

  // Auto-scrolling carousel (advances every 4 seconds, pauses when user hovers)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % showcaseCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, showcaseCards.length]);

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F0F7FF] via-[#F8FBFF] to-[#FAF8F5]">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-200/30 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-blue-200/20 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Centered Header Content */}
        <div className="text-center max-w-4xl mx-auto relative z-20">
          {/* Subtitle Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50/80 border border-cyan-200/70 text-[11px] sm:text-xs font-semibold tracking-widest text-cyan-700 uppercase mb-5 shadow-xs">
            <span>DREAM</span>
            <span className="text-cyan-400">•</span>
            <span>EXPLORE</span>
            <span className="text-cyan-400">•</span>
            <span>ACHIEVE</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-5">
            A Brighter Future{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-sky-500 bg-clip-text text-transparent">
              Begins Here.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Explore the right colleges. Get expert guidance. Build the career
            you deserve.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-7 relative">
            <div className="relative flex items-center bg-white rounded-full p-2 pl-5 shadow-[0_12px_35px_-8px_rgba(15,23,42,0.12)] border border-slate-200/80 focus-within:border-cyan-500 focus-within:ring-4 focus-within:ring-cyan-100 transition-all duration-300">
              <Search className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                placeholder="Search colleges, courses, or careers..."
                className="w-full text-slate-800 placeholder-slate-400 text-sm md:text-base bg-transparent border-none outline-none pr-3"
              />
              <button
                type="button"
                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center shrink-0 shadow-md transition-transform hover:scale-105 active:scale-95 group"
                aria-label="Search"
              >
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Instant Suggestion Dropdown */}
            {isFocused && (
              <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 px-4 z-40 text-left animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Popular Searches
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickSearches.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSearchQuery(item)}
                      className="text-xs px-3 py-1.5 rounded-full bg-slate-50 hover:bg-cyan-50 hover:text-cyan-700 text-slate-600 transition-colors border border-slate-100"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Social Proof & Video Trigger */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-1">
            {/* Student Avatar Cluster */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                  alt="Student 1"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80"
                  alt="Student 2"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                  alt="Student 3"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover shadow-xs"
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80"
                  alt="Student 4"
                />
              </div>
              <span className="text-xs font-semibold text-slate-700">
                Trusted by{' '}
                <span className="text-slate-900 font-bold">10,000+</span>{' '}
                students across India
              </span>
            </div>

            {/* Watch Story Video CTA */}
            <button
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center gap-2.5 text-xs font-semibold text-slate-800 hover:text-cyan-600 transition-colors group"
            >
              <span className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center bg-white shadow-xs group-hover:border-cyan-500 group-hover:scale-105 transition-all">
                <Play className="w-3 h-3 text-slate-800 fill-slate-800 ml-0.5 group-hover:text-cyan-600 group-hover:fill-cyan-600 transition-colors" />
              </span>
              <span>Watch Our Story</span>
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MULTI-CARD 3D PERSPECTIVE SHOWCASE (Squarespace-like)     */}
        {/* ========================================================= */}
        <div className="relative mt-14 md:mt-20 w-full max-w-7xl mx-auto">
          {/* Hand-drawn Left Doodle Annotation */}
          <div className="hidden lg:block absolute -top-10 left-6 z-40 pointer-events-none transform -rotate-6">
            <span className="font-handwritten text-xl text-cyan-600 font-bold tracking-wide">
              Some Students
              <br />
              Bigger Dreams
            </span>
            <svg
              className="w-16 h-12 text-cyan-400 mt-1 ml-4"
              viewBox="0 0 60 45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M5,5 C18,15 35,28 45,38" />
              <path d="M38,37 L47,38 L44,28" />
            </svg>
          </div>

          {/* Hand-drawn Right Doodle Annotation */}
          <div className="hidden lg:block absolute -top-10 right-6 z-40 pointer-events-none transform rotate-3 text-right">
            <span className="font-handwritten text-xl text-cyan-600 font-bold tracking-wide">
              Your Future
              <br />
              Our Guidance
            </span>
            <svg
              className="w-16 h-12 text-cyan-400 mt-1 ml-auto mr-4"
              viewBox="0 0 60 45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <path d="M55,5 C42,15 25,28 15,38" />
              <path d="M22,37 L13,38 L16,28" />
            </svg>
          </div>

          {/* Floating Badges */}
          {/* 1. Discover Top Colleges */}
          <div className="hidden xl:flex absolute top-12 -left-8 z-40 items-center gap-3 px-4 py-2.5 rounded-2xl glass-card animate-float shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-800">Discover</div>
              <div className="text-[11px] text-slate-500 font-medium">
                Top Colleges
              </div>
            </div>
          </div>

          {/* 2. Get Guidance */}
          <div className="hidden xl:flex absolute bottom-32 -left-4 z-40 items-center gap-3 px-4 py-2.5 rounded-2xl glass-card animate-float-delayed shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-800">
                Get Guidance
              </div>
              <div className="text-[11px] text-slate-500 font-medium">
                From Experts
              </div>
            </div>
          </div>

          {/* 3. Compare Courses Easily */}
          <div className="hidden xl:flex absolute top-14 -right-8 z-40 items-center gap-3 px-4 py-2.5 rounded-2xl glass-card animate-float-delayed shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-600">
              <Layers className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-800">Compare</div>
              <div className="text-[11px] text-slate-500 font-medium">
                Courses Easily
              </div>
            </div>
          </div>

          {/* 4. Achieve Your Dreams */}
          <div className="hidden xl:flex absolute bottom-36 -right-4 z-40 items-center gap-3 px-4 py-2.5 rounded-2xl glass-card animate-float shadow-xl hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
              <Target className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-800">Achieve</div>
              <div className="text-[11px] text-slate-500 font-medium">
                Your Dreams
              </div>
            </div>
          </div>

          {/* Perspective Container Wrapper */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative w-full overflow-hidden py-10 px-2 sm:px-6 flex items-center justify-center min-h-[560px] md:min-h-[640px]"
          >
            {/* Ambient Backlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />

            {/* 3-Card Carousel Track */}
            <div className="relative w-full max-w-4xl h-[480px] sm:h-[540px] md:h-[580px] flex items-center justify-center">
              {showcaseCards.map((card, idx) => {
                const total = showcaseCards.length;
                const offset = (idx - activeCardIndex + total) % total;

                // Center Card
                if (offset === 0) {
                  return (
                    <div
                      key={card.id}
                      className={`absolute inset-0 z-30 transition-all duration-700 ease-out transform scale-100 opacity-100 rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] border ${card.theme.border} ${card.theme.cardBg} flex flex-col justify-between`}
                    >
                      {/* Top Header of Card */}
                      <div className="flex items-center justify-between border-b pb-4 sm:pb-5 border-black/10">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span
                            className={`text-[10px] sm:text-xs font-black tracking-widest uppercase ${card.theme.textColor}`}
                          >
                            {card.tag}
                          </span>
                          <span className="text-slate-400">•</span>
                          <span
                            className={`text-[9px] sm:text-[11px] font-bold tracking-wider uppercase ${card.theme.mutedColor}`}
                          >
                            {card.established}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full ${card.badgeColor}`}
                          >
                            {card.badge}
                          </span>
                        </div>
                      </div>

                      {/* Middle Body of Card (Multi-Photo Editorial Layout) */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-auto py-4">
                        {/* Left Column Image */}
                        <div className="hidden md:block md:col-span-3 aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                          <img
                            src={card.secondaryImg}
                            alt={card.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Central Typography Showcase */}
                        <div className="md:col-span-5 text-center md:text-left px-2">
                          <span
                            className={`text-[10px] sm:text-xs font-bold tracking-widest uppercase ${card.theme.mutedColor}`}
                          >
                            CAMPUS SPOTLIGHT
                          </span>
                          <h3
                            className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mt-1 mb-2 leading-[1.15] ${card.theme.textColor}`}
                          >
                            {card.title}
                          </h3>
                          <p
                            className={`text-xs sm:text-sm font-medium leading-relaxed mb-5 ${card.theme.mutedColor}`}
                          >
                            {card.tagline}
                          </p>

                          <button
                            type="button"
                            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-md ${card.theme.accentBg} ${card.theme.accentText}`}
                          >
                            <span>{card.ctaText}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Right Main Hero Photo */}
                        <div className="md:col-span-4 aspect-[4/3] md:aspect-[4/5] rounded-2xl overflow-hidden shadow-md">
                          <img
                            src={card.heroImg}
                            alt={card.title}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>

                      {/* Bottom Footer Info Strip */}
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/10 text-center">
                        {card.stats.map((st, sIdx) => (
                          <div key={sIdx} className="text-left sm:text-center">
                            <div
                              className={`text-sm sm:text-lg font-black tracking-tight ${card.theme.textColor}`}
                            >
                              {st.value}
                            </div>
                            <div
                              className={`text-[10px] sm:text-xs font-semibold ${card.theme.mutedColor}`}
                            >
                              {st.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }

                // Left Peeking Card
                if (offset === total - 1 || (total === 2 && offset === 1)) {
                  return (
                    <div
                      key={card.id}
                      onClick={handlePrevCard}
                      className={`hidden lg:flex absolute w-full h-[88%] z-10 transition-all duration-700 ease-out transform -translate-x-[64%] scale-90 opacity-60 hover:opacity-90 cursor-pointer rounded-[32px] p-8 shadow-xl border ${card.theme.border} ${card.theme.cardBg} flex-col justify-between pointer-events-auto`}
                    >
                      <div className="flex items-center justify-between border-b pb-3 border-black/10">
                        <span
                          className={`text-[11px] font-black tracking-widest uppercase ${card.theme.textColor}`}
                        >
                          {card.tag}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${card.badgeColor}`}
                        >
                          {card.badge}
                        </span>
                      </div>
                      <div className="my-auto py-2">
                        <h4
                          className={`text-2xl font-black ${card.theme.textColor}`}
                        >
                          {card.title}
                        </h4>
                        <p className={`text-xs ${card.theme.mutedColor} mt-1`}>
                          {card.tagline}
                        </p>
                      </div>
                      <div className="aspect-[16/9] w-full rounded-xl overflow-hidden">
                        <img
                          src={card.heroImg}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  );
                }

                // Right Peeking Card
                if (offset === 1) {
                  return (
                    <div
                      key={card.id}
                      onClick={handleNextCard}
                      className={`hidden lg:flex absolute w-full h-[88%] z-10 transition-all duration-700 ease-out transform translate-x-[64%] scale-90 opacity-60 hover:opacity-90 cursor-pointer rounded-[32px] p-8 shadow-xl border ${card.theme.border} ${card.theme.cardBg} flex-col justify-between pointer-events-auto`}
                    >
                      <div className="flex items-center justify-between border-b pb-3 border-black/10">
                        <span
                          className={`text-[11px] font-black tracking-widest uppercase ${card.theme.textColor}`}
                        >
                          {card.tag}
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${card.badgeColor}`}
                        >
                          {card.badge}
                        </span>
                      </div>
                      <div className="my-auto py-2">
                        <h4
                          className={`text-2xl font-black ${card.theme.textColor}`}
                        >
                          {card.title}
                        </h4>
                        <p className={`text-xs ${card.theme.mutedColor} mt-1`}>
                          {card.tagline}
                        </p>
                      </div>
                      <div className="aspect-[16/9] w-full rounded-xl overflow-hidden">
                        <img
                          src={card.heroImg}
                          alt={card.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  );
                }

                return null;
              })}
            </div>

            {/* Navigation Arrows for Carousel */}
            <button
              onClick={handlePrevCard}
              className="absolute left-2 sm:left-4 z-40 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-xl border border-slate-200/80 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextCard}
              className="absolute right-2 sm:right-4 z-40 w-11 h-11 rounded-full bg-white/90 hover:bg-white text-slate-900 shadow-xl border border-slate-200/80 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
              aria-label="Next card"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4 z-30 relative">
            {showcaseCards.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveCardIndex(dotIdx)}
                className={`transition-all duration-300 rounded-full ${
                  activeCardIndex === dotIdx
                    ? 'w-8 h-2.5 bg-cyan-500'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

          {/* Hand-drawn Bottom Right Annotation */}
          <div className="hidden lg:block absolute -bottom-6 right-16 z-30 pointer-events-none transform -rotate-3 text-right">
            <span className="font-handwritten text-2xl text-slate-800 font-bold tracking-wide">
              Big Dreams
              <br />
              Brighter Tomorrows
            </span>
            <svg
              className="w-28 h-6 text-cyan-600 mt-0.5 ml-auto"
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

        {/* ========================================================= */}
        {/* STATS SECTION BELOW CARDS (Matching Image 3 Reference)    */}
        {/* ========================================================= */}
        <div className="mt-20 pt-10 border-t border-slate-200/80">
          <p className="text-center text-xs sm:text-sm font-semibold tracking-wider text-slate-500 uppercase mb-8">
            Join millions of students who build their future with Educator
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                10K+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                Students Guided
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                500+
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                Colleges Listed
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                95%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                Success Stories
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-1">
                4.8{' '}
                <span className="text-amber-400 text-2xl sm:text-3xl">★</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">
                Student Rating
              </div>
            </div>
          </div>

          {/* Scroll to explore pill */}
          <div className="flex flex-col items-center justify-center gap-2 mt-10 cursor-pointer">
            <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase">
              Scroll to Explore
            </span>
            <div className="w-5 h-8 rounded-full border-2 border-slate-300 flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-slate-600 animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Trigger */}
      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </section>
  );
}
