import {
  SiJavascript,
  SiTypescript,
  SiGo,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiGit,
  SiDocker,
  SiPostman,
  SiGraphql,
} from "react-icons/si";

function skillsDetails() {
  const languages = [
    { key: "javascript", icon: <SiJavascript />, color: "#F7DF1E" },
    { key: "typescript", icon: <SiTypescript />, color: "#007acc" },
    { key: "golang", icon: <SiGo />, color: "#29BEB0" },
  ];

  const frameworks = [
    { key: "react", icon: <SiReact />, color: "#61DAFB" },
    { key: "nextjs", icon: <SiNextdotjs />, color: "#fff" },
    { key: "tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { key: "shadcnui", icon: <SiShadcnui />, color: "#fff" },
  ];

  const database = [
    { key: "postgresql", icon: <SiPostgresql />, color: "#336791" },
    { key: "supabase", icon: <SiSupabase />, color: "#3ECF8E" },
    { key: "firebase", icon: <SiFirebase />, color: "#FFCA28" },
  ];
  const tools = [
    { key: "git", icon: <SiGit />, color: "#F05032" },
    { key: "docker", icon: <SiDocker />, color: "#2496ED" },
    { key: "postman", icon: <SiPostman />, color: "#FF6C37" },
    { key: "graphql", icon: <SiGraphql />, color: "#E10098" },
  ];

  return { languages, frameworks, tools, database };
}

export default skillsDetails;
