import Navbar from "../components/navbar";
import BackgroundAnimation from "../components/backgroundAnimation/backgroundAnimation";
import { ContactForm } from "../components/contactForm";
import Footer from "../components/footer";
import Script from "next/script";

export default function Page() {
  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/enterprise.js?render=6Leimo0qAAAAAGcrSJs7jVAg3d2ucc8xLqN4bziE"
        async
      ></Script>
      <Navbar />
      <BackgroundAnimation />
      <div className="animate-fade-down animate-once animate-duration-1300">
        <h3 className="text-5xl font-semibold text-indigo-500 text-center">
          Me contacter
        </h3>
        <hr className="my-8 border-t border-indigo-700 w-1/2 mx-auto" />
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}
