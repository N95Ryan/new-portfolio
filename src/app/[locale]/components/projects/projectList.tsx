import ProjectCard from "./projectCard";

export const projects = [
  {
    title: "Lift Up !",
    stack: "React",
    image: "/images/Projets/Lift-Up.jpg",
    link: "https://github.com/N95Ryan/Lift-Up",
    bgcolor: "#fff",
    textColor: "#000",
    id: "0",
  },

  {
    title: "Bumble B",
    stack: "React Native • Expo",
    image: "/images/Projets/Bumble-B.jpg",
    link: "https://github.com/N95Ryan/Bumble-B",
    bgcolor: "#322c2b",
    textColor: "#ffffff",
    id: "1",
  },
  {
    title: "Konbini",
    stack: "Next • Tailwind • WordPress",
    image: "/images/Projets/Konbini.jpg",
    link: "https://www.konbini.com/",
    bgcolor: "#b91c1c",
    textColor: "#ffffff",
    id: "2",
  },
  {
    title: "HairSwift",
    stack: "Next • Tailwind • Go",
    image: "/images/Projets/HairSwift.jpg",
    link: "https://github.com/N95Ryan/HairSwift",
    bgcolor: "#ffffff",
    textColor: "#000000",
    id: "3",
  },
  {
    title: "Bitjutsu",
    stack: "Next • Tailwind • Replicate",
    image: "/images/Projets/Bitjutsu.jpg",
    link: "https://bijutsu-n95ryan.vercel.app/",
    bgcolor: "#fff",
    textColor: "#000000",
    id: "4",
  },
  {
    title: "EcoMap",
    stack: "Figma",
    image: "/images/Projets/Ecomap.jpg",
    link: "https://www.figma.com/proto/SELGWIlBrSMJ0Bqe02toWk/Eco---Map?node-id=281-4983&starting-point-node-id=250%3A3263",
    bgcolor: "#047857",
    textColor: "#ffffff",
    id: "5",
  },
  {
    title: "Calculatrice",
    image: "/images/Projets/Calculatrice.jpg",
    link: "https://calculatrice-react.vercel.app/",
    bgcolor: "#61DAFB",
    textColor: "#000000",
    id: "6",
  },
  {
    title: "Jeu du morpion",
    stack: "JavaScript",
    image: "/images/Projets/Tic-tac-toe.jpg",
    link: "https://github.com/N95Ryan/Tic-tac-toe",
    bgcolor: "#fff",
    textColor: "#000000",
    id: "7",
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
