import React, { useState } from 'react';
import { Send, Loader, CheckCircle, AlertTriangle } from 'lucide-react';

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        setMessage("Thanks for reaching out! I'll get back to you soon.");
        form.reset();
      } else {
        const responseData = await response.json();
        const errorMessage = responseData.errors?.map((error: any) => error.message).join(', ') || "Oops! Something went wrong.";
        setStatus('error');
        setMessage(errorMessage);
      }
    } catch (error) {
      setStatus('error');
      setMessage("Couldn't send your message — check your connection and try again.");
    }
  }

  const renderButtonContent = () => {
    switch (status) {
      case 'loading':
        return <><Loader className="w-5 h-5 animate-spin" /> Sending...</>;
      case 'success':
        return <><CheckCircle className="w-5 h-5" /> Message Sent!</>;
      case 'error':
        return <><AlertTriangle className="w-5 h-5" /> Try Again</>;
      default:
        return <><Send className="w-5 h-5" /> Send Message</>;
    }
  };

  return (
    <section id="contact" data-scroll-reveal className="py-20 sm:py-24 border-t border-neutral-200 dark:border-neutral-700">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-neutral-900 dark:text-neutral-50 mb-4 flex items-center justify-center gap-3">
          <span className="block w-1 h-8 rounded-full bg-teal-700 dark:bg-teal-500 shrink-0" aria-hidden="true" />
          Get In Touch
        </h2>
        <p className="text-center text-neutral-500 dark:text-neutral-400 mb-10 max-w-2xl mx-auto">
          Have a question or a project in mind? I'd love to hear from you.
        </p>

        <form
          onSubmit={handleSubmit}
          action={import.meta.env.VITE_FORMSPREE_UID}
          className="max-w-xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                required
                maxLength={100}
                className="w-full bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 rounded-lg border border-neutral-300 dark:border-neutral-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-500 focus:-translate-y-px focus:shadow-sm transition placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                required
                maxLength={200}
                className="w-full bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 rounded-lg border border-neutral-300 dark:border-neutral-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-500 focus:-translate-y-px focus:shadow-sm transition placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              maxLength={2000}
              className="w-full bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50 rounded-lg border border-neutral-300 dark:border-neutral-600 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-500 focus:-translate-y-px focus:shadow-sm transition placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
            ></textarea>
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-white transition-all duration-300
                ${status === 'loading' ? 'bg-neutral-400 dark:bg-neutral-600 cursor-not-allowed' : ''}
                ${status === 'success' ? 'bg-teal-700 dark:bg-teal-600 pop-in' : ''}
                ${status === 'error' ? 'bg-red-600 hover:bg-red-700 shake' : ''}
                ${status === 'idle' ? 'bg-teal-700 dark:bg-teal-600 hover:bg-teal-800 dark:hover:bg-teal-500 hover:scale-105 active:scale-95' : ''}
              `}
            >
              {renderButtonContent()}
            </button>
          </div>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-center text-teal-700 dark:text-teal-400 msg-appear">{message}</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-center text-red-600 dark:text-red-400 msg-appear">{message}</p>
        )}
      </div>
    </section>
  );
}
