// // components/Typewriter.js
// 'use client';
// import { useEffect, useState } from 'react';

// export default function Typewriter({ lines = [], speed = 30, delay = 500, onComplete }) {
//   const [displayedText, setDisplayedText] = useState('');
//   const [lineIndex, setLineIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   useEffect(() => {
//     if (lineIndex >= lines.length) {
//       onComplete?.(); // Call callback once done
//       return;
//     }

//     const timeout = setTimeout(() => {
//       const currentLine = lines[lineIndex];
//       if (charIndex < currentLine.length) {
//         setDisplayedText(prev => prev + currentLine[charIndex]);
//         setCharIndex(c => c + 1);
//       } else {
//         setDisplayedText(prev => prev + '\n');
//         setLineIndex(i => i + 1);
//         setCharIndex(0);
//       }
//     }, charIndex === 0 ? delay : speed);

//     return () => clearTimeout(timeout);
//   }, [charIndex, lineIndex, lines, onComplete]);

//   return (
//     <pre className="text-green-400 font-mono whitespace-pre-wrap text-sm sm:text-base leading-tight">
//       {displayedText}
//       <span className="animate-pulse">_</span>
//     </pre>
//   );
// }

/////
'use client';
import { useEffect, useState } from 'react';

export default function Typewriter({ lines = [], speed = 30, delay = 500, onComplete }) {
  const [displayedText, setDisplayedText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= lines.length) {
      onComplete?.(); // Call callback once done
      return;
    }

    const timeout = setTimeout(() => {
      const currentLine = lines[lineIndex];
      if (charIndex < currentLine.length) {
        setDisplayedText(prev => prev + currentLine[charIndex]);
        setCharIndex(c => c + 1);
      } else {
        setDisplayedText(prev => prev + '\n');
        setLineIndex(i => i + 1);
        setCharIndex(0);
      }
    }, charIndex === 0 ? delay : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, lineIndex, lines, onComplete, delay, speed]); // Added delay and speed here

  return (
    <pre className="text-green-400 font-mono whitespace-pre-wrap text-sm sm:text-base leading-tight">
      {displayedText}
      <span className="animate-pulse">_</span>
    </pre>
  );
}