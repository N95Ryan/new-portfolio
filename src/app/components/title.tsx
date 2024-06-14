import { FadeText } from "./magicui/fadeText";
import LetterPullUp from "./magicui/letterPullUp";

export function Title() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FadeText
        className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600"
        direction="down"
        text="Ryan PINA-SILASSE"
      />
      <LetterPullUp words="Dévelopeur Web Front-end" delay={0.1} />
    </div>
  );
}
