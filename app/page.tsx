import { CartsList } from '@/components/shared/CartsList';
import { cn } from '@/lib/utils';
import { Alfa_Slab_One } from 'next/font/google';

const alfaSlabOne = Alfa_Slab_One({
  style: 'normal',
  weight: '400',
});

const landings = [
  { id: 1, name: 'Dvc', preview: '/images/landings/3DVC/dvc_0.png' },
  {
    id: 2,
    name: 'Cool Job',
    preview: '/images/landings/сooljob_home/Cooljob_home_0.png',
  },
  { id: 3, name: 'Alcan', preview: '/images/landings/Alcan/Alcan_0.png' },
  { id: 4, name: 'Dances', preview: '/images/landings/dances/dens_0.png' },
  // {
  //   id: 5,
  //   name: 'snicers',
  //   preview: '/images/landings/snikers/snicers_0.png',
  // },
  {
    id: 6,
    name: 'Vershina',
    preview: '/images/landings/vershina/vershina_0.png',
  },
];

const multyPage = [
  {
    id: 7,
    name: 'Woodhouse',
    preview: '/images/multypage/woodhouse/woodhouse_0.png',
  },
  // { id: 8, name: 'eight' },
  // { id: 9, name: 'nine' },
  // { id: 10, name: 'ten' },
  // { id: 11, name: 'eleven' },
  // { id: 12, name: 'twelve' },
  // { id: 13, name: 'thirteen' },
  // { id: 14, name: 'fourteen' },
];

const apps = [
  { id: 15, name: 'Bank App', preview: '/images/applications/modil_0.png' },
  // { id: 16, name: 'sixteen' },
  // { id: 17, name: 'seventeen' },
  // { id: 18, name: 'eighteen' },
  // { id: 19, name: 'nineteen' },
  // { id: 20, name: 'twenty' },
];

const banners = [
  { id: 21, name: 'Edu', preview: '/images/banner/Edu/Edu_0.png' },
];

export default function Home() {
  return (
    <main
      className={cn(
        alfaSlabOne.className,
        ' relative z-[5] text-3xl  mb-auto pr-4 overflow-auto max-h-full',
      )}
    >
      <CartsList title={'Landings'} data={landings} className="mb-10" />
      <CartsList title={`Multy Page`} data={multyPage} className="mb-10" />
      <CartsList title={`Mobile Apps`} data={apps} className="mb-10" />
      <CartsList title={`Banners`} data={banners} className="" />
    </main>
  );
}
