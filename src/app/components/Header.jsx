import Image from "next/image"
import {Cinzel_Decorative, Great_Vibes} from 'next/font/google';
import 'animate.css';

const title = Cinzel_Decorative({
  subsets: ["latin"],
  weight: "700",
});

const subtitle = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <header className="relative w-full h-screen">
      <div className={`${title.className} antialiased absolute top-1/4 left-14 md:left-32 z-20 flex flex-col gap-1 text-yellow-500 text-6xl md:text-8xl text-center`}>
        <span className="animate__animated animate__backInDown">Romeo</span>
        <span className="animate__animated animate__backInLeft">&</span>
        <span className="animate__animated animate__backInRight">Julieta</span>
      <div className="mt-6">
        <p className={`${subtitle.className} antialiased text-4xl md:text-6xl text-white animate__animated animate__bounceInRight`}>Celebramos nuestra boda</p>
      </div>
      <div className="flex justify-center items-center gap-4 mt-6 text-2xl md:text-3xl text-slate-900 animate-pulse">
        <span className="bg-yellow-400 rounded-lg p-2 shadow-sm shadow-white">20</span>
        <span className="bg-yellow-400 rounded-lg p-2 shadow-sm shadow-white">05</span>
        <span className="bg-yellow-400 rounded-lg p-2 shadow-sm shadow-white">2025</span>
      </div>
      </div>
      <Image src="/back.webp" alt="header-img" width={800} height={800} className="header-img w-full h-screen lg:h-full z-10 object-cover object-[60%]" />
    </header>
  )
}

export default Header