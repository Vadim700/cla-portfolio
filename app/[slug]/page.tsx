import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Grid } from '@/components/shared/Grid';
import { allProjects, getProjectBySlug, getSectionBySlug } from '@/lib/projects';

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
  const ogImage = `/projects/${project.link}/og.jpg`;

  return {
    title: project.name,
    description,
    alternates: { canonical: `/${project.link}` },
    openGraph: {
      type: 'article',
      title: project.name,
      description,
      url: `/${project.link}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: project.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.name,
      description,
      images: [ogImage],
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
    <main className="relative z-[5] font-display">
      <div className="max-w-4xl rounded-2xl bg-[#2d3d51]/85 p-6 backdrop-blur-md md:p-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-sans text-base text-white/70 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Все проекты
        </Link>

        {section && (
          <p className="mt-8 font-sans text-sm uppercase tracking-[0.2em] text-white/70">
            {section.title}
          </p>
        )}
        <h1 className="mt-2 text-6xl/[1.1] max-sm:text-4xl">{project.name}</h1>
        {project.description && (
          <p className="mt-6 max-w-2xl font-sans text-lg leading-relaxed text-white/85">
            {project.description}
          </p>
        )}
      </div>

      <Grid className="mt-12" images={project.images} title={project.name} />

      <nav
        aria-label="Навигация по проектам"
        className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-[#1b1d3a]/85 px-5 py-4 font-sans text-lg backdrop-blur-md"
      >
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <ArrowLeft size={20} aria-hidden="true" />
          Все проекты
        </Link>
        {nextProject && (
          <Link
            href={`/${nextProject.link}`}
            className="inline-flex items-center gap-2 text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Следующий проект: {nextProject.name}
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        )}
      </nav>
    </main>
  );
}
