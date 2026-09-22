'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Star,
} from 'lucide-react';

export default function FeaturedColleges() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const colleges = [
    {
      id: 'iit-delhi',
      name: 'IIT Delhi',
      location: 'New Delhi',
      rating: '4.9',
      nirf: '#2 in India',
      image:
        'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
      tag: 'Autonomous • NIRF #2',
    },
    {
      id: 'nit-trichy',
      name: 'NIT Trichy',
      location: 'Tiruchirappalli',
      rating: '4.8',
      nirf: '#1 among NITs',
      image:
        'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80',
      tag: 'Institute of National Importance',
    },
    {
      id: 'bits-pilani',
      name: 'BITS Pilani',
      location: 'Pilani',
      rating: '4.8',
      nirf: 'Top Private Institute',
      image:
        'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=800&q=80',
      tag: 'Deemed University',
    },
    {
      id: 'vit-vellore',
      name: 'VIT Vellore',
      location: 'Vellore',
      rating: '4.7',
      nirf: 'Top 10 Engineering',
      image:
        'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
      tag: 'Grade A++ NAAC',
    },
    {
      id: 'iit-bombay',
      name: 'IIT Bombay',
      location: 'Mumbai',
      rating: '4.9',
      nirf: '#1 Engineering',
      image:
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
      tag: 'Global Eminence',
    },
    {
      id: 'manipal-univ',
      name: 'Manipal University',
      location: 'Manipal',
      rating: '4.6',
      nirf: 'Top Ranked',
      image:
        'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
      tag: 'Autonomous Campus',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= colleges.length - 3 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? colleges.length - 4 : prev - 1));
  };

  return (
    <section id="colleges" className="py-20 lg:py-28 bg-[#FDFDFE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header with Action and Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left">
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[11px] font-bold text-cyan-700 uppercase tracking-wider mb-3">
              FEATURED COLLEGES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
              Top Colleges to Explore
            </h2>
            <p className="text-sm sm:text-base text-slate-500 font-normal">
              Discover some of the most sought-after colleges across India.
            </p>
          </div>

          <div className="flex items-center gap-4 self-start md:self-end">
            <Link
              href="#view-all"
              className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-cyan-600 inline-flex items-center gap-1.5 transition-colors group"
            >
              <span>View All Colleges</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Slider Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 flex items-center justify-center transition-colors shadow-xs"
                aria-label="Previous colleges"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 flex items-center justify-center transition-colors shadow-xs"
                aria-label="Next colleges"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {colleges.slice(currentIndex, currentIndex + 4).map((college) => (
            <div
              key={college.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
            >
              {/* College Campus Photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-slate-800 flex items-center gap-1 shadow-xs">
                  <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                  <span>{college.rating}</span>
                </div>
              </div>

              {/* College Details */}
              <div className="p-5 flex items-center justify-between mt-auto">
                <div className="text-left">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {college.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{college.location}</span>
                  </div>
                </div>

                {/* Arrow Button */}
                <button
                  className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 transition-all duration-200 shrink-0"
                  aria-label={`View ${college.name}`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
