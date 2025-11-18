"use client";
import { useTranslations } from "next-intl";
import Navbar from "../components/navbar";
import BackgroundAnimation from "../components/backgroundAnimation/backgroundAnimation";
import Footer from "../components/footer";
import ProjectCard from "../components/projects/projectCard";
import { projects } from "../components/projects/projectList";

export default function ProjectsPage() {
  const t = useTranslations("projects");

  return (
    <div id="projects" className="flex flex-col min-h-screen">
      <Navbar />
      <BackgroundAnimation />
      <div className="animate-fade-down animate-once animate-duration-1300 flex-grow">
        <h3 className="text-5xl font-semibold text-indigo-500 text-center">
          {t("title")}
        </h3>
        <hr className="my-8 border-t border-indigo-700 w-1/2 mx-auto" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 animate-fade-up flex-grow">
        {projects.map((project: any) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
