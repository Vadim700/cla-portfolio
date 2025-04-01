'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
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
  const [isSingleImage, setIsSingleImage] = useState(false);
  const [isMultiPage, setIsMultiPage] = useState(false);

  const initModal = (image: string) => {
    setIsModal(true);
    setImgaeModal(image);
  };

  const onClose = () => {
    setIsModal(false);
  };

  useEffect(() => {
    imgPaths.length > 1 ? setIsSingleImage(false) : setIsSingleImage(true);
    imgPaths.length > 4 ? setIsMultiPage(false) : setIsMultiPage(true);
  }, []);

  return (
    <div
      className={cn(
        'grid grid-flow-col-dense gap-2 justify-center',
        !isMultiPage
          ? 'max-md:flex max-md:flex-wrap max-md:w-full max-md:justify-between'
          : '',
        className,
      )}
    >
      {imgPaths.map((image) => (
        <ModalButton
          key={image}
          className={cn(
            'h-[75vh] p-0 flex items-start group shadow-none',
            !isMultiPage ? 'max-md:max-w-[30%] max-md:h-auto' : '',
          )}
          innerModal={imageModal}
        >
          <Image
            className={cn(
              'object-contain cursor-pointer transition-all hover:-translate-y-1 hover:shadow-2xl w-auto group-hover:-translate-y-1',
              isSingleImage ? 'h-[75vh]' : 'max-h-[75vh]',
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
          <Modal src={imageModal} closeModal={onClose} images={imgPaths} />,
          document.body,
        )}
    </div>
  );
};
