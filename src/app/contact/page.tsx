import Navbar from "../components/navbar";
import BackgroundAnimation from "../components/backgroundAnimation/backgroundAnimation";
import Footer from "../components/footer";
import ContactForm from "../components/form";

export default function Page() {
  return (
    <div id="projects" className="relative min-h-screen w-screen">
      <Navbar />
      <BackgroundAnimation />
      <div className="animate-fade-down animate-once animate-duration-1300">
        <h3 className="text-5xl font-semibold text-indigo-500 text-center">
          Me contacter
        </h3>
        <hr className="my-8 border-t border-indigo-700 w-1/2 mx-auto" />
      </div>
      {/* <ContactForm /> */}
      <Footer />
    </div>
  );
}
