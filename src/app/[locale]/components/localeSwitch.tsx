// components/localeSwitch.tsx
"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function LocaleSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLocale = (newLocale: string) => {
    const newPathname = pathname.replace(/^\/(en|fr)/, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div className="flex justify-center items-center gap-3 py-2">
      <button
        onClick={() => switchLocale("fr")}
        className={`px-3 py-1.5 text-lg rounded-md ${
          locale === "fr"
            ? "bg-gray-800 text-white font-semibold shadow-md"
            : "text-gray-700 hover:bg-gray-100"
        } transition-all duration-200`}
      >
        FR
      </button>
      <span className="text-gray-500 text-lg font-medium">/</span>
      <button
        onClick={() => switchLocale("en")}
        className={`px-3 py-1.5 text-lg rounded-md ${
          locale === "en"
            ? "bg-gray-800 text-white font-semibold shadow-md"
            : "text-gray-700 hover:bg-gray-100"
        } transition-all duration-200`}
      >
        EN
      </button>
    </div>
  );
}
