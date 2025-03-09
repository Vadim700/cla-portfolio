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
import Image from 'next/image';

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
      <DialogContent className="sm:max-w-[425px]" aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>Modal Title</DialogTitle>
          <Image
            className="h-auto w-auto"
            src={innerModal}
            alt="image"
            priority={true}
            width={200}
            height={200}
          />
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <DialogTitle></DialogTitle>
      </DialogContent>
    </Dialog>
  );
};
