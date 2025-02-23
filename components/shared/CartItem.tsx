'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React, { useId } from 'react';

interface Props {
  className?: string;
  id: number;
  name: string;
  preview: string;
}

export const CartItem: React.FC<Props> = ({ className, name, preview }) => {
  const id = useId();

  return (
    <Link
      href={`/${name}`}
      data-content={name}
      id={id}
      className={cn(
        'relative flex items-center justify-center aspect-[16/9]  rounded-[8px] backdrop-blur-lg transition-all overflow-hidden hover:scale-[1.01] hover:shadow-2xl',

        'before:absolute before:w-full before:h-full before:bg-[rgba(0,0,0,.45)] before:hover:bg-[rgba(0,0,0,0)] hover:after:opacity-0 after:transition-all before:transition-all',

        `after:absolute after:grid after:place-content-center after:content-[attr(data-content)] after:text-5xl  after:w-full after:h-full text-white before:group-hover:bg-[rgba(0,0,0,0)]`,

        className,
      )}
    >
      <Image
        src={preview}
        className="object-cover w-full h-full"
        alt="Image"
        width={350}
        height={250}
        priority={true}
      />
    </Link>
  );
};
