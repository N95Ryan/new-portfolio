import { Title } from "./components/title";
import BackgroundAnimation from "./components/backgroundAnimation/backgroundAnimation";
import Navbar from "./components/navbar";

export default function Page() {
  return (
    <div className="relative h-screen w-screen">
      <Navbar />
      <BackgroundAnimation/>
      <div>
        <Title />
      </div>
    </div>
  );
}
