'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

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
    icon: '☕',
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
    icon: '☁️',
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
    icon: '🤖',
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
    icon: '⚡',
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 md:mb-24"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 transform md:-translate-x-1/2"></div>

          <div className="space-y-16 md:space-y-20 lg:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10"></div>

                {/* Content card */}
                <div
                  className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:ml-auto'
                    }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 p-8 md:p-10 rounded-xl shadow-lg"
                  >
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="text-3xl">{exp.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className={`flex items-center gap-2 text-gray-600 dark:text-gray-300 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <FiCalendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className={`flex items-center gap-2 text-gray-600 dark:text-gray-300 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <FiMapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <ul className={`space-y-2 text-gray-700 dark:text-gray-300 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          {index % 2 === 0 && <span className="md:hidden">•</span>}
                          <span>{item}</span>
                          {index % 2 !== 0 && <span>•</span>}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

