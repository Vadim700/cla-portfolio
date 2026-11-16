import type { Metadata } from 'next';
import { WindSong, Rubik_Dirt } from 'next/font/google';
import './globals.scss';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { House } from 'lucide-react';

const windSong = WindSong({
  weight: ['500'],
  subsets: ['latin', 'latin-ext', 'vietnamese'],
});

const rubikDirt = Rubik_Dirt({
  style: 'normal',
  weight: '400',
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'hebrew'],
});

const description =
  'Портфолио UI/UX дизайнера: лендинги, многостраничные сайты, мобильные приложения и баннеры.';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'Bekmansurova Juliya — UI/UX дизайнер',
    template: '%s — Bekmansurova Juliya',
  },
  description,
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Bekmansurova Juliya',
    url: '/',
    title: 'Bekmansurova Juliya — UI/UX дизайнер',
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bekmansurova Juliya — UI/UX дизайнер',
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={cn(
          'grid grid-rows-[auto_1fr_auto] p-8 pt-12 bg-[#2d3d51] text-white',
          'max-[478px]:justify-center',
          'max-sm:p-0',
        )}
      >
        <header
          className={cn(
            windSong.className,
            'text-6xl/[1.2] mb-10 relative z-[5]',
            'max-2xl:flex max-2xl:justify-between max-lg:flex-wrap',
          )}
        >
          <div className="flex items-center gap-8 mb-2">
            <Link
              href={'/'}
              aria-label="На главную"
              className="hover:text-red-800 transition-all text-4xl"
            >
              <House size={50} />
            </Link>
            <p className=" text-[2.5rem]">Bekmansurova Juliya</p>
          </div>
          <p
            className={cn(
              rubikDirt.className,
              'self-end text-7xl max-[478px]:text-5xl max-[478px]:text-center',
            )}
          >
            UI/UX Designer
          </p>
        </header>
        {children}
      </body>
    </html>
  );
}
