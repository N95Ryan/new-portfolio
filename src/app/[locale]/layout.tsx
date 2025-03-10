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
    openGraph: {
      title:
        locale === "fr"
          ? "Portfolio de Ryan PINA-SILASSE, Développeur Web & Mobile"
          : "Ryan PINA-SILASSE's Portfolio, Web & Mobile Developer",
      description:
        locale === "fr"
          ? "Découvrez mes projets, mes compétences et mon parcours."
          : "Discover my projects, skills, and journey.",
      url: `https://ryan-pina.dev/${locale}`,
      type: "website",
    },
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
