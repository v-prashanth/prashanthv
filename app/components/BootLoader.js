'use client';
import { useEffect, useState } from 'react';

const lines = [
  '> booting prashanthv.dev...',
  '> loading modules...',
  '> initializing UI...',
  '> ready_',
];

export default function BootLoader() {
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed((prev) => [...prev, lines[i]]);
      i++;
      if (i >= lines.length) clearInterval(interval);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex items-start p-6 text-green-500 bg-black font-mono text-sm">
      <div>
        {displayed.map((line, index) => (
          <div key={index} className="whitespace-nowrap animate-typing">
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}
