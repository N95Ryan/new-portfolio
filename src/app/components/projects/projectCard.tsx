import Image from "next/image";

interface ProjectCardProps {
    project: {
        title: string;
        stack: string;
        description: string;
        image: string;
        link: string;
        bgcolor: string;
        textColor: string;
        id: string;
    };
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="flex flex-col items-center w-full max-w-xs mx-auto">
            <div>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={224}
                    quality={100}
                    className="rounded-t-xl"
                />
            </div>
            <div
                className="flex flex-col items-center w-full space-y-2 rounded-b-xl p-4"
                style={{ backgroundColor: project.bgcolor, color: project.textColor }}
            >
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-sm">{project.stack}</p>
                <p className="text-xs">{project.description}</p>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-800 transition text-white font-semibold text-lg rounded-xl"
                >
                    Lien
                </a>
            </div>
        </div>
    );
}
