import type { Metadata } from 'next';
import { ArrowDown } from 'lucide-react';
import { CartsList } from '@/components/shared/CartsList';
import { cn } from '@/lib/utils';
import { projectSections } from '@/lib/projects';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <main className={cn('relative z-[5] font-display text-3xl')}>
      <section
        id="about"
        className="mb-20 max-w-3xl rounded-2xl bg-[#2d3d51]/85 p-6 backdrop-blur-md md:p-10"
      >
        <p className="font-sans text-sm uppercase tracking-[0.25em] text-white/70">
          UI/UX дизайнер
        </p>
        <h1 className="mt-4 font-sans text-[clamp(2rem,5vw,3.75rem)] leading-[1.1] font-extrabold tracking-tight text-white">
          Проектирую интерфейсы, в которых легко ориентироваться
        </h1>
        <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-white/80">
          Лендинги, многостраничные сайты и мобильные приложения: от структуры и прототипа
          до визуала и передачи в разработку.
        </p>
        <a
          href="#work"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f2c50d] px-6 py-3 font-sans text-base font-semibold text-[#1b1d3a] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Смотреть работы
          <ArrowDown size={18} aria-hidden="true" />
        </a>
      </section>

      <div id="work" className="pr-4 max-[478px]:pr-0">
        {projectSections.map((section, index) => (
          <CartsList
            key={section.key}
            title={section.title}
            projects={section.projects}
            prioritize={index === 0}
            className={index === projectSections.length - 1 ? '' : 'mb-16'}
          />
        ))}
      </div>
    </main>
  );
}
