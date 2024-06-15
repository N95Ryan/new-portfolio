import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap, SiGraphql, SiMysql, SiNodedotjs, SiAdobephotoshop, SiAdobeillustrator, SiFigma, SiCanva, SiExpo } from "react-icons/si";
import { BiLogoGoLang } from "react-icons/bi";

function skillsDetails() {
  const techSkills = [
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
      title: "Go",
      icon: <BiLogoGoLang />,
      color: "#00ADD8",
    },
  ];

  const frontSkills = [
    {
      title: "React.js",
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
      title: "Bootstrap",
      icon: <SiBootstrap />,
      color: "#7952B3",
    },
  ];

  const backSkills = [
    {
      title: "GraphQL",
      icon: <SiGraphql />,
      color: "#E10098",
    },
    {
      title: "Node.js",
      icon: <SiNodedotjs />,
      color: "#339933",
    },
    {
      title: "MySQL",
      icon: <SiMysql />,
      color: "#4479A1",
    },
  ];

  const mobileSkills = [
    {
      title: "React Native",
      icon: <SiReact />,
      color: "#61DAFB",
    },
    {
      title: "Expo",
      icon: <SiExpo />,
      color: "#ffffff",
    },
  ];

  const designSkills = [
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
    {
      title: "Figma",
      icon: <SiFigma />,
      color: "#F24E1E",
    },
    {
      title: "Canva",
      icon: <SiCanva />,
      color: "#00C4CC",
    },
  ];

  return { techSkills, frontSkills, backSkills, mobileSkills, designSkills };
}

export default skillsDetails;