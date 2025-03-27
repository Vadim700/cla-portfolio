import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { useClickAway, useKey } from 'react-use';

interface Props {
  className?: string;
  src: string;
  closeModal: (a: boolean) => void;
}

export const Modal: React.FC<Props> = ({ className, src, closeModal }) => {
  const ref = useRef(null);
  useKey('Escape', () => onclickClose());

  useClickAway(ref, () => {
    onclickClose();
  });

  const onclickClose = () => {
    closeModal(false);
  };

  return (
    <div
      className={cn(
        'no-scrollbar',
        'z-10 absolute w-full h-[101vh]  overflow-auto',
        className,
      )}
    >
      <button
        className="fixed z-10 right-5 top-5 hover:text-[#f2c50d]"
        onClick={onclickClose}
      >
        <X size={40} />
      </button>
      <div
        className={cn('relative p-10 min-h-full grid place-items-center', 'modal-inner ')}
      >
        <div className="" ref={ref}>
          {src && <img src={src} alt="Detail image" />}
        </div>
      </div>
    </div>
  );
};
