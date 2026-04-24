import { ChevronsDown, CodeXml, Package, Bot, Globe, MonitorSmartphone, Images, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <main className="pt-12 md:pt-16 pb-24 px-6 max-w-[100rem] mx-auto">
      {/* Hero Section */}
      <header className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-label uppercase tracking-widest mb-6">
            Our Expertise
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight text-slate-900 dark:text-white leading-tight mb-8">
            Premium digital solutions for ambitious businesses.{" "}
            <span className="text-primary italic">Built to Scale</span>
          </h1>
          <p className="text-body-lg text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            We partner with startups, enterprises, and visionary founders to
            design, build, and scale digital products that create real business
            impact. From custom software and AI automation to mobile apps and
            enterprise platforms, every solution is engineered for performance,
            reliability, and long-term growth.
          </p>
        </div>
        <div className="hidden md:flex w-32 h-32 rounded-full border border-primary/20 items-center justify-center animate-pulse">
          <ChevronsDown className="text-primary text-4xl" />
        </div>
      </header>

      {/* Services Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
        {/* Software Development */}
        <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low p-8 rounded-xl hover:scale-[1.01] transition-all duration-300">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <CodeXml className="text-9xl" />
          </div>
          <div className="relative z-10">
            <CodeXml className="text-primary text-4xl mb-6" />
            <h3 className="text-2xl font-headline font-semibold text-slate-900 dark:text-white mb-4">
              Custom Software Development
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
              Tailored software solutions built around your business processes,
              operational requirements, and long-term vision. From internal
              platforms to enterprise-grade systems, we engineer products that
              deliver performance at scale.
            </p>
          </div>
        </div>

        {/* Product Development */}
        <div className="md:col-span-4 bg-surface-container-high p-8 rounded-xl hover:scale-[1.02] transition-all duration-300">
          <Package className="text-primary text-4xl mb-6" />
          <h3 className="text-2xl font-headline font-semibold text-slate-900 dark:text-white mb-4">
            Product Strategy & Development
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            From idea validation to product launch, we help transform concepts
            into market-ready digital products through strategic planning, user
            experience design, and agile development.
          </p>
        </div>

        {/* AI Automation & Agentic AI (Merged High-Tech Block) */}
        <div className="md:col-span-4 vitality-gradient p-8 rounded-xl shadow-2xl shadow-primary/20">
          <Bot className="text-slate-900 dark:text-white text-4xl mb-6" />
          <h3 className="text-2xl font-headline font-semibold text-slate-900 dark:text-white mb-4">
            AI Automation & Intelligent Systems
          </h3>
          <p className="text-on-primary/80 leading-relaxed">
            Automate repetitive workflows, streamline business operations, and
            unlock new efficiencies through AI-driven systems, intelligent
            agents, and smart business integrations.
          </p>
          <div className="mt-8 flex gap-2">
            <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-white/10 text-slate-900 dark:text-white text-[10px] font-label uppercase">
              AI Workflows
            </span>
            <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-white/10 text-slate-900 dark:text-white text-[10px] font-label uppercase">
              LLM Integration
            </span>
            <span className="px-3 py-1 rounded-full bg-black/10 dark:bg-white/10 text-slate-900 dark:text-white text-[10px] font-label uppercase">
              Business Automation
            </span>
          </div>
        </div>

        {/* Website Building/Design */}
        <div className="md:col-span-4 bg-surface-container-low p-8 rounded-xl hover:scale-[1.02] transition-all duration-300 border-t border-black/5 dark:border-white/5">
          <Globe className="text-primary text-4xl mb-6" />
          <h3 className="text-2xl font-headline font-semibold text-slate-900 dark:text-white mb-4">
            Website Design & Development
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            High-end websites built to elevate your brand, communicate your
            value, and drive conversions. We create visually refined experiences
            backed by strong performance and modern development standards.
          </p>
        </div>

        {/* Web/Mobile Applications */}
        <div className="md:col-span-4 bg-surface-container-high p-8 rounded-xl hover:scale-[1.02] transition-all duration-300">
          <MonitorSmartphone className="text-primary text-4xl mb-6" />
          <h3 className="text-2xl font-headline font-semibold text-slate-900 dark:text-white mb-4">
            Web & Mobile Application Development
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Scalable applications for web, Android, and iOS built with
            performance, usability, and long-term maintainability in mind.
          </p>
        </div>

        {/* Portfolio Websites */}
        <div className="md:col-span-12 group relative overflow-hidden bg-surface-container-low h-64 rounded-xl flex items-center p-12 border border-black/5 dark:border-white/5">
          <div className="absolute inset-0 z-0">
            <img
              alt="Portfolio Display"
              className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdPctX8wU1my0SE2xD5dJpHylqj_v1FwGbIhwdNaOXWBgyKMnPkwJ7UUY-JiLOchKhzoensItQ2DKR4m2afAo_MFXaiqbtGhDtn2fVB5EWlXpra0-EScYSoFoom_KXDbdZD_72jFeCl34y1oEzxh-wTPdSy_vG9KF9kirWjrVDrblw2Tn1w14EsSEtFHGkhTPbRqhqUtxA1vcsNhfu3HEKul92sxT2lZftb2AWlZRY_x1KlPks0TsvoEfgcZHAqRwFtNskFHMtM10f"
            />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 w-full p-8 rounded-xl bg-surface-container/60 backdrop-blur-md border border-black/10 dark:border-white/10">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <Images className="text-primary text-4xl" />
                <h3 className="text-3xl font-headline font-bold text-slate-900 dark:text-white">
                  Portfolio & Business Websites
                </h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 max-w-2xl text-lg leading-relaxed">
                Premium websites designed for founders, professionals, agencies,
                and growing brands that want to establish a stronger digital
                presence.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link href="/portfolio"
                className="group flex items-center gap-3 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 text-slate-900 dark:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
              >
                Explore Portfolio
                <ArrowRight className="text-primary transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-headline font-bold text-slate-900 dark:text-white mb-4">
            How we work
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Step 1 */}
          <div className="bg-surface-container p-8 rounded-xl relative">
            <div className="text-7xl font-headline font-extrabold text-slate-900 dark:text-white/5 absolute -top-4 -left-2 select-none">
              01
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Discovery
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We begin by understanding your business, objectives, audience,
                and challenges to identify the right technical direction.
              </p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="bg-surface-container-low p-8 rounded-xl relative mt-8 md:mt-12">
            <div className="text-7xl font-headline font-extrabold text-slate-900 dark:text-white/5 absolute -top-4 -left-2 select-none">
              02
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Strategy & Architecture
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Our team defines the product roadmap, system architecture, and
                user experience strategy to ensure every decision supports
                long-term scalability.
              </p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="bg-surface-container p-8 rounded-xl relative">
            <div className="text-7xl font-headline font-extrabold text-slate-900 dark:text-white/5 absolute -top-4 -left-2 select-none">
              03
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Design & Development
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We design, build, and refine your product using modern
                technologies, agile execution, and continuous feedback.
              </p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="bg-surface-container-low p-8 rounded-xl relative mt-8 md:mt-12">
            <div className="text-7xl font-headline font-extrabold text-slate-900 dark:text-white/5 absolute -top-4 -left-2 select-none">
              04
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                Launch & Growth
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                After deployment, we continue optimizing, scaling, and
                supporting your product to ensure it keeps delivering value as
                your business grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-24 rounded-2xl overflow-hidden relative">
        <div className="absolute inset-0 vitality-gradient opacity-10"></div>
        <div className="bg-surface-container-high p-12 md:p-20 text-center relative z-10 border border-black/5 dark:border-white/5">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-slate-900 dark:text-white mb-6">
            Ready to build something exceptional?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-10 text-lg">
            Let's discuss how Herambh can help you create scalable digital
            products, intelligent systems, and technology that drives business
            growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact"
              className="vitality-gradient px-10 py-4 rounded-full text-slate-900 dark:text-white font-bold text-lg hover:scale-105 transition-transform inline-flex items-center justify-center"
            >
              Schedule a Call
            </Link>
            <Link href="/portfolio"
              className="bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/10 dark:border-white/10 px-10 py-4 rounded-full text-slate-900 dark:text-white font-bold text-lg transition-colors flex items-center justify-center"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
