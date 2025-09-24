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
        // Formspree error messages are often in the `errors` field
        const errorMessage = responseData.errors?.map((error: any) => error.message).join(', ') || "Oops! Something went wrong.";
        setStatus('error');
        setMessage(errorMessage);
      }
    } catch (error) {
      setStatus('error');
      setMessage("A network error occurred. Please try again later.");
    }
  }

  // Helper to render the button content based on status
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
    <footer id="contact" className="py-20 sm:py-24 border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Get In Touch</h2>
        <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
          Have a question, a project idea, or just want to connect? I'd love to hear from you. Drop me a message below.
        </p>

        {/* Replace with your Formspree endpoint */}
        <form 
          onSubmit={handleSubmit}
          action={import.meta.env.VITE_FORMSPREE_UID}
          className="max-w-xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-black/30 text-white rounded-lg border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-black/30 text-white rounded-lg border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>
          <div className="mt-6">
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              className="w-full bg-black/30 text-white rounded-lg border border-white/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            ></textarea>
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              disabled={status === 'loading'}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-medium text-white transition-all duration-300
                ${status === 'loading' ? 'bg-gray-500/50 cursor-not-allowed' : ''}
                ${status === 'success' ? 'bg-green-600/80' : ''}
                ${status === 'error' ? 'bg-red-600/80 hover:bg-red-700/80' : ''}
                ${status === 'idle' ? 'bg-purple-600/80 hover:bg-purple-700/80 hover:scale-105' : ''}
              `}
            >
              {renderButtonContent()}
            </button>
          </div>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-center text-green-400">{message}</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-center text-red-400">{message}</p>
        )}
      </div>
    </footer>
  );
}
