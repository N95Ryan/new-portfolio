import Image from "next/image";

export default function AboutPicture() {
  return (
    <div className="flex flex-col items-center justify-center p-8 animate-fade-right animate-once animate-duration-[1300ms]">
      <div className="relative p-6">
        <div className="absolute inset-8 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 transform -translate-x-6 -translate-y-6 -skew-y-6"></div>
        <div className="relative z-10">
          <Image
            src="/images/photo.png"
            width={500}
            height={500}
            alt="Ryan"
            quality={100}
            className="object-cover rounded-md sm:w-96 sm:h-96 md:w-400 md:h-400"
          />
        </div>
      </div>
    </div>
  );
}