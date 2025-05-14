'use client';

import { useEffect } from 'react';
import useSound from 'use-sound';

export default function ClickSound() {
  const [playClick] = useSound('/sounds/click.mp3', { volume: 0.5 });

  useEffect(() => {
    const handleClick = () => playClick();
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [playClick]);

  return null;
}
