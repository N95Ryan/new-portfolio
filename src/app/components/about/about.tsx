import AboutPicture from "./aboutPicture";
import AboutInfos from "./aboutInfos";
import Link from "next/link";

export default function About() {
  return (
    <>
    <div className="relative h-screen w-screen">
      <div className="animate-fade-down animate-once animate-duration-[1300ms]">
        <h3 className="text-5xl font-semibold text-indigo-500 text-center mt-8">
          Qui suis-je ?
        </h3>
        <hr className="my-8 border-t border-indigo-700 w-1/2 mx-auto" />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <AboutPicture />
        <AboutInfos />
      </div>
      <div className="flex justify-center animate-fade-up animate-once animate-duration-[1300ms]">
        <Link
          href="/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition-colors"
        >
          Ouvrir mon CV
        </Link>
      </div>
      </div>
    </>
  );
}