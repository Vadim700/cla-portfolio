import type { MetadataRoute } from 'next';
import { allProjects } from '@/lib/projects';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: new URL('/', siteUrl).toString(),
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...allProjects.map((project) => ({
      url: new URL(`/${project.link}`, siteUrl).toString(),
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ];
}
