import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
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
    {
      title: "HTML5",
      icon: <SiHtml5 />,
      color: "#e34c26",
    },

    {
      title: "CSS3",
      icon: <SiCss3 />,
      color: "#2965f1",
    },

    {
      title: "JavaScript",
      icon: <SiJavascript />,
      color: "#F7DF1E",
    },
    {
      title: "TypeScript",
      icon: <SiTypescript />,
      color: "#007acc",
    },
  ];

  const frameworks = [
    {
      title: "React",
      icon: <SiReact />,
      color: "#61DAFB",
    },

    {
      title: "Next.js",
      icon: <SiNextdotjs />,
      color: "#fff",
    },

    {
      title: "Tailwind",
      icon: <SiTailwindcss />,
      color: "#06B6D4",
    },

    {
      title: "shadcn/ui",
      icon: <SiShadcnui />,
      color: "#fff",
    },
  ];

  const tools = [
    {
      title: "Git",
      icon: <SiGit />,
      color: "#F05032",
    },

    {
      title: "Docker",
      icon: <SiDocker />,
      color: "#2496ED",
    },

    {
      title: "Postman",
      icon: <SiPostman />,
      color: "#FF6C37",
    },

    {
      title: "GraphQL",
      icon: <SiGraphql />,
      color: "#E10098",
    },
  ];

  const design = [
    {
      title: "Figma",
      icon: <SiFigma />,
      color: "#F24E1E",
    },

    {
      title: "Photoshop",
      icon: <SiAdobephotoshop />,
      color: "#31A8FF",
    },

    {
      title: "Illustrator",
      icon: <SiAdobeillustrator />,
      color: "#FF9A00",
    },
  ];

  return { languages, frameworks, tools, design };
}

export default skillsDetails;
