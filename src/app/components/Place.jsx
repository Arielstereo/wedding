import Maps from "./Maps";
import MapsResponsive from "./MapsResponsive";

const Place = () => {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen mt-32"
      id="place"
      data-aos="zoom-in-down"
      data-aos-duration="2000"
    >
      <h2 className="text-4xl md:text-6xl text-slate-900">
        Lugar del evento
      </h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-12 w-5/6 md:w-3/4">
        <Maps />
        <MapsResponsive />
        <div className="flex flex-col gap-2">
          <p className="font-medium">
            La ceremonia y la fiesta se llevarán a cabo en el salón de eventos
            <a
              href="https://janoseventos.com/viewVenue/kd5l5ricrjdhe6udr05u7v48"
              target="_blank"
              className="hover:text-yellow-600 underline underline-offset-2"
            >
              "Janos"
            </a>
            , ubicado en la av Larrazabal 557, CABA.
          </p>

          <p className="font-medium">
            El salón cuenta con estacionamiento propio y acceso para personas
            con movilidad reducida.
          </p>

          <p className="font-medium">
            La fiesta se llevará a caba el día 25-05-25 a las 22hs.
          </p>
          <div className="hidden md:flex gap-4 mt-6">
            <img
              className="w-1/2 md:w-1/4 shadow-lg shadow-black rounded-lg"
              src="/janos.jpeg"
              alt="janos"
            />
            <img
              className="w-1/2 md:w-1/4 shadow-lg shadow-black rounded-lg"
              src="/janos3.jpg"
              alt="janos"
            />
            <img
              className="w-1/2 md:w-1/4 shadow-lg shadow-black rounded-lg"
              src="/janos2.jpeg"
              alt="janos"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;
