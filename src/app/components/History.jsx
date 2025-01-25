"use client";

import { Great_Vibes } from "next/font/google";
import Carrousel from "./Carrousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const subtitle = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const History = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      data-aos="zoom-in"
      data-aos-duration="2000"
      id="history"
      className={`${subtitle.className} h-screen flex flex-col items-center justify-center `}
    >
      <h2 className="text-6xl md:text-8xl text-slate-900 text-center mt-48 ">
        Nuestra historia
      </h2>
      <h2 className="block text-6xl md:text-8xl text-slate-900 text-center mb-16">
        de amor...
      </h2>
      <Carrousel />
    </section>
  );
};

export default History;
