"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface ProjectCardProps {
  project: {
    id: string;
    image: string;
    link: string;
    bgcolor: string;
    textColor: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const tList = useTranslations("projects.list");
  const t = useTranslations("projects");
  const projectData = tList.raw(project.id);

  return (
    <div className="w-full max-w-xs mx-auto">
      <div className="relative h-40 md:h-48 lg:h-56 group rounded-t-xl overflow-hidden">
        <Image
          src={project.image}
          alt={projectData.name}
          fill
          style={{ objectFit: "cover" }}
          className="transition duration-500 ease-in-out transform group-hover:scale-105"
        />
        <div className="absolute inset-0 rounded-t-xl bg-black bg-opacity-90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-white text-center mx-4 text-xs lg:text-sm">
            {projectData.description}
          </p>
        </div>
      </div>
      <div
        className="flex flex-col items-start p-3 rounded-b-xl"
        style={{
          backgroundColor: project.bgcolor,
          color: project.textColor,
          minHeight: "14px",
          height: "auto",
        }}
      >
        <h2 className="text-base md:text-lg lg:text-xl font-bold mb-1">
          {projectData.name}
        </h2>
        <p className="text-xs md:text-sm mb-1">{projectData.technologies}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-2 bg-[#343a40] hover:bg-[#212529] transition text-white self-end text-xs md:text-sm font-semibold rounded-lg mt-6 md:mt-0"
        >
          {t("button_label")}
        </a>
      </div>
    </div>
  );
}
