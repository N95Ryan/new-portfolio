import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

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
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  return (
    <html lang="fr">
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </script>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
