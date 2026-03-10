'use client';

import { motion } from 'framer-motion';
import { Award, Trophy, Code2, Users2, Shield, Star } from 'lucide-react';

const achievements = [
  {
    icon: Shield,
    title: 'Google Certifications',
    description: 'Certified in Google and Responsible AI',
    period: '2025',
    color: 'from-blue-500/20 to-cyan-500/20',
    iconColor: 'text-cyan-400'
  },
  {
    icon: Star,
    title: 'Gemini Certification',
    description: 'AI & Prompt Engineering (K12)',
    period: '2025',
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-pink-400'
  },
  {
    icon: Users2,
    title: 'Deloitte Australia',
    description: 'Cyber Job Simulation Participant',
    period: '2025',
    color: 'from-orange-500/20 to-red-500/20',
    iconColor: 'text-orange-400'
  },
  {
    icon: Code2,
    title: 'Smart India Hackathon',
    description: 'Participant in the prestigious national hackathon',
    period: '2024',
    color: 'from-indigo-500/20 to-violet-500/20',
    iconColor: 'text-indigo-400'
  },
  {
    icon: Trophy,
    title: 'State-Level Hackathon',
    description: 'Participant in RYMEC State-Level Hackathon',
    period: '2024 & 2025',
    color: 'from-emerald-500/20 to-teal-500/20',
    iconColor: 'text-emerald-400'
  },
  {
    icon: Award,
    title: 'Tech Coordinator',
    description: 'Organized 10+ tech events and coding bootcamps',
    period: 'Oct 2025',
    color: 'from-amber-500/20 to-yellow-500/20',
    iconColor: 'text-yellow-400'
  },
];

export default function Achievements() {
  return (
    <section id="certifications" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Awards</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full blur-[1px]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative glass-card p-8 rounded-3xl overflow-hidden hover:-translate-y-2 transition-transform duration-300"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 -mr-16 -mt-16 pointer-events-none`} />

                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-neutral-900 border border-white/10 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 ${achievement.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {achievement.title}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                    {achievement.description}
                  </p>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-gray-400">
                    <Award className="w-3.5 h-3.5" />
                    {achievement.period}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

