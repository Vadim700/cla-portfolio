export type ProjectImage = {
  /** Optimised 4:3 preview for the gallery grid. */
  thumb: string;
  /** Full-size version for the lightbox. */
  full: string;
};

export type Project = {
  id: number;
  name: string;
  link: string;
  description: string;
  cover: string;
  images: ProjectImage[];
};

export type ProjectSectionKey = 'landings' | 'multiPage' | 'apps' | 'banners';

export type ProjectSection = {
  key: ProjectSectionKey;
  title: string;
  projects: Project[];
};

/**
 * Single source of truth for all portfolio work.
 * Images live in /public/projects/<link>/ and are pre-optimised (WebP).
 */
export const projectSections: ProjectSection[] = [
  {
    key: 'landings',
    title: 'Landings',
    projects: [
      {
        id: 1,
        name: 'Dvc',
        link: 'dvc',
        description: 'Современный, интуитивный интерфейс, необычная визуализации, удобная навигация, информация о спикерах и расписании.',
        cover: '/projects/dvc/cover.webp',
        images: [
          { thumb: '/projects/dvc/gallery/01.webp', full: '/projects/dvc/full/01.webp' },
        ],
      },
      {
        id: 2,
        name: 'Cool Job',
        link: 'cooljob',
        description: '',
        cover: '/projects/cooljob/cover.webp',
        images: [
          { thumb: '/projects/cooljob/gallery/01.webp', full: '/projects/cooljob/full/01.webp' },
        ],
      },
      {
        id: 3,
        name: 'Alcan',
        link: 'alcan',
        description: 'Создание адаптивного макета сайта с использованием медиа-запросов CSS, гибкой сетки и масштабируемых изображений для оптимального отображения на разных устройствах.',
        cover: '/projects/alcan/cover.webp',
        images: [
          { thumb: '/projects/alcan/gallery/01.webp', full: '/projects/alcan/full/01.webp' },
          { thumb: '/projects/alcan/gallery/02.webp', full: '/projects/alcan/full/02.webp' },
          { thumb: '/projects/alcan/gallery/03.webp', full: '/projects/alcan/full/03.webp' },
          { thumb: '/projects/alcan/gallery/04.webp', full: '/projects/alcan/full/04.webp' },
        ],
      },
      {
        id: 4,
        name: 'Dances',
        link: 'dances',
        description: 'Сайт по танцам предлагает уроки, видеоуроки, статьи и советы для танцоров всех уровней. Удобный интерфейс и разнообразие стилей!',
        cover: '/projects/dances/cover.webp',
        images: [
          { thumb: '/projects/dances/gallery/01.webp', full: '/projects/dances/full/01.webp' },
        ],
      },
      {
        id: 6,
        name: 'Vershina',
        link: 'vershina',
        description: 'Природный парк Ергаки — живописное место в Сибири с уникальными ландшафтами, горами, озерами и разнообразной флорой и фауной.',
        cover: '/projects/vershina/cover.webp',
        images: [
          { thumb: '/projects/vershina/gallery/01.webp', full: '/projects/vershina/full/01.webp' },
        ],
      },
      {
        id: 61,
        name: 'Porolosh',
        link: 'porolosh',
        description: 'Сайт предлагает широкий ассортимент рыбных снастей: удочки, катушки, приманки и аксессуары. Удобная навигация и полезные советы для рыбаков, фото и видео улова.',
        cover: '/projects/porolosh/cover.webp',
        images: [
          { thumb: '/projects/porolosh/gallery/01.webp', full: '/projects/porolosh/full/01.webp' },
          { thumb: '/projects/porolosh/gallery/02.webp', full: '/projects/porolosh/full/02.webp' },
        ],
      },
    ],
  },
  {
    key: 'multiPage',
    title: 'Multi Page',
    projects: [
      {
        id: 7,
        name: 'Woodhouse',
        link: 'woodhouse',
        description: 'Сайт предлагает уникальные интерьеры из дерева, сочетая экологичность и стиль. Вдохновение для уютного и современного дизайна вашего дома.',
        cover: '/projects/woodhouse/cover.webp',
        images: [
          { thumb: '/projects/woodhouse/gallery/01.webp', full: '/projects/woodhouse/full/01.webp' },
          { thumb: '/projects/woodhouse/gallery/02.webp', full: '/projects/woodhouse/full/02.webp' },
          { thumb: '/projects/woodhouse/gallery/03.webp', full: '/projects/woodhouse/full/03.webp' },
          { thumb: '/projects/woodhouse/gallery/04.webp', full: '/projects/woodhouse/full/04.webp' },
          { thumb: '/projects/woodhouse/gallery/05.webp', full: '/projects/woodhouse/full/05.webp' },
          { thumb: '/projects/woodhouse/gallery/06.webp', full: '/projects/woodhouse/full/06.webp' },
          { thumb: '/projects/woodhouse/gallery/07.webp', full: '/projects/woodhouse/full/07.webp' },
          { thumb: '/projects/woodhouse/gallery/08.webp', full: '/projects/woodhouse/full/08.webp' },
          { thumb: '/projects/woodhouse/gallery/09.webp', full: '/projects/woodhouse/full/09.webp' },
        ],
      },
      {
        id: 8,
        name: 'Burmash',
        link: 'burmash',
        description: 'Сайт предлагает широкий ассортимент шнеков, включая характеристики, применение и технические детали для различных отраслей.',
        cover: '/projects/burmash/cover.webp',
        images: [
          { thumb: '/projects/burmash/gallery/01.webp', full: '/projects/burmash/full/01.webp' },
          { thumb: '/projects/burmash/gallery/02.webp', full: '/projects/burmash/full/02.webp' },
          { thumb: '/projects/burmash/gallery/03.webp', full: '/projects/burmash/full/03.webp' },
          { thumb: '/projects/burmash/gallery/04.webp', full: '/projects/burmash/full/04.webp' },
          { thumb: '/projects/burmash/gallery/05.webp', full: '/projects/burmash/full/05.webp' },
          { thumb: '/projects/burmash/gallery/06.webp', full: '/projects/burmash/full/06.webp' },
          { thumb: '/projects/burmash/gallery/07.webp', full: '/projects/burmash/full/07.webp' },
          { thumb: '/projects/burmash/gallery/08.webp', full: '/projects/burmash/full/08.webp' },
          { thumb: '/projects/burmash/gallery/09.webp', full: '/projects/burmash/full/09.webp' },
          { thumb: '/projects/burmash/gallery/10.webp', full: '/projects/burmash/full/10.webp' },
          { thumb: '/projects/burmash/gallery/11.webp', full: '/projects/burmash/full/11.webp' },
        ],
      },
      {
        id: 9,
        name: 'Sota',
        link: 'sota',
        description: 'Сайт предлагает широкий выбор теплиц и садовых домов, предоставляет полезные советы по их строительству, выбору материалов и уходу, а также вдохновляющие идеи для вашего сада.',
        cover: '/projects/sota/cover.webp',
        images: [
          { thumb: '/projects/sota/gallery/01.webp', full: '/projects/sota/full/01.webp' },
          { thumb: '/projects/sota/gallery/02.webp', full: '/projects/sota/full/02.webp' },
          { thumb: '/projects/sota/gallery/03.webp', full: '/projects/sota/full/03.webp' },
          { thumb: '/projects/sota/gallery/04.webp', full: '/projects/sota/full/04.webp' },
          { thumb: '/projects/sota/gallery/05.webp', full: '/projects/sota/full/05.webp' },
          { thumb: '/projects/sota/gallery/06.webp', full: '/projects/sota/full/06.webp' },
          { thumb: '/projects/sota/gallery/07.webp', full: '/projects/sota/full/07.webp' },
          { thumb: '/projects/sota/gallery/08.webp', full: '/projects/sota/full/08.webp' },
          { thumb: '/projects/sota/gallery/09.webp', full: '/projects/sota/full/09.webp' },
          { thumb: '/projects/sota/gallery/10.webp', full: '/projects/sota/full/10.webp' },
          { thumb: '/projects/sota/gallery/11.webp', full: '/projects/sota/full/11.webp' },
          { thumb: '/projects/sota/gallery/12.webp', full: '/projects/sota/full/12.webp' },
          { thumb: '/projects/sota/gallery/13.webp', full: '/projects/sota/full/13.webp' },
          { thumb: '/projects/sota/gallery/14.webp', full: '/projects/sota/full/14.webp' },
          { thumb: '/projects/sota/gallery/15.webp', full: '/projects/sota/full/15.webp' },
          { thumb: '/projects/sota/gallery/16.webp', full: '/projects/sota/full/16.webp' },
          { thumb: '/projects/sota/gallery/17.webp', full: '/projects/sota/full/17.webp' },
          { thumb: '/projects/sota/gallery/18.webp', full: '/projects/sota/full/18.webp' },
          { thumb: '/projects/sota/gallery/19.webp', full: '/projects/sota/full/19.webp' },
          { thumb: '/projects/sota/gallery/20.webp', full: '/projects/sota/full/20.webp' },
        ],
      },
      {
        id: 10,
        name: 'SPK Group',
        link: 'spkgroup',
        description: 'Многостраничный сайт завода по производству дробеструйных камер.',
        cover: '/projects/spkgroup/cover.webp',
        images: [
          { thumb: '/projects/spkgroup/gallery/01.webp', full: '/projects/spkgroup/full/01.webp' },
          { thumb: '/projects/spkgroup/gallery/02.webp', full: '/projects/spkgroup/full/02.webp' },
          { thumb: '/projects/spkgroup/gallery/03.webp', full: '/projects/spkgroup/full/03.webp' },
          { thumb: '/projects/spkgroup/gallery/04.webp', full: '/projects/spkgroup/full/04.webp' },
          { thumb: '/projects/spkgroup/gallery/05.webp', full: '/projects/spkgroup/full/05.webp' },
          { thumb: '/projects/spkgroup/gallery/06.webp', full: '/projects/spkgroup/full/06.webp' },
          { thumb: '/projects/spkgroup/gallery/07.webp', full: '/projects/spkgroup/full/07.webp' },
          { thumb: '/projects/spkgroup/gallery/08.webp', full: '/projects/spkgroup/full/08.webp' },
          { thumb: '/projects/spkgroup/gallery/09.webp', full: '/projects/spkgroup/full/09.webp' },
          { thumb: '/projects/spkgroup/gallery/10.webp', full: '/projects/spkgroup/full/10.webp' },
          { thumb: '/projects/spkgroup/gallery/11.webp', full: '/projects/spkgroup/full/11.webp' },
          { thumb: '/projects/spkgroup/gallery/12.webp', full: '/projects/spkgroup/full/12.webp' },
          { thumb: '/projects/spkgroup/gallery/13.webp', full: '/projects/spkgroup/full/13.webp' },
          { thumb: '/projects/spkgroup/gallery/14.webp', full: '/projects/spkgroup/full/14.webp' },
        ],
      },
      {
        id: 11,
        name: 'Suvenir Avenue',
        link: 'suvenir',
        description: 'Интуитивно понятный интерфейс, широкий ассортимент товаров, удобная навигация, безопасные способы оплаты и быстрая доставка.',
        cover: '/projects/suvenir/cover.webp',
        images: [
          { thumb: '/projects/suvenir/gallery/01.webp', full: '/projects/suvenir/full/01.webp' },
          { thumb: '/projects/suvenir/gallery/02.webp', full: '/projects/suvenir/full/02.webp' },
          { thumb: '/projects/suvenir/gallery/03.webp', full: '/projects/suvenir/full/03.webp' },
          { thumb: '/projects/suvenir/gallery/04.webp', full: '/projects/suvenir/full/04.webp' },
          { thumb: '/projects/suvenir/gallery/05.webp', full: '/projects/suvenir/full/05.webp' },
          { thumb: '/projects/suvenir/gallery/06.webp', full: '/projects/suvenir/full/06.webp' },
          { thumb: '/projects/suvenir/gallery/07.webp', full: '/projects/suvenir/full/07.webp' },
          { thumb: '/projects/suvenir/gallery/08.webp', full: '/projects/suvenir/full/08.webp' },
          { thumb: '/projects/suvenir/gallery/09.webp', full: '/projects/suvenir/full/09.webp' },
          { thumb: '/projects/suvenir/gallery/10.webp', full: '/projects/suvenir/full/10.webp' },
          { thumb: '/projects/suvenir/gallery/11.webp', full: '/projects/suvenir/full/11.webp' },
          { thumb: '/projects/suvenir/gallery/12.webp', full: '/projects/suvenir/full/12.webp' },
          { thumb: '/projects/suvenir/gallery/13.webp', full: '/projects/suvenir/full/13.webp' },
        ],
      },
    ],
  },
  {
    key: 'apps',
    title: 'Mobile Apps',
    projects: [
      {
        id: 15,
        name: 'Bank App',
        link: 'bankapp',
        description: 'Приложение для учета расходов: интуитивный интерфейс, возможность управления бюджетом, аналитика по категориям, напоминания о платежах.',
        cover: '/projects/bankapp/cover.webp',
        images: [
          { thumb: '/projects/bankapp/gallery/01.webp', full: '/projects/bankapp/full/01.webp' },
          { thumb: '/projects/bankapp/gallery/02.webp', full: '/projects/bankapp/full/02.webp' },
          { thumb: '/projects/bankapp/gallery/03.webp', full: '/projects/bankapp/full/03.webp' },
          { thumb: '/projects/bankapp/gallery/04.webp', full: '/projects/bankapp/full/04.webp' },
          { thumb: '/projects/bankapp/gallery/05.webp', full: '/projects/bankapp/full/05.webp' },
          { thumb: '/projects/bankapp/gallery/06.webp', full: '/projects/bankapp/full/06.webp' },
          { thumb: '/projects/bankapp/gallery/07.webp', full: '/projects/bankapp/full/07.webp' },
        ],
      },
    ],
  },
  {
    key: 'banners',
    title: 'Banners',
    projects: [
      {
        id: 21,
        name: 'Edu',
        link: 'edu',
        description: '',
        cover: '/projects/edu/cover.webp',
        images: [
          { thumb: '/projects/edu/gallery/01.webp', full: '/projects/edu/full/01.webp' },
        ],
      },
      {
        id: 22,
        name: 'Flowers',
        link: 'flowers',
        description: 'Элегантные букеты и уникальные композиции: цветы для особых моментов вашей жизни.',
        cover: '/projects/flowers/cover.webp',
        images: [
          { thumb: '/projects/flowers/gallery/01.webp', full: '/projects/flowers/full/01.webp' },
          { thumb: '/projects/flowers/gallery/02.webp', full: '/projects/flowers/full/02.webp' },
          { thumb: '/projects/flowers/gallery/03.webp', full: '/projects/flowers/full/03.webp' },
          { thumb: '/projects/flowers/gallery/04.webp', full: '/projects/flowers/full/04.webp' },
        ],
      },
    ],
  },
];

export const allProjects: Project[] = projectSections.flatMap((section) => section.projects);

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find((project) => project.link === slug);
}

export function getSectionBySlug(slug: string): ProjectSection | undefined {
  return projectSections.find((section) => section.projects.some((project) => project.link === slug));
}
