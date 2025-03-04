import { Description } from '@/components/shared/Description';
import { Grid } from '@/components/shared/Grid';
import { cn } from '@/lib/utils';
import { dataImages } from '@/public/data';
import { Alfa_Slab_One } from 'next/font/google';

interface Props {
  className?: string;
  params: {
    slug: string;
  };
}

const alfaSlabOne = Alfa_Slab_One({
  style: 'normal',
  weight: '400',
  subsets: ['latin', 'latin-ext', 'vietnamese'],
});

const PageComponent: React.FC<Props> = async ({ className, params }) => {
  const { slug } = await params;

  const objs = Object.values(dataImages);

  const currentPage = objs.flat().find((i) => i.link === slug);

  return (
    <main
      className={cn('relative z-[5] border', alfaSlabOne.className, className)}
    >
      <Grid imgPaths={currentPage?.images ?? []} className="" />
      <Description
        title={currentPage?.name as string}
        className="absolute right-0 bottom-0 max-w-[65%] text-right"
      />
    </main>
  );
};

export default PageComponent;
