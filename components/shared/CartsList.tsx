import React from 'react';
import { CartItem } from './CartItem';
import { cn } from '@/lib/utils';
import type { Project } from '@/lib/projects';

interface Props {
  className?: string;
  title?: string;
  projects: Project[];
  /** Preload the first covers; only the first section is above the fold. */
  prioritize?: boolean;
}

export const CartsList: React.FC<Props> = ({ className, title, projects, prioritize = false }) => {
  return (
    <section className={cn('list gap-4 pl-[14vw] pt-1', 'max-xl:pl-0', className)}>
      <h2 className="grid place-content-center text-7xl/[1.25] border-l-2 border-b-2 max-[780px]:border-r-2 max-[780px]:backdrop-blur-lg text-center px-4 rounded-[8px] whitespace-normal break-words">
        {title}
      </h2>
      {projects.map((project, index) => (
        <CartItem
          key={project.id}
          name={project.name}
          link={project.link}
          cover={project.cover}
          priority={prioritize && index < 2}
        />
      ))}
    </section>
  );
};
