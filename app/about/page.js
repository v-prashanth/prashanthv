
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

const timeline = [
  {
    year: '2024',
    event: 'Built real-time MFC-based monitoring system at ECIL.',
    note: 'Engineered packet processing, socket communication, and automation.'
  },
  {
    year: '2024',
    event: 'Designed enterprise and test-data platforms.',
    note: 'Web apps with secure authentication, report generation, and remote access.'
  },
  {
    year: '2025',
    event: 'Freelanced for an interior design studio.',
    note: 'Delivered a clean, mobile-friendly website with a personal touch.'
  }
];

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="font-mono p-4"
    >
      <p className="text-green-400 text-sm mb-1">$ whoami</p>
      <h1 className="text-3xl text-green-300 mb-4">Prashanth Vishwakarma</h1>

      <p className="text-gray-300 mb-4">
        Developer with a love for purposeful interfaces, backend logic, and practical problem-solving.
        I enjoy building systems that bridge hardware and software — from industrial monitors to reporting engines and client-focused websites.
      </p>

      <a
        href="/doc/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-800 hover:bg-green-700 text-white text-sm px-4 py-2 rounded mb-6"
      >
        ⬇ Download Resume
      </a>

      <h2 className="text-xl text-green-400 mb-2">Now</h2>
      <ul className="mb-6 text-gray-300 list-disc list-inside">
        <li>Open to freelance and full-time opportunities</li>
        <li>Exploring Framer Motion & animation workflows</li>
        <li>Building tools that balance clarity and functionality</li>
      </ul>

      <h2 className="text-xl text-green-400 mb-2">Tech & Tools</h2>
      <ul className="mb-6 text-gray-300 list-disc list-inside">
        <li>C++ / MFC / Socket Programming</li>
        <li>JavaScript, Next.js</li>
        <li>PHP, Batch Scripting</li>
        <li>TCPDF, Tailwind CSS</li>
      </ul>

      <h2 className="text-xl text-green-400 mb-2">Timeline</h2>
      <ul className="border-l border-green-700 pl-4 space-y-4">
        {timeline.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative"
          >
            <div className="absolute left-[-1.1rem] top-1 w-2 h-2 bg-green-500 rounded-full" />
            <p className="text-sm text-green-300">{item.year}</p>
            <p className="text-gray-200">{item.event}</p>
            <p className="text-gray-400 text-xs">{item.note}</p>
          </motion.li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-green-500">
        Curious what I’ve built?{' '}
        <Link href="/experiments" className="underline hover:text-green-300">
          Check out my experiments →
        </Link>
      </p>
    </motion.div>
  );
}
