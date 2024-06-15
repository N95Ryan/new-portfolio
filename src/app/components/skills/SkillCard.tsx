import React from "react";

interface SkillCardProps {
  title: string;
  icon: string;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon, color }) => (
  <div className="bg-gray-800 hover:bg-opacity-50 p-4 text-white rounded-xl flex flex-col items-center space-y-2 transition duration-300 w-full sm:w-64 h-48" >
    <div className="text-white text-2xl font-semibold">{title}</div>
    <div className="text-white text-8xl" style={{ color: color }}>{icon} </div>
  </div>
);

export default SkillCard;