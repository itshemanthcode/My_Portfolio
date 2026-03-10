'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, MoveUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'AI Shopping Jarvis',
    category: 'ai',
    description:
      'An intelligent shopping assistant powered by AI that helps users find and purchase products using natural language processing. Built with Flask, Selenium for web automation, OpenAI API, and Hugging Face models.',
    tech: ['Flask', 'Selenium', 'Python', 'OpenAI'],
    github: '#',
    demo: '#',
    image: '🛍️',
    color: 'from-blue-500/20 to-purple-500/20',
  },
  {
    id: 2,
    title: 'Senior Support Platform',
    category: 'web',
    description:
      'A comprehensive web-based platform for managing senior support groups, facilitating communication, scheduling events, and resource sharing. Built with PHP and MySQL for robust backend functionality.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JS'],
    github: '#',
    demo: '#',
    image: '🤝',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    id: 3,
    title: 'Transit Enquiry System',
    category: 'web',
    description:
      'A real-time transportation enquiry system providing train and bus schedules, availability, and booking information. Developed using Flask framework with REST API integration.',
    tech: ['Flask', 'REST API', 'Python', 'SQLite'],
    github: '#',
    demo: '#',
    image: '🚄',
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    id: 4,
    title: 'Drowsiness Detection',
    category: 'ai',
    description:
      'A computer vision-based system that detects driver drowsiness in real-time using facial landmarks and eye tracking. Utilizes Mediapipe for face detection and OpenCV for image processing.',
    tech: ['Mediapipe', 'OpenCV', 'Python', 'CV'],
    github: '#',
    demo: '#',
    image: '👁️',
    color: 'from-indigo-500/20 to-cyan-500/20',
  },
];

const categories = ['all', 'web', 'ai'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full blur-[1px] mb-12"></div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {selectedCategory === category && (
                  <motion.div
                    layoutId="project-filter-active"
                    className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 uppercase tracking-wider">{category}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative glass-card rounded-3xl overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                <div className="p-8 md:p-10 relative z-10 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                    {project.image}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 border border-white/10 text-gray-300 rounded-lg text-xs font-medium tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <div className="w-px h-4 bg-white/10" />
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-brand-primary transition-colors group/link"
                    >
                      Live Demo
                      <MoveUpRight className="w-4 h-4 opacity-70 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

