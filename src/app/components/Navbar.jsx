import Link from "next/link"


const Navbar = () => {
  return (
    <nav className="hidden md:block absolute z-30 bg-black top-0 right-0 left-0">
      <ul className="w-full flex justify-center gap-4 md:gap-8 p-6">
        <li className="text-yellow-400 hover:text-white text-lg md:text-2xl">
          <Link href="/">Inicio</Link>
        </li>
        <li className="text-yellow-400 hover:text-white text-lg md:text-2xl">
          <Link href="#history">Historia</Link>
        </li>
        <li className="text-yellow-400 hover:text-white text-lg md:text-2xl">
          <Link href="#invitation">Invitación</Link>
        </li>
        <li className="text-yellow-400 hover:text-white text-lg md:text-2xl">
          <Link href="#">Galería</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar