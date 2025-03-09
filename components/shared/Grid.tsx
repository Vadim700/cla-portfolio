'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react';
import { Modal } from './Modal';

interface Props {
  className?: string;
  imgPaths: string[];
}

export const Grid: React.FC<Props> = ({ className, imgPaths }) => {
  const [imageModal, setImgaeModal] = useState('');

  return (
    <div
      className={cn('grid grid-flow-col-dense gap-2 justify-center', className)}
    >
      {imgPaths.map((image) => (
        <Modal
          key={image}
          className="h-[70vh] p-0 flex items-start group shadow-none"
          innerModal={imageModal}
        >
          <Image
            className="object-contain max-h-[75vh] cursor-pointer transition-all hover:-translate-y-1 hover:shadow-2xl w-auto group-hover:-translate-y-1"
            onClick={() => setImgaeModal(image)}
            src={image}
            key={image}
            alt="image"
            priority={true}
            width={200}
            height={200}
          />
        </Modal>
      ))}
    </div>
  );
};
