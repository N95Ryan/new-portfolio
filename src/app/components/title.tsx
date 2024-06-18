import { FadeText } from "./magicui/fadeText";
import LetterPullUp from "./magicui/letterPullUp";

export function Title() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-0">
      <FadeText
        className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 my-auto"
        direction="down"
        text="Ryan PINA-SILASSE"
      />
      <LetterPullUp words="Développeur Front-end" delay={0.1} />
    </div>
  );
}