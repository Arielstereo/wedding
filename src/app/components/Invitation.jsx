import { Great_Vibes } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const subtitle = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

const Invitation = () => {
  return (
    <section
      id="invitation"
      className={`${subtitle.className} antialiased h-screen flex flex-col relative justify-center items-center`}
    >
      <div>
        <Image
          src="/flower.png"
          alt="flower"
          width={800}
          height={800}
          className="w-64 md:w-96 object-cover absolute top-32 md:top-0 left-0 right-0 mx-auto"
        />
        <div className="text-slate-900 absolute top-56 md:top-32 left-0 right-0 mx-1 z-10">
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-center mb-6">
            Te invitamos a nuestra boda
          </h2>
          <div className="flex flex-col justify-center items-center md:gap-4 text-2xl md:text-4xl">
            <p>20 de mayo de 2025</p>
            <p>Iglesia de San Pedro | 20hs</p>
            <p>Salón Janos Liniers | 22hs</p>
            <p>Confirma tu asistencia en el siguiente link ... </p>
            <Link
              href="/confirm"
              className="underline underline-offset-2 text-yellow-600 hover:text-yellow-800"
            >
              Ingresar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
