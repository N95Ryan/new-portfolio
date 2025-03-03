import AboutPicture from "./aboutPicture";
import AboutInfos from "./aboutInfos";
import Link from "next/link";
import SocialMedia from "../socialMedia";

export default function About() {
  return (
    <>
    <div id="about" className="flex flex-col min-h-screen">
    <div className="animate-fade-down animate-once animate-duration-[1300ms]">
        <h3 className="text-5xl font-semibold text-indigo-500 text-center">
          Qui suis-je ?
        </h3>
        <hr className="my-8 border-t border-indigo-700 w-1/2 mx-auto" />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        <AboutPicture />
        <AboutInfos />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 ">
      <div className="flex justify-center animate-fade-up animate-once animate-duration-[1300ms]">
        <Link
          href="/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-4 bg-indigo-600 text-white font-semibold text-lg rounded hover:bg-indigo-800 transition-colors"
        >
          Ouvrir mon CV
        </Link>
      </div>
      <div className="flex justify-center animate-fade-up animate-once animate-duration-[1300ms]">
        <SocialMedia/>
      </div>
      </div>
      </div>
    </>
  );
}