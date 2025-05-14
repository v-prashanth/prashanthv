import './globals.css';
import { JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import ClickSound from './components/ClickSound';
import BootShell from './components/BootShell';

const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'prashanthv.dev',
  description: 'Experiments, interfaces, and creative coding.',
  icons: {
    icon: '/pvi.jpg',
    // Optional: add different icons for different devices
    shortcut: '/favicon.ico',
    // Optional: add different icons for dark/light mode
    // icon: [
    //   { url: '/favicon-light.ico', media: '(prefers-color-scheme: light)' },
    //   { url: '/favicon-dark.ico', media: '(prefers-color-scheme: dark)' },
    // ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrains.className} bg-[#0a0a0a] text-white`}>
        <ClickSound />
        <div className="min-h-screen flex flex-col cursor-custom px-4 sm:px-6 md:px-8 py-12 md:py-20 max-w-4xl mx-auto">
          <BootShell>
            <main className="flex-grow">
              <header className="mb-10 border-b border-green-800 pb-4">
                <h1 className="text-xl text-green-400 font-bold">prashanthv.dev</h1>
                <nav className="mt-2 flex gap-6 text-sm text-gray-400">
                  <Link href="/" className="hover:text-green-300">/home</Link>
                  <Link href="/experiments" className="hover:text-green-300">/experiments</Link>
                  <Link href="/about" className="hover:text-green-300">/about</Link>
                  <Link href="/notes" className="hover:text-green-300">/notes</Link>
                  <Link href="/contact" className="hover:text-green-300">/contact</Link>
                </nav>
              </header>
              {children}
            </main>
          </BootShell>
        </div>
      </body>
    </html>
  );
}