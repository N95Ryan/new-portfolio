"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function RSSButton() {
  const t = useTranslations("cta"); // Utilise la section "cta" des traductions

  return (
    <a
      href="https://app.daily.dev/n95ryan"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-4 bg-indigo-600 text-white font-semibold text-lg rounded hover:bg-indigo-800 transition-colors inline-flex items-center"
    >
      <span>{t("daily_dev")} 💻</span>
    </a>
  );
}
