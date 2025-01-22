import Carrousel from "./Carrousel"


const HistorySection = () => {
  return (
    <section id="history" className="h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl md:text-6xl text-yellow-600 font-semibold text-center">Nuestra historia</h2>
      <h2 className="block text-4xl md:text-6xl text-yellow-600 font-semibold text-center mb-16">de amor...</h2>
      <Carrousel />
    </section>
  )
}

export default HistorySection