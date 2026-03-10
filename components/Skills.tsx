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
      { name: 'Python', icon: SiPython, color: 'hover:text-[#3776AB] hover:shadow-[#3776AB]/50' },
      { name: 'Java', icon: FaJava, color: 'hover:text-[#f89820] hover:shadow-[#f89820]/50' },
      { name: 'C', icon: SiPython, color: 'hover:text-[#A8B9CC] hover:shadow-[#A8B9CC]/50' },
      { name: 'C++', icon: SiPython, color: 'hover:text-[#00599C] hover:shadow-[#00599C]/50' },
      { name: 'JavaScript', icon: SiJavascript, color: 'hover:text-[#F7DF1E] hover:shadow-[#F7DF1E]/50' },
    ],
  },
  {
    title: 'Web & Backend',
    skills: [
      { name: 'React.js', icon: SiReact, color: 'hover:text-[#61DAFB] hover:shadow-[#61DAFB]/50' },
      { name: 'Node.js', icon: SiNodedotjs, color: 'hover:text-[#339933] hover:shadow-[#339933]/50' },
      { name: 'Express.js', icon: SiExpress, color: 'hover:text-white hover:shadow-white/50' },
      { name: 'Flask', icon: SiFlask, color: 'hover:text-white hover:shadow-white/50' },
      { name: 'HTML5', icon: SiHtml5, color: 'hover:text-[#E34F26] hover:shadow-[#E34F26]/50' },
      { name: 'CSS3', icon: SiCss3, color: 'hover:text-[#1572B6] hover:shadow-[#1572B6]/50' },
    ],
  },
  {
    title: 'Data & Cloud',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: 'hover:text-[#4479A1] hover:shadow-[#4479A1]/50' },
      { name: 'MongoDB', icon: SiMongodb, color: 'hover:text-[#47A248] hover:shadow-[#47A248]/50' },
      { name: 'Firebase', icon: SiFirebase, color: 'hover:text-[#FFCA28] hover:shadow-[#FFCA28]/50' },
      { name: 'Docker', icon: SiDocker, color: 'hover:text-[#2496ED] hover:shadow-[#2496ED]/50' },
    ],
  },
  {
    title: 'AI & Tools',
    skills: [
      { name: 'TensorFlow', icon: SiTensorflow, color: 'hover:text-[#FF6F00] hover:shadow-[#FF6F00]/50' },
      { name: 'OpenCV', icon: SiOpencv, color: 'hover:text-[#5C3EE8] hover:shadow-[#5C3EE8]/50' },
      { name: 'Git', icon: SiGit, color: 'hover:text-[#F05032] hover:shadow-[#F05032]/50' },
      { name: 'REST APIs', icon: SiExpress, color: 'hover:text-brand-primary hover:shadow-brand-primary/50' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full blur-[1px]"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-8 md:p-10 rounded-3xl"
            >
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className={`group flex items-center justify-center p-4 bg-white/5 border border-white/10 rounded-2xl cursor-pointer transition-all duration-300 w-20 h-20 ${skill.color} shadow-sm hover:scale-110 hover:-translate-y-1`}
                      title={skill.name}
                    >
                      <Icon className="w-8 h-8 text-gray-400 group-hover:text-inherit transition-colors duration-300" />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 glass-card p-8 md:p-10 rounded-3xl text-center"
        >
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider text-sm">Languages</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['English', 'Hindi', 'Telugu', 'Kannada'].map((lang, index) => (
                <motion.span
                  key={lang}
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-2.5 bg-white/5 border border-white/10 text-gray-300 rounded-full text-base font-medium backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
                >
                  {lang}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

