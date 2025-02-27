import { Description } from '@/components/shared/Description';
import { Grid } from '@/components/shared/Grid';
import { cn } from '@/lib/utils';
import { dataImages } from '@/public/data';
import { Alfa_Slab_One } from 'next/font/google';

interface Props {
  className?: string;
}

const alfaSlabOne = Alfa_Slab_One({
  style: 'normal',
  weight: '400',
});

const imgPaths = dataImages.multiPage[0].images;

const WoodHousePage: React.FC<Props> = ({ className }) => {
  return (
    <main
      className={cn(
        'relative z-10 flex justify-between',
        alfaSlabOne.className,
        className,
      )}
    >
      <Description
        title="Wood House"
        className="absolute right-0 bottom-0 max-w-[65%] text-right"
      />
      <Grid imgPaths={imgPaths} className="" />
    </main>
  );
};

export default WoodHousePage;
