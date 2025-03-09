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
