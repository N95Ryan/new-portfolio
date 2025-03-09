import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { Title } from "./components/title";
import BackgroundAnimation from "./components/backgroundAnimation/backgroundAnimation";
import Navbar from "./components/navbar";
import About from "./components/about/about";
import Skills from "./components/skills/skills";
import Footer from "./components/footer";

export default async function Homepage() {
  // Charger les messages de traduction en fonction de la locale
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
      <Skills />
      <Footer />
    </div>
  );
}
