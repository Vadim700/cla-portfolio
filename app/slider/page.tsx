import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default () => {
  return (
    <Carousel
      className="z-10 h-[600px] grid place-content-center"
      opts={{
        align: 'center',
        startIndex: 17,
      }}
    >
      <CarouselContent className="text-center text-6xl">
        {Array.from({ length: 22 }).map((_, index) => (
          <CarouselItem key={index}>{index}</CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
