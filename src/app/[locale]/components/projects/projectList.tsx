import ProjectCard from "./projectCard";

export const projects = [
  {
    title: "Spotr",
    image: "/images/Projets/Spotr.jpg",
    link: "https://github.com/N95Ryan/Lift-Up",
    bgcolor: "#fff",
    textColor: "#000",
    id: "0",
  },

  {
    title: "Lift Up !",
    image: "/images/Projets/Lift-Up.jpg",
    link: "https://github.com/N95Ryan/Lift-Up",
    bgcolor: "#fff",
    textColor: "#000",
    id: "1",
  },

  {
    title: "Bumble B",
    image: "/images/Projets/Bumble-B.jpg",
    link: "https://github.com/N95Ryan/Bumble-B",
    bgcolor: "#322c2b",
    textColor: "#ffffff",
    id: "2",
  },
  {
    title: "Konbini",
    image: "/images/Projets/Konbini.jpg",
    link: "https://www.konbini.com/",
    bgcolor: "#b91c1c",
    textColor: "#ffffff",
    id: "3",
  },
  {
    title: "HairSwift",
    image: "/images/Projets/HairSwift.jpg",
    link: "https://github.com/N95Ryan/HairSwift",
    bgcolor: "#ffffff",
    textColor: "#000000",
    id: "4",
  },
  {
    title: "Bitjutsu",
    image: "/images/Projets/Bitjutsu.jpg",
    link: "https://bijutsu-n95ryan.vercel.app/",
    bgcolor: "#fff",
    textColor: "#000000",
    id: "5",
  },
];

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
