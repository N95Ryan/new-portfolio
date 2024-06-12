import { Title } from "./components/title";
import Particles from "./components/magicui/particles";

export default function Page() {
  return (
    <div className="relative h-screen w-screen">
      <Particles className="absolute top-0 left-0 h-full w-full z-0" />
      <div className="relative z-10">
        <Title />
      </div>
    </div>
  );
}
