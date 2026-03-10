'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-xl text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div className="flex items-center justify-center gap-2 text-lg font-medium">
            <span className="text-gray-400">Crafted with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 text-brand-primary fill-brand-primary" />
            </motion.div>
            <span className="text-gray-400">by <span className="text-white">Kuruba Hemanth Kishore</span></span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-500">
            <p>© {currentYear} All rights reserved.</p>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-gray-700" />
            <p>Designed for excellence worldwide.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

