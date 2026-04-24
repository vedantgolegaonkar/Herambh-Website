import { Globe, Share2 } from "lucide-react";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-950 w-full pt-24 pb-12 border-t border-black/5 dark:border-white/5">
      <div className="max-w-[100rem] mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center mb-8">
            <img
              alt="Herambh Software"
              className="h-12 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida/ADBb0ujV4MN4Jt5ffMvYIKIfR59aJypSv83jKWs8t3ovONGtzL1IjJUbHAcEGB8NAtPzW1m2vkwt8ad2XiZ6u-YO3G_dQcSHQWrnKlIC6qA5M_Kslr8sMyFcZ5NZtbYHV5pO_YkRxHuOeVq4XR5SQRtJ1FyKC_8fxbD5md8ZsLCOUgE3sMMEfcBA6GrE7vfCUSG-BJDnUXf7mxSnQ8RclZrB8e0rmYvUgb0RtVdwFH7EEskUt0igLYIA5G-alR2dM1bR69RpB85mGgUdRQo"
            />
          </div>
          <p className="text-slate-500 dark:text-slate-500 font-body leading-relaxed mb-8">
            Defining the next era of enterprise software through precision engineering and vital innovation.
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
          <h5 className="text-slate-900 dark:text-white font-headline font-semibold mb-8">Solutions</h5>
          <ul className="space-y-4">
            <li>
              <Link href="/services" className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body">
                AI Automation
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body">
                Cloud Infrastructure
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body">
                Custom Development
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body">
                Digital Strategy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-slate-900 dark:text-white font-headline font-semibold mb-8">Company</h5>
          <ul className="space-y-4">
            <li>
              <Link href="/about" className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body">
                Support
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-slate-900 dark:text-white font-headline font-semibold mb-8">Legal</h5>
          <ul className="space-y-4">
            <li>
              <a href="#" className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="text-slate-500 dark:text-slate-500 hover:text-green-500 transition-colors font-body">
                Compliance
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-[90rem] mx-auto px-6 pt-8 border-t border-black/5 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 dark:text-slate-500 text-sm font-body">
          © 2024 Herambh Software Technologies & Solutions. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-slate-500 dark:text-slate-500 hover:text-green-500 text-sm font-body transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-slate-500 dark:text-slate-500 hover:text-green-500 text-sm font-body transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-slate-500 dark:text-slate-500 hover:text-green-500 text-sm font-body transition-colors">
            Careers
          </a>
          <a href="#" className="text-slate-500 dark:text-slate-500 hover:text-green-500 text-sm font-body transition-colors">
            Support
          </a>
        </div>
      </div>
    </footer>
  );
}

