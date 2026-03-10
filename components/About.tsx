'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Code2, Sparkles, Terminal } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full blur-[1px]"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 items-start">

          {/* Main summary card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Terminal className="w-32 h-32" />
            </div>
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Professional Summary</span>
              </div>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I am a dedicated Computer Science student with a strong foundation in programming languages such as Java, C, C++, and Python. Driven by a passion for technology, I have a keen interest in application development, full-stack web technologies, and building real-world digital solutions.
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                I enjoy transforming ideas into scalable software products and continuously exploring emerging domains in AI, cloud, and modern development frameworks. I am eager to apply my knowledge in practical settings, collaborate on innovative projects, and bring impactful technological advancements to life.
              </p>
            </div>
          </motion.div>

          {/* Education timeline card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8 h-full relative overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-secondary to-transparent" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary text-sm font-medium mb-8">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </div>

            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-neutral-900 bg-brand-secondary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow" />
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 md:group-odd:pr-8 md:group-even:pl-8">
                  <h4 className="font-bold text-white text-base">B.Tech in CSE</h4>
                  <p className="text-sm text-gray-400">RYMEC, Ballari</p>
                  <p className="text-xs text-brand-secondary mt-1">2022 - 2026</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-neutral-900 bg-brand-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow" />
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 md:group-odd:pr-8 md:group-even:pl-8">
                  <h4 className="font-bold text-white text-base">PUC II (Class XII)</h4>
                  <p className="text-sm text-gray-400">Ind. PU College</p>
                  <p className="text-xs text-brand-primary mt-1">2020 - 2022</p>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-neutral-900 bg-neutral-600 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow" />
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] pl-4 md:pl-0 md:group-odd:pr-8 md:group-even:pl-8">
                  <h4 className="font-bold text-white text-base">SSLC (Class X)</h4>
                  <p className="text-sm text-gray-400">St. Joseph's Co-Ed</p>
                  <p className="text-xs text-neutral-500 mt-1">April 2020</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
