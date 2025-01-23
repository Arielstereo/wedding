"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Carrousel = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-3/4">
      <Slider {...settings}>
        <div className="px-2">
          <Image
            src="/slider/1.jpg"
            alt="back"
            width={800}
            height={800}
            className="h-[250px] w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2">
          <Image
            src="/slider/2.jpg"
            alt="back"
            width={800}
            height={800}
            className="h-[250px] w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2">
          <Image
            src="/slider/3.jpg"
            alt="back"
            width={800}
            height={800}
            className="h-[250px] w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2">
          <Image
            src="/slider/4.jpg"
            alt="back"
            width={800}
            height={800}
            className="h-[250px] w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2">
          <Image
            src="/slider/5.jpg"
            alt="back"
            width={800}
            height={800}
            className="h-[250px] w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2">
          <Image
            src="/slider/6.jpg"
            alt="back"
            width={800}
            height={800}
            className="h-[250px] w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2">
          <Image
            src="/slider/7.jpg"
            alt="back"
            width={800}
            height={800}
            className="h-[250px] w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2">
          <Image
            src="/slider/8.jpg"
            alt="back"
            width={800}
            height={800}
            className="h-[250px] w-full object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="px-2">
          <Image
            src="/slider/9.jpg"
            alt="back"
            width={800}
            height={800}
            className="h-[250px] w-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
