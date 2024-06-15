import { Title } from "./components/title";
import BackgroundAnimation from "./components/backgroundAnimation/backgroundAnimation";
import Navbar from "./components/navbar";
import About from "./components/about/about";

export default function Page() {
  return (
    <div className="relative h-screen w-screen">
      <Navbar />
      <BackgroundAnimation/>
        <Title />
        <About/>
    </div>
  );
}
