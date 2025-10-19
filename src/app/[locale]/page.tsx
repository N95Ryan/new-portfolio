import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { Title } from "./components/title";
import BackgroundAnimation from "./components/backgroundAnimation/backgroundAnimation";
import Navbar from "./components/navbar";
import About from "./components/about/about";
import SkillsServer from "./components/skills/SkillsServer";
import Footer from "./components/footer";

export default async function Homepage({
  params,
}: {
  params: { locale: string };
}) {
  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    return notFound();
  }

  return (
    <div id="home" className="relative h-screen w-screen">
      <Navbar />
      <BackgroundAnimation />
      <Title />
      <About />
      <SkillsServer locale={params.locale} />
      <Footer />
    </div>
  );
}
