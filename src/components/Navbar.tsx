"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Ensure the page scrolls to the top and closes mobile menu on every route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const getNavClass = (path: string) => {
    const isActive = pathname === path;
    return isActive
      ? "text-green-500 border-b-2 border-green-500 pb-1 text-sm tracking-wide font-medium"
      : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors text-sm tracking-wide font-medium";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface backdrop-blur-xl shadow-2xl shadow-black/20">
      <div className="flex justify-between items-center px-6 py-4 max-w-[100rem] mx-auto">
        <div className="flex items-center">
          <img
            alt="Herambh Software"
            className="h-12 w-auto object-contain dark:block hidden"
            src="/images/transparent_full_white_logo.png"
          />
          <img
            alt="Herambh Software"
            className="h-12 w-auto object-contain dark:hidden block"
            src="/images/transparent_full_black_logo.png"
          />
        </div>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={getNavClass("/")}>
            Home
          </Link>
          <Link href="/services" className={getNavClass("/services")}>
            Services
          </Link>
          <Link href="/portfolio" className={getNavClass("/portfolio")}>
            Portfolio
          </Link>
          <Link href="/about" className={getNavClass("/about")}>
            About
          </Link>
          <Link href="/contact" className={getNavClass("/contact")}>
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden md:inline-block bg-surface-container text-surface-on-container dark:bg-on-primary dark:text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-200"
          >
            Get a Quote
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-700 dark:text-slate-300 p-2 focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[4.5rem] bg-surface/95 dark:bg-slate-950/95 backdrop-blur-xl z-40 border-t border-black/5 dark:border-white/5 flex flex-col h-[calc(100vh-4.5rem)]">
          <div className="flex flex-col p-6 space-y-6 flex-1">
            <Link href="/" className={`text-xl ${getNavClass("/")}`}>
              Home
            </Link>
            <Link href="/services" className={`text-xl ${getNavClass("/services")}`}>
              Services
            </Link>
            <Link href="/portfolio" className={`text-xl ${getNavClass("/portfolio")}`}>
              Portfolio
            </Link>
            <Link href="/about" className={`text-xl ${getNavClass("/about")}`}>
              About
            </Link>
            <Link href="/contact" className={`text-xl ${getNavClass("/contact")}`}>
              Contact
            </Link>
          </div>
          <div className="p-6 mt-auto">
            <Link
              href="/contact"
              className="w-full inline-block text-center bg-surface-container text-surface-on-container dark:bg-on-primary dark:text-white px-6 py-4 rounded-xl text-lg font-bold"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
