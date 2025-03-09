import "./globals.css";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

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
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
