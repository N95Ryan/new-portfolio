import Navbar from "../components/navbar";
import BackgroundAnimation from "@/app/components/backgroundAnimation/backgroundAnimation";
export default function Contact() {
  return (
    <div className="relative h-screen w-screen">
      <Navbar />
      <BackgroundAnimation/>
      <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-semibold text-white">Contact Page</h1>
        <p className="text-xl font-light text-white">This is the contact page.</p>
      </div>
    </div>
  );
}