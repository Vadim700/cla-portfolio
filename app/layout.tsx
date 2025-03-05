import type { Metadata } from 'next';
import { WindSong, Rock_3D } from 'next/font/google';
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
          <Link href={'/'} className="hover:text-red-800 transition-all">
            Bekmansurova Juliya
          </Link>
          <p className={cn(rock3D.className, 'self-end text-7xl')}>
            UI/UX Designer
          </p>
        </header>
        {children}
        {/* <footer
          className={cn(
            rock3D.className,
            'flex gap-10 mt-6 text-2xl relative z-[5]',
          )}
        >
          <Link href={'/woodhouse'}>WoodHousePage</Link>
          The footer
        </footer> */}
      </body>
    </html>
  );
}
