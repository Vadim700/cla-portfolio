import { cn } from '@/lib/utils';
import React from 'react';
import { useKey } from 'react-use';
import { Slider } from './Slider';

interface Props {
  className?: string;
  src: string;
  images: string[];
  closeModal: (a: boolean) => void;
}

export const Modal: React.FC<Props> = ({
  className,
  src,
  closeModal,
  images,
}) => {
  useKey('Escape', () => onclickClose());

  const onclickClose = () => {
    closeModal(false);
  };

  const startIndex = images.findIndex((i) => i === src);

  return (
    <div
      className={cn(
        'no-scrollbar',
        'z-10 absolute w-full h-full  overflow-auto',
        className,
      )}
    >
      <div className={cn('relative min-h-full grid place-items-center')}>
        <div className="w-full max-md:h-full">
          <Slider
            images={images}
            selectedImage={startIndex}
            closeModal={onclickClose}
          />
        </div>
      </div>
    </div>
  );
};
