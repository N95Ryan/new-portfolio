import Navbar from "../components/navbar";
import BackgroundAnimation from "../components/backgroundAnimation/backgroundAnimation";
import Footer from "../components/footer";
import ProjectCard from "../components/projects/projectCard";
import { projects } from "../components/projects/projectList";

export default function Page() {
  return (
    <div id="projects" className="relative min-h-screen w-screen">
      <Navbar />
      <BackgroundAnimation />
      <div className="animate-fade-down animate-once animate-duration-1300">
        <h3 className="text-5xl font-semibold text-indigo-500 text-center">
          Mes Réalisations
        </h3>
        <hr className="my-8 border-t border-indigo-700 w-1/2 mx-auto" />
      </div>
      <div className="sm:grid grid-cols-2 sm:gap-y-4 md:gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fade-up">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
