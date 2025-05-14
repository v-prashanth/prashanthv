'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const notes = [
  {
    title: 'Tiny Freelance Wins',
    slug: 'freelance-reflections',
    description: 'What I learned making a simple site for a local interior design business.'
  },
  
  {
    title: 'MFC & Sockets: Low-Level But Rock Solid',
    slug: 'mfc-socket-basics',
    description: 'Thoughts on building real-time Windows apps with MFC and socket communication.'
  },
  {
    title: 'Batch Scripting for Automation',
    slug: 'batch-automation',
    description: 'Using Windows batch files to automate file transfers in industrial setups.'
  },
  {
    title: 'Designing with Constraints',
    slug: 'design-constraints',
    description: 'How working with existing hardware and systems shaped my design mindset.'
  },
  
];

export default function NotesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="font-mono"
    >
      <h1 className="text-3xl text-green-300 mb-4">/notes</h1>
      <p className="text-gray-400 mb-6">
        Thoughts, logs, lessons. Short-form writings about the tools I use,
        the systems I build, and the things I’m figuring out along the way.
      </p>
      
      <ul className="space-y-4">
        {notes.map((note) => (
          <li key={note.slug} className="border border-green-800 p-4 rounded hover:bg-green-900 transition">
            <Link href={`/notes/${note.slug}`}>
              <div>
                <h3 className="text-lg text-green-300">{note.title}</h3>
                <p className="text-gray-400 text-sm">{note.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
