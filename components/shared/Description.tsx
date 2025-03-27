import { cn } from '@/lib/utils';
import { Rubik_Glitch, Rubik_Iso } from 'next/font/google';
import React from 'react';

interface Props {
  className?: string;
  title: string;
  description?: string;
}

const rubikIso = Rubik_Iso({
  style: 'normal',
  weight: '400',
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'hebrew'],
});

export const Description: React.FC<Props> = ({
  className,
  title,
  description,
}) => {
  return (
    <div className={cn('', className)}>
      <h1 className={cn("text-5xl mb-3", rubikIso.className)}>{title}</h1>
      <span className={cn('text-3xl', rubikIso.className)}> {description}</span>
    </div>
  );
};
