import { CartsList } from '@/components/shared/CartsList';
import { cn } from '@/lib/utils';
import { dataImages } from '@/public/data';
import { Alfa_Slab_One } from 'next/font/google';

const { landings, multiPage, apps, bunners } = dataImages;

const alfaSlabOne = Alfa_Slab_One({
  style: 'normal',
  weight: '400',
});

export default function Home() {
  return (
    <main
      className={cn(
        alfaSlabOne.className,
        ' relative z-[5] text-3xl  mb-auto pr-4 overflow-auto max-h-full',
      )}
    >
      <CartsList title={'Landings'} data={landings} className="mb-10" />
      <CartsList title={`Multi Page`} data={multiPage} className="mb-10" />
      <CartsList title={`Mobile Apps`} data={apps} className="mb-10" />
      <CartsList title={`Banners`} data={bunners} className="" />
    </main>
  );
}
