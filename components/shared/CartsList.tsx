import React from 'react';
import { CartItem } from './CartItem';
import { cn } from '@/lib/utils';

interface Props {
  className?: string;
  title?: string;
  data: {
    id: number;
    name: string;
    preview: string;
    link: string;
  }[];
}

export const CartsList: React.FC<Props> = ({ className, title, data }) => {
  return (
    <div className={cn('list gap-4 pl-[14vw] pt-1',
      'max-xl:pl-0',
      className)}>
      <h2 className="grid place-content-center text-7xl/[1.25] border-l-2 border-b-2 max-[780px]:border-r-2 max-[780px]:backdrop-blur-lg text-center px-4 rounded-[8px] whitespace-normal break-words">
        {title}
      </h2>
      {data.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          link={item.link}
          id={item.id}
          preview={item.preview}
        />
      ))}
    </div>
  );
};
