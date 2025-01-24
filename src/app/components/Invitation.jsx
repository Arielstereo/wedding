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
      className={`${subtitle.className} antialiased h-screen flex flex-col justify-center items-center relative mx-2 sm:mx-8 mb-32`}
    >
      <h2 className="text-6xl md:text-8xl text-yellow-600 text-center mb-16">
        Invitación
      </h2>
      <Image
        src="/invite.jpg"
        alt="invitation-img"
        width={800}
        height={800}
        className="w-full h-fit lg:w-5/6 xl:w-3/4 xl:h-2/3 z-10 object-cover rounded-xl shadow-xl shadow-black"
      />
      <div className="text-white z-50 absolute lg:left-1/4 xl:left-[450px] mt-32">
        <h2 className="text-3xl md:text-6xl lg:text-7xl text-center mb-2 md:mb-6">
          Te invitamos a nuestra boda
        </h2>
        <div className="flex flex-col justify-center items-center md:gap-4 text-xl md:text-4xl">
          <p>20 de mayo de 2025</p>
          <p>Iglesia de San Pedro</p>
          <p>Confirma tu asistencia </p>
            <Link href="/confirm" className="underline underline-offset-2 text-yellow-500">
              Aquí
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
