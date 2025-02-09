import { Title } from "./components/title";
import BackgroundAnimation from "./components/backgroundAnimation/backgroundAnimation";
import Navbar from "./components/navbar";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Footer from "./components/footer";
import { useTranslations } from "next-intl";

export default function Homepage() {
  const t = useTranslations();
  return (
    <div id="home" className="relative h-screen w-screen">
      <Navbar />
      <h1 className=" flex justify-center text-white">{t("job")}</h1>
      <BackgroundAnimation />
      <Title />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}
