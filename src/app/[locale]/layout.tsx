import "./globals.css";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server"; // Assure-toi que cette fonction est bien importée

interface LayoutProps {
  children: ReactNode;
  params: {
    locale: string; // Paramètre pour la langue dynamique
  };
}

export const metadata = {
  openGraph: {
    title: "Portfolio de Ryan PINA-SILASSE, Développeur Web & Mobile",
    description: "Découvrez mes projets, mes compétences et mon parcours.",
    url: "https://ryan-pina.dev",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: LayoutProps) {
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {" "}
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
