import { ArrowRight, ExternalLink, MessageSquare } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Toronto Clean",
    category: "Web Platform",
    description: "Reliable, spotless, and professional cleaning services for residential and commercial spaces in Toronto.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop", 
    link: "https://toronto-clean.vercel.app",
    span: "md:col-span-8",
    aspect: "aspect-[16/9]"
  },
  {
    id: 2,
    title: "Dry Grab",
    category: "Web Platform",
    description: "Premium, ready-to-eat sprouted-legume snack brand founded by fitness enthusiasts. Travel-ready protein.",
    image: "/dry-grab-thumbnail.png",
    link: "https://dry-grab.vercel.app",
    span: "md:col-span-4",
    aspect: "aspect-[4/5]"
  },
  {
    id: 3,
    title: "Avaneesh Buildcare",
    category: "Web Platform",
    description: "Construction, specialty chemicals and waterproofing under one accountable team in Nagpur.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", 
    link: "https://avaneesh-buildcare.vercel.app",
    span: "md:col-span-4",
    aspect: "aspect-square"
  },
  {
    id: 4,
    title: "Max Care Pain Clinic",
    category: "Web Platform",
    description: "A multi-page website for Maxcare Pain Clinic, offering professional pain management services.",
    image: "/maxcare-thumbnail.png", 
    link: "https://maxcare-final.netlify.app/",
    span: "md:col-span-8",
    aspect: "aspect-[21/9]"
  },
  {
    id: 5,
    title: "Prahlad Maharaj Upasana",
    category: "Mobile Application",
    description: "Prahlad Maharaj Upasana Application - Community project.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop", 
    link: "https://play.google.com/store/apps/details?id=com.ramdasibana",
    span: "md:col-span-12",
    aspect: "aspect-[21/9]"
  }
];

export default function Portfolio() {
  return (
    <main className="pt-28 md:pt-32 pb-16 md:pb-24">
      {/* Hero Section */}
      <header className="max-w-[100rem] mx-auto px-6 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <span className="text-primary font-label text-xs tracking-widest uppercase mb-4 block">
              Our Work
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight text-slate-900 dark:text-white mb-6">
              Building products that create{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Lasting Impact
              </span>
            </h1>
          </div>
          <div className="pb-2">
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md">
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
          {projects.map((project) => (
            <div
              key={project.id}
              className={`${project.span} group relative overflow-hidden rounded-2xl bg-surface-container-low transition-all duration-500 hover:scale-[1.01]`}
            >
              <div className={`${project.aspect} w-full relative`}>
                <img
                  className="w-full h-full object-cover"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                  <span className="bg-primary/10 text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-200 dark:text-slate-300 max-w-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex shrink-0 items-center gap-2 text-slate-900 dark:text-white bg-black/10 dark:bg-white/10 backdrop-blur-md px-6 py-3 rounded-xl hover:bg-primary hover:text-on-primary transition-all group/btn"
                  >
                    <span className="font-semibold">Visit Site</span>
                    <ExternalLink className="text-sm group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-20 md:mt-32 max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 border border-black/5 dark:border-white/5 p-12 md:p-20 text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-8 relative z-10 tracking-tight">
            Ready to build the <span className="text-primary italic">next</span>{" "}
            digital success story?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-12 text-lg relative z-10">
            Whether you're launching a startup, scaling an existing business, or
            transforming operations through technology, Herambh can help you
            bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href="/contact"
              className="bg-primary text-on-primary font-bold px-10 py-5 rounded-2xl hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
            >
              Discuss your project
              <MessageSquare className="" />
            </Link>
            {/* <Link href="/" className="bg-black/5 dark:bg-white/5 backdrop-blur-md text-slate-900 dark:text-white font-bold px-10 py-5 rounded-2xl border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-all">
              View Portfolio
            </Link> */}
          </div>
        </div>
      </section>
    </main>
  );
}
