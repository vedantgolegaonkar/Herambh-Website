'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "429dc99a-584e-4f09-a101-78431910715b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setStatus('idle'), 5000); // Reset UI after 5 seconds
      } else {
        console.error("Error", data);
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-label uppercase tracking-widest text-slate-600 dark:text-slate-400">
          Full Name
        </label>
        <input
          name="name"
          className="w-full bg-surface-container-low border-none rounded-xl mt-2 px-4 py-4 text-slate-900 dark:text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary/30 transition-all outline-none"
          placeholder="John Doe"
          type="text"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-label uppercase tracking-widest text-slate-600 dark:text-slate-400">
          Work Email
        </label>
        <input
          name="email"
          className="w-full bg-surface-container-low border-none rounded-xl mt-2 px-4 py-4 text-slate-900 dark:text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary/30 transition-all outline-none"
          placeholder="john@company.com"
          type="email"
          required
        />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-label uppercase tracking-widest text-slate-600 dark:text-slate-400">
          Project Type
        </label>
        <select name="projectType" className="w-full bg-surface-container-low border-none rounded-xl mt-2 px-4 py-4 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/30 transition-all outline-none appearance-none">
          <option>SaaS Development</option>
          <option>Cloud Architecture</option>
          <option>Mobile Engineering</option>
          <option>Legacy Modernization</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-label uppercase tracking-widest text-slate-600 dark:text-slate-400">
          Project Goals
        </label>
        <textarea
          name="goals"
          className="w-full bg-surface-container-low border-none rounded-xl mt-2 px-4 py-4 text-slate-900 dark:text-white placeholder:text-slate-600 focus:ring-2 focus:ring-primary/30 transition-all outline-none resize-none"
          placeholder="Tell us about your business, project requirements, goals, and expected timeline..."
          rows={4}
          required
        ></textarea>
      </div>
      <button
        disabled={status === 'loading' || status === 'success'}
        className="w-full bg-gradient-to-r from-primary to-secondary-container text-on-primary-container font-bold py-4 rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:active:scale-100"
        type="submit"
      >
        {status === 'loading' ? 'Sending Request...' : status === 'success' ? 'Request Sent Successfully!' : 'Send Request'}
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-sm text-center mt-2">There was an issue sending your request. Please try again.</p>
      )}
    </form>
  );
}
