import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="relative z-[5] flex min-h-[50vh] flex-col items-start justify-center gap-6">
      <p className="font-sans text-sm uppercase tracking-[0.2em] text-white/60">Ошибка 404</p>
      <h1 className="text-6xl/[1.1] max-sm:text-4xl">Такой страницы нет</h1>
      <p className="max-w-xl font-sans text-lg leading-relaxed text-white/80">
        Возможно, проект переехал или ссылка устарела. Вернитесь на главную — там всё
        портфолио.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 font-sans text-lg text-white/80 transition-colors hover:text-white"
      >
        <ArrowLeft size={20} />
        Все проекты
      </Link>
    </main>
  );
}
