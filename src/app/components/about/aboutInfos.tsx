/* eslint-disable react/no-unescaped-entities */
export default function AboutInfos() {
  return (
    <div className="flex flex-col items-center justify-center md:w-1/2 mx-6 animate-fade-left animate-once animate-duration-[1300ms]">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
        Je me présente :
      </h2>
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
        Fasciné par les avancées technologiques, mon esprit curieux me pousse à
        toujours explorer de nouvelles perspectives dans ce domaine. <br/> <br/>
        Grâce à ma volonté de découvrir, j'ai pu développer mes compétences dans le domaine
        du web et du numérique de manière plus étendue. <br/> <br/>
        Ma capacité à m'adapter et mon désir constant d'apprendre m'ont permis de concevoir et de
        participer à différents projets variés et stimulants. <br/> <br/>
        Grâce à cette combinaison de compétences, je suis en mesure de proposer des solutions
        novatrices dans différentes collaborations, ce qui fait de moi un allié
        privilégié.{" "}
      </p>
    </div>
  );
}
