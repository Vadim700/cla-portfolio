'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react';
import { ModalButton } from './ModalButton';
import { Modal } from './Modal';
import { createPortal } from 'react-dom';

interface Props {
  className?: string;
  imgPaths: string[];
}

export const Grid: React.FC<Props> = ({ className, imgPaths }) => {
  const [imageModal, setImgaeModal] = useState('');
  const [isModal, setIsModal] = useState(false);

  const initModal = (image: string) => {
    setIsModal(true);
    setImgaeModal(image);
  };

  const onClose = () => {
    setIsModal(false);
  };

  return (
    <div
      className={cn('grid grid-flow-col-dense gap-2 justify-center', className)}
    >
      {imgPaths.map((image) => (
        <ModalButton
          key={image}
          className="h-[70vh] p-0 flex items-start group shadow-none"
          innerModal={imageModal}
        >
          <Image
            className={cn(
              'object-contain max-h-[70vh] cursor-pointer transition-all hover:-translate-y-1 hover:shadow-2xl w-auto group-hover:-translate-y-1',
            )}
            onClick={() => initModal(image)}
            src={image}
            key={image}
            alt="image"
            priority={true}
            width={200}
            height={200}
          />
        </ModalButton>
      ))}
      {isModal &&
        createPortal(
          <Modal src={imageModal} closeModal={onClose} />,
          document.body,
        )}
    </div>
  );
};
