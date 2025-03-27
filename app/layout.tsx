import type { Metadata } from 'next';
import { WindSong, Rock_3D, Rubik_Iso, Rubik_Dirt } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const windSong = WindSong({
  weight: ['500'],
  subsets: ['latin', 'latin-ext', 'vietnamese'],
});

const rock3D = Rock_3D({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'web-designer portfolio site',
};

const rubikDirt = Rubik_Dirt({
  style: 'normal',
  weight: '400',
  subsets: ['latin', 'latin-ext', 'cyrillic', 'cyrillic-ext', 'hebrew'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'grid grid-rows-[auto_1fr_auto] p-8 pt-12 bg-[#2d3d51] text-white',
        )}
      >
        <header
          className={cn(
            windSong.className,
            ' text-6xl/[1.2] mb-10 relative z-[5]',
          )}
        >
          <Link href={'/'} className="hover:text-red-800 transition-all text-4xl">
            Bekmansurova Juliya
          </Link>
          <p className={cn(rubikDirt.className, 'self-end text-7xl')}>
            UI/UX Designer
          </p>
        </header>
        {children}
      </body>
    </html>
  );
}
