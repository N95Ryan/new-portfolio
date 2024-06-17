/* eslint-disable react/no-unescaped-entities */
export default function AboutInfos() {
  return (
    <div className="flex flex-col items-center justify-center md:w-1/2 mx-6 animate-fade-left animate-once animate-duration-[1300ms]">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Je me présente :</h2>
      <div className="text-white text-base sm:text-lg mb-8 w-full sm:w-auto">
        <ul>
          <li className="flex items-start">
            <span className="text-indigo-400 mr-2 sm:text-xl">•</span>
            Nom : Ryan PINA-SILASSE
          </li>
          <li className="flex items-start">
            <span className="text-indigo-400 mr-2 sm:text-xl">•</span>
            Âge : 23 ans
          </li>
          <li className="flex items-start">
            <span className="text-indigo-400 mr-2 sm:text-xl">•</span>
            Localisation : Paris, Île-De-France, France
          </li>
        </ul>
      </div>
      <p className="text-white text-base sm:text-lg mb-4 w-full sm:w-auto">
        Fasciné par les nouvelles technologies, ma nature curieuse me pousse à
        explorer constamment les nouveaux horizons dans ce domaine. <br/> <br/>
        Cette soif de découverte m’a permis d'aquérir des compétences dans le développement
        web et dans le numérique de manière plus globale.<br/> <br/>
      </p>    
    </div>
  );
}