'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  ArrowRight,
  ArrowUp,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  Heart,
  Check,
} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Colleges', href: '#colleges' },
    { name: 'Resources', href: '#resources' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  const resourceLinks = [
    { name: 'Career Guidance', href: '#' },
    { name: 'College Compare', href: '#' },
    { name: 'Blogs & Articles', href: '#' },
    { name: 'Admission Updates', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ];

  return (
    <footer
      id="contact"
      className="bg-white border-t border-slate-100 pt-16 pb-12 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-100">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 text-left">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <img
                src="/favicon.png"
                alt="Educator Logo"
                className="w-10 h-10 object-contain rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Educator
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-500 ml-0.5"></span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mb-6 font-normal">
              Empowering students with the right guidance to build a brighter
              tomorrow.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-cyan-50 hover:text-cyan-600 text-slate-600 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-cyan-50 hover:text-cyan-600 text-slate-600 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-cyan-50 hover:text-cyan-600 text-slate-600 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-cyan-50 hover:text-cyan-600 text-slate-600 flex items-center justify-center transition-colors"
                aria-label="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-500 hover:text-cyan-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm text-slate-500 hover:text-cyan-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4 text-left">
            <h4 className="text-xs font-bold tracking-wider text-slate-900 uppercase mb-3">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Get the latest updates, tips and career insights delivered to your
              inbox.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="relative flex items-center"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-full py-2.5 pl-4 pr-12 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
              />
              <button
                type="submit"
                className="absolute right-1.5 w-8 h-8 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95"
                aria-label="Subscribe"
              >
                {subscribed ? (
                  <Check className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>
            </form>

            {subscribed && (
              <p className="text-xs text-emerald-600 font-medium mt-2 animate-in fade-in">
                Thank you! You are now subscribed.
              </p>
            )}
          </div>
        </div>

        {/* Bottom Copyright and Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Educator. All rights reserved.</p>

          <p className="flex items-center gap-1">
            Made with{' '}
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for a
            brighter future
          </p>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg hover:bg-cyan-600 hover:-translate-y-0.5 transition-all duration-200"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </footer>
  );
}
