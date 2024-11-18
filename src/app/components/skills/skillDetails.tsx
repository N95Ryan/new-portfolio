import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiPostman,
  SiGraphql,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
} from "react-icons/si";
import { BiLogoGoLang } from "react-icons/bi";
import { FaPython } from "react-icons/fa";

function skillsDetails() {
  const languages = [
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

    {
      title: "Python",
      icon: <FaPython />,
      color: "#3776AB",
    },

    {
      title: "Go",
      icon: <BiLogoGoLang />,
      color: "#00ADD8",
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
      title: "Bootstrap",
      icon: <SiBootstrap />,
      color: "#7952B3",
    },

    {
      title: "Tailwind",
      icon: <SiTailwindcss />,
      color: "#06B6D4",
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
