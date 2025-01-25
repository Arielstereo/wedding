"use client";

import { useState } from "react";
import BackButton from "../components/BackButton";
import Image from "next/image";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const images = [
    "/galery/1.jpg",
    "/galery/2.jpg",
    "/galery/3.jpg",
    "/galery/4.jpg",
    "/galery/5.jpg",
    "/galery/6.jpg",
    "/galery/7.jpg",
    "/galery/8.jpg",
    "/galery/9.jpg",
  ];

  return (
    <div className="flex flex-col items-center mt-32 h-screen">
      <BackButton />
      <h2 className="text-center text-slate-900 text-4xl font-bold md:text-5xl mb-4">
        Galeria de fotos
      </h2>
      <span className="text-yellow-600 text-base font-semibold block mb-8 w-fit px-4 text-center">
        Gracias por venir y compartir con nosotros estos momentos inolvidables.
      </span>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-3/4">
        {images.map((src) => (
          <Image
            key={src}
            src={src}
            alt={`Image ${src}`}
            width={600}
            height={600}
            className="rounded-lg shadow-lg object-cover h-full cursor-pointer transform hover:scale-105 transition-transform"
            onClick={() => handleImageClick(src)}
            title="Haz click para ampliar"
          />
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-20 z-50">
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Selected"
              width={600}
              height={600}
              className="rounded-lg shadow-lg w-[320px] md:w-[1200px] h-[500px] md:h-[600px] object-cover"
            />
            <button
              className="absolute top-2 right-2 text-white text-xl hover:text-2xl font-black w-12 h-12 bg-slate-800 rounded-full hover:bg-slate-700 flex items-center justify-center transform hover:scale-105 transition-transform"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
