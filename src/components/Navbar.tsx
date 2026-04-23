'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();

  // Ensure the page scrolls to the top on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const getNavClass = (path: string) => {
    const isActive = pathname === path;
    return isActive
      ? "text-green-500 border-b-2 border-green-500 pb-1 text-sm tracking-wide font-medium"
      : "text-slate-300 hover:text-white transition-colors text-sm tracking-wide font-medium";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface backdrop-blur-xl shadow-2xl shadow-black/20">
      <div className="flex justify-between items-center px-6 py-4 max-w-[100rem] mx-auto">
        <div className="flex items-center">
          <img
            alt="Herambh Software"
            className="h-12 w-auto object-contain"
            src="/images/transparent_full_white_logo.png"
          />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={getNavClass('/')}>
            Home
          </Link>
          <Link href="/services" className={getNavClass('/services')}>
            Services
          </Link>
          <Link href="/portfolio" className={getNavClass('/portfolio')}>
            Portfolio
          </Link>
          <Link href="/about" className={getNavClass('/about')}>
            About
          </Link>
          <Link href="/contact" className={getNavClass('/contact')}>
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-on-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-200">
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
}
