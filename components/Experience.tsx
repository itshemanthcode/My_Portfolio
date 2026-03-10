'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Code2, Cloud, Bot, Zap } from 'lucide-react';

const experiences = [
  {
    title: 'Java Full Stack Developer Intern',
    company: 'Cloud Institution',
    location: 'Bengaluru, Karnataka',
    period: 'Feb 2026 – Present',
    description: [
      'Focusing on backend logic and database integration using Java technologies',
      'Building responsive UI and working in a cloud-based environment',
      'Debugging and collaborating on real-time projects',
    ],
    icon: Code2,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'DevOps Intern',
    company: 'Rooman Technologies',
    location: 'Bengaluru, Karnataka',
    period: 'Feb 2026 – Present',
    description: [
      'Working on CI/CD pipelines and basic cloud services',
      'Handling version control and automation tasks',
      'Supporting deployment, monitoring, and infrastructure-related tasks',
    ],
    icon: Cloud,
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'AI & Machine Learning Intern',
    company: 'Infosys Springboard',
    location: 'Bengaluru, Karnataka',
    period: 'Oct 2025 – Dec 2025',
    description: [
      'Built predictive models and derived data-driven insights through supervised and unsupervised learning techniques',
      'Gained practical experience in model training, evaluation, and deployment aligned with industry standards',
      'Focused on AI and ML applications using Python',
    ],
    icon: Bot,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'AI and Prompt Engineering Intern',
    company: 'VaultofCodes',
    location: 'Remote',
    period: 'Aug 2025 – Sep 2025',
    description: [
      'Designed and optimized prompt engineering workflows for LLMs, enhancing response accuracy by 35%',
      'Developed and integrated AI tools using Python and OpenAI APIs, improving task efficiency',
      'Collaborated cross-functionally to build and test AI-driven applications',
    ],
    icon: Zap,
    color: 'from-orange-500 to-red-500'
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full blur-[1px]"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Grid Line */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px bg-white/10 md:-translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 w-12 h-12 -ml-6 md:-ml-6 bg-neutral-950 border border-white/10 rounded-xl flex items-center justify-center z-10 shadow-xl">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${exp.color} opacity-20 absolute`} />
                    <Icon className="w-5 h-5 text-gray-300 relative z-10" />
                  </div>

                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 lg:pr-24 lg:text-right' : 'md:pl-16 lg:pl-24 lg:text-left'
                    }`}>
                    <div className="glass-card p-8 rounded-3xl hover:bg-neutral-900/60 transition-colors group">
                      <div className={`flex flex-col gap-2 mb-6 ${index % 2 === 0 ? 'lg:items-end' : 'lg:items-start'}`}>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400`}>
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <h3 className="text-2xl font-bold text-white group-hover:text-brand-primary transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-medium text-gray-400">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-1.5 text-sm text-gray-500">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>

                      <ul className={`space-y-3 text-gray-400 text-sm md:text-base leading-relaxed ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                        {exp.description.map((item, i) => (
                          <li key={i} className={`flex items-start gap-3 ${index % 2 === 0 ? 'lg:flex-row-reverse' : 'flex-row'}`}>
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-primary shrink-0 opacity-50" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

