'use client';

import { motion } from 'framer-motion';
import { FiAward, FiUsers, FiCode } from 'react-icons/fi';

const achievements = [
  {
    icon: FiAward,
    title: 'Google Certifications',
    description: 'Certified in Google and Responsible AI',
    period: '2025',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FiCode,
    title: 'Gemini Certification for Students (K12)',
    description: 'AI & Prompt Engineering',
    period: '2025',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FiUsers,
    title: 'Deloitte Australia',
    description: 'Cyber Job Simulation Participant',
    period: '2025',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: FiUsers,
    title: 'Tech Coordinator',
    description: 'Organized 10+ tech events and coding bootcamps',
    period: 'Oct 2025',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FiCode,
    title: 'Smart India Hackathon',
    description: 'Participant in the prestigious national hackathon',
    period: '2024',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: FiAward,
    title: 'State-Level Hackathon',
    description: 'Participant in RYMEC State-Level Hackathon',
    period: '2024 & 2025',
    color: 'from-orange-500 to-red-500',
  },
];

export default function Achievements() {
  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-8 md:p-10 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br ${achievement.color} rounded-xl flex items-center justify-center mb-8 mx-auto`}
                >
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 text-center">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-6 text-center text-base md:text-lg">
                  {achievement.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center font-medium">
                  {achievement.period}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

