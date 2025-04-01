import { Description } from '@/components/shared/Description';
import { Grid } from '@/components/shared/Grid';
import { cn } from '@/lib/utils';
import { dataImages } from '@/public/data';
import { Alfa_Slab_One } from 'next/font/google';

const alfaSlabOne = Alfa_Slab_One({
  style: 'normal',
  weight: '400',
  subsets: ['latin', 'latin-ext', 'vietnamese'],
});

export default async function PageComponent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const objs = Object.values(dataImages);
  const currentPage = objs.flat().find((i) => i.link === slug);

  return (
    <main className={cn('relative z-[5]', alfaSlabOne.className)}>
      <Grid imgPaths={currentPage?.images ?? []} className="" />
      <Description
        title={currentPage?.name as string}
        description={currentPage?.description}
        className={cn(
          'absolute right-0 -top-48 text-right max-w-[65%]',
          'max-2xl:top-[auto] max-2xl:-bottom-8 max-2xl:p-8 dark-blur',
          'max-md:max-w-full max-md:relative text-left',
        )}
      />
    </main>
  );
}
