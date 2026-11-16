import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Alfa_Slab_One } from 'next/font/google';
import { Grid } from '@/components/shared/Grid';
import { cn } from '@/lib/utils';
import {
  allProjects,
  getProjectBySlug,
  getSectionBySlug,
} from '@/lib/projects';

const alfaSlabOne = Alfa_Slab_One({
  style: 'normal',
  weight: '400',
  subsets: ['latin', 'latin-ext', 'vietnamese'],
});

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Only the slugs returned by generateStaticParams exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.link }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const description =
    project.description || `${project.name} — проект в портфолио UI/UX дизайнера.`;

  return {
    title: project.name,
    description,
    alternates: { canonical: `/${project.link}` },
    openGraph: {
      type: 'article',
      title: project.name,
      description,
      url: `/${project.link}`,
      images: [{ url: project.cover, width: 1280, alt: project.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.name,
      description,
      images: [project.cover],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const section = getSectionBySlug(slug);
  const currentIndex = allProjects.findIndex((item) => item.link === project.link);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <main className={cn('relative z-[5]', alfaSlabOne.className)}>
      <div className="max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-sans text-base text-white/70 transition-colors hover:text-white"
        >
          <ArrowLeft size={18} />
          Все проекты
        </Link>

        {section && (
          <p className="mt-8 font-sans text-sm uppercase tracking-[0.2em] text-white/60">
            {section.title}
          </p>
        )}
        <h1 className="mt-2 text-6xl/[1.1] max-sm:text-4xl">{project.name}</h1>
        {project.description && (
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-white/80">
            {project.description}
          </p>
        )}
      </div>

      <Grid className="mt-12" images={project.images} title={project.name} />

      <nav className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/20 pt-6 font-sans text-lg">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
        >
          <ArrowLeft size={20} />
          Все проекты
        </Link>
        {nextProject && (
          <Link
            href={`/${nextProject.link}`}
            className="inline-flex items-center gap-2 text-white/70 transition-colors hover:text-white"
          >
            Следующий проект: {nextProject.name}
            <ArrowRight size={20} />
          </Link>
        )}
      </nav>
    </main>
  );
}
