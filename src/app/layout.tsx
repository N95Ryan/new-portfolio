import { Inter } from "next/font/google";
import "./globals.css";

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
