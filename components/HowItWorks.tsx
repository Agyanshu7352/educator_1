import React from 'react';
import { Search, FileText, Users, Send, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      stepNumber: 1,
      badgeColor: 'bg-teal-500 text-white',
      icon: <Search className="w-6 h-6 text-teal-600" />,
      iconBg: 'bg-teal-50 border-teal-100',
      title: 'Explore',
      description: 'Search and compare colleges & courses',
    },
    {
      stepNumber: 2,
      badgeColor: 'bg-cyan-500 text-white',
      icon: <FileText className="w-6 h-6 text-cyan-600" />,
      iconBg: 'bg-cyan-50 border-cyan-100',
      title: 'Analyze',
      description: 'Check rankings, reviews and key details',
    },
    {
      stepNumber: 3,
      badgeColor: 'bg-emerald-500 text-white',
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      iconBg: 'bg-emerald-50 border-emerald-100',
      title: 'Get Guidance',
      description: 'Receive personalized recommendations',
    },
    {
      stepNumber: 4,
      badgeColor: 'bg-pink-500 text-white',
      icon: <Send className="w-6 h-6 text-pink-600" />,
      iconBg: 'bg-pink-50 border-pink-100',
      title: 'Decide',
      description: 'Choose with confidence and take the next step',
    },
  ];

  return (
    <section
      id="resources"
      className="py-20 lg:py-28 bg-[#F8FBFF] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-[11px] font-bold text-cyan-700 uppercase tracking-wider mb-3">
            HOW IT WORKS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
            Your Dream College Is
            <br />
            <span className="text-slate-900">Just A Few Steps Away</span>
          </h2>

          {/* Handwritten Annotation */}
          <div className="hidden md:block absolute -top-4 -right-12 lg:right-4 pointer-events-none transform rotate-6">
            <span className="font-handwritten text-xl lg:text-2xl text-cyan-600 font-bold tracking-wide">
              Simple Steps;
              <br />
              Big Opportunities!
            </span>
            <svg
              className="w-16 h-10 text-cyan-400 mt-1 ml-4"
              viewBox="0 0 60 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M5,5 C25,20 40,15 50,30" />
              <path d="M42,28 L51,31 L48,22" />
            </svg>
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-white rounded-3xl p-6 lg:p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center h-full">
                {/* Step Number Badge */}
                <div
                  className={`w-7 h-7 rounded-full ${step.badgeColor} flex items-center justify-center text-xs font-bold mb-4 shadow-sm`}
                >
                  {step.stepNumber}
                </div>

                {/* Large Icon Container */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center border mb-5 group-hover:scale-110 transition-transform duration-300 ${step.iconBg}`}
                >
                  {step.icon}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Horizontal Connecting Arrow for desktop (between items) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 -translate-y-1/2 z-10 text-slate-300 pointer-events-none">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
