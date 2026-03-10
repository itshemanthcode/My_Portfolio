'use client';

import { motion } from 'framer-motion';
import { FiBook, FiAward } from 'react-icons/fi';

export default function About() {
  return (
    <section
      id="about"
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
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Professional Summary
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a dedicated Computer Science student with a strong foundation in programming languages such as Java, C, C++, and Python. Driven by a passion for technology, I have a keen interest in application development, full-stack web technologies, and building real-world digital solutions.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I enjoy transforming ideas into scalable software products and continuously exploring emerging domains in AI, cloud, and modern development frameworks. I am eager to apply my knowledge in practical settings, collaborate on innovative projects, and bring impactful technological advancements to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Photo Placeholder */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
                HK
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-3xl">
                👨‍💻
              </div>
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl space-y-4"
            >
              <div className="flex items-start space-x-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <FiBook className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    B.Tech in Computer Science & Engineering
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    RYMEC, Ballari
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Nov 2022 - May 2026
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                <div className="p-3 bg-purple-500 rounded-lg">
                  <FiBook className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    PUC II (Class XII)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ballari Independent PU College (Best)
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    June 2020 - July 2022
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-green-500 rounded-lg">
                  <FiBook className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    SSLC (Class X)
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    St. Joseph's Co Education High School
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    April 2020
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

