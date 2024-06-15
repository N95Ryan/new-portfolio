import React from "react";
import SkillCard from "./SkillCard";
import skillsDetails from "./skillDetails";

export default function Skills() {
  const { techSkills, frontSkills, backSkills, mobileSkills, designSkills } = skillsDetails();

  const renderSkillCards = (skills) => {
    return skills.map((skill) => (
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
      <div id="skills" className="animate-fade-down animate-once animate-duration-[1300ms] mt-[10rem]">
        <h3 className="text-5xl font-semibold text-indigo-500 text-center mt-[3rem]">
          Mes skills
        </h3>
        <hr className="my-8 border-t border-indigo-700 w-1/2 mx-auto" />
      </div>

      <div className="my-6 animate-jump-in">
        <p className="text-white text-3xl text-center my-4">Langages</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mx-8 lg:mx-[20rem] gap-6">
          {renderSkillCards(techSkills)}
        </div>
      </div>

      <div className="my-6 animate-jump-in">
        <p className="text-white text-3xl text-center my-4">Front-end</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mx-8 lg:mx-[20rem] gap-6">
          {renderSkillCards(frontSkills)}
        </div>
      </div>

      <div className="my-6 animate-jump-in">
        <p className="text-white text-3xl text-center my-4">Back-end</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mx-8 lg:mx-[20rem] gap-6">
          {renderSkillCards(backSkills)}
        </div>
      </div>

      <div className="my-6 animate-jump-in">
        <p className="text-white text-3xl text-center my-4">Mobile</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mx-8 lg:mx-[20rem] gap-6">
          {renderSkillCards(mobileSkills)}
        </div>
      </div>

      <div className="my-6 animate-jump-in">
        <p className="text-white text-3xl text-center my-4">Conception graphique</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mx-8 lg:mx-[20rem] gap-6">
          {renderSkillCards(designSkills)}
        </div>
      </div>
    </>
  );
}
