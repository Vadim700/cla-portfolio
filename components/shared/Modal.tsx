/* eslint-disable @next/next/no-img-element */
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

export const Modal = ({
  children,
  className,
  innerModal,
}: {
  children: React.ReactNode;
  className: string;
  innerModal: string;
}) => {
  const [, setTranslateModal] = useState(0);
  const translateRef = useRef(0);
  const modalRef = useRef(null);

  function onWheel(e: WheelEvent) {
    e.preventDefault();
    const delta = e.deltaY;
    translateRef.current += delta;
    setTranslateModal(translateRef.current);
    console.log(Math.round(translateRef.current));
  }

  const onModalOpen = () => {
    window.addEventListener('wheel', onWheel, { passive: false });
  };

  const onModalClose = () => {
    window.removeEventListener('wheel', onWheel);
  };

  useEffect(() => {
    return () => {
      onModalClose();
    };
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          onClick={onModalOpen}
          variant="outline"
          className={cn('border-0', className)}
        >
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent
        ref={modalRef}
        style={{ top: `-${Math.round(translateRef.current)}px` }}
        className={cn('sm:max-w-[50vw]')}
        aria-describedby={undefined}
      >
        <DialogHeader>
          <DialogTitle>Detail</DialogTitle>
          <img className="h-auto w-auto" src={innerModal} alt="image" />
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <DialogTitle></DialogTitle>
      </DialogContent>
    </Dialog>
  );
};
