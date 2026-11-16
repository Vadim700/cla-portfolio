import { CartsList } from '@/components/shared/CartsList';
import { cn } from '@/lib/utils';
import { projectSections } from '@/lib/projects';
import { Alfa_Slab_One } from 'next/font/google';

const alfaSlabOne = Alfa_Slab_One({
  style: 'normal',
  weight: '400',
  subsets: ['latin', 'latin-ext', 'vietnamese'],
});

export default function Home() {
  return (
    <main
      className={cn(
        alfaSlabOne.className,
        'relative z-[5] text-3xl mb-auto pr-4 max-[478px]:pr-0',
      )}
    >
      {projectSections.map((section, index) => (
        <CartsList
          key={section.key}
          title={section.title}
          projects={section.projects}
          prioritize={index === 0}
          className={index === projectSections.length - 1 ? '' : 'mb-16'}
        />
      ))}
    </main>
  );
}
