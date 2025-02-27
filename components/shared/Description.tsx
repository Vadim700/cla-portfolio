import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
  title: string;
}

export const Description: React.FC<Props> = ({ className, title }) => {
  return (
    <div className={cn('', className)}>
      <h1 className="text-6xl mb-5">{title}</h1>
      <span className='text-3xl'>
        {' '}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate illo
        rem laborum eius, placeat omnis dolores asperiores a quibusdam hic?
      </span>
    </div>
  );
};
