import {
  SiJavascript,
  SiTypescript,
  SiGo,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiNodedotjs,
  SiGin,
  SiExpo,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiPostman,
  SiGraphql,
  SiVercel,
  SiPython,
  SiSwift,
} from "react-icons/si";

function SkillsDetails() {
  const languages = [
    { key: "javascript", icon: <SiJavascript />, color: "#F7DF1E" },
    { key: "typescript", icon: <SiTypescript />, color: "#007acc" },
    { key: "golang", icon: <SiGo />, color: "#00acd7" },
    { key: "python", icon: <SiPython />, color: "#FFE873" },
  ];

  const frameworks = [
    { key: "react", icon: <SiReact />, color: "#61DAFB" },
    { key: "nextjs", icon: <SiNextdotjs />, color: "#fff" },
    { key: "astro", icon: <SiAstro />, color: "#e93dc9" },
    { key: "nodedotjs", icon: <SiNodedotjs />, color: "#539e43" },
    // { key: "gin", icon: <SiGin />, color: "#00acd7" },
    // { key: "tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  ];

  const mobile = [
    { key: "reactNative", icon: <SiReact />, color: "#61DAFB" },
    { key: "expo", icon: <SiExpo />, color: "#fff" },
    { key: "swift", icon: <SiSwift />, color: "#F05138" },
  ];

  const database = [
    { key: "postgresql", icon: <SiPostgresql />, color: "#336791" },
    { key: "supabase", icon: <SiSupabase />, color: "#3ECF8E" },
  ];
  const tools = [
    { key: "graphql", icon: <SiGraphql />, color: "#E10098" },
    { key: "vercel", icon: <SiVercel />, color: "#fff" },
    { key: "postman", icon: <SiPostman />, color: "#FF6C37" },
    { key: "docker", icon: <SiDocker />, color: "#2496ED" },
  ];

  return { languages, frameworks, mobile, tools, database };
}

export default SkillsDetails;
