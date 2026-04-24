'use client';

import { Globe, Share2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const allCompanyLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const pathname = usePathname();
  const activeCompanyLinks = allCompanyLinks.filter(link => link.href !== pathname).slice(0, 4);

  return (
    <footer className="bg-white dark:bg-slate-950 w-full pt-24 pb-12 border-t border-black/5 dark:border-white/5">
      <div className="max-w-[100rem] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center mb-8">
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
          <p className="text-slate-500 dark:text-slate-500 font-body leading-relaxed mb-8">
            We don’t just build software — we build systems that businesses rely
            on.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
              <Globe className="text-sm text-slate-700 dark:text-slate-300" />
            </div>
            <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors cursor-pointer">
              <Share2 className="text-sm text-slate-700 dark:text-slate-300" />
            </div>
          </div>
        </div>
        <div>
          <h5 className="text-slate-900 dark:text-white font-headline font-semibold mb-8">
            Solutions
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                href="/services"
                className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body"
              >
                AI Automation
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body"
              >
                Custom Software Development
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body"
              >
                Web Design & Development
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body"
              >
                Mobile Application Development
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-slate-900 dark:text-white font-headline font-semibold mb-8">
            Company
          </h5>
          <ul className="space-y-4">
            {activeCompanyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-slate-900 dark:text-white font-headline font-semibold mb-8">
            Legal
          </h5>
          <ul className="space-y-4">
            <li>
              <Link
                href="/privacy"
                className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body"
                target="_blank"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body"
                target="_blank"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/compliance"
                className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body"
                target="_blank"
              >
                Compliance
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[90rem] mx-auto px-6 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 dark:text-slate-500 text-sm font-body">
          © 2026 Herambh Software Technologies & Solutions. All rights reserved.
        </p>
        <div className="flex gap-8">
          <Link
            href="/privacy"
            className="text-slate-500 dark:text-slate-500 hover:text-green-500 text-sm font-body transition-colors"
            target="_blank"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-slate-500 dark:text-slate-500 hover:text-green-500 text-sm font-body transition-colors"
            target="_blank"
          >
            Terms of Service
          </Link>
          {/* <a
            href="#"
            className="text-slate-500 dark:text-slate-500 hover:text-green-500 text-sm font-body transition-colors"
          >
            Careers
          </a>
          <a
            href="#"
            className="text-slate-500 dark:text-slate-500 hover:text-green-500 text-sm font-body transition-colors"
          >
            Support
          </a> */}
        </div>
      </div>
    </footer>
  );
}
