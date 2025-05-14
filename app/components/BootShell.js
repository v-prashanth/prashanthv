'use client';
import { useEffect, useState } from 'react';
import BootLoader from './BootLoader';

export default function BootShell({ children }) {
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setBooted(true), 3200); // match your loader speed
    return () => clearTimeout(timeout);
  }, []);

  return booted ? children : <BootLoader />;
}
