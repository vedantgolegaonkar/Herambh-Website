import { Microscope, Lightbulb, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <header className="relative pt-12 pb-24 lg:pt-28 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-20%,#004b1e44,transparent_50%)]"></div>
        <div className="max-w-[100rem] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary text-[10px] font-bold uppercase tracking-widest font-label">
                BUILDING SOFTWARE THAT MOVES BUSINESSES FORWARD
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-headline leading-[1.1] mb-8 tracking-tight">
              Technology That Solves. <br />
              <span className="text-gradient">Systems That Scale.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed font-body">
              <span className="text-primary font-medium">
                Herambh Software Technologies and Solutions
              </span>{" "}
              helps startups, enterprises, and growing businesses build{" "}
              <span className="text-on-surface font-medium">
                high-performance digital products.
              </span>{" "}
              From custom{" "}
              <span className="text-on-surface font-medium">
                software and AI automation
              </span>{" "}
              to{" "}
              <span className="text-on-surface font-medium">
                scalable web platforms and mobile apps
              </span>
              , we create solutions designed for long-term growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact"
                className="inline-block primary-gradient text-primary px-10 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_#4be2774d]"
              >
                Start Your Project
              </Link>
              <Link href="/portfolio"
                className="inline-block bg-surface-container-high text-on-surface px-10 py-4 rounded-2xl text-lg font-bold hover:bg-surface-container-highest transition-colors border border-white/5"
              >
                Explore Our Work
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/5 bg-surface-container-low p-2">
              <img
                alt="Software Development"
                className="rounded-xl w-full h-[500px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt56rU0e_f0o-pMQK9d_Ql4ejWRqE6_bjb7D3EdjrpGf7LzTsNS1qlzgFEYWvfRRWVFo92n-KWJgnBIuaHzSfM_97C4bBwtvl1HNpwLYQKis-8wB8rxQJjuSWDo8JKnGrK_0fIMy2sDJ8G_z_Ej4OuE8iBbE3YWg3dpdb5r-l-9CRV4MRzRiY9uOxnKFHzEX7bm2SzwIkCv3UL8w9a-Mz1bk8-0166Fu1WDGqQiuXfUySKhRmO0nBrQ1So5Sp0AxMN6KQXBGMsfdRb"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-secondary-container/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </header>

      {/* Value Prop / Bento Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] font-label mb-4">
              WHY HERAMBH
            </h2>
            <h3 className="text-4xl font-bold font-headline">
              Built with Precision. Designed for Growth.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-high p-10 rounded-2xl group hover:scale-[1.02] transition-all duration-300 border border-white/5">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform">
                <Microscope className="text-3xl" />
              </div>
              <h4 className="text-2xl font-bold font-headline mb-4">
                Strategic Execution
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                Every solution is planned with business goals in mind, ensuring
                that design, development, and deployment all work together to
                create measurable impact.
              </p>
            </div>

            <div className="bg-surface-container-high p-10 rounded-2xl group hover:scale-[1.02] transition-all duration-300 border border-white/5">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform">
                <Lightbulb className="text-3xl" />
              </div>
              <h4 className="text-2xl font-bold font-headline mb-4">
                Modern Innovation
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                We combine emerging technologies, AI capabilities, and modern
                frameworks to build digital products that stay ahead of the
                market.
              </p>
            </div>

            <div className="bg-surface-container-high p-10 rounded-2xl group hover:scale-[1.02] transition-all duration-300 border border-white/5">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 text-primary group-hover:scale-110 transition-transform">
                <TrendingUp className="text-3xl" />
              </div>
              <h4 className="text-2xl font-bold font-headline mb-4">
                Scalable Foundations
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                From MVPs to enterprise-grade platforms, we build systems that
                are reliable, flexible, and ready to grow with your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] font-label mb-4">
                CORE OFFERINGS
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold font-headline leading-tight">
                Digital solutions tailored for ambitious businesses.
              </h3>
            </div>
            <Link href="/services"
              className="flex items-center gap-2 text-primary font-bold group"
            >
              View All Services
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative aspect-square bg-surface-container rounded-2xl overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-7bR1y1559PmABvEN784ZBt141HDiaq38X28agBpXswKxsfjYcsee1XbW-Dr88E5JhzYsNc1vQN914KzRQrL0s9DfvVnAaJPTU5RmmXJUKDANRSi-68KHBjE63TVtUwHOSIXdd-b4VwBy2FV7gjR9PKwl1lBwNRbsPLfufwbN2KwWOLUgFJrMkCn93yVHT6UmFN5DxdudRimQk5jx9YDlZnIk9t1zus8fBbkpWwJXkC4m_PfnQnHnntDIrIj_w8rUaTEgsu43kMq6"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent"></div>
              <div className="absolute bottom-0 p-8">
                <span className="text-primary-fixed-dim font-label text-xs uppercase tracking-widest mb-2 block">
                  SMART AUTOMATION
                </span>
                <h4 className="text-xl font-bold font-headline">
                  AI-Powered Workflows
                </h4>
                <p className="text-on-surface-variant pt-9">
                  Automate repetitive tasks, optimize operations, and improve
                  decision-making with intelligent business automation.
                </p>
              </div>
            </div>
            <div className="group relative aspect-square bg-surface-container rounded-2xl overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDITqKAaiIKkDxV6sXJf4PLPANQvqRbqPUBk1uZp21bNwMiRZp2yw59NFv5ulgOEcyKIJUhgllPkg74ybZYJ6I5FCM1BFzE1ANBvx482ueHx6gkVJEJo6VckKBdc9LcRqt9jsyLAji1mCy3lGq4DOF0YJDC2utpkbQGnW3OaiPdscf8hnJlxXRd0exHp0zWOnzRTX08xh9022I39lLl3WVHqxFuDcU0UEtTRmweLKRAPdsgXN81VzrErWvY54CJXfuwqEchSHrQqaSR"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent"></div>
              <div className="absolute bottom-0 p-8">
                <span className="text-primary-fixed-dim font-label text-xs uppercase tracking-widest mb-2 block">
                  CROSS-PLATFORM
                </span>
                <h4 className="text-xl font-bold font-headline">
                  Mobile Applications
                </h4>
                <p className="text-on-surface-variant pt-15">
                  Build seamless Android and iOS experiences with scalable,
                  high-performance mobile applications.
                </p>
              </div>
            </div>
            <div className="group relative aspect-square bg-surface-container rounded-2xl overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIsZxLQD69-FvmvAZj3kTB47n-RvpLkYXgSCzZraBmhVOhc8yuHzi6URVSK9xE7tXrv_ZkpruzyM7APXrmXFtdN5PVEg1AsjEE3MTvoBVprxmG9nuU83YGv2Cxi5DxTXtbrwIOJguobVHc79mq-tchXBfHpUSRKxCikooilq1rTlnBoYmGJHZj7g64GZL0oSpXWoDG1SoU1xR50KxdbavdamrABHMSJGdEb1L2LHMNVegpLq8BxOKtz_sq59lohdn0UutbC8IVKZl9"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent"></div>
              <div className="absolute bottom-0 p-8">
                <span className="text-primary-fixed-dim font-label text-xs uppercase tracking-widest mb-2 block">
                  WEB DEVELOPMENT
                </span>
                <h4 className="text-xl font-bold font-headline">
                  Custom Web Platforms
                </h4>
                <p className="text-on-surface-variant pt-15">
                  From business websites to enterprise dashboards, we develop
                  secure and scalable web ecosystems.
                </p>
              </div>
            </div>
            <div className="group relative aspect-square bg-surface-container rounded-2xl overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-500"
                src="/images/ai_agent.png"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-transparent to-transparent"></div>
              <div className="absolute bottom-0 p-8">
                <span className="text-primary-fixed-dim font-label text-xs uppercase tracking-widest mb-2 block">
                  INTELLIGENT SYSTEMS
                </span>
                <h4 className="text-xl font-bold font-headline">
                  AI Agents & Integrations
                </h4>
                <p className="text-on-surface-variant pt-10">
                  Deploy AI-driven assistants, chat systems, and smart
                  integrations that improve customer experience and internal
                  workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief About Section */}
      <section className="py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-[100rem] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="asymmetric-shape bg-surface-container-high h-[400px] w-full rounded-2xl overflow-hidden relative border border-white/5">
                <img
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-60"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBur0pyhb4pPfIj9uKScoM6SkoOrn65O79qOKRIC1OMbPJ2abSjT4Pr638ZpKHN6kot2SHYLFDedd6QHlLJCh4MAnK_NEB3MElvo4ZN-5SVrnEzMkeR8nRRGL-Z3U9uOvudrkzRIzlOnti0jd1L3dKl5lYfZvUtqnlTAikPmcVeX2msJWakyeOkJwalWy_KwSSdyWHJXOlUsHGee173L3bVsl3JNVTrbFTZwZZqCypd5Oht1HTYyMy6a44SWomodX7XorUKqN4tS2tW"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl shadow-xl">
                <span className="text-on-primary font-bold text-4xl block font-headline">
                  5+
                </span>
                <span className="text-on-primary text-xs uppercase font-label tracking-widest">
                  Years Combined
                  <br />
                  Experience
                </span>
              </div>
            </div>
            <div>
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] font-label mb-4">
                Behind the Code
              </h2>
              <h3 className="text-4xl font-bold font-headline mb-8">
                Driven by business. Powered by technology.
              </h3>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                <span className="text-primary font-bold">
                  Herambh Software Technologies & Solutions
                </span>{" "}
                was founded with a simple belief — technology should not just
                look impressive, it should solve real business problems.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
                We work with startups, founders, and established companies to
                design and develop digital products that are modern, scalable,
                and built with long-term vision. Every project is approached
                with a balance of business strategy, technical expertise, and
                user-focused design.
              </p>
              <Link href="/about"
                className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-xl font-bold transition-colors border border-white/10 group"
              >
                Discover Our Story
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
