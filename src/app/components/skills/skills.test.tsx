import { render, screen } from "@testing-library/react";
import { Skill } from "./skills";

test("renders skill cards correctly", () => {
  const skills: Skill[] = [
    {
      title: "HTML",
      icon: <i className="fab fa-html5"></i>,
      color: "#E34C26",
    },
    {
      title: "CSS",
      icon: <i className="fab fa-css3-alt"></i>,
      color: "#1572B6",
    },
    {
      title: "JavaScript",
      icon: <i className="fab fa-js"></i>,
      color: "#F7DF1E",
    },
  ];

  render(renderSkillCards(skills));

  const skillCards = screen.getAllByTestId("skill-card");
  expect(skillCards).toHaveLength(skills.length);

  skills.forEach((skill, index) => {
    const skillCard = skillCards[index];
    expect(skillCard).toHaveTextContent(skill.title);
    expect(skillCard).toContainHTML(skill.icon);
    expect(skillCard).toHaveStyle({ backgroundColor: skill.color });
  });
});