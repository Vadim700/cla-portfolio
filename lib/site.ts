export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const siteName = 'Bekmansurova Juliya';

export const siteRole = 'UI/UX Designer';

export const siteDescription =
  'Портфолио UI/UX дизайнера: лендинги, многостраничные сайты, мобильные приложения и баннеры.';

export const contacts = {
  email: 'bekmansurova-y@mail.ru',
  telegramUsername: 'Yulia_Bekmansyrova',
} as const;

export const emailHref = `mailto:${contacts.email}`;

export const telegramHref = `https://t.me/${contacts.telegramUsername}`;

export const telegramLabel = `@${contacts.telegramUsername}`;
