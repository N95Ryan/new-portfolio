"use client";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { getLocalizedHref } from "../utils/locale";

interface PriceCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  isPopular: boolean;
}

export default function PriceCard({
  title,
  price,
  features,
  buttonText,
  isPopular,
}: PriceCardProps) {
  const t = useTranslations("price");
  const locale = useLocale();

  return (
    <div
      className={`relative flex flex-col p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${
        isPopular ? "border-2 border-indigo-500" : ""
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-sm">
            {t("popular")}
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-indigo-500">{price}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center text-gray-600 dark:text-gray-300"
          >
            <svg
              className="w-5 h-5 mr-2 text-indigo-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        href={getLocalizedHref("/contact", locale)}
        className="mt-auto w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg text-center transition duration-300"
      >
        {buttonText}
      </Link>
    </div>
  );
}
