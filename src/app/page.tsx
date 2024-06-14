import { Title } from "./components/title";
import Particles from "./components/magicui/particles";
import BackgroundAnimation from "./components/backgroundAnimation/backgroundAnimation";

export default function Page() {
  return (
    <div className="relative h-screen w-screen">
      <BackgroundAnimation/>
      {/* <Particles className="absolute top-0 left-0 " /> */}
      <div className="relative z-10">
        <Title />
      </div>
    </div>
  );
}
