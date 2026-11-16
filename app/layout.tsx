import type { Metadata } from 'next';
import { WindSong, Alfa_Slab_One, Manrope } from 'next/font/google';
import './globals.scss';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { House, Mail, Send } from 'lucide-react';
import {
  contacts,
  emailHref,
  siteDescription,
  siteName,
  siteUrl,
  telegramHref,
  telegramLabel,
} from '@/lib/site';

const windSong = WindSong({
  weight: ['500'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-windsong',
  display: 'swap',
});

const alfaSlab = Alfa_Slab_One({
  weight: '400',
  subsets: ['latin', 'latin-ext'],
  variable: '--font-alfa',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
});

const pageTitle = `${siteName} — UI/UX дизайнер`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: pageTitle,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName,
    url: '/',
    title: pageTitle,
    description: siteDescription,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: siteName }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: siteDescription,
    images: ['/og.jpg'],
  },
};

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={cn(windSong.variable, alfaSlab.variable, manrope.variable)}
    >
      <body
        id="top"
        className={cn(
          'grid grid-rows-[auto_1fr_auto] p-8 pt-12 bg-[#2d3d51] text-white',
          'max-[478px]:justify-center',
          'max-sm:p-0',
        )}
      >
        <header className="relative z-[5] mb-10">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
            <Link
              href="/"
              className={cn(
                'flex items-center gap-4 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)] transition-colors hover:text-white/80',
                focusRing,
              )}
            >
              <House size={44} aria-hidden="true" />
              <span className={cn(windSong.className, 'text-4xl/[1.1]')}>
                Bekmansurova Juliya
              </span>
            </Link>

            <nav aria-label="Основная навигация" className="order-3 w-full md:order-none md:w-auto">
              <ul className="inline-flex items-center gap-1 rounded-full bg-[#2d3d51]/70 p-1.5 font-sans text-base font-medium text-white/90 backdrop-blur-md">
                <li>
                  <Link
                    href="/#work"
                    className="block rounded-full px-4 py-2 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Работы
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="block rounded-full px-4 py-2 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Обо мне
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="block rounded-full px-4 py-2 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>

            <a
              href={telegramHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в Telegram"
              className={cn(
                'hidden items-center gap-2 rounded-full bg-[#f2c50d] px-5 py-2.5 font-sans text-base font-semibold text-[#1b1d3a] transition-transform hover:scale-[1.02] lg:inline-flex',
                focusRing,
              )}
            >
              <Send size={16} aria-hidden="true" />
              Написать
            </a>
          </div>

          <p
            className={cn(
              alfaSlab.className,
              'mt-3 text-right text-[clamp(2.25rem,9vw,4rem)] leading-[1.05] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]',
            )}
          >
            UI/UX Designer
          </p>
        </header>

        {children}

        <footer id="contact" className="relative z-[5] mt-20">
          <div className="rounded-2xl bg-[#1b1d3a]/90 px-5 py-8 backdrop-blur-md md:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <p className="font-sans text-sm uppercase tracking-[0.2em] text-white/60">
                  Контакты
                </p>
                <h2 className="mt-2 font-sans text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                  Давайте обсудим проект
                </h2>
                <p className="mt-3 font-sans text-base leading-relaxed text-white/75">
                  Напишите в Telegram или на почту — расскажу, как могу помочь.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={telegramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Написать в Telegram: ${telegramLabel}`}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full bg-[#f2c50d] px-5 py-3 font-sans text-base font-semibold text-[#1b1d3a] transition-transform hover:scale-[1.02]',
                    focusRing,
                  )}
                >
                  <Send size={18} aria-hidden="true" />
                  {telegramLabel}
                </a>
                <a
                  href={emailHref}
                  aria-label={`Написать на почту ${contacts.email}`}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3 font-sans text-base font-semibold text-white transition-colors hover:bg-white/10',
                    focusRing,
                  )}
                >
                  <Mail size={18} aria-hidden="true" />
                  {contacts.email}
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-4 font-sans text-sm text-white/70">
              <p>
                © {new Date().getFullYear()} {siteName}
              </p>
              <nav aria-label="Навигация в подвале">
                <ul className="flex flex-wrap items-center gap-5">
                  <li>
                    <Link href="/#work" className="transition-colors hover:text-white">
                      Работы
                    </Link>
                  </li>
                  <li>
                    <Link href="/#about" className="transition-colors hover:text-white">
                      Обо мне
                    </Link>
                  </li>
                  <li>
                    <a href="#top" className="transition-colors hover:text-white">
                      Наверх ↑
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
