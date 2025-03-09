export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
      <div className="w-screen bg-[#070707] text-center overflow-hidden">
        <div className="text-sm font-extralight p-4 text-center text-surface dark:text-white">
          ©{currentYear} Copyright :
          <a href="https://ryan-pina.com/" rel="noopener noreferrer"> Ryan Pina-Silasse</a>
        </div>
      </div>
    );
}