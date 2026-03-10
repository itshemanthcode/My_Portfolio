'use client';

import { motion } from 'framer-motion';
import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiDocker,
  SiTensorflow,
  SiOpencv,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const skillCategories = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', icon: SiPython, color: 'text-blue-500' },
      { name: 'Java', icon: FaJava, color: 'text-orange-500' },
      { name: 'C', icon: SiPython, color: 'text-blue-600' },
      { name: 'C++', icon: SiPython, color: 'text-blue-700' },
      { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'React.js', icon: SiReact, color: 'text-cyan-500' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
      { name: 'Express.js', icon: SiExpress, color: 'text-gray-500' },
      { name: 'Flask', icon: SiFlask, color: 'text-red-500' },
      { name: 'HTML5', icon: SiHtml5, color: 'text-orange-600' },
      { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-600' },
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
      { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
    ],
  },
  {
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: SiGit, color: 'text-red-600' },
      { name: 'Docker', icon: SiDocker, color: 'text-blue-500' },
      { name: 'Selenium', icon: SiPython, color: 'text-green-600' },
      { name: 'TensorFlow', icon: SiTensorflow, color: 'text-orange-500' },
      { name: 'OpenCV', icon: SiOpencv, color: 'text-green-500' },
      { name: 'Mediapipe', icon: SiPython, color: 'text-blue-600' },
      { name: 'REST APIs', icon: SiExpress, color: 'text-gray-600' },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-xl shadow-lg"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4 md:gap-5">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow cursor-pointer group"
                    >
                      <Icon className={`w-8 h-8 ${skill.color} mb-2 group-hover:scale-110 transition-transform`} />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 bg-white dark:bg-gray-900 p-8 md:p-10 rounded-xl shadow-lg"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            {['English', 'Hindi', 'Telugu', 'Kannada'].map((lang, index) => (
              <motion.span
                key={lang}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium shadow-md"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

