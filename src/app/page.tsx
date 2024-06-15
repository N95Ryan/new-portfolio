import { Title } from "./components/title";
import BackgroundAnimation from "./components/backgroundAnimation/backgroundAnimation";
import Navbar from "./components/navbar";
import About from "./components/about/about";
import Skills from "./components/skills/skills";

export default function Page() {
  return (
    <div id="home" className="relative h-screen w-screen">
      <Navbar />
      <BackgroundAnimation/>
        <Title />
        <About/>
        <Skills/>
    </div>
  );
}
