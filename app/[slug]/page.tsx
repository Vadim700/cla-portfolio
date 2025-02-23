import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  params: {
    slug: string;
  };
}

const PageComponent: React.FC<Props> = async ({ className, params }: Props) => {
  const { slug } = await params;
  return (
    <main className={cn('relative z-[5]', className)}>Page is: {slug}</main>
  );
};

export default PageComponent;
