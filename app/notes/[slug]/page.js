'use client';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const notes = {
  'mfc-socket-basics': {
    title: 'MFC & Sockets: Low-Level But Rock Solid',
    content: `
Building a real-time GUI app using MFC was like working with raw machinery.
Socket communication gave me full control over how data flows — from client to server,
packet by packet. The low-level control was frustrating at times, but incredibly rewarding.

Things I appreciated:
- Manual control over memory and timing
- Stability in long-running processes
- Performance even on old hardware
`
  },
  'batch-automation': {
    title: 'Batch Scripting for Automation',
    content: `
Batch scripts might seem outdated, but they still shine in legacy setups.

I used '.bat' scripts to automate pulling logs and reports from ATE machines.
It reduced manual errors and became a dependable part of our workflow.

A few favorite commands:
- xcopy /s /y
- taskkill
- for /f %%A in (...)
`
  },
  'design-constraints': {
    title: 'Designing with Constraints',
    content: `
Working in industrial setups taught me that constraints are not limitations — they’re boundaries for creativity.

When hardware is fixed, and software must adapt, it forces clarity in decision-making.

I now approach frontend with the same mindset: start with the edges, build inward.
`
  },
  'freelance-reflections': {
    title: 'Tiny Freelance Wins',
    content: `
Building a small website for a local interior design business reminded me:

- Simple > Clever
- A fast-loading site > A perfect animation
- A helpful contact form > A fancy homepage

Freelance work made me value results over polish.
`
  }
};

export default function NotePage() {
  const { slug } = useParams();
  const note = notes[slug];

  if (!note) {
    return (
      <div className="text-red-500 p-6 font-mono">
        <p>Note not found.</p>
        <Link href="/notes" className="text-green-400 underline">Back to notes</Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="prose prose-invert max-w-none p-4 font-mono"
    >
      <h1 className="text-green-300">{note.title}</h1>
      <pre className="text-gray-300 whitespace-pre-wrap">{note.content.trim()}</pre>
      <Link href="/notes" className="text-green-400 underline block mt-6">← Back to notes</Link>
    </motion.div>
  );
}
