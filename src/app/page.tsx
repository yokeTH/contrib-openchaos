import { Suspense } from 'react';

import { Countdown } from '@/components/Countdown';
import { PRList } from '@/components/PRList';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center px-4 py-16'>
      <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
        OPENCHAOS.DEV
      </h1>

      <div className='mt-12'>
        <Countdown />
      </div>

      <section className='mt-16 flex w-full flex-col items-center'>
        <h2 className='mb-6 text-xl font-medium text-zinc-600'>
          Open PRs — Vote to merge
        </h2>
        <Suspense
          fallback={
            <div className='w-full max-w-xl py-8 text-center'>
              <p className='text-zinc-500'>Loading PRs...</p>
            </div>
          }
        >
          <PRList />
        </Suspense>
      </section>

      <footer className='mt-16 flex flex-col items-center gap-4 text-sm text-zinc-500'>
        <p>
          <a
            href='https://github.com/skridlevsky/openchaos'
            target='_blank'
            rel='noopener noreferrer'
            className='transition-colors hover:text-zinc-900'
          >
            View on GitHub
          </a>
        </p>
      </footer>
    </main>
  );
}
