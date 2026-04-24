import React from 'react';

export default function Compliance() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <div className="mb-12 border-b border-black/5 dark:border-white/5 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 font-headline">
          Compliance
        </h1>
        <p className="text-slate-600 dark:text-slate-400 font-body">
          Last updated: April 24, 2026
        </p>
      </div>
      <div className="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed font-body">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-headline">1. Commitment to Compliance</h2>
          <p>
            Herambh Software Technologies & Solutions is committed to conducting its business ethically, legally, and in compliance with all applicable laws, regulations, and industry standards. This compliance statement outlines our core principles and practices.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-headline">2. Data Protection and Privacy</h2>
          <p>
            We strictly adhere to data protection laws, ensuring that personal and corporate data collected during our operations is secured, processed lawfully, and never sold to third parties without explicit consent. We implement technical and organizational measures to safeguard information against unauthorized access, loss, or misuse.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-headline">3. Anti-Bribery and Corruption</h2>
          <p>
            We maintain a zero-tolerance policy towards bribery and corruption. Our employees, contractors, and partners are prohibited from offering, promising, giving, accepting, or soliciting any advantage as an inducement for an action which is illegal, unethical, or a breach of trust.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-headline">4. Security Standards</h2>
          <p>
            When delivering custom software, AI automation, and cloud infrastructure, we build secure-by-design architectures. We follow industry best practices for secure coding, vulnerability management, and infrastructure security to protect our clients' digital assets.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-headline">5. Intellectual Property Respect</h2>
          <p>
            We respect the intellectual property rights of others and ensure that all third-party software, libraries, and tools used in our projects are properly licensed and credited. We expect our clients and partners to do the same.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-headline">6. Reporting Violations</h2>
          <p>
            Any suspected violations of laws, regulations, or our internal compliance policies should be reported immediately. We protect whistleblowers from retaliation. For compliance-related inquiries, please contact us at: <a href="mailto:herambh.info@gmail.com" className="text-primary hover:underline font-semibold">herambh.info@gmail.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
