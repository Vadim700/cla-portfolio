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
  const ref = useRef(null);

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
      <CarouselPrevious className="left-5 fixed top-[50%]" />
      <CarouselNext className="right-5 fixed top-[50%]" />
    </Carousel>
  );
};
