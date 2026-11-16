'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  className?: string;
  name: string;
  cover: string;
  link: string;
  priority?: boolean;
}

export const CartItem: React.FC<Props> = ({ className, name, cover, link, priority }) => {
  return (
    <Link
      href={`/${link}`}
      aria-label={`Открыть проект ${name}`}
      className={cn(
        'group relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-[8px] shadow-2xl backdrop-blur-lg transition-transform hover:scale-[1.01]',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white',
        'before:absolute before:inset-0 before:z-10 before:bg-black/0 before:transition-colors before:content-[""] hover:before:bg-black/15',
        className,
      )}
    >
      <Image
        src={cover}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 420px"
        priority={priority}
        className="object-cover"
      />
      <span className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between gap-3 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-4 pt-12">
        <span className="font-display text-2xl/[1.1] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)] max-[478px]:text-xl">
          {name}
        </span>
        <span
          aria-hidden="true"
          className="font-sans text-xs uppercase tracking-widest text-white/80 opacity-0 transition-opacity group-hover:opacity-100"
        >
          Кейс →
        </span>
      </span>
    </Link>
  );
};
