"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function RSSButton() {
  const t = useTranslations("cta"); // Utilise la section "cta" des traductions

  return (
    <a
      href="https://rss.app/feeds/_vaGTzOr1oLvRZgTd.xml"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-4 bg-indigo-600 text-white font-semibold text-lg rounded hover:bg-indigo-800 transition-colors inline-flex items-center"
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/4/43/Feed-icon.svg"
        alt="RSS"
        width={20}
        height={20}
        className="mr-2"
      />
      <span>{t("rss_feed")}</span>
    </a>
  );
}
