'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'AI Shopping Jarvis',
    category: 'ai',
    description:
      'An intelligent shopping assistant powered by AI that helps users find and purchase products using natural language processing. Built with Flask, Selenium for web automation, OpenAI API, and Hugging Face models.',
    tech: ['Flask', 'Selenium', 'Python', 'OpenAI', 'Hugging Face'],
    github: '#',
    demo: '#',
    image: '🤖',
  },
  {
    id: 2,
    title: 'Online Senior Support Group Management System',
    category: 'web',
    description:
      'A comprehensive web-based platform for managing senior support groups, facilitating communication, scheduling events, and resource sharing. Built with PHP and MySQL for robust backend functionality.',
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    github: '#',
    demo: '#',
    image: '👥',
  },
  {
    id: 3,
    title: 'Train & Bus Enquiry System',
    category: 'web',
    description:
      'A real-time transportation enquiry system providing train and bus schedules, availability, and booking information. Developed using Flask framework with REST API integration.',
    tech: ['Flask', 'REST API', 'Python', 'SQLite'],
    github: '#',
    demo: '#',
    image: '🚄',
  },
  {
    id: 4,
    title: 'Driver Drowsiness Detection',
    category: 'ai',
    description:
      'A computer vision-based system that detects driver drowsiness in real-time using facial landmarks and eye tracking. Utilizes Mediapipe for face detection and OpenCV for image processing.',
    tech: ['Mediapipe', 'OpenCV', 'Python', 'Computer Vision'],
    github: '#',
    demo: '#',
    image: '😴',
  },
];

const categories = ['all', 'web', 'ai', 'ml'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
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
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-10 md:mb-12"></div>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden group"
              >
                <div className="h-56 md:h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl md:text-7xl">
                  {project.image}
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <FiGithub className="w-5 h-5" />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <FiExternalLink className="w-5 h-5" />
                      <span>Demo</span>
                    </motion.a>
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

