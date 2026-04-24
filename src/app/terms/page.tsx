import React from 'react';

export default function TermsOfService() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <div className="mb-12 border-b border-black/5 dark:border-white/5 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 font-headline">
          Terms of Service
        </h1>
        <p className="text-slate-600 dark:text-slate-400 font-body">
          Last updated: April 24, 2026
        </p>
      </div>
      <div className="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed font-body">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-headline">1. Agreement to Terms</h2>
          <p>
            By accessing or using the services provided by Herambh Software Technologies & Solutions, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-headline">2. Services Rendered</h2>
          <p>
            Herambh Software Technologies & Solutions provides custom software development, digital strategy, cloud infrastructure, and AI automation services. The specific scope, deliverables, timelines, and fees for any project will be outlined in a separate Statement of Work (SOW) or formal agreement.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-headline">3. Intellectual Property</h2>
          <p>
            The service and its original content, features, and functionality are and will remain the exclusive property of Herambh Software Technologies & Solutions and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Herambh Software.
          </p>
          <p className="mt-4">
            Upon full payment for custom development services as outlined in the applicable SOW, intellectual property rights for the developed deliverables will be transferred to the client, subject to any retained rights in pre-existing materials or third-party components.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-headline">4. Termination</h2>
          <p>
            We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will cease immediately.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-headline">5. Limitation of Liability</h2>
          <p>
            In no event shall Herambh Software Technologies & Solutions, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-headline">6. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will try to provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </section>
      </div>
    </main>
  );
}
