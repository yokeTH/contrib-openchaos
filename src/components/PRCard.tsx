import type { PullRequest } from '@/lib/github';

interface PRCardProps {
  pr: PullRequest;
  rank: number;
}

export function PRCard({ pr, rank }: PRCardProps) {
  return (
    <a
      href={pr.url}
      target='_blank'
      rel='noopener noreferrer'
      className='block w-full rounded-lg border border-zinc-200 p-4 transition-colors hover:border-zinc-400'
    >
      <div className='flex items-start justify-between gap-4'>
        <div className='min-w-0 flex-1'>
          <div className='flex items-center gap-2'>
            <span className='text-sm text-zinc-500'>#{pr.number}</span>
            {rank === 1 && (
              <span className='rounded bg-amber-100 px-1.5 py-0.5 text-xs font-medium text-amber-700'>
                LEADING
              </span>
            )}
          </div>
          <h3 className='mt-1 truncate font-medium'>{pr.title}</h3>
          <p className='mt-1 text-sm text-zinc-500'>by @{pr.author}</p>
        </div>
        <div className='flex items-center gap-1.5 text-lg font-medium'>
          <span>👍</span>
          <span>{pr.votes}</span>
        </div>
      </div>
      <div className='mt-3 flex items-center gap-1 text-sm text-zinc-500'>
        View &amp; Vote on GitHub
        <span aria-hidden='true'>→</span>
      </div>
    </a>
  );
}
