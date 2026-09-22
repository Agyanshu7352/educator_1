import React from 'react';

export default function InstitutionsMarquee() {
  const institutions = [
    {
      name: 'IIT',
      fullName: 'Indian Institute of Technology',
      tagColor: 'text-blue-900 border-blue-200 bg-blue-50/60',
      icon: (
        <svg
          className="w-5 h-5 text-blue-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      name: 'NIT',
      fullName: 'National Institute of Technology',
      tagColor: 'text-indigo-900 border-indigo-200 bg-indigo-50/60',
      icon: (
        <svg
          className="w-5 h-5 text-indigo-900"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      name: 'BITS Pilani',
      fullName: 'Birla Institute of Technology and Science',
      tagColor: 'text-blue-800 border-blue-200 bg-blue-50/60',
      icon: (
        <svg
          className="w-5 h-5 text-blue-800"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 6v6l4 2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      name: 'VIT',
      fullName: 'Vellore Institute of Technology',
      tagColor: 'text-sky-800 border-sky-200 bg-sky-50/60',
      icon: (
        <svg
          className="w-5 h-5 text-sky-800"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      name: 'Manipal',
      fullName: 'Manipal Academy of Higher Education',
      tagColor: 'text-orange-700 border-orange-200 bg-orange-50/60',
      icon: (
        <svg
          className="w-5 h-5 text-orange-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
        </svg>
      ),
    },
    {
      name: 'SRM',
      fullName: 'SRM Institute of Science and Technology',
      tagColor: 'text-blue-700 border-blue-200 bg-blue-50/60',
      icon: (
        <svg
          className="w-5 h-5 text-blue-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      ),
    },
    {
      name: 'Amity',
      fullName: 'Amity University',
      tagColor: 'text-navy-900 border-slate-200 bg-slate-50/60',
      icon: (
        <svg
          className="w-5 h-5 text-slate-800"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 12h10M12 7v10" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-10 bg-white border-y border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm font-semibold text-slate-600 tracking-wide mb-8">
          Trusted by students from top institutions and across India
        </p>

        {/* Brand Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10">
          {institutions.map((inst, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105 cursor-pointer group"
            >
              <div className="opacity-80 group-hover:opacity-100 transition-opacity">
                {inst.icon}
              </div>
              <span className="text-sm sm:text-base font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
                {inst.name}
              </span>
            </div>
          ))}

          <span className="text-xs sm:text-sm text-slate-600 font-medium italic">
            ...and 500+ more.
          </span>
        </div>
      </div>
    </section>
  );
}
