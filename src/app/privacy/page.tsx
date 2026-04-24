import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="pt-32 pb-24 px-6 max-w-4xl mx-auto">
      <div className="mb-12 border-b border-black/5 dark:border-white/5 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 font-headline">
          Privacy Policy
        </h1>
        <p className="text-slate-600 dark:text-slate-400 font-body">
          Last updated: April 24, 2026
        </p>
      </div>
      <div className="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed font-body">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-headline">1. Information Collection</h2>
          <p>
            We collect information that you provide directly to us when you use our services, fill out a contact form, request customer support, or otherwise communicate with us. This may include your name, email address, phone number, company details, and any other information you choose to provide.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-headline">2. Use of Information</h2>
          <p>
            We use the information we collect to provide, maintain, and improve our services, to process your transactions, to send you technical notices and support messages, and to communicate with you about products, services, offers, and events offered by Herambh Software Technologies & Solutions.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-headline">3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
          </p>
          <p className="mt-4">
            We may also release information when it's release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property or safety.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-headline">4. Data Security</h2>
          <p>
            We take reasonable measures and implement a variety of security protocols to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. However, no internet or email transmission is ever fully secure or error-free.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-headline">5. Cookies and Tracking</h2>
          <p>
            We may use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 font-headline">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at: <a href="mailto:herambh.info@gmail.com" className="text-primary hover:underline font-semibold">herambh.info@gmail.com</a>
          </p>
        </section>
      </div>
    </main>
  );
}
