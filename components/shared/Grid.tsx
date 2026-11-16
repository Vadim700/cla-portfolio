'use client';

import { cn } from '@/lib/utils';
import type { ProjectImage } from '@/lib/projects';
import Image from 'next/image';
import React, { useState } from 'react';
import { Modal } from './Modal';

interface Props {
  className?: string;
  images: ProjectImage[];
  /** Project name, used for alt text and the lightbox caption. */
  title: string;
}

export const Grid: React.FC<Props> = ({ className, images, title }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (images.length === 0) {
    return (
      <p className={cn('font-sans text-lg text-white/70', className)}>
        Изображения для этого проекта скоро появятся.
      </p>
    );
  }

  return (
    <>
      <ul className={cn('grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3', className)}>
        {images.map((image, index) => (
          <li key={image.thumb}>
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Открыть изображение ${index + 1} из ${images.length} — ${title}`}
              className={cn(
                'group relative block aspect-[4/3] w-full overflow-hidden rounded-lg bg-white/5 shadow-xl transition-transform',
                'hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white',
              )}
            >
              <Image
                src={image.thumb}
                alt={`${title} — изображение ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                className="object-cover object-top"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 grid place-items-center bg-black/0 text-xl text-white opacity-0 transition-opacity group-hover:bg-black/40 group-hover:opacity-100"
              >
                Открыть
              </span>
            </button>
          </li>
        ))}
      </ul>
      {activeIndex !== null && (
        <Modal
          images={images}
          title={title}
          index={activeIndex}
          onIndexChange={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  );
};
