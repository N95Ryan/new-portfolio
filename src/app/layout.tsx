import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ryan PINA-SILASSE | Développeur Web Front-End React",
  description: "Portfolio de Ryan PINA-SILASSE, développeur web front-end spécialisé en React. Découvrez mes projets, mes compétences et mon parcours.",
  keywords: "Ryan PINA-SILASSE, Développeur Web Front-End, Île-de-France, Canada, React, Next.js, Portfolio, Hetic, Konbini, Développement Web, UI/UX Design, JavaScript, HTML5, CSS3",
  authors: [{ name: "Ryan PINA-SILASSE" }],
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
