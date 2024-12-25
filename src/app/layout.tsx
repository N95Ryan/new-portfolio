import "./globals.css";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  params: { locale: string };
}

export const metadata = {
  title: "Ryan PINA-SILASSE | Développeur Web & Mobile",
  description: "Portfolio de Ryan PINA-SILASSE, développeur web et mobile",
  openGraph: {
    title: "Portfolio de Ryan PINA-SILASSE, développeur web et mobile",
    description: "Découvrez mes projets, mes compétences et mon parcours.",
    url: "https://ryan-pina.dev",
    type: "website",
  },
};

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = params;

  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
