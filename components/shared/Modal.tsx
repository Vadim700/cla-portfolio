'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useCallback, useEffect } from 'react';
import type { ProjectImage } from '@/lib/projects';

interface Props {
  images: ProjectImage[];
  title: string;
  index: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export const Modal = ({ images, title, index, onIndexChange, onClose }: Props) => {
  const image = images[index];

  const go = useCallback(
    (delta: number) => {
      onIndexChange((index + delta + images.length) % images.length);
    },
    [images.length, index, onIndexChange],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        go(-1);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        go(1);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [go]);

  return (
    <Dialog.Root open onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in" />
        <Dialog.Content
          aria-modal="true"
          aria-describedby={undefined}
          className="fixed inset-0 z-50 flex flex-col focus:outline-none data-[state=open]:animate-in data-[state=open]:fade-in"
        >
          <Dialog.Title className="sr-only">
            {title} — изображение {index + 1} из {images.length}
          </Dialog.Title>

          <div className="flex shrink-0 items-center justify-between gap-4 px-5 py-4 font-sans text-white">
            <p className="truncate text-base text-white/80">{title}</p>
            <p className="text-sm tabular-nums text-white/60">
              {index + 1} / {images.length}
            </p>
            <Dialog.Close asChild>
              <button
                type="button"
                aria-label="Закрыть просмотр"
                className="rounded-full p-2 text-[#ea4c3d] transition-colors hover:text-[#f2c50d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <X size={32} />
              </button>
            </Dialog.Close>
          </div>

          <div className="min-h-0 flex-1 overflow-auto overscroll-contain">
            <div className="mx-auto w-full max-w-[1200px] px-4 pb-20">
              {/* Full-size frames are pre-optimised WebP with unknown dimensions; next/image cannot size them. */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={image.full}
                src={image.full}
                alt={`${title} — изображение ${index + 1}`}
                className="mx-auto h-auto w-auto max-w-full rounded-sm bg-white/5 shadow-2xl"
                decoding="async"
              />
            </div>
          </div>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Предыдущее изображение"
                className="fixed left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white/80 transition-colors hover:bg-black/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ChevronLeft size={40} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Следующее изображение"
                className="fixed right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white/80 transition-colors hover:bg-black/70 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <ChevronRight size={40} />
              </button>
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
