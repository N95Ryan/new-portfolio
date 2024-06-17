import Navbar from "../components/navbar"
import BackgroundAnimation from "../components/backgroundAnimation/backgroundAnimation"
import Footer from "../components/footer"
import ProjectCard from "../components/projects/projectCard";
import { projects } from "../components/projects/projectList";

export default function Page() {
  return (
      <div id="projects" className="relative h-screen w-screen">
        <Navbar />
        <BackgroundAnimation />
        <div className="animate-fade-down animate-once animate-duration-[1300ms]">
        <h3 className="text-5xl font-semibold text-indigo-500 text-center">
          Mes Réalisations
        </h3>
        <hr className="my-8 border-t border-indigo-700 w-1/2 mx-auto" />
      </div>
      <ProjectCard project={projects[0]}/>
      <Footer />
      </div>
  )
}
