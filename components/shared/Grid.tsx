import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface Props {
  className?: string;
  imgPaths: string[];
}

export const Grid: React.FC<Props> = ({ className, imgPaths }) => {
  return (
    <div className={cn('grid grid-flow-col-dense gap-2', className)}>
      {imgPaths.map((image) => (
        <Image
          src={image}
          key={image}
          alt="image"
          width={200}
          height={200}
          className="object-contain transition-all hover:-translate-y-3 hover:shadow-2xl"
        />
      ))}
    </div>
  );
};
