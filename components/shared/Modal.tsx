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

export const Modal = ({
  children,
  className,
  innerModal,
}: {
  children: React.ReactNode;
  className: string;
  innerModal: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={cn('border-0', className)}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[50vw]" aria-describedby={undefined}>
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
