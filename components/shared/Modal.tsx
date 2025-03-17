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
// import { useRef } from 'react';

export const Modal = ({
  children,
  className,
  innerModal,
}: {
  children: React.ReactNode;
  className: string;
  innerModal: string;
}) => {
  // const imageRef = useRef(<img />);

  // console.log(imageRef.current);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={cn('border-0', className)}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[60vw]" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Detail</DialogTitle>
          <img
            // ref={imageRef}
            className="h-auto w-auto"
            src={innerModal}
            alt="image"
          />
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <DialogTitle></DialogTitle>
      </DialogContent>
    </Dialog>
  );
};
