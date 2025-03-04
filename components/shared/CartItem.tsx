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
  link: string;
}

export const CartItem: React.FC<Props> = ({
  className,
  name,
  preview,
  link,
}) => {
  const id = useId();

  return (
    <Link
      href={`/${link}`}
      data-content={name}
      id={id}
      className={cn(
        'relative flex items-center justify-center aspect-[16/9]  rounded-[8px] backdrop-blur-lg transition-all overflow-hidden hover:scale-[1.01] shadow-2xl',

        'before:absolute before:w-full before:h-full hover:before:bg-[rgba(0,0,0,.65)] after:transition-all before:transition-all',

        `after:absolute after:grid after:place-content-center hover:after:content-[attr(data-content)] after:text-5xl  after:w-full after:h-full text-white before:group-hover:bg-[rgba(0,0,0,0)]`,

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
