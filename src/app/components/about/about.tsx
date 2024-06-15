import AboutPicture from "./aboutPicture";
import AboutInfos from "./aboutInfos";

export default function About() {
  return (
    <>
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
    </>
  );
}