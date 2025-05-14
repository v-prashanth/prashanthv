
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const experiments = [
  {
    title: "Interior Design Website (Freelance)",
    description: "Website built for a small interior design business to establish an online presence.",
    status: "Completed",
    category: "Freelance",
    tags: ["HTML", "Tailwind CSS", "Next.js", "Freelance"],
    slug: "interior-website"
  },
  {
    title: "Industrial Control System (MFC)",
    description: "Windows GUI for real-time machine monitoring and socket-based communication.",
    status: "Completed",
    category: "Work",
    tags: ["MFC", "Sockets", "C++"],
    slug: "industrial-control"
  },
  {
    title: "Enterprise Report Management Platform",
    description: "Secure web-based tool for dynamic report generation with TCPDF and session auth.",
    status: "Completed",
    category: "Work",
    tags: ["TCPDF", "PHP", "Session", "HTML and CSS"],
    slug: "enterprise-report"
  },
  {
    title: "Remote ATE Report System",
    description: "Web interface with batch automation for accessing test equipment data remotely.",
    status: "Completed",
    category: "Work",
    tags: ["Batch", "Session", "HTML and CSS"],
    slug: "remote-data-access"
  },
  {
    title: "Workflow Automation Platform",
    description: "Web solution for internal indent creation and process streamlining.",
    status: "Completed",
    category: "Work",
    tags: ["Session", "HTML and CSS", "MySQL"],
    slug: "workflow-platform"
  },
  
];

export default function ExperimentsPage() {
  const [filter, setFilter] = useState('');

  const categories = ["Freelance", "Work", "Personal"];

  const filtered = (category) =>
    experiments
      .filter(exp => exp.category === category)
      .filter(exp =>
        exp.title.toLowerCase().includes(filter.toLowerCase()) ||
        exp.description.toLowerCase().includes(filter.toLowerCase()) ||
        exp.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()))
      );

  return (
    <div className="font-mono">
      <h1 className="text-3xl mb-4 text-green-400">/experiments</h1>

      <div className="mb-6">
        <label className="text-sm text-green-300">terminal&gt; </label>
        <input
          type="text"
          placeholder="search or type category..."
          className="bg-transparent border border-green-800 px-3 py-2 rounded w-full text-green-100 placeholder:text-green-700"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      {categories.map((cat) => (
        <div key={cat} className="mb-8">
          <h2 className="text-xl text-green-300 mb-3"># {cat}</h2>

          <motion.ul
            className="space-y-4"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filtered(cat).map((exp, idx) => (
              <motion.li
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="p-4 border border-green-500 rounded hover:bg-green-950 transition-all"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <Link href={`/experiments/${exp.slug}`}>
                  <div>
                    <h3 className="text-lg text-green-300">{exp.title}</h3>
                    <p className="text-sm text-gray-300 mb-2">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs border border-green-700 bg-green-950 text-green-300 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      ))}
    </div>
  );
}
