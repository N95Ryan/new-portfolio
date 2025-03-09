"use client";
import { useTranslations } from "next-intl";
import Navbar from "../components/navbar";
import BackgroundAnimation from "../components/backgroundAnimation/backgroundAnimation";
import { ContactForm } from "../components/contactForm";
import Footer from "../components/footer";
import Script from "next/script";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <div className="flex flex-col min-h-screen">
      <Script
        src="https://www.google.com/recaptcha/enterprise.js?render=6Leimo0qAAAAAGcrSJs7jVAg3d2ucc8xLqN4bziE"
        async
      />
      <Navbar />
      <BackgroundAnimation />
      <main className="flex-grow">
        <div className="animate-fade-down animate-once animate-duration-1300 py-8">
          <h3 className="text-5xl font-semibold text-indigo-500 text-center">
            {t("title")}
          </h3>
          <hr className="my-8 border-t border-indigo-700 w-1/2 mx-auto" />
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
