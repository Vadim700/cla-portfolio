import type { Metadata } from 'next';
import { WindSong, Rock_3D, Rubik_Iso, Rubik_Dirt } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { House } from 'lucide-react';

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
          'max-[478px]:justify-center',
          'max-sm:p-0'
        )}
      >
        <header
          className={cn(
            windSong.className,
            'text-6xl/[1.2] mb-10 relative z-[5]',
            'max-2xl:flex max-2xl:justify-between max-lg:flex-wrap'
          )}
        >
          <div className="flex items-center gap-8 mb-2">
            <Link href={'/'} className="hover:text-red-800 transition-all text-4xl">
              <House size={50}/>
            </Link>
            <p className=" text-[2.5rem]">Bekmansurova Juliya</p>
          </div>
          <p className={cn(rubikDirt.className, 'self-end text-7xl max-[478px]:text-5xl max-[478px]:text-center')}>
            UI/UX Designer
          </p>
        </header>
        {children}
      </body>
    </html>
  );
}
