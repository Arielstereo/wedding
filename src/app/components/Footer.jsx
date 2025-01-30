"use client";

import { Great_Vibes } from "next/font/google";
import { useClipboard } from "../hooks/useClipboard";

const subtitle = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  const { copiedText, copyToClipboard } = useClipboard();

  return (
    <div className="footer h-screen flex justify-center items-start">
      <div className="flex flex-col gap-8">
        <h2
          className={`${subtitle.className} text-center text-6xl lg:text-7xl font-black mt-32`}
        >
          Lista de Regalos
        </h2>
        <p className="w-full lg:w-1/2 lg:text-lg text-yellow-600 text-center mx-auto">
          ¡El gran día se acerca y estamos emocionados de compartirlo contigo!
          Tu presencia es el mejor regalo, pero si deseas apoyarnos con un
          obsequio, puedes usar el siguiente alias:
        </p>
        <div className="flex gap-4 mx-auto">
          <p className="text-lg lg:text-xl">nuestraboda.alias.mp</p>
          <button onClick={() => copyToClipboard("nuestraboda.alias.mp")}>
            {copiedText ? (
              <span className="icon-[material-symbols--check-circle] text-2xl mt-1 text-gray-700"></span>
            ) : (
              <span className="icon-[ion--copy] text-xl mt-1 text-gray-700 hover:text-gray-500"></span>
            )}
          </button>
        </div>
        {
          copiedText && <span className="text-2xl font-black text-center">Gracias 💞</span>
        }
      </div>
    </div>
  );
};

export default Footer;
