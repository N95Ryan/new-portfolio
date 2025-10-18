interface SkillData {
  key: string;
  color: string;
}

interface SkillsCollection {
  languages: SkillData[];
  frameworks: SkillData[];
  mobile: SkillData[];
  database: SkillData[];
  tools: SkillData[];
}

function SkillsDetails(): SkillsCollection {
  return {
    languages: [
      { key: "typescript", color: "#007acc" },
      { key: "golang", color: "#00acd7" },
      { key: "python", color: "#FFE873" },
    ],
    frameworks: [
      { key: "react", color: "#61DAFB" },
      { key: "nextjs", color: "#fff" },
      { key: "astro", color: "#e93dc9" },
      { key: "nodedotjs", color: "#539e43" },
      { key: "gin", color: "#00acd7" },
    ],
    mobile: [
      { key: "reactNative", color: "#61DAFB" },
      { key: "expo", color: "#fff" },
    ],
    database: [
      { key: "postgresql", color: "#336791" },
      { key: "mongodb", color: "#4DB33D" },
      { key: "supabase", color: "#3ECF8E" },
    ],
    tools: [
      { key: "vite", color: "#FFD700" },
      { key: "graphql", color: "#E10098" },
      { key: "vercel", color: "#fff" },
      { key: "docker", color: "#2496ED" },
      { key: "postman", color: "#FF6C37" },
    ],
  };
}

export default SkillsDetails;
