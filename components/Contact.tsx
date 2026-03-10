'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Linkedin, Github } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // EmailJS configuration
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    try {
      // Simulate submission for showcase, switch to emailjs when configuring
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // await emailjs.send(serviceId, templateId, formData, publicKey);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full blur-[1px] mb-6"></div>
          <p className="text-lg text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl space-y-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Let's talk about everything!
              </h3>
              <p className="text-gray-400 mb-8">
                Don't like forms? Send me an email. 👋
              </p>

              <div className="space-y-6">
                <a href="mailto:hemanthk.cse.rymec@gmail.com" className="group flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary/20 to-brand-primary/10 rounded-full flex items-center justify-center border border-brand-primary/20 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Email</p>
                    <p className="font-semibold text-gray-200 group-hover:text-white transition-colors">hemanthk.cse.rymec@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-5 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-secondary/20 to-brand-secondary/10 rounded-full flex items-center justify-center border border-brand-secondary/20">
                    <MapPin className="w-5 h-5 text-brand-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Location</p>
                    <p className="font-semibold text-gray-200">Bengaluru, Karnataka 56002</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Connect With Me</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/kuruba-hemanth-kishore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-primary hover:border-transparent hover:-translate-y-1 transition-all shadow-lg hover:shadow-brand-primary/25"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://github.com/itshemanthcode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 hover:border-transparent hover:-translate-y-1 transition-all shadow-lg hover:shadow-white/10"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-neutral-900 border border-white/10 rounded-xl focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all text-white font-medium placeholder:font-normal placeholder-gray-600"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 ml-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-neutral-900 border border-white/10 rounded-xl focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all text-white font-medium placeholder:font-normal placeholder-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 ml-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-5 py-3.5 bg-neutral-900 border border-white/10 rounded-xl focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all text-white font-medium placeholder:font-normal placeholder-gray-600 resize-none"
                  placeholder="How can I help you?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-xl font-bold shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm font-medium text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium text-center"
                >
                  Something went wrong. Please try emailing me directly.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

