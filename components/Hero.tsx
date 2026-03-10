'use client';

import { motion } from 'framer-motion';
import { Download, Mail, ChevronDown } from 'lucide-react';
import Typewriter from './Typewriter';

export default function Hero() {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Kuruba_Hemanth_Kishore_Resume.pdf';
    link.click();
  };

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center justify-center text-center">

        {/* Glow behind Avatar */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-primary/20 blur-[100px] rounded-full point-events-none" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 group mt-16"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary to-brand-accent rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-700" />
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-neutral-900 border-2 border-white/10 flex items-center justify-center text-white text-5xl font-extrabold shadow-2xl overflow-hidden">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500">HK</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto space-y-4"
        >
          <h2 className="text-xl md:text-2xl font-medium text-brand-primary tracking-wide uppercase">
            Creative Developer
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white mb-6">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent animate-gradient">
              experiences.
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mt-6 mb-12 h-16"
        >
          <Typewriter
            texts={[
              'Software Developer & AI Enthusiast',
              'Engineering scalable architectures',
              'Crafting intelligent AI solutions',
            ]}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-8"
        >
          <button
            onClick={handleContactClick}
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Start a Project
            </span>
            <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </button>

          <button
            onClick={handleResumeDownload}
            className="group px-8 py-4 bg-transparent text-white border border-white/20 hover:border-white/50 rounded-full font-semibold transition-all hover:bg-white/5 flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <Download className="w-5 h-5 opacity-70 group-hover:!opacity-100 group-hover:-translate-y-0.5 transition-all" />
            Resume
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-gray-500"
        >
          <ChevronDown className="w-6 h-6 opacity-60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

