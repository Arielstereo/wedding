import { Great_Vibes } from "next/font/google";
import Carrousel from "./Carrousel"

const subtitle = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});


const HistorySection = () => {
  return (
    <section id="history" className={`${subtitle.className} h-screen flex flex-col justify-center items-center`}>
      <h2 className="text-6xl md:text-8xl text-yellow-600 text-center">Nuestra historia</h2>
      <h2 className="block text-6xl md:text-8xl text-yellow-600 text-center mb-16">de amor...</h2>
      <Carrousel />
    </section>
  )
}

export default HistorySection