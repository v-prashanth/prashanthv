
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Typewriter from './components/Typewriter';

export default function HomePage() {
  const [showContent, setShowContent] = useState(false);

  return (
    // Always render the outer container with padding
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
      {/* Fixed-height container to prevent layout jump */}
      <div className="min-h-[400px] flex flex-col justify-start">
        {!showContent ? (
          <Typewriter
            lines={[
              '> welcome to prashanthv.dev...',
              '> loading interface...',
              '> done. Enjoy exploring.',
            ]}
            onComplete={() => setShowContent(true)}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl text-green-300 font-bold mb-6 leading-tight">
              Hi, I’m Prashanth Vishwakarma
            </h1>

            <p className="text-gray-400 text-base md:text-lg mb-10 leading-relaxed">
              I build playful tools, creative experiments, and unconventional interfaces using JavaScript & Web APIs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/experiments">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-green-800 px-6 py-3 rounded text-white w-full sm:w-auto shadow-sm hover:shadow-green-600/40 transition-all"
                >
                  See Experiments
                </motion.button>
              </Link>

              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="border border-green-700 px-6 py-3 rounded text-white w-full sm:w-auto hover:bg-green-900 transition-all"
                >
                  About Me
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
