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
            Âge : 24 ans
          </li>
          <li className="flex items-start">
            <span className="text-indigo-400 mr-2 sm:text-xl">•</span>
            Localisation : Paris, France
          </li>
        </ul>
      </div>
      <p className="text-white text-base sm:text-lg mb-4 w-full sm:w-auto">
        Depuis mon plus jeune âge, je baigne dans la technologie, une passion
        qui m’a naturellement conduit vers une carrière dans ce domaine. <br />
        Aujourd'hui développeur web de profession, mon parcours et ma curiosité
        m’ont permis de cultiver des compétences techniques, tout en nourrissant
        ma créativité. <br /> <br />
        J’ai toujours soif d’apprendre et de découvrir de nouvelles façons de
        faire ou de penser. Que ce soit en utilisant des outils telles que React
        et Next.js. Ou en élargissant mes horizons avec Golang pour tendre vers
        un rôle Fullstack. <br /> <br />
        L’innovation est au cœur de mon quotidien.
        <br /> <br />
        Aujourd’hui, je suis en recherche d’un poste où je pourrais mettre mes
        compétences au service de projets ambitieux, tout en continuant à
        apprendre et à innover. <br /> <br />
        Disponible immédiatement, je suis prêt à transformer vos idées en
        solutions concrètes et impactantes !
      </p>
    </div>
  );
}
