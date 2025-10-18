"use client";

import React, { useMemo, useCallback, useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import SkillCard from "./SkillCard";
import skillsDetails from "./skillDetails";

interface Skill {
  key: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  category: string;
}

export default function Skills() {
  const t = useTranslations("skills");
  const [isHydrated, setIsHydrated] = useState(false);

  // Marquer que l'hydratation est complète
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const skillData = useMemo(() => skillsDetails(), []);

  const getSafeTranslation = useCallback(
    (key: string, fallback: string): string => {
      try {
        const translation = t(key);
        return translation === key ? fallback : translation;
      } catch (error) {
        if (process.env.NODE_ENV === "development") {
          console.warn(`Traduction manquante pour: ${key}`, error);
        }
        return fallback;
      }
    },
    [t]
  );

  // Créer les catégories une seule fois avec les traductions réelles
  const skillCategories: SkillCategory[] = useMemo(
    () => [
      {
        title: t("languages"),
        skills: skillData.languages,
        category: "languages",
      },
      {
        title: t("frameworks"),
        skills: skillData.frameworks,
        category: "frameworks",
      },
      {
        title: t("mobile"),
        skills: skillData.mobile,
        category: "mobile",
      },
      {
        title: t("database"),
        skills: skillData.database,
        category: "database",
      },
      {
        title: t("tools"),
        skills: skillData.tools,
        category: "tools",
      },
    ],
    [t, skillData]
  );

  const renderSkillCards = useCallback(
    (skills: Skill[], category: string) => {
      return skills.map((skill: Skill) => {
        const translationKey = `list.${category}.${skill.key}`;
        const title = getSafeTranslation(translationKey, skill.key);

        return (
          <SkillCard
            key={skill.key}
            title={title}
            icon={skill.icon}
            color={skill.color}
          />
        );
      });
    },
    [getSafeTranslation]
  );

  const renderedCategories = useMemo(
    () =>
      skillCategories.map((category) => (
        <div key={category.category} className="my-6 animate-jump-in">
          <p className="text-white text-3xl text-center my-4">
            {category.title}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mx-8 lg:mx-[20rem] gap-6">
            {renderSkillCards(category.skills, category.category)}
          </div>
        </div>
      )),
    [skillCategories, renderSkillCards]
  );

  // Ne pas afficher le contenu jusqu'à l'hydratation
  if (!isHydrated) {
    return null;
  }

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
      {renderedCategories}
    </>
  );
}
