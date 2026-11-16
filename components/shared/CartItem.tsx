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
      data-content={name}
      aria-label={`Открыть проект ${name}`}
      className={cn(
        'group relative flex items-center justify-center aspect-[16/9] rounded-[8px] backdrop-blur-lg transition-transform overflow-hidden hover:scale-[1.01] shadow-2xl',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white',
        'before:absolute before:inset-0 before:z-10 before:bg-black/0 before:transition-colors before:content-[""] hover:before:bg-black/65',
        'after:absolute after:inset-0 after:z-20 after:grid after:place-content-center after:px-4 after:text-center after:text-5xl after:leading-tight after:text-white after:opacity-0 after:transition-opacity after:content-[attr(data-content)] hover:after:opacity-100',
        className,
      )}
    >
      <Image
        src={cover}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 45vw, 420px"
        priority={priority}
        className="object-cover"
      />
    </Link>
  );
};
