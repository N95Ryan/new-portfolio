"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-4 px-4 md:px-8 lg:px-12">
      <div className="md:hidden flex justify-end items-center self-end mx-4 my-2">
        <div onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-10 w-10 text-white cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      <ul className="hidden md:flex justify-end space-x-6 text-xl font-medium text-white">
        <li>
          <Link
            href="/"
            className="hover:text-purple-600 transition duration-300"
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="hover:text-purple-600 transition duration-300"
          >
            Réalisations
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-purple-600 transition duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-zinc-900 rounded-lg p-6 w-92 text-center">
          <div className="flex my-2 justify-end" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-white cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6L18 18M6 18L18 6"
                  />
                </svg>
              </div>

            <div className="flex justify-center">
              <p className="text-xl font-extralight text-white opacity-25">
                Où souhaitez-vous aller ?
              </p>
            </div>
            <ul className="space-y-4 text-lg font-light text-white my-4">
              <li>
                <Link
                  href="/"
                  className="block hover:text-purple-600 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="block hover:text-purple-600 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Mes réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block hover:text-purple-600 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
