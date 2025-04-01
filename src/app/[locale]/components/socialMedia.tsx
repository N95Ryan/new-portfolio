import { SiGithub, SiLinkedin, SiBluesky, SiVercel } from "react-icons/si";

import { GiWhiteBook } from "react-icons/gi";

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
          href="https://vercel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiVercel
            className="text-3xl text-black hover:text-gray-600 transition duration-300"
            title="Vercel"
          />
        </a>

        <a
          className="icon"
          href="https://www.myutaku.com/@Bignayru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GiWhiteBook
            className="text-3xl text-black hover:text-gray-600 transition duration-300"
            title="Myutaku"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
