"use client";

import React, { useMemo } from "react";
import {
  SiTypescript,
  SiGo,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiNodedotjs,
  SiGin,
  SiExpo,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiPostman,
  SiGraphql,
  SiPython,
  SiMongodb,
  SiVite,
} from "react-icons/si";

interface SkillData {
  key: string;
  icon: React.ReactNode;
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
  // Utiliser useMemo pour s'assurer que les icônes sont créées une seule fois
  const skills = useMemo(
    () => ({
      languages: [
        { key: "typescript", icon: <SiTypescript />, color: "#007acc" },
        { key: "golang", icon: <SiGo />, color: "#00acd7" },
        { key: "python", icon: <SiPython />, color: "#FFE873" },
      ],
      frameworks: [
        { key: "react", icon: <SiReact />, color: "#61DAFB" },
        { key: "nextjs", icon: <SiNextdotjs />, color: "#fff" },
        { key: "astro", icon: <SiAstro />, color: "#e93dc9" },
        { key: "nodedotjs", icon: <SiNodedotjs />, color: "#539e43" },
        { key: "gin", icon: <SiGin />, color: "#00acd7" },
      ],
      mobile: [
        { key: "reactNative", icon: <SiReact />, color: "#61DAFB" },
        { key: "expo", icon: <SiExpo />, color: "#fff" },
      ],
      database: [
        { key: "postgresql", icon: <SiPostgresql />, color: "#336791" },
        { key: "mongodb", icon: <SiMongodb />, color: "#4DB33D" },
        { key: "supabase", icon: <SiSupabase />, color: "#3ECF8E" },
      ],
      tools: [
        { key: "vite", icon: <SiVite />, color: "#FFD700" },
        { key: "graphql", icon: <SiGraphql />, color: "#E10098" },
        { key: "docker", icon: <SiDocker />, color: "#2496ED" },
        { key: "postman", icon: <SiPostman />, color: "#FF6C37" },
      ],
    }),
    []
  );

  return skills;
}

export default SkillsDetails;
