export default function About() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase">
              WHO WE ARE
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-headline leading-[1.1] tracking-tight text-white">
              Engineering the future of{" "}
              <span className="text-primary italic">modern business.</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Herambh Software Technologies & Solutions is a technology-driven
              company focused on building intelligent, scalable, and
              high-performance digital products. We combine deep technical
              expertise with business understanding to help startups,
              enterprises, and visionary founders create meaningful digital
              transformation.
            </p>
          </div>
          <div className="relative h-[420px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl self-center">
            <img
              alt="Digital Innovation"
              className="absolute inset-0 w-full h-full object-cover"
              src="https://img.freepik.com/free-photo/community-cloud-storage-sync-secure_53876-120425.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-dim/80 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Firm Identity */}
      <section className="py-24 relative overflow-hidden">
        {/* Background ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="px-6 max-w-[100rem] mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Our Story Block */}
            <div className="md:col-span-12 relative rounded-3xl overflow-hidden p-[1px] group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-primary/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative bg-surface-container/95 backdrop-blur-xl h-full w-full rounded-[23px] p-8 md:p-16">
                <div className="float-right w-1/2 ml-12 mb-8 mt-25">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative border border-white/10">
                    <img
                      alt="Abstract Tech Vision"
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                      src="/images/herambh_office_image.png"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white text-sm font-label uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Genesis
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold font-headline text-primary">
                    The Herambh Story
                  </h2>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    Every company starts with an idea. This one started with a
                    mindset — and a decision.
                  </p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    Not a decision backed by resources, connections, or a
                    ready-made path. But a decision to not settle for average.
                    To go beyond just writing code. And to build something that
                    actually matters.
                  </p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    From the very beginning, the focus was never just
                    development. It was understanding — how businesses operate,
                    how systems scale, and how the right technology can create
                    real, measurable impact. While many stayed at the surface,
                    we chose to go deeper — into architecture, strategy, and
                    execution.
                  </p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    That difference became the foundation.
                  </p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    The early days were simple, but not easy. No shortcuts. Just
                    curiosity, consistency, and relentless learning. Building,
                    experimenting, failing, improving — over and over again. Not
                    to chase perfection, but to build clarity.
                  </p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    Because clarity changes everything.
                  </p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    As that clarity grew, so did responsibility. Leading teams,
                    managing projects, and delivering real-world solutions
                    shifted our perspective entirely. It was no longer about
                    writing code — it was about building systems that perform,
                    scale, and deliver results.
                  </p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    And one principle became non-negotiable: Execution is
                    everything.
                  </p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    Ideas are everywhere. But the ability to turn them into
                    reliable, high-performance systems — that’s where real value
                    is created.
                  </p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    That realization led to a turning point. Instead of waiting
                    for opportunities, we chose to create them.
                  </p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    This firm was built with that intent. Not as just another
                    service provider, but as a problem-solving partner. A place
                    where strategy meets execution, and ideas are transformed
                    into scalable, future-ready systems.
                  </p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    Every project we take on is approached with precision —
                    combining business understanding, technical expertise, and
                    disciplined execution. Because building something that works
                    is not enough. It has to last, adapt, and lead.
                  </p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    We, At Herambh, don’t believe in generic work. <br />
                    We believe in clarity, precision, and long-term value.{" "}
                    <br />
                    We believe that great systems are engineered with purpose.
                  </p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    Today, the mission is simple — to build intelligent
                    solutions that help businesses grow, scale, and stay ahead
                    in a rapidly evolving world.
                  </p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    This is not just a business. <br />
                    It’s a commitment — to excellence, to impact, and to
                    building something that truly stands apart.
                  </p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    The journey is still in its early stages. <br />
                    But the vision is clear.
                  </p>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    And this is just the beginning.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Block */}
            <div className="md:col-span-5 bg-surface-container-low border border-white/5 rounded-3xl p-10 md:p-12 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-[0_0_40px_rgba(75,226,119,0.1)] h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none"></div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform duration-500">
                <span className="material-symbols-outlined text-primary text-3xl drop-shadow-[0_0_10px_rgba(75,226,119,0.5)]">
                  visibility
                </span>
              </div>
              <h2 className="text-3xl font-bold font-headline text-white mb-6">
                Our Vision
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed relative z-10">
                To become a trusted technology partner for businesses that want
                to innovate faster, scale smarter, and build digital experiences
                that create lasting impact.
              </p>
            </div>

            {/* Mission Block */}
            <div className="md:col-span-7 bg-surface-container border border-white/5 rounded-3xl p-10 md:p-12 relative overflow-hidden group flex flex-col justify-center hover:-translate-y-2 transition-transform duration-500 shadow-xl h-full">
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <h2 className="text-3xl font-bold font-headline text-white mb-10 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary group-hover:animate-pulse">
                    rocket_launch
                  </span>
                </div>
                Our Mission
              </h2>
              <ul className="space-y-6 relative z-10">
                <li className="flex items-start gap-5 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-highest border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-primary group-hover/item:bg-primary/10 transition-colors duration-300 shadow-inner">
                    <span className="material-symbols-outlined text-primary text-lg group-hover/item:scale-110 transition-transform">
                      architecture
                    </span>
                  </div>
                  <span className="text-slate-300 text-lg leading-relaxed pt-2">
                    Build scalable digital products that align technology with
                    business goals.
                  </span>
                </li>
                <li className="flex items-start gap-5 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-highest border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-primary group-hover/item:bg-primary/10 transition-colors duration-300 shadow-inner">
                    <span className="material-symbols-outlined text-primary text-lg group-hover/item:scale-110 transition-transform">
                      language
                    </span>
                  </div>
                  <span className="text-slate-300 text-lg leading-relaxed pt-2">
                    Help companies leverage AI, automation, and modern platforms
                    to improve efficiency and growth.
                  </span>
                </li>
                <li className="flex items-start gap-5 group/item">
                  <div className="w-12 h-12 rounded-2xl bg-surface-container-highest border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-primary group-hover/item:bg-primary/10 transition-colors duration-300 shadow-inner">
                    <span className="material-symbols-outlined text-primary text-lg group-hover/item:scale-110 transition-transform">
                      shield_lock
                    </span>
                  </div>
                  <span className="text-slate-300 text-lg leading-relaxed pt-2">
                    Deliver reliable, secure, and future-ready systems without
                    compromising on user experience or performance.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="px-6 py-24 max-w-[100rem] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-headline text-white">
            Leadership
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
            The visionary engineering the future behind Herambh.
          </p>
        </div>

        <div className="bg-surface-container-low/50 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/5 flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          {/* Image */}
          <div className="w-full md:w-2/5 aspect-[4/5] rounded-2xl overflow-hidden bg-surface-container relative shrink-0 group border border-white/10">
            <img
              alt="Vedant Golegaonkar"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2BBuJn9bjeyj2TrFekBJcha8XwsnlFaaOTFh3kgKmcqYdcGP9lfncpnvqkG5W4xylfTL7LLOuqZ8Zq4zhqCq9qwrKOIKdtoy9Tp3_lwzjAy2DZ9eyQUYRp9hip-hrqDnQKCy_25-It4OMJZE0YkJZNl07j9lYqNC3SnXucWc5AmLc8Q7jq41cXEhkmORCHN5Cx5f4QXMtSnvzfXGgPO-6EP1BxI7Fp9ZtB2GyHM182cwYfsdG7rYZq6fjie_3bW_LPq27LY4o9rzA"
            />
            <div className="absolute inset-0 border-2 border-white/5 rounded-2xl pointer-events-none"></div>
          </div>

          {/* Description */}
          <div className="w-full md:w-3/5">
            <div className="mb-8">
              <h3 className="text-4xl md:text-5xl font-bold font-headline text-white mb-3">
                Vedant Golegaonkar
              </h3>
              <p className="text-primary font-bold tracking-widest uppercase text-sm inline-block px-4 py-1.5 bg-primary/10 rounded-full">
                Founder & CEO
              </p>
            </div>

            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Vedant is driven by a simple belief — that meaningful work is
                built through consistency, curiosity, and the courage to think
                bigger.
              </p>
              <p>
                His journey began with a deep interest in technology, but over
                time, that passion grew into something much larger. He became
                fascinated not just by building products, but by understanding
                how systems work, how businesses grow, and how the right
                decisions can create lasting impact.
              </p>
              <p>
                What sets Vedant apart is his mindset. He is not satisfied with
                surface-level solutions or short-term thinking. He believes in
                going deeper, learning continuously, and approaching every
                challenge with clarity and intent.
              </p>
              <p>
                For him, success is not just about building projects — it is
                about building trust, creating value, and becoming someone who
                can lead, innovate, and make a difference.
              </p>
              <p>
                His vision is to keep growing, keep learning, and build
                something that reflects excellence, ambition, and purpose in
                everything he does.
              </p>
            </div>

            <div className="mt-12 flex gap-4">
              <a
                href="https://linkedin.com/in/vedantgolegaonkar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-slate-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="mailto:golegaonkarvedant92@gmail.com"
                target="_blank"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all text-slate-400"
              >
                <span className="material-symbols-outlined text-xl">mail</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      {/* <section className="bg-surface-container-low py-24">
        <div className="px-6 max-w-[100rem] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-bold font-headline text-white">
                What our clients say
              </h2>
              <p className="text-slate-400 mt-4 text-lg">
                Voices from the companies we've transformed.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary hover:text-primary transition-colors">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary hover:text-primary transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container p-10 rounded-xl border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-primary mb-6 relative z-10">
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  format_quote
                </span>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 italic relative z-10">
                "Herambh didn't just build us a platform; they built us a
                future. The level of precision in their code is something we've
                rarely seen."
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-white/10"></div>
                <div>
                  <p className="font-bold text-white">David Chen</p>
                  <p className="text-sm text-slate-400">CEO, Nexus Dynamics</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container p-10 rounded-xl border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-primary mb-6 relative z-10">
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  format_quote
                </span>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 italic relative z-10">
                "Their approach to architectural design is editorial-grade. They
                simplified our most complex workflows into something intuitive."
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-white/10"></div>
                <div>
                  <p className="font-bold text-white">Elena Rodriguez</p>
                  <p className="text-sm text-slate-400">
                    VP of Engineering, CloudScale
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container p-10 rounded-xl border border-white/5 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="text-primary mb-6 relative z-10">
                <span
                  className="material-symbols-outlined text-4xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  format_quote
                </span>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 italic relative z-10">
                "Working with Herambh was the best strategic decision we made
                this year. They are true masters of Precision Vitality."
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-white/10"></div>
                <div>
                  <p className="font-bold text-white">Mark Thompson</p>
                  <p className="text-sm text-slate-400">
                    Founder, Velocity Labs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
