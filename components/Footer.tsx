'use client';

import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-2">
            <p className="text-gray-400">Made with</p>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <FiHeart className="w-5 h-5 text-red-500" />
            </motion.div>
            <p className="text-gray-400">by Kuruba Hemanth Kishore</p>
          </div>
          <p className="text-gray-500 text-sm">
            © {currentYear} All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with Next.js, TypeScript, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

