import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from "@next/third-parties/google";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ryan PINA-SILASSE | Développeur Web Frontend",
  description:
    "Portfolio de Ryan PINA-SILASSE, développeur frontend spécialisé en React & Next.js.",
  openGraph: {
    title:
      "Portfolio de Ryan PINA-SILASSE, développeur frontend spécialisé en React & Next.js.",
    description: "Découvrez mes projets, mes compétences et mon parcours.",
    url: "https://ryanpinasilasse.dev",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: LayoutProps) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="fr">
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
