import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { useRef } from 'react';
import { useKey } from 'react-use';

interface Props {
  className?: string;
  images: string[];
  selectedImage: number;
  closeModal: (a: boolean) => void;
}

export const Slider: React.FC<Props> = ({
  className,
  images,
  selectedImage,
  closeModal,
}) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useKey('ArrowRight', (e) => {
    e.preventDefault();
    nextRef.current?.click();
  });
  useKey('ArrowLeft', () => prevRef.current?.click());

  const onclickClose = () => {
    closeModal(false);
  };

  return (
    <Carousel
      className={cn('z-10 grid ', className)}
      opts={{
        align: 'center',
        startIndex: selectedImage,
      }}
    >
      <button
        className="fixed z-10 right-5 top-5 text-[#ea4c3d] hover:text-[#f2c50d]"
        onClick={onclickClose}
      >
        <X size={40} />
      </button>
      <CarouselContent className="text-center text-6xl">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="flex justify-center align-top items-start"
          >
            <img src={image} alt="" className="object-contain max-w-[90%]" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious ref={prevRef} className="left-5 fixed top-[50%]" />
      <CarouselNext ref={nextRef} className="right-5 fixed top-[50%]" />
    </Carousel>
  );
};
