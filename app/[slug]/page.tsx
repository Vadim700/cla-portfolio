import { cn } from '@/lib/utils';
import { dataImages } from '@/public/data';
import Image from 'next/image';

interface Props {
  className?: string;
  params: {
    slug: string;
  };
}

const PageComponent: React.FC<Props> = async ({ className, params }: Props) => {
  const { slug } = await params;

  const objs = Object.values(dataImages);

  const finded = objs.map((array) => {
    return array.find((obj) => obj.name === slug);
  });

  return (
    <main className={cn('relative z-[5] border', className)}>
      {finded[0]?.images.map((i) => (
        <Image src={i} width={400} height={600} key={i} alt="image" />
      ))}
    </main>
  );
};

export default PageComponent;
