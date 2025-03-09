"use client";
import React from "react";
import { useTranslations } from "next-intl";
import SkillCard from "./SkillCard";
import skillsDetails from "./skillDetails";

export default function Skills() {
  const t = useTranslations("skills");
  const { languages, frameworks, tools, design } = skillsDetails();

  type Skill = {
    key: string;
    icon: any;
    color: string;
  };

  const renderSkillCards = (skills: Skill[], category: string) => {
    return skills.map((skill: Skill) => (
      <SkillCard
        key={skill.key}
        title={t(`list.${category}.${skill.key}`)}
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
          {t("title")}
        </h3>
        <hr className="my-8 border-t border-indigo-700 w-1/2 mx-auto" />
      </div>

      <div className="my-6 animate-jump-in">
        <p className="text-white text-3xl text-center my-4">{t("languages")}</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mx-8 lg:mx-[20rem] gap-6">
          {renderSkillCards(languages, "languages")}
        </div>
      </div>

      <div className="my-6 animate-jump-in">
        <p className="text-white text-3xl text-center my-4">
          {t("frameworks")}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mx-8 lg:mx-[20rem] gap-6">
          {renderSkillCards(frameworks, "frameworks")}
        </div>
      </div>

      <div className="my-6 animate-jump-in">
        <p className="text-white text-3xl text-center my-4">{t("tools")}</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mx-8 lg:mx-[20rem] gap-6">
          {renderSkillCards(tools, "tools")}
        </div>
      </div>

      <div className="my-6 animate-jump-in">
        <p className="text-white text-3xl text-center my-4">{t("ux_ui")}</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mx-8 lg:mx-[20rem] gap-6">
          {renderSkillCards(design, "ux_ui")}
        </div>
      </div>
    </>
  );
}
