"use client"

import { useEffect, useState } from "react";


const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Obtiene la posición actual de desplazamiento
      const headerHeight = 200; // Ajusta según la altura de tu header
      setIsVisible(scrollPosition > headerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div className="bg-slate-50 hover:bg-slate-900 transition text-black shadow-xl rounded-full py-3 px-4 fixed bottom-3 md:bottom-5 right-4 md:right-8 cursor-pointer ">
        <button onClick={scrollToTop}>
          <span className="icon-[tabler--arrow-big-up-lines-filled] text-2xl md:text-3xl animate-pulse hover:text-white"></span>
        </button>
      </div>
    )
  );
};

export default UpButton;
