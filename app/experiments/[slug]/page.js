import { notFound } from 'next/navigation';
import { MotionDiv } from '@/components/MotionDiv';
import experiments from '@/data/experiments';

export default function ExperimentDetail({ params }) {
  const experiment = experiments[params.slug];

  if (!experiment) {
    notFound();
  }

  return (
    <MotionDiv className="font-mono p-4">
      <h1 className="text-3xl text-green-300 mb-1">{experiment.title}</h1>
      <p className="text-sm text-gray-400 mb-4">{experiment.description}</p>
      <span className="text-xs bg-green-800 px-2 py-1 rounded">{experiment.status}</span>

      <div className="mt-6 text-gray-200 whitespace-pre-line">
        {experiment.content.trim()}
      </div>

      {experiment.link && (
        <div className="mt-6">
          <a
            href={experiment.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-400 underline hover:text-blue-300"
          >
            Visit Live Site ↗
          </a>
        </div>
      )}
    </MotionDiv>
  );
}
