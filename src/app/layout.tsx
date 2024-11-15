import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan PINA-SILASSE | Développeur Web Frontend",
  description:
    "Portfolio de Ryan PINA-SILASSE, développeur web frontend spécialisé en React. Découvrez mes projets, mes compétences et mon parcours.",
  keywords:
    "Ryan PINA-SILASSE, Développeur Web Frontend, Frontend developer, Développement Web, Paris, Île-de-France, Canada, Bootstrap, Tailwind, React Native, React, Next.js, Go, Portfolio, Hetic, Konbini, TypeScript, JavaScript, CSS3, HTML5",
  authors: [{ name: "Ryan PINA-SILASSE" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
