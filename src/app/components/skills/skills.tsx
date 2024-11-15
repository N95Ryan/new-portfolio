import React from "react";
import SkillCard from "./SkillCard";
import skillsDetails from "./skillDetails";

export default function Skills() {
  const { languages, frameworks, tools, design } = skillsDetails();

  type Skill = {
    title: string;
    icon: any;
    color: string;
  };

  const renderSkillCards = (skills: Skill[]) => {
    return skills.map((skill: Skill) => (
      <SkillCard
        key={skill.title}
        title={skill.title}
        icon={skill.icon}
        color={skill.color}
      />
    ));
  };

  return (
    <>
      <div
        id="skills"
        className="animate-fade-down animate-once animate-duration-[1300ms] mt-[5rem]"
      >
        <h3 className="text-5xl font-semibold text-indigo-500 text-center mt-[3rem]">
          Mes skills
        </h3>
        <hr className="my-8 border-t border-indigo-700 w-1/2 mx-auto" />
      </div>

      <div className="my-6 animate-jump-in">
        <p className="text-white text-3xl text-center my-4">Langages</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mx-8 lg:mx-[20rem] gap-6">
          {renderSkillCards(languages)}
        </div>
      </div>

      <div className="my-6 animate-jump-in">
        <p className="text-white text-3xl text-center my-4">
          Frameworks / Bibliothèques
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mx-8 lg:mx-[20rem] gap-6">
          {renderSkillCards(frameworks)}
        </div>
      </div>

      <div className="my-6 animate-jump-in">
        <p className="text-white text-3xl text-center my-4">Outils</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mx-8 lg:mx-[20rem] gap-6">
          {renderSkillCards(tools)}
        </div>
      </div>

      <div className="my-6 animate-jump-in">
        <p className="text-white text-3xl text-center my-4">Design</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mx-8 lg:mx-[20rem] gap-6">
          {renderSkillCards(design)}
        </div>
      </div>
    </>
  );
}
