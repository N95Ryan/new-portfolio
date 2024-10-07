import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan PINA-SILASSE | Développeur Web Front-End",
  description:
    "Portfolio de Ryan PINA-SILASSE, développeur web front-end spécialisé en React. Découvrez mes projets, mes compétences et mon parcours.",
  keywords:
    "Ryan PINA-SILASSE, Développeur Web Front-End, Front end developer, Paris, Île-de-France, Canada, Bootstrap, Tailwind, React Native, React, Next.js, Portfolio, Hetic, Konbini, Développement Web, UI/UX, Design, TypeScript, JavaScript, CSS3, HTML5",
  authors: [{ name: "Ryan PINA-SILASSE" }],
};

export default function RootLayout({
  children,
  params,
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
