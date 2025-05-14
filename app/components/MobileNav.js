'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { href: '/', label: 'home' },
  { href: '/experiments', label: 'experiments' },
  { href: '/about', label: 'about' },
  { href: '/notes', label: 'notes' },
  // { href: '/terminal', label: 'terminal' },
  { href: '/contact', label: 'contact' },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 flex md:hidden justify-around bg-[#0a0a0a] border-t border-green-800 text-xs text-green-400 py-2">
      {routes.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={pathname === href ? 'text-green-300' : 'hover:text-green-300'}
        >
          /{label}
        </Link>
      ))}
    </nav>
  );
}
