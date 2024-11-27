import Head from "next/head";
import { Title } from "./components/title";
import BackgroundAnimation from "./components/backgroundAnimation/backgroundAnimation";
import Navbar from "./components/navbar";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Footer from "./components/footer";
import Script from "next/script";

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

export default function Page() {
  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></script>
      </Head>

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}');
        `}
      </Script>

      <div id="home" className="relative h-screen w-screen">
        <Navbar />
        <BackgroundAnimation />
        <Title />
        <About />
        <Skills />
        <Footer />
      </div>
    </>
  );
}
