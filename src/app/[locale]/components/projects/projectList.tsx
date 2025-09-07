import ProjectCard from "./projectCard";

export const projects = [
  {
    title: "NEAT",
    image: "/images/Projets/NEAT.jpg",
    link: "https://neatparis.fr/",
    bgcolor: "#fff",
    textColor: "#000",
    id: "0",
  },

  {
    title: "The 8bits Hangman",
    image: "/images/Projets/the-8bits-hangman.jpg",
    link: "https://the-8bits-hangman.vercel.app/",
    bgcolor: "#fff",
    textColor: "#000",
    id: "1",
  },

  {
    title: "Spotr",
    image: "/images/Projets/Spotr.jpg",
    link: "https://apps.apple.com/fr/app/spotr-tous-les-spots-photo/id1151859681",
    bgcolor: "#fff",
    textColor: "#000",
    id: "2",
  },

  {
    title: "Lift Up !",
    image: "/images/Projets/Lift-Up.jpg",
    link: "https://github.com/N95Ryan/Lift-Up",
    bgcolor: "#fff",
    textColor: "#000",
    id: "3",
  },

  {
    title: "Bumble B",
    image: "/images/Projets/Bumble-B.jpg",
    link: "https://github.com/N95Ryan/Bumble-B",
    bgcolor: "#322c2b",
    textColor: "#ffffff",
    id: "4",
  },
  {
    title: "Konbini",
    image: "/images/Projets/Konbini.jpg",
    link: "https://www.konbini.com/",
    bgcolor: "#b91c1c",
    textColor: "#ffffff",
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
