import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Photo from "../../components/photo";

export default function HomeBody() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center italic">
        <img
          src="fondo2.jpg"
          alt="Fondo"
          className="w-full h-[330px] lg:h-[750px] opacity-90 object-cover object-left-top"
        />
        <div className="absolute inset-0 flex mt-[100px] lg:mt-[150px] lg:ml-[300px] m-4 md:m-10">
          <div className="flex flex-col ml-4 md:ml-8 lg:ml-16">
            <img
              src="logo.webp"
              alt="Imagen"
              className="w-full md:w-3/4 lg:w-1/2 h-auto"
              loading="lazy"
            />

            <h1
              data-aos="fade-up"
              className="text-white ml-2 md:ml-4 text-2xl md:text-3xl lg:mt-[20px] lg:text-4xl mt-2 md:mt-4 italic"
            >
              ¡Eleva tu techo, ilumina tu mundo con paneles solares!
            </h1>
          </div>
        </div>

        <div className="flex flex-col w-full items-center justify-center px-4 lg:px-[74px] italic">
          <div
            data-aos="fade-up"
            className="mt-4 md:mt-8 text-2xl md:text-3xl lg:text-4xl font-bold"
          >
            Energía Solar
          </div>

          <div data-aos="fade-up" className="mt-2 md:mt-4">
            El Futuro en tus Manos con Nuestros Kit Ongrid, Offgrid e Híbrido
          </div>

          <div data-aos="fade-up" className="mt-2 md:mt-4">
            En el mundo actual, donde la sostenibilidad y el ahorro son
            fundamentales, la elección de instalar paneles solares es una
            decisión que no solo transformará tu vida, sino que también tendrá
            un impacto positivo en nuestro planeta. En nuestra empresa, estamos
            comprometidos a hacer esta transición tan sencilla y beneficiosa
            como sea posible para ti, y aquí te presentamos algunos kit
            fundamentales que podrías
          </div>

          <div data-aos="fade-up">instalar con nosotros:</div>

          <div className="mt-2 md:mt-4 w-full">
            <img
              data-aos="fade-up"
              src="kit.webp"
              alt="Imagen"
              loading="lazy"
              className="w-full h-auto object-cover object-center"
            />
          </div>

          <div className="mt-2 md:mt-4 w-full">
            <img
              data-aos="fade-up"
              src="kit2.webp"
              alt="Imagen"
              loading="lazy"
              className="w-full h-auto object-cover object-center"
            />
          </div>

          <div className="mt-2 md:mt-4 w-full">
            <img
              data-aos="fade-up"
              src="3erkit.webp"
              alt="Imagen"
              loading="lazy"
              className="w-full h-auto object-cover object-center"
            />
          </div>

          <div data-aos="fade-up" className="mt-4 md:mt-12 flex flex-wrap">
            <Photo
              data-aos="fade-up"
              texto="Sin sorpresas, en nuestros valores ya está todo incluido; trámites, certificaciones y autorizaciones"
              ruta="image1.PNG"
              title="Llave en Mano"
            />
            <Photo
              data-aos="fade-up"
              texto="Trabajamos con equipos y materiales de última generación en el rubro solar."
              ruta="image2.PNG"
              title="Calidad"
            />
            <Photo
              data-aos="fade-up"
              texto="Garantía de Instalación hasta 5 años (en conjunto con plan de mantenimiento anual)."
              ruta="image3.PNG"
              title="Garantía"
            />
            <Photo
              data-aos="fade-up"
              texto="La generación de energía es automática e inmediata una vez instalado tu kit solar. TRAMITACIÓN SEC A TÍTULO GRATUITO."
              ruta="image4.PNG"
              title="Despreocúpate"
            />
            <Photo
              data-aos="fade-up"
              texto="Sin importar las condiciones climatológicas, tus paneles solares siempre estarán generando energía eléctrica."
              ruta="image5.PNG"
              title="Producción Garantizada"
            />
          </div>

          <div
            data-aos="fade-up"
            className="mx-[20px] mt-4 md:mt-12 font-bold text-2xl md:text-3xl italic"
          >
            Puedes seleccionar el mejor kit para ti
          </div>

          <div data-aos="fade-up" className="mx-[20px]">
            Contamos con una amplia gama de paneles solares para cubrir todas
            tus necesidades de energía solar
          </div>

          <div className="relative pt-4 md:pt-8 px-4 md:px-8">
            <div className="flex flex-wrap justify-center items-center gap-3 lg:space-x-2 md:space-x-4">
              <div
                data-aos="fade-up"
                className="hover:bg-gray-500 bg-gray-300 bg-opacity-70 py-2 md:py-4 px-3 md:px-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              >
                <img
                  src="15.webp"
                  alt="Imagen 1"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <h2 className="text-center text-xl md:text-2xl font-bold mt-2">
                  Kit Ongrid
                </h2>
                <p className="text-center mt-2">
                  <Link to="/on-grid">Leer más</Link>
                </p>
              </div>

              <div
                data-aos="fade-up"
                className="hover:bg-gray-500 bg-gray-300 bg-opacity-70 py-2 md:py-4 px-1 md:px-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              >
                <img
                  src="16.webp"
                  alt="Imagen 2"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <h2 className="text-center text-xl md:text-2xl font-bold mt-2">
                  Kit Offgrid
                </h2>
                <p className="text-center mt-2">
                  <Link to="/off-grid">Leer más</Link>
                </p>
              </div>

              <div
                data-aos="fade-up"
                className="hover:bg-gray-500 bg-gray-300 bg-opacity-70 py-2 md:py-4 px-1 md:px-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"
              >
                <img
                  src="17.webp"
                  alt="Imagen 3"
                  className="w-full h-auto"
                  loading="lazy"
                />
                <h2 className="text-center text-xl md:text-2xl font-bold mt-2">
                  Kit Híbrido
                </h2>
                <p className="text-center mt-2">
                  <Link to="/hibrido">Leer más</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
