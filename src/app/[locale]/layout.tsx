import "./globals.css";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import LocaleSwitch from "./components/localeSwitch";

interface LayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: LayoutProps) {
  const { locale } = params;

  return {
    title:
      locale === "fr"
        ? "Ryan PINA-SILASSE • Développeur Web & Mobile"
        : "Ryan PINA-SILASSE • Web & Mobile Developer",
    description:
      locale === "fr"
        ? "Développeur web et mobile passionné, spécialisé en développement d'applications modernes."
        : "Passionate web and mobile developer, specialized in modern application development.",
    keywords:
      locale === "fr"
        ? "Fullstack, Freelance, Remote, React, Next.js, TypeScript, Go, Golang, Supabase, Vercel, Astro, Gin, Développement d'applications mobiles, Création de site web sur mesure, scalable, PWA, MVP, site vitrine, développeur web, développeur mobile, JavaScript, portfolio, frontend, backend, Node.js, Express, Supabase, Vercel"
        : "Fullstack, Freelance, Remote, React, Next.js, TypeScript, Go, Golang, Supabase, Vercel, Astro, Gin, Mobile application development, Custom web development, scalable, PWA, MVP, landing page, web developer, mobile developer, JavaScript, portfolio, frontend, backend, Node.js, Express, Supabase, Vercel",
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
        { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      other: [
        {
          rel: "mask-icon",
          url: "/safari-pinned-tab.png",
          color: "#000000",
        },
      ],
    },
    manifest: `/manifest.${locale}.json`,
    openGraph: {
      title:
        locale === "fr"
          ? "Ryan PINA-SILASSE • Développeur Web & Mobile"
          : "Ryan PINA-SILASSE • Web & Mobile Developer",
      description:
        locale === "fr"
          ? "Découvrez mes projets, mes compétences et mon parcours."
          : "Take a look at my projects, skills, and my journey.",
      url: `https://ryan-pina.dev/${locale}`,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    themeColor: "#000000",
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: LayoutProps) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon-192.png"
          type="image/png"
          sizes="192x192"
        />
        <link
          rel="icon"
          href="/icon-512.png"
          type="image/png"
          sizes="512x512"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href={`/manifest.${locale}.json`} />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="flex flex-col min-h-screen">
        <header className="w-full py-2">
          <div className="max-w-4xl mx-auto px-4 flex justify-center">
            <LocaleSwitch />
          </div>
        </header>
        <main className="flex-grow">
          <NextIntlClientProvider messages={messages} locale={locale}>
            {children}
          </NextIntlClientProvider>
        </main>
      </body>
    </html>
  );
}
