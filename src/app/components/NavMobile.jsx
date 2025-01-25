"use client"

import Link from "next/link";
import { useState } from "react";
import "animate.css"

const NavMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="md:hidden fixed bg-transparent z-50 top-0 left-0 right-0 p-4 animate__animated animate__slideInDown animate__slower">
    <div>
      {/* Botón de menú */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-yellow-500 focus:outline-none"
      >
        {isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        )}
      </button>
    </div>
    {/* Menú desplegable */}
    {isMenuOpen && (
      <ul className="flex -mt-2 items-center justify-center gap-4 animate__animated animate__slideInDown animate__slower">
        <li className="text-yellow-500">
          <Link href="#header">Inicio</Link>
        </li>
        <li className="text-yellow-500">
          <Link href="#history">Historia</Link>
        </li>
        <li className="text-yellow-500">
          <Link href="#invitation">Invitación</Link>
        </li>
        <li className="text-yellow-500">
          <Link href="/gallery">Galeria</Link>
        </li>
      </ul>
    )}
  </nav>
  );
};

export default NavMobile;
