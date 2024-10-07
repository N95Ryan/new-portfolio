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
            Localisation : Paris, Île-De-France, France
          </li>
        </ul>
      </div>
      <p className="text-white text-base sm:text-lg mb-4 w-full sm:w-auto">
        Fasciné par les innovations technologiques, mon esprit curieux me pousse
        à toujours explorer de nouvelles choses. <br /> <br />
        Au cours de ma carrière, j'ai pu développé un large éventail de
        compétences, tant techniques qu'humaines, qui me permettent de m'adapter
        rapidement et de concevoir des solutions digitales innovantes,
        performantes et centrées sur l'utilisateur. <br />
        <br />
        Fort de mes expériences sur des projets variés et stimulants, je reste
        animé par un désir constant d'apprentissage et d'innovation. <br />{" "}
        <br />
        Que vous ayez besoin de transformer des idées en projets concrets ou
        d'une collaboration créative et efficace, je serais prêt à relever vos
        défis. <br /> <br />
      </p>
    </div>
  );
}
