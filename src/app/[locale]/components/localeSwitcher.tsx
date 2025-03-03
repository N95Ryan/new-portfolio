// components/LocaleSwitcher.tsx
"use client";

import { useRouter } from "next/navigation";

export default function LocaleSwitcher() {
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    // Récupérer la route actuelle
    const path = router.asPath;
    // Rediriger vers la même page mais avec la nouvelle langue
    router.push(`/${locale}${path}`);
  };

  return (
    <div className="flex justify-center items-center space-x-4">
      <button
        onClick={() => changeLanguage("fr")}
        className="text-white hover:text-purple-600 transition duration-300"
      >
        FR
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className="text-white hover:text-purple-600 transition duration-300"
      >
        EN
      </button>
    </div>
  );
}
