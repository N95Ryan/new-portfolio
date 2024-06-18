import ProjectCard from './projectCard';

export const projects = [
    {
        "title": "Konbini",
        "stack": "Next • Tailwind • GraphQL",
        "description": "J'ai été en charge de la refonte graphique de la page d'accueil du site.\nJ'ai également participé à l'intégration de nouvelles features ainsi qu'à l'optimisation du SEO et de l'experience utilisateur.",
        "image": "/images/Projets/Konbini.jpg",
        "link": "https://www.konbini.com/",
        "bgcolor": "#b91c1c",
        "textColor": "#ffffff",
        "id": "1"
    },
    {
        "title": "Calculatrice",
        "stack": "React",
        "description": "Comme son nom l'indique, il s'agit d'une calculatrice réalisée avec React en suivant un tutoriel. Ce projet avait pour intérêt de m'initier à la découverte du framework.",
        "image": "/images/Projets/Calculatrice.jpg",
        "link": "https://calculatrice-react.vercel.app/",
        "bgcolor": "#61DAFB",
        "textColor": "#000000",
        "id": "2"
    },
    {
        "title": "Bitjutsu",
        "stack": "Next • Tailwind • Replicate",
        "description": "J'ai réalisé ce projet dans le but de m'exercer à l'intégration de tokens dans un projet. Il consiste en une application interactive qui permet d'éditer une image via des lignes de texte. Pour cela j'ai fait appel à l'API de Replicate.",
        "image": "/images/Projets/Bitjutsu.jpg",
        "link": "https://bijutsu-n95ryan.vercel.app/",
        "bgcolor": "#fff",
        "textColor": "#000000",
        "id": "3"
    },
    {
        "title": "EcoMap",
        "stack": "Figma",
        "description": "Cette maquette d'application a été réalisée en collaboration avec des camarades de promotion dans le cadre de notre soutenance de fin de première année. L'application permet via une carte intégrée de consulter une liste d'événements liés à l'écologie.",
        "image": "/images/Projets/Ecomap.jpg",
        "link": "https://www.figma.com/proto/SELGWIlBrSMJ0Bqe02toWk/Eco---Map?node-id=281-4983&starting-point-node-id=250%3A3263",
        "bgcolor": "#047857",
        "textColor": "#ffffff",
        "id": "4"
    },
    {
        "title": "DisGOvary",
        "stack": "React • Tailwind • GO",
        "description": "DisGOvary est un projet fullstack mis en place afin qu'un développeur novice puisse s’intéresser davantage aux divers fonctionnement du front et du back. L’intérêt de l’application est de gérer une base de données depuis le navigateur.",
        "image": "/images/Projets/Disgovary.jpg",
        "link": "https://disgovary.vercel.app/",
        "bgcolor": "#26a6bd",
        "textColor": "#ffffff",
        "id": "5"
    },
    {
        "title": "Tic-Tac-Toe",
        "stack": "Javascript",
        "description": "Ce projet est une application web développée pour illustrer les fondamentaux de la programmation en JavaScript et la manipulation du DOM. L’intérêt de l’application est de permettre aux utilisateurs de jouer au Tic-Tac-Toe directement dans leur navigateur.", 
        "image": "/images/Projets/TicTacToe.jpg",
        "link": "https://tic-tac-toe-coral-two-35.vercel.app/",
        "bgcolor": "#fb923c",
        "textColor": "#000000",
        "id": "6"
    }
];

export default function ProjectList() {
    return (
        <div className="grid grid-cols-1 mx-4 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {projects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}
