import React from 'react';
import { AtSign, MapPin, ChevronDown } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {

  return (
    <main className="pt-28 md:pt-36 pb-16 md:pb-24 px-6 max-w-[100rem] mx-auto">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
        <div className="lg:col-span-7">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-label tracking-widest uppercase mb-6">
            START THE CONVERSATION
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1]">
            Let's build your next <span className="text-primary">competitive advantage.</span>{" "}
          </h1>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl mb-12">
            Whether you're launching a new product, modernizing an 
            existing platform, or exploring AI and automation, our 
            team is ready to help you build technology that creates 
            real business impact.
          </p>

          {/* Contact Info Bento */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-8 rounded-2xl group hover:bg-surface-container transition-colors">
              <AtSign className="text-primary mb-4 text-3xl" />
              <h3 className="text-slate-900 dark:text-white font-semibold mb-2">Email Us</h3>
              <a href="mailto:herambh.info@gmail.com" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant text-sm hover:text-primary transition-colors block">
                herambh.info@gmail.com
              </a>
              <a href="mailto:herambh.support@gmail.com" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant text-sm hover:text-primary transition-colors block">
                herambh.support@gmail.com
              </a>
              <a href="mailto:herambh.tech.team@gmail.com" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant text-sm hover:text-primary transition-colors block">
                herambh.tech.team@gmail.com
              </a>
            </div>
            <div className="bg-surface-container-low p-8 rounded-2xl group hover:bg-surface-container transition-colors">
              <MapPin className="text-primary mb-4 text-3xl" />
              <h3 className="text-slate-900 dark:text-white font-semibold mb-2">Office</h3>
              {/* <p className="text-on-surface-variant text-sm">
                Shivaji Nagar
              </p> */}
              <p className="text-on-surface-variant text-sm">
                Chh. Sambhaji Nagar, Maharashtra - 431005
              </p>
            </div>
          </div>
        </div>

        {/* Modern Contact Form */}
        <div className="lg:col-span-5">
          <div className="bg-surface-container-high p-8 md:p-10 rounded-2xl shadow-2xl border border-black/5 dark:border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl -mr-16 -mt-16 rounded-full"></div>
              <ContactForm />
          </div>
        </div>
      </div>

      {/* What Happens Next Section */}
      <section className="mt-32">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Our process
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            What to expect after you reach out.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="relative group">
            <div className="text-6xl font-extrabold text-slate-700 dark:text-white/5 absolute -top-10 -left-2 group-hover:text-primary/10 transition-colors">
              01
            </div>
            <div className="relative pt-4">
              <h4 className="text-slate-900 dark:text-white font-bold mb-3">Initial Review</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We review your requirements, business objectives, 
                and technical needs to understand the right direction.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="text-6xl font-extrabold text-slate-700 dark:text-white/5 absolute -top-10 -left-2 group-hover:text-primary/10 transition-colors">
              02
            </div>
            <div className="relative pt-4">
              <h4 className="text-slate-900 dark:text-white font-bold mb-3">Strategy Call</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Our team schedules a focused discussion to align 
                on goals, priorities, scope, and technology.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="text-6xl font-extrabold text-slate-700 dark:text-white/5 absolute -top-10 -left-2 group-hover:text-primary/10 transition-colors">
              03
            </div>
            <div className="relative pt-4">
              <h4 className="text-slate-900 dark:text-white font-bold mb-3">Proposal & Roadmap</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                You receive a clear project roadmap, estimated 
                timelines, technical recommendations, and commercial proposal.
              </p>
            </div>
          </div>
          <div className="relative group">
            <div className="text-6xl font-extrabold text-slate-700 dark:text-white/5 absolute -top-10 -left-2 group-hover:text-primary/10 transition-colors">
              04
            </div>
            <div className="relative pt-4">
              <h4 className="text-slate-900 dark:text-white font-bold mb-3">Execution Begins</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Once approved, we begin planning, design, and development 
                with a structured execution process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-24 md:mt-40 max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-primary/20"></div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Common Inquiries</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-primary/20"></div>
        </div>
        <div className="space-y-4">
          <details className="group bg-surface-container-low rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer select-none">
              <h3 className="text-slate-900 dark:text-white font-medium">
                How soon can we start a project?
              </h3>
              <ChevronDown className="text-slate-500 dark:text-slate-500 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed">
              Most projects can begin within a few business days after 
              the discovery call, depending on scope, timelines, and 
              resource availability.
            </div>
          </details>
          <details className="group bg-surface-container-low rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer select-none">
              <h3 className="text-slate-900 dark:text-white font-medium">
                Do you provide support after project delivery?
              </h3>
              <ChevronDown className="text-slate-500 dark:text-slate-500 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed">
              Yes. We provide tiered support and maintenance packages ensuring
              your software stays performant, secure, and compatible with
              evolving platform standards.
            </div>
          </details>
          <details className="group bg-surface-container-low rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer select-none">
              <h3 className="text-slate-900 dark:text-white font-medium">
                Can you work with our internal team?
              </h3>
              <ChevronDown className="text-slate-500 dark:text-slate-500 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6 text-on-surface-variant text-sm leading-relaxed">
              Absolutely. We can collaborate with your in-house designers, 
              developers, and business teams to accelerate delivery and 
              strengthen execution.
            </div>
          </details>
        </div>
      </section>

      {/* Map Placeholder */}
      {/* <div className="mt-40 h-[400px] w-full rounded-2xl overflow-hidden grayscale contrast-125 brightness-50 border border-black/5 dark:border-white/5 relative group">
        <img
          alt="Location Map"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5lpngnsU0ydNkpGGtZaBMRJ55schneb58hwzHRHGXgzTw-P9S2J4lthjCz5cssxgsgUk84BebHVjE-N9cmLBbJKWJrKRyKIGtaHzW2YfqmFa0PQE-s8KXLc3CoWdZ0SOAXFOhi9iQVyvU3jQ6okQ5y0QlpNmKzha3e3qyKl440MqrDbS541U9V3PCPMqtwuWJ0fBn31bp7Uc3IWeHM57iQlMHmCB9bHWa_gvnzMyqF6IgVY-72fANnTmpb0cE1tIl5Otl8DF2q_bA"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
        <div className="absolute bottom-8 left-8 bg-surface-container-highest/80 backdrop-blur-md p-6 rounded-xl border border-black/10 dark:border-white/10">
          <p className="text-xs font-label uppercase text-primary mb-1">
            Global HQ
          </p>
          <p className="text-slate-900 dark:text-white font-bold">
            101 Innovation Dr, San Jose, CA
          </p>
          <a
            className="text-primary text-xs font-medium hover:underline mt-2 inline-block"
            href="#"
          >
            Open in Maps
          </a>
        </div>
      </div> */}
    </main>
  );
}
