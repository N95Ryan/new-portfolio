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
        ? "Ryan PINA-SILASSE | Développeur Web & Mobile"
        : "Ryan PINA-SILASSE | Web & Mobile Developer",
    description:
      locale === "fr"
        ? "Développeur web et mobile passionné, spécialisé en développement d'applications modernes."
        : "Passionate web and mobile developer, specialized in modern application development.",
    keywords:
      locale === "fr"
        ? "Fullstack, Freelance, Remote, React, Next.js, TypeScript, Go, Golang, Supabase, Vercel, Astro, Gin, Développement d'applications mobiles, Création de site web sur mesure, scalable, PWA, MVP, site vitrine, développeur web, développeur mobile, JavaScript, portfolio, frontend, backend"
        : "Fullstack, Freelance, Remote, React, Next.js, TypeScript, Go, Golang, Supabase, Vercel, Astro, Gin, Mobile application development, Custom web development, scalable, PWA, MVP, landing page, web developer, mobile developer, JavaScript, portfolio, frontend, backend",
    openGraph: {
      title:
        locale === "fr"
          ? "Portfolio de Ryan PINA-SILASSE, Développeur Web & Mobile"
          : "Ryan PINA-SILASSE's Portfolio, Web & Mobile Developer",
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
