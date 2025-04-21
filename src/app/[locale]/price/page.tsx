"use client";

import { useTranslations } from "next-intl";
import Navbar from "../components/navbar";
import BackgroundAnimation from "../components/backgroundAnimation/backgroundAnimation";
import Footer from "../components/footer";

export default function PricePage() {
  const t = useTranslations("price");

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <BackgroundAnimation />
      <div className="animate-fade-down animate-once animate-duration-1300 flex-grow">
        <h3 className="text-5xl font-semibold text-indigo-500 text-center">
          {t("title")}
        </h3>
        <hr className="my-8 border-t border-indigo-700 w-1/2 mx-auto" />

        <div className="max-w-5xl mx-auto p-8">
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="py-4 px-6 text-left">{t("mission_type")}</th>
                  <th className="py-4 px-6 text-center">{t("france.title")}</th>
                  <th className="py-4 px-6 text-center">
                    {t("international.title")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-700 hover:bg-gray-700 transition-colors">
                  <td className="py-4 px-6 text-white">{t("short_mission")}</td>
                  <td className="py-4 px-6 text-center text-white font-semibold">
                    450 €
                  </td>
                  <td className="py-4 px-6 text-center text-white font-semibold">
                    600 $
                  </td>
                </tr>
                <tr className="border-t border-gray-700 hover:bg-gray-700 transition-colors">
                  <td className="py-4 px-6 text-white">
                    {t("standard_mission")}
                  </td>
                  <td className="py-4 px-6 text-center text-white font-semibold">
                    400 €
                  </td>
                  <td className="py-4 px-6 text-center text-white font-semibold">
                    500 $
                  </td>
                </tr>
                <tr className="border-t border-gray-700 hover:bg-gray-700 transition-colors">
                  <td className="py-4 px-6 text-white">{t("long_mission")}</td>
                  <td className="py-4 px-6 text-center text-white font-semibold">
                    350 €
                  </td>
                  <td className="py-4 px-6 text-center text-white font-semibold">
                    450 $
                  </td>
                </tr>
                <tr className="border-t border-gray-700 hover:bg-gray-700 transition-colors">
                  <td className="py-4 px-6 text-white">
                    {t("urgent_mission")}
                  </td>
                  <td className="py-4 px-6 text-center text-white font-semibold">
                    500 €
                  </td>
                  <td className="py-4 px-6 text-center text-white font-semibold">
                    650 $
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6">{t("contact_text")}</p>
            <a
              href="/fr/contact"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
            >
              {t("contact_button")}
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
