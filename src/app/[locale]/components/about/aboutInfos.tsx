"use client";

import { useTranslations } from "next-intl";

export default function AboutInfos() {
  const t = useTranslations("about");

  return (
    <div className="flex flex-col items-center justify-center md:w-1/2 mx-6 animate-fade-left animate-once animate-duration-[1300ms]">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
        {t("introduction")}
      </h2>
      <p className="text-white text-base sm:text-lg mb-6 w-full sm:w-auto leading-relaxed tracking-wide whitespace-pre-wrap">
        {t.raw("description")}
      </p>
    </div>
  );
}
