
'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="font-mono px-4 sm:px-6 md:px-8"
    >
      <h1 className="text-3xl text-green-300 mb-4">/contact</h1>

      <p className="text-gray-300 mb-4">
        Whether it’s a full-time opportunity or a freelance project, I’m open to hearing about it.
        I enjoy building creative tools, thoughtful UIs, and systems that actually solve problems.
      </p>

      <p className="text-gray-300 mb-4">
        The best way to reach me is via email:
        <br />
        <a
          href="mailto:pravish121@gmail.com"
          className="text-green-400 hover:underline"
        >
          pravish121@gmail.com
        </a>
      </p>

      <a
        href="mailto:pravish121@gmail.com"
        className="inline-block mb-6 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded transition-colors"
      >
        📩 Email Me
      </a>

      <h2 className="text-xl text-green-400 mb-2">Socials</h2>
      <ul className="text-gray-300 space-y-4 mb-6">
        <li className="flex items-center space-x-2 hover:scale-105 transition-transform duration-150">
          <Image
            src="/icons/github.png"
            alt="GitHub Logo"
            title="GitHub"
            width={24}
            height={24}
          />
          <a
            href="https://github.com/v-prashanth"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300"
          >
            GitHub ↗
          </a>
        </li>
        <li className="flex items-center space-x-2 hover:scale-105 transition-transform duration-150">
          <Image
            src="/icons/linkedin.png"
            alt="LinkedIn Logo"
            title="LinkedIn"
            width={24}
            height={24}
          />
          <a
            href="https://www.linkedin.com/in/prashanth-vishwakarma-b48b33249/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300"
          >
            LinkedIn ↗
          </a>
        </li>
      </ul>

      <div className="mb-8">
        <Link href="/doc/resume.pdf" target='_block' className="text-sm text-green-400 hover:underline">
          View Résumé ↗
        </Link>
      </div>

      {/* Contact Form */}
<h2 className="text-xl text-green-400 mb-2">Or drop a message</h2>
<form
  action="https://formspree.io/f/xvgadpdg"
  method="POST"
  className="space-y-4"
>
  <div>
    <input
      name="name"
      type="text"
      required
      minLength="2"
      maxLength="50"
      pattern="[A-Za-z ]+"
      title="Please enter a valid name (letters and spaces only)"
      placeholder="Your Name"
      className="bg-black text-gray-300 border border-green-500 p-2 w-full rounded"
    />
    <p className="text-xs text-gray-500 mt-1">2-50 characters, letters only</p>
  </div>
  
  <div>
    <input
      name="email"
      type="email"
      required
      maxLength="100"
      placeholder="Your Email"
      className="bg-black text-gray-300 border border-green-500 p-2 w-full rounded"
    />
    <p className="text-xs text-gray-500 mt-1">Valid email address</p>
  </div>
  
  <div>
    <textarea
      name="message"
      required
      minLength="10"
      maxLength="1000"
      placeholder="Your Message"
      className="bg-black text-gray-300 border border-green-500 p-2 w-full rounded h-32"
    />
    <p className="text-xs text-gray-500 mt-1">10-1000 characters</p>
  </div>
  
  <button
    type="submit"
    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
  >
    Send Message
  </button>
</form>
      <p className="text-xs text-gray-500 mt-8">
        Let’s build something useful, fast, or beautiful—ideally all three.
      </p>
    </motion.div>
  );
}
