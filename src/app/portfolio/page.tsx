import Link from "next/link";

export default function Portfolio() {
  return (
    <main className="pt-32 pb-24">
      {/* Hero Section */}
      <header className="max-w-[100rem] mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <span className="text-primary font-label text-xs tracking-widest uppercase mb-4 block">
              Our Work
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-white mb-6">
              Building products that create{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Lasting Impact
              </span>
            </h1>
          </div>
          <div className="pb-2">
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Explore a curated portfolio of digital products, enterprise
              platforms, AI-powered systems, and premium business websites
              designed to help brands grow, scale, and lead in their industries.
            </p>
          </div>
        </div>
      </header>

      {/* Portfolio Bento Grid */}
      <section className="max-w-[100rem] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Project Card 1: Large Featured */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-surface-container-low transition-all duration-500 hover:scale-[1.01]">
            <div className="aspect-[16/9] w-full relative">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNlmfn6VRALqmvTUXUutvo3zVo7LQEtf-wer1n-GZDgpdXSpOsezzaRGMM-_Z7nqu4vdtSvbUj_Q3IoFkgCAAmh-VDBvtQJ6kBR9y4VwFn3fNFkZOC1w_meTMMjahW00C61KxZC6PoL9wvJbWB3ioCPAOnOglpMn4ljIuARZK-P0ciFKnafwyS5eXgUlYWDPSTgxRRn9sbZHltFft1wdE-2AI6U99-5SnSiJBexQNfiVjelr_hqlvPIuT4TpDKi5T-kBUK93CxGrvN"
                alt="NeuralStream Pro"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
              <div>
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">
                  AI App
                </span>
                <h3 className="text-3xl font-bold text-white mb-2">
                  NeuralStream Pro
                </h3>
                <p className="text-slate-400 max-w-xs">
                  Real-time predictive analytics platform for global supply
                  chains.
                </p>
              </div>
              <button className="flex items-center gap-2 text-white bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl hover:bg-primary hover:text-on-primary transition-all group/btn">
                <span className="font-semibold">View Demo</span>
                <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>

          {/* Project Card 2: Medium Vertical */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-surface-container-low transition-all duration-500 hover:scale-[1.01]">
            <div className="aspect-[4/5] w-full relative">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNF2S_1JrT_6hBAeTNpcWVkzXMvy7rj1r7NX3e0JWJa-glz4G5RuXQQQSXjKdoXV8gwyBWcWyEMTinWAIWn41GZLBVaVNomNMAcRw8deB5dV2KZ9zC4VQM2wC79uZMZSPEJI-o24FRfvDdMhfFNMTWCDBrL_S6hNAHeQvR3LMu2STT3BvQgbYJqxkxadYZPrNijy9NohVIjJFMqWi8XcgM9CN0XEYMsefR7q1kJM2izeKqqXkiGl4gWXiY_tlrSOMZHpYDO-eXII1u"
                alt="Vault86"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-8">
              <span className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">
                Fintech
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">Vault86</h3>
              <p className="text-slate-400 text-sm">
                Next-gen asset management with biometrically secured cold
                storage.
              </p>
            </div>
          </div>

          {/* Project Card 3: Small Square */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-2xl bg-surface-container-low transition-all duration-500 hover:scale-[1.01]">
            <div className="aspect-square w-full relative">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrvm33IAEX11d4a7ofb9EW4SQBnGAf55JuzYaiJDWUZ9lzMkyenE9wgRjwptU811kdycYDJvneAffi-REZpgbt5BPIKL6R50RRyqy80xiIUJAIiFlMWnz9OVbLgYGLoEhzAvDhg7agdBn8-0hovrLOGONVfNiohaF4biGCtrmbdn_sI5HDUzfjD_Q3us3-Xgvw2UR5HVEGuCprRE5vmJwA95i4jsBXTiMiNskPZHaVtwrdXS_q-_VTYzKbB84N4c-n8OwEUkpyghoo"
                alt="Ethereal OS"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 inline-block">
                Web Platform
              </span>
              <h3 className="text-xl font-bold text-white">Ethereal OS</h3>
            </div>
          </div>

          {/* Project Card 4: Horizontal Rect */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-2xl bg-surface-container-low transition-all duration-500 hover:scale-[1.01]">
            <div className="aspect-[21/9] w-full relative">
              <img
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6X_pMdeVIDW-8N8yH7_HbZrDoxxvJemOg9W6z0LPENJzFn1wCllg62VWw0bATa8HbSFQAupYJ2CFhS-9rFcMnqjxPN3aR1oLTOElJaZ4pKg2YTwCe3LPemOZnrBuo_FrfgcQs6vq1tAHyx27Ak0aLJTSbS5KDPHQ6kiOYFyHhpsWI4KJnojJAYV1WdvFDiqidRi9CcI9nHTLmhsBPImxYNQytKqn41o026a0NmcaL63bYOH4iqvwFkICeqT_4i4TJTf5vS6LeXsCO"
                alt="Titan Cloud"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
              <div>
                <span className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 inline-block">
                  Infrastructure
                </span>
                <h3 className="text-2xl font-bold text-white">Titan Cloud</h3>
              </div>
              <button className="bg-white/5 border border-white/10 text-white p-3 rounded-full hover:bg-primary transition-colors">
                <span className="material-symbols-outlined">open_in_new</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-32 max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 border border-white/5 p-12 md:p-20 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 relative z-10 tracking-tight">
            Ready to build the <span className="text-primary italic">next</span>{" "}
            digital success story?
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto mb-12 text-lg relative z-10">
            Whether you're launching a startup, scaling an existing business, or
            transforming operations through technology, Herambh can help you
            bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/contact"
              className="bg-primary text-on-primary font-bold px-10 py-5 rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
            >
              Discuss your project
              <span className="material-symbols-outlined">forum</span>
            </Link>
            {/* <Link href="/" className="bg-white/5 backdrop-blur-md text-white font-bold px-10 py-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
              View Portfolio
            </Link> */}
          </div>
        </div>
      </section>
    </main>
  );
}
