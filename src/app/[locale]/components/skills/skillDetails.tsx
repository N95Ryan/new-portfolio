import {
  SiJavascript,
  SiTypescript,
  SiGo,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiGit,
  SiDocker,
  SiPostman,
  SiGraphql,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
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

  const tools = [
    { key: "git", icon: <SiGit />, color: "#F05032" },
    { key: "docker", icon: <SiDocker />, color: "#2496ED" },
    { key: "postman", icon: <SiPostman />, color: "#FF6C37" },
    { key: "graphql", icon: <SiGraphql />, color: "#E10098" },
  ];

  const design = [
    { key: "figma", icon: <SiFigma />, color: "#F24E1E" },
    { key: "photoshop", icon: <SiAdobephotoshop />, color: "#31A8FF" },
    { key: "illustrator", icon: <SiAdobeillustrator />, color: "#FF9A00" },
  ];

  return { languages, frameworks, tools, design };
}

export default skillsDetails;
