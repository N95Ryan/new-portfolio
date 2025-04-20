import {
  SiGithub,
  SiLinkedin,
  SiBluesky,
  SiFiverr,
  SiVercel,
  SiMalt,
} from "react-icons/si";

import { TbBrandFiverr } from "react-icons/tb";

const SocialMedia = () => {
  return (
    <div>
      <div className="flex items-center space-x-4 bg-white rounded px-6 py-4">
        <a
          className="icon"
          href="https://github.com/N95Ryan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub
            className="text-3xl text-black hover:text-gray-600 transition duration-300"
            title="Github"
          />
        </a>

        <a
          className="icon"
          href="https://www.linkedin.com/in/ryan-pina-silasse/"
          hrefLang="fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinkedin
            className="text-3xl text-black hover:text-gray-600 transition duration-300"
            title="LinkedIn"
          />
        </a>

        <a
          className="icon"
          href="https://bsky.app/profile/n95ryan.bsky.social"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiBluesky
            className="text-3xl text-black hover:text-gray-600 transition duration-300"
            title="BlueSky"
          />
        </a>

        <a
          className="icon"
          href="https://fr.fiverr.com/n95_ryan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TbBrandFiverr
            className="text-3xl text-black hover:text-gray-600 transition duration-300"
            title="Fiverr"
          />
        </a>

        <a
          className="icon"
          href="https://www.malt.fr/profile/ryanpinasilasse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiMalt
            className="text-3xl text-black hover:text-gray-600 transition duration-300"
            title="Malt"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
