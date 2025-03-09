import ProjectCard from "./projectCard";

export const projects = [
  {
    title: "Lift Up !",
    stack: "React",
    description:
      "Lift Up ! est une application mobile conçue pour les passionnés de musculation et de fitness. Son objectif est de simplifier la conversion des poids entre livres et kilogrammes, afin que chacun puisse s’entraîner sans se poser de questions.",
    image: "/images/Projets/Lift-Up.jpg",
    link: "https://github.com/N95Ryan/Lift-Up",
    bgcolor: "#fff",
    textColor: "#000",
    id: "0",
  },

  {
    title: "Bumble B",
    stack: "React Native • Expo",
    description:
      "Développée dans le cadre de mon projet de fin d'études, Bumble B est une application mobile permettant de contrôler une petite voiture équipée d’un module ESP32 fourni par l'école. ",
    image: "/images/Projets/Bumble-B.jpg",
    link: "https://github.com/N95Ryan/Bumble-B",
    bgcolor: "#322c2b",
    textColor: "#ffffff",
    id: "1",
  },
  {
    title: "Konbini",
    stack: "Next • Tailwind • WordPress",
    description:
      "J'ai été en charge de la refonte graphique de la page d'accueil du site.\nJ'ai également participé à l'intégration de nouvelles features ainsi qu'à l'optimisation de l'UX.",
    image: "/images/Projets/Konbini.jpg",
    link: "https://www.konbini.com/",
    bgcolor: "#b91c1c",
    textColor: "#ffffff",
    id: "2",
  },
  {
    title: "HairSwift",
    stack: "Next • Tailwind • Go",
    description:
      "Projet réalisé afin d'explorer les capacités de Go. Il permet de gérer efficacement un salon de coiffure, avec des fonctionnalités telles que : Planification des rendez-vous, gestion des employés et suivi des services.",
    image: "/images/Projets/HairSwift.jpg",
    link: "https://github.com/N95Ryan/HairSwift",
    bgcolor: "#ffffff",
    textColor: "#000000",
    id: "3",
  },
  {
    title: "Bitjutsu",
    stack: "Next • Tailwind • Replicate",
    description:
      "Ce projet a été établi dans le but de m'exercer à l'intégration de tokens dans un projet. Il s'agit d'une application qui permet d'éditer une image via des promts de texte. Pour cela j'ai utilisé l'API de Replicate.",
    image: "/images/Projets/Bitjutsu.jpg",
    link: "https://bijutsu-n95ryan.vercel.app/",
    bgcolor: "#fff",
    textColor: "#000000",
    id: "4",
  },
  {
    title: "EcoMap",
    stack: "Figma",
    description:
      "Cette maquette d'application a été réalisée dans le cadre de ma soutenance de fin d'année. L'application permet via une carte de consulter une liste d'événements liés à l'écologie.",
    image: "/images/Projets/Ecomap.jpg",
    link: "https://www.figma.com/proto/SELGWIlBrSMJ0Bqe02toWk/Eco---Map?node-id=281-4983&starting-point-node-id=250%3A3263",
    bgcolor: "#047857",
    textColor: "#ffffff",
    id: "5",
  },
  {
    title: "Calculatrice",
    stack: "React",
    description:
      "Comme son nom l'indique, il s'agit d'une calculatrice réalisée avec React en suivant un tutoriel. Ce projet avait pour intérêt de m'initier à la découverte du framework.",
    image: "/images/Projets/Calculatrice.jpg",
    link: "https://calculatrice-react.vercel.app/",
    bgcolor: "#61DAFB",
    textColor: "#000000",
    id: "6",
  },
  {
    title: "Jeu du morpion",
    stack: "JavaScript",
    description:
      'Ce projet est un jeu de Morpion (Tic-Tac-Toe) en ligne, programmé en JavaScript. Deux joueurs s\'affrontent en plaçant alternativement des "X" et des "O" sur une grille de 3x3. L\'objectif est d\'aligner trois symboles identiques (horizontalement, verticalement ou en diagonale) avant son adversaire.',
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
